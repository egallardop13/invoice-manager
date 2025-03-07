import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { RocketLaunchIcon } from '@heroicons/react/16/solid';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex items-end justify-start rounded-md  bg-teal-600 p-4 sm:h-20 md:h-40"
        href="/"
      >
        <div className="  flex h-full  w-full flex-wrap items-center justify-center text-white ">
          <RocketLaunchIcon className=" h-10 w-10  text-black md:h-20 md:w-40 " />
          <label className="text-2xl font-semibold text-gray-900 ">
            Invoice<strong className="font-bold text-black">Manager</strong>
          </label>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block ">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
