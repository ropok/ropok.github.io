import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  role: string;
  image: string;
  tags: string[];
  year: string;
  url: string;
}

export function GameCard({
  title,
  description,
  role,
  image,
  tags,
  year,
  url,
}: GameCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group focus:outline-none"
    >
      <Card className="overflow-hidden bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
        
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* year badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-purple-900/80 text-purple-100 border-purple-500/30">
              {year}
            </Badge>
          </div>

          {/* external icon */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <div className="bg-purple-600 p-2 rounded-full shadow-lg">
              <ExternalLink className="size-5 text-white" />
            </div>
          </div>

        </div>

        {/* Content */}
        <div className="p-6">

          <h3 className="text-2xl text-white mb-2 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>

          <div className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm mb-3">
            {role}
          </div>

          <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-slate-700 text-slate-300 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

        </div>

      </Card>
    </a>
  );
}

