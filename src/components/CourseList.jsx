import { BookOpen, Clock, Users } from 'lucide-react';

const courses = [
  {
    title: 'Pemrograman Web Dasar',
    level: 'Pemula',
    duration: '6 minggu',
    students: '3.2k',
    desc: 'HTML, CSS, dan JavaScript dari nol hingga siap membuat website statis.'
  },
  {
    title: 'Data Science dengan Python',
    level: 'Menengah',
    duration: '8 minggu',
    students: '2.1k',
    desc: 'Belajar analisis data, pandas, visualisasi, dan dasar machine learning.'
  },
  {
    title: 'UI/UX Design Praktis',
    level: 'Semua Level',
    duration: '4 minggu',
    students: '1.7k',
    desc: 'Prinsip desain, wireframing, dan prototyping untuk produk digital.'
  },
];

export default function CourseList() {
  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Kelas Populer</h2>
            <p className="text-slate-600 mt-2">Kurasi materi berkualitas untuk mempercepat karier Anda.</p>
          </div>
          <a href="#all" className="hidden sm:inline-flex items-center rounded-md border border-slate-300 px-4 py-2 bg-white text-slate-800 hover:bg-slate-50">
            Lihat Semua
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article key={c.title} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-indigo-600 font-medium">
                  <BookOpen className="h-5 w-5" />
                  {c.level}
                </div>
                <span className="text-xs text-slate-500">{c.students}+ siswa</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-indigo-600">
                {c.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm">{c.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-slate-700 text-sm">
                <Clock className="h-4 w-4" />
                Durasi {c.duration}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
