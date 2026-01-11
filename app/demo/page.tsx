import { notFound } from "next/navigation";

export default function DemoPage() {
  const demoExiste = false;

  if (!demoExiste) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-semibold">Demo disponível 🎉</h1>
      <p className="mt-4 text-muted-foreground max-w-md">
        Aqui está a versão pública do demo.
      </p>
    </main>
  );
}
