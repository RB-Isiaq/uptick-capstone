'use client';

import { useState } from 'react';
import { Menu } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteData, getData, updateData } from '@/Services/ApiCalls';
import Modal from '../Modal/Modal';
import { IProgramCard } from './ProgramCard';

const JobCard = ({
  id,
  title,
  applicantsNum,
  deadline,
  options,
  status,
}: IProgramCard) => {
  const queryClient = useQueryClient();
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const pathname = usePathname();
  const path = pathname.split('/');
  const { data: jobData } = useQuery({
    queryKey: ['jobspage'],
    queryFn: async () => {
      const data = await getData(`jobs/${id}/applications`);

      return data;
    },
  });

  const { mutate, error, isSuccess } = useMutation({
    mutationFn: async (status: string) => {
      const data = await updateData(`jobs/${id}`, {
        ...jobData,
        status: status,
      });
      return data;
    },
    onSuccess: (data) => {
      setMessage(data.message);
      setIsOpen(true);
    },
    onError: (error) => {
      console.error(error);
      setMessage(error.message);
      setIsOpen(true);
    },
  });

  const refetchData = async () => {
    await queryClient.invalidateQueries({ queryKey: ['jobs'] });
    await queryClient.refetchQueries({ queryKey: ['jobs'] });
  };

  const handleCloseApp = () => {
    mutate('close');
    if (isSuccess) {
      setIsOpen(true);
      setMessage('Application closed');
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
      setMessage('Application opened');
    }
    if (error) {
      setIsOpen(true);
      setMessage('Something went wrong, Please try again');
    }
  };
  const handleDeleteJob = async (id: string | number) => {
    try {
      const res = await deleteData(`jobs/${id} `);

      setIsOpen(true);
      setMessage(res.message);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      setIsOpen(true);
      setMessage('Something went wrong, Please try again');
    }
  };

  return (
    <>
      <div className="bg-white flex justify-between items-center gap-2 pt-5 pb-7 px-3 md:px-6 w-full">
        <h1 className=" font-semibold w-[165px]">{title}</h1>
        <h1 className=" font-semibold w-[170px]">{applicantsNum}</h1>
        <h1 className=" font-semibold w-[185px]">{deadline}</h1>
        <h1 className=" font-semibold w-[170px]">{status}</h1>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setShowOptions((prev) => !prev);
              refetchData();
            }}
          >
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
                refetchData();
              }}
            >
              {options[0].label}
            </button>
            <Link href={`${path[2] ? path[2] : path[1]}/${id}?title=${title}`}>
              <button className="block px-4 py-2  font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                {options[1].label}
              </button>
            </Link>
            <button
              className="block px-4 py-2  font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white"
              onClick={() => {
                handleOpenApp();
                refetchData();
                setShowOptions((prev) => !prev);
              }}
            >
              {options[2].label}
            </button>
            <button
              className="block px-4 py-2  font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white"
              onClick={() => {
                handleDeleteJob(id);
                refetchData();
                setShowOptions((prev) => !prev);
              }}
            >
              {options[3].label}
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} message={message} onClose={setIsOpen} />
    </>
  );
};

export default JobCard;
