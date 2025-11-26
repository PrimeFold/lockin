"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import { Component, Layout, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Drawer } from "vaul";
import NavbarButton from "./navbar-button";
import ThemeSwitch from "./theme-switcher";

export function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

interface HomeHeaderProps {
  localTheme: "light" | "dark";
  setLocalTheme: (theme: "light" | "dark") => void;
}

export default function HomeHeader({
  localTheme,
  setLocalTheme,
}: HomeHeaderProps) {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/#features", label: "Features", icon: Component },
    { href: "/#pricing", label: "Pricing", icon: Wallet },
    { href: "/pages/about", label: "About", icon: Layout },
  ];
  
  return (
    <header className="w-full sticky top-0 z-50 lg:flex lg:items-center lg:px-8 lg:py-0 text-primary-foreground backdrop-blur-md backdrop-saturate-150">
      <div className="flex md:max-w-screen-lg mx-auto w-full items-center relative justify-between h-16 px-4 p-2 bg-white/95 dark:bg-zinc-950/95 border dark:border-neutral-800 border-neutral-200 rounded-b-xl shadow-sm">
        {isMobile && (
          <Drawer.Root direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger className="px-3 text-white h-10 grid place-content-center bg-gradient-to-b from-blue-500 from-100% to-blue-700 w-fit rounded-lg">
              <AlignJustify />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
              <Drawer.Content
                className="left-2 top-2 bottom-2 fixed z-50 outline-none w-72 flex"
                style={
                  {
                    "--initial-transform": "calc(100% + 8px)",
                  } as React.CSSProperties
                }
              >
                <div className="dark:bg-black bg-white border border-neutral-200 dark:border-neutral-800 p-2 h-full w-full grow flex flex-col rounded-[16px]">
                  <div className="w-full flex justify-between mb-2">
                    <Link href="/" className="flex items-center pl-2 font-bold text-xl">
                      Logo
                    </Link>
                    <button
                      className="rounded-md w-fit bg-neutral-950 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      <X />
                    </button>
                  </div>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "cursor-pointer gap-1 select-none p-2 dark:text-white dark:hover:text-blue-200 hover:text-base-blue rounded-md transition-colors duration-150 flex items-center justify-start", // 3/4 duration of original
                        pathname.startsWith(item.href) &&
                          "dark:text-white dark:border dark:border-blue-950 text-base-blue dark:bg-neutral-900 bg-neutral-200",
                      )}
                    >
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        )}
        {!isMobile && (
          <>
            <nav className="flex gap-2 items-center font-medium">
              <Link href="/" className="text-white flex items-center pl-2 font-bold text-xl">
                Logo
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "cursor-pointer gap-1 select-none p-2 dark:hover:text-blue-200 hover:text-base-blue rounded-md transition-colors duration-150 flex items-center justify-center", // 3/4 duration of original
                    pathname.startsWith(item.href) &&
                      "text-white dark:border dark:border-blue-950 dark:bg-neutral-900 bg-neutral-200",
                  )}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </>
        )}
        
        <nav className="flex items-center gap-2">
          <div className="flex gap-2 border-2 h-fit w-fit">
            <ThemeSwitch localTheme={localTheme} setLocalTheme={setLocalTheme}/>
          </div>
          <NavbarButton>
            <Link href="/auth/login">
              Get Started
            </Link>
          </NavbarButton>
        </nav>
      </div>
    </header>
  );
}