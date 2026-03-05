import Image from "next/image"

export function TopBanner() {
  return (
    <div className="w-full">
      <Image
        src="/images/topo.avif"
        alt="Metodo Americano de Alfabetizacao - Pagamento Seguro, Garantia 7 Dias, Acesso Imediato"
        width={1200}
        height={120}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, 1200px"
        priority
      />
    </div>
  )
}
