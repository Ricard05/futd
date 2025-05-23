import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función para obtener un logo aleatorio para un equipo
export function getRandomTeamLogo(teamName: string): string {
  // Usar el nombre del equipo como semilla para el número aleatorio
  const seed = teamName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const randomIndex = (seed % 14) + 1; // Números del 1 al 14
  return `/images/${randomIndex}.png`;
}
