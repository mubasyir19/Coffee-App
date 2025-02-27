import React from "react";
// import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function LoadingPopUp() {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Popup */}
      <div className="w-3/4 max-w-sm rounded-xl bg-white p-6 shadow-xl">
        <h1 className="text-center text-2xl font-semibold text-black">
          Loading ...
        </h1>
      </div>
    </div>
  );
}
