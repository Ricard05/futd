"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

export default function ReservacionesPage() {
  const [partido, setPartido] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [seccion, setSeccion] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!partido || !cantidad || !seccion) {
      toast({
        title: "Error en la reservación",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "¡Reservación exitosa!",
      description: `Has reservado ${cantidad} lugares para el partido ${partido} en la sección ${seccion}`,
    })

    // Reset form
    setPartido("")
    setCantidad("")
    setSeccion("")
  }

  const partidos = [
    { id: "final-sub12", nombre: "Final Sub-12 (Sábado 10:00)" },
    { id: "final-sub14", nombre: "Final Sub-14 (Sábado 12:00)" },
    { id: "final-sub16", nombre: "Final Sub-16 (Sábado 14:00)" },
    { id: "semi1-sub12", nombre: "Semifinal 1 Sub-12 (Viernes 10:00)" },
    { id: "semi2-sub12", nombre: "Semifinal 2 Sub-12 (Viernes 12:00)" },
    { id: "semi1-sub14", nombre: "Semifinal 1 Sub-14 (Viernes 14:00)" },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-transparent bg-clip-text mb-6">
        Reservación de Lugares
      </h1>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-[#E88B8B]/20 shadow-lg">
          <CardHeader>
            <CardTitle>Reserva tu lugar</CardTitle>
            <CardDescription>Asegura tu asistencia a los partidos más importantes del torneo</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="partido">Selecciona el partido</Label>
                <Select value={partido} onValueChange={setPartido}>
                  <SelectTrigger id="partido">
                    <SelectValue placeholder="Selecciona un partido" />
                  </SelectTrigger>
                  <SelectContent>
                    {partidos.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cantidad">Cantidad de lugares</Label>
                <Select value={cantidad} onValueChange={setCantidad}>
                  <SelectTrigger id="cantidad">
                    <SelectValue placeholder="Selecciona la cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seccion">Sección</Label>
                <Select value={seccion} onValueChange={setSeccion}>
                  <SelectTrigger id="seccion">
                    <SelectValue placeholder="Selecciona la sección" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="preferente">Preferente</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] hover:from-[#E58ED2] hover:to-[#E88B8B] transition-all duration-300"
            >
              Reservar Ahora
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <div className="mt-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-[#E88B8B]/20">
        <h2 className="font-semibold text-lg mb-2">Información importante</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
          <li>Las reservaciones están sujetas a disponibilidad</li>
          <li>Debes recoger tus entradas 1 hora antes del partido</li>
          <li>Presenta tu identificación al momento de recoger las entradas</li>
          <li>No hay reembolsos por cancelaciones</li>
        </ul>
      </div>
    </div>
  )
}
