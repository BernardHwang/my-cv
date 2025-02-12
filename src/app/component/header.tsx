'use client'

import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@heroui/react"
import { FundProjectionScreenOutlined, HomeOutlined, InfoCircleOutlined, ProfileOutlined } from "@ant-design/icons";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: "About",
            href: "#about",
            icon: <InfoCircleOutlined />,
        },
        {
            name: "Project",
            href: "#projects",
            icon: <FundProjectionScreenOutlined />,
        },
        {
            name: "Resume",
            href: "/resume.pdf", // Change this to your actual resume file
            icon: <ProfileOutlined />,
            isDownload: true, // Flag to indicate download behavior
        },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarBrand>
                    <p className="font-bold text-inherit">BH</p>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            color="foreground"
                            href={item.href}
                            className="gap-2"
                            {...(item.isDownload ? { download: true } : {})} // Enable download if isDownload is true
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link
                            className="w-full gap-2"
                            href={item.href}
                            size="lg"
                            {...(item.isDownload ? { download: true } : {})} // Enable download if isDownload is true
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
