"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const path = usePathname();
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];
  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center flex-col gap-3 items-center">
        <Image src={"/chatbot.png"} alt="logo" width={70} height={70} />
        <h1 className="text-md font-semibold ">BabaAI Content Generator</h1>
      </div>
      <hr className="my-3 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            className={`flex gap-2 mb-2 p-3 hover:bg-rose-600 hover:text-white rounded-lg cursor-pointer hover:scale-105 transition-all ${
              path === menu.path && "bg-rose-600 text-white scale-105"
            }`}
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
