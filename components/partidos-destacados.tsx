"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { getRandomTeamLogo } from "@/lib/utils"

interface Partido {
  id: number
  equipoLocal: string
  equipoVisitante: string
  hora: string
  categoria: string
  destacado: string
}

export function PartidosDestacados() {
  const isWearable = useMediaQuery("(max-width: 280px)")
  const [activeIndex, setActiveIndex] = useState(0)

  const partidosDestacados: Partido[] = [
    {
      id: 1,
      equipoLocal: "Escuela San José",
      equipoVisitante: "Colegio América",
      hora: "Hoy, 15:00",
      categoria: "Sub-12",
      destacado: "Semifinal",
    },
    {
      id: 2,
      equipoLocal: "Instituto Cervantes",
      equipoVisitante: "Liceo Francés",
      hora: "Mañana, 10:00",
      categoria: "Sub-14",
      destacado: "Semifinal",
    },
    {
      id: 3,
      equipoLocal: "Colegio Madrid",
      equipoVisitante: "Escuela Británica",
      hora: "Sábado, 12:00",
      categoria: "Sub-16",
      destacado: "Final",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === partidosDestacados.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? partidosDestacados.length - 1 : prev - 1))
  }

  if (isWearable) {
    return (
      <div className="relative">
        <h2 className="text-sm font-semibold mb-2">Partidos Destacados</h2>
        <div className="relative overflow-hidden">
          <div className="flex">
            {partidosDestacados.map((partido, index) => (
              <motion.div
                key={partido.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                }}
                transition={{ duration: 0.3 }}
                className="w-full flex-shrink-0"
                style={{ display: index === activeIndex ? "block" : "none" }}
              >
                <Card className="border-[#E88B8B]/20">
                  <CardContent className="p-2 text-xs">
                    <Badge variant="outline" className="mb-1 text-[10px]">
                      {partido.categoria} - {partido.destacado}
                    </Badge>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center space-x-1">
                        <Image
                          src={getRandomTeamLogo(partido.equipoLocal)}
                          alt={`Logo ${partido.equipoLocal}`}
                          width={12}
                          height={12}
                          className="rounded-full flex-shrink-0"
                        />
                        <span className="font-medium break-words whitespace-pre-line">{partido.equipoLocal}</span>
                      </div>
                      <span className="font-medium">vs</span>
                      <div className="flex items-center space-x-1">
                        <span className="font-medium break-words whitespace-pre-line">{partido.equipoVisitante}</span>
                        <Image
                          src={getRandomTeamLogo(partido.equipoVisitante)}
                          alt={`Logo ${partido.equipoVisitante}`}
                          width={12}
                          height={12}
                          className="rounded-full flex-shrink-0"
                        />
                      </div>
                    </div>
                    <div className="text-[10px] text-gray-500">{partido.hora}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-2 space-x-1">
            {partidosDestacados.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${index === activeIndex ? "bg-[#E88B8B]" : "bg-gray-300"}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Partidos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {partidosDestacados.map((partido) => (
          <Card key={partido.id} className="overflow-hidden border-[#E88B8B]/20 hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="p-4 bg-gradient-to-r from-[#E88B8B]/10 to-[#E58ED2]/10 border-b">
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="bg-white">
                    {partido.categoria}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-white border-0"
                  >
                    {partido.destacado}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-7 p-4 items-center">
                <div className="col-span-3 text-right">
                  <div className="flex items-center justify-end space-x-2 min-w-0">
                    <p className="font-medium break-words whitespace-pre-line">{partido.equipoLocal}</p>
                    <Image
                      src={getRandomTeamLogo(partido.equipoLocal)}
                      alt={`Logo ${partido.equipoLocal}`}
                      width={24}
                      height={24}
                      className="rounded-full flex-shrink-0"
                    />
                  </div>
                </div>

                <div className="col-span-1 flex justify-center">
                  <div className="bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-white px-3 py-1 rounded-lg font-bold">
                    vs
                  </div>
                </div>

                <div className="col-span-3 text-left">
                  <div className="flex items-center space-x-2 min-w-0">
                    <Image
                      src={getRandomTeamLogo(partido.equipoVisitante)}
                      alt={`Logo ${partido.equipoVisitante}`}
                      width={24}
                      height={24}
                      className="rounded-full flex-shrink-0"
                    />
                    <p className="font-medium break-words whitespace-pre-line">{partido.equipoVisitante}</p>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{partido.hora}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-[#E88B8B] text-[#E88B8B] hover:bg-[#E88B8B]/10 hover:text-[#E88B8B]"
                >
                  Reservar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
