import type { Metadata } from "next"
import ConsortiumClientPage from "./consortium-client"

export const metadata: Metadata = {
  title: "Consortium Structure | CITS Global",
  description: "Consortium Of IT Services - Global, Africa, GCC, and Sri Lanka operations with technology partnerships.",
}

export default function ConsortiumPage() {
  return <ConsortiumClientPage />
}
