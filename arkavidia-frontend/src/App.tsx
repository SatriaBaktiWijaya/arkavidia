import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { 
  Users, 
  Brain, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  GitPullRequest
} from "lucide-react"

export default function App() {
  const [activeCycle, setActiveCycle] = useState<number>(0)

  const cycles = [
    { name: "Tangkap", desc: "Ekstraksi keputusan dari ruang tim & privat ke Project Brain secara bitemporal." },
    { name: "Petakan", desc: "Peta pemahaman tim per Knowledge Component (KC) & metrik Knowledge Bus Factor." },
    { name: "Uji Paham", desc: "Explain-back adaptif (IRT 2PL) dengan LLM Conformal Abstention." },
    { name: "Tutup Celah", desc: "Sesi pairing 10 menit 'Jelaskan ke aku' & Tutored Briefing socratic." },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm">
              B
            </div>
            <div>
              <span className="font-heading font-semibold text-lg tracking-tight">BERSAMA</span>
              <span className="ml-2 rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground">
                v2.0
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => window.open("https://github.com/TimSantai/arkavidia", "_blank")}>
              GitHub Repo
            </Button>
            <Button size="sm">
              Buka Ruang Tim
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Hackvidia 11.0 • Human-Centered Engineering in the AI Era
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Satu tim, semua paham.
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            ChatGPT membantu tim tahu <em>apa yang diputuskan</em>. <strong>BERSAMA</strong> memastikan setiap anggota paham dan bisa menjelaskan <em>kenapa</em>.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="gap-2 shadow-sm">
              Mulai Sesi Explain-back
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg">
              Pelajari Arsitektur
            </Button>
          </div>
        </div>

        {/* Siklus Mingguan Interaktif */}
        <div className="mt-14">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold tracking-tight">Siklus Mingguan BERSAMA</h2>
            <span className="text-xs text-muted-foreground">Klik tahapan untuk melihat detail</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {cycles.map((item, idx) => {
              const isSelected = activeCycle === idx
              return (
                <div
                  key={item.name}
                  onClick={() => setActiveCycle(idx)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/[0.03] shadow-sm ring-1 ring-primary/30"
                      : "border-border/80 bg-card hover:border-border hover:bg-muted/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Fase 0{idx + 1}
                    </span>
                    {isSelected && <CheckCircle2 className="size-4 text-primary" />}
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground leading-normal">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Feature Cards Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card className="border border-border/80 shadow-xs">
            <CardHeader>
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <ShieldCheck className="size-5" />
              </div>
              <CardTitle>5-Tier Memory & IFC</CardTitle>
              <CardDescription>
                Isolasi memori privat (M1) dan tim (M2) dengan Row-Level Security & Cedar Policy Engine.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Anti-leakage: konteks privat tidak pernah dibocorkan ke prompt anggota lain tanpa Context Passport.
            </CardContent>
          </Card>

          <Card className="border border-border/80 shadow-xs">
            <CardHeader>
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <Brain className="size-5" />
              </div>
              <CardTitle>Adaptive IRT & Abstention</CardTitle>
              <CardDescription>
                Explain-back adaptif (IRT 2PL) dengan jaminan Conformal Risk Control (ICLR 2024).
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Jika AI ragu dalam menilai esai, sistem abstain dan mengalihkan ke rekan tim untuk peer explanation.
            </CardContent>
          </Card>

          <Card className="border border-border/80 shadow-xs">
            <CardHeader>
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <Activity className="size-5" />
              </div>
              <CardTitle>Knowledge Bus Factor</CardTitle>
              <CardDescription>
                Deteksi silo pengetahuan dan perhitungan coverage konsep per Knowledge Component (KC).
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Skor pemahaman murni formatif dan tidak pernah dikirim ke dosen untuk komponen nilai akademis.
            </CardContent>
          </Card>
        </div>

        {/* Status Bar */}
        <div className="mt-12 rounded-xl border border-border/70 bg-muted/30 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tech Stack: Next.js + Tailwind v4 + shadcn/ui + Allo Font</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Users className="size-3.5" /> Tim: 4 Anggota
            </span>
            <span className="flex items-center gap-1.5">
              <GitPullRequest className="size-3.5" /> Branch: feat/frontend-setup
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
