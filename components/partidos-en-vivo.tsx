"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { getRandomTeamLogo } from "@/lib/utils"

export function PartidosEnVivo() {
  const isWearable = useMediaQuery("(max-width: 280px)")
  const [activeIndex, setActiveIndex] = useState(0)

  const partidosEnVivo = [
    {
      id: 1,
      equipoLocal: "Escuela San José",
      golesLocal: 2,
      equipoVisitante: "Colegio América",
      golesVisitante: 1,
      minuto: 67,
      categoria: "Sub-12",
    },
    {
      id: 2,
      equipoLocal: "Instituto Cervantes",
      golesLocal: 0,
      equipoVisitante: "Liceo Francés",
      golesVisitante: 0,
      minuto: 23,
      categoria: "Sub-14",
    },
    {
      id: 3,
      equipoLocal: "Colegio Madrid",
      golesLocal: 3,
      equipoVisitante: "Escuela Británica",
      golesVisitante: 2,
      minuto: 89,
      categoria: "Sub-16",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === partidosEnVivo.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? partidosEnVivo.length - 1 : prev - 1))
  }

  if (isWearable) {
    return (
      <div className="">
        <div className="flex justify-between items-center mb-1 ">
          <h2 className="text-xs font-semibold">En Vivo</h2>
          <div className="flex space-x-1">
            {partidosEnVivo.map((_, index) => (
              <button
                key={index}
                className={`w-1 h-1 rounded-full ${index === activeIndex ? "bg-[#E88B8B]" : "bg-gray-300 dark:bg-gray-600"}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full p-0.5"
          >
            <ChevronLeft size={12} />
          </button>

          <div className="overflow-hidden">
            <div className="flex">
              {partidosEnVivo.map((partido, index) => (
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
                  <Card className="border-[#E88B8B]/20">
                    <CardContent className="p-2 text-[10px]">
                      <div className="flex justify-between items-center mb-1">
                        <Badge variant="secondary" className="bg-red-500 text-white text-[8px] px-1 py-0">
                          EN VIVO
                        </Badge>
                        <span>{partido.minuto}'</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="w-[35%] flex items-center space-x-1">
                          <Image
                            src={getRandomTeamLogo(partido.equipoLocal)}
                            alt={`Logo ${partido.equipoLocal}`}
                            width={14}
                            height={14}
                            className="rounded-full flex-shrink-0"
                          />
                          <span className="text-[9px] break-words whitespace-pre-line">{partido.equipoLocal}</span>
                        </div>
                        <div className="w-[30%] bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-white rounded-md flex items-center justify-center py-0.5 px-1">
                          <span className="text-[10px]">{partido.golesLocal}</span>
                          <span className="mx-1 text-[10px]">-</span>
                          <span className="text-[10px]">{partido.golesVisitante}</span>
                        </div>
                        <div className="w-[35%] flex items-center justify-end space-x-1">
                          <span className="text-[9px] break-words whitespace-pre-line">{partido.equipoVisitante}</span>
                          <Image
                            src={getRandomTeamLogo(partido.equipoVisitante)}
                            alt={`Logo ${partido.equipoVisitante}`}
                            width={14}
                            height={14}
                            className="rounded-full flex-shrink-0"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full p-0.5"
          >
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Partidos En Vivo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {partidosEnVivo.map((partido) => (
          <Card
            key={partido.id}
            className="overflow-hidden border-[#E88B8B]/20 hover:shadow-md transition-shadow dark:bg-gray-800/50"
          >
            <CardContent className="p-0">
              <div className="p-4 bg-gradient-to-r from-[#E88B8B]/10 to-[#E58ED2]/10 dark:from-[#E88B8B]/20 dark:to-[#E58ED2]/20 border-b flex justify-between items-center">
                <Badge variant="secondary" className="bg-red-500 text-white border-0 animate-pulse">
                  EN VIVO
                </Badge>
                <Badge variant="outline" className="bg-white/80 dark:bg-gray-800/80">
                  {partido.categoria}
                </Badge>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="w-[35%] flex items-center space-x-2">
                    <Image
                      src={getRandomTeamLogo(partido.equipoLocal)}
                      alt={`Logo ${partido.equipoLocal}`}
                      width={32}
                      height={32}
                      className="rounded-full flex-shrink-0"
                    />
                    <p className="font-medium text-xs sm:text-base break-words whitespace-pre-line">{partido.equipoLocal}</p>
                  </div>

                  <div className="w-[30%] flex justify-center">
                    <div className="bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-white rounded-lg font-bold flex items-center justify-center min-w-[80px] py-2 px-4">
                      <span className="text-base sm:text-lg">{partido.golesLocal}</span>
                      <span className="mx-2">-</span>
                      <span className="text-base sm:text-lg">{partido.golesVisitante}</span>
                    </div>
                  </div>

                  <div className="w-[35%] flex items-center justify-end space-x-2">
                    <p className="font-medium text-xs sm:text-base break-words whitespace-pre-line">{partido.equipoVisitante}</p>
                    <Image
                      src={getRandomTeamLogo(partido.equipoVisitante)}
                      alt={`Logo ${partido.equipoVisitante}`}
                      width={32}
                      height={32}
                      className="rounded-full flex-shrink-0"
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 flex justify-between items-center">
                <span className="text-xs sm:text-sm font-semibold text-red-500">{partido.minuto}'</span>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Hoy</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
