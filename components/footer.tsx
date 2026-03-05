export function Footer() {
  return (
    <footer className="bg-[#2C2C2C] py-8 px-5 text-center">
      <div className="mx-auto max-w-[680px]">
        <p className="font-sans font-bold text-sm text-[#FFFFFF] mb-3">
          Educacao Kids
        </p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="#"
            className="font-serif text-sm text-[#999999] hover:text-[#FFFFFF] transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            className="font-serif text-sm text-[#999999] hover:text-[#FFFFFF] transition-colors"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="font-serif text-sm text-[#999999] hover:text-[#FFFFFF] transition-colors"
            aria-label="Suporte via WhatsApp"
          >
            WhatsApp
          </a>
        </div>
        <p className="font-serif text-xs text-[#666666]">
          &copy; 2026 Editora Inove — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
