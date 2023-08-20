import Link from "next/link";
import React from "react";

const Button = (props) => {
  const { link, children } = props;
  return (
    <Link href={link} className="actions">
      <span className="btn">{children} </span>
    </Link>
  );
};

export default Button;
