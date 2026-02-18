import { Gamepad2, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(0,0,0,0))] animate-pulse" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 mb-6">
            <Gamepad2 className="size-5 text-purple-400" />
            <span className="text-purple-300">Game Developer | Software Engineer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Hi, I'm Jaler
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Crafting impactful games that immerse, inspire & scale seamlessly.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Mail className="size-5 mr-2" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30">
              View My Work
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center mt-8">
            <a href="https://github.com/ropok" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="size-6" />
            </a>
            <a href="https://www.linkedin.com/in/jalerse/" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="size-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
