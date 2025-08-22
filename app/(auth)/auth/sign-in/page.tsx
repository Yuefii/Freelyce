import { Button } from "@/packages/shadcn/ui/button";
import { Input } from "@/packages/shadcn/ui/input";
import { Label } from "@/packages/shadcn/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link href="/auth/sign-up" className="font-medium hover:underline">
            create a new account
          </Link>
        </p>
      </div>
      <div className="mt-8 mx-3 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg border-2 border-black rounded-xl sm:px-10">
          <form className="space-y-6">
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </Label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div>
              <Button type="submit" className="w-full cursor-pointer">
                Sign in
              </Button>
            </div>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or sign in with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button type="button" className="bg-white cursor-pointer">
                  <Image
                    src="/icons/google.png"
                    alt="logo github"
                    width="20"
                    height="20"
                  />
                  <span className="ml-2">Google</span>
                </Button>
                <Button type="button" className="bg-white cursor-pointer">
                  <Image
                    src="/icons/github.png"
                    alt="logo github"
                    width="20"
                    height="20"
                  />
                  <span className="ml-2">Github</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
