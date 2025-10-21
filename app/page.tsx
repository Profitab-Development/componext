import React, { type JSX } from "react"
import { Header, Hero, WhoWeAre, CarAndPartners } from "@/components/blocks"

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhoWeAre />
      <CarAndPartners />
    </main>
  )
}
