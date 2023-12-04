'use client';

import { useState } from 'react';
import { Menu } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getData, updateData } from '@/Services/ApiCalls';
import Modal from '../Modal/Modal';
export interface IProgramCard {
  id: string;
  title: string;
  applicantsNum: number;
  deadline?: string;
  options: {
    id: number;
    label: string;
  }[];
}

const ProgramCard = ({
  id,
  title,
  applicantsNum,
  deadline,
  options,
}: IProgramCard) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const pathname = usePathname();
  const path = pathname.split('/');

  const { data: programData } = useQuery({
    queryKey: [id, showOptions],
    queryFn: async () => {
      const data = await getData(`programs/${id}`);

      return data;
    },
  });

  const { mutate, error, isSuccess } = useMutation({
    mutationFn: async (status: string) => {
      const data = await updateData(`programs/${id}`, {
        ...programData,
        status: status,
      });
      return data;
    },
  });

  const handleCloseApp = () => {
    mutate('close');
    if (isSuccess) {
      setMessage('Application closed successfully');
      setIsOpen(true);
    }
    if (error) {
      setIsOpen(true);
      setMessage('Something went wrong, Please try again');
    }
  };

  const handleOpenApp = () => {
    mutate('open');
    if (isSuccess) {
      setIsOpen(true);
      setMessage('Application opened successfully');
    }
    if (error) {
      setIsOpen(true);
      setMessage('Something went wrong, Please try again');
    }
  };

  return (
    <>
      <div className="bg-white flex justify-between gap-2 pt-5 pb-7 px-6 w-full">
        <h1 className=" font-semibold w-[165px]">{title}</h1>
        <h1 className=" font-semibold w-[170px]">{applicantsNum}</h1>
        {deadline && <h1 className=" font-semibold w-[170px]">{deadline}</h1>}
        <div className="relative">
          <button type="button" onClick={() => setShowOptions((prev) => !prev)}>
            <Image src={Menu} alt="menu" />
          </button>
          <div
            className={`absolute top-[10px]   bg-[#252531] text-white ${
              showOptions ? 'flex' : 'hidden'
            } -top-[10px] right-[20px]  flex-col  items-start rounded-lg w-max`}
          >
            <button
              className="block px-4 py-2  font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white"
              onClick={() => {
                handleCloseApp();
                setShowOptions((prev) => !prev);
              }}
            >
              {options[0].label}
            </button>
            <Link href={`${path[2] ? path[2] : path[1]}/${id}`}>
              <button className="block px-4 py-2  font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                {options[1].label}
              </button>
            </Link>
            <button
              className="block px-4 py-2  font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white"
              onClick={() => {
                handleOpenApp();
                setShowOptions((prev) => !prev);
              }}
            >
              {options[2].label}
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} message={message} onClose={setIsOpen} />
    </>
  );
};

export default ProgramCard;
