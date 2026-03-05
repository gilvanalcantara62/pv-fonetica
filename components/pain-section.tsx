export function PainSection() {
  const pains = [
    "Seu filho olha para o livro e as letras parecem nao fazer sentido nenhum...",
    "A tarefa de leitura vira um choro — pra ele e quase pra voce tambem...",
    "Na escola os coleguinhas ja leem, e seu filho comeca a se comparar...",
    "Voce tenta ajudar mas nao sabe o metodo certo e acaba gerando mais frustracao...",
    'No fundo bate um medo: "E se ele crescer achando que nao e capaz?"',
  ]

  return (
    <section className="bg-[#FFF8F0] border-t-4 border-[#F5A623] py-16 px-5">
      <div className="mx-auto max-w-[680px]">
        <h2 className="font-sans font-bold text-2xl text-[#2C2C2C] text-center mb-8 text-balance">
          Voce ja passou por alguma dessas situacoes?
        </h2>

        <div className="flex flex-col gap-4 mb-8">
          {pains.map((pain) => (
            <div
              key={pain}
              className="bg-[#FFFFFF] border-l-4 border-[#E8380D] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-4"
            >
              <p className="font-serif text-base text-[#2C2C2C]">
                <span className="mr-2" aria-hidden="true">👎</span>
                {pain}
              </p>
            </div>
          ))}
        </div>

        {/* Warning highlight */}
        <div className="bg-[#FFF3CD] rounded-2xl p-5 text-center">
          <p className="font-sans font-bold text-base text-[#2C2C2C]">
            <span className="mr-2" aria-hidden="true">⚠️</span>
            Se voce respondeu sim pra qualquer uma dessas... voce precisa ler o
            que vem a seguir.
          </p>
        </div>
      </div>
    </section>
  )
}
