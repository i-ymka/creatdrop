"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentPropsWithoutRef } from "react";

type CTALinkProps = ComponentPropsWithoutRef<typeof Link> & {
  location: string;
};

export function CTALink({ location, onClick, ...props }: CTALinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        track("cta_click", { location });
        onClick?.(e);
      }}
    />
  );
}
