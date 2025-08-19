import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/logo-light.png"
          alt="Logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em] hover:underline">
            <Link href="/sign-in">Sign In</Link>
          </li>
          <li className="tracking-[-.01em] hover:underline">
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ol>
      </main>
    </div >
  );
}
