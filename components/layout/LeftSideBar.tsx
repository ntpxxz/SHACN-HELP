"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants"

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-12 bg-blue-2 shadow-xl max-lg:hidden">
    <Image src="/vercel.svg" alt="logo" width={150} height={70} />
   
    <div className="flex flex-col gap-8">
    {navLinks.General.map((link) => (
      <Link
        href={link.url}
        key={link.label}
        className={`flex gap-2 text-body-medium ${
          pathname === link.url ? "text-blue-1" : "text-grey-1"
        }`}
      >
        {link.icon} <p>{link.label}</p>
      </Link>
    ))}
     {navLinks.Setting.map((link) => (
      <Link
        href={link.url}
        key={link.label}
        className={`flex gap-4 text-body-medium ${
          pathname === link.url ? "text-blue-1" : "text-grey-1"
        }`}
      >
        {link.icon} <p>{link.label}</p>
      </Link>
    ))}
  </div>
  </div>
  )
}

export default LeftSideBar