"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface MobileItemProps {
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: FC<MobileItemProps> = ({
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        `
      group
      flex
      w-full
      justify-center
      gap-x-3
      p-4
      text-sm
      font-semibold
      leading-6
      text-gray-500
      hover:bg-gray-100
      hover:text-black
    `,
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
