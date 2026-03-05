export function ProblemSection() {
  return (
    <section className="bg-[#FFFDF4] py-16 px-5">
      <div className="mx-auto max-w-[680px]">
        <h2 className="font-sans font-bold text-[22px] md:text-[26px] text-[#2C2C2C] text-center mb-6 text-balance">
          A culpa nao e do seu filho. E tambem nao e sua.
        </h2>

        <p className="font-serif text-base text-[#2C2C2C] leading-relaxed text-center mb-8">
          Existe um motivo cientifico pelo qual algumas criancas travam na
          leitura — e a grande maioria dos pais (e ate professores) nunca foi
          informada sobre isso.
        </p>

        {/* Science Card */}
        <div className="bg-[#F0F7E6] border-2 border-[#4CAF50] rounded-2xl p-6 text-center mb-8">
          <p className="font-serif text-sm text-[#2e7d32] mb-2">
            <span className="mr-1" aria-hidden="true">🔬</span> O problema se chama:
          </p>
          <p className="font-sans font-bold text-lg text-[#2C2C2C]">
            {'"'}Ausencia de estimulo fonetico na janela certa do desenvolvimento.{'"'}
          </p>
        </div>

        <p className="font-serif text-base text-[#2C2C2C] leading-relaxed mb-6">
          Antes de aprender a ler, o cerebro da crianca precisa reconhecer
          padroes, sons e movimentos de forma integrada. Quando esse estimulo
          nao acontece no momento certo, a leitura se torna um esforco — em
          vez de algo natural.
        </p>

        <p className="font-sans font-bold text-lg text-[#2C2C2C] text-center">
          A boa noticia? Isso tem solucao. E e mais simples do que voce imagina.
        </p>
      </div>
    </section>
  )
}
