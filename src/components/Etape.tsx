"use client";

import Image from "next/image";
import Link from "next/link";
import { Noeud } from "@/data/scenario";

export default function Etape({ noeud }: { noeud: Noeud }) {
  
  // --- CAS N°1 : ÉTAPE AVEC ZONES CLIQUABLES SUR L'IMAGE ---
  if (noeud.zonesCliquables) {
    const zoneHaute = noeud.zonesCliquables.find(z => z.zone === 'haut');
    const zoneBasse = noeud.zonesCliquables.find(z => z.zone === 'bas');

    return (
      <main className="w-full h-[100dvh] bg-white relative">
        <Image
          src={noeud.image}
          alt="Écran de choix"
          fill
          quality={90}
          priority
          className="object-contain"
        />
        {zoneHaute && (
          <Link
            href={`/etape/${zoneHaute.suivant}`}
            className="absolute top-0 left-0 w-full h-1/2"
            aria-label={zoneHaute.libelle}
          />
        )}
        {zoneBasse && (
          <Link
            href={`/etape/${zoneBasse.suivant}`}
            className="absolute bottom-0 left-0 w-full h-1/2"
            aria-label={zoneBasse.libelle}
          />
        )}
      </main>
    );
  }

  // --- CAS N°2 : ÉTAPE CLASSIQUE (IMAGE + BANDEAU ROUGE) ---
  return (
    <main className="w-full h-[100dvh] flex flex-col items-center bg-white overflow-hidden">
      <div className="w-full max-w-[500px] h-full flex flex-col">
        <div className="flex-1 relative">
          <Image
            src={noeud.image}
            alt={noeud.titre ?? "Image de l'étape"}
            fill
            quality={90}
            priority
            className="object-cover"
          />
        </div>

        <div className="w-full bg-red-800 py-6 px-4 text-center text-white">
          {noeud.titre && (
            <h1 className={`font-extrabold mb-2 ${noeud.id === 'intro' ? 'text-2xl sm:text-5xl' : 'text-4xl sm:text-3xl'}`}>
              {noeud.titre}
            </h1>
          )}
          {noeud.sousTitre && (
             <p className="text-lg font-bold mb-3 uppercase opacity-90">
                {noeud.sousTitre}
             </p>
          )}
          {noeud.texte && (
            <p className="text-base mb-4 font-bold uppercase">
              {noeud.texte}
            </p>
          )}

          {/* ==================== BLOC BOUTONS MIS À JOUR ==================== */}
          <div className="mt-4">

            {/* Affiche les boutons de choix (verticaux) s'ils existent */}
            {noeud.choix && (
              <div className="flex flex-col space-y-3">
                {noeud.choix.map((choix) => (
                  <Link key={choix.suivant} href={`/etape/${choix.suivant}`} className="inline-flex items-center justify-center bg-gradient-to-b from-white to-gray-200 text-gray-700 font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                    {choix.libelle}
                  </Link>
                ))}
              </div>
            )}

            {/* Affiche les deux boutons de fin (horizontaux) si c'est l'étape finale */}
            {noeud.estFin && (
              <div className="flex flex-row items-center justify-center space-x-4">
               
                {noeud.redirigeVers && (
                  <Link href={`/etape/${noeud.redirigeVers}`} className="inline-flex items-center justify-center bg-gradient-to-b from-white to-gray-200 text-gray-700 font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                    {noeud.libelleRedirection || "Rejouer"}
                  </Link>
                )}
                 {noeud.formUrl && (
                  <a
                    href={noeud.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-red-500 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                   Quitter
                  </a>
                )}
              </div>
            )}

            {/* Affiche le bouton "Suivant" normal sur toutes les autres étapes */}
            {!noeud.choix && !noeud.estFin && noeud.suivant && (
              <Link href={`/etape/${noeud.suivant}`} className="inline-flex items-center justify-center bg-gradient-to-b from-white to-gray-200 text-gray-700 font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <span>{noeud.libelleSuivant || "Suivant"}</span>
              </Link>
            )}
            
          </div>
          {/* ================================================================ */}
        </div>
      </div>
    </main>
  );
}