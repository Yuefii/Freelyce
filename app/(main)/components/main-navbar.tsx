"use client";

import { Button } from "@/packages/shadcn/ui/button";
import { Plus, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MainNavbar() {
  const router = useRouter();

  return (
    <>
      <header className="w-full border-b-2 bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-3 sticky top-0 z-50">
        <div className="mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Image
                src="/banner-light.png"
                alt="logo"
                width="120"
                height="47"
                className="sm:w-[130px] md:w-[140px] lg:w-[150px]"
              />
            </Link>
            <div className="flex items-center space-x-3">
              <Button
                onClick={() => router.push("/settings")}
                size="sm"
                variant="neutral"
                className="cursor-pointer"
              >
                <Settings className="h-4 w-4 mr-2" />
                Pengaturan
              </Button>
              <Button size="sm" className="cursor-pointer">
                <Plus className="h-4 w-4 mr-2" />
                Buat Invoice
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
