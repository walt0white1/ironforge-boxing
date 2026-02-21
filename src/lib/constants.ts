export const CLUB = {
  name: "IRON FORGE",
  tagline: "Boxing Club",
  fullName: "Iron Forge Boxing Club",
  city: "Lyon",
  address: "42 Rue de la République, 69002 Lyon",
  phone: "+33 4 72 00 00 00",
  email: "contact@ironforge-boxing.fr",
  instagram: "https://instagram.com/ironforge_boxing",
  facebook: "https://facebook.com/ironforgeboxing",
  youtube: "https://youtube.com/@ironforgeboxing",
  tiktok: "https://tiktok.com/@ironforgeboxing",
  horaires: {
    lundi: "06:00 - 22:00",
    mardi: "06:00 - 22:00",
    mercredi: "06:00 - 22:00",
    jeudi: "06:00 - 22:00",
    vendredi: "06:00 - 21:00",
    samedi: "08:00 - 18:00",
    dimanche: "09:00 - 14:00",
  },
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Coachs", href: "#coachs" },
  { label: "Planning", href: "#planning" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
] as const;

export const DISCIPLINES = [
  {
    id: "boxe-anglaise",
    title: "Boxe Anglaise",
    subtitle: "L'art noble",
    description:
      "La discipline reine du ring. Maîtrisez les fondamentaux du jab, du crochet et de l'uppercut. Développez votre footwork, votre timing et votre vision du combat dans la plus élégante des boxes.",
    icon: "boxing-glove",
    features: ["Technique de poings", "Footwork", "Défense", "Sparring"],
    image: "/images/boxe-anglaise.jpg",
    color: "#E21B1B",
  },
  {
    id: "boxe-thai",
    title: "Boxe Thaï",
    subtitle: "L'art des huit armes",
    description:
      "Poings, coudes, genoux, tibias : la Muay Thaï est l'art martial le plus complet debout. Forgez votre corps et votre esprit dans la tradition des guerriers thaïlandais.",
    icon: "flame",
    features: ["Low kicks", "Clinch", "Coudes & genoux", "Conditioning"],
    image: "/images/boxe-thai.jpg",
    color: "#D4A843",
  },
  {
    id: "mma",
    title: "MMA",
    subtitle: "L'art du combat complet",
    description:
      "Mixed Martial Arts : la synthèse ultime des arts de combat. Du striking au grappling, du takedown au ground & pound, devenez un combattant complet et polyvalent.",
    icon: "swords",
    features: ["Striking", "Wrestling", "Jiu-Jitsu", "Cage work"],
    image: "/images/mma.jpg",
    color: "#E21B1B",
  },
  {
    id: "preparation-physique",
    title: "Préparation Physique",
    subtitle: "Le corps comme arme",
    description:
      "Séances de conditionnement intensif inspirées de l'entraînement des boxeurs professionnels. HIIT, circuits, corde, sac de frappe — transformez votre physique.",
    icon: "dumbbell",
    features: ["HIIT", "Circuits", "Cardio boxing", "Renforcement"],
    image: "/images/preparation-physique.jpg",
    color: "#D4A843",
  },
] as const;

export const COACHES = [
  {
    name: "Karim Benzarti",
    role: "Head Coach — Boxe Anglaise",
    bio: "Champion de France amateur, 15 ans d'expérience en coaching. Formé à Cuba et aux États-Unis. Spécialiste du développement technique et de la préparation aux compétitions.",
    achievements: ["Champion de France Amateur", "Coach certifié FFB", "200+ combattants formés"],
    image: "/images/coach-1.jpg",
  },
  {
    name: "Somchai Rattana",
    role: "Coach Senior — Muay Thaï",
    bio: "Ancien combattant professionnel en Thaïlande avec 80 combats au compteur. Enseigne la Muay Thaï traditionnelle avec un accent sur la technique et le respect des traditions.",
    achievements: ["80 combats pro", "Formé au Sitsongpeenong", "Kru certifié"],
    image: "/images/coach-2.jpg",
  },
  {
    name: "Lucas Ferreira",
    role: "Coach — MMA & Grappling",
    bio: "Ceinture noire de Jiu-Jitsu Brésilien, compétiteur international en MMA. Approche moderne du combat mixte alliant technique au sol et striking.",
    achievements: ["Ceinture noire BJJ", "Record MMA 12-2", "BEES MMA"],
    image: "/images/coach-3.jpg",
  },
  {
    name: "Sarah Dubois",
    role: "Coach — Préparation Physique",
    bio: "Préparatrice physique diplômée, spécialisée dans la performance des sports de combat. Programmes sur mesure pour chaque athlète, du débutant au professionnel.",
    achievements: ["Master STAPS", "Certifiée CrossFit L2", "Coach de champions"],
    image: "/images/coach-4.jpg",
  },
] as const;

export const TARIFS = [
  {
    name: "Essai",
    price: "GRATUIT",
    period: "",
    description: "Découvrez le club sans engagement",
    features: [
      "1 séance d'essai offerte",
      "Accès à toutes les disciplines",
      "Équipement prêté",
      "Évaluation personnalisée",
    ],
    cta: "Réserver ma séance",
    popular: false,
    highlight: false,
  },
  {
    name: "Mensuel",
    price: "59€",
    period: "/mois",
    description: "Flexibilité sans engagement",
    features: [
      "Accès illimité aux cours",
      "1 discipline au choix",
      "Vestiaires & douches",
      "Résiliation à tout moment",
    ],
    cta: "S'inscrire maintenant",
    popular: false,
    highlight: false,
  },
  {
    name: "Illimité",
    price: "79€",
    period: "/mois",
    description: "L'accès complet au club",
    features: [
      "Accès illimité à TOUTES les disciplines",
      "Open gym 7j/7",
      "Sparring sessions",
      "Accès espace musculation",
      "1 gant offert",
    ],
    cta: "Rejoindre le ring",
    popular: true,
    highlight: true,
  },
  {
    name: "Annuel",
    price: "690€",
    period: "/an",
    description: "Le meilleur rapport qualité-prix",
    features: [
      "Tout le forfait Illimité",
      "2 mois offerts",
      "Kit équipement inclus",
      "Accès prioritaire événements",
      "Programme personnalisé",
    ],
    cta: "Économiser maintenant",
    popular: false,
    highlight: false,
  },
] as const;

export const PLANNING = [
  { jour: "Lundi", cours: [
    { heure: "06:30", discipline: "Prépa Physique", coach: "Sarah", niveau: "Tous niveaux" },
    { heure: "12:15", discipline: "Boxe Anglaise", coach: "Karim", niveau: "Tous niveaux" },
    { heure: "18:00", discipline: "Boxe Thaï", coach: "Somchai", niveau: "Débutant" },
    { heure: "19:30", discipline: "Boxe Anglaise", coach: "Karim", niveau: "Avancé" },
    { heure: "20:30", discipline: "MMA", coach: "Lucas", niveau: "Tous niveaux" },
  ]},
  { jour: "Mardi", cours: [
    { heure: "06:30", discipline: "Cardio Boxing", coach: "Sarah", niveau: "Tous niveaux" },
    { heure: "12:15", discipline: "MMA", coach: "Lucas", niveau: "Tous niveaux" },
    { heure: "18:00", discipline: "Boxe Anglaise", coach: "Karim", niveau: "Débutant" },
    { heure: "19:30", discipline: "Boxe Thaï", coach: "Somchai", niveau: "Avancé" },
    { heure: "20:30", discipline: "Sparring", coach: "Karim", niveau: "Compétiteur" },
  ]},
  { jour: "Mercredi", cours: [
    { heure: "06:30", discipline: "Prépa Physique", coach: "Sarah", niveau: "Tous niveaux" },
    { heure: "14:00", discipline: "Boxe Enfants", coach: "Karim", niveau: "6-12 ans" },
    { heure: "15:30", discipline: "Boxe Ados", coach: "Karim", niveau: "13-17 ans" },
    { heure: "18:00", discipline: "MMA", coach: "Lucas", niveau: "Débutant" },
    { heure: "19:30", discipline: "Boxe Thaï", coach: "Somchai", niveau: "Tous niveaux" },
  ]},
  { jour: "Jeudi", cours: [
    { heure: "06:30", discipline: "Cardio Boxing", coach: "Sarah", niveau: "Tous niveaux" },
    { heure: "12:15", discipline: "Boxe Anglaise", coach: "Karim", niveau: "Tous niveaux" },
    { heure: "18:00", discipline: "Boxe Anglaise", coach: "Karim", niveau: "Intermédiaire" },
    { heure: "19:30", discipline: "MMA", coach: "Lucas", niveau: "Avancé" },
    { heure: "20:30", discipline: "Boxe Thaï", coach: "Somchai", niveau: "Sparring" },
  ]},
  { jour: "Vendredi", cours: [
    { heure: "06:30", discipline: "Prépa Physique", coach: "Sarah", niveau: "Tous niveaux" },
    { heure: "12:15", discipline: "Boxe Thaï", coach: "Somchai", niveau: "Tous niveaux" },
    { heure: "18:00", discipline: "Open Sparring", coach: "Tous", niveau: "Confirmé" },
    { heure: "19:30", discipline: "Boxe Anglaise", coach: "Karim", niveau: "Tous niveaux" },
  ]},
  { jour: "Samedi", cours: [
    { heure: "09:00", discipline: "Boxe Enfants", coach: "Karim", niveau: "6-12 ans" },
    { heure: "10:30", discipline: "Boxe Thaï", coach: "Somchai", niveau: "Tous niveaux" },
    { heure: "12:00", discipline: "MMA", coach: "Lucas", niveau: "Tous niveaux" },
    { heure: "14:00", discipline: "Prépa Physique", coach: "Sarah", niveau: "Tous niveaux" },
  ]},
  { jour: "Dimanche", cours: [
    { heure: "09:00", discipline: "Open Gym", coach: "—", niveau: "Libre" },
    { heure: "10:30", discipline: "Cardio Boxing", coach: "Sarah", niveau: "Tous niveaux" },
  ]},
] as const;

export const TESTIMONIALS = [
  {
    name: "Mathieu R.",
    role: "Membre depuis 2 ans",
    text: "Iron Forge a transformé ma vie. J'ai perdu 20 kg, gagné en confiance et trouvé une vraie famille. Les coachs sont exceptionnels, l'ambiance est incroyable. Le meilleur club de Lyon, sans hésitation.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Clara M.",
    role: "Compétitrice Muay Thaï",
    text: "En 18 mois chez Iron Forge, je suis passée de débutante à championne régionale. Somchai est un coach extraordinaire, sa pédagogie et son exigence m'ont poussée au-delà de mes limites.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Thomas D.",
    role: "Pratiquant MMA",
    text: "J'ai testé beaucoup de salles à Lyon. Iron Forge est au-dessus de tout. L'équipement est professionnel, les coachs sont passionnés, et l'esprit du club est unique. On s'entraîne dur mais dans le respect.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Sophie L.",
    role: "Membre loisir",
    text: "Je cherchais un sport intense et motivant. Les cours de cardio boxing de Sarah sont addictifs ! L'ambiance du club m'a surprise — accueillante et bienveillante. Je recommande à 100%.",
    rating: 5,
    avatar: "/images/avatar-4.jpg",
  },
  {
    name: "Alexandre B.",
    role: "Papa de Léo, 10 ans",
    text: "Mon fils fait de la boxe anglaise chez Iron Forge depuis un an. Il a gagné en discipline, en respect et en confiance. Karim est incroyable avec les enfants. Merci pour tout.",
    rating: 5,
    avatar: "/images/avatar-5.jpg",
  },
] as const;
