import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Siap tingkatkan keahlian Anda?</h2>
          <p className="text-indigo-100 mt-2">Daftar sekarang dan dapatkan akses ke semua kelas selama 7 hari gratis.</p>
        </div>
        <form className="bg-white rounded-lg p-4 sm:p-6 shadow flex gap-3">
          <input
            type="email"
            required
            placeholder="Email Anda"
            className="flex-1 rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500">
            Daftar
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
