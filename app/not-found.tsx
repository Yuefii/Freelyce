"use client";

import { Button } from "@/packages/shadcn/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          Oops! Halaman tidak ditemukan
        </p>
        <Button onClick={() => router.back()} className="cursor-pointer">
          Kembali ke halaman sebelumnya
        </Button>
      </div>
    </div>
  );
}
