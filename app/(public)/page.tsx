import { Button } from "@/packages/shadcn/ui/button";
import { Card } from "@/packages/shadcn/ui/card";
import { FileText, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="min-h-[100vh] sm:min-h-[700px] bg-background relative overflow-hidden mb-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 sm:bottom-40 right-20 sm:right-40 w-32 sm:w-48 h-32 sm:h-48 bg-white rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-20 h-full flex items-center relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black leading-tight">
                  Buat Semua
                  <span className="block text-[#14BA85]">Invoice kamu</span>
                  <span className="block">Secara Online</span>
                </h1>
                <p className="text-lg xl:text-xl text-gray-800 leading-relaxed max-w-lg">
                  Freelyce adalah platform untuk membuat invoice berbasis
                  website yang dirancang untuk freelance, pekerja mandiri, dan
                  pelaku bisnis.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="cursor-pointer font-semibold">
                    <FileText className="w-5 h-5" />
                    Create Invoice Now
                  </Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button size="lg" className="bg-white cursor-pointer">
                    <User className="w-5 h-5" />
                    Create your Account
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Card className="mt-4 bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-600 font-medium">
                    freelyce.web.id
                  </div>
                </div>
                <div className="aspect-square relative">
                  <Image
                    src="/logo-light.png"
                    alt="image freelyce"
                    fill
                    className="object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
