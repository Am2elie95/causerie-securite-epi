// src/data/scenario.ts

export type Choix = {
  libelle: string;
  suivant: string;
};

export type ChoixVisuel = {
  libelle: string;
  image: string;
  suivant: string;
};

export type Noeud = {
  id: string;
  image: string;
  titre?: string;
  sousTitre?: string;
  texte?: string;
  choix?: Choix[];
  choixVisuels?: ChoixVisuel[];
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
    image: "/images/intro-min.png",
    titre: "Causerie sécurité Les EPI",
    texte: "Fais les bons choix pour rester en sécurité pendant la collecte.",
    suivant: "1",
    libelleSuivant: "Commencer la Situation 1",
  },

  // ========= SITUATION 1 =========
  "1": {
    id: "1",
    image: "/images/s1/s1-intro-min.png",
    titre: "SITUATION N° 1",
    sousTitre: "FAIS LE BON CHOIX !",
    suivant: "1-enonce",
    libelleSuivant: "Commencer",
  },
  "1-enonce": {
    id: "1-enonce",
    image: "/images/s1/s1-question-min.png",
    texte: "Avant de partir en collecte, je constate que la semelle de ma chaussure est déchirée.",
    suivant: "1-choix",
    libelleSuivant: "Suivant",
  },
  "1-choix": {
    id: "1-choix",
    image: "/images/s1/s1-choix-min.png",
    choix: [
      { libelle: "Choix N°1 : Je décide de partir en collecte.", suivant: "1-mauvais-1" },
      { libelle: "Choix N°2 : Je demande une nouvelle paire de chaussure à mon responsable", suivant: "1-bon-1" },
    ],
  },
  "1-mauvais-1": {
    id: "1-mauvais-1",
    image: "/images/s1/s1-mauvais-choix-1-min.png",
    texte: "Une chaussure de sécurité endommagée ne protège plus tes pieds et augmente le risque d’accident.",
    suivant: "1-mauvais-2",
    libelleSuivant: "Compris",
  },
  "1-mauvais-2": {
    id: "1-mauvais-2",
    image: "/images/s1/s1-mauvais-choix-2-min.png",
    texte: "Un EPI en bon état, c’est la sécurité en plus.",
    estFin: true,
    redirigeVers: "2",
    libelleRedirection: "Aller à la situation 2",
  },
  "1-bon-1": {
    id: "1-bon-1",
    image: "/images/s1/s1-bon-choix-1-min.png",
    texte: "Bonne décision : tu demandes une nouvelle paire à ton responsable.",
    suivant: "1-bon-2",
    libelleSuivant: "Suivant",
  },
  "1-bon-2": {
    id: "1-bon-2",
    image: "/images/s1/s1-bon-choix-2-min.png",
    texte: "Un EPI en bon état, c’est la sécurité en plus.",
    estFin: true,
    redirigeVers: "2",
    libelleRedirection: "Aller à la situation 2",
  },

  // ========= SITUATION 2 =========
  "2": {
    id: "2",
    image: "/images/s2/s2-intro-min.png",
    titre: "SITUATION N° 2",
    sousTitre: "FAIS LE BON CHOIX !",
    suivant: "2-enonce",
    libelleSuivant: "Commencer",
  },
  "2-enonce": {
    id: "2-enonce",
    image: "/images/s2/s2-question-min.png",
    texte: "En collecte, je constate que mon nouveau collègue ne porte pas ses gants.",
    suivant: "2-choix",
    libelleSuivant: "Suivant",
  },
  "2-choix": {
    id: "2-choix",
    image: "/images/s2/s2-choix-min.png",
    choix: [
      {libelle: "Choix N°1 : Je ne dis rien, ça ne me concerne pas.",suivant: "2-mauvais-1",},
      {libelle: "Choix N°2 : Je lui conseille de porter ses gants.",suivant: "2-bon-1",},
    ],
  },
  "2-mauvais-1": {
    id: "2-mauvais-1",
    image: "/images/s2/s2-mauvais-choix-1-min.png",
    texte: "Travailler sans gants augmente le risque de coupures, de blessures et de contaminations.",
    suivant: "2-mauvais-2",
    libelleSuivant: "Compris",
  },
  "2-mauvais-2": {
    id: "2-mauvais-2",
    image: "/images/s2/s2-mauvais-choix-2-min.png",
    texte: "La sécurité, c’est l’affaire de tous. Un blessé et c’est toute l’équipe qui est impactée.",
    estFin: true,
    redirigeVers: "3",
    libelleRedirection: "Aller à la situation 3",
  },
  "2-bon-1": {
    id: "2-bon-1",
    image: "/images/s2/s2-bon-choix-1-min.png",
    texte: "Bonne décision : tu rappelles le port des gants. On protège nos mains à chaque manutention.",
    suivant: "2-bon-2",
    libelleSuivant: "Suivant",
  },
  "2-bon-2": {
    id: "2-bon-2",
    image: "/images/s2/s2-bon-choix-2-min.png",
    texte: "La sécurité, c’est aussi une affaire d’équipiers. Un rappel amical peut éviter un accident.",
    estFin: true,
    redirigeVers: "3",
    libelleRedirection: "Aller à la situation 3",
  },

    // ========= SITUATION 3 =========
    "3": {
    id: "3",
    image: "/images/s3/s3-intro-min.png",
    titre: "SITUATION N° 3",
    sousTitre: "FAIS LE BON CHOIX !",
    suivant: "3-enonce",
    libelleSuivant: "Commencer",
    },
    "3-enonce": {
    id: "3-enonce",
    image: "/images/s3/s3-question-min.png",
    texte: "Je suis chauffeur et je descends aider mes collègues.",
    suivant: "3-choix",
    libelleSuivant: "Suivant",
    },
    "3-choix": {
    id: "3-choix",
    image: "/images/s3/s3-choix-min.png",
    choix: [
    { libelle: "Choix N°1 : Je descends que quelque secondes, je n'ai pas besoin de gilet/veste haute visibilité.", suivant: "3-mauvais-1" },
    { libelle: "Choix N°2 : Je mets un gilet/veste haute visibilité", suivant: "3-bon-1" },
    ],
    },
    "3-mauvais-1": {
    id: "3-mauvais-1",
    image: "/images/s3/s3-mauvais-choix-1-min.png",
    texte: "Moins je suis visible, plus je suis en danger",
    suivant: "3-mauvais-2",
    libelleSuivant: "Compris",
    },
    "3-mauvais-2": {
    id: "3-mauvais-2",
    image: "/images/s3/s3-mauvais-choix-2-min.png",
    texte: "Pour travailler en sécurité, je dois être visible rapidement, de loin et par mauvais temps",
    estFin: true,
    redirigeVers: "fin-intro",
    libelleRedirection: "Voir le Flash Sécurité",
    },
    "3-bon-1": {
    id: "3-bon-1",
    image: "/images/s3/s3-bon-choix-1-min.png",
    texte: "Bonne décision : être visible rapidement, de loin c'est être en sécurité.",
    suivant: "3-bon-2",
    libelleSuivant: "Suivant",
    },
    "3-bon-2": {
    id: "3-bon-2",
    image: "/images/s3/s3-bon-choix-2-min.png",
    texte: "Pour travailler en sécurité je dois être visible rapidement, de loin et par mauvais temps.",
    estFin: true,
    redirigeVers: "fin-intro",
    libelleRedirection: "Voir le Flash Sécurité",
    },

  // ========= FIN =========
  "fin-intro": {
    id: "fin-intro",
    image: "/images/flash-min.png",
    suivant: "fin-bravo",
    libelleSuivant: "Continuer",
  },
  "fin-bravo": {
    id: "fin-bravo",
    image: "/images/bravo-min.png",
    estFin: true,
    formUrl: "https://docs.google.com/forms/d/1LSziBwtHUKtm5NG3y8LYa-hxAZb_4D-nKjoGUzMpiEY/edit",
    redirigeVers: "intro",
    libelleRedirection: "Rejouer",
  },
};
