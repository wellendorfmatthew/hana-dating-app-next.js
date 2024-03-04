import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="background w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-10 items-center bg-white rounded-3xl p-10">
        <p className="text-4xl font-semibold">Login</p>
        <input type="text" placeholder="Email" className="outline-none border-black border-b-2 text-2xl" />
        <input type="password" placeholder="Password" className="outline-none border-black border-b-2 text-2xl" />
        <button className="text-xl font-semibold bg-purple-600 rounded-3xl px-16 py-4 transition hover:bg-purple-500 duration-300">Login</button>
        <div className="w-[300px] h-[32px] text-base"></div>
        <p className="text-lg">Don't have an account? <Link href={"/"} className="font-semibold hover:underline transition duration-300">Sign up here</Link></p>
      </div>
    </div>
  );
}
