"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CTAButton } from "@/components/cta-button"
import { CheckCircle, CreditCard, Lock } from "lucide-react"

const faqs = [
  {
    q: "Preciso ter experiencia em ensino para usar o Kit?",
    a: "Nao. O material foi criado especialmente para pais sem nenhuma formacao pedagogica. Cada atividade tem instrucoes visuais passo a passo.",
  },
  {
    q: "Para qual idade e indicado?",
    a: "O Kit foi desenvolvido para criancas de 2 a 12 anos. Os 3 niveis de dificuldade garantem que qualquer crianca vai encontrar o ponto certo para comecar.",
  },
  {
    q: "Funciona para criancas com TDAH ou Autismo?",
    a: "Sim. As atividades sao curtas, visuais e ludicas — especialmente adequadas para criancas com dificuldade de concentracao.",
  },
  {
    q: "Como recebo o material apos a compra?",
    a: "Imediatamente apos a confirmacao do pagamento, voce recebe no e-mail o acesso a plataforma com todos os arquivos em PDF.",
  },
  {
    q: "Preciso pagar mensalidade?",
    a: "Nao. E um unico pagamento e o acesso e vitalicio — para sempre.",
  },
  {
    q: "Quais sao as formas de pagamento?",
    a: "Cartao de credito (em ate 5x), boleto bancario e PIX.",
  },
  {
    q: "E se eu nao gostar do material?",
    a: "Voce tem 7 dias de garantia incondicional. Devolvemos 100% do valor investido — sem perguntas e sem burocracia.",
  },
  {
    q: "Tenho duvidas antes de comprar. Como falo com voces?",
    a: "Pode nos chamar pelo WhatsApp, Instagram ou e-mail. Nossa equipe responde rapidinho.",
  },
]

export function FAQCloseSection() {
  return (
    <section className="bg-[#F0F7E6] py-16 px-5">
      <div className="mx-auto max-w-[680px]">
        <h2 className="font-sans font-bold text-[22px] md:text-[26px] text-[#2C2C2C] text-center mb-10">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="mb-12">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-[#FFFFFF] rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] mb-3 border-none px-4"
            >
              <AccordionTrigger className="font-sans font-semibold text-sm text-[#2C2C2C] hover:no-underline py-4">
                <span className="flex items-start gap-2 text-left">
                  <span className="text-[#F5A623] shrink-0">❓</span>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="font-serif text-sm text-[#666666] leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Final close */}
        <div className="bg-[#2C2C2C] rounded-[20px] p-8 md:p-10 text-center">
          <p className="font-sans font-bold text-xl text-[#FFFFFF] mb-2 text-balance">
            Seu filho merece aprender a ler com confianca
          </p>
          <p className="font-serif text-base text-[#cccccc] mb-6">
            E voce merece ver isso acontecer.
          </p>

          <div className="flex flex-col gap-2.5 max-w-[380px] mx-auto mb-6 text-left">
            {[
              "Kit Grafismo Fonetico — Niveis 1, 2 e 3",
              "6 Bonus Exclusivos",
              "Suporte Profissional",
              "Acesso Vitalicio + Impressao Ilimitada",
              "Garantia de 7 Dias",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle className="size-4 text-[#4CAF50] shrink-0" />
                <span className="font-serif text-sm text-[#FFFFFF]">{item}</span>
              </div>
            ))}
          </div>

          <p className="font-serif text-sm text-[#999999] mb-1">
            <span className="line-through">De R$ 453,00</span>{" "}
            por apenas:
          </p>
          <p className="font-sans font-black text-[44px] md:text-[48px] text-[#F5A623] leading-none mb-1">
            R$ 47,90
          </p>
          <p className="font-serif text-sm text-[#cccccc] mb-6">
            ou 5x de R$ 10,27
          </p>

          <CTAButton href="https://pay.ticto.com/12fys">
            <Lock className="size-5 mr-2" />
            GARANTIR MEU KIT AGORA COM TODOS OS BONUS
            <span className="ml-2" aria-hidden="true">→</span>
          </CTAButton>

          {/* Payment icons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
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
        </div>
      </div>
    </section>
  )
}
