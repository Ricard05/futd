import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { getRandomTeamLogo } from "@/lib/utils"
import type { ReactNode } from "react"

interface PartidoProps {
  partido: {
    id: number
    equipoLocal: string | ReactNode
    equipoVisitante: string | ReactNode
    hora: string
    campo: string
    categoria: string
  }
}

export function PartidoCard({ partido }: PartidoProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow dark:bg-gray-800/50">
      <CardContent className="p-0">
        <div className="p-3 bg-gradient-to-r from-[#E88B8B]/10 to-[#E58ED2]/10 dark:from-[#E88B8B]/20 dark:to-[#E58ED2]/20 border-b flex justify-between items-center">
          <Badge variant="outline" className="bg-white/80 dark:bg-gray-800/80">
            {partido.categoria}
          </Badge>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{partido.hora}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{partido.campo}</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="w-[40%] flex items-center space-x-2 min-w-0">
              <Image
                src={getRandomTeamLogo(typeof partido.equipoLocal === 'string' ? partido.equipoLocal : '')}
                alt={`Logo ${typeof partido.equipoLocal === 'string' ? partido.equipoLocal : ''}`}
                width={28}
                height={28}
                className="rounded-full flex-shrink-0"
              />
              <p className="font-medium text-xs sm:text-base break-words whitespace-pre-line max-w-[90px] sm:max-w-none">
                {partido.equipoLocal}
              </p>
            </div>

            <div className="w-[20%] flex justify-center">
              <div className="bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-white px-3 py-1 rounded-lg font-bold">
                vs
              </div>
            </div>

            <div className="w-[40%] flex items-center justify-end space-x-2 min-w-0">
              <p className="font-medium text-xs sm:text-base break-words whitespace-pre-line max-w-[90px] sm:max-w-none text-right">
                {partido.equipoVisitante}
              </p>
              <Image
                src={getRandomTeamLogo(typeof partido.equipoVisitante === 'string' ? partido.equipoVisitante : '')}
                alt={`Logo ${typeof partido.equipoVisitante === 'string' ? partido.equipoVisitante : ''}`}
                width={28}
                height={28}
                className="rounded-full flex-shrink-0"
              />
            </div>
          </div>
        </div>

        <div className="px-4 pb-4 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="text-xs border-[#E88B8B] text-[#E88B8B] hover:bg-[#E88B8B]/10 hover:text-[#E88B8B] dark:border-[#E88B8B] dark:text-[#E88B8B]"
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
