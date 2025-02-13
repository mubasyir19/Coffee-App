"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md border-t border-slate-300 bg-white px-10 py-4">
      <ul className="flex items-center justify-between">
        <li>
          <Link
            href={`/home`}
            className={`${pathname === "/home" ? "text-green-700" : "text-gray-400"}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-4 w-4 text-center"
            >
              <path
                d="M3 10H1L10 1L19 10H17M3 10V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H15C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17V10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 19V13C7 12.4696 7.21071 11.9609 7.58579 11.5858C7.96086 11.2107 8.46957 11 9 11H11C11.5304 11 12.0391 11.2107 12.4142 11.5858C12.7893 11.9609 13 12.4696 13 13V19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-center text-xs font-medium">Beranda</p>
          </Link>
        </li>
        <li>
          <Link
            href={`/menu`}
            className={`${pathname === "/menu" ? "text-green-700" : "text-gray-400"}`}
          >
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-4 w-4 text-center"
            >
              <path
                d="M5.5 12C6.28333 12 7.046 12.0877 7.788 12.263C8.53 12.4383 9.26733 12.7007 10 13.05V3.2C9.31667 2.8 8.59167 2.5 7.825 2.3C7.05833 2.1 6.28333 2 5.5 2C4.9 2 4.304 2.05833 3.712 2.175C3.12 2.29167 2.54933 2.46667 2 2.7V12.6C2.58333 12.4 3.16267 12.25 3.738 12.15C4.31333 12.05 4.90067 12 5.5 12ZM12 13.05C12.7333 12.7 13.471 12.4377 14.213 12.263C14.955 12.0883 15.7173 12.0007 16.5 12C17.1 12 17.6877 12.05 18.263 12.15C18.8383 12.25 19.4173 12.4 20 12.6V2.7C19.45 2.46667 18.879 2.29167 18.287 2.175C17.695 2.05833 17.0993 2 16.5 2C15.7167 2 14.9417 2.1 14.175 2.3C13.4083 2.5 12.6833 2.8 12 3.2V13.05ZM11 16C10.2 15.3667 9.33333 14.875 8.4 14.525C7.46667 14.175 6.5 14 5.5 14C4.61667 14 3.69167 14.1667 2.725 14.5C1.75833 14.8333 0.85 15.35 0 16.05V1.55C0.733333 1.05 1.596 0.666667 2.588 0.4C3.58 0.133333 4.55067 0 5.5 0C6.46667 0 7.41267 0.125 8.338 0.375C9.26333 0.625 10.1507 1 11 1.5C11.85 1 12.7377 0.625 13.663 0.375C14.5883 0.125 15.534 0 16.5 0C17.45 0 18.421 0.133333 19.413 0.4C20.405 0.666667 21.2673 1.05 22 1.55V16.05C21.1667 15.35 20.2623 14.8333 19.287 14.5C18.3117 14.1667 17.3827 14 16.5 14C15.5 14 14.5333 14.175 13.6 14.525C12.6667 14.875 11.8 15.3667 11 16ZM13 5.9V4.2C13.55 3.96667 14.1127 3.79167 14.688 3.675C15.2633 3.55833 15.8673 3.5 16.5 3.5C16.9333 3.5 17.3583 3.53333 17.775 3.6C18.1917 3.66667 18.6 3.75 19 3.85V5.45C18.6 5.3 18.1957 5.18767 17.787 5.113C17.3783 5.03833 16.9493 5.00067 16.5 5C15.8667 5 15.2583 5.07933 14.675 5.238C14.0917 5.39667 13.5333 5.61733 13 5.9ZM13 11.4V9.7C13.55 9.46667 14.1127 9.29167 14.688 9.175C15.2633 9.05833 15.8673 9 16.5 9C16.9333 9 17.3583 9.03333 17.775 9.1C18.1917 9.16667 18.6 9.25 19 9.35V10.95C18.6 10.8 18.1957 10.6873 17.787 10.612C17.3783 10.5367 16.9493 10.4993 16.5 10.5C15.8667 10.5 15.2583 10.575 14.675 10.725C14.0917 10.875 13.5333 11.1 13 11.4ZM13 8.65V6.95C13.55 6.71667 14.1127 6.54167 14.688 6.425C15.2633 6.30833 15.8673 6.25 16.5 6.25C16.9333 6.25 17.3583 6.28333 17.775 6.35C18.1917 6.41667 18.6 6.5 19 6.6V8.2C18.6 8.05 18.1957 7.93733 17.787 7.862C17.3783 7.78667 16.9493 7.74933 16.5 7.75C15.8667 7.75 15.2583 7.82933 14.675 7.988C14.0917 8.14667 13.5333 8.36733 13 8.65Z"
                fill="currentcolor"
              />
            </svg>
            <p className="text-center text-xs font-medium">Menu</p>
          </Link>
        </li>
        <li>
          <Link
            href={`/order`}
            className={`${pathname === "/order" ? "text-green-700" : "text-gray-400"}`}
          >
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-4 w-4 text-center"
            >
              <path
                d="M11 2H2V18H14V5H11V2ZM2 0H12L16 4V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0ZM4 9H12V11H4V9ZM4 13H12V15H4V13Z"
                fill="currentcolor"
              />
            </svg>
            <p className="text-center text-xs font-medium">Pesanan</p>
          </Link>
        </li>
        <li>
          <Link
            href={`/profile`}
            className={`${pathname === "/profile" ? "text-green-700" : "text-gray-400"}`}
          >
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-4 w-4 text-center"
            >
              <path
                d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                stroke="currentcolor"
                strokeWidth="1.5"
              />
              <path
                d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z"
                stroke="currentcolor"
                strokeWidth="1.5"
              />
            </svg>

            <p className="text-center text-xs font-medium">Profile</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
