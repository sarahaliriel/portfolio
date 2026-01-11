export default function Footer() {
  return (
    <footer className="bg-gradient-footer bg-[length:200%_200%] animate-gradient-x text-white py-8 px-6 text-center md:text-left md:flex md:flex-col md:items-start gap-6">
      <p className="text-sm w-full">
        © 2026 Sarah Aliriel Dutra Farbelow Dumitrache.
      </p>

      <nav className="flex flex-wrap gap-4 text-sm w-full">
        <a href="#home" className="hover:underline">Início</a>
        <a href="#about" className="hover:underline">Sobre</a>
        <a href="#projects" className="hover:underline">Projetos</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#experience" className="hover:underline">Experiência</a>
        <a href="#contact" className="hover:underline">Contato</a>
      </nav>
    </footer>
  );
}