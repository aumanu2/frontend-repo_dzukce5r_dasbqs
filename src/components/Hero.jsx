import Spline from '@splinetool/react-spline';
import { Star, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/TFq1GqYB2k48uGv5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 shadow backdrop-blur">
            <Star className="h-4 w-4 text-yellow-500" />
            Platform Edukator Indonesia
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Belajar bersama mentor terbaik, dari mana saja.
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-xl">
            Akses kelas interaktif, kurikulum terkini, dan komunitas pembelajar yang suportif.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#courses" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-500">
              Jelajahi Kursus
            </a>
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-800 font-medium bg-white/80 hover:bg-white">
              <Play className="h-5 w-5 mr-2" />
              Lihat Cara Kerja
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
    </section>
  );
}
