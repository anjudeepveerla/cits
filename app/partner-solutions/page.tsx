import type { Metadata } from "next"
import PartnerSolutionsClientPage from "./PartnerSolutionsClientPage"

export const metadata: Metadata = {
  title: "Partner Solutions | CITS Global",
  description: "Driving ICT Transformation with Future-Ready Solutions.",
}

export default function Page() {
  return <PartnerSolutionsClientPage />
}
