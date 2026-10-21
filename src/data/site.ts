// All page copy lives here. Source: website-kit fritz_draft_v1.md (DRAFT).
// Rules: no invented facts, keep [TBD Daniel] and [LAWYER REVIEW] markers visible, no em or en dashes.

export type Lang = 'nl' | 'en';
export type Section = { h: string; p?: string[]; ul?: string[]; gallery?: string[]; sky?: boolean; cta?: boolean };
export type Page = { key: string; slug: Record<Lang, string>; menu: Record<Lang, string>; hero: string;
  content: Record<Lang, { title: string; sub: string; sections: Section[] }> };

export const BETA_URL = 'https://www.blockracers.online';
export const SOCIAL = {
  game: [
    { label: 'X @BlockRacersGame', href: 'https://x.com/BlockRacersGame' },
    { label: 'TikTok @BlockRacersGame', href: 'https://www.tiktok.com/@BlockRacersGame' },
  ],
  studio: [
    { label: 'X @BlkRacersHub', href: 'https://x.com/BlkRacersHub' },
    { label: 'TikTok @BlkRacersHub', href: 'https://www.tiktok.com/@BlkRacersHub' },
  ],
};
export const UI = {
  nl: { play: 'SPEEL GRATIS', tagline: 'Bouw. Rijd. Bouw opnieuw.', draft: 'CONCEPT: niet gepubliceerd. Teksten met [TBD Daniel] of [LAWYER REVIEW] zijn niet definitief.', game: 'De game', studio: 'De studio', other: 'English', otherLang: 'en' as Lang },
  en: { play: 'PLAY FREE', tagline: 'Build it. Drive it. Build it again.', draft: 'DRAFT: not published. Text marked [TBD Daniel] or [LAWYER REVIEW] is not final.', game: 'The game', studio: 'The studio', other: 'Nederlands', otherLang: 'nl' as Lang },
};

const s = (n: string) => `/img/screenshots/${n}.png`;

export const PAGES: Page[] = [
  { key: 'home', slug: { nl: '', en: '' }, menu: { nl: 'Home', en: 'Home' }, hero: s('01_hero_street'),
    content: {
      nl: { title: 'BOUW. RIJD. BOUW OPNIEUW.', sub: 'Bouw je auto. Rijd door de wereld. Bouw opnieuw.', sections: [
        { h: 'Zo werkt het', ul: ['Bouw je auto.', 'Rijd door de wereld.', 'Bouw opnieuw.'] },
        { h: 'Features', p: ['Upgrades, Tasks, Garage, Players, Tuning. [TBD Daniel: bevestig welke features echt in de game zitten]'] },
        { h: 'Screenshots', gallery: ['03_loop_stunt', '04_jet_over_city', '02_players_avatars', '07_car_builder', '12_phone_driving'] },
        { h: 'De beta', sky: true, p: ['BlockRacers is een beperkte beta, alleen voor goedgekeurde testers. De game werkt nu alleen om te testen. [TBD Daniel: platformen]'], cta: true },
        { h: 'Laatste devlog', p: ['[TBD Daniel: eerste devlog]'] },
        { h: 'Voor ouders', p: ['Lees hoe we omgaan met veiligheid en privacy op de pagina Ouders en privacy.'] },
      ] },
      en: { title: 'BUILD IT. DRIVE IT. BUILD IT AGAIN.', sub: 'Build your car. Drive through the world. Build it again.', sections: [
        { h: 'How it works', ul: ['Build your car.', 'Drive through the world.', 'Build it again.'] },
        { h: 'Features', p: ['Upgrades, Tasks, Garage, Players, Tuning. [TBD Daniel: confirm which features really exist in the game]'] },
        { h: 'Screenshots', gallery: ['03_loop_stunt', '04_jet_over_city', '02_players_avatars', '07_car_builder', '12_phone_driving'] },
        { h: 'The beta', sky: true, p: ['BlockRacers is a limited beta for approved testers only. Right now the game only works for testing. [TBD Daniel: platforms]'], cta: true },
        { h: 'Latest devlog', p: ['[TBD Daniel: first devlog]'] },
        { h: 'For parents', p: ['Read how we handle safety and privacy on the Parents and privacy page.'] },
      ] },
    } },
  { key: 'game', slug: { nl: 'de-game', en: 'the-game' }, menu: { nl: 'De game', en: 'The game' }, hero: s('04_jet_over_city'),
    content: {
      nl: { title: 'DE GAME', sub: 'Bouw. Rijd. Bouw opnieuw.', sections: [
        { h: 'Wat doe je?', ul: ['Bouw je eigen auto.', 'Rijd ermee door de wereld.', 'Bouw opnieuw.'] },
        { h: 'De autobouwer', gallery: ['07_car_builder', '10_garage_clean'] },
        { h: 'Avatar maken', gallery: ['08_avatar_creator', '02_players_avatars'] },
        { h: 'De wereld', gallery: ['11_world_hud_desktop', '05_jumbo_takeoff', '06_fire_police', '03_loop_stunt'] },
        { h: 'Samen spelen', p: ['Er is nog geen chat. [TBD Daniel: wat spelers samen kunnen doen]'] },
        { h: 'Telefoon en desktop', p: ['[TBD Daniel: platformen]'], gallery: ['12_phone_driving', '13_phone_start', '09_start_screen'] },
        { h: 'Speel de beta', sky: true, cta: true },
      ] },
      en: { title: 'THE GAME', sub: 'Build it. Drive it. Build it again.', sections: [
        { h: 'What do you do?', ul: ['Build your own car.', 'Drive it through the world.', 'Build it again.'] },
        { h: 'The car builder', gallery: ['07_car_builder', '10_garage_clean'] },
        { h: 'Avatar creator', gallery: ['08_avatar_creator', '02_players_avatars'] },
        { h: 'The world', gallery: ['11_world_hud_desktop', '05_jumbo_takeoff', '06_fire_police', '03_loop_stunt'] },
        { h: 'Play together', p: ['There is no chat yet. [TBD Daniel: what players can do together]'] },
        { h: 'Phone and desktop', p: ['[TBD Daniel: platforms]'], gallery: ['12_phone_driving', '13_phone_start', '09_start_screen'] },
        { h: 'Play the beta', sky: true, cta: true },
      ] },
    } },
  { key: 'devlog', slug: { nl: 'devlog', en: 'devlog' }, menu: { nl: 'Devlog', en: 'Devlog' }, hero: s('01_hero_street'),
    content: {
      nl: { title: 'DEVLOG', sub: 'Eerlijke updates over wat er veranderd is, in korte posts.', sections: [
        { h: 'Posts', p: ['Nieuwste eerst. [TBD Daniel: eerste devlog-items]'] },
        { h: 'Op de hoogte blijven', p: ['[TBD Daniel: alleen een aanmeldoptie als er een veilige methode is]', 'Zie ook de Roadmap.'] },
      ] },
      en: { title: 'DEVLOG', sub: 'Honest updates on what changed, in short posts.', sections: [
        { h: 'Posts', p: ['Newest first. [TBD Daniel: first devlog items]'] },
        { h: 'Stay updated', p: ['[TBD Daniel: subscribe option only if a safe method exists]', 'See also the Roadmap.'] },
      ] },
    } },
  { key: 'roadmap', slug: { nl: 'roadmap', en: 'roadmap' }, menu: { nl: 'Roadmap', en: 'Roadmap' }, hero: s('11_world_hud_desktop'),
    content: {
      nl: { title: 'ROADMAP', sub: 'Waar we aan werken. Plannen kunnen veranderen.', sections: [
        { h: 'Volgorde', ul: ['1. Beta release', '2. Studio release', '3. Scholen'], p: ['Geen datums. Plannen kunnen veranderen.'] },
        { h: 'Feedback', sky: true, p: ['[TBD Daniel: manieren om feedback te geven]'] },
      ] },
      en: { title: 'ROADMAP', sub: 'What we are working on. Plans can change.', sections: [
        { h: 'Order', ul: ['1. Beta release', '2. Studio release', '3. Schools'], p: ['No dates. Plans can change.'] },
        { h: 'Feedback', sky: true, p: ['[TBD Daniel: ways to give feedback]'] },
      ] },
    } },
  { key: 'support', slug: { nl: 'support', en: 'support' }, menu: { nl: 'Support / FAQ', en: 'Support / FAQ' }, hero: s('09_start_screen'),
    content: {
      nl: { title: 'SUPPORT', sub: 'Snel antwoord op je vragen.', sections: [
        { h: 'Veelgestelde vragen', ul: ['Is het echt gratis? [TBD Daniel]', 'Op welke apparaten kan ik spelen? [TBD Daniel]', 'Hoe start ik? [TBD Daniel]', 'Is het veilig voor mijn kind? [TBD Daniel]', 'Hoe meld ik een bug? [TBD Daniel]'], gallery: ['09_start_screen', '13_phone_start'] },
        { h: 'Contactformulier [LAWYER REVIEW] [TBD Daniel]', p: ['Contact loopt straks via een webformulier. Het formulier is nog niet gebouwd.', 'Zie ook Ouders en privacy.'] },
      ] },
      en: { title: 'SUPPORT', sub: 'Quick answers to your questions.', sections: [
        { h: 'Frequently asked questions', ul: ['Is it really free? [TBD Daniel]', 'Which devices can I play on? [TBD Daniel]', 'How do I start? [TBD Daniel]', 'Is it safe for my child? [TBD Daniel]', 'How do I report a bug? [TBD Daniel]'], gallery: ['09_start_screen', '13_phone_start'] },
        { h: 'Contact form [LAWYER REVIEW] [TBD Daniel]', p: ['Contact will go through a web form. The form is not built yet.', 'See also Parents and privacy.'] },
      ] },
    } },
  { key: 'parents', slug: { nl: 'ouders-en-privacy', en: 'parents-and-privacy' }, menu: { nl: 'Ouders en privacy', en: 'Parents and privacy' }, hero: s('02_players_avatars'),
    content: {
      nl: { title: 'OUDERS EN PRIVACY', sub: 'Jij bepaalt wat veilig voelt. Wij leggen het eerlijk uit.', sections: [
        { h: 'Kort en eerlijk', p: ['BlockRacers is een beta. Alleen goedgekeurde testers spelen nu mee. Kinderen bouwen auto\'s en rijden door een blokkenwereld. [TBD Daniel: wat slaat de game op] [LAWYER REVIEW]'] },
        { h: 'Wat is BlockRacers?', p: ['BlockRacers is een game waarin je je eigen auto bouwt, ermee rijdt en opnieuw bouwt. Bouw. Rijd. Bouw opnieuw. De beta is beperkt en alleen voor goedgekeurde testers.'] },
        { h: 'Welke gegevens verzamelen we van kinderen?', p: ['De game heeft login, opslag en multiplayer via Supabase (EU, Frankfurt). [TBD Daniel: wat slaat de game op] [LAWYER REVIEW]', '[LAWYER REVIEW: of technische gegevens zoals IP-adres of apparaatgegevens onder persoonsgegevens vallen, en wat we hierover moeten zeggen]'] },
        { h: 'Wat kunnen spelers met elkaar doen?', p: ['Er is nog geen chat. [TBD Daniel: wat spelers samen kunnen doen]', '[LAWYER REVIEW: tekst over contact tussen spelers en veiligheid]'] },
        { h: 'Veiligheid', p: ['We willen dat BlockRacers een fijne plek is voor kinderen en gezinnen. Er is nog geen moderatie en nog geen meldknop. [TBD Daniel] [LAWYER REVIEW]', 'Zie je iets wat niet klopt? Laat het weten via het contactformulier. [TBD Daniel]'] },
        { h: 'Aankopen en reclame', p: ['Er zijn geen aankopen in de game. Je kunt alleen doneren. [TBD Daniel donatielink] [TBD Daniel: reclame]', '[LAWYER REVIEW: tekst over aankopen, reclame en kinderen]'] },
        { h: 'Cookies en trackers', p: ['[TBD Daniel: gebruikt de site of game cookies, analytics of trackers? Welke?]', '[LAWYER REVIEW: cookietekst en toestemming]'] },
        { h: 'Wat kun jij als ouder doen?', ul: ['Speel een keer samen met je kind.', 'Praat over wat je kind online doet.', 'Heb je een vraag of zorg? Gebruik het contactformulier. [TBD Daniel] [LAWYER REVIEW]'], p: ['Rechten van ouders en kinderen, zoals inzage en verwijdering: [LAWYER REVIEW]'] },
        { h: 'Wie is verantwoordelijk voor de gegevens?', p: ['BlockRacers Studio, onderdeel van Grachten Holding B.V. [TBD Daniel: KvK-nummer, adres] [LAWYER REVIEW]', 'Functionaris gegevensbescherming of contactpersoon privacy: [TBD Daniel]. [LAWYER REVIEW]'] },
        { h: 'Leeftijd', p: ['Er is nog geen leeftijdsadvies. [TBD Daniel] [LAWYER REVIEW: leeftijdsgrens en toestemming van ouders onder de AVG]'] },
        { h: 'Privacyverklaring', p: ['Volledige privacyverklaring (AVG): [LAWYER REVIEW: volledige tekst volgt van de jurist]. Concept, niet definitief.'] },
        { h: 'Wijzigingen', p: ['Deze pagina kan veranderen. Laatst bijgewerkt: [TBD Daniel: datum bij publicatie]. [LAWYER REVIEW]'], gallery: ['02_players_avatars', '08_avatar_creator', '12_phone_driving'] },
      ] },
      en: { title: 'PARENTS AND PRIVACY', sub: 'You decide what feels safe. We explain it honestly.', sections: [
        { h: 'Short and honest', p: ['BlockRacers is a beta. Only approved testers play right now. Kids build cars and drive through a world made of blocks. [TBD Daniel: what does the game store] [LAWYER REVIEW]'] },
        { h: 'What is BlockRacers?', p: ['BlockRacers is a game where you build your own car, drive it and build it again. Build it. Drive it. Build it again. The beta is limited and for approved testers only.'] },
        { h: 'What data do we collect from children?', p: ['The game has login, saves and multiplayer through Supabase (EU, Frankfurt). [TBD Daniel: what does the game store] [LAWYER REVIEW]', '[LAWYER REVIEW: whether technical data such as IP address or device data counts as personal data, and what we must say about it]'] },
        { h: 'What can players do with each other?', p: ['There is no chat yet. [TBD Daniel: what players can do together]', '[LAWYER REVIEW: text about contact between players and safety]'] },
        { h: 'Safety', p: ['We want BlockRacers to be a good place for kids and families. There is no moderation and no report button yet. [TBD Daniel] [LAWYER REVIEW]', 'See something wrong? Let us know through the contact form. [TBD Daniel]'] },
        { h: 'Purchases and ads', p: ['There are no purchases in the game. You can only donate. [TBD Daniel donatielink] [TBD Daniel: ads]', '[LAWYER REVIEW: text about purchases, ads and children]'] },
        { h: 'Cookies and trackers', p: ['[TBD Daniel: does the site or game use cookies, analytics or trackers? Which ones?]', '[LAWYER REVIEW: cookie text and consent]'] },
        { h: 'What can you do as a parent?', ul: ['Play together with your child once.', 'Talk about what your child does online.', 'Questions or worries? Use the contact form. [TBD Daniel] [LAWYER REVIEW]'], p: ['Rights of parents and children, such as access and deletion: [LAWYER REVIEW]'] },
        { h: 'Who is responsible for the data?', p: ['BlockRacers Studio, part of Grachten Holding B.V. [TBD Daniel: company registration number, address] [LAWYER REVIEW]', 'Data protection officer or privacy contact: [TBD Daniel]. [LAWYER REVIEW]'] },
        { h: 'Age', p: ['There is no age advice yet. [TBD Daniel] [LAWYER REVIEW: age limit and parental consent under the GDPR]'] },
        { h: 'Privacy statement', p: ['Full privacy statement (GDPR): [LAWYER REVIEW: full text to follow from the lawyer]. Draft, not final.'] },
        { h: 'Changes', p: ['This page can change. Last updated: [TBD Daniel: date at publication]. [LAWYER REVIEW]'], gallery: ['02_players_avatars', '08_avatar_creator', '12_phone_driving'] },
      ] },
    } },
  { key: 'studio', slug: { nl: 'studio', en: 'studio' }, menu: { nl: 'BlockRacers Studio', en: 'BlockRacers Studio' }, hero: s('01_hero_street'),
    content: {
      nl: { title: 'BLOCKRACERS STUDIO', sub: 'Wie maakt de game, en waarom.', sections: [
        { h: 'Wie we zijn', p: ['Mensen worden alleen getoond op aanmelding. [TBD Daniel]'] },
        { h: 'Ons verhaal', p: ['[TBD Daniel: ons verhaal in 5 regels]'] },
        { h: 'Hoe we games maken', ul: ['We bouwen in kleine stappen.', 'We luisteren naar spelers.'], gallery: ['07_car_builder'] },
        { h: 'Contact', sky: true, p: ['Via het contactformulier. [TBD Daniel]', 'Game: @BlockRacersGame op X en TikTok. Studio: @BlkRacersHub op X en TikTok. Zie ook Pers.'] },
      ] },
      en: { title: 'BLOCKRACERS STUDIO', sub: 'Who makes the game, and why.', sections: [
        { h: 'Who we are', p: ['People are only shown if they sign up for it. [TBD Daniel]'] },
        { h: 'Our story', p: ['[TBD Daniel: our story in 5 lines]'] },
        { h: 'How we make games', ul: ['We build in small steps.', 'We listen to players.'], gallery: ['07_car_builder'] },
        { h: 'Contact', sky: true, p: ['Through the contact form. [TBD Daniel]', 'Game: @BlockRacersGame on X and TikTok. Studio: @BlkRacersHub on X and TikTok. See also Press.'] },
      ] },
    } },
  { key: 'education', slug: { nl: 'onderwijs', en: 'education' }, menu: { nl: 'Onderwijs', en: 'Education' }, hero: s('07_car_builder'),
    content: {
      nl: { title: 'ONDERWIJS', sub: 'Past BlockRacers in de klas?', sections: [
        { h: 'Komt later', p: ['BlockRacers voor scholen is nog niet gebouwd. Dit komt later, na de beta en de studio release.'], gallery: ['07_car_builder', '10_garage_clean', '11_world_hud_desktop'] },
        { h: 'Wat scholen moeten weten', p: ['Apparaten, accounts en privacy: [TBD Daniel] [LAWYER REVIEW]', 'Zie ook Ouders en privacy.'] },
        { h: 'Contact voor scholen', sky: true, p: ['Via het contactformulier. [TBD Daniel]'] },
      ] },
      en: { title: 'EDUCATION', sub: 'Does BlockRacers fit in class?', sections: [
        { h: 'Coming later', p: ['BlockRacers for schools is not built yet. It comes later, after the beta and the studio release.'], gallery: ['07_car_builder', '10_garage_clean', '11_world_hud_desktop'] },
        { h: 'What schools need to know', p: ['Devices, accounts and privacy: [TBD Daniel] [LAWYER REVIEW]', 'See also Parents and privacy.'] },
        { h: 'Contact for schools', sky: true, p: ['Through the contact form. [TBD Daniel]'] },
      ] },
    } },
  { key: 'press', slug: { nl: 'pers', en: 'press' }, menu: { nl: 'Pers', en: 'Press' }, hero: s('04_jet_over_city'),
    content: {
      nl: { title: 'PERS', sub: 'Alles voor journalisten en makers op een plek.', sections: [
        { h: 'Feiten', ul: ['Game: BlockRacers', 'Studio: BlockRacers Studio (Grachten Holding B.V.)', 'Beta: beperkt, alleen goedgekeurde testers', 'Platformen: [TBD Daniel]', 'Releasestatus: beta, alleen werkend om te testen'] },
        { h: 'Korte beschrijving', p: ['[TBD Daniel: goedgekeurde korte beschrijving NL]'] },
        { h: 'Perskit', p: ['Logo\'s, screenshots en brand board: [TBD Daniel: downloadpakket]. Logo niet uitrekken, niet herkleuren, geen outlines of effecten.'], gallery: ['01_hero_street', '02_players_avatars', '03_loop_stunt', '04_jet_over_city', '05_jumbo_takeoff', '06_fire_police', '07_car_builder', '08_avatar_creator', '09_start_screen', '10_garage_clean', '11_world_hud_desktop', '12_phone_driving', '13_phone_start'] },
        { h: 'Perscontact', sky: true, p: ['Via het contactformulier. [TBD Daniel]', 'Game: @BlockRacersGame op X en TikTok. Studio: @BlkRacersHub op X en TikTok.'] },
      ] },
      en: { title: 'PRESS', sub: 'Everything journalists and creators need in one place.', sections: [
        { h: 'Facts', ul: ['Game: BlockRacers', 'Studio: BlockRacers Studio (Grachten Holding B.V.)', 'Beta: limited, approved testers only', 'Platforms: [TBD Daniel]', 'Release status: beta, only working for testing'] },
        { h: 'Short description', p: ['[TBD Daniel: approved short description EN]'] },
        { h: 'Press kit', p: ['Logos, screenshots and brand board: [TBD Daniel: download pack]. Do not stretch, recolour, outline or add effects to the logo.'], gallery: ['01_hero_street', '02_players_avatars', '03_loop_stunt', '04_jet_over_city', '05_jumbo_takeoff', '06_fire_police', '07_car_builder', '08_avatar_creator', '09_start_screen', '10_garage_clean', '11_world_hud_desktop', '12_phone_driving', '13_phone_start'] },
        { h: 'Press contact', sky: true, p: ['Through the contact form. [TBD Daniel]', 'Game: @BlockRacersGame on X and TikTok. Studio: @BlkRacersHub on X and TikTok.'] },
      ] },
    } },
];

export const href = (lang: Lang, slug: string) => (lang === 'nl' ? '/' : '/en/') + (slug ? slug + '/' : '');

// Escape text and wrap [TBD ...] and [LAWYER REVIEW ...] markers in visible badges.
export function mark(t: string): string {
  const esc = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/\[(TBD[^\]]*|LAWYER REVIEW[^\]]*)\]/g, (_m, inner: string) =>
    `<span class="marker ${inner.startsWith('TBD') ? 'marker--tbd' : 'marker--lawyer'}">[${inner}]</span>`);
}
