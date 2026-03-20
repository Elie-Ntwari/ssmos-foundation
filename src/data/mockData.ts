// Mock data for SSMos website

export interface Article {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  category: 'sst' | 'training' | 'regulation' | 'innovation';
  date: string;
  image: string;
  author: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  date: string;
  image: string;
  author: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  bio: string;
  bioEn: string;
  expertise: string[];
  expertiseEn: string[];
  image: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  titleEn: string;
  shortDesc: string;
  shortDescEn: string;
  fullDesc: string;
  fullDescEn: string;
  features: string[];
  featuresEn: string[];
}

export const stats = {
  companies: 3,
  trainings: 15,
  experts: 25,
  years: 8,
};

export const services: Service[] = [
  {
    id: 'cabinet',
    icon: 'Briefcase',
    title: 'Cabinet SSMos',
    titleEn: 'SSMos Cabinet',
    shortDesc: 'Le Cabinet SSMos offre une gamme complète de services de Sécurité et Santé du travail. Nos experts accompagnent les entreprises, organisations publiques et privées, ainsi que des communautés dans la mise en conformité réglementaire en matière de la sécurité et santé au travail.',
    shortDescEn: 'The SSMos Cabinet offers a complete range of Occupational Safety and Health services. Our experts support companies, public and private organizations, as well as communities in regulatory compliance regarding occupational safety and health.',
    fullDesc: 'Le Cabinet SSMos offre une gamme complète de services de Sécurité et Santé du travail. Nos experts accompagnent les entreprises, organisations publiques et privées, ainsi que des communautés dans la mise en conformité réglementaire en matière de la sécurité et santé au travail.',
    fullDescEn: 'The SSMos Cabinet offers a complete range of Occupational Safety and Health services. Our experts support companies, public and private organizations, as well as communities in regulatory compliance regarding occupational safety and health.',
    features: [
      'L\'assistance aux services de la médecine du travail',
      'L\'assistance aux services de la sécurité au travail',
      'Accompagnement à la certification ISO 45001',
      'L\'élaboration et mise en place des politique SST'
    ],
    featuresEn: [
      'Assistance to occupational medicine services',
      'Assistance to occupational safety services',
      'ISO 45001 certification support',
      'Development and implementation of OHS policies'
    ]
  },
  {
    id: 'training',
    icon: 'GraduationCap',
    title: 'Formation et renforcement des capacités',
    titleEn: 'Training and Capacity Building',
    shortDesc: 'Programmes des formations certifiantes, diplômantes et continues en matière de la sécurité et santé au travail pour l\'acquisition des compétences et le renforcement des capacités pour vos personnels.',
    shortDescEn: 'Certified, diploma and continuous training programs in occupational safety and health for skills acquisition and capacity building for your staff.',
    fullDesc: 'Programmes des formations certifiantes, diplômantes et continues en matière de la sécurité et santé au travail pour l\'acquisition des compétences et le renforcement des capacités pour vos personnels.',
    fullDescEn: 'Certified, diploma and continuous training programs in occupational safety and health for skills acquisition and capacity building for your staff.',
    features: [
      'Formations des travailleurs',
      'Formations des responsables d\'entreprise',
      'Formations des membres de comités SST',
      'Formations des formateurs',
      'E-learning disponible'
    ],
    featuresEn: [
      'Worker training',
      'Company manager training',
      'OHS committee member training',
      'Train the trainer programs',
      'E-learning available'
    ]
  },
  {
    id: 'research',
    icon: 'Search',
    title: 'Études et recherche',
    titleEn: 'Studies and Research',
    shortDesc: 'Un service technique chargé de collecter, analyser et produire des données scientifiques et opérationnelles sur les conditions de travail, les accidents du travail et les maladies professionnelles ainsi que le bien-être au travail.',
    shortDescEn: 'A technical service responsible for collecting, analyzing and producing scientific and operational data on working conditions, workplace accidents and occupational diseases as well as well-being at work.',
    fullDesc: 'Un service technique chargé de collecter, analyser et produire des données scientifiques et opérationnelles sur les conditions de travail, les accidents du travail et les maladies professionnelles ainsi que le bien-être au travail, afin d\'orienter les actions de prévention et les politiques de sécurité et santé au travail.',
    fullDescEn: 'A technical service responsible for collecting, analyzing and producing scientific and operational data on working conditions, workplace accidents and occupational diseases as well as well-being at work, in order to guide prevention actions and occupational safety and health policies.',
    features: [
      'Observatoire des données statiques en SST (collecte et analyses des données en SST)',
      'Études des risques professionnels : AT/MP',
      'Recherche appliquée en prévention des risques professionnels',
      'Production de rapports, documentations et diffusion'
    ],
    featuresEn: [
      'OHS statistical data observatory (collection and analysis of OHS data)',
      'Occupational risk studies: workplace accidents/occupational diseases',
      'Applied research in occupational risk prevention',
      'Production of reports, documentation and dissemination'
    ]
  },
  {
    id: 'audit',
    icon: 'ClipboardCheck',
    title: 'Audits et diagnostic',
    titleEn: 'Audits and Diagnostics',
    shortDesc: 'Un service chargé d\'évaluer de manière systématique et objective le niveau de conformité, de performance et de maîtrise des risques professionnels au sein des entreprises.',
    shortDescEn: 'A service responsible for systematically and objectively assessing the level of compliance, performance and control of occupational risks within companies.',
    fullDesc: 'Un service chargé d\'évaluer de manière systématique et objective le niveau de conformité, de performance et de maîtrise des risques professionnels au sein des entreprises, afin d\'identifier les écarts, proposer des actions correctives et améliorer durablement les conditions de travail.',
    fullDescEn: 'A service responsible for systematically and objectively assessing the level of compliance, performance and control of occupational risks within companies, in order to identify gaps, propose corrective actions and sustainably improve working conditions.',
    features: [
      'Audits SST : Audit de conformité réglementaire, A. organisationnel, A. des postes de travail, A. des équipements et EPI',
      'Diagnostics des risques professionnels',
      'Évaluation des systèmes SST',
      'Recommandations et mesures correctives',
      'Veille réglementaire'
    ],
    featuresEn: [
      'OHS Audits: Regulatory compliance audit, Organizational audit, Workstation audit, Equipment and PPE audit',
      'Occupational risk diagnostics',
      'OHS system evaluation',
      'Recommendations and corrective measures',
      'Regulatory monitoring'
    ]
  },
  {
    id: 'conseil',
    icon: 'MessageSquare',
    title: 'Conseil et promotion en SST',
    titleEn: 'OHS Advice and Promotion',
    shortDesc: 'Une unité stratégique chargée d\'accompagner, informer, sensibiliser et mobiliser les acteurs du monde du travail afin de renforcer la culture de prévention.',
    shortDescEn: 'A strategic unit responsible for supporting, informing, raising awareness and mobilizing stakeholders in the world of work to strengthen the prevention culture.',
    fullDesc: 'Une unité stratégique chargée d\'accompagner, informer, sensibiliser et mobiliser les acteurs du monde du travail afin de renforcer la culture de prévention, améliorer les comportements sécuritaires, sanitaires et promouvoir des environnements de travail sains et sûrs.',
    fullDescEn: 'A strategic unit responsible for supporting, informing, raising awareness and mobilizing stakeholders in the world of work to strengthen the prevention culture, improve safety and health behaviors and promote healthy and safe work environments.',
    features: [
      'Activités des conseil techniques SST : Ateliers et conférences',
      'Activités de communication : Campagnes, journées des sensibilisations',
      'Activités promotionnelles'
    ],
    featuresEn: [
      'OHS technical advice activities: Workshops and conferences',
      'Communication activities: Campaigns, awareness days',
      'Promotional activities'
    ]
  },
  {
    id: 'digital',
    icon: 'Cpu',
    title: 'Innovation et digitalisation',
    titleEn: 'Innovation and Digitalization',
    shortDesc: 'Une unité stratégique chargée de développer, intégrer et utiliser les outils numériques et solutions innovantes afin d\'améliorer la prévention des risques professionnels.',
    shortDescEn: 'A strategic unit responsible for developing, integrating and using digital tools and innovative solutions to improve occupational risk prevention.',
    fullDesc: 'Une unité stratégique chargée de développer, intégrer et utiliser les outils numériques et solutions innovantes afin d\'améliorer la prévention des risques professionnels, renforcer la surveillance des conditions de travail et moderniser les pratiques de gestion SST.',
    fullDescEn: 'A strategic unit responsible for developing, integrating and using digital tools and innovative solutions to improve occupational risk prevention, strengthen monitoring of working conditions and modernize OHS management practices.',
    features: [
      'Applications mobiles SST',
      'Tableaux de bord temps réel',
      'Digitalisation des processus',
      'Intelligence artificielle pour la SST'
    ],
    featuresEn: [
      'OHS mobile applications',
      'Real-time dashboards',
      'Process digitalization',
      'Artificial intelligence for OHS'
    ]
  }
];

export const interventionAreas = [
  {
    icon: 'Factory',
    title: 'Industrie & Manufacture',
    titleEn: 'Industry & Manufacturing',
    description: 'Accompagnement SST pour les usines et sites de production',
    descriptionEn: 'OHS support for factories and production sites'
  },
  {
    icon: 'Building2',
    title: 'BTP & Construction',
    titleEn: 'Construction & Building',
    description: 'Prévention des risques sur les chantiers de construction',
    descriptionEn: 'Risk prevention on construction sites'
  },
  {
    icon: 'Truck',
    title: 'Transport & Logistique',
    titleEn: 'Transport & Logistics',
    description: 'Sécurité dans le secteur du transport et de la logistique',
    descriptionEn: 'Safety in transport and logistics sector'
  },
  {
    icon: 'Hospital',
    title: 'Santé & Services',
    titleEn: 'Health & Services',
    description: 'Protection du personnel soignant et des travailleurs de services',
    descriptionEn: 'Protection of healthcare and service workers'
  },
  {
    icon: 'Pickaxe',
    title: 'Mines & Extraction',
    titleEn: 'Mining & Extraction',
    description: 'Expertise SST pour le secteur minier congolais',
    descriptionEn: 'OHS expertise for the Congolese mining sector'
  },
  {
    icon: 'Leaf',
    title: 'Agriculture & Environnement',
    titleEn: 'Agriculture & Environment',
    description: 'Solutions SST adaptées au secteur agricole',
    descriptionEn: 'OHS solutions adapted to the agricultural sector'
  }
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Nouvelle réglementation SST en RDC : ce qui change en 2024',
    titleEn: 'New OHS regulation in DRC: what changes in 2024',
    excerpt: 'Le gouvernement congolais vient d\'adopter de nouvelles mesures pour renforcer la protection des travailleurs.',
    excerptEn: 'The Congolese government has just adopted new measures to strengthen worker protection.',
    content: 'Le gouvernement de la République Démocratique du Congo a récemment promulgué une série de décrets visant à moderniser le cadre réglementaire de la santé et sécurité au travail. Ces nouvelles dispositions, qui entreront en vigueur progressivement, concernent notamment l\'obligation de désigner un responsable SST dans toutes les entreprises de plus de 50 salariés, le renforcement des contrôles par l\'Inspection du Travail, et la mise en place de comités d\'hygiène et de sécurité obligatoires.',
    contentEn: 'The government of the Democratic Republic of Congo has recently enacted a series of decrees aimed at modernizing the regulatory framework for occupational health and safety. These new provisions, which will come into force gradually, concern in particular the obligation to designate an OHS manager in all companies with more than 50 employees, the strengthening of controls by the Labor Inspection, and the establishment of mandatory health and safety committees.',
    category: 'regulation',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    author: 'Dr. Jean-Pierre Mukendi'
  },
  {
    id: '2',
    title: 'Formation des premiers secouristes : session réussie à Lubumbashi',
    titleEn: 'First aid training: successful session in Lubumbashi',
    excerpt: 'Plus de 40 professionnels ont été formés aux gestes de premiers secours lors de notre dernière session.',
    excerptEn: 'More than 40 professionals were trained in first aid during our latest session.',
    content: 'SSMos a organisé avec succès une session de formation intensive sur les premiers secours en entreprise à Lubumbashi. Cette formation de trois jours a permis à 42 participants issus de différents secteurs industriels d\'acquérir les compétences essentielles pour intervenir efficacement en cas d\'urgence sur leur lieu de travail.',
    contentEn: 'SSMos successfully organized an intensive first aid training session in Lubumbashi. This three-day training enabled 42 participants from different industrial sectors to acquire essential skills to intervene effectively in case of emergency at their workplace.',
    category: 'training',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
    author: 'Marie Kabongo'
  },
  {
    id: '3',
    title: 'Prévention des risques chimiques dans le secteur minier',
    titleEn: 'Chemical risk prevention in the mining sector',
    excerpt: 'Les bonnes pratiques pour protéger les travailleurs exposés aux substances dangereuses.',
    excerptEn: 'Best practices to protect workers exposed to hazardous substances.',
    content: 'Le secteur minier congolais emploie des milliers de travailleurs potentiellement exposés à des risques chimiques. SSMos partage son expertise sur les mesures de prévention essentielles : identification des substances dangereuses, équipements de protection individuelle adaptés, formation du personnel, et surveillance médicale renforcée.',
    contentEn: 'The Congolese mining sector employs thousands of workers potentially exposed to chemical risks. SSMos shares its expertise on essential prevention measures: identification of hazardous substances, appropriate personal protective equipment, staff training, and enhanced medical surveillance.',
    category: 'sst',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    author: 'Ing. Patrick Mwamba'
  },
  {
    id: '4',
    title: 'Lancement de notre application mobile de reporting SST',
    titleEn: 'Launch of our OHS reporting mobile application',
    excerpt: 'SSMos innove avec une application permettant de signaler les incidents en temps réel.',
    excerptEn: 'SSMos innovates with an application allowing real-time incident reporting.',
    content: 'SSMos lance officiellement son application mobile dédiée au reporting des incidents et quasi-incidents en matière de santé et sécurité au travail. Cette solution innovante permet aux employés de signaler rapidement tout événement, avec photos et géolocalisation, facilitant ainsi la réactivité des équipes SST.',
    contentEn: 'SSMos officially launches its mobile application dedicated to reporting incidents and near-misses in occupational health and safety. This innovative solution allows employees to quickly report any event, with photos and geolocation, thus facilitating the responsiveness of OHS teams.',
    category: 'innovation',
    date: '2023-12-20',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    author: 'Tech Team SSMos'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Les 5 piliers d\'une culture sécurité efficace',
    titleEn: 'The 5 pillars of an effective safety culture',
    excerpt: 'Découvrez les fondements essentiels pour développer une véritable culture de prévention dans votre entreprise.',
    excerptEn: 'Discover the essential foundations for developing a true prevention culture in your company.',
    content: 'Une culture sécurité efficace repose sur cinq piliers fondamentaux : l\'engagement visible de la direction, la participation active des travailleurs, la formation continue, la communication transparente, et l\'amélioration permanente. Dans cet article, nous explorons chacun de ces piliers et vous donnons des conseils pratiques pour les mettre en œuvre.',
    contentEn: 'An effective safety culture rests on five fundamental pillars: visible management commitment, active worker participation, continuous training, transparent communication, and continuous improvement. In this article, we explore each of these pillars and give you practical tips for implementing them.',
    date: '2024-01-12',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    author: 'Dr. Jean-Pierre Mukendi',
    readTime: '8 min'
  },
  {
    id: '2',
    title: 'Ergonomie au bureau : prévenir les TMS',
    titleEn: 'Office ergonomics: preventing MSDs',
    excerpt: 'Les troubles musculo-squelettiques touchent de nombreux employés de bureau. Voici comment les prévenir.',
    excerptEn: 'Musculoskeletal disorders affect many office workers. Here\'s how to prevent them.',
    content: 'Les troubles musculo-squelettiques (TMS) représentent une part importante des maladies professionnelles. Pour les employés de bureau, une bonne ergonomie du poste de travail est essentielle. Cet article détaille les bonnes postures, l\'aménagement optimal du bureau, et les exercices d\'étirement recommandés.',
    contentEn: 'Musculoskeletal disorders (MSDs) represent a significant portion of occupational diseases. For office workers, good workstation ergonomics is essential. This article details good postures, optimal desk setup, and recommended stretching exercises.',
    date: '2024-01-08',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    author: 'Marie Kabongo',
    readTime: '6 min'
  },
  {
    id: '3',
    title: 'Gestion des équipements de protection individuelle',
    titleEn: 'Personal protective equipment management',
    excerpt: 'Comment choisir, distribuer et maintenir efficacement les EPI dans votre entreprise.',
    excerptEn: 'How to effectively choose, distribute and maintain PPE in your company.',
    content: 'Les équipements de protection individuelle (EPI) constituent la dernière barrière de protection des travailleurs. Leur gestion efficace passe par une sélection adaptée aux risques identifiés, une distribution organisée, un entretien régulier, et une sensibilisation des utilisateurs. Découvrez nos recommandations pour optimiser la gestion des EPI.',
    contentEn: 'Personal protective equipment (PPE) is the last barrier of worker protection. Effective management involves selection adapted to identified risks, organized distribution, regular maintenance, and user awareness. Discover our recommendations for optimizing PPE management.',
    date: '2024-01-03',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    author: 'Ing. Patrick Mwamba',
    readTime: '7 min'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Jean-Pierre Mukendi',
    role: 'Directeur Général',
    roleEn: 'General Director',
    bio: 'Expert en santé au travail avec plus de 15 ans d\'expérience dans le secteur industriel congolais et international.',
    bioEn: 'Occupational health expert with over 15 years of experience in the Congolese and international industrial sector.',
    expertise: ['Management SST', 'Médecine du travail', 'Stratégie d\'entreprise'],
    expertiseEn: ['OHS Management', 'Occupational medicine', 'Business strategy'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    id: '2',
    name: 'Marie Kabongo',
    role: 'Directrice des Formations',
    roleEn: 'Training Director',
    bio: 'Spécialiste en ingénierie pédagogique et développement des compétences SST.',
    bioEn: 'Specialist in educational engineering and OHS skills development.',
    expertise: ['Ingénierie pédagogique', 'Formation des adultes', 'Certification SST'],
    expertiseEn: ['Educational engineering', 'Adult training', 'OHS certification'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400'
  },
  {
    id: '3',
    name: 'Ing. Patrick Mwamba',
    role: 'Responsable Technique',
    roleEn: 'Technical Manager',
    bio: 'Ingénieur en sécurité industrielle, spécialisé dans les audits et l\'évaluation des risques.',
    bioEn: 'Industrial safety engineer, specialized in audits and risk assessment.',
    expertise: ['Audits techniques', 'Évaluation des risques', 'Normes ISO'],
    expertiseEn: ['Technical audits', 'Risk assessment', 'ISO standards'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  },
  {
    id: '4',
    name: 'Clarisse Mutombo',
    role: 'Conseillère Juridique',
    roleEn: 'Legal Advisor',
    bio: 'Avocate spécialisée en droit du travail et réglementation SST.',
    bioEn: 'Lawyer specialized in labor law and OHS regulations.',
    expertise: ['Droit du travail', 'Réglementation SST', 'Contentieux'],
    expertiseEn: ['Labor law', 'OHS regulations', 'Litigation'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
  },
  {
    id: '5',
    name: 'David Kasongo',
    role: 'Responsable Innovation',
    roleEn: 'Innovation Manager',
    bio: 'Expert en transformation digitale et solutions technologiques pour la SST.',
    bioEn: 'Expert in digital transformation and technological solutions for OHS.',
    expertise: ['Transformation digitale', 'IoT industriel', 'Data analytics'],
    expertiseEn: ['Digital transformation', 'Industrial IoT', 'Data analytics'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  },
  {
    id: '6',
    name: 'Esther Lumumba',
    role: 'Coordinatrice Projets',
    roleEn: 'Project Coordinator',
    bio: 'Gestionnaire de projets expérimentée avec expertise en déploiement de programmes SST.',
    bioEn: 'Experienced project manager with expertise in OHS program deployment.',
    expertise: ['Gestion de projets', 'Déploiement SST', 'Relations clients'],
    expertiseEn: ['Project management', 'OHS deployment', 'Client relations'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  }
];

export const contactInfo = {
  address: 'Avenue de la Paix, N°123, Kinshasa, RDC',
  phone: '+243 812 345 678',
  email: 'contact@ssmos.org',
  hours: 'Lun - Ven: 8h00 - 17h00'
};
