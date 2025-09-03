"use client";

import Image from "next/image";
import Link from "next/link";
import type { Noeud } from "@/data/scenario";

export default function Etape({ noeud }: { noeud: Noeud }) {
  // Sécurise TS : tableaux vides si undefined
  const choicesText = noeud.choix ?? [];
  const choicesVisual = noeud.choixVisuels ?? [];

  const hasTextChoices = choicesText.length > 0;
  const hasVisualChoices = choicesVisual.length === 2;

  const isIntro = Boolean(noeud.titre);
  const isEnonce =
    !noeud.titre &&
    !!noeud.texte &&
    !hasTextChoices &&
    !hasVisualChoices &&
    !!noeud.suivant;

  return (
    <main className="w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-[520px] h-full">
        {/* Fond */}
        <Image
          src={noeud.image}
          alt={noeud.titre ?? noeud.texte ?? ""}
          fill
          quality={75}
          className="object-cover sm:object-contain"
          priority
        />

        {/* ===================== CHOIX (Bandeaux rouges pleine largeur) ===================== */}
        {/* Cas 1 : choix textuels */}
        {hasTextChoices && (
          <>
            {/* Choix 1 centré */}
            {choicesText[0] && (
              <div className="absolute inset-0 flex items-center justify-center mb-10">
                <Link
                  href={`/etape/${choicesText[0].suivant}`}
                  className="bg-red-700 text-white text-base sm:text-lg font-bold text-center py-3 p-7 hover:bg-red-800 transition w-full max-w-[520px]"
                >
                  {choicesText[0].libelle}
                </Link>
              </div>
            )}

            {/* Choix 2 en bas */}
            {choicesText[1] && (
              <div className="absolute inset-x-0 bottom-0 flex justify-center">
                <Link
                  href={`/etape/${choicesText[1].suivant}`}
                  className="bg-red-700 text-white text-base sm:text-lg font-bold text-center py-3 p-7 hover:bg-red-800 transition w-full max-w-[520px]"
                >
                  {choicesText[1].libelle}
                </Link>
              </div>
            )}
          </>
        )}

        {/* ===================== CAS SANS CHOIX (CSS initial gardé) ===================== */}
        {/* {!hasTextChoices && !hasVisualChoices && (
          <div className="absolute inset-x-0 flex flex-col items-center justify-end bottom-0 text-center">
            {isIntro ? (
              <div className="mb-4 bg-red-700 backdrop-blur-sm px-6 py-5 rounded-xl shadow-lg max-w-md w-[85%]">
                {noeud.titre && (
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
                    {noeud.titre}
                  </h1>
                )}
                {noeud.sousTitre && (
                  <p className="mt-2 text-lg sm:text-2xl font-bold text-white uppercase">
                    {noeud.sousTitre}
                  </p>
                )}
              </div>
            ) : isEnonce ? (
              <div className="bg-red-700 px-6 py-4 pb-7 shadow-lg max-w-md w-[80%] mx-auto text-center">
                <p className="text-white mb-5 text-base sm:text-lg font-semibold">
                  {noeud.texte}
                </p>
                <Link
                  href={`/etape/${noeud.suivant}`}
                  className="px-4 py-2 bg-white text-red-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
                >
                  {noeud.libelleSuivant ?? "Suivant"}
                </Link>
              </div>
            ) : (
              noeud.texte && (
                <div className="bg-red-700/90 px-6 py-4 rounded-lg shadow-lg max-w-md w-[80%] mx-auto text-center">
                  <p className="text-white text-lg sm:text-2xl font-bold drop-shadow md:px-4">
                    {noeud.texte}
                  </p>
                </div>
              )
            )} */}

            {!hasTextChoices && !hasVisualChoices && (
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end text-center mb-4">
              {isIntro ? (
                <div className="bg-red-700 px-6 py-5 shadow-lg w-full">
                  {noeud.titre && (
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
                      {noeud.titre}
                    </h1>
                  )}
                  {noeud.sousTitre && (
                    <p className="mt-2 text-lg sm:text-2xl font-bold text-white uppercase">
                      {noeud.sousTitre}
                    </p>
                  )}
                </div>
              ) : isEnonce ? (
                <div className="bg-red-700 px-6 py-6 shadow-lg w-full">
                  <p className="text-white mb-5 text-base sm:text-lg font-semibold">
                    {noeud.texte}
                  </p>
                  <Link
                    href={`/etape/${noeud.suivant}`}
                    className="px-4 py-2 bg-white text-red-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
                  >
                    {noeud.libelleSuivant ?? "Suivant"}
                  </Link>
                </div>
              ) : (
                noeud.texte && (
                  <div className="bg-red-700 px-6 py-6 shadow-lg w-full">
                    <p className="text-white text-lg sm:text-2xl font-bold drop-shadow">
                      {noeud.texte}
                    </p>
                  </div>
                )
              )}


            {/* Boutons génériques (inchangés) */}
            <div className="mt-4 flex flex-col items-center gap-3 mb-1">
              {noeud.suivant && !isEnonce && (
                <Link
                  href={`/etape/${noeud.suivant}`}
                  className="px-4 py-2 bg-white text-red-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
                >
                  {noeud.libelleSuivant ?? "Suivant"}
                </Link>
              )}

              {/* Cas fin */}
              {noeud.estFin && (noeud.redirigeVers || noeud.formUrl) && (
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  {noeud.redirigeVers && (
                    <Link
                      href={`/etape/${noeud.redirigeVers}`}
                      className="px-6 py-3 bg-white text-red-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
                    >
                      {noeud.libelleRedirection ?? "Rejouer"}
                    </Link>
                  )}

                  {noeud.formUrl && (
                    <a
                      href={noeud.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
                    >
                      Valider sur Google Form
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
