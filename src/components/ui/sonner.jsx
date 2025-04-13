"use client"

import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {

  return (
    (<Sonner
      className="toaster group bg-gray-900"
      {...props} />)
  );
}

export { Toaster }
