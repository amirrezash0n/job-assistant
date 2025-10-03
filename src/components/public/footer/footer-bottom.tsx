import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import React from "react";

const socialInfos = [
  { title: "instagram", icon: FaInstagram },
  { title: "facebook", icon: FaFacebookF },
  { title: "x", icon: FaTwitter },
];

export default function FooterBottom() {
  return (
    <div className="flex flex-col-reverse gap-y-6 md:flex-row md:justify-between md:items-center">
      <p className="text-sm">تمامی حقوق برای کاربر این محصول محفوظ است.</p>
      <ul className="flex md:justify-center md:items-center gap-x-6">
        {socialInfos.map((social) => {
          const IconComponent = social.icon;

          return (
            <li key={social.title}>
              <a href={`https://www.${social.title}.com/`} target="_blank">
                <IconComponent size={20} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
