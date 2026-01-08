// Mock data for SSMos website

export interface Article {
  id: string;
  title: string;
  titleEn: string;
  titleLn: string;
  titleSw: string;
  excerpt: string;
  excerptEn: string;
  excerptLn: string;
  excerptSw: string;
  content: string;
  contentEn: string;
  contentLn: string;
  contentSw: string;
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
  companies: 150,
  trainings: 500,
  experts: 25,
  years: 8,
};

export const services: Service[] = [
  {
    id: 'cabinet',
    icon: 'Briefcase',
    title: 'Cabinet SSMos',
    titleEn: 'SSMos Cabinet',
    shortDesc: 'Consulting et expertise en santé et sécurité au travail pour accompagner votre organisation vers la conformité et l\'excellence.',
    shortDescEn: 'Consulting and expertise in occupational health and safety to support your organization towards compliance and excellence.',
    fullDesc: 'Le Cabinet SSMos offre une gamme complète de services de conseil en santé et sécurité au travail. Nos experts accompagnent les entreprises dans la mise en conformité réglementaire, l\'élaboration de politiques SST, et le développement de systèmes de management intégrés.',
    fullDescEn: 'SSMos Cabinet offers a complete range of occupational health and safety consulting services. Our experts support companies in regulatory compliance, OHS policy development, and integrated management systems.',
    features: [
      'Diagnostic SST complet',
      'Accompagnement à la certification',
      'Mise en place de systèmes de management',
      'Veille réglementaire'
    ],
    featuresEn: [
      'Complete OHS diagnosis',
      'Certification support',
      'Management systems implementation',
      'Regulatory monitoring'
    ]
  },
  {
    id: 'training',
    icon: 'GraduationCap',
    title: 'Formations & Renforcement',
    titleEn: 'Training & Capacity Building',
    shortDesc: 'Programmes de formation certifiants et renforcement des capacités pour vos équipes en matière de prévention.',
    shortDescEn: 'Certified training programs and capacity building for your teams in prevention matters.',
    fullDesc: 'Notre département formation propose des programmes adaptés à tous les niveaux, des opérateurs aux dirigeants. Nous délivrons des formations certifiantes reconnues et assurons le suivi post-formation.',
    fullDescEn: 'Our training department offers programs adapted to all levels, from operators to executives. We deliver recognized certified training and ensure post-training follow-up.',
    features: [
      'Formations certifiantes SST',
      'Séminaires de sensibilisation',
      'Formation des formateurs',
      'E-learning disponible'
    ],
    featuresEn: [
      'OHS certified training',
      'Awareness seminars',
      'Train the trainer programs',
      'E-learning available'
    ]
  },
  {
    id: 'audit',
    icon: 'ClipboardCheck',
    title: 'Études & Audits',
    titleEn: 'Studies & Audits',
    shortDesc: 'Audits de conformité, études de risques et accompagnements personnalisés pour identifier et maîtriser vos risques.',
    shortDescEn: 'Compliance audits, risk studies and personalized support to identify and control your risks.',
    fullDesc: 'Nous réalisons des audits approfondis et des études de risques selon les normes internationales. Nos rapports détaillés incluent des recommandations concrètes et un plan d\'action priorisé.',
    fullDescEn: 'We conduct in-depth audits and risk studies according to international standards. Our detailed reports include concrete recommendations and a prioritized action plan.',
    features: [
      'Audits de conformité légale',
      'Évaluation des risques professionnels',
      'Audits de certification ISO',
      'Plans d\'action correctifs'
    ],
    featuresEn: [
      'Legal compliance audits',
      'Occupational risk assessment',
      'ISO certification audits',
      'Corrective action plans'
    ]
  },
  {
    id: 'legal',
    icon: 'Scale',
    title: 'Conseil Juridique',
    titleEn: 'Legal Advice',
    shortDesc: 'Conseil stratégique et juridique en matière de réglementation SST nationale et internationale.',
    shortDescEn: 'Strategic and legal advice on national and international OHS regulations.',
    fullDesc: 'Notre équipe juridique spécialisée vous accompagne dans la compréhension et l\'application des textes réglementaires en matière de SST. Nous assurons une veille permanente sur l\'évolution du cadre légal.',
    fullDescEn: 'Our specialized legal team supports you in understanding and applying OHS regulatory texts. We ensure permanent monitoring of legal framework developments.',
    features: [
      'Veille juridique SST',
      'Conseil en conformité',
      'Accompagnement contentieux',
      'Formation réglementaire'
    ],
    featuresEn: [
      'OHS legal monitoring',
      'Compliance advice',
      'Litigation support',
      'Regulatory training'
    ]
  },
  {
    id: 'digital',
    icon: 'Cpu',
    title: 'Innovation & Digital',
    titleEn: 'Innovation & Digital',
    shortDesc: 'Solutions digitales innovantes pour la gestion et le suivi de votre système de management SST.',
    shortDescEn: 'Innovative digital solutions for managing and monitoring your OHS management system.',
    fullDesc: 'SSMos développe des outils digitaux sur mesure pour moderniser la gestion SST. Applications mobiles, tableaux de bord, systèmes de reporting automatisés - nous vous accompagnons dans la transformation digitale de votre prévention.',
    fullDescEn: 'SSMos develops custom digital tools to modernize OHS management. Mobile apps, dashboards, automated reporting systems - we support you in the digital transformation of your prevention.',
    features: [
      'Applications mobiles SST',
      'Tableaux de bord temps réel',
      'Digitalisation des processus',
      'Intelligence artificielle'
    ],
    featuresEn: [
      'OHS mobile applications',
      'Real-time dashboards',
      'Process digitalization',
      'Artificial intelligence'
    ]
  }
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Nouvelle réglementation SST en RDC : ce qui change en 2024',
    titleEn: 'New OHS regulation in DRC: what changes in 2024',
    titleLn: 'Molakisi ya sika ya SST na RDC: nini ebongwani na 2024',
    titleSw: 'Kanuni mpya ya OHS nchini DRC: mabadiliko gani mwaka 2024',
    excerpt: 'Le gouvernement congolais vient d\'adopter de nouvelles mesures pour renforcer la protection des travailleurs.',
    excerptEn: 'The Congolese government has just adopted new measures to strengthen worker protection.',
    excerptLn: 'Gouvernement ya Kongo epesi kobongisa bikelo mpo na kolamina bokabolami ya basali.',
    excerptSw: 'Serikali ya Kongo imepitisha hatua mpya za kuimarisha ulinzi wa wafanyakazi.',
    content: 'Le gouvernement de la République Démocratique du Congo a récemment promulgué une série de décrets visant à moderniser le cadre réglementaire de la santé et sécurité au travail. Ces nouvelles dispositions, qui entreront en vigueur progressivement, concernent notamment l\'obligation de désigner un responsable SST dans toutes les entreprises de plus de 50 salariés, le renforcement des contrôles par l\'Inspection du Travail, et la mise en place de comités d\'hygiène et de sécurité obligatoires.',
    contentEn: 'The government of the Democratic Republic of Congo has recently enacted a series of decrees aimed at modernizing the regulatory framework for occupational health and safety. These new provisions, which will come into force gradually, concern in particular the obligation to designate an OHS manager in all companies with more than 50 employees, the strengthening of controls by the Labor Inspection, and the establishment of mandatory health and safety committees.',
    contentLn: 'Gouvernement ya République Démocratique du Congo epesi kobongisa bikelo ya sika ya santé na sécurité au travail. Bikelo oyo ekozala na bokasi ya kala, ezali kolakisa mpo na koyeba moto ya kosunga SST na entreprises nionso oyo ezali na basali oyo eleki 50, kobongisa bokabolami ya Inspection du Travail, na kotiya comité ya hygiène na sécurité oyo esengeli.',
    contentSw: 'Serikali ya Jamhuri ya Kidemokrasia ya Kongo hivi karibuni imepitisha msururu wa amri zinazolenga kuboresha mfumo wa kanuni wa afya na usalama kazini. Vigezo hivi vipya, ambavyo vitaanza kutumika hatua kwa hatua, vinahusu hasa wajibu wa kuteua meneja wa OHS katika makampuni yote yenye zaidi ya wafanyakazi 50, kuimarisha udhibiti na Ukaguzi wa Kazi, na kuanzisha kamati za lazima za usafi na usalama.',
    category: 'regulation',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    author: 'Dr. Jean-Pierre Mukendi'
  },
  {
    id: '2',
    title: 'Formation des premiers secouristes : session réussie à Lubumbashi',
    titleEn: 'First aid training: successful session in Lubumbashi',
    titleLn: 'Formation des premiers secouristes : session réussie à Lubumbashi',
    titleSw: 'Mafunzo ya msaada wa kwanza: kikao cha mafanikio huko Lubumbashi',
    excerpt: 'Plus de 40 professionnels ont été formés aux gestes de premiers secours lors de notre dernière session.',
    excerptEn: 'More than 40 professionals were trained in first aid during our latest session.',
    excerptLn: 'Plus de 40 professionnels ont été formés aux gestes de premiers secours lors de notre dernière session.',
    excerptSw: 'Zaidi ya wataalamu 40 walifunzwa msaada wa kwanza katika kikao chetu cha hivi karibuni.',
    content: 'SSMos a organisé avec succès une session de formation intensive sur les premiers secours en entreprise à Lubumbashi. Cette formation de trois jours a permis à 42 participants issus de différents secteurs industriels d\'acquérir les compétences essentielles pour intervenir efficacement en cas d\'urgence sur leur lieu de travail.',
    contentEn: 'SSMos successfully organized an intensive first aid training session in Lubumbashi. This three-day training enabled 42 participants from different industrial sectors to acquire essential skills to intervene effectively in case of emergency at their workplace.',
    contentLn: 'SSMos a organisé avec succès une session de formation intensive sur les premiers secours en entreprise à Lubumbashi. Cette formation de trois jours a permis à 42 participants issus de différents secteurs industriels d\'acquérir les compétences essentielles pour intervenir efficacement en cas d\'urgence sur leur lieu de travail.',
    contentSw: 'SSMos ilifanya kikao cha mafunzo ya msaada wa kwanza kwa mafanikio huko Lubumbashi. Mafunzo haya ya siku tatu yaliwaruhusu washiriki 42 kutoka sekta tofauti za viwanda kupata ujuzi muhimu wa kuingilia kati kwa ufanisi katika kesi ya dharura mahali pa kazi.',
    category: 'training',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
    author: 'Marie Kabongo'
  },
  {
    id: '3',
    title: 'Prévention des risques chimiques dans le secteur minier',
    titleEn: 'Chemical risk prevention in the mining sector',
    titleLn: 'Prévention des risques chimiques dans le secteur minier',
    titleSw: 'Kuzuia hatari za kemikali katika sekta ya madini',
    excerpt: 'Les bonnes pratiques pour protéger les travailleurs exposés aux substances dangereuses.',
    excerptEn: 'Best practices to protect workers exposed to hazardous substances.',
    excerptLn: 'Les bonnes pratiques pour protéger les travailleurs exposés aux substances dangereuses.',
    excerptSw: 'Mbinu bora za kulinda wafanyakazi walioathiriwa na vitu hatari.',
    content: 'Le secteur minier congolais emploie des milliers de travailleurs potentiellement exposés à des risques chimiques. SSMos partage son expertise sur les mesures de prévention essentielles : identification des substances dangereuses, équipements de protection individuelle adaptés, formation du personnel, et surveillance médicale renforcée.',
    contentEn: 'The Congolese mining sector employs thousands of workers potentially exposed to chemical risks. SSMos shares its expertise on essential prevention measures: identification of hazardous substances, appropriate personal protective equipment, staff training, and enhanced medical surveillance.',
    contentLn: 'Le secteur minier congolais emploie des milliers de travailleurs potentiellement exposés à des risques chimiques. SSMos partage son expertise sur les mesures de prévention essentielles : identification des substances dangereuses, équipements de protection individuelle adaptés, formation du personnel, et surveillance médicale renforcée.',
    contentSw: 'Sekta ya madini ya Kongo inaajiri maelfu ya wafanyakazi ambao wanaweza kuathiriwa na hatari za kemikali. SSMos inashiriki utaalamu wake juu ya hatua muhimu za kuzuia: utambuzi wa vitu hatari, vifaa vya ulinzi wa kibinafsi vinavyofaa, mafunzo ya wafanyakazi, na uangalizi wa matibabu ulioimarishwa.',
    category: 'sst',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    author: 'Ing. Patrick Mwamba'
  },
  {
    id: '4',
    title: 'Lancement de notre application mobile de reporting SST',
    titleEn: 'Launch of our OHS reporting mobile application',
    titleLn: 'Lancement de notre application mobile de reporting SST',
    titleSw: 'Uzinduzi wa programu yetu ya simu ya kuripoti OHS',
    excerpt: 'SSMos innove avec une application permettant de signaler les incidents en temps réel.',
    excerptEn: 'SSMos innovates with an application allowing real-time incident reporting.',
    excerptLn: 'SSMos innove avec une application permettant de signaler les incidents en temps réel.',
    excerptSw: 'SSMos inabunifu na programu inayoruhusu kuripoti matukio ya papo hapo.',
    content: 'SSMos lance officiellement son application mobile dédiée au reporting des incidents et quasi-incidents en matière de santé et sécurité au travail. Cette solution innovante permet aux employés de signaler rapidement tout événement, avec photos et géolocalisation, facilitant ainsi la réactivité des équipes SST.',
    contentEn: 'SSMos officially launches its mobile application dedicated to reporting incidents and near-misses in occupational health and safety. This innovative solution allows employees to quickly report any event, with photos and geolocation, thus facilitating the responsiveness of OHS teams.',
    contentLn: 'SSMos lance officiellement son application mobile dédiée au reporting des incidents et quasi-incidents en matière de santé et sécurité au travail. Cette solution innovante permet aux employés de signaler rapidement tout événement, avec photos et géolocalisation, facilitant ainsi la réactivité des équipes SST.',
    contentSw: 'SSMos inazindua rasmi programu yake ya simu iliyojitolea kuripoti matukio na karibu-matukio katika afya na usalama kazini. Suluhisho hili la ubunifu linaruhusu wafanyakazi kuripoti haraka tukio lolote, pamoja na picha na eneo, hivyo kuwezesha mwitikio wa timu za OHS.',
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
    bio: 'Gestionnaire de projets expérimentée dans l\'accompagnement des entreprises.',
    bioEn: 'Experienced project manager in supporting companies.',
    expertise: ['Gestion de projets', 'Accompagnement clients', 'Coordination'],
    expertiseEn: ['Project management', 'Client support', 'Coordination'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  }
];

export const interventionAreas = [
  {
    icon: 'Factory',
    title: 'Secteur Industriel',
    titleEn: 'Industrial Sector',
    titleLn: 'Secteur Industriel',
    titleSw: 'Sekta ya Viwanda',
    description: 'Accompagnement des industries manufacturières et extractives',
    descriptionEn: 'Supporting manufacturing and extractive industries',
    descriptionLn: 'Kosunga industries manufacturières na extractives',
    descriptionSw: 'Kusaidia viwanda vya utengenezaji na uchimbaji'
  },
  {
    icon: 'Building2',
    title: 'BTP & Construction',
    titleEn: 'Construction',
    titleLn: 'BTP & Construction',
    titleSw: 'Ujenzi',
    description: 'Sécurité sur les chantiers et sites de construction',
    descriptionEn: 'Safety on construction sites',
    descriptionLn: 'Sécurité na chantier na site ya construction',
    descriptionSw: 'Usalama kwenye tovuti za ujenzi'
  },
  {
    icon: 'Truck',
    title: 'Transport & Logistique',
    titleEn: 'Transport & Logistics',
    titleLn: 'Transport & Logistique',
    titleSw: 'Usafiri & Vifaa',
    description: 'Prévention des risques routiers et logistiques',
    descriptionEn: 'Prevention of road and logistics risks',
    descriptionLn: 'Prévention ya risques routiers na logistiques',
    descriptionSw: 'Kuzuia hatari za barabara na vifaa'
  },
  {
    icon: 'Hospital',
    title: 'Secteur Santé',
    titleEn: 'Healthcare Sector',
    titleLn: 'Secteur Santé',
    titleSw: 'Sekta ya Afya',
    description: 'Protection du personnel soignant',
    descriptionEn: 'Healthcare worker protection',
    descriptionLn: 'Protection ya personnel soignant',
    descriptionSw: 'Ulinzi wa wafanyakazi wa afya'
  },
  {
    icon: 'Pickaxe',
    title: 'Secteur Minier',
    titleEn: 'Mining Sector',
    titleLn: 'Secteur Minier',
    titleSw: 'Sekta ya Madini',
    description: 'Expertise en environnements miniers',
    descriptionEn: 'Expertise in mining environments',
    descriptionLn: 'Expertise na environnements miniers',
    descriptionSw: 'Utaalam katika mazingira ya madini'
  },
  {
    icon: 'Leaf',
    title: 'Agroalimentaire',
    titleEn: 'Agri-food',
    titleLn: 'Agroalimentaire',
    titleSw: 'Kilimo-cha chakula',
    description: 'Sécurité alimentaire et agricole',
    descriptionEn: 'Food and agricultural safety',
    descriptionLn: 'Sécurité alimentaire na agricole',
    descriptionSw: 'Usalama wa chakula na kilimo'
  }
];
