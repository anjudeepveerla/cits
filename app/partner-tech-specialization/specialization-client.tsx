"use client"

import type React from "react"
import { SiteFooter } from "@/components/cits/footer"

import { Cpu, Cloud, Database, LineChart, Bot, Workflow, CircuitBoard, Shield, Laptop, ServerCog } from "lucide-react"

type Tool = { name: string; icon: React.ElementType; desc?: string }

function Section({
  id,
  title,
  subtitle,
  tools,
}: {
  id: string
  title: string
  subtitle?: string
  tools: Tool[]
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-4 py-6 md:py-8">
      <header className="mb-4 md:mb-5">
        <h2 className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-white/70">{subtitle}</p>}
      </header>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tools.map((t) => {
          const Icon = t.icon
          return (
            <div
              key={t.name}
              className="group flex min-h-24 items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/60 hover:shadow-[0_0_24px_theme(colors.cyan.400/35%)]"
            >
              <span className="mt-0.5 rounded-md border border-cyan-400/60 bg-black/40 p-2 text-cyan-300 shadow-[0_0_12px_theme(colors.cyan.400/35%)]">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <h3 className="text-sm font-medium tracking-wide">{t.name}</h3>
                {t.desc && <p className="mt-1 text-xs text-white/70">{t.desc}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function PartnerTechSpecializationClient() {
  // Palette: black background, white text, cyan primary, violet accent for gradient
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(139,92,246,.25),transparent_60%),radial-gradient(30%_40%_at_80%_20%,rgba(34,211,238,.25),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 md:py-28">
          <h1 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">Partner Tech Specialization</h1>
          <p className="mt-4 max-w-2xl text-pretty text-white/80">
            Empowering ICT Transformation with Leading Technologies
          </p>
          <span className="mt-6 block h-0.5 w-36 rounded bg-gradient-to-r from-cyan-400 to-violet-500" aria-hidden />
        </div>
      </section>

      {/* Sections */}
      <div className="divide-y divide-white/10">
        <Section
          id="cloud"
          title="Cloud Platforms"
          subtitle="Strategic cloud adoption and managed services"
          tools={[
            { name: "Huawei Cloud", icon: Cloud },
            { name: "Amazon Web Services", icon: Cloud },
            { name: "Microsoft Azure", icon: Cloud },
            { name: "Google Cloud Platform", icon: Cloud },
          ]}
        />

        <Section
          id="data"
          title="Data & Big Data"
          subtitle="Data management and scalable big data architectures"
          tools={[
            { name: "Data Management", icon: Database },
            { name: "Big Data Solutions", icon: Database },
          ]}
        />

        <Section
          id="analytics"
          title="Analytics"
          subtitle="From dashboards to enterprise BI"
          tools={[
            { name: "Power BI", icon: LineChart },
            { name: "Google Data Studio", icon: LineChart },
            { name: "Tableau", icon: LineChart },
            { name: "MicroStrategy", icon: LineChart },
            { name: "Qlik", icon: LineChart },
            { name: "SAP Analytics Cloud", icon: LineChart },
            { name: "Matomo", icon: LineChart },
            { name: "RapidMiner", icon: LineChart },
            { name: "Sisense", icon: LineChart },
            { name: "KNIME", icon: LineChart },
          ]}
        />

        <Section
          id="ai-ml"
          title="AI & Machine Learning"
          subtitle="Applied AI platforms and MLOps"
          tools={[
            { name: "IBM Watson", icon: Bot },
            { name: "TensorFlow", icon: Bot },
            { name: "Dialogflow", icon: Bot },
            { name: "Vertex AI", icon: Bot },
            { name: "Gemini AI", icon: Bot },
            { name: "Amazon SageMaker", icon: Bot },
            { name: "Azure AI Studio", icon: Bot },
            { name: "PyTorch", icon: Bot },
            { name: "Claude", icon: Bot },
            { name: "DataRobot", icon: Bot },
            { name: "Databricks", icon: Bot },
          ]}
        />

        <Section
          id="rpa"
          title="Automations / RPA"
          subtitle="Enterprise-grade process automation"
          tools={[
            { name: "UiPath", icon: Workflow },
            { name: "Blue Prism", icon: Workflow },
            { name: "Automation Anywhere", icon: Workflow },
          ]}
        />

        <Section
          id="iot"
          title="IoT Solutions"
          subtitle="Connected devices, sensors, and platforms"
          tools={[
            { name: "Euclid", icon: CircuitBoard },
            { name: "Mocano", icon: CircuitBoard },
            { name: "OctaBlue", icon: CircuitBoard },
            { name: "Henry Martyn", icon: CircuitBoard },
            { name: "Bosch", icon: CircuitBoard },
            { name: "InvenSense", icon: CircuitBoard },
            { name: "Libelium", icon: CircuitBoard },
            { name: "Ericsson", icon: CircuitBoard },
            { name: "IBM", icon: CircuitBoard },
            { name: "CISCO", icon: CircuitBoard },
          ]}
        />

        <Section
          id="sap"
          title="SAP Solutions"
          subtitle="SAP modules and consulting"
          tools={[
            { name: "SAP Modules", icon: ServerCog },
            { name: "SAP Consulting", icon: ServerCog },
          ]}
        />

        <Section
          id="security"
          title="IT & Info-Security"
          subtitle="Defense-in-depth for networks and endpoints"
          tools={[
            { name: "Network Security", icon: Shield },
            { name: "Endpoint Security", icon: Shield },
            { name: "InfoSec Services", icon: Shield },
          ]}
        />

        <Section
          id="euc"
          title="Workplace / EUC Solutions & Support"
          subtitle="Devices, printers, and handhelds with unified management"
          tools={[
            { name: "Laptops & Desktops", icon: Laptop },
            { name: "Printers & Peripherals", icon: Laptop },
            { name: "Network Devices", icon: Laptop },
            { name: "EUC Handheld Devices", icon: Laptop },
          ]}
        />

        <Section
          id="infra"
          title="IT Hardware & Infrastructure"
          subtitle="Servers, storage, networking, and setup services"
          tools={[
            { name: "Servers", icon: ServerCog },
            { name: "Networking Devices", icon: ServerCog },
            { name: "Storage", icon: ServerCog },
            { name: "IT Setup Services", icon: ServerCog },
          ]}
        />

        <Section
          id="datacenter"
          title="Data Center Build & Support"
          subtitle="Design, racks, network, maintenance and support"
          tools={[
            { name: "Racks & Cabling", icon: Cpu },
            { name: "Server Deployment", icon: Cpu },
            { name: "Network Setup", icon: Cpu },
            { name: "Maintenance & Support", icon: Cpu },
          ]}
        />
      </div>

      <SiteFooter />
    </div>
  )
}
