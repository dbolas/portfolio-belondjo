const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const MOCKUP = 'c:/Users/ADSL 2/Downloads/leucare/Device 13PM.png';
const SCREENS_DIR = 'c:/Users/ADSL 2/Downloads/leucare';
const OUTPUT_DIR = 'C:/Dev/portfolios/portfolio-belondjo/public/images/leucare';

const SCREEN_X = 49;
const SCREEN_Y = 50;
const SCREEN_WIDTH = 297;
const SCREEN_HEIGHT = 603;
const CORNER_RADIUS = 28;

const mask = Buffer.from(
  `<svg width="${SCREEN_WIDTH}" height="${SCREEN_HEIGHT}"><rect x="0" y="0" width="${SCREEN_WIDTH}" height="${SCREEN_HEIGHT}" rx="${CORNER_RADIUS}" ry="${CORNER_RADIUS}" fill="white"/></svg>`
);

async function process(screenFile, outputName) {
  const screenPath = path.join(SCREENS_DIR, screenFile);

  const screenBuffer = await sharp(screenPath)
    .resize(SCREEN_WIDTH, SCREEN_HEIGHT, { fit: 'cover', position: 'top' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp(MOCKUP)
    .composite([{ input: screenBuffer, top: SCREEN_Y, left: SCREEN_X }])
    .png({ quality: 95 })
    .toFile(path.join(OUTPUT_DIR, outputName));

  console.log('OK', outputName);
}

(async () => {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const mappings = [
    ['Splash Screen.png', 'splash.png'],
    ['Onboarding Mascot.png', 'onboarding.png'],
    ['Profile Selection.png', 'profile-selection.png'],
    ["S'inscrire - Prénom.png", 'signup-prenom.png'],
    ["S'inscrire - Email.png", 'signup-email.png'],
    ["S'inscrire - Mot de passe.png", 'signup-password.png'],
    ["S'inscrire - Infos personnelles.png", 'signup-infos.png'],
    ['Tableau de bord - LeuCare.png', 'dashboard.png'],
    ['Mon Journal des Douleurs - LeuCare.png', 'journal-douleurs.png'],
    ['Mon Traitement - LeuCare.png', 'traitement.png'],
    ['u00e9 - LeuCare.png', 'communaute.png'],
  ];

  for (const [src, out] of mappings) {
    try {
      await process(src, out);
    } catch (e) {
      console.error('FAIL', src, ':', e.message);
    }
  }
})();
