import { Hero } from "@/app/components/Hero";
import { Bio } from "@/app/components/Bio";
import { Games } from "@/app/components/Games";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Bio />
      <Games />
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>© 2026 Jaler Sekar Maji. All rights reserved.</p>
            <p className="text-sm mt-2">Crafting impactful softwares that immerse, inspire & scale seamlessly.</p>

          </div>
        </div>
      </footer>
    </div>
  );
}
