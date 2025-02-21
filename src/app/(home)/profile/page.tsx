import Link from "next/link";
import React from "react";

export default function ProfilePage() {
  return (
    <main className="h-full bg-white px-4 pb-28">
      <div id="title" className="pt-8">
        <h1 className="text-2xl font-bold text-greenBum">BumBer Coffee</h1>
      </div>
      {/* <div
        id="profile"
        className="mt-4 flex w-full items-center justify-between rounded-xl border border-gray-300 p-4 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-8 w-8 text-center"
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
          <div className="">
            <p className="text-sm font-medium text-greenBum">Mahdy</p>
            <p className="text-xs font-medium text-gray-400">6287774026818</p>
          </div>
        </div>
        <div className="">
          <Link href={`#`}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-greenBum"
            >
              <path
                d="M11.06 6L12 6.94L2.92 16H2V15.08L11.06 6ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z"
                fill="currentcolor"
              />
            </svg>
          </Link>
        </div>
      </div> */}
      <div
        id="profile"
        className="mt-4 flex w-full items-center justify-between rounded-xl border border-gray-300 p-4 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-8 w-8 text-center"
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
          <p className="text-sm font-medium text-black">Pelanggan</p>
        </div>
        <div className="">
          <Link
            href={`#`}
            className="rounded-lg bg-greenBum px-2 py-1 text-xs font-medium text-white"
          >
            Login disini
          </Link>
        </div>
      </div>
      {/* <div className="mt-6 w-full rounded-xl bg-redBum-light">
        <div className="rounded-xl bg-redBum px-6 py-2">
          <p className="text-center text-xs font-semibold text-white">
            Undang teman dan dapatkan Voucher 50%
          </p>
        </div>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="">
            <p className="text-2xl font-medium text-white">MAHG9K</p>
          </div>
          <div className="">
            <svg
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-greenBum"
            >
              <path
                d="M14.9924 0.53543C15.6404 0.161532 16.3802 -0.0231633 17.1279 0.00232241C17.8756 0.0278081 18.6011 0.262453 19.2221 0.679606C19.8431 1.09676 20.3347 1.6797 20.641 2.36222C20.9473 3.04474 21.056 3.79947 20.9549 4.54071C20.8538 5.28194 20.5468 5.97996 20.0689 6.55548C19.591 7.13101 18.9612 7.56097 18.2512 7.79653C17.5411 8.03209 16.7792 8.06381 16.0521 7.88808C15.3249 7.71236 14.6616 7.33623 14.1374 6.80243L7.85745 10.4284C7.95545 10.7838 8.00378 11.1411 8.00245 11.5004C8.00245 11.8584 7.95545 12.2194 7.85745 12.5724L14.1374 16.1984C14.8203 15.5059 15.732 15.0858 16.702 15.0166C17.6721 14.9473 18.6342 15.2337 19.4085 15.8221C20.1828 16.4106 20.7164 17.2608 20.9094 18.214C21.1024 19.1672 20.9418 20.1581 20.4574 21.0014C19.9715 21.8462 19.1939 22.4846 18.2706 22.7965C17.3473 23.1085 16.3418 23.0727 15.4431 22.6957C14.5443 22.3188 13.8141 21.6267 13.3896 20.7495C12.965 19.8722 12.8754 18.8701 13.1374 17.9314L6.85745 14.3044C6.3007 14.8714 5.58777 15.2598 4.80949 15.4201C4.03122 15.5805 3.22283 15.5055 2.48732 15.2047C1.75182 14.904 1.12249 14.3911 0.67952 13.7314C0.236553 13.0717 0 12.295 0 11.5004C0 10.7058 0.236553 9.92918 0.67952 9.26948C1.12249 8.60978 1.75182 8.09689 2.48732 7.79614C3.22283 7.49539 4.03122 7.42041 4.80949 7.58074C5.58777 7.74107 6.3007 8.12946 6.85745 8.69643L13.1374 5.07043C12.9001 4.21583 12.9535 3.30659 13.2893 2.48567C13.6251 1.66474 14.2242 0.978707 14.9924 0.53543ZM18.7244 3.00043C18.5941 2.77114 18.4197 2.5699 18.2112 2.4083C18.0027 2.24669 17.7644 2.12792 17.5098 2.05881C17.2553 1.9897 16.9896 1.97163 16.728 2.00562C16.4665 2.03962 16.2142 2.12502 15.9858 2.2569C15.7574 2.38879 15.5573 2.56455 15.3971 2.77407C15.2369 2.98359 15.1197 3.22274 15.0523 3.47774C14.9848 3.73274 14.9685 3.99855 15.0043 4.25988C15.04 4.52121 15.1271 4.77289 15.2604 5.00043C15.5276 5.45604 15.964 5.78751 16.4746 5.92251C16.9852 6.0575 17.5285 5.98505 17.9858 5.72098C18.4432 5.45691 18.7776 5.02264 18.9159 4.51296C19.0543 4.00327 18.9855 3.45955 18.7244 3.00043ZM2.07245 12.0274C2.15351 12.3223 2.30107 12.5948 2.5038 12.8238C2.70652 13.0528 2.95903 13.2323 3.24193 13.3486C3.52483 13.4648 3.83061 13.5147 4.13579 13.4944C4.44097 13.4741 4.73744 13.3841 5.00245 13.2314C5.32598 13.0444 5.59065 12.7705 5.76646 12.4408C5.94226 12.111 6.02217 11.7386 5.99711 11.3658C5.97206 10.9929 5.84305 10.6345 5.6247 10.3313C5.40636 10.028 5.10742 9.79199 4.76178 9.64996C4.41613 9.50793 4.03761 9.46557 3.66912 9.52769C3.30063 9.58982 2.95692 9.75394 2.67695 10.0014C2.39698 10.2489 2.19195 10.5699 2.0851 10.928C1.97826 11.2861 1.97388 11.667 2.07245 12.0274ZM17.9924 17.2694C17.7649 17.136 17.5132 17.049 17.2519 17.0132C16.9906 16.9775 16.7248 16.9938 16.4698 17.0612C16.2148 17.1287 15.9756 17.2458 15.7661 17.4061C15.5566 17.5663 15.3808 17.7664 15.2489 17.9948C15.117 18.2232 15.0316 18.4754 14.9976 18.737C14.9636 18.9986 14.9817 19.2643 15.0508 19.5188C15.1199 19.7734 15.2387 20.0117 15.4003 20.2202C15.5619 20.4286 15.7632 20.6031 15.9924 20.7334C16.4516 20.9945 16.9953 21.0633 17.505 20.9249C18.0147 20.7866 18.4489 20.4522 18.713 19.9948C18.9771 19.5374 19.0495 18.9942 18.9145 18.4836C18.7795 17.973 18.4481 17.5365 17.9924 17.2694Z"
                fill="currentcolor"
              />
            </svg>
          </div>
        </div>
      </div> */}
      {/* <div className="mt-8 flex flex-col gap-y-3 rounded-xl border border-gray-200 px-4 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-greenBum">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellowBum"
              >
                <path
                  d="M8.06 4.1012e-05C6.17 -0.00995899 4.33 1.81004 5.17 4.07004H2C1.46957 4.07004 0.960859 4.28075 0.585786 4.65583C0.210714 5.0309 0 5.53961 0 6.07004V8.07004C0 8.33526 0.105357 8.58961 0.292893 8.77715C0.48043 8.96468 0.734784 9.07004 1 9.07004H10V6.07004H12V9.07004H21C21.2652 9.07004 21.5196 8.96468 21.7071 8.77715C21.8946 8.58961 22 8.33526 22 8.07004V6.07004C22 5.53961 21.7893 5.0309 21.4142 4.65583C21.0391 4.28075 20.5304 4.07004 20 4.07004H16.83C18 0.800041 13.6 -1.50996 11.57 1.31004L11 2.07004L10.43 1.29004C9.8 0.400041 8.93 0.010041 8.06 4.1012e-05ZM8 2.07004C8.89 2.07004 9.34 3.15004 8.71 3.78004C8.08 4.41004 7 3.96004 7 3.07004C7 2.80482 7.10536 2.55047 7.29289 2.36293C7.48043 2.1754 7.73478 2.07004 8 2.07004ZM14 2.07004C14.89 2.07004 15.34 3.15004 14.71 3.78004C14.08 4.41004 13 3.96004 13 3.07004C13 2.80482 13.1054 2.55047 13.2929 2.36293C13.4804 2.1754 13.7348 2.07004 14 2.07004ZM1 10.07V18.07C1 18.6005 1.21071 19.1092 1.58579 19.4843C1.96086 19.8593 2.46957 20.07 3 20.07H19C19.5304 20.07 20.0391 19.8593 20.4142 19.4843C20.7893 19.1092 21 18.6005 21 18.07V10.07H12V18.07H10V10.07H1Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-greenBum">Subscriptions</p>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-greenBum"
          >
            <path
              d="M1 1L8 8L1 15"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="mx-auto w-4/5 border border-gray-200" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-greenBum">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellowBum"
              >
                <path
                  d="M11 2H2V18H14V5H11V2ZM2 0H12L16 4V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0ZM4 9H12V11H4V9ZM4 13H12V15H4V13Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-greenBum">
              Riwayat Pemesanan
            </p>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-greenBum"
          >
            <path
              d="M1 1L8 8L1 15"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="mx-auto w-4/5 border border-gray-200" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-greenBum">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellowBum"
              >
                <path
                  d="M11 2H2V18H14V5H11V2ZM2 0H12L16 4V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0ZM4 9H12V11H4V9ZM4 13H12V15H4V13Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-greenBum">
              Alamat Tersimpan
            </p>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-greenBum"
          >
            <path
              d="M1 1L8 8L1 15"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="mx-auto w-4/5 border border-gray-200" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-greenBum">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellowBum"
              >
                <path
                  d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0.530433 6 1.03914 6.21071 1.41421 6.58579C1.78929 6.96086 2 7.46957 2 8C2 8.53043 1.78929 9.03914 1.41421 9.41421C1.03914 9.78929 0.530433 10 0 10V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V10C19.4696 10 18.9609 9.78929 18.5858 9.41421C18.2107 9.03914 18 8.53043 18 8C18 7.46957 18.2107 6.96086 18.5858 6.58579C18.9609 6.21071 19.4696 6 20 6V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2ZM13.5 3L15 4.5L6.5 13L5 11.5L13.5 3ZM6.81 3.04C7.79 3.04 8.58 3.83 8.58 4.81C8.58 5.27943 8.39352 5.72964 8.06158 6.06158C7.72964 6.39352 7.27943 6.58 6.81 6.58C5.83 6.58 5.04 5.79 5.04 4.81C5.04 4.34057 5.22648 3.89036 5.55842 3.55842C5.89036 3.22648 6.34057 3.04 6.81 3.04ZM13.19 9.42C14.17 9.42 14.96 10.21 14.96 11.19C14.96 11.6594 14.7735 12.1096 14.4416 12.4416C14.1096 12.7735 13.6594 12.96 13.19 12.96C12.21 12.96 11.42 12.17 11.42 11.19C11.42 10.7206 11.6065 10.2704 11.9384 9.93842C12.2704 9.60648 12.7206 9.42 13.19 9.42Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-greenBum">Voucher</p>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-greenBum"
          >
            <path
              d="M1 1L8 8L1 15"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="mx-auto w-4/5 border border-gray-200" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-greenBum">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellowBum"
              >
                <path
                  d="M2.95004 10.4027C2.28059 10.7065 1.56633 10.8999 0.835041 10.9752C0.786755 10.9802 0.738053 10.9711 0.694879 10.9489C0.651705 10.9267 0.615928 10.8924 0.591916 10.8502C0.0500408 9.89522 -0.128084 8.70709 0.0919157 7.40334C0.372541 5.72084 1.28504 4.03647 2.66192 2.6596C4.03879 1.28272 5.72442 0.37022 7.40567 0.0895948C8.83004 -0.14728 10.1163 0.0895949 11.1113 0.752095C11.152 0.778836 11.184 0.816889 11.2034 0.861579C11.2228 0.906269 11.2287 0.955649 11.2204 1.00365C11.2121 1.05165 11.19 1.09618 11.1567 1.13177C11.1234 1.16736 11.0805 1.19245 11.0332 1.20397C10.5648 1.31562 10.1081 1.47174 9.66942 1.67022C8.30879 2.28897 6.56942 3.61147 6.01192 6.40147C5.63004 8.29397 4.60067 9.64022 2.95004 10.4027ZM12.4057 2.14709C12.3817 2.10501 12.346 2.07079 12.303 2.0486C12.2599 2.02641 12.2114 2.0172 12.1632 2.02209C11.4316 2.09695 10.717 2.29031 10.0475 2.59459C8.39692 3.35709 7.36754 4.70334 6.98879 6.59459C6.43067 9.38459 4.69192 10.7071 3.33129 11.3258C2.89259 11.5243 2.43593 11.6804 1.96754 11.7921C1.91915 11.803 1.87509 11.8281 1.84099 11.8641C1.80689 11.9001 1.78427 11.9455 1.77603 11.9944C1.76779 12.0433 1.77429 12.0936 1.7947 12.1388C1.81512 12.1841 1.84852 12.2222 1.89067 12.2483C2.63254 12.7433 3.53567 12.9983 4.53754 12.9983C4.89191 12.9973 5.24559 12.9672 5.59504 12.9083C7.27692 12.6277 8.96192 11.7152 10.3388 10.3383C11.7157 8.96147 12.6282 7.27584 12.9088 5.59459C13.1238 4.29084 12.9475 3.10209 12.4057 2.14709Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-greenBum">
              Loyatly Membership
            </p>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-greenBum"
          >
            <path
              d="M1 1L8 8L1 15"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="mx-auto w-4/5 border border-gray-200" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-greenBum">
              <svg
                width="21"
                height="23"
                viewBox="0 0 21 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellowBum"
              >
                <path
                  d="M14.9924 0.53543C15.6404 0.161532 16.3802 -0.0231633 17.1279 0.00232241C17.8756 0.0278081 18.6011 0.262453 19.2221 0.679606C19.8431 1.09676 20.3347 1.6797 20.641 2.36222C20.9473 3.04474 21.056 3.79947 20.9549 4.54071C20.8538 5.28194 20.5468 5.97996 20.0689 6.55548C19.591 7.13101 18.9612 7.56097 18.2512 7.79653C17.5411 8.03209 16.7792 8.06381 16.0521 7.88808C15.3249 7.71236 14.6616 7.33623 14.1374 6.80243L7.85745 10.4284C7.95545 10.7838 8.00378 11.1411 8.00245 11.5004C8.00245 11.8584 7.95545 12.2194 7.85745 12.5724L14.1374 16.1984C14.8203 15.5059 15.732 15.0858 16.702 15.0166C17.6721 14.9473 18.6342 15.2337 19.4085 15.8221C20.1828 16.4106 20.7164 17.2608 20.9094 18.214C21.1024 19.1672 20.9418 20.1581 20.4574 21.0014C19.9715 21.8462 19.1939 22.4846 18.2706 22.7965C17.3473 23.1085 16.3418 23.0727 15.4431 22.6957C14.5443 22.3188 13.8141 21.6267 13.3896 20.7495C12.965 19.8722 12.8754 18.8701 13.1374 17.9314L6.85745 14.3044C6.3007 14.8714 5.58777 15.2598 4.80949 15.4201C4.03122 15.5805 3.22283 15.5055 2.48732 15.2047C1.75182 14.904 1.12249 14.3911 0.67952 13.7314C0.236553 13.0717 0 12.295 0 11.5004C0 10.7058 0.236553 9.92918 0.67952 9.26948C1.12249 8.60978 1.75182 8.09689 2.48732 7.79614C3.22283 7.49539 4.03122 7.42041 4.80949 7.58074C5.58777 7.74107 6.3007 8.12946 6.85745 8.69643L13.1374 5.07043C12.9001 4.21583 12.9535 3.30659 13.2893 2.48567C13.6251 1.66474 14.2242 0.978707 14.9924 0.53543ZM18.7244 3.00043C18.5941 2.77114 18.4197 2.5699 18.2112 2.4083C18.0027 2.24669 17.7644 2.12792 17.5098 2.05881C17.2553 1.9897 16.9896 1.97163 16.728 2.00562C16.4665 2.03962 16.2142 2.12502 15.9858 2.2569C15.7574 2.38879 15.5573 2.56455 15.3971 2.77407C15.2369 2.98359 15.1197 3.22274 15.0523 3.47774C14.9848 3.73274 14.9685 3.99855 15.0043 4.25988C15.04 4.52121 15.1271 4.77289 15.2604 5.00043C15.5276 5.45604 15.964 5.78751 16.4746 5.92251C16.9852 6.0575 17.5285 5.98505 17.9858 5.72098C18.4432 5.45691 18.7776 5.02264 18.9159 4.51296C19.0543 4.00327 18.9855 3.45955 18.7244 3.00043ZM2.07245 12.0274C2.15351 12.3223 2.30107 12.5948 2.5038 12.8238C2.70652 13.0528 2.95903 13.2323 3.24193 13.3486C3.52483 13.4648 3.83061 13.5147 4.13579 13.4944C4.44097 13.4741 4.73744 13.3841 5.00245 13.2314C5.32598 13.0444 5.59065 12.7705 5.76646 12.4408C5.94226 12.111 6.02217 11.7386 5.99711 11.3658C5.97206 10.9929 5.84305 10.6345 5.6247 10.3313C5.40636 10.028 5.10742 9.79199 4.76178 9.64996C4.41613 9.50793 4.03761 9.46557 3.66912 9.52769C3.30063 9.58982 2.95692 9.75394 2.67695 10.0014C2.39698 10.2489 2.19195 10.5699 2.0851 10.928C1.97826 11.2861 1.97388 11.667 2.07245 12.0274ZM17.9924 17.2694C17.7649 17.136 17.5132 17.049 17.2519 17.0132C16.9906 16.9775 16.7248 16.9938 16.4698 17.0612C16.2148 17.1287 15.9756 17.2458 15.7661 17.4061C15.5566 17.5663 15.3808 17.7664 15.2489 17.9948C15.117 18.2232 15.0316 18.4754 14.9976 18.737C14.9636 18.9986 14.9817 19.2643 15.0508 19.5188C15.1199 19.7734 15.2387 20.0117 15.4003 20.2202C15.5619 20.4286 15.7632 20.6031 15.9924 20.7334C16.4516 20.9945 16.9953 21.0633 17.505 20.9249C18.0147 20.7866 18.4489 20.4522 18.713 19.9948C18.9771 19.5374 19.0495 18.9942 18.9145 18.4836C18.7795 17.973 18.4481 17.5365 17.9924 17.2694Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-greenBum">Referral</p>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-greenBum"
          >
            <path
              d="M1 1L8 8L1 15"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div> */}
      <div className="mt-8 flex flex-col gap-y-3 rounded-xl border border-gray-200 px-4 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-greenBum">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellowBum"
              >
                <path
                  d="M9.95 16C10.3 16 10.596 15.879 10.838 15.637C11.08 15.395 11.2007 15.0993 11.2 14.75C11.1993 14.4007 11.0787 14.1047 10.838 13.862C10.5973 13.6193 10.3013 13.4987 9.95 13.5C9.59867 13.5013 9.303 13.6223 9.063 13.863C8.823 14.1037 8.702 14.3993 8.7 14.75C8.698 15.1007 8.819 15.3967 9.063 15.638C9.307 15.8793 9.60267 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9627 11.1667 11.088 10.85C11.2133 10.5333 11.5673 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70401 13.175 8.31201C13.425 7.92001 13.55 7.44934 13.55 6.9C13.55 5.96667 13.2083 5.25001 12.525 4.75001C11.8417 4.25001 11.0333 4.00001 10.1 4.00001C9.15 4.00001 8.37933 4.25001 7.788 4.75001C7.19667 5.25001 6.784 5.85001 6.55 6.55001L8.2 7.20001C8.28333 6.90001 8.471 6.57501 8.763 6.22501C9.055 5.87501 9.50067 5.70001 10.1 5.70001C10.6333 5.70001 11.0333 5.846 11.3 6.138C11.5667 6.43 11.7 6.75067 11.7 7.10001C11.7 7.43334 11.6 7.746 11.4 8.038C11.2 8.33 10.95 8.60067 10.65 8.85001C9.91667 9.50001 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7377 6.1 19.213C4.88334 18.6883 3.825 17.9757 2.925 17.075C2.025 16.1743 1.31267 15.116 0.788001 13.9C0.263335 12.684 0.000667932 11.384 1.26582e-06 10C-0.000665401 8.616 0.262001 7.31601 0.788001 6.10001C1.314 4.88401 2.02633 3.82567 2.925 2.92501C3.82367 2.02434 4.882 1.31201 6.1 0.788005C7.318 0.264005 8.618 0.00133838 10 5.0505e-06C11.382 -0.00132828 12.682 0.261339 13.9 0.788005C15.118 1.31467 16.1763 2.02701 17.075 2.92501C17.9737 3.82301 18.6863 4.88134 19.213 6.10001C19.7397 7.31867 20.002 8.61867 20 10C19.998 11.3813 19.7353 12.6813 19.212 13.9C18.6887 15.1187 17.9763 16.177 17.075 17.075C16.1737 17.973 15.1153 18.6857 13.9 19.213C12.6847 19.7403 11.3847 20.0027 10 20Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-greenBum">Bumber Care</p>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-greenBum"
          >
            <path
              d="M1 1L8 8L1 15"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="mx-auto w-4/5 border border-gray-200" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-greenBum">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellowBum"
              >
                <path
                  d="M7 15H9V9H7V15ZM8 7C8.28333 7 8.521 6.904 8.713 6.712C8.905 6.52 9.00067 6.28267 9 6C8.99933 5.71733 8.90333 5.48 8.712 5.288C8.52067 5.096 8.28333 5 8 5C7.71667 5 7.47933 5.096 7.288 5.288C7.09667 5.48 7.00067 5.71733 7 6C6.99933 6.28267 7.09533 6.52033 7.288 6.713C7.48067 6.90567 7.718 7.00133 8 7ZM8 20C5.68333 19.4167 3.77067 18.0873 2.262 16.012C0.753334 13.9367 -0.000666225 11.6327 4.41696e-07 9.1V3L8 0L16 3V9.1C16 11.6333 15.246 13.9377 13.738 16.013C12.23 18.0883 10.3173 19.4173 8 20ZM8 17.9C9.73333 17.35 11.1667 16.25 12.3 14.6C13.4333 12.95 14 11.1167 14 9.1V4.375L8 2.125L2 4.375V9.1C2 11.1167 2.56667 12.95 3.7 14.6C4.83333 16.25 6.26667 17.35 8 17.9Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-greenBum">
              Kebijakan Privasi
            </p>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-greenBum"
          >
            <path
              d="M1 1L8 8L1 15"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="mx-auto w-4/5 border border-gray-200" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-greenBum">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellowBum"
              >
                <path
                  d="M12 4.1C11.8191 4.02931 11.6635 3.90592 11.5535 3.74581C11.4435 3.5857 11.3841 3.39625 11.383 3.202C11.383 2.666 11.831 2.23 12.383 2.23C12.4997 2.23067 12.6103 2.249 12.715 2.285C12.7157 2.28167 12.717 2.28067 12.719 2.282C15.834 3.658 18 6.708 18 10.252C18 15.082 13.97 19 9 19C4.03 19 0 15.083 0 10.251C0 6.732 2.137 3.7 5.218 2.31C5.34223 2.25857 5.47555 2.23272 5.61 2.234C6.162 2.234 6.61 2.669 6.61 3.205C6.60906 3.3981 6.5505 3.58653 6.44183 3.74615C6.33316 3.90578 6.17931 4.02933 6 4.101C3.635 5.193 2 7.537 2 10.251C2 14.009 5.134 17.056 9 17.056C12.866 17.056 16 14.009 16 10.251C16 7.537 14.365 5.192 12 4.1ZM9 0C9.26522 0 9.51957 0.105357 9.70711 0.292893C9.89464 0.48043 10 0.734784 10 1V7C10 7.26522 9.89464 7.51957 9.70711 7.70711C9.51957 7.89464 9.26522 8 9 8C8.73478 8 8.48043 7.89464 8.29289 7.70711C8.10536 7.51957 8 7.26522 8 7V1C8 0.734784 8.10536 0.48043 8.29289 0.292893C8.48043 0.105357 8.73478 0 9 0Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-greenBum">Keluar</p>
          </div>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-greenBum"
          >
            <path
              d="M1 1L8 8L1 15"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center text-xs text-gray-400">
          Versi Aplikasi 1.0.0
        </p>
        <p className="mt-8 text-center text-xs text-gray-400">Made by Maher</p>
      </div>
    </main>
  );
}
