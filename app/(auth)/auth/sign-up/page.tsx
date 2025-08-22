import { Button } from "@/packages/shadcn/ui/button";
import { Checkbox } from "@/packages/shadcn/ui/checkbox";
import { Input } from "@/packages/shadcn/ui/input";
import { Label } from "@/packages/shadcn/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="font-medium text-sm text-gray-600 hover:underline"
          >
            Sign in here
          </Link>
        </p>
      </div>
      <div className="mt-8 mx-3 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg border-2 border-black rounded-xl sm:px-10">
          <form className="space-y-6">
            <div>
              <Label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </Label>
              <div className="mt-1">
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Jhon Doe"
                />
              </div>
            </div>
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
                  placeholder="john@example.com"
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
                  autoComplete="new-password"
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm password
              </Label>
              <div className="mt-1">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="rounded" />
                <Label htmlFor="terms">
                  I agree to the{" "}
                  <span className="text-teal-600 hover:underline font-medium">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-teal-600 hover:underline font-medium">
                    Privacy Policy
                  </span>
                </Label>
              </div>
            </div>
            <div>
              <Button type="submit" className="w-full cursor-pointer">
                Create account
              </Button>
            </div>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or sign up with
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
