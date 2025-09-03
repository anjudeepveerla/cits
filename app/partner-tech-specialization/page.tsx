import type { Metadata } from "next"
import PartnerTechSpecializationClient from "./specialization-client"

export const metadata: Metadata = {
  title: "Partner Tech Specialization | CITS Global",
  description:
    "Empowering ICT transformation with leading technologies across cloud, AI/ML, analytics, IoT, security, and more.",
}

export default function PartnerTechSpecializationPage() {
  return <PartnerTechSpecializationClient />
}
