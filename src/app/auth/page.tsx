"use client";

import { useSession } from "next-auth/react";

import React from "react";
import { auth } from "../../../auth";

const Test = () => {
  const session = useSession();
  console.log(session.data?.user);
  return <div></div>;
};

export default Test;
