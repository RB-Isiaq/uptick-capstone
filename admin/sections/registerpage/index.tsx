'use client';

import { FormEvent, useState } from 'react';
import { LOGO } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { postData } from '@/Services/ApiCalls';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { storeAdmin } from '@/store/AdminReducer';

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);

    try {
      setIsLoading(true);
      if (formObject.password !== formObject.confirmPassword) {
        setError('Must be a matching password');
        return;
      }
      const result = await postData(`signup`, formObject);

      if (result.user) {
        dispatch(
          storeAdmin({
            userId: result.user.userId,
          }),
        );
        router.replace('/login');
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
        <h1 className="text-white text-xl lg:text-[48px] font-bold mb-5">
          Please Sign Up
        </h1>
        <div className="flex flex-col gap-5 w-full mb-5">
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
        <div className="flex flex-col gap-5 w-full mb-5">
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
        <div className="flex flex-col gap-5 w-full mb-5">
          <label className="text-white  font-medium" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            required
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-5 py-[18px] border rounded-lg border-[#4D4D4D] bg-[rgba(153,153,153,0.11)] text-white"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="flex justify-center items-center px-5 py-[14px] gap-[11px] rounded-lg bg-[#477BFF] text-white w-full"
          type="submit"
        >
          {isLoading ? 'Registering ...' : 'Sign Up'}
        </button>
      </form>
      <p className="text-red-500 mx-auto text-center">{error}</p>
      <p className="text-white  font-medium mx-auto">
        Already have an account?{' '}
        <Link href="/login" className="text-[#477BFF]">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
