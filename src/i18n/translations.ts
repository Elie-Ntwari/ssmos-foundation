export type Language = 'fr' | 'en' | 'ln' | 'sw' | 'tsh';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ln', name: 'Lingala', nativeName: 'Lingála' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
  { code: 'tsh', name: 'Tshiluba', nativeName: 'Tshiluba' },
];

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.news': 'Actualités',
    'nav.blog': 'Blog',
    'nav.team': 'Équipe',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'La Prévention au Cœur du Travail',
    'hero.subtitle': 'Safety & Santé na Mosala accompagne les entreprises congolaises vers l\'excellence en santé et sécurité au travail',
    'hero.cta.primary': 'Découvrir nos services',
    'hero.cta.secondary': 'Nous contacter',
    
    // Home sections
    'home.about.title': 'Qui sommes-nous ?',
    'home.about.description': 'SSMos est une organisation spécialisée dans la promotion de la santé et sécurité au travail en République Démocratique du Congo. Nous œuvrons pour un environnement professionnel sain et sécurisé pour tous les travailleurs.',
    'home.axes.title': 'Nos axes d\'intervention',
    'home.stats.title': 'Notre impact en chiffres',
    'home.news.title': 'Dernières actualités',
    'home.news.viewAll': 'Voir toutes les actualités',
    
    // Stats
    'stats.companies': 'Entreprises accompagnées',
    'stats.trainings': 'Formations dispensées',
    'stats.experts': 'Experts mobilisés',
    'stats.years': 'Années d\'expérience',
    
    // About page
    'about.title': 'À propos de SSMos',
    'about.intro': 'Présentation générale',
    'about.intro.text': 'Safety & Santé na Mosala (SSMos) est une organisation pionnière dédiée à la promotion et à l\'amélioration des conditions de santé et de sécurité au travail en République Démocratique du Congo.',
    'about.context.title': 'Contexte de création',
    'about.context.text': 'Face aux défis majeurs de la santé et sécurité au travail en RDC, SSMos a été créée pour combler le gap entre les normes internationales et les pratiques locales, en proposant des solutions adaptées au contexte congolais.',
    'about.vision.title': 'Vision 2030',
    'about.vision.text': 'Devenir le leader régional en matière de conseil, formation et accompagnement en santé et sécurité au travail, contribuant ainsi à l\'émergence d\'une culture de prévention en Afrique centrale.',
    'about.mission.title': 'Notre Mission',
    'about.mission.text': 'Accompagner les organisations dans la mise en place de systèmes de management SST efficaces, former les acteurs de la prévention et promouvoir une culture de sécurité durable.',
    'about.goal.title': 'Notre But',
    'about.goal.text': 'Réduire significativement les accidents du travail et les maladies professionnelles en RDC, tout en améliorant le bien-être des travailleurs et la productivité des entreprises.',
    'about.values.title': 'Nos Valeurs',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Nous visons l\'excellence dans chaque intervention',
    'about.values.integrity': 'Intégrité',
    'about.values.integrity.desc': 'Nous agissons avec éthique et transparence',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Nous adoptons des approches novatrices',
    'about.values.proximity': 'Proximité',
    'about.values.proximity.desc': 'Nous restons proches de nos partenaires',
    
    // Services
    'services.title': 'Nos Services & Activités',
    'services.subtitle': 'Des solutions complètes pour votre sécurité au travail',
    'services.cabinet.title': 'Cabinet SSMos',
    'services.cabinet.desc': 'Consulting et expertise en santé et sécurité au travail pour accompagner votre organisation vers la conformité et l\'excellence.',
    'services.training.title': 'Formations & Renforcement',
    'services.training.desc': 'Programmes de formation certifiants et renforcement des capacités pour vos équipes en matière de prévention.',
    'services.audit.title': 'Études & Audits',
    'services.audit.desc': 'Audits de conformité, études de risques et accompagnements personnalisés pour identifier et maîtriser vos risques.',
    'services.legal.title': 'Conseil Juridique',
    'services.legal.desc': 'Conseil stratégique et juridique en matière de réglementation SST nationale et internationale.',
    'services.digital.title': 'Innovation & Digital',
    'services.digital.desc': 'Solutions digitales innovantes pour la gestion et le suivi de votre système de management SST.',
    'services.learnMore': 'En savoir plus',
    
    // News
    'news.title': 'Actualités',
    'news.subtitle': 'Restez informé des dernières nouvelles en SST',
    'news.readMore': 'Lire la suite',
    'news.category.sst': 'SST',
    'news.category.training': 'Formation',
    'news.category.regulation': 'Réglementation',
    'news.category.innovation': 'Innovation',
    'news.backToList': 'Retour aux actualités',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Articles éducatifs sur la santé et sécurité au travail',
    'blog.readMore': 'Lire l\'article',
    'blog.backToList': 'Retour au blog',
    
    // Team
    'team.title': 'Notre Équipe',
    'team.subtitle': 'Une équipe pluridisciplinaire d\'experts dévoués',
    'team.expertise': 'Domaines d\'expertise',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes à votre écoute',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Votre message',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Heures d\'ouverture',
    
    // Footer
    'footer.description': 'Organisation spécialisée dans la promotion de la santé et sécurité au travail en RDC.',
    'footer.quickLinks': 'Liens rapides',
    'footer.services': 'Nos services',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.placeholder': 'Votre email',
    'footer.newsletter.subscribe': 'S\'abonner',
    'footer.designedBy': 'Conçu par',
    'cta.ready.title': 'Prêt à améliorer votre sécurité au travail ?',
    'cta.ready.description': 'Contactez notre équipe d\'experts pour discuter de vos besoins et découvrir nos solutions sur mesure.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.news': 'News',
    'nav.blog': 'Blog',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Prevention at the Heart of Work',
    'hero.subtitle': 'Safety & Santé na Mosala supports Congolese companies towards excellence in occupational health and safety',
    'hero.cta.primary': 'Discover our services',
    'hero.cta.secondary': 'Contact us',
    
    // Home sections
    'home.about.title': 'Who are we?',
    'home.about.description': 'SSMos is an organization specialized in promoting occupational health and safety in the Democratic Republic of Congo. We work for a healthy and safe professional environment for all workers.',
    'home.axes.title': 'Our areas of intervention',
    'home.stats.title': 'Our impact in numbers',
    'home.news.title': 'Latest news',
    'home.news.viewAll': 'View all news',
    
    // Stats
    'stats.companies': 'Companies supported',
    'stats.trainings': 'Trainings delivered',
    'stats.experts': 'Experts mobilized',
    'stats.years': 'Years of experience',
    
    // About page
    'about.title': 'About SSMos',
    'about.intro': 'General presentation',
    'about.intro.text': 'Safety & Santé na Mosala (SSMos) is a pioneering organization dedicated to promoting and improving occupational health and safety conditions in the Democratic Republic of Congo.',
    'about.context.title': 'Creation context',
    'about.context.text': 'Facing the major challenges of occupational health and safety in the DRC, SSMos was created to bridge the gap between international standards and local practices, by offering solutions adapted to the Congolese context.',
    'about.vision.title': 'Vision 2030',
    'about.vision.text': 'To become the regional leader in consulting, training and support in occupational health and safety, thus contributing to the emergence of a prevention culture in Central Africa.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To support organizations in implementing effective OHS management systems, train prevention actors and promote a sustainable safety culture.',
    'about.goal.title': 'Our Goal',
    'about.goal.text': 'To significantly reduce workplace accidents and occupational diseases in the DRC, while improving worker well-being and company productivity.',
    'about.values.title': 'Our Values',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'We strive for excellence in every intervention',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'We act with ethics and transparency',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'We adopt innovative approaches',
    'about.values.proximity': 'Proximity',
    'about.values.proximity.desc': 'We stay close to our partners',
    
    // Services
    'services.title': 'Our Services & Activities',
    'services.subtitle': 'Complete solutions for your workplace safety',
    'services.cabinet.title': 'SSMos Cabinet',
    'services.cabinet.desc': 'Consulting and expertise in occupational health and safety to support your organization towards compliance and excellence.',
    'services.training.title': 'Training & Capacity Building',
    'services.training.desc': 'Certified training programs and capacity building for your teams in prevention matters.',
    'services.audit.title': 'Studies & Audits',
    'services.audit.desc': 'Compliance audits, risk studies and personalized support to identify and control your risks.',
    'services.legal.title': 'Legal Advice',
    'services.legal.desc': 'Strategic and legal advice on national and international OHS regulations.',
    'services.digital.title': 'Innovation & Digital',
    'services.digital.desc': 'Innovative digital solutions for managing and monitoring your OHS management system.',
    'services.learnMore': 'Learn more',
    
    // News
    'news.title': 'News',
    'news.subtitle': 'Stay informed about the latest OHS news',
    'news.readMore': 'Read more',
    'news.category.sst': 'OHS',
    'news.category.training': 'Training',
    'news.category.regulation': 'Regulation',
    'news.category.innovation': 'Innovation',
    'news.backToList': 'Back to news',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Educational articles on occupational health and safety',
    'blog.readMore': 'Read article',
    'blog.backToList': 'Back to blog',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'A multidisciplinary team of dedicated experts',
    'team.expertise': 'Areas of expertise',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.subtitle': 'We are listening to you',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your message',
    'contact.form.submit': 'Send message',
    'contact.form.success': 'Message sent successfully!',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Opening hours',
    
    // Footer
    'footer.description': 'Organization specialized in promoting occupational health and safety in the DRC.',
    'footer.quickLinks': 'Quick links',
    'footer.services': 'Our services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.placeholder': 'Your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.designedBy': 'Designed by',
    'cta.ready.title': 'Ready to improve your workplace safety?',
    'cta.ready.description': 'Contact our team of experts to discuss your needs and discover our tailored solutions.',
  },
  ln: {
    // Navigation
    'nav.home': 'Ndako',
    'nav.about': 'Na tina na biso',
    'nav.services': 'Misala',
    'nav.news': 'Sango',
    'nav.blog': 'Blogi',
    'nav.team': 'Équipe',
    'nav.contact': 'Koyebana',
    
    // Hero
    'hero.title': 'Kobatela na Motema ya Mosala',
    'hero.subtitle': 'Safety & Santé na Mosala esungaka ba entreprises ya Congo mpo na excellence na santé na mosala',
    'hero.cta.primary': 'Koyeba misala na biso',
    'hero.cta.secondary': 'Kosolola na biso',
    
    // Home sections
    'home.about.title': 'Biso tozali banani?',
    'home.about.description': 'SSMos ezali organisation oyo ezali kosala mpo na santé na sécurité na mosala na RDC.',
    'home.axes.title': 'Bisika ya mosala na biso',
    'home.stats.title': 'Mbongwana na biso na bitangi',
    'home.news.title': 'Sango ya sika',
    'home.news.viewAll': 'Tala sango nionso',
    
    // Stats
    'stats.companies': 'Ba entreprises oyo tosungaki',
    'stats.trainings': 'Mateya oyo topesaki',
    'stats.experts': 'Ba experts oyo tosaleli',
    'stats.years': 'Mbula ya expérience',
    
    // Footer
    'footer.description': 'Organisation mpo na santé na sécurité na mosala na RDC.',
    'footer.quickLinks': 'Liens ya noki',
    'footer.services': 'Misala na biso',
    'footer.contact': 'Koyebana',
    'footer.rights': 'Makoki nionso ebatelami.',
    'footer.designedBy': 'Esalami na',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.placeholder': 'Email na yo',
    'footer.newsletter.subscribe': 'Kokoma',
    'cta.ready.title': 'Olingi kobongisa sécurité na mosala?',
    'cta.ready.description': 'Solola na équipe na biso ya experts mpo na koyeba mpe kozwa solutions adaptées.',
    
    // Common (fallback to French for incomplete translations)
    'about.title': 'Na tina na SSMos',
    'services.title': 'Misala na biso',
    'news.title': 'Sango',
    'blog.title': 'Blogi',
    'team.title': 'Équipe na biso',
    'contact.title': 'Koyebana na biso',
  },
  sw: {
    // Navigation
    'nav.home': 'Nyumbani',
    'nav.about': 'Kuhusu',
    'nav.services': 'Huduma',
    'nav.news': 'Habari',
    'nav.blog': 'Blogu',
    'nav.team': 'Timu',
    'nav.contact': 'Wasiliana',
    
    // Hero
    'hero.title': 'Kuzuia katika Moyo wa Kazi',
    'hero.subtitle': 'Safety & Santé na Mosala inasaidia makampuni ya Kongo kufikia ubora katika afya na usalama kazini',
    'hero.cta.primary': 'Gundua huduma zetu',
    'hero.cta.secondary': 'Wasiliana nasi',
    
    // Home sections
    'home.about.title': 'Sisi ni nani?',
    'home.about.description': 'SSMos ni shirika linalokuzua afya na usalama kazini nchini DRC.',
    'home.axes.title': 'Maeneo yetu ya kuingilia',
    'home.stats.title': 'Athari yetu kwa nambari',
    'home.news.title': 'Habari za hivi karibuni',
    'home.news.viewAll': 'Tazama habari zote',
    
    // Stats
    'stats.companies': 'Makampuni yaliyosaidiwa',
    'stats.trainings': 'Mafunzo yaliyotolewa',
    'stats.experts': 'Wataalam waliohamasishwa',
    'stats.years': 'Miaka ya uzoefu',
    
    // Footer
    'footer.description': 'Shirika la kukuza afya na usalama kazini nchini DRC.',
    'footer.quickLinks': 'Viungo vya haraka',
    'footer.services': 'Huduma zetu',
    'footer.contact': 'Wasiliana',
    'footer.rights': 'Haki zote zimehifadhiwa.',
    'footer.designedBy': 'Imeundwa na',
    'footer.newsletter': 'Jarida',
    'footer.newsletter.placeholder': 'Barua pepe yako',
    'footer.newsletter.subscribe': 'Jisajili',
    'cta.ready.title': 'Uko tayari kuboresha usalama kazini?',
    'cta.ready.description': 'Wasiliana na timu yetu ya wataalam kujadili mahitaji yako na kugundua suluhisho zetu.',
    
    // Common
    'about.title': 'Kuhusu SSMos',
    'services.title': 'Huduma Zetu',
    'news.title': 'Habari',
    'blog.title': 'Blogu',
    'team.title': 'Timu Yetu',
    'contact.title': 'Wasiliana Nasi',
  },
  tsh: {
    // Navigation
    'nav.home': 'Kuetu',
    'nav.about': 'Bua buetu',
    'nav.services': 'Mudimu',
    'nav.news': 'Lumu',
    'nav.blog': 'Blogu',
    'nav.team': 'Tshisumbu',
    'nav.contact': 'Kutuilangana',
    
    // Hero
    'hero.title': 'Kubika mu Mutshima wa Mudimu',
    'hero.subtitle': 'Safety & Santé na Mosala udiambuluisha bisalela bia Congo ku buimpe bua muoyo mu mudimu',
    'hero.cta.primary': 'Kumanya midimu yetu',
    'hero.cta.secondary': 'Kutuilangana',
    
    // Home sections
    'home.about.title': 'Tuetu nnganyi?',
    'home.about.description': 'SSMos udi tshisumbu tshiasala bua muoyo ne bukubi mu mudimu mu RDC.',
    'home.axes.title': 'Bintu bietu bia mudimu',
    'home.stats.title': 'Tshienzedi tshietu mu nomba',
    'home.news.title': 'Lumu lua mushidi',
    'home.news.viewAll': 'Mona lumu luonso',
    
    // Footer
    'footer.description': 'Tshisumbu tshia muoyo ne bukubi mu mudimu mu RDC.',
    'footer.quickLinks': 'Nshindamenu wa lukasa',
    'footer.services': 'Midimu yetu',
    'footer.contact': 'Kutuilangana',
    'footer.rights': 'Buonso bukuatshishibue.',
    'footer.designedBy': 'Tshia elama kudi',
    'footer.newsletter': 'Mukanda',
    'footer.newsletter.placeholder': 'Email webe',
    'footer.newsletter.subscribe': 'Kudifunda',
    'cta.ready.title': 'Udi mulamuke bua kubongela bukubi mu mudimu?',
    'cta.ready.description': 'Langana ne tshisumbu tshietu tshia experts bua kuyukila bua bintu biebe.',
    
    // Common
    'about.title': 'Bua SSMos',
    'services.title': 'Midimu Yetu',
    'news.title': 'Lumu',
    'blog.title': 'Blogu',
    'team.title': 'Tshisumbu Tshietu',
    'contact.title': 'Kutuilangana',
  },
};

export const getTranslation = (lang: Language, key: string): string => {
  return translations[lang][key] || translations.fr[key] || key;
};
