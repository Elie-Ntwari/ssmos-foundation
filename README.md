# SSMos Foundation Website

Site vitrine de **SSMos (Safety & Santé na Mosala)** pour présenter l'organisation, ses services, ses actualités, son blog, son équipe et ses coordonnées.

## Stack technique

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Framer Motion

## Lancer le projet en local

```bash
npm install
npm run dev
```

Application disponible ensuite sur `http://localhost:8080`.

## Scripts utiles

```bash
npm run dev      # Démarrage en développement
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Vérification ESLint
```

## Déploiement et aperçu au partage (Facebook / WhatsApp / X)

Les métadonnées de partage sont définies dans `index.html` (`og:*` et `twitter:*`).

Pour afficher correctement la marque **SSMos** lors du partage :

- garder un titre/description alignés avec SSMos ;
- utiliser une image de preview publique (actuellement `/favicon.png`) ;
- après déploiement, forcer un refresh du cache des réseaux sociaux :
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Structure principale

- `src/pages` : pages du site
- `src/components` : composants UI et layout
- `src/i18n` : traductions
- `src/services` : appels API
- `public` : assets statiques publics

