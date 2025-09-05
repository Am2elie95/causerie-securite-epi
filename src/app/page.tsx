// src/app/page.tsx
import Etape from "@/components/Etape";
import { scenario } from "@/data/scenario";

export default function HomePage() {
  return <Etape noeud={scenario["intro"]} />;
}
