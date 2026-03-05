import { Brain, Ear, Hand, CheckCircle } from "lucide-react"

export function MechanismSection() {
  const systems = [
    {
      icon: Brain,
      emoji: "🧠",
      title: "Sistema Visual",
      desc: "A crianca reconhece o padrao grafico da letra e silaba",
    },
    {
      icon: Ear,
      emoji: "👂",
      title: "Sistema Auditivo",
      desc: "Ela associa o tracado ao som correspondente",
    },
    {
      icon: Hand,
      emoji: "✋",
      title: "Sistema Motor",
      desc: "Ao tracar, ela grava o movimento no cerebro",
    },
  ]

  return (
    <section className="bg-[#FFFDF4] py-16 px-5">
      <div className="mx-auto max-w-[680px]">
        <h2 className="font-sans font-bold text-[22px] md:text-[26px] text-[#2C2C2C] text-center mb-10 text-balance">
          Por que o Grafismo Fonetico funciona quando tudo mais falhou?
        </h2>

        {/* 3 system cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {systems.map((s) => (
            <div
              key={s.title}
              className="bg-[#FFFFFF] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 text-center"
            >
              <span className="text-4xl mb-3 block" aria-hidden="true">{s.emoji}</span>
              <h3 className="font-sans font-bold text-base text-[#2C2C2C] mb-2">
                {s.title}
              </h3>
              <p className="font-serif text-sm text-[#666666] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Connection phrase */}
        <div className="bg-[#FFF8F0] rounded-2xl p-5 text-center mb-6">
          <p className="font-sans font-bold text-base text-[#2C2C2C] leading-relaxed">
            Quando os 3 sistemas trabalham juntos, o cerebro forma conexoes
            neurais muito mais fortes do que na memorizacao tradicional.
          </p>
        </div>

        {/* Green highlight */}
        <div className="bg-[#4CAF50] rounded-2xl p-5 text-center mb-8">
          <p className="font-sans font-bold text-base text-[#FFFFFF] leading-relaxed">
            <span className="mr-1" aria-hidden="true">⚡</span>
            E a diferenca entre decorar uma letra e realmente entender como ela
            funciona. Por isso criancas aprendem a ler ate 5x mais rapido.
          </p>
        </div>

        {/* Simplifier bullets */}
        <div className="flex flex-col gap-3 max-w-[400px] mx-auto">
          {[
            "Voce nao precisa ser professora",
            "Nao precisa de equipamentos especiais",
            "Apenas 10 minutos por dia",
          ].map((text) => (
            <div key={text} className="flex items-center gap-3">
              <CheckCircle className="size-5 text-[#4CAF50] shrink-0" />
              <span className="font-serif text-base text-[#2C2C2C]">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
