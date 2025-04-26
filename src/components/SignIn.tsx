import { CircleUser } from 'lucide-react';

export const SignIn = () => {
  return (
    <button className="bg-black text-white px-6 py-2 rounded-full border border-gray-500 hover:bg-gray-800 transition mt-2 flex items-center gap-2">
      <CircleUser className="h-5 w-5" />
      Sign in
    </button>
  );
};
