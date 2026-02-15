import { GameCard } from "@/app/components/GameCard";

export function Games() {
  const games = [
    {
      title: "Realm of Shadows",
      description: "An epic fantasy RPG set in a dark medieval world. Players embark on a quest to defeat an ancient evil while making choices that shape the story. Features a deep combat system, character customization, and branching narratives.",
      role: "Lead Gameplay Programmer",
      image: "https://images.unsplash.com/photo-1759688168277-185a0c623968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwcnBnJTIwZ2FtZXxlbnwxfHx8fDE3NjkwOTIxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Unity", "C#", "RPG", "Multiplayer"],
      year: "2024"
    },
    {
      title: "Neon Drift Racing",
      description: "A high-octane arcade racing game set in a futuristic cyberpunk city. Features dynamic weather systems, customizable vehicles, and intense multiplayer races through neon-lit streets and highways.",
      role: "Senior Systems Designer",
      image: "https://images.unsplash.com/photo-1602940819863-2905852243ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYW1lfGVufDF8fHx8MTc2OTAzOTEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Unreal Engine", "C++", "Racing", "Physics"],
      year: "2024"
    },
    {
      title: "Cyber Ops: Neural Strike",
      description: "A tactical shooter set in a dystopian future where hackers and mercenaries fight for control of the digital realm. Combines strategic planning with fast-paced action and features an innovative hacking mechanic.",
      role: "AI Programmer & Combat Designer",
      image: "https://images.unsplash.com/photo-1545579003-84eeef98a485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBnYW1lfGVufDF8fHx8MTc2OTEyNjUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Unity", "C#", "Tactical", "AI"],
      year: "2023"
    },
    {
      title: "Puzzle Nexus",
      description: "An innovative puzzle game that blends spatial reasoning with time manipulation mechanics. Players solve increasingly complex puzzles across vibrant abstract worlds, each with unique gameplay twists.",
      role: "Lead Game Designer & Programmer",
      image: "https://images.unsplash.com/photo-1612385763901-68857dd4c43c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXp6bGUlMjBnYW1lJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY5MTE5MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Unity", "C#", "Puzzle", "Mobile"],
      year: "2023"
    },
    {
      title: "Starfall Chronicles",
      description: "A space exploration game where players captain their own ship, discover alien civilizations, and make crucial decisions that affect the fate of the galaxy. Features procedural generation and a rich narrative.",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGdhbWV8ZW58MXx8fHwxNzM3NTk1NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Unreal Engine", "C++", "Space Sim", "Procedural"],
      year: "2022"
    },
    {
      title: "Forest Guardians",
      description: "A cozy adventure game where players restore a magical forest ecosystem. Features crafting, wildlife interaction, and environmental puzzles. Designed for players seeking a relaxing, heartwarming experience.",
      role: "Gameplay Programmer & Level Designer",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBnYW1lfGVufDF8fHx8MTczNzU5NTUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Unity", "C#", "Adventure", "Indie"],
      year: "2022"
    },
    {
      title: "Egrang Rebooted",
      description: "Visualization of Traditional Game Egrang.",
      role: "Game Programmer & Game Designer",
      image: "https://img.itch.zone/aW1nLzU5ODIyNjYuanBn/original/6CM4YX.jpg",
      tags: ["Unity", "UnityScript", "Education", "PC", "Windows"],
      year: "2013",
      url: "https://jalerse.itch.io/egrang-rebooted"
    },
    {
      title: "Choosing Vacation",
      description: "This game originates from the burn out situation of an employee. He thinks of going to a vacation, but he's not sure where to go until he sees an advertisement of a game to choose the best place for him. This game asks him to find lots of differences between two pictures. Each differences decides his next destination.\n Submitted on MGDP Game Jam 2022.\n Music by: Johnny Yang (SleepyUFO)",
      role: "Game Programmer & Game Designer",
      image: "https://img.itch.zone/aW1nLzk4MjcyMTEucG5n/315x250%23c/EiVl0B.png",
      tags: ["Unity", "C#", "GameJam", "WebGL"],
      year: "2022",
      url: "https://jalerse.itch.io/choosing-vacation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Featured Games</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of projects I've worked on throughout my career, showcasing various genres and technical challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
