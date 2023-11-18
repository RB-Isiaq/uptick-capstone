import {
  BLOG,
  DASHBOARD,
  D_ICON,
  JOBS,
  LOGO,
  LOGOUT,
  PROGRAMS,
} from '@/public';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="bg-[#14141E] py-[37px] px-6 min-h-screen font-raleway w-[240px] flex-shrink-0 fixed">
      <Link href="/">
        <Image src={LOGO} alt="logo" />
      </Link>
      <div className="flex flex-col gap-[28px] mt-[51px]">
        <Link href="/dashboard" className="flex gap-2">
          <Image src={DASHBOARD} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Dashboard
          </p>
        </Link>

        <div className="relative group w-full">
          <button className="w-full  flex gap-2 items-center focus:outline-none">
            <Image src={PROGRAMS} alt="dashboard" width={24} height={24} />
            <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
              Programs
            </p>
            <div className="w-full flex justify-end ">
              <Image src={D_ICON} alt="dashboard" />
            </div>
          </button>
          <div className="absolute top-[10px]  hidden bg-[#252531] text-white group-hover:block group-hover:relative">
            <Link href="/programs/tech">
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                Talent Tech
              </p>
            </Link>
            <Link href="/programs/business">
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                Talent Business
              </p>
            </Link>
            <Link href="/programs/map">
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                Talent Map
              </p>
            </Link>
            <Link href="/programs/beginner">
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#2F2F3A] text-[#9A99A0] hover:text-white">
                Talent Beginners
              </p>
            </Link>
          </div>
        </div>

        <Link href="/jobs" className="flex gap-2">
          <Image src={JOBS} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Jobs
          </p>
        </Link>
        <Link href="/blogs" className="flex gap-2">
          <Image src={BLOG} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Blogs
          </p>
        </Link>
        <Link href="/" className="flex gap-2">
          <Image src={LOGOUT} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Logout
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
