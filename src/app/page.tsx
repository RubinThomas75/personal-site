'use client';

import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <p className="text-gray-600 mt-2 text-lg">Software Engineer</p>
        <p className="text-gray-700 mt-4 text-md leading-relaxed">
        {"Hi! Welcome to my site."} <br /> {"I'm currently working on travel infrastructure at Google."}
  </p>
      </section>

      {/* Links */}
      <section className="mt-6 flex space-x-6">
        <Link href="https://github.com/yourgithub" className="text-blue-600 hover:underline text-lg">GitHub</Link>
        <Link href="https://linkedin.com/in/yourlinkedin" className="text-blue-600 hover:underline text-lg">LinkedIn</Link>
      </section>

      {/* Projects */}
      <section className="mt-12 w-full max-w-4xl px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Projects</h2>
        <div className="space-y-4">
          <ProjectCard 
            name="ELI5 Meditron" 
            description="Fine tuned Meditron 7B to answer ELi5 style medical questions. Try out the demo!"
            link="/meddemo"
            buttonText='View Demo'
          />
          <ProjectCard 
            name="DeepVariant Case Study" 
            description="Fine-tuned DeepVariant on RNA sequencing data to evaluate effect on variant calling accuracy in low-coverage regions."
            link="https://github.com/yourrepo"
            buttonText='View on Github'
          />
        </div>
      </section>
    </div>
  );
}
