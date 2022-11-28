import React from "react";
import { ITab } from "./types";
import Link from "next/link";
import classnames from 'classnames'

const Tab: React.FC<ITab> = ({ title, isActive = false, onClick, href }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={classnames(
        "py-2 px-3 text-base inline-block cursor-pointer",
        isActive ? "bg-primary text-white-0" : "bg-transparent text-primary"
      )}
    >
      {title}
    </Link>
  );
};

export default Tab;
