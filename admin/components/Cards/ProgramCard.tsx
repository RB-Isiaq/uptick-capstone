'use client';

import { useState } from 'react';
import { Menu } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getData, updateData } from '@/Services/ApiCalls';
import Modal from '../Modal/Modal';
interface IProgramCard {
  id: number | string;
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

  console.log(id);

  const { data: programData } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const data = await getData(`programs/${id}`);

      return data;
    },
  });

  console.log(programData);

  const { mutate, data, error, isSuccess } = useMutation({
    mutationFn: async (status: string) => {
      const data = await updateData(`programs/${id}`, {
        ...programData,
        status: status,
      });
      return data;
    },
  });

  const handleCloseApp = (id: string | number) => {
    console.log(`${id} closed`);
    mutate('close');
    if (isSuccess) {
      setMessage('Application closed successfully');
      setIsOpen(true);
      console.log('updated for real');
    }
    if (error) {
      setIsOpen(true);
      setMessage('Something went wrong, Please try again');
    }
    console.log(`${id} end`);
  };

  const handleOpenApp = (id: string | number) => {
    console.log(`${id} opened`);
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

  console.log(data);
  console.log(message, isOpen, 'THIRD');

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
            className={`absolute top-[10px]   bg-white text-black ${
              showOptions ? 'flex' : 'hidden'
            } -top-[10px] right-[20px] px-2 w-[156px] flex-col items-start`}
          >
            <button
              className="font-medium hover:bg-[#F0F0F0] focus:bg-[#F0F0F0] px-1 py-1 w-full"
              onClick={() => {
                handleCloseApp(id);
                setShowOptions((prev) => !prev);
              }}
            >
              {options[0].label}
            </button>
            <Link
              href={`${path[2] ? path[2] : path[1]}/${id}`}
              className="w-full "
            >
              <button className="font-medium hover:bg-[#F0F0F0] focus:bg-[#F0F0F0] px-1  py-1">
                {options[1].label}
              </button>
            </Link>
            <button
              className="font-medium hover:bg-[#F0F0F0] focus:bg-[#F0F0F0] px-1 py-1 w-full"
              onClick={() => {
                handleOpenApp(id);
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
