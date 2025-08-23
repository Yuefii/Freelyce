"use client";

import {
  Receipt,
  Users,
  TrendingUp,
  FileText,
  Plus,
  Eye,
  BarChart3,
  Settings,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/packages/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/packages/shadcn/ui/card";
import { useSession } from "@/context/session-context";
import Link from "next/link";

interface DashboardProps {
  onCreateInvoice: () => void;
}

export const Dashboard = ({ onCreateInvoice }: DashboardProps) => {
  const router = useRouter();
  const { user } = useSession();

  const stats = [
    {
      title: "Total Invoice",
      value: "24",
      description: "Invoice yang telah dibuat",
      icon: Receipt,
      color: "text-primary",
    },
    {
      title: "Pendapatan",
      value: "Rp 15.000.000",
      description: "Total pendapatan bulan ini",
      icon: TrendingUp,
      color: "text-success",
    },
    {
      title: "Invoice Sukses",
      value: "12",
      description: "Pembayaran berhasil",
      icon: Users,
      color: "text-accent",
    },
    {
      title: "Invoice Pending",
      value: "3",
      description: "Menunggu pembayaran",
      icon: FileText,
      color: "text-destructive",
    },
  ];

  const recentInvoices = [
    {
      id: 1,
      invoice_number: "INV-2024-001",
      client_name: "PT. ABC Indonesia",
      client_email: "abc@company.com",
      total_amount: 5500000,
      status: "Paid",
      date: "2024-01-15",
    },
    {
      id: 2,
      invoice_number: "INV-2024-002",
      client_name: "CV. XYZ Corp",
      client_email: "xyz@company.com",
      total_amount: 2300000,
      status: "Pending",
      date: "2024-01-14",
    },
    {
      id: 3,
      invoice_number: "INV-2024-003",
      client_name: "PT. 123 Solutions",
      client_email: "solutions@company.com",
      total_amount: 8750000,
      status: "Paid",
      date: "2024-01-12",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl py-4 pb-10">
        <div className="mx-2 md:mx-0">
          <h1 className="text-2xl">Dashboard</h1>
          <p className="text-sm text-neutral-600">
            Selamat datang kembali{" "}
            <span className="underline text-black font-bold">{user?.name}</span>{" "}
            silahkan kelola invoice kamu.
          </p>
        </div>
        <div className="mx-2 md:mx-0 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="bg-white hover:shadow-md transition-shadow"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mx-2 md:mx-0 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-white lg:col-span-2">
            <CardHeader>
              <CardTitle>Invoice Terbaru</CardTitle>
              <CardDescription>Invoice yang baru saja dibuat</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInvoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">{invoice.invoice_number}</p>
                        <p className="text-sm text-muted-foreground">
                          {invoice.client_name}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        Rp {invoice.total_amount.toLocaleString("id-ID")}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            invoice.status === "Paid"
                              ? "bg-success/10 text-success"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {invoice.status}
                        </span>
                        <Link href="/dashboard">
                          <Eye className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Navigasi</CardTitle>
              <CardDescription>Fitur yang sering digunakan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full bg-white justify-start"
                onClick={onCreateInvoice}
              >
                <Plus className="h-4 w-4 mr-2" />
                Buat Invoice Baru
              </Button>
              <Button
                className="w-full bg-white justify-start"
                onClick={() => router.push("/reports")}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Lihat Laporan
              </Button>
              <Button
                className="w-full bg-white justify-start"
                onClick={() => router.push("/settings")}
              >
                <Settings className="h-4 w-4 mr-2" />
                Pengaturan
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
