// src/data/scenario.ts

export type Choix = {
  libelle: string;
  suivant: string;
};

export type Noeud = {
  id: string;
  image: string;
  titre?: string;
  sousTitre?: string;
  texte?: string;
  choix?: Choix[];
  // NOUVELLE PROPRIÉTÉ pour les choix visuels sur une seule image
  zonesCliquables?: {
    zone: 'haut' | 'bas';
    suivant: string;
    libelle: string;
  }[];
  suivant?: string;
  libelleSuivant?: string;
  estFin?: boolean;
  redirigeVers?: string;
  libelleRedirection?: string;
  formUrl?: string;
};

export const startId = "intro";

export const scenario: Record<string, Noeud> = {
  // ========= INTRO =========
  intro: {
    id: "intro",
    image: "/images/s1/s1-intro-mine.webp",
    titre: "Causerie sécurité Les EPI",
    suivant: "1",
    libelleSuivant: "Commencer la Situation 1",
  },

  // ========= SITUATION 1 =========
  "1": {
    id: "1",
    image: "/images/s1/s1-intro-mine.webp",
    titre: "SITUATION N°1",
    sousTitre: "FAIS LE BON CHOIX !",
    suivant: "1-enonce",
    libelleSuivant: "Commencer",
  },
  "1-enonce": {
    id: "1-enonce",
    image: "/images/s1/s1-question.webp",
    texte: "Avant de partir en collecte, je constate que la semelle de ma chaussure est déchirée.",
    suivant: "1-choix",
    libelleSuivant: "Suivant",
  },
  
  // --- ÉTAPE DE CHOIX VISUEL ---
  // On utilise la nouvelle propriété "zonesCliquables"
  "1-choix": {
    id: "1-choix",
    image: "/images/s1/s1-choix.webp", // <-- La NOUVELLE image qui contient les 2 choix
    zonesCliquables: [
      { 
        zone: 'haut', 
        suivant: "1-mauvais-1",
        libelle: "Choix N°1 : Je décide de partir en collecte."
      },
      { 
        zone: 'bas', 
        suivant: "1-bon-1",
        libelle: "Choix N°2 : Je demande une nouvelle paire de chaussure à mon responsable"
      }
    ]
  },
  // -----------------------------

  "1-mauvais-1": {
    id: "1-mauvais-1",
    image: "/images/s1/s1-mauvais-choix-1.webp",
    texte: "Une chaussure endommagée ne portege plus mes pieds. Le risque d’accident augmente.",
    suivant: "1-mauvais-2",
    libelleSuivant: "Compris",
  },
  "1-mauvais-2": {
    id: "1-mauvais-2",
    image: "/images/s1/s1-mauvais-choix-2.webp",
    texte: "Un EPI en bon état, c’est la sécurité en plus.",
    estFin: true,
    redirigeVers: "2",
    libelleRedirection: "Aller à la situation 2",
  },
  "1-bon-1": {
    id: "1-bon-1",
    image: "/images/s1/s1-bon-choix-1.webp",
    texte: "",
    suivant: "1-bon-2",
    libelleSuivant: "Suivant",
  },
  "1-bon-2": {
    id: "1-bon-2",
    image: "/images/s1/s1-bon-choix-2.webp",
    texte: "Un EPI en bon état, c’est la sécurité en plus.",
    estFin: true,
    redirigeVers: "2",
    libelleRedirection: "Aller à la situation 2",
  },

    // ========= SITUATION 2 =========
  "2": {
    id: "2",
    image: "/images/s2/s2-intro.webp",
    titre: "SITUATION N°2",
    sousTitre: "FAIS LE BON CHOIX !",
    suivant: "2-enonce",
    libelleSuivant: "Commencer",
  },
  "2-enonce": {
    id: "2-enonce",
    image: "/images/s2/s2-questione.webp",
    texte: "En collecte, je vois que mon nouveau collegue ne porte pas ses gants.",
    suivant: "2-choix",
    libelleSuivant: "Suivant",
  },
  "2-choix": {
    id: "2-choix",
    image: "/images/s2/s2-choix.webp",
    zonesCliquables: [
      { zone: 'haut', suivant: "2-mauvais-1", libelle: "Choix N°1 : Je ne dis rien, ça ne me concerne pas." },
      { zone: 'bas', suivant: "2-bon-1", libelle: "Choix N°2 : Je lui conseille de porter ses gants." },
    ],
  },
  "2-mauvais-1": {
    id: "2-mauvais-1",
    image: "/images/s2/s2-mauvais-choix-1.webp",
    texte: "Travailler sans gants augmente le risque de coupures et de contaminations.",
    suivant: "2-mauvais-2",
    libelleSuivant: "Compris",
  },
  "2-mauvais-2": {
    id: "2-mauvais-2",
    image: "/images/s2/s2-mauvais-choix-2.webp",
    texte: "La sécurite c’est l’affaire de tous. Un blessé et c’est l’équipe qui est impactée.",
    estFin: true,
    redirigeVers: "3",
    libelleRedirection: "Aller à la situation 3",
  },
  "2-bon-1": {
    id: "2-bon-1",
    image: "/images/s2/s2-bon-choix-1a.webp",
    texte: "",
    suivant: "2-bon-2",
    libelleSuivant: "Suivant",
  },
  "2-bon-2": {
    id: "2-bon-2",
    image: "/images/s2/s2-bon-choix-2a.webp",
    texte: "La sécurite c’est une affaire d’équipe. un rappel amical peut éviter un accident.",
    estFin: true,
    redirigeVers: "3",
    libelleRedirection: "Aller à la situation 3",
  },

  // ========= SITUATION 3 =========
  "3": {
    id: "3",
    image: "/images/s3/s3-intro.webp",
    titre: "SITUATION N° 3",
    sousTitre: "FAIS LE BON CHOIX !",
    suivant: "3-enonce",
    libelleSuivant: "Commencer",
  },
  "3-enonce": {
    id: "3-enonce",
    image: "/images/s3/s3-question.webp",
    texte: "Je suis chauffeur et je dois descendre aider mes collègues.",
    suivant: "3-choix",
    libelleSuivant: "Suivant",
  },
  "3-choix": {
    id: "3-choix",
    image: "/images/s3/s3-choix.webp",
    zonesCliquables: [
      { zone: 'haut', suivant: "3-mauvais-1", libelle: "Choix N°1 : Je descends que quelque secondes, je n'ai pas besoin de gilet/veste haute visibilité." },
      { zone: 'bas', suivant: "3-bon-1", libelle: "Choix N°2 : Je mets un gilet/veste haute visibilité" },
    ],
  },
  "3-mauvais-1": {
    id: "3-mauvais-1",
    image: "/images/s3/s3-mauvais-choix-1a.webp",
    texte: "",
    suivant: "3-mauvais-2",
    libelleSuivant: "Compris",
  },
  "3-mauvais-2": {
    id: "3-mauvais-2",
    image: "/images/s3/s3-mauvais-choix-2b.webp",
    texte: "Pour travailler en sécurité, je dois être visible rapidement, de loin et par mauvais temps",
    estFin: true,
    redirigeVers: "fin-intro",
    libelleRedirection: "Voir le Flash Sécurité",
  },
  "3-bon-1": {
    id: "3-bon-1",
    image: "/images/s3/s3-bon-choix-1-min.webp",
    texte: "",
    suivant: "3-bon-2",
    libelleSuivant: "Suivant",
  },
  "3-bon-2": {
    id: "3-bon-2",
    image: "/images/s3/s3-bon-choix-2.webp",
    texte: "Pour travailler en securite, je dois etre visible rapidement, de loin et par mauvais temps.",
    estFin: true,
    redirigeVers: "fin-intro",
    libelleRedirection: "Voir le Flash Sécurité",
  },

  // ========= FIN =========
  "fin-intro": {
    id: "fin-intro",
    image: "/images/flash-a.webp",
    suivant: "fin-bravo",
    libelleSuivant: "Continuer",
  },
  "fin-bravo": {
    id: "fin-bravo",
    image: "/images/bravo-a.webp",
    estFin: true,
    formUrl: "https://docs.google.com/forms/d/1LSziBwtHUKtm5NG3y8LYa-hxAZb_4D-nKjoGUzMpiEY/edit",
    redirigeVers: "intro",
    libelleRedirection: "Rejouer",
  },
};