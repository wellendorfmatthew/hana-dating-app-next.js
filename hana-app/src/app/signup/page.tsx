import Image from "next/image";
import Link from "next/link";
import Logo from '../../assets/hanalogo.png';

export default function Signup() {
  return (
    <div className="background w-screen h-screen flex items-center justify-center">
        <div className="flex flex-col items-center bg-white rounded-3xl shadow-2xl h-[550px] w-[400px]">
            <p className="text-4xl font-semibold mt-10">Sign Up</p>
            <input type="text" placeholder="Email" className="outline-none border-black border-b-2 text-3xl mt-24 mb-10 w-[300px] pl-1" />
            <input type="password" placeholder="Password" className="outline-none border-black border-b-2 text-3xl mb-10 w-[300px] pl-1" />
            <button className="text-xl font-semibold bg-purple-600 rounded-3xl px-16 py-4 transition hover:bg-purple-500 duration-300 mt-10 shadow-xl shadow-purple-600 hover:shadow-purple-500">
            Sign Up
            </button>
            <div className="w-[300px] h-[32px] text-base text-wrap"></div>
            <p className="text-lg mt-4">Already have an account? <Link href={"/"} className="font-semibold hover:underline transition duration-300">Sign in here</Link></p>
        </div>
    </div>
  );
}
