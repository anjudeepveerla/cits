import type { Metadata } from "next"
import PartnersClientPage from "./partners-client"

export const metadata: Metadata = {
  title: "Our Partners — CITS Global",
  description: "Proudly collaborating with industry leaders to drive innovation and ICT transformation.",
}

export default function PartnersPage() {
  return <PartnersClientPage />
}
