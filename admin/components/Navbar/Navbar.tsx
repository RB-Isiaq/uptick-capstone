import { DROP_ICON, NOTIFICATION_ICON, PROFILE_ICON } from '@/public';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="py-5  px-[42px] flex justify-end items-end font-raleway w-full">
      <div className="flex items-center gap-6">
        <Image src={NOTIFICATION_ICON} alt="notify" />
        <Image src={PROFILE_ICON} alt="notify" />

        <p className="text-black text-lg flex gap-2">
          <span>Admin</span>

          <Image src={DROP_ICON} alt="drop" />
        </p>
      </div>
    </nav>
  );
};
