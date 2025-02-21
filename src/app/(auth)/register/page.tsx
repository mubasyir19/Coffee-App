"use client";

import Link from "next/link";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="telative h-full w-full bg-[#f4f4f4]">
      <section className="h-44 w-full bg-greenBum"></section>
      <section className="relative -mt-10 h-full rounded-t-3xl bg-white px-4 pb-28 pt-10">
        <div className="">
          <h1 className="text-lg font-semibold text-black">Daftar</h1>
          <p className="text-xs text-gray-400">
            Silakan daftar akun anda sekarang.
          </p>
        </div>
        <form className="mx-auto mt-8 flex flex-col gap-y-4">
          <div className="">
            <label
              htmlFor="fullname"
              className="block text-base font-medium text-black"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Tulis nama lengkapmu"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:border-green-400 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              htmlFor="username"
              className="block text-base font-medium text-black"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Tulis username"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:border-green-400 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block text-base font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:border-green-400 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              htmlFor="phoneNumber"
              className="block text-base font-medium text-black"
            >
              Nomor Telepon
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Tulis nomor telepon"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:border-green-400 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              htmlFor="address"
              className="block text-base font-medium text-black"
            >
              Alamat
            </label>
            <input
              type="text"
              name="address"
              placeholder="Tulis alamatmu"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:border-green-400 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="block text-base font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:border-green-400 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="block text-base font-medium text-black"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:border-green-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gray-300 py-3 text-sm font-medium text-gray-500"
          >
            Daftar
          </button>
        </form>
        <p className="mt-2 text-center text-sm text-black">
          Sudah punya akun?{" "}
          <Link href={`/login`} className="font-medium text-green-400">
            Login
          </Link>
        </p>
      </section>
      <button
        onClick={() => router.push("/login")}
        className="absolute left-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-base text-black"
      >
        <ArrowLeftIcon className="h-4 w-4" />
      </button>
    </main>
  );
}
