"use client";

import {
  Settings as SettingsIcon,
  User,
  Building,
  Shield,
  ArrowLeft,
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
import { Label } from "@radix-ui/react-label";
import { Input } from "@/packages/shadcn/ui/input";
import { Textarea } from "@/packages/shadcn/ui/textarea";
import { useState, useEffect } from "react";

export default function Settings() {
  const router = useRouter();
  const [password, setPassword] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [bussiness, setBussiness] = useState({
    business_name: "",
    business_email: "",
    business_address: "",
    phone: "",
  });
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    async function fetchDefaults() {
      try {
        const res = await fetch("/api/features/user/me", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        setProfile({
          name: data.user.name || "",
          email: data.user.email || "",
        });
        setBussiness({
          business_name: data.user.business_name || "",
          business_email: data.user.business_email || "",
          business_address: data.user.business_address || "",
          phone: data.user.phone || "",
        });
      } catch (err) {
        console.error("Gagal mengambil data default:", err);
      }
    }

    fetchDefaults();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const res = await fetch("/api/features/user/update-profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
        credentials: "include",
      });
      await res.json();
      alert("Profil berhasil diperbarui!");
    } catch (err) {
      console.error(err);
      alert("Gagal memperbarui profil");
    }
  };

  const handleUpdateBusiness = async () => {
    try {
      const res = await fetch("/api/features/user/update-profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bussiness),
        credentials: "include",
      });
      await res.json();
      alert("Bisnis berhasil diperbarui!");
    } catch (err) {
      console.error(err);
      alert("Gagal memperbarui bisnis");
    }
  };

  const handleChangePassword = async () => {
    if (password.new_password !== password.confirm_password) {
      alert("Password baru dan konfirmasi tidak cocok!");
      return;
    }

    try {
      await fetch("/api/features/user/change-password", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          old_password: password.old_password,
          new_password: password.new_password,
        }),
        credentials: "include",
      });
      alert("Password berhasil diubah!");
      setPassword({ old_password: "", new_password: "", confirm_password: "" });
    } catch (err) {
      console.error(err);
      alert("Gagal mengubah password");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <Button
          className="bg-white"
          size="sm"
          onClick={() => router.push("/dashboard")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali
        </Button>
        <div className="my-4 flex items-center space-x-3">
          <div className="p-2 bg-primary rounded-lg">
            <SettingsIcon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Pengaturan</h1>
            <p className="text-muted-foreground">
              Kelola pengaturan aplikasi Anda
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 lg:row-span-2">
            <Card className="bg-white h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>Bisnis</span>
                </CardTitle>
                <CardDescription>
                  Informasi bisnis untuk invoice
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nama Bisnis</Label>
                    <Input
                      id="companyName"
                      value={bussiness.business_name}
                      onChange={(e) =>
                        setBussiness({
                          ...bussiness,
                          business_name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyEmail">Email Bisnis</Label>
                    <Input
                      id="companyEmail"
                      type="email"
                      value={bussiness.business_email}
                      onChange={(e) =>
                        setBussiness({
                          ...bussiness,
                          business_email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    value={bussiness.phone}
                    onChange={(e) =>
                      setBussiness({ ...bussiness, phone: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyAddress">Alamat</Label>
                  <Textarea
                    id="companyAddress"
                    value={bussiness.business_address}
                    onChange={(e) =>
                      setBussiness({
                        ...bussiness,
                        business_address: e.target.value,
                      })
                    }
                    className="resize-none min-h-[120px]"
                  />
                </div>
                <Button className="w-full" onClick={handleUpdateBusiness}>
                  Simpan
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profil Pengguna</span>
                </CardTitle>
                <CardDescription>
                  Kelola informasi profil dan preferensi akun Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    disabled
                  />
                </div>
                <Button className="w-full" onClick={handleUpdateProfile}>
                  Simpan
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Keamanan</span>
                </CardTitle>
                <CardDescription>Pengaturan keamanan password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Password Saat Ini</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={password.old_password}
                    onChange={(e) =>
                      setPassword({ ...password, old_password: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Password Baru</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={password.new_password}
                    onChange={(e) =>
                      setPassword({ ...password, new_password: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    Konfirmasi Password Baru
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={password.confirm_password}
                    onChange={(e) =>
                      setPassword({
                        ...password,
                        confirm_password: e.target.value,
                      })
                    }
                  />
                </div>
                <Button className="w-full" onClick={handleChangePassword}>
                  Ubah Password
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
