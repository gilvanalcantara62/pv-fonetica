import { CTAButton } from "@/components/cta-button"
import { CreditCard, Lock } from "lucide-react"

const bonuses = [
  { name: "Caderno Alfabeto com Imagem", price: "R$ 37,00", num: "01" },
  { name: "Caderno Quebra-Cabeca Alfabeto", price: "R$ 47,00", num: "02" },
  { name: "Caderno Formando Palavras", price: "R$ 57,00", num: "03" },
  { name: "Caderno Alfabeto com Relogio", price: "R$ 39,00", num: "04" },
  { name: "Caderno Alfabeto Tracado", price: "R$ 27,00", num: "05" },
  { name: "Caderno Alfabeto com Carinhas", price: "R$ 49,00", num: "06" },
]

export function OfferSection() {
  return (
    <section id="oferta" className="bg-[#2C2C2C] py-16 px-5">
      <div className="mx-auto max-w-[680px]">
        {/* Tag pill */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5A623] px-4 py-1.5 text-sm font-bold text-[#FFFFFF]">
            <span aria-hidden="true">🎁</span> OFERTA ESPECIAL — Por Tempo Limitado
          </span>
        </div>

        <h2 className="font-sans font-extrabold text-[24px] md:text-[28px] text-[#FFFFFF] text-center mb-8 text-balance">
          Tudo que voce vai receber hoje:
        </h2>

        {/* Main product card */}
        <div className="bg-[#3A3A3A] border-2 border-[#F5A623] rounded-2xl p-6 mb-6">
          <div className="text-center">
            <span className="text-3xl mb-3 block" aria-hidden="true">📦</span>
            <h3 className="font-sans font-bold text-lg text-[#FFFFFF] mb-2">
              KIT DE ATIVIDADES DE GRAFISMO FONETICO
            </h3>
            <div className="flex items-center justify-center gap-3 mb-3">
              <span aria-hidden="true">📘</span>
              <span aria-hidden="true">📗</span>
              <span aria-hidden="true">📕</span>
            </div>
            <p className="font-serif text-sm text-[#cccccc] mb-3">
              +100 Atividades | Letra Cursiva e Bastao | 3 Niveis de Dificuldade
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-serif text-sm text-[#999999] line-through">
                R$ 197,00
              </span>
              <span className="font-sans font-bold text-[#4CAF50]">
                INCLUSO
              </span>
            </div>
          </div>
        </div>

        {/* Bonus divider */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5A623] px-4 py-1.5 text-sm font-bold text-[#FFFFFF]">
            MAIS 6 BONUS EXCLUSIVOS
          </span>
        </div>

        {/* Bonus grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {bonuses.map((b) => (
            <div
              key={b.num}
              className="bg-[#3A3A3A] rounded-xl p-4"
            >
              <p className="font-sans font-bold text-sm text-[#F5A623] mb-1">
                <span aria-hidden="true">🎁</span> Bonus {b.num}
              </p>
              <p className="font-sans font-semibold text-sm text-[#FFFFFF] mb-1">
                {b.name}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xs text-[#999999] line-through">
                  {b.price}
                </span>
                <span className="font-sans font-bold text-xs text-[#4CAF50]">
                  GRATIS
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Orange divider */}
        <div className="h-0.5 bg-[#F5A623] mb-8" />

        {/* Value stack */}
        <div className="text-center mb-8">
          <p className="font-serif text-base text-[#999999] mb-1">
            Valor total: <span className="line-through">R$ 453,00</span>
          </p>
          <p className="font-sans font-bold text-lg text-[#FFFFFF] mb-2">
            HOJE APENAS:
          </p>
          <p className="font-sans font-black text-[48px] md:text-[52px] text-[#F5A623] leading-none mb-2">
            R$ 47,90
          </p>
          <p className="font-serif text-sm text-[#cccccc]">
            ou 5x de R$ 10,27 — menos que um lanche por semana
          </p>
        </div>

        {/* Main CTA */}
        <CTAButton href="https://pay.ticto.com/12fys">
          <Lock className="size-5 mr-2" />
          GARANTIR MEU KIT COMPLETO COM OS BONUS
          <span className="ml-2" aria-hidden="true">→</span>
        </CTAButton>

        {/* Payment icons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {["Visa", "Master", "Boleto", "PIX"].map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1 rounded-lg bg-[#3A3A3A] px-3 py-1.5 text-xs text-[#cccccc] font-sans"
            >
              <CreditCard className="size-3.5" />
              {m}
            </span>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-[#999999]">
          <span>Hotmart</span>
          <span>Compra Segura</span>
          <span>Acesso Imediato</span>
        </div>
      </div>
    </section>
  )
}
