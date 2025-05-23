import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { getRandomTeamLogo } from "@/lib/utils"

export default function InformacionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#E88B8B] to-[#E58ED2] text-transparent bg-clip-text">
        Información General
      </h1>

      <Tabs defaultValue="torneo" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
          <TabsTrigger value="torneo">El Torneo</TabsTrigger>
          <TabsTrigger value="sedes">Sedes</TabsTrigger>
          <TabsTrigger value="equipos">Equipos</TabsTrigger>
          <TabsTrigger value="contacto">Contacto</TabsTrigger>
        </TabsList>

        <TabsContent value="torneo" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Sobre el Mundial Escolar</CardTitle>
              <CardDescription>Todo lo que necesitas saber sobre este evento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://guiauniversitaria.mx/wp-content/uploads/2022/11/Beneficios-y-cosas-que-el-futbol-te-ensena-para-la-vida.jpg"
                  alt="Mundial Escolar de Fútbol"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <p>
                  El Mundial Escolar de Fútbol es un torneo internacional que reúne a escuelas de todo el mundo para
                  competir en diferentes categorías de edad.
                </p>

                <h3 className="font-semibold text-lg">Categorías</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Sub-12: Nacidos después del 1 de enero de 2012</li>
                  <li>Sub-14: Nacidos después del 1 de enero de 2010</li>
                  <li>Sub-16: Nacidos después del 1 de enero de 2008</li>
                </ul>

                <h3 className="font-semibold text-lg">Fechas importantes</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Ceremonia de inauguración: Domingo, 18:00</li>
                  <li>Fase de grupos: Lunes a Jueves</li>
                  <li>Semifinales: Viernes</li>
                  <li>Finales: Sábado</li>
                  <li>Ceremonia de clausura: Sábado, 18:00</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sedes" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Sedes del Torneo</CardTitle>
              <CardDescription>Conoce las instalaciones donde se llevarán a cabo los partidos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Estadio_Akron_02-07-2022_cabecera_sur_lado_derecho.jpg"
                      alt="Estadio Principal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Estadio Principal</h3>
                  <p className="text-sm text-gray-600">Sede de las finales y ceremonias</p>
                </div>

                <div className="space-y-2">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Estadio_Ol%C3%ADmpico_Universitario_-_5.jpg" alt="Campo 1" fill className="object-cover" />
                  </div>
                  <h3 className="font-semibold">Campo 1</h3>
                  <p className="text-sm text-gray-600">Partidos de fase de grupos</p>
                </div>

                <div className="space-y-2">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <Image src="https://populous.com/uploads/2018/01/MNTRYMXSOC_0363_JorgeToboada.jpg" alt="Campo 2" fill className="object-cover" />
                  </div>
                  <h3 className="font-semibold">Campo 2</h3>
                  <p className="text-sm text-gray-600">Partidos de fase de grupos</p>
                </div>

                <div className="space-y-2">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <Image src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0306%2Fr823129_1296x729_16%2D9.jpg" alt="Campo 3" fill className="object-cover" />
                  </div>
                  <h3 className="font-semibold">Campo 3</h3>
                  <p className="text-sm text-gray-600">Partidos de fase de grupos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipos" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Equipos Participantes</CardTitle>
              <CardDescription>Conoce a las escuelas que participan en el torneo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Escuela San José",
                  "Colegio América",
                  "Instituto Cervantes",
                  "Liceo Francés",
                  "Colegio Madrid",
                  "Escuela Británica",
                  "Escuela Alemana",
                  "Colegio Suizo",
                  "Instituto Italiano",
                  "Liceo Japonés",
                  "Colegio Canadiense",
                  "Escuela Rusa",
                ].map((equipo, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg border border-[#E88B8B]/20 shadow-sm flex items-center space-x-3"
                  >
                    <Image
                      src={getRandomTeamLogo(equipo)}
                      alt={`Logo ${equipo}`}
                      width={32}
                      height={32}
                      className="rounded-full flex-shrink-0"
                    />
                    <span>{equipo}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacto" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
              <CardDescription>¿Tienes alguna pregunta? Contáctanos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Comité Organizador</h3>
                <p className="text-sm">Email: info@mundialescolar.org</p>
                <p className="text-sm">Teléfono: +34 91 123 45 67</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Sede Administrativa</h3>
                <p className="text-sm">Calle Principal 123, Ciudad Deportiva</p>
                <p className="text-sm">Horario: Lunes a Viernes, 9:00 - 18:00</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#E88B8B] hover:text-[#E58ED2]">
                    Instagram
                  </a>
                  <a href="#" className="text-[#E88B8B] hover:text-[#E58ED2]">
                    Twitter
                  </a>
                  <a href="#" className="text-[#E88B8B] hover:text-[#E58ED2]">
                    Facebook
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
