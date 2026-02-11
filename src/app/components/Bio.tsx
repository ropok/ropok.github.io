import { Award, Code, Users, Zap } from "lucide-react";
import { Card } from "@/app/components/ui/card";

export function Bio() {
  const stats = [
    { icon: Code, label: "Years Experience", value: "8+" },
    { icon: Zap, label: "Games Shipped", value: "15+" },
    { icon: Users, label: "Team Projects", value: "30+" },
    { icon: Award, label: "Awards Won", value: "5" },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">About Me</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto mb-8" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjkxMzc1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Game Development"
                className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="text-gray-300 space-y-4">
              <p className="text-lg">
                I'm a passionate game developer with over 8 years of experience creating engaging and immersive gaming experiences. My journey in game development began with a love for storytelling and a fascination with interactive media.
              </p>
              <p className="text-lg">
                I specialize in gameplay programming, level design, and system architecture. I've worked on everything from indie passion projects to AAA titles, collaborating with talented teams to bring creative visions to life.
              </p>
              <p className="text-lg">
                My expertise spans across multiple game engines including Unity and Unreal Engine, and I'm proficient in C#, C++, and various scripting languages. I'm always exploring new technologies and techniques to push the boundaries of what's possible in gaming.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 text-center">
                  <Icon className="size-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
