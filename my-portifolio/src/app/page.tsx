import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import projectsMok from '@/moks/projects.json'
export default function Home() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen p-4">
      <Header />
      <Projects projects={projectsMok}/>
    </div>
  );
}
