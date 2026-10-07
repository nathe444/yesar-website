import type { ReactNode } from "react";

export function Pill({
  children,
  href,
  solid = false,
  nav = false,
}: {
  children: ReactNode;
  href?: string;
  solid?: boolean;
  nav?: boolean;
}) {
  const shape = nav ? "pill-nav" : "pill";
  const tone = solid
    ? "bg-[#472313] text-[#fff8ec]"
    : "border-[0.5px] border-[rgba(71,35,19,0.55)] text-[#472313]";

  return (
    <a href={href} className={`${shape} ${tone} w-fit`}>
      {children}
    </a>
  );
}
