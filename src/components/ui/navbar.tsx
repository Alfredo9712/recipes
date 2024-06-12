import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { PiForkKnifeFill } from "react-icons/pi";
import { PiCookingPotFill } from "react-icons/pi";

type NavbarProps = {
  name?: string | null;
  image?: string | null;
};

const Navbar = ({ name, image }: NavbarProps) => {
  return (
    <nav className="flex h-16 items-center justify-between">
      <div className="text-2xl font-semibold">Recipe Vault</div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2 font-thin cursor-pointer">
          <PiForkKnifeFill size={20} />
          Recipes
        </div>
        <div className="flex items-center gap-2 font-thin cursor-pointer">
          <PiCookingPotFill size={20} />
          Create Recipe
        </div>
      </div>
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
