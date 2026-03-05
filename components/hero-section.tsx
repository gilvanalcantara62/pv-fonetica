import { CTAButton } from "@/components/cta-button"
import { CheckCircle, Lock, ShieldCheck, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-[#FFFDF4] pt-20 pb-16 px-5">
      <div className="mx-auto max-w-[680px] text-center">
        {/* Logo */}
        <p className="font-sans font-extrabold text-xl text-[#F5A623] tracking-tight mb-6">
          Educacao Kids
        </p>

        {/* Tag Pill */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0F7E6] px-4 py-1.5 text-sm font-semibold text-[#2e7d32] mb-6">
          <span aria-hidden="true">✨</span> Metodo Americano de Alfabetizacao
        </span>

        {/* H1 */}
        <h1 className="font-sans font-extrabold text-[28px] md:text-[44px] leading-tight text-[#2C2C2C] text-balance mb-5">
          Cientistas Americanos Descobriram Por Que Algumas Criancas Aprendem a
          Ler 5x Mais Rapido — E Nao Tem Nada a Ver Com Inteligencia
        </h1>

        {/* H2 */}
        <p className="font-serif text-lg text-[#444444] leading-relaxed max-w-[600px] mx-auto mb-8">
          O segredo esta em um exercicio de 10 minutos por dia que ativa as
          conexoes cerebrais certas — e qualquer mae consegue aplicar em casa,
          hoje mesmo.
        </p>

        {/* Bullets */}
        <div className="flex flex-col gap-3 text-left max-w-[520px] mx-auto mb-8">
          {[
            "Funciona mesmo com criancas com TDAH, Autismo ou dificuldade de foco",
            "Ideal para criancas de 2 a 12 anos",
            "Sem pressao, sem sofrimento, sem metodo chato",
          ].map((text) => (
            <div key={text} className="flex items-start gap-3">
              <CheckCircle className="size-5 text-[#4CAF50] shrink-0 mt-0.5" />
              <span className="font-serif text-base text-[#2C2C2C]">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <CTAButton>
          <span aria-hidden="true" className="mr-2">🎯</span>
          QUERO VER COMO FUNCIONA
          <span className="ml-2" aria-hidden="true">→</span>
        </CTAButton>

        {/* Security Icons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-sm text-[#666666]">
          <span className="inline-flex items-center gap-1.5">
            <Lock className="size-4" /> Pagamento Seguro
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="size-4 text-[#4CAF50]" /> Acesso Imediato
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-4" /> Garantia 7 Dias
          </span>
        </div>
      </div>
    </section>
  )
}
