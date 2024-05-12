'use client'

import { Button, theme } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SideMenuButtonProps = {
    url: string;
    label: string;
}

export default function SideMenuButton({ 
    url,
    label
 }: SideMenuButtonProps) {

    const pathName = usePathname();

    return (
        <Button as={Link} href={url} colorScheme={pathName === url ? "green" : "gray"}>{label}</Button>
    );
}