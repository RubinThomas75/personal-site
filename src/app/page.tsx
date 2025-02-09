'use client';

import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Rubin Thomas</h1>
        <p className="text-gray-600 mt-2">Software Engineer @ Google</p>
      </section>

      {/* Links */}
      <section className="mt-6 flex space-x-6">
        <Link href="https://github.com/yourgithub" className="text-blue-500 hover:underline">GitHub</Link>
        <Link href="https://linkedin.com/in/yourlinkedin" className="text-blue-500 hover:underline">LinkedIn</Link>
        <Link href="/projects" className="text-blue-500 hover:underline">Projects</Link>
      </section>

      {/* Projects */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-center">Projects</h2>
        <ProjectCard 
          name="AI-Powered Tool" 
          description="Built an AI tool that does X."
          link="https://github.com/yourrepo"
        />
        <ProjectCard 
          name="Minimalist UI" 
          description="Created a clean UI framework."
          link="https://github.com/yourrepo"
        />
        <ProjectCard 
          name="Automated Pipeline" 
          description="Developed an efficient automation system."
          link="https://github.com/yourrepo"
        />
      </section>
    </div>
  );
}