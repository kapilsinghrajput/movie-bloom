import Link from "next/link";
import React from "react";

const MenuItem = ({ title, Path, Icon }) => {
  return (
    <Link href={Path}>
      <Icon className="text-2xl sm:hidden " />
      <p className=" font-semibold uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
