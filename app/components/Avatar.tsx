"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";

interface AvatarProps {
  user?: User;
}

const Avatar: FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div className="relative inline-block h-9 w-9 overflow-hidden rounded-full md:h-11 md:w-11">
        <Image
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
          fill
        />
      </div>
      <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-green-600 ring-2 ring-white md:h-3 md:w-3" />
    </div>
  );
};

export default Avatar;
