"use client";

import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface LogoutPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogoutPopUp({ isOpen, onClose }: LogoutPopUpProps) {
  const route = useRouter();

  if (!isOpen) return null;

  const handleLogout = () => {
    Cookies.remove("authToken");
    onClose();
    route.push("/profile");
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-3/4 max-w-sm rounded-xl bg-white p-6 shadow-xl">
        <ExclamationCircleIcon className="mx-auto h-20 w-20 text-yellow-400" />
        <p className="mt-4 text-center text-lg font-semibold text-black">
          Yakin akan keluar?
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Logout
          </button>
          <button
            onClick={onClose}
            className="mt-4 w-full rounded-lg bg-gray-300 px-4 py-2 text-black hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
