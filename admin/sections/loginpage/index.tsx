import { LOGO } from '@/public';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="relative bg-[#070C19] flex flex-col justify-center items-center  px-3 lg:px-[60px] font-raleway py-10">
      <Image
        src={LOGO}
        alt="logo"
        className="absolute top-10 left-3 lg:left-10"
      />
      <form action="" className="w-full max-w-[475px] mt-20 mb-10">
        <h1 className="text-white text-2xl lg:text-[48px] font-bold mb-4">
          Welcome Back!
        </h1>
        <p className="text-white  font-medium">Login to continue</p>
        <div className="flex flex-col gap-5 w-full mb-5 mt-[30px]">
          <label className="text-white  font-medium" htmlFor="userId">
            User ID
          </label>
          <input
            className="w-full px-5 py-[18px] border rounded-lg border-[#4D4D4D] bg-[rgba(153,153,153,0.11)]"
            type="text"
            placeholder="User Id"
          />
        </div>
        <div className="flex flex-col gap-5 w-full mb-5">
          <label className="text-white  font-medium" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-5 py-[18px] border rounded-lg border-[#4D4D4D] bg-[rgba(153,153,153,0.11)]"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col gap-5 w-full ">
          <label className="text-white  font-medium" htmlFor="userId">
            Password
          </label>
          <input
            className="w-full px-5 py-[18px] border rounded-lg border-[#4D4D4D] bg-[rgba(153,153,153,0.11)]"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center gap-2 mb-[55px] mt-2">
          <input type="checkbox" id="check" />
          <label className="text-[#808080] text-sm font-medium" htmlFor="check">
            Remember Me
          </label>
        </div>
        <button
          className="flex justify-center items-center px-5 py-[14px] gap-[11px] rounded-lg bg-[#477BFF] text-white w-full"
          type="submit"
        >
          Log In
        </button>
      </form>
      <p className="text-white  font-medium mx-auto">
        Don’t have an account?{' '}
        <Link href="/" className="text-[#477BFF]">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
