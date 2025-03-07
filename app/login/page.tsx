import LoginForm from '@/app/ui/login-form';
import { RocketLaunchIcon } from '@heroicons/react/16/solid';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-teal-600 p-3 md:h-36">
          <div className=" text-white ">
            <RocketLaunchIcon className="h-16 w-16 text-black " />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
