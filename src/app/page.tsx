"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import situations from "@/data/situations";
// import Situation from "@/components/Situation";

export default function HomePage() {
  const [start, setStart] = useState(false);

  if (!start) {
    return (
      <main className="w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/intro-min.png"
            alt="Causerie sécurité"
            fill
            className="object-cover sm:object-contain"
            priority
          />

           {/* Bandeau rouge en bas */}
           <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
            <div className="bg-red-700/90 px-6 py-4 pb-7 rounded-lg shadow-lg max-w-md w-[80%] mx-auto text-center">
              <h1 className="text-lg sm:text-2xl font-bold mb-4 text-white">
                Causerie Sécurité : Les EPI
              </h1>

              <Link
                href="/etape/1"
                className="sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-white text-red-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
              >
                Démarrer la causerie
              </Link>
            </div>
          </div>

        </div>
      </main>
    );
  }

  // Quand on clique sur "Commencer" → on charge la première situation
  //return <Situation data={situations[0]} />;
}
