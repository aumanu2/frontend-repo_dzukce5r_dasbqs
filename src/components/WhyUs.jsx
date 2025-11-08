import { ShieldCheck, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Terpercaya',
    desc: 'Materi tersusun rapi dengan standar industri dan selalu diperbarui.'
  },
  {
    icon: Users,
    title: 'Mentor Berpengalaman',
    desc: 'Belajar langsung dari praktisi yang aktif di dunia kerja.'
  },
  {
    icon: Sparkles,
    title: 'Belajar Interaktif',
    desc: 'Tugas, kuis, dan proyek nyata untuk mengasah kemampuan.'
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Mengapa Memilih Kami</h2>
        <p className="text-slate-600 text-center mt-2 max-w-2xl mx-auto">Didesain untuk membantu Anda belajar efektif dengan dukungan komunitas dan mentor.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <f.icon className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
