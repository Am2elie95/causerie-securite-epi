import { scenario } from "@/data/scenario";
import Etape from "@/components/Etape";

export default async function PageEtape({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ⬇️ On attend params
  const { id } = await params;

  const noeud = scenario[id];

  if (!noeud) {
    return (
      <main className="flex items-center justify-center h-[100dvh]">
        <h1 className="text-2xl font-bold text-red-600">Étape introuvable</h1>
      </main>
    );
  }

  return <Etape noeud={noeud} />;
}
