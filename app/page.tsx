import Nav from "@/components/Nav";
import {Button} from "@/components/ui/button"

export default function Home() {
  return (
    <main className="p-24">
      <Nav/>
      <section className="py-24 flex flex-col items-center text-center gap-8">
        <h1 className="text-2xl text-primary">Shadcn UI and Nextjs 🔥</h1>
      </section>
      <div className="flex gap-6 py-6 items-center justify-center">
        <Button>Learn More</Button>
        <Button>Get Started</Button>
      </div>
    </main>
  );
}
