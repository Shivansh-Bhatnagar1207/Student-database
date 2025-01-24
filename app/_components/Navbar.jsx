"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
export default function Navbar() {
  const { isSignedIn } = useUser();
  return (
    <div className="navbar w-[80%]  mx-auto my-4 border-black border bg-primary rounded-full ">
      <div className="flex-1">
        <p className="btn btn-primary text-xl">
          <Link href="/">Student Database</Link>
        </p>
      </div>
      <div className="px-2">
        {isSignedIn ? <UserButton /> : <SignInButton className="btn" />}
      </div>
    </div>
  );
}
