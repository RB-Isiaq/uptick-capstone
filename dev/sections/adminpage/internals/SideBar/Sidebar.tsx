import { BLOG, DASHBOARD, JOBS, LOGO, LOGOUT, PROGRAMS } from '@/public';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="bg-[#14141E] py-[37px] px-6 min-h-screen font-raleway w-[240px]">
      <Link href="/">
        <Image src={LOGO} alt="logo" />
      </Link>
      <div className="flex flex-col gap-[28px] mt-[51px]">
        <Link href="/admin/dashboard" className="flex gap-2">
          <Image src={DASHBOARD} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Dashboard
          </p>
        </Link>

        <div className="relative group w-full">
          <button className=" flex gap-2 focus:outline-none">
            <Image src={PROGRAMS} alt="dashboard" width={24} height={24} />
            <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
              Programs
            </p>
          </button>
          <div className="absolute   hidden bg-[#9A99A0] text-white group-hover:block group-hover:relative">
            <Link href="/program/tech">
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#8D8D99]">
                Talent Tech
              </p>
            </Link>
            <Link href="/program/startup">
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#8D8D99]">
                Talent Business
              </p>
            </Link>
            <Link href="/program/beginner">
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#8D8D99]">
                Talent Map
              </p>
            </Link>
            <Link href="/program/beginner">
              <p className="block px-4 py-1 text-sm font-medium leading-[24px] hover:bg-[#8D8D99]">
                Talent Beginners
              </p>
            </Link>
          </div>
        </div>

        <Link href="/admin/jobs" className="flex gap-2">
          <Image src={JOBS} alt="dashboard" width={24} height={24} />
          <p className="text-[#8D8D99] text-sm font-semibold leading-[24px]">
            Jobs
          </p>
        </Link>
        <Link href="/admin/blogs" className="flex gap-2">
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
