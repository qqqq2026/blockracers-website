// Home page copy (conversion layout). Facts only from site.ts and the game; no invented features, numbers or quotes.
// Rules: Dutch first, then English, no em or en dashes, legal or safety text marked [LAWYER REVIEW].
import type { Lang } from './site';

export type HomeCard = { img: string; icon: 'map' | 'flag' | 'star' | 'people'; color: string; h: string; p: string };
export type HomeCopy = {
  title: string; sub: string; chips: string[]; ctaNote: string;
  featH: string; cards: HomeCard[];
  galH: string; gallery: { img: string; alt: string }[];
  stepsH: string; steps: string[]; stepsNote: string;
  parentsH: string; parentsSub: string; parents: string[]; parentsBtn: string;
  finalH: string; finalSub: string;
};

const card = (img: string, icon: HomeCard['icon'], color: string, h: string, p: string): HomeCard => ({ img, icon, color, h, p });

export const HOME: Record<Lang, HomeCopy> = {
  nl: {
    title: 'RIJD. RACE. ONTDEK.',
    sub: 'Gratis racegame in je browser. Rijd door Parkstad en Beekdaelen op echte kaarten.',
    chips: ['In je browser', 'Telefoon, tablet en computer'],
    ctaNote: 'Gratis account. Niets te koop.',
    featH: 'WAT GA JE DOEN?',
    cards: [
      card('11_world_hud_desktop', 'map', 'var(--br-garage)', 'ECHTE KAARTEN', 'Rijd door Parkstad en Beekdaelen, met verkeer op de weg.'),
      card('12_phone_driving', 'flag', 'var(--br-upgrades)', 'RACES', 'Doe mee aan races en kom op het leaderboard.'),
      card('03_loop_stunt', 'star', 'var(--br-tuning)', 'STUNTS EN COINS', 'Vind stuntplekken, verdien coins en stijg in level.'),
      card('02_players_avatars', 'people', 'var(--br-players)', 'SAMEN RIJDEN', 'Rijd live met andere spelers. Geen vrije chat.'),
    ],
    galH: 'KIJK IN DE GAME',
    gallery: [
      { img: '04_jet_over_city', alt: 'Een straaljager vliegt over de stad in BlockRacers' },
      { img: '05_jumbo_takeoff', alt: 'Een jumbojet stijgt op in BlockRacers' },
      { img: '06_fire_police', alt: 'Brandweer en politie op straat in BlockRacers' },
    ],
    stepsH: 'ZO START JE',
    steps: ['Maak gratis een account.', 'Bevestig je e-mail met de code uit de mail.', 'Goedgekeurd? Klik op Speel nu.'],
    stepsNote: 'De eerste 200 accounts worden automatisch goedgekeurd. Daarna kom je op de wachtlijst.',
    parentsH: 'VOOR OUDERS',
    parentsSub: 'Eerlijk uitgelegd. [LAWYER REVIEW]',
    parents: ['Vanaf 13 jaar [LAWYER REVIEW]', 'Geen vrije chat, alleen vaste berichten', 'Geen reclame en niets te koop', 'Geen trackers van derden', 'Gegevens opgeslagen in de EU', 'Meldknop in de game'],
    parentsBtn: 'Lees Ouders en privacy',
    finalH: 'KLAAR VOOR DE START?',
    finalSub: 'Maak gratis je account en spring in de auto.',
  },
  en: {
    title: 'DRIVE. RACE. EXPLORE.',
    sub: 'Free racing game in your browser. Drive through Parkstad and Beekdaelen on real maps.',
    chips: ['In your browser', 'Phone, tablet and computer'],
    ctaNote: 'Free account. Nothing to buy.',
    featH: 'WHAT WILL YOU DO?',
    cards: [
      card('11_world_hud_desktop', 'map', 'var(--br-garage)', 'REAL MAPS', 'Drive through Parkstad and Beekdaelen, with traffic on the road.'),
      card('12_phone_driving', 'flag', 'var(--br-upgrades)', 'RACES', 'Join races and get on the leaderboard.'),
      card('03_loop_stunt', 'star', 'var(--br-tuning)', 'STUNTS AND COINS', 'Find stunt spots, earn coins and level up.'),
      card('02_players_avatars', 'people', 'var(--br-players)', 'DRIVE TOGETHER', 'Drive live with other players. No free chat.'),
    ],
    galH: 'LOOK INSIDE THE GAME',
    gallery: [
      { img: '04_jet_over_city', alt: 'A jet flies over the city in BlockRacers' },
      { img: '05_jumbo_takeoff', alt: 'A jumbo jet takes off in BlockRacers' },
      { img: '06_fire_police', alt: 'Fire truck and police on the street in BlockRacers' },
    ],
    stepsH: 'HOW TO START',
    steps: ['Create a free account.', 'Confirm your email with the code from the email.', 'Approved? Click Play now.'],
    stepsNote: 'The first 200 accounts are approved automatically. After that you join the waitlist.',
    parentsH: 'FOR PARENTS',
    parentsSub: 'Explained honestly. [LAWYER REVIEW]',
    parents: ['Ages 13 and up [LAWYER REVIEW]', 'No free chat, only set messages', 'No ads and nothing to buy', 'No third-party trackers', 'Data stored in the EU', 'Report button in the game'],
    parentsBtn: 'Read Parents and privacy',
    finalH: 'READY TO START?',
    finalSub: 'Create your free account and jump in the car.',
  },
};
