"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export const NavLink: React.ComponentType<NavLinkProps> = ({
    href,
    children,
}) => {
    const pathname = usePathname();

    return (
        <Link data-active={Boolean(pathname === href)} href={href}>
            {children}
        </Link>
    );
};
