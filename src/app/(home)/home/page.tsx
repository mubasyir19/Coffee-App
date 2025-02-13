import React from "react";

export default function HomePage() {
  return (
    <main className="bg-[#f4f4f4]">
      <section className="h-60 w-full bg-emerald-300"></section>
      <section className="relative -mt-10 h-full rounded-t-3xl bg-white px-4 pb-28 pt-16">
        <div className="absolute inset-x-0 -top-6 mx-auto flex w-11/12 items-center justify-between rounded-xl bg-white px-6 py-4 shadow-xl">
          <p className="font-semibold text-black">Hi, Mahdy</p>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
            >
              <path
                d="M8.26727 20C8.44281 20.304 8.69529 20.5565 8.99931 20.732C9.30334 20.9075 9.64821 20.9999 9.99927 20.9999C10.3503 20.9999 10.6952 20.9075 10.9992 20.732C11.3033 20.5565 11.5557 20.304 11.7313 20M1.26127 14.326C1.13063 14.4692 1.04442 14.6472 1.01312 14.8385C0.981826 15.0298 1.00679 15.226 1.08498 15.4034C1.16316 15.5807 1.2912 15.7316 1.45352 15.8375C1.61585 15.9434 1.80545 15.9999 1.99927 16H17.9993C18.1931 16.0001 18.3827 15.9438 18.5451 15.8381C18.7076 15.7324 18.8358 15.5817 18.9142 15.4045C18.9926 15.2273 19.0178 15.0311 18.9867 14.8398C18.9557 14.6485 18.8697 14.4703 18.7393 14.327C17.4093 12.956 15.9993 11.499 15.9993 7C15.9993 5.4087 15.3671 3.88258 14.2419 2.75736C13.1167 1.63214 11.5906 1 9.99927 1C8.40797 1 6.88185 1.63214 5.75663 2.75736C4.63141 3.88258 3.99927 5.4087 3.99927 7C3.99927 11.499 2.58827 12.956 1.26127 14.326Z"
                stroke="currentcolor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-3">
          <div className="">
            <div className="mx-auto h-14 w-14 rounded-full bg-gray-400"></div>
            <div className="mt-2 text-center">
              <p className="text-xs font-medium text-black">Bumber</p>
              <p className="text-xs font-medium text-gray-400">12 / 100 Exp</p>
            </div>
          </div>
          <div className="">
            <div className="mx-auto h-14 w-14 rounded-full bg-gray-400"></div>
            <div className="mt-2 text-center">
              <p className="text-xs font-medium text-black">Bumber Point</p>
              <p className="text-xs font-medium text-gray-400">682 Points</p>
            </div>
          </div>
          <div className="">
            <div className="mx-auto h-14 w-14 rounded-full bg-gray-400"></div>
            <div className="mt-2 text-center">
              <p className="text-xs font-medium text-black">Subscription</p>
              <p className="text-xs font-medium text-gray-400">
                0 Subscription
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between rounded-xl border border-slate-300 p-2 px-3">
            <div className="">
              <p className="text-xs font-semibold text-black">Voucher Kamu</p>
              <p className="text-[10px] font-medium text-gray-400">
                15 Voucher
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-400"></div>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-slate-300 p-2 px-3">
            <div className="">
              <p className="text-xs font-semibold text-black">Referral</p>
              <p className="text-[10px] font-medium text-gray-400">
                Undang Temanmu
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-400"></div>
          </div>
        </div>
        <div className="">
          <h1 className="mt-3 text-xl font-semibold text-black">
            Buat Pesanan Sekarang
          </h1>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl bg-black py-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400">
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-greenBum"
                >
                  <path
                    d="M5.30116 3L5.42019 4H8.43363L8.18363 6H4.64291L4.41034 4H4.41313L4.29409 3L4.29269 2.98784L4.01016 0.558313L3.94522 0H0V1H3.05478L3.28734 3H0.433625L1.69925 13.124C1.7298 13.3657 1.8474 13.588 2.03002 13.7492C2.21265 13.9105 2.44779 13.9996 2.69141 14H7.30859C7.55224 13.9997 7.7874 13.9105 7.97005 13.7493C8.15271 13.588 8.27032 13.3658 8.30087 13.124L9.56637 3H5.30116ZM1.56637 4H3.40363L3.63619 6H1.81637L1.56637 4ZM7.30903 13H2.69137L1.94137 7H3.75247L4.1885 10.75H5.19522L4.75916 7H8.05875L7.30903 13Z"
                    fill="currentcolor"
                  />
                </svg>
              </div>
              <p className="text-center text-base font-bold uppercase text-white">
                dine in
              </p>
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -right-7 bottom-0 z-0 h-24 w-24 text-gray-400 text-opacity-50"
              >
                <path
                  d="M5.30116 3L5.42019 4H8.43363L8.18363 6H4.64291L4.41034 4H4.41313L4.29409 3L4.29269 2.98784L4.01016 0.558313L3.94522 0H0V1H3.05478L3.28734 3H0.433625L1.69925 13.124C1.7298 13.3657 1.8474 13.588 2.03002 13.7492C2.21265 13.9105 2.44779 13.9996 2.69141 14H7.30859C7.55224 13.9997 7.7874 13.9105 7.97005 13.7493C8.15271 13.588 8.27032 13.3658 8.30087 13.124L9.56637 3H5.30116ZM1.56637 4H3.40363L3.63619 6H1.81637L1.56637 4ZM7.30903 13H2.69137L1.94137 7H3.75247L4.1885 10.75H5.19522L4.75916 7H8.05875L7.30903 13Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-black py-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400">
                <svg
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-greenBum"
                >
                  <path
                    d="M4.9 13.4L3.275 20.7C3.225 20.9333 3.104 21.125 2.912 21.275C2.72 21.425 2.49933 21.5 2.25 21.5C1.91667 21.5 1.65 21.375 1.45 21.125C1.25 20.875 1.18333 20.5917 1.25 20.275L3.8 7.40001L2 8.10001V10.5C2 10.7833 1.904 11.021 1.712 11.213C1.52 11.405 1.28267 11.5007 1 11.5C0.717333 11.4993 0.48 11.4033 0.288 11.212C0.0960001 11.0207 0 10.7833 0 10.5V7.45001C0 7.25001 0.0543334 7.07101 0.163 6.91301C0.271667 6.75501 0.417333 6.63401 0.6 6.55001L5.05 4.65001C5.28333 4.55001 5.52933 4.49167 5.788 4.47501C6.04667 4.45834 6.29233 4.49167 6.525 4.57501C6.75767 4.65834 6.97867 4.77501 7.188 4.92501C7.39733 5.07501 7.568 5.26667 7.7 5.50001L8.7 7.10001C8.91667 7.43334 9.171 7.75001 9.463 8.05001C9.755 8.35001 10.084 8.60834 10.45 8.82501C10.6833 8.95834 10.9417 9.07934 11.225 9.18801C11.5083 9.29667 11.7917 9.37567 12.075 9.42501C12.3417 9.47501 12.5627 9.59601 12.738 9.78801C12.9133 9.98001 13.0007 10.2173 13 10.5C12.9993 10.7827 12.8993 11.016 12.7 11.2C12.5007 11.384 12.259 11.459 11.975 11.425C11.0417 11.2917 10.204 11 9.462 10.55C8.72 10.1 8.07433 9.55834 7.525 8.92501L6.9 12L8.7 13.7C8.8 13.8 8.875 13.9127 8.925 14.038C8.975 14.1633 9 14.2923 9 14.425V20.5C9 20.7833 8.904 21.021 8.712 21.213C8.52 21.405 8.28267 21.5007 8 21.5C7.71733 21.4993 7.48 21.4033 7.288 21.212C7.096 21.0207 7 20.7833 7 20.5V15L4.9 13.4ZM7.5 4.00001C6.95 4.00001 6.47933 3.80434 6.088 3.41301C5.69667 3.02167 5.50067 2.55067 5.5 2.00001C5.49933 1.44934 5.69533 0.978673 6.088 0.588007C6.48067 0.19734 6.95133 0.00134009 7.5 6.75675e-06C8.04867 -0.00132658 8.51967 0.194673 8.913 0.588007C9.30633 0.98134 9.502 1.45201 9.5 2.00001C9.498 2.54801 9.30233 3.01901 8.913 3.41301C8.52367 3.80701 8.05267 4.00267 7.5 4.00001Z"
                    fill="currentcolor"
                  />
                </svg>
              </div>
              <p className="text-center text-base font-bold uppercase text-white">
                take away
              </p>
              <svg
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -right-7 bottom-0 z-0 h-24 w-24 text-gray-400 text-opacity-50"
              >
                <path
                  d="M4.9 13.4L3.275 20.7C3.225 20.9333 3.104 21.125 2.912 21.275C2.72 21.425 2.49933 21.5 2.25 21.5C1.91667 21.5 1.65 21.375 1.45 21.125C1.25 20.875 1.18333 20.5917 1.25 20.275L3.8 7.40001L2 8.10001V10.5C2 10.7833 1.904 11.021 1.712 11.213C1.52 11.405 1.28267 11.5007 1 11.5C0.717333 11.4993 0.48 11.4033 0.288 11.212C0.0960001 11.0207 0 10.7833 0 10.5V7.45001C0 7.25001 0.0543334 7.07101 0.163 6.91301C0.271667 6.75501 0.417333 6.63401 0.6 6.55001L5.05 4.65001C5.28333 4.55001 5.52933 4.49167 5.788 4.47501C6.04667 4.45834 6.29233 4.49167 6.525 4.57501C6.75767 4.65834 6.97867 4.77501 7.188 4.92501C7.39733 5.07501 7.568 5.26667 7.7 5.50001L8.7 7.10001C8.91667 7.43334 9.171 7.75001 9.463 8.05001C9.755 8.35001 10.084 8.60834 10.45 8.82501C10.6833 8.95834 10.9417 9.07934 11.225 9.18801C11.5083 9.29667 11.7917 9.37567 12.075 9.42501C12.3417 9.47501 12.5627 9.59601 12.738 9.78801C12.9133 9.98001 13.0007 10.2173 13 10.5C12.9993 10.7827 12.8993 11.016 12.7 11.2C12.5007 11.384 12.259 11.459 11.975 11.425C11.0417 11.2917 10.204 11 9.462 10.55C8.72 10.1 8.07433 9.55834 7.525 8.92501L6.9 12L8.7 13.7C8.8 13.8 8.875 13.9127 8.925 14.038C8.975 14.1633 9 14.2923 9 14.425V20.5C9 20.7833 8.904 21.021 8.712 21.213C8.52 21.405 8.28267 21.5007 8 21.5C7.71733 21.4993 7.48 21.4033 7.288 21.212C7.096 21.0207 7 20.7833 7 20.5V15L4.9 13.4ZM7.5 4.00001C6.95 4.00001 6.47933 3.80434 6.088 3.41301C5.69667 3.02167 5.50067 2.55067 5.5 2.00001C5.49933 1.44934 5.69533 0.978673 6.088 0.588007C6.48067 0.19734 6.95133 0.00134009 7.5 6.75675e-06C8.04867 -0.00132658 8.51967 0.194673 8.913 0.588007C9.30633 0.98134 9.502 1.45201 9.5 2.00001C9.498 2.54801 9.30233 3.01901 8.913 3.41301C8.52367 3.80701 8.05267 4.00267 7.5 4.00001Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="mt-3 text-xl font-semibold text-black">Big Order</h1>
          <p className="text-xs font-medium text-gray-500">
            Mau pesen banyak? atau mau stand kita ada di acara kalian? Minimal
            pembelian 100 cup kamu bisa dapetin discount menarik loh, Yuk pesan
            sekarang!
          </p>
          <div className="mt-2 h-32 w-full rounded-xl bg-gray-400"></div>
        </div>
        <div className="">
          <h1 className="mt-3 text-xl font-semibold text-black">Bumber Care</h1>
          <div className="mt-2 h-32 w-full rounded-xl bg-gray-400"></div>
        </div>
      </section>
    </main>
  );
}
