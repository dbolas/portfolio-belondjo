# LeuCare — Prototype standalone

## Lancement local

Les fichiers JSX sont transpilés par Babel au chargement. Tu dois servir les fichiers via un serveur HTTP local (pas `file://`).

```bash
cd leucare-bundle
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

ou avec Node :

```bash
npx serve .
```

## Structure

```
leucare-bundle/
├── index.html                         ← point d'entrée
├── styles/
│   └── leucare.css                    ← tokens + composants CSS
└── components/
    ├── i18n.js                        ← FR / LN / SW
    ├── icons.jsx                      ← icônes stroke
    ├── shell.jsx                      ← StatusBar, SyncBanner, AppBar, TabBar, Phone
    ├── screen-home.jsx                ← Accueil
    ├── screen-treat-pain.jsx          ← Traitement + Carnet douleur + BodyMap
    └── screen-other.jsx               ← Communauté, Ressources, Messages, Calendrier, Profil, Onboarding
```

## Dépendances externes (CDN)

Chargées depuis `index.html` — nécessitent une connexion la première fois :

- React 18.3.1 + ReactDOM (unpkg)
- Babel standalone 7.29.0 (unpkg)
- Google Fonts : DM Serif Display, DM Sans, JetBrains Mono

Pour un vrai mode hors-ligne, télécharge ces fichiers en local et remplace les URLs dans `index.html`.

## Tweaks

Active le mode Tweaks depuis la barre d'outils pour voir un panneau avec :
- Langue FR / Lingala / Swahili
- Palette chaleureux / clinique / nuit
- Densité standard / compact
- Intensité des motifs
- Bascule en ligne / hors-ligne
- Navigation directe entre écrans
- Relance onboarding

## Reset de l'onboarding

```js
localStorage.removeItem('lc-onb');
```
