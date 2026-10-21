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
        { h: 'Gratis beta', sky: true, p: ['BlockRacers is een gratis beta. [TBD Daniel: wat zit er in de beta, welke platformen]'], cta: true },
        { h: 'Laatste devlog', p: ['[TBD Daniel: eerste devlog]'] },
        { h: 'Voor ouders', p: ['Lees hoe we omgaan met veiligheid en privacy op de pagina Ouders en privacy.'] },
      ] },
      en: { title: 'BUILD IT. DRIVE IT. BUILD IT AGAIN.', sub: 'Build your car. Drive through the world. Build it again.', sections: [
        { h: 'How it works', ul: ['Build your car.', 'Drive through the world.', 'Build it again.'] },
        { h: 'Features', p: ['Upgrades, Tasks, Garage, Players, Tuning. [TBD Daniel: confirm which features really exist in the game]'] },
        { h: 'Screenshots', gallery: ['03_loop_stunt', '04_jet_over_city', '02_players_avatars', '07_car_builder', '12_phone_driving'] },
        { h: 'Free beta', sky: true, p: ['BlockRacers is a free beta. [TBD Daniel: what is in the beta, which platforms]'], cta: true },
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
        { h: 'Samen spelen', p: ['[TBD Daniel: multiplayer of spelers online, alleen als het echt zo is]'] },
        { h: 'Telefoon en desktop', p: ['[TBD Daniel: platformen]'], gallery: ['12_phone_driving', '13_phone_start', '09_start_screen'] },
        { h: 'Speel de beta', sky: true, cta: true },
      ] },
      en: { title: 'THE GAME', sub: 'Build it. Drive it. Build it again.', sections: [
        { h: 'What do you do?', ul: ['Build your own car.', 'Drive it through the world.', 'Build it again.'] },
        { h: 'The car builder', gallery: ['07_car_builder', '10_garage_clean'] },
        { h: 'Avatar creator', gallery: ['08_avatar_creator', '02_players_avatars'] },
        { h: 'The world', gallery: ['11_world_hud_desktop', '05_jumbo_takeoff', '06_fire_police', '03_loop_stunt'] },
        { h: 'Play together', p: ['[TBD Daniel: multiplayer or players online, only if true]'] },
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
        { h: 'Nu bezig', p: ['[TBD Daniel]'] }, { h: 'Hierna', p: ['[TBD Daniel]'] }, { h: 'Ideeen', p: ['[TBD Daniel]'] },
        { h: 'Feedback', sky: true, p: ['[TBD Daniel: manieren om feedback te geven]'] },
      ] },
      en: { title: 'ROADMAP', sub: 'What we are working on. Plans can change.', sections: [
        { h: 'Working on now', p: ['[TBD Daniel]'] }, { h: 'Next', p: ['[TBD Daniel]'] }, { h: 'Ideas', p: ['[TBD Daniel]'] },
        { h: 'Feedback', sky: true, p: ['[TBD Daniel: ways to give feedback]'] },
      ] },
    } },
  { key: 'support', slug: { nl: 'support', en: 'support' }, menu: { nl: 'Support / FAQ', en: 'Support / FAQ' }, hero: s('09_start_screen'),
    content: {
      nl: { title: 'SUPPORT', sub: 'Snel antwoord op je vragen.', sections: [
        { h: 'Veelgestelde vragen', ul: ['Is het echt gratis? [TBD Daniel]', 'Op welke apparaten kan ik spelen? [TBD Daniel]', 'Hoe start ik? [TBD Daniel]', 'Is het veilig voor mijn kind? [TBD Daniel]', 'Hoe meld ik een bug? [TBD Daniel]'], gallery: ['09_start_screen', '13_phone_start'] },
        { h: 'Contact', p: ['[TBD Daniel: support e-mailadres]', 'Zie ook Ouders en privacy.'] },
      ] },
      en: { title: 'SUPPORT', sub: 'Quick answers to your questions.', sections: [
        { h: 'Frequently asked questions', ul: ['Is it really free? [TBD Daniel]', 'Which devices can I play on? [TBD Daniel]', 'How do I start? [TBD Daniel]', 'Is it safe for my child? [TBD Daniel]', 'How do I report a bug? [TBD Daniel]'], gallery: ['09_start_screen', '13_phone_start'] },
        { h: 'Contact', p: ['[TBD Daniel: support email address]', 'See also Parents and privacy.'] },
      ] },
    } },
  { key: 'parents', slug: { nl: 'ouders-en-privacy', en: 'parents-and-privacy' }, menu: { nl: 'Ouders en privacy', en: 'Parents and privacy' }, hero: s('02_players_avatars'),
    content: {
      nl: { title: 'OUDERS EN PRIVACY', sub: 'Jij bepaalt wat veilig voelt. Wij leggen het eerlijk uit.', sections: [
        { h: 'Kort en eerlijk', p: ['BlockRacers is een gratis beta. Kinderen bouwen auto\'s en rijden door een blokkenwereld. Wij verzamelen geen persoonsgegevens van kinderen. [LAWYER REVIEW]'] },
        { h: 'Wat is BlockRacers?', p: ['BlockRacers is een game waarin je je eigen auto bouwt, ermee rijdt en opnieuw bouwt. Bouw. Rijd. Bouw opnieuw. Je speelt de beta gratis op www.blockracers.online.'] },
        { h: 'Welke gegevens verzamelen we van kinderen?', p: ['Geen persoonsgegevens. We vragen niet om een naam, e-mailadres, adres, telefoonnummer, foto of geboortedatum van kinderen. [LAWYER REVIEW]', '[TBD Daniel: klopt dit voor de hele game, inclusief spelernaam, avatar en opgeslagen auto\'s? Welke gegevens worden technisch toch opgeslagen, bijvoorbeeld in de browser of op het apparaat?]', '[LAWYER REVIEW: of technische gegevens zoals IP-adres of apparaatgegevens onder persoonsgegevens vallen, en wat we hierover moeten zeggen]'] },
        { h: 'Wat kunnen spelers met elkaar doen?', p: ['[TBD Daniel: is er chat, zijn er andere spelers online, kunnen spelers elkaar zien of berichten sturen? Schrijf hier alleen op wat echt zo is.]', '[LAWYER REVIEW: tekst over contact tussen spelers en veiligheid]'] },
        { h: 'Veiligheid', p: ['We willen dat BlockRacers een fijne plek is voor kinderen en gezinnen. Hoe we daar voor zorgen: [TBD Daniel: bijvoorbeeld moderatie, filters, melden]. [LAWYER REVIEW]', 'Zie je iets wat niet klopt? Meld het via [TBD Daniel: contact].'] },
        { h: 'Aankopen en reclame', p: ['[TBD Daniel: zijn er aankopen, reclame of betaalde onderdelen in de beta? Zo ja, hoe werkt dat? Zo nee, zeg dat duidelijk.]', '[LAWYER REVIEW: tekst over aankopen, reclame en kinderen]'] },
        { h: 'Cookies en trackers', p: ['[TBD Daniel: gebruikt de site of game cookies, analytics of trackers? Welke?]', '[LAWYER REVIEW: cookietekst en toestemming]'] },
        { h: 'Wat kun jij als ouder doen?', ul: ['Speel een keer samen met je kind.', 'Praat over wat je kind online doet.', 'Heb je een vraag of zorg? Mail ons: [TBD Daniel: e-mailadres].'], p: ['Rechten van ouders en kinderen, zoals inzage en verwijdering: [LAWYER REVIEW]'] },
        { h: 'Wie is verantwoordelijk voor de gegevens?', p: ['BlockRacers Studio [TBD Daniel: juridische naam, KvK-nummer, adres, land]. [LAWYER REVIEW]', 'Functionaris gegevensbescherming of contactpersoon privacy: [TBD Daniel]. [LAWYER REVIEW]'] },
        { h: 'Leeftijd', p: ['Voor welke leeftijd is BlockRacers? [TBD Daniel: leeftijdsadvies of PEGI/Kijkwijzer, alleen als dit echt bestaat]. [LAWYER REVIEW: leeftijdsgrens en toestemming van ouders onder de AVG]'] },
        { h: 'Privacyverklaring', p: ['Volledige privacyverklaring (AVG): [LAWYER REVIEW: volledige tekst volgt van de jurist]. Concept, niet definitief.'] },
        { h: 'Wijzigingen', p: ['Deze pagina kan veranderen. Laatst bijgewerkt: [TBD Daniel: datum bij publicatie]. [LAWYER REVIEW]'], gallery: ['02_players_avatars', '08_avatar_creator', '12_phone_driving'] },
      ] },
      en: { title: 'PARENTS AND PRIVACY', sub: 'You decide what feels safe. We explain it honestly.', sections: [
        { h: 'Short and honest', p: ['BlockRacers is a free beta. Kids build cars and drive through a world made of blocks. We do not collect personal data from children. [LAWYER REVIEW]'] },
        { h: 'What is BlockRacers?', p: ['BlockRacers is a game where you build your own car, drive it and build it again. Build it. Drive it. Build it again. You can play the beta for free at www.blockracers.online.'] },
        { h: 'What data do we collect from children?', p: ['No personal data. We do not ask children for a name, email address, home address, phone number, photo or date of birth. [LAWYER REVIEW]', '[TBD Daniel: is this true for the whole game, including player name, avatar and saved cars? What data is still stored technically, for example in the browser or on the device?]', '[LAWYER REVIEW: whether technical data such as IP address or device data counts as personal data, and what we must say about it]'] },
        { h: 'What can players do with each other?', p: ['[TBD Daniel: is there chat, are other players online, can players see each other or send messages? Only write what is really true.]', '[LAWYER REVIEW: text about contact between players and safety]'] },
        { h: 'Safety', p: ['We want BlockRacers to be a good place for kids and families. How we do that: [TBD Daniel: for example moderation, filters, reporting]. [LAWYER REVIEW]', 'See something wrong? Tell us at [TBD Daniel: contact].'] },
        { h: 'Purchases and ads', p: ['[TBD Daniel: are there purchases, ads or paid parts in the beta? If yes, how do they work? If no, say so clearly.]', '[LAWYER REVIEW: text about purchases, ads and children]'] },
        { h: 'Cookies and trackers', p: ['[TBD Daniel: does the site or game use cookies, analytics or trackers? Which ones?]', '[LAWYER REVIEW: cookie text and consent]'] },
        { h: 'What can you do as a parent?', ul: ['Play together with your child once.', 'Talk about what your child does online.', 'Questions or worries? Email us: [TBD Daniel: email address].'], p: ['Rights of parents and children, such as access and deletion: [LAWYER REVIEW]'] },
        { h: 'Who is responsible for the data?', p: ['BlockRacers Studio [TBD Daniel: legal name, company registration number, address, country]. [LAWYER REVIEW]', 'Data protection officer or privacy contact: [TBD Daniel]. [LAWYER REVIEW]'] },
        { h: 'Age', p: ['Who is BlockRacers for? [TBD Daniel: age advice or rating, only if one really exists]. [LAWYER REVIEW: age limit and parental consent under the GDPR]'] },
        { h: 'Privacy statement', p: ['Full privacy statement (GDPR): [LAWYER REVIEW: full text to follow from the lawyer]. Draft, not final.'] },
        { h: 'Changes', p: ['This page can change. Last updated: [TBD Daniel: date at publication]. [LAWYER REVIEW]'], gallery: ['02_players_avatars', '08_avatar_creator', '12_phone_driving'] },
      ] },
    } },
  { key: 'studio', slug: { nl: 'studio', en: 'studio' }, menu: { nl: 'BlockRacers Studio', en: 'BlockRacers Studio' }, hero: s('01_hero_street'),
    content: {
      nl: { title: 'BLOCKRACERS STUDIO', sub: 'Wie maakt de game, en waarom.', sections: [
        { h: 'Wie we zijn', p: ['[TBD Daniel: team, namen, foto\'s alleen als Daniel akkoord is]'] },
        { h: 'Ons verhaal', p: ['[TBD Daniel: ons verhaal in 5 regels]'] },
        { h: 'Hoe we games maken', ul: ['We bouwen in kleine stappen.', 'We luisteren naar spelers.'], gallery: ['07_car_builder'] },
        { h: 'Contact', sky: true, p: ['[TBD Daniel: contact]', 'Game: @BlockRacersGame op X en TikTok. Studio: @BlkRacersHub op X en TikTok. Zie ook Pers.'] },
      ] },
      en: { title: 'BLOCKRACERS STUDIO', sub: 'Who makes the game, and why.', sections: [
        { h: 'Who we are', p: ['[TBD Daniel: team, names, photos only if Daniel agrees]'] },
        { h: 'Our story', p: ['[TBD Daniel: our story in 5 lines]'] },
        { h: 'How we make games', ul: ['We build in small steps.', 'We listen to players.'], gallery: ['07_car_builder'] },
        { h: 'Contact', sky: true, p: ['[TBD Daniel: contact]', 'Game: @BlockRacersGame on X and TikTok. Studio: @BlkRacersHub on X and TikTok. See also Press.'] },
      ] },
    } },
  { key: 'education', slug: { nl: 'onderwijs', en: 'education' }, menu: { nl: 'Onderwijs', en: 'Education' }, hero: s('07_car_builder'),
    content: {
      nl: { title: 'ONDERWIJS', sub: 'Past BlockRacers in de klas?', sections: [
        { h: 'Wat kun je ermee als leraar?', p: ['[TBD Daniel: is er schoolgebruik? Alleen echte claims, geen leerresultaten tenzij bevestigd]'], gallery: ['07_car_builder', '10_garage_clean', '11_world_hud_desktop'] },
        { h: 'Wat scholen moeten weten', p: ['Apparaten, accounts en privacy: [TBD Daniel] [LAWYER REVIEW]', 'Zie ook Ouders en privacy.'] },
        { h: 'Contact voor scholen', sky: true, p: ['[TBD Daniel: e-mailadres voor scholen]'] },
      ] },
      en: { title: 'EDUCATION', sub: 'Does BlockRacers fit in class?', sections: [
        { h: 'What can teachers do with it?', p: ['[TBD Daniel: is there school use? Only real claims, no learning outcomes unless confirmed]'], gallery: ['07_car_builder', '10_garage_clean', '11_world_hud_desktop'] },
        { h: 'What schools need to know', p: ['Devices, accounts and privacy: [TBD Daniel] [LAWYER REVIEW]', 'See also Parents and privacy.'] },
        { h: 'Contact for schools', sky: true, p: ['[TBD Daniel: email address for schools]'] },
      ] },
    } },
  { key: 'press', slug: { nl: 'pers', en: 'press' }, menu: { nl: 'Pers', en: 'Press' }, hero: s('04_jet_over_city'),
    content: {
      nl: { title: 'PERS', sub: 'Alles voor journalisten en makers op een plek.', sections: [
        { h: 'Feiten', ul: ['Game: BlockRacers', 'Studio: BlockRacers Studio', 'Beta: www.blockracers.online (gratis beta)', 'Platformen: [TBD Daniel]', 'Releasestatus: [TBD Daniel]'] },
        { h: 'Korte beschrijving', p: ['[TBD Daniel: goedgekeurde korte beschrijving NL]'] },
        { h: 'Perskit', p: ['Logo\'s, screenshots en brand board: [TBD Daniel: downloadpakket]. Logo niet uitrekken, niet herkleuren, geen outlines of effecten.'], gallery: ['01_hero_street', '02_players_avatars', '03_loop_stunt', '04_jet_over_city', '05_jumbo_takeoff', '06_fire_police', '07_car_builder', '08_avatar_creator', '09_start_screen', '10_garage_clean', '11_world_hud_desktop', '12_phone_driving', '13_phone_start'] },
        { h: 'Perscontact', sky: true, p: ['[TBD Daniel: perscontact]', 'Game: @BlockRacersGame op X en TikTok. Studio: @BlkRacersHub op X en TikTok.'] },
      ] },
      en: { title: 'PRESS', sub: 'Everything journalists and creators need in one place.', sections: [
        { h: 'Facts', ul: ['Game: BlockRacers', 'Studio: BlockRacers Studio', 'Beta: www.blockracers.online (free beta)', 'Platforms: [TBD Daniel]', 'Release status: [TBD Daniel]'] },
        { h: 'Short description', p: ['[TBD Daniel: approved short description EN]'] },
        { h: 'Press kit', p: ['Logos, screenshots and brand board: [TBD Daniel: download pack]. Do not stretch, recolour, outline or add effects to the logo.'], gallery: ['01_hero_street', '02_players_avatars', '03_loop_stunt', '04_jet_over_city', '05_jumbo_takeoff', '06_fire_police', '07_car_builder', '08_avatar_creator', '09_start_screen', '10_garage_clean', '11_world_hud_desktop', '12_phone_driving', '13_phone_start'] },
        { h: 'Press contact', sky: true, p: ['[TBD Daniel: press contact]', 'Game: @BlockRacersGame on X and TikTok. Studio: @BlkRacersHub on X and TikTok.'] },
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
