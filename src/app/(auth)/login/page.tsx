"use client";

import Link from "next/link";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import useLogin from "@/hooks/customer/useLogin";
import LoadingPopUp from "@/components/LoadingPopUp";
import ErrorPopUp from "@/components/ErrorPopUp";
import SuccessPopUp from "@/components/SuccessPopUp";

export default function LoginPage() {
  const router = useRouter();
  const {
    formData,
    error,
    isModalOpen,
    loading,
    handleChange,
    handleLogin,
    closeModal,
  } = useLogin();

  return (
    <main className="telative h-screen w-full bg-[#f4f4f4]">
      <section className="h-44 w-full bg-greenBum"></section>
      <section className="relative -mt-10 h-full rounded-t-3xl bg-white px-4 pt-10">
        <div className="">
          <h1 className="text-lg font-semibold text-black">Masuk</h1>
          <p className="text-xs text-gray-400">
            Silahkan masuk dengan akun yang telah anda buat.
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="mx-auto mt-8 flex flex-col gap-y-4"
        >
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
              value={formData.username}
              onChange={handleChange}
              placeholder="Your username"
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Your password"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:border-green-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-green-500 py-3 text-sm font-medium text-white"
          >
            Masuk
          </button>
        </form>
        <p className="mt-2 text-center text-sm text-black">
          Belum punya akun?{" "}
          <Link href={`/register`} className="font-medium text-green-400">
            Daftar
          </Link>
        </p>
      </section>
      <button
        onClick={() => router.push("/profile")}
        className="absolute right-5 top-5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-base text-black"
      >
        <XMarkIcon className="h-3 w-3" />
      </button>
      <SuccessPopUp
        isOpen={isModalOpen}
        message="Berhasil Login"
        onClose={closeModal}
      />
      {loading && <LoadingPopUp />}
      {error && (
        <ErrorPopUp isOpen={isModalOpen} onClose={closeModal} message={error} />
      )}
    </main>
  );
}
