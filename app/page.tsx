"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PartidoCard } from "@/components/partido-card"
import { AnimatePresence, motion } from "framer-motion"
import { PartidosEnVivo } from "@/components/partidos-en-vivo"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { getRandomTeamLogo } from "@/lib/utils"

interface Partido {
  id: number
  equipoLocal: string
  equipoVisitante: string
  hora: string
  campo: string
  categoria: string
}

interface PartidosPorDia {
  [key: string]: Partido[]
}

export default function PartidosPage() {
  const [diaSeleccionado, setDiaSeleccionado] = useState<keyof PartidosPorDia>("hoy")
  const isWearable = useMediaQuery("(max-width: 280px)")

  const partidos: PartidosPorDia = {
    hoy: [
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
    ],
    manana: [
      {
        id: 4,
        equipoLocal: "Escuela Alemana",
        equipoVisitante: "Colegio Suizo",
        hora: "09:00",
        campo: "Campo 3",
        categoria: "Sub-12",
      },
      {
        id: 5,
        equipoLocal: "Instituto Italiano",
        equipoVisitante: "Liceo Japonés",
        hora: "10:30",
        campo: "Campo 1",
        categoria: "Sub-14",
      },
      {
        id: 6,
        equipoLocal: "Colegio Canadiense",
        equipoVisitante: "Escuela Rusa",
        hora: "12:00",
        campo: "Campo 2",
        categoria: "Sub-16",
      },
    ],
    miercoles: [
      {
        id: 7,
        equipoLocal: "Escuela Portuguesa",
        equipoVisitante: "Colegio Holandés",
        hora: "09:00",
        campo: "Campo 2",
        categoria: "Sub-12",
      },
      {
        id: 8,
        equipoLocal: "Instituto Belga",
        equipoVisitante: "Liceo Sueco",
        hora: "10:30",
        campo: "Campo 3",
        categoria: "Sub-14",
      },
      {
        id: 9,
        equipoLocal: "Colegio Noruego",
        equipoVisitante: "Escuela Danesa",
        hora: "12:00",
        campo: "Campo 1",
        categoria: "Sub-16",
      },
    ],
    jueves: [
      {
        id: 10,
        equipoLocal: "Escuela Finlandesa",
        equipoVisitante: "Colegio Irlandés",
        hora: "09:00",
        campo: "Campo 1",
        categoria: "Sub-12",
      },
      {
        id: 11,
        equipoLocal: "Instituto Escocés",
        equipoVisitante: "Liceo Galés",
        hora: "10:30",
        campo: "Campo 2",
        categoria: "Sub-14",
      },
      {
        id: 12,
        equipoLocal: "Colegio Australiano",
        equipoVisitante: "Escuela Neozelandesa",
        hora: "12:00",
        campo: "Campo 3",
        categoria: "Sub-16",
      },
    ],
    viernes: [
      {
        id: 13,
        equipoLocal: "Semifinal 1",
        equipoVisitante: "Semifinal 2",
        hora: "10:00",
        campo: "Campo Principal",
        categoria: "Sub-12",
      },
      {
        id: 14,
        equipoLocal: "Semifinal 1",
        equipoVisitante: "Semifinal 2",
        hora: "12:00",
        campo: "Campo Principal",
        categoria: "Sub-14",
      },
      {
        id: 15,
        equipoLocal: "Semifinal 1",
        equipoVisitante: "Semifinal 2",
        hora: "14:00",
        campo: "Campo Principal",
        categoria: "Sub-16",
      },
    ],
    sabado: [
      {
        id: 16,
        equipoLocal: "Final",
        equipoVisitante: "Final",
        hora: "10:00",
        campo: "Estadio Principal",
        categoria: "Sub-12",
      },
      {
        id: 17,
        equipoLocal: "Final",
        equipoVisitante: "Final",
        hora: "12:00",
        campo: "Estadio Principal",
        categoria: "Sub-14",
      },
      {
        id: 18,
        equipoLocal: "Final",
        equipoVisitante: "Final",
        hora: "14:00",
        campo: "Estadio Principal",
        categoria: "Sub-16",
      },
    ],
  }

  // Versión para wearables - extremadamente simplificada
  if (isWearable) {
    return (
      <div className="space-y-4 pt-0">
        <PartidosEnVivo />
        <HorariosWearable partidos={partidos[diaSeleccionado]} />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <section className="text-center mb-2">
       
      </section>

      <PartidosEnVivo />

      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-transparent bg-clip-text">
          Partidos
        </h2>

        <Tabs defaultValue="hoy" onValueChange={setDiaSeleccionado} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
            <TabsTrigger value="hoy">Hoy</TabsTrigger>
            <TabsTrigger value="manana">Mañana</TabsTrigger>
            <TabsTrigger value="miercoles">Miércoles</TabsTrigger>
            <TabsTrigger value="jueves">Jueves</TabsTrigger>
            <TabsTrigger value="viernes">Viernes</TabsTrigger>
            <TabsTrigger value="sabado">Sábado</TabsTrigger>
          </TabsList>

          {Object.entries(partidos).map(([dia, partidosList]) => (
            <TabsContent key={dia} value={dia} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={dia}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-4"
                >
                  {partidosList.map((partido) => (
                    <PartidoCard key={partido.id} partido={partido} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

// Componente especial para wearables que muestra horarios en un slider
function HorariosWearable({ partidos }: { partidos: Partido[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === partidos.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? partidos.length - 1 : prev - 1))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-xs font-semibold">Partidos</h2>
        <div className="flex space-x-1">
          {partidos.map((_, index: number) => (
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
            {partidos.map((partido: Partido, index: number) => (
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
                  <CardContent className="p-2 text-[10px]">
                    <div className="flex justify-between items-center mb-1">
                      <Badge variant="outline" className="text-[8px] px-1 py-0">
                        {partido.categoria}
                      </Badge>
                      <span>{partido.hora}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-[40%] flex items-center space-x-1">
                        <Image
                          src={getRandomTeamLogo(partido.equipoLocal)}
                          alt={`Logo ${partido.equipoLocal}`}
                          width={12}
                          height={12}
                          className="rounded-full flex-shrink-0"
                        />
                        <span className="truncate text-[9px]">{partido.equipoLocal}</span>
                      </div>
                      <span className="w-[20%] text-center text-[9px]">vs</span>
                      <div className="w-[40%] flex items-center justify-end space-x-1">
                        <span className="truncate text-[9px]">{partido.equipoVisitante}</span>
                        <Image
                          src={getRandomTeamLogo(partido.equipoVisitante)}
                          alt={`Logo ${partido.equipoVisitante}`}
                          width={12}
                          height={12}
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
