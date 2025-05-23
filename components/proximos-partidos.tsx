"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
}

export function ProximosPartidos() {
  const isWearable = useMediaQuery("(max-width: 280px)")
  const [activeIndex, setActiveIndex] = useState(0)

  const proximosPartidos: Partido[] = [
    {
      id: 1,
      equipoLocal: "Escuela Alemana",
      equipoVisitante: "Colegio Suizo",
      hora: "Hoy, 16:30",
      categoria: "Sub-12",
    },
    {
      id: 2,
      equipoLocal: "Instituto Italiano",
      equipoVisitante: "Liceo Japonés",
      hora: "Mañana, 09:00",
      categoria: "Sub-14",
    },
    {
      id: 3,
      equipoLocal: "Colegio Canadiense",
      equipoVisitante: "Escuela Rusa",
      hora: "Mañana, 11:30",
      categoria: "Sub-16",
    },
    {
      id: 4,
      equipoLocal: "Escuela Portuguesa",
      equipoVisitante: "Colegio Holandés",
      hora: "Jueves, 10:00",
      categoria: "Sub-12",
    },
  ]

  if (isWearable) {
    return (
      <div className="mt-4">
        <h2 className="text-sm font-semibold mb-2">Próximos Partidos</h2>
        <div className="relative overflow-hidden">
          <div className="flex">
            {proximosPartidos.map((partido, index) => (
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
                      {partido.categoria}
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
            {proximosPartidos.map((_, index) => (
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
      <h2 className="text-xl font-semibold mb-4">Próximos Partidos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {proximosPartidos.map((partido) => (
          <Card key={partido.id} className="overflow-hidden border-[#E88B8B]/20 hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="p-3 bg-gradient-to-r from-[#E88B8B]/10 to-[#E58ED2]/10 border-b">
                <Badge variant="outline" className="bg-white">
                  {partido.categoria}
                </Badge>
              </div>

              <div className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2 min-w-0">
                    <Image
                      src={getRandomTeamLogo(partido.equipoLocal)}
                      alt={`Logo ${partido.equipoLocal}`}
                      width={20}
                      height={20}
                      className="rounded-full flex-shrink-0"
                    />
                    <span className="font-medium break-words whitespace-pre-line">{partido.equipoLocal}</span>
                  </div>
                  <span className="text-sm">vs</span>
                  <div className="flex items-center space-x-2 min-w-0">
                    <span className="font-medium break-words whitespace-pre-line">{partido.equipoVisitante}</span>
                    <Image
                      src={getRandomTeamLogo(partido.equipoVisitante)}
                      alt={`Logo ${partido.equipoVisitante}`}
                      width={20}
                      height={20}
                      className="rounded-full flex-shrink-0"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-500">{partido.hora}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
