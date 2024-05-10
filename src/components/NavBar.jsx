import Link from "next/link"

export const NavBar = () => {
  return (
    <header className="bg-neutral-950 py-4 md:py-6 lg:py-8 fixed w-full top-0">
        <div className="container px-4 md:px-6 flex items-center justify-between m-auto">
          <Link className="text-gray-50 font-bold text-xl" href="/">
            Quick UI
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-gray-400 hover:text-gray-50 transition-colors" href="#">
              Inicio
            </Link>
            <Link className="text-gray-400 hover:text-gray-50 transition-colors" href="/docs">
              Docs
            </Link>
            <Link className="text-gray-400 hover:text-gray-50 transition-colors" href="#">
              Demos
            </Link>
            <Link className="text-gray-400 hover:text-gray-50 transition-colors" href="#">
              Support
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-gray-50 transition-colors">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>
            <div className="absolute top-16 left-0 w-full bg-gray-950 p-4 space-y-4">
              <Link className="text-gray-400 hover:text-gray-50 transition-colors block" href="#">
                Inicio
              </Link>
              <Link className="text-gray-400 hover:text-gray-50 transition-colors block" href="/docs">
                Documentación
              </Link>
              <Link className="text-gray-400 hover:text-gray-50 transition-colors block" href="#">
                Demos
              </Link>
              <Link className="text-gray-400 hover:text-gray-50 transition-colors block" href="#">
                Soporte
              </Link>
            </div>
          </div>
        </div>
    </header>
  )
}
