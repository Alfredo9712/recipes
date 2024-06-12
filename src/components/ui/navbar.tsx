import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type NavbarProps = {
  name?: string | null;
  image?: string | null;
};

const Navbar = ({ name, image }: NavbarProps) => {
  console.log(typeof image);
  return (
    <nav className="flex h-12 items-center justify-between">
      <div className="text-2xl font-semibold">Recipe Vault</div>
      {image && name && (
        <div>
          <Avatar>
            <AvatarImage src={image} referrerPolicy="no-referrer" />
            <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
