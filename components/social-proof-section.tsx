import { Star } from "lucide-react"
import { CTAButton } from "@/components/cta-button"

const testimonials = [
  {
    name: "Ana Oliveira",
    role: "mae",
    initials: "AO",
    color: "bg-[#F5A623]",
    text: "Minha filha comecou a formar palavras com apenas duas semanas usando o kit. E incrivel como ela evoluiu em tao pouco tempo!",
  },
  {
    name: "Breno Souza",
    role: "pai",
    initials: "BS",
    color: "bg-[#4CAF50]",
    text: "O metodo e simples de seguir, mesmo para nos que somos pais sem nenhuma experiencia em ensino. E muito gratificante ver nosso filho lendo suas primeiras palavras!",
  },
  {
    name: "Andre Azevedo",
    role: "pai",
    initials: "AA",
    color: "bg-[#E8380D]",
    text: "Meus pequenos estao tendo uma evolucao significativa gracas ao Grafismo Fonetico. Quem comprar outro produto e porque nao gosta de ver resultado.",
  },
  {
    name: "Camila Silva",
    role: "mae",
    initials: "CS",
    color: "bg-[#F5A623]",
    text: "E incrivel como algo tao simples pode fazer tanta diferenca. Estou muito satisfeita com a minha compra!",
  },
  {
    name: "Marisa Correia",
    role: "educadora",
    initials: "MC",
    color: "bg-[#4CAF50]",
    text: "Acreditem: essa e a melhor compra que voces vao fazer este ano. Nao percam essa chance!",
  },
]

export function SocialProofSection() {
  return (
    <section className="bg-[#F0F7E6] py-16 px-5">
      <div className="mx-auto max-w-[680px]">
        <h2 className="font-sans font-bold text-[22px] md:text-[26px] text-[#2C2C2C] text-center mb-10 text-balance">
          Veja o que pais e educadores estao dizendo:
        </h2>

        <div className="flex flex-col gap-4 mb-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#FFFFFF] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                {/* Avatar */}
                <div
                  className={`size-10 rounded-full ${t.color} flex items-center justify-center text-[#FFFFFF] font-sans font-bold text-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-[#2C2C2C]">
                    {t.name}
                  </p>
                  <span className="inline-block rounded-full bg-[#F0F7E6] px-2.5 py-0.5 text-xs font-semibold text-[#2e7d32]">
                    {t.role}
                  </span>
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-[#F5A623] text-[#F5A623]"
                    />
                  ))}
                </div>
              </div>
              <p className="font-serif italic text-sm text-[#444444] leading-relaxed">
                {'"'}{t.text}{'"'}
              </p>
            </div>
          ))}
        </div>

        <CTAButton>
          QUERO GARANTIR O KIT AGORA
          <span className="ml-2" aria-hidden="true">→</span>
        </CTAButton>
      </div>
    </section>
  )
}
