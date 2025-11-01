import { clsx, type ClassValue } from "clsx"
import { nodeTailwind  } from "node-tailwind"

export function cn(...inputs: ClassValue[]) {
  return nodeTailwind (clsx(inputs))
}
