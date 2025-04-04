import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

interface SuccessPopUpProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export default function SuccessPopUp({
  isOpen,
  message,
  onClose,
}: SuccessPopUpProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Popup */}
      <div className="w-3/4 max-w-sm rounded-xl bg-white p-6 shadow-xl">
        <CheckBadgeIcon className="mx-auto h-20 w-20 text-green-400" />
        <p className="mt-4 text-center text-lg font-semibold text-black">
          {message}
          {/* Berhasil Daftar Akun */}
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Oke
        </button>
      </div>
    </div>
  );
}
