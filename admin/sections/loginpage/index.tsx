'use client';

import { FormEvent, useState } from 'react';
import { LOGO } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { postData } from '@/Services/ApiCalls';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { storeAdmin } from '@/store/AdminReducer';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    try {
      setIsLoading(true);
      const result = await postData(`login`, formObject);

      if (result.token) {
        setSuccess(result.message);
        setError('');
        dispatch(
          storeAdmin({
            userId: formObject.user_id,
            token: result.token,
            isAdmin: !!result.token,
          }),
        );
        router.replace('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative bg-[#070C19] flex flex-col justify-center items-center  px-3 lg:px-[60px] font-raleway py-10 min-h-screen">
      <Image
        src={LOGO}
        alt="logo"
        className="absolute top-10 left-3 lg:left-10"
      />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[475px] mt-20 mb-10"
      >
        <h1 className="text-white text-2xl lg:text-[48px] font-bold mb-4">
          Welcome Back!
        </h1>
        <p className="text-white  font-medium">Login to continue</p>
        <div className="flex flex-col gap-5 w-full mb-5 mt-[30px]">
          <label className="text-white  font-medium" htmlFor="username">
            Username
          </label>
          <input
            required
            id="username"
            name="username"
            className="w-full px-5 py-[18px] border rounded-lg border-[#4D4D4D] bg-[rgba(153,153,153,0.11)] text-white"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col gap-5 w-full mb-[55px]">
          <label className="text-white  font-medium" htmlFor="password">
            Password
          </label>
          <input
            required
            id="password"
            name="password"
            className="w-full px-5 py-[18px] border rounded-lg border-[#4D4D4D] bg-[rgba(153,153,153,0.11)] text-white"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="flex justify-center items-center px-5 py-[14px] gap-[11px] rounded-lg bg-[#477BFF] text-white w-full"
          type="submit"
        >
          {isLoading ? 'Logging In ...' : 'Log In'}
        </button>
      </form>
      <p className="text-green-500 mx-auto text-center">{success}</p>
      <p className="text-red-500 mx-auto text-center">{error}</p>
      <p className="text-white  font-medium mx-auto">
        Don’t have an account?{' '}
        <Link href="/register" className="text-[#477BFF]">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
