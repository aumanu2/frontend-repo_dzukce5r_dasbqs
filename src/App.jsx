import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseList from './components/CourseList';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <CourseList />
        <WhyUs />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} EduKita. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-900">Kebijakan Privasi</a>
            <a href="#terms" className="hover:text-slate-900">Syarat & Ketentuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
