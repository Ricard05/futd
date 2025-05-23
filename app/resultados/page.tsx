"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { getRandomTeamLogo } from "@/lib/utils"
import { Calendar } from "lucide-react"

export default function ResultadosPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("sub12")

  const resultados = {
    sub12: [
      {
        id: 1,
        equipoLocal: "Escuela San José",
        golesLocal: 3,
        equipoVisitante: "Colegio América",
        golesVisitante: 1,
        fecha: "Lunes, 10:00",
        estado: "Finalizado",
      },
      {
        id: 2,
        equipoLocal: "Instituto Cervantes",
        golesLocal: 2,
        equipoVisitante: "Liceo Francés",
        golesVisitante: 2,
        fecha: "Lunes, 12:00",
        estado: "Finalizado",
      },
      {
        id: 3,
        equipoLocal: "Escuela Alemana",
        golesLocal: 4,
        equipoVisitante: "Colegio Suizo",
        golesVisitante: 0,
        fecha: "Martes, 10:00",
        estado: "Finalizado",
      },
      {
        id: 4,
        equipoLocal: "Escuela Portuguesa",
        golesLocal: 1,
        equipoVisitante: "Colegio Holandés",
        golesVisitante: 3,
        fecha: "Miércoles, 10:00",
        estado: "Finalizado",
      },
    ],
    sub14: [
      {
        id: 5,
        equipoLocal: "Colegio Madrid",
        golesLocal: 2,
        equipoVisitante: "Escuela Británica",
        golesVisitante: 0,
        fecha: "Lunes, 14:00",
        estado: "Finalizado",
      },
      {
        id: 6,
        equipoLocal: "Instituto Italiano",
        golesLocal: 1,
        equipoVisitante: "Liceo Japonés",
        golesVisitante: 1,
        fecha: "Martes, 12:00",
        estado: "Finalizado",
      },
      {
        id: 7,
        equipoLocal: "Instituto Belga",
        golesLocal: 3,
        equipoVisitante: "Liceo Sueco",
        golesVisitante: 2,
        fecha: "Miércoles, 12:00",
        estado: "Finalizado",
      },
      {
        id: 8,
        equipoLocal: "Instituto Escocés",
        golesLocal: 0,
        equipoVisitante: "Liceo Galés",
        golesVisitante: 0,
        fecha: "Jueves, 12:00",
        estado: "En curso",
      },
    ],
    sub16: [
      {
        id: 9,
        equipoLocal: "Colegio Canadiense",
        golesLocal: 2,
        equipoVisitante: "Escuela Rusa",
        golesVisitante: 1,
        fecha: "Martes, 14:00",
        estado: "Finalizado",
      },
      {
        id: 10,
        equipoLocal: "Colegio Noruego",
        golesLocal: 0,
        equipoVisitante: "Escuela Danesa",
        golesVisitante: 2,
        fecha: "Miércoles, 14:00",
        estado: "Finalizado",
      },
      {
        id: 11,
        equipoLocal: "Colegio Australiano",
        golesLocal: 3,
        equipoVisitante: "Escuela Neozelandesa",
        golesVisitante: 3,
        fecha: "Jueves, 14:00",
        estado: "Finalizado",
      },
      {
        id: 12,
        equipoLocal: "Semifinal 1",
        golesLocal: 0,
        equipoVisitante: "Semifinal 2",
        golesVisitante: 0,
        fecha: "Viernes, 14:00",
        estado: "Próximamente",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-transparent bg-clip-text">
        Resultados
      </h1>

      <Tabs defaultValue="sub12" onValueChange={setCategoriaSeleccionada} className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="sub12">Sub-12</TabsTrigger>
          <TabsTrigger value="sub14">Sub-14</TabsTrigger>
          <TabsTrigger value="sub16">Sub-16</TabsTrigger>
        </TabsList>

        {Object.entries(resultados).map(([categoria, resultadosList]) => (
          <TabsContent key={categoria} value={categoria} className="mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={categoria}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-4"
              >
                {resultadosList.map((resultado) => (
                  <Card key={resultado.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-4 bg-gradient-to-r from-[#E88B8B]/10 to-[#E58ED2]/10 border-b flex justify-between items-center">
                        <Badge variant="outline" className="bg-white/80 dark:bg-gray-800/80">
                          {categoria}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{resultado.fecha}</span>
                          </div>
                          <Badge variant="secondary" className="bg-green-500 text-white">
                            {resultado.estado}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="w-[35%] flex items-center space-x-2">
                            <Image
                              src={getRandomTeamLogo(resultado.equipoLocal)}
                              alt={`Logo ${resultado.equipoLocal}`}
                              width={32}
                              height={32}
                              className="rounded-full flex-shrink-0"
                            />
                            <p className="font-medium text-xs sm:text-base break-words whitespace-pre-line">{resultado.equipoLocal}</p>
                          </div>

                          <div className="w-[30%] flex justify-center">
                            <div className="bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-white rounded-lg font-bold flex items-center justify-center min-w-[80px] py-2 px-4">
                              <span className="text-base sm:text-lg">{resultado.golesLocal}</span>
                              <span className="mx-2">-</span>
                              <span className="text-base sm:text-lg">{resultado.golesVisitante}</span>
                            </div>
                          </div>

                          <div className="w-[35%] flex items-center justify-end space-x-2">
                            <p className="font-medium text-xs sm:text-base break-words whitespace-pre-line">{resultado.equipoVisitante}</p>
                            <Image
                              src={getRandomTeamLogo(resultado.equipoVisitante)}
                              alt={`Logo ${resultado.equipoVisitante}`}
                              width={32}
                              height={32}
                              className="rounded-full flex-shrink-0"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
