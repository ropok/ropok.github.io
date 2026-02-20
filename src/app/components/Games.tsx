import { GameCard } from "@/app/components/GameCard";

export function Games() {
  const games = [
   {
      title: "Egrang Rebooted",
      description: "Visualization of Traditional Game Egrang.",
      role: "Game Developer & Game Designer",
      image: "https://img.itch.zone/aW1nLzU5ODIyNjYuanBn/original/6CM4YX.jpg",
      tags: ["Unity", "UnityScript", "Education", "PC", "Windows"],
      year: "2013",
      url: "https://jalerse.itch.io/egrang-rebooted"
    },
    {
      title: "Choosing Vacation",
      description: "This game originates from the burn out situation of an employee. He thinks of going to a vacation, but he's not sure where to go until he sees an advertisement of a game to choose the best place for him. This game asks him to find lots of differences between two pictures. Each differences decides his next destination.\n Submitted on MGDP Game Jam 2022.\n Music by: Johnny Yang (SleepyUFO)",
      role: "Game Developer",
      image: "https://img.itch.zone/aW1nLzk4MjcyMTEucG5n/315x250%23c/EiVl0B.png",
      tags: ["Unity", "C#", "GameJam", "WebGL"],
      year: "2022",
      url: "https://jalerse.itch.io/choosing-vacation"
    },
    {
      title: "Power Plant Adventure",
      description: "Adventure of Elementary Student to save planet by saving energy and learn it. Client: Risetnesia.",
      role: "Game Developer",
      image: "https://cdn2.scratch.mit.edu/get_image/project/1078370449_100x80.png",
      tags: ["Scratch", "Elementary Student", "Education", "Risetnesia"],
      year: "2024",
      url: "https://scratch.mit.edu/projects/1078370449"
    },
    {
      title: "QuakeSafe Kids",
      description: "An educational game for Megathrust Earthquake Preparedness in Elementary Student. Client: Risetnesia",
      role: "Game Developer",
      image: "https://cdn2.scratch.mit.edu/get_image/project/1079909334_100x80.png",
      tags: ["Scratch", "Elementary Student", "Education", "Risetnesia"],
      year: "2024",
      url: "https://scratch.mit.edu/projects/1079909334/"
    },
    {
      title: "Javanera",
      description: "Interactive Digital Board Game of Snake and Ladder to introduce Javanese Language in fun and exciting way. Client: Risetnesia",
      role: "Game Developer",
      image: "https://img.itch.zone/aW1nLzIyMDg1MzQ1LnBuZw==/315x250%23c/nv%2BYLa.png",
      tags: ["Unity", "C#", "Education", "WebGL", "Risetnesia"],
      year: "2025",
      url: "https://jalerse.itch.io/javanera"
    },
    {
      title: "Pick a Justice Game",
      description: "School-themed visual novel with top down adventure to fight down bully monster and bullying education. Client: Risetnesia",
      role: "Game Developer",
      image: "https://img.itch.zone/aW1nLzIzMjIwNDUwLmpwZw==/315x250%23c/b5KhMq.jpg",
      tags: ["Unity", "C#", "Education", "WebGL", "Risetnesia"],
      year: "2025",
      url: "https://jalerse.itch.io/pick-a-justice-game"
    },
  {
      title: "LikuidCris",
      description: "An educational game for learning basic of cryptocurrency in an interactive way. Client: Risetnesia",
      role: "Game Developer & Game Designer",
      image: "https://tr.rbxcdn.com/180DAY-dda2ad7270e86473590113750e7fb291/150/150/Image/Webp/noFilter",
      tags: ["Roblox", "Lua", "Education", "Cryptocurrency", "Puzzle", "Risetnesia"],
      year: "2025",
      url: "https://www.roblox.com/games/116935637740928/LikuidCris-Home"
    }

  ];

  return (
    <section id="featured-games" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Featured Projects</h2>
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
