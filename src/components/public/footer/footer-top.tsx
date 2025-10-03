import Image from "next/image";
import Link from "next/link";
import React from "react";

const navTitles = [
  { title: "صفحه اصلی", href: "/" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس", href: "/contact" },
];

export default function FooterTop() {
  return (
    <div className="flex flex-col-reverse gap-y-6 md:flex-row md:justify-between md:items-center">
      <nav>
        <ul className="flex items-center space-x-8">
          {navTitles.map((navTitle) => (
            <li className="border-l pl-6" key={navTitle.href}>
              <Link href={navTitle.href}>{navTitle.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-x-2">
        <Image src="/images/logo.png" alt="logo" width={32} height={32} />
        <span className="font-iran-bold">سفر کن</span>
      </div>
    </div>
  );
}
