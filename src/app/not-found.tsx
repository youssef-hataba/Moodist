import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative max-w-3xl overflow-hidden mx-auto flex flex-col items-center justify-center bg-black text-white py-8">
      <div className="">
        <div className="gradient-circle top-[5%] left-[10%] opacity-10" />
        <div className="gradient-circle bottom-[5%] right-[10%]" />
      </div>

      <h1 className="text-5xl font-bold mb-4 text-primary-400">404</h1>
      <p className="text-2xl lg:text-4xl text-center mb-2 max-w-md">Oops! Page Not Found.</p>
      <div className="text-black-400">
        <p className="text-sm lg:text-lg text-center">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <p className="text-sm lg:text-lg text-center">
          Return to the home page or explore our latest courses to keep learning.
        </p>
      </div>

      <div className="relative w-full max-w-lg h-80 my-8 overflow-hidden bg-transparent">
        <Image src="/notFound.png" alt="404 Not Found" width={550} height={550} style={{objectFit: "contain"}} />
      </div>
      <Link href="/">
        <button className="px-6 py-3 bg-primary-500 hover:bg-primary-500 text-white rounded-lg font-semibold transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
