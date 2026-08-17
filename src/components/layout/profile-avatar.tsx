"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

export default function ProfileAvatar() {
  const { user } = useUser();

  return (
    <Link href="/profile" className="block">
      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#d2e823]/50 hover:border-[#d2e823] transition-all duration-300 hover:shadow-[0_0_12px_rgba(210,232,35,0.4)] cursor-pointer flex-shrink-0">
        <Image
          src={user?.imageUrl || "/falcons_logo.png"}
          alt="Profile"
          width={32}
          height={32}
          className="object-cover w-full h-full"
        />
      </div>
    </Link>
  );
}
