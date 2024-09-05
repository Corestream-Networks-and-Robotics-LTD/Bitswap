import React from "react";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className,
  target,
}) => {
  return (
    <Link href={href} className={className} target={target}>
      {title}
    </Link>
  );
};

export default CustomLink;
