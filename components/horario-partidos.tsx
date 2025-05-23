"use client"

import { Badge } from "@/components/ui/badge"

import { CardContent } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PartidoCard } from "@/components/partido-card"
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HorarioPartidos() {
  const isWearable = useMediaQuery("(max-width: 280px)")
  const [activeIndex, setActiveIndex] = useState(0)

  const partidos = [
    {
      id: 1,
      equipoLocal: "Escuela San José",
      equipoVisitante: "Colegio América",
      hora: "09:00",
      campo: "Campo 1",
      categoria: "Sub-12",
    },
    {
      id: 2,
      equipoLocal: "Instituto Cervantes",
      equipoVisitante: "Liceo Francés",
      hora: "10:30",
      campo: "Campo 2",
      categoria: "Sub-14",
    },
    {
      id: 3,
      equipoLocal: "Colegio Madrid",
      equipoVisitante: "Escuela Británica",
      hora: "12:00",
      campo: "Campo 1",
      categoria: "Sub-16",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === partidos.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? partidos.length - 1 : prev - 1))
  }

  if (isWearable) {
    return (
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-semibold">Horarios</h2>
          <Link href="/horarios" className="text-[10px] text-[#E88B8B]">
            Ver todos
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-0.5"
          >
            <ChevronLeft size={14} />
          </button>

          <div className="overflow-hidden">
            <div className="flex">
              {partidos.map((partido, index) => (
                <motion.div
                  key={partido.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex-shrink-0"
                  style={{ display: index === activeIndex ? "block" : "none" }}
                >
                  <PartidoCard partido={{ ...partido, equipoLocal: <span className='break-words whitespace-pre-line'>{partido.equipoLocal}</span>, equipoVisitante: <span className='break-words whitespace-pre-line'>{partido.equipoVisitante}</span> }} />
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-0.5"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="flex justify-center mt-2 space-x-1">
          {partidos.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${index === activeIndex ? "bg-[#E88B8B]" : "bg-gray-300"}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Horarios de Partidos</h2>
        <Link href="/horarios">
          <Button variant="link" className="text-[#E88B8B] hover:text-[#E58ED2]">
            Ver todos los horarios
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {partidos.map((partido) => (
          <PartidoCard key={partido.id} partido={partido} />
        ))}
      </div>
    </section>
  )
}
