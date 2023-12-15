'use client';

import { useState } from 'react';
import {
  BLOG,
  DASHBOARD,
  D_ICON,
  JOBS,
  LOGO,
  LOGOUT,
  PROGRAMS,
} from '@/public';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { initialState, storeAdmin } from '@/store/AdminReducer';
import Hamburger from '../Hamburger';
import { useScreen } from 'usehooks-ts';
const Sidebar = () => {
  const screen = useScreen();
  const isDesktop = screen && screen?.width >= 1024;

  const [isSidebarOpen, setSidebarOpen] = useState(isDesktop);
  const router = useRouter();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(storeAdmin(initialState));
    router.replace('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav
      className={` bg-[#14141E] py-[37px] px-6 min-h-screen font-raleway w-[240px] flex-shrink-0 fixed ${
        isSidebarOpen
          ? 'ml-0 translate-x-[0] ease-in transition-all'
          : '-ml-[240px] -translate-x-[100]   transition-all ease-out'
      } ease-in-out z-[100]`}
      data-testid="sidebar"
    >
      <Hamburger onClick={toggleSidebar} />
      <Link
        onClick={() => {
          !isDesktop && setSidebarOpen(!isSidebarOpen);
        }}
        href="/"
      >
        <Image src={LOGO} alt="logo" />
      </Link>
      <div className="flex flex-col gap-[24px] mt-[51px]">
        <Link
          onClick={() => {
            !isDesktop && setSidebarOpen(!isSidebarOpen);
          }}
          href="/dashboard"
          className="flex gap-2 hover:bg-[#2F2F3A] p-1 hover:border-t-[#477BFF] hover:border-t rounded-md"
        >
          <Image src={DASHBOARD} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Dashboard
          </p>
        </Link>

        <div className="relative group w-full">
          <button className="w-full  flex gap-2 items-center focus:outline-none hover:bg-[#2F2F3A] p-1 hover:border-t-[#477BFF] hover:border-t rounded-md">
            <Image src={PROGRAMS} alt="dashboard" width={24} height={24} />
            <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
              Programs
            </p>
            <div className="w-full flex justify-end ">
              <Image src={D_ICON} alt="dashboard" />
            </div>
          </button>
          <div className="absolute top-0  hidden bg-[#252531] text-white group-hover:block group-hover:relative">
            <Link
              onClick={() => {
                !isDesktop && setSidebarOpen(!isSidebarOpen);
              }}
              href="/programs/tech/"
            >
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                Talent Tech
              </p>
            </Link>
            <Link
              onClick={() => {
                !isDesktop && setSidebarOpen(!isSidebarOpen);
              }}
              href="/programs/business/"
            >
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                Talent Business
              </p>
            </Link>
            <Link
              onClick={() => {
                !isDesktop && setSidebarOpen(!isSidebarOpen);
              }}
              href="/programs/map/"
            >
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                Talent Map
              </p>
            </Link>
            <Link
              onClick={() => {
                !isDesktop && setSidebarOpen(!isSidebarOpen);
              }}
              href="/programs/beginner/"
            >
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                Talent Beginners
              </p>
            </Link>
          </div>
        </div>

        <Link
          onClick={() => {
            !isDesktop && setSidebarOpen(!isSidebarOpen);
          }}
          href="/jobs"
          className="flex gap-2 hover:bg-[#2F2F3A] p-1 hover:border-t-[#477BFF] hover:border-t rounded-md"
        >
          <Image src={JOBS} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Jobs
          </p>
        </Link>
        <Link
          onClick={() => {
            !isDesktop && setSidebarOpen(!isSidebarOpen);
          }}
          href="/blogs"
          className="flex gap-2 hover:bg-[#2F2F3A] p-1 hover:border-t-[#477BFF] hover:border-t rounded-md"
        >
          <Image src={BLOG} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Blogs
          </p>
        </Link>
        <button
          className="flex gap-2 hover:bg-[#2F2F3A] p-1 hover:border-t-[#477BFF] hover:border-t rounded-md"
          onClick={logout}
        >
          <Image src={LOGOUT} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Logout
          </p>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
