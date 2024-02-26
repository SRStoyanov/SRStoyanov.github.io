import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id="about" className="bg-primary rounded p-4">
        <h1 className="text-6xl font-bold">Hello World</h1>
        <p className="text-2xl mt-4 text-zinc-700">Welcome to my Next.js app</p>
      </section>
      <section id="projects" className=""></section>
      <section id="contact" className=""></section>
    </main>
  );
}
