export function StorySection() {
  return (
    <section className="bg-[#F0F7E6] py-16 px-5">
      <div className="mx-auto max-w-[680px]">
        {/* Tag pill */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFFFF] px-4 py-1.5 text-sm font-semibold text-[#2C2C2C]">
            <span aria-hidden="true">📖</span> Uma historia que muitas maes conhecem bem...
          </span>
        </div>

        <h2 className="font-sans font-bold text-2xl text-[#2C2C2C] text-center mb-8 text-balance">
          A historia que nenhuma mae quer viver — mas muitas estao vivendo agora
        </h2>

        {/* Story card */}
        <div className="bg-[#FFFFFF] border-l-4 border-[#F5A623] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-6">
          <p className="font-serif italic text-base text-[#444444] leading-relaxed">
            {'"'}A Juliana nunca imaginou que ia se sentir assim. Ela fazia tudo
            certo. Comprava livrinhos coloridos, colocava o filho no reforco,
            ficava do lado nas tarefas... Mas toda vez que chegava a hora de
            ler, era a mesma coisa. O pequeno Pedro olhava para as letras,
            franzia a testa, e dizia:{'"'}
          </p>
        </div>

        {/* Impact phrase */}
        <div className="bg-[#FFF3CD] rounded-2xl p-5 text-center mb-6">
          <p className="font-sans font-bold text-lg text-[#2C2C2C]">
            <span className="mr-2" aria-hidden="true">💬</span>
            {'"'}Mae, acho que eu sou burro.{'"'}
          </p>
        </div>

        {/* Continuation */}
        <div className="bg-[#FFFFFF] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8">
          <p className="font-serif text-base text-[#444444] leading-relaxed mb-4">
            Juliana foi ao quarto, fechou a porta... e chorou. Nao de raiva. De
            impotencia. Porque ela amava o filho com tudo que tinha — e nao
            sabia como ajuda-lo.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#4CAF50]/20" />
          <span className="text-2xl" aria-hidden="true">💡</span>
          <div className="flex-1 h-px bg-[#4CAF50]/20" />
        </div>

        <h3 className="font-sans font-bold text-xl text-[#2C2C2C] text-center mb-6">
          O que Juliana nao sabia — e que mudou tudo
        </h3>

        <p className="font-serif text-base text-[#444444] leading-relaxed text-center mb-4">
          Algumas semanas depois, ela descobriu algo que nenhum professor tinha
          mencionado...
        </p>

        <p className="font-serif text-base text-[#444444] leading-relaxed text-center mb-6">
          Em menos de 2 semanas, Pedro comecou a reconhecer silabas sozinho. Em
          um mes, estava lendo as primeiras frases. Hoje, ele pega livros por
          conta propria.
        </p>

        {/* Result badge */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#4CAF50] px-6 py-3 text-[#FFFFFF] font-sans font-bold text-sm">
            <span aria-hidden="true">🎉</span> Nunca mais ouviu: {'"'}Mae, eu acho que sou burro.{'"'}
          </span>
        </div>
      </div>
    </section>
  )
}
