"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Info, Trophy, UserCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

export function BottomNavigation() {
  const pathname = usePathname()
  const isWearable = useMediaQuery("(max-width: 280px)")
  const isMobile = useMediaQuery("(max-width: 768px)")

  if (isWearable) {
    return null
  }

  if (!isMobile) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-around items-center h-16">
        <NavItem href="/" icon={<Calendar size={20} />} label="Partidos" isActive={pathname === "/"} />
        <NavItem
          href="/resultados"
          icon={<Trophy size={20} />}
          label="Resultados"
          isActive={pathname === "/resultados"}
        />
        <NavItem
          href="/reservaciones"
          icon={<UserCheck size={20} />}
          label="Reservar"
          isActive={pathname === "/reservaciones"}
        />
        <NavItem href="/informacion" icon={<Info size={20} />} label="Info" isActive={pathname === "/informacion"} />
      </div>
    </div>
  )
}

function NavItem({
  href,
  icon,
  label,
  isActive,
}: { href: string; icon: React.ReactNode; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center w-full h-full",
        isActive ? "text-[#E88B8B]" : "text-gray-500 hover:text-[#E58ED2] transition-colors",
      )}
    >
      <div className="relative">
        {icon}
        {isActive && (
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#E88B8B] rounded-full" />
        )}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  )
}
