"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function Navbar_Item({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");



  return (
    <div>
      <Link
        className={`hover:text-amber-500 ${
          genre === param
            ? " underline underline-offset-8 decoration-4 decoration-orange-400 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
