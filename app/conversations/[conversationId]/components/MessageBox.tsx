"use client";
import Avatar from "@/app/components/Avatar";
import { FullMessageType } from "@/app/types";
import clsx from "clsx";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

interface MessageBoxProps {
  isLast?: boolean;
  message: FullMessageType;
}

const MessageBox: FC<MessageBoxProps> = ({ isLast, message }) => {
  const session = useSession();
  const isOwn = session?.data?.user?.email === message?.sender?.email;
  const seenList = (message.seen || [])
    .filter((user) => user.email !== message?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");

  const avatar = clsx(isOwn && "order-2");

  const body = clsx("flex flex-col gap-2", isOwn && "items-end");

  const msg = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-sky-500 text-white" : "bg-gray-100",
    message.image ? "rounded-md p-0" : "rounded-full py-2 px-3"
  );

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={message.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">{message.sender.name}</div>
          <div className="text-xs text-gray-400">
            {format(new Date(message.createdAt), "p")}
          </div>
        </div>
        <div className={msg}>
          {message.image ? (
            <Image
              alt="Image"
              height="288"
              width="288"
              src={message.image}
              className="translate cursor-pointer object-cover transition hover:scale-110"
            />
          ) : (
            <div>{message.body}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
