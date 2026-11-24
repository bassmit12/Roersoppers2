import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-50">
      <main className="pt-20">
        <section className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            Pagina niet gevonden
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Deze pagina bestaat niet (meer). Duik terug naar de homepage.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300"
          >
            Naar de homepage
          </Link>
        </section>
      </main>
    </div>
  )
}
