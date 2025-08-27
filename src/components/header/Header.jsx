import React, { useState } from "react";
import airbnbLogo from "../../../public/Airbnb_Logo.webp";
import { AnimatePresence, motion } from "motion/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed w-full bg-white duration-300 z-50 left-0 top-0 shadow-md ">
      <div className="w-[95%] mx-auto  flex justify-between items-center h-16 duration-300 transition-all">
        <img src={airbnbLogo} alt="" className="w-24" />
        <div
          className="flex gap-5 border-gray-200 border-2 py-2 px-4 rounded-3xl hover:shadow-md hover:cursor-pointer hover:duration-400 hover:ease-out"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Dropdown menu với animation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute right-9 top-16 w-40 rounded-xl bg-white shadow-lg"
            >
              <ul className="flex flex-col">
                <li className="px-3 py-1.5 text-[14px] font-semibold hover:bg-gray-100 cursor-pointer">
                  Đăng ký
                </li>
                <li className="px-3 py-1.5 text-[14px]  font-semibold hover:bg-gray-100 cursor-pointer">
                  Đăng nhập
                </li>
                <li className="px-3 py-1.5 text-[14px]  hover:bg-gray-100 cursor-pointer">
                  Cho thuê nhà
                </li>
                <li className="px-3 py-1.5 text-[14px]  hover:bg-gray-100 cursor-pointer">
                  Tổ chức trải nghiệm
                </li>
                <li className="px-3 py-1.5 text-[14px]  hover:bg-gray-100 cursor-pointer">
                  Trợ giúp
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
