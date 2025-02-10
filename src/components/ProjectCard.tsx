import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  buttonText?: string; // New prop to allow flexibility
}

export default function ProjectCard({ name, description, link, buttonText = "View Project" }: ProjectCardProps) {
  return (
    <div className="border border-gray-800 p-4 rounded-lg hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-400 mt-1">{description}</p>
      <Link href={link} className="mt-2 inline-block text-blue-500 hover:underline">
        {buttonText} →
      </Link>
    </div>
  );
}
