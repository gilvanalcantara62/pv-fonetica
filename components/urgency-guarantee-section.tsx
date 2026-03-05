import { CTAButton } from "@/components/cta-button"
import { ShieldCheck } from "lucide-react"

export function UrgencyGuaranteeSection() {
  return (
    <section className="bg-[#FFFDF4] py-16 px-5">
      <div className="mx-auto max-w-[680px]">
        {/* Urgency box */}
        <div className="bg-[#FFF3CD] border-2 border-[#E8380D] rounded-2xl p-6 mb-10">
          <p className="font-sans font-bold text-lg text-[#2C2C2C] mb-4 text-center">
            <span className="mr-2" aria-hidden="true">⚠️</span>
            ATENCAO: Oferta por Tempo Limitado
          </p>
          <p className="font-serif text-base text-[#444444] leading-relaxed mb-3">
            Os 6 bonus sao um presente especial para quem garantir o acesso
            HOJE. Nao temos como garantir que essa condicao vai continuar
            disponivel amanha.
          </p>
          <p className="font-serif text-base text-[#444444] leading-relaxed">
            Se voce fechar essa pagina, pode voltar e encontrar apenas o Kit
            principal — sem nenhum dos 6 bonus.
          </p>
        </div>

        {/* Emotional flip — 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Card A */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6">
            <p className="text-3xl mb-3 text-center" aria-hidden="true">😟</p>
            <h3 className="font-sans font-bold text-base text-[#2C2C2C] text-center mb-3">
              Situacao A — Sem o Kit
            </h3>
            <p className="font-serif text-sm text-[#666666] leading-relaxed">
              Seu filho continua travando na leitura. As tarefas continuam
              sendo sofrimento. E aquela duvida — {'"'}sera que fiz tudo que
              podia?{'"'} — continua la.
            </p>
          </div>
          {/* Card B */}
          <div className="bg-[#F0F7E6] rounded-2xl p-6">
            <p className="text-3xl mb-3 text-center" aria-hidden="true">😊</p>
            <h3 className="font-sans font-bold text-base text-[#2C2C2C] text-center mb-3">
              Situacao B — Com o Kit
            </h3>
            <p className="font-serif text-sm text-[#2e7d32] leading-relaxed">
              Semanas depois seu filho pega um livro sozinho, le uma frase
              inteira, olhou pra voce e sorriu.
            </p>
          </div>
        </div>

        <p className="font-sans font-bold text-xl text-[#2C2C2C] text-center mb-8 text-balance">
          Qual das duas situacoes voce quer que aconteca?
        </p>

        <CTAButton className="mb-10">
          SIM! QUERO VER MEU FILHO LENDO COM CONFIANCA
          <span className="ml-2" aria-hidden="true">→</span>
        </CTAButton>

        {/* Guarantee block */}
        <div className="bg-[#FFFFFF] border-3 border-[#4CAF50] rounded-2xl p-8 text-center">
          <ShieldCheck className="size-16 text-[#4CAF50] mx-auto mb-4" />
          <h3 className="font-sans font-bold text-xl text-[#2C2C2C] mb-4">
            Garantia Incondicional de 7 Dias
          </h3>
          <p className="font-serif text-base text-[#444444] leading-relaxed mb-4">
            Acesse o Kit hoje. Aplique as atividades com seu filho. Se em 7
            dias voce nao ver nenhuma diferenca — ou se por qualquer motivo o
            material nao for o que voce esperava — e so nos mandar uma
            mensagem.
          </p>
          <span className="inline-block rounded-full bg-[#4CAF50] px-5 py-2 font-sans font-bold text-sm text-[#FFFFFF] mb-4">
            100% do seu dinheiro devolvido.
          </span>
          <p className="font-sans font-semibold text-sm text-[#2C2C2C] mb-2">
            Sem perguntas. Sem burocracia. Sem enrolacao.
          </p>
          <p className="font-serif italic text-sm text-[#666666]">
            {'"'}O risco e todo nosso. A transformacao e toda de voces.{'"'}
          </p>
        </div>
      </div>
    </section>
  )
}
