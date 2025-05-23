"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Info, Menu, Trophy, UserCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function TopNavigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isWearable = useMediaQuery("(max-width: 280px)")

  if (isWearable) {
    return (
      <div className="fixed top-0 left-0 right-0 h-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between z-50 px-2">
        <h1 className="text-sm font-bold bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-transparent bg-clip-text">
          Mundial Escolar
        </h1>
        <ThemeToggle />
      </div>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link href="/" className="flex items-center justify-center h-full">
          <Image src="/images/logofut.png" alt="Logo Mundial Escolar" width={90} height={90} className="rounded-full " />
        </Link>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {isMobile ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <MobileNavItem
                    href="/"
                    icon={<Calendar size={18} />}
                    label="Partidos"
                    isActive={pathname === "/"}
                    onClick={() => setOpen(false)}
                  />
                  <MobileNavItem
                    href="/resultados"
                    icon={<Trophy size={18} />}
                    label="Resultados"
                    isActive={pathname === "/resultados"}
                    onClick={() => setOpen(false)}
                  />
                  <MobileNavItem
                    href="/reservaciones"
                    icon={<UserCheck size={18} />}
                    label="Reservaciones"
                    isActive={pathname === "/reservaciones"}
                    onClick={() => setOpen(false)}
                  />
                  <MobileNavItem
                    href="/informacion"
                    icon={<Info size={18} />}
                    label="Información"
                    isActive={pathname === "/informacion"}
                    onClick={() => setOpen(false)}
                  />
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex items-center space-x-1">
              <NavItem href="/" label="Partidos" isActive={pathname === "/"} />
              <NavItem href="/resultados" label="Resultados" isActive={pathname === "/resultados"} />
              <NavItem href="/reservaciones" label="Reservaciones" isActive={pathname === "/reservaciones"} />
              <NavItem href="/informacion" label="Información" isActive={pathname === "/informacion"} />
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

function NavItem({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-gradient-to-r from-[#E88B8B]/10 to-[#E58ED2]/10 text-[#E88B8B]"
          : "text-gray-600 hover:text-[#E58ED2] hover:bg-gray-100",
      )}
    >
      {label}
    </Link>
  )
}

function MobileNavItem({
  href,
  icon,
  label,
  isActive,
  onClick,
}: {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-3 px-3 py-2 rounded-md",
        isActive
          ? "bg-gradient-to-r from-[#E88B8B]/10 to-[#E58ED2]/10 text-[#E88B8B]"
          : "text-gray-600 hover:text-[#E58ED2] hover:bg-gray-100",
      )}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}
