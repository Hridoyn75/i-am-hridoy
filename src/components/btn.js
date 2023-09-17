import Link from "next/link";
import React from "react";

const Button = ({href, text}) => {
  return (
    <Link className="special_btn different_bg w-fit mx-auto" href={href}>
      {text}
    </Link>
  );
};

export default Button;
