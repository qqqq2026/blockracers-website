// All page copy lives here. Source: website-kit fritz_draft_v1.md (DRAFT).
// Rules: no invented facts, keep [TBD Daniel] and [LAWYER REVIEW] markers visible, no em or en dashes.

export type Lang = 'nl' | 'en';
export type Section = { h: string; p?: string[]; ul?: string[]; gallery?: string[]; sky?: boolean; cta?: boolean; invite?: boolean };
export type Page = { key: string; slug: Record<Lang, string>; menu: Record<Lang, string>; hero: string;
  content: Record<Lang, { title: string; sub: string; sections: Section[] }> };

export const SITE_URL = 'https://www.blockracers.online';
export const BETA_URL = 'https://game.blockracers.online';
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
export const INVITE = {
  nl: { q: 'Hoe oud ben je?', u16: 'Jonger dan 16', o16: '16 of ouder', parent: 'Onder 16: vraag een ouder om dit in te vullen. Alleen het e-mailadres van de ouder.', pmail: 'E-mailadres van je ouder', own: 'Je eigen e-mailadres', btn: 'Aanmelden opent binnenkort' },
  en: { q: 'How old are you?', u16: 'Under 16', o16: '16 or older', parent: 'Under 16: ask a parent to fill this in. Only the parent\'s email address.', pmail: 'Parent\'s email address', own: 'Your own email address', btn: 'Sign-up opens soon' },
};
export const UI = {
  nl: { play: 'SPEEL DE BETA', testers: 'Alleen voor goedgekeurde testers', tagline: 'Bouw. Rijd. Bouw opnieuw.', draft: 'CONCEPT: niet gepubliceerd. Teksten met [TBD Daniel] of [LAWYER REVIEW] zijn niet definitief.', game: 'De game', studio: 'De studio', other: 'English', otherLang: 'en' as Lang },
  en: { play: 'PLAY THE BETA', testers: 'Approved testers only', tagline: 'Build it. Drive it. Build it again.', draft: 'DRAFT: not published. Text marked [TBD Daniel] or [LAWYER REVIEW] is not final.', game: 'The game', studio: 'The studio', other: 'Nederlands', otherLang: 'nl' as Lang },
};

// Prefix a site path with the Astro base ("/" live, "/blockracers-website-preview/" on preview).
export const u = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
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
        { h: 'Later: de Studio', p: ['De Studio krijgt later een eigen plek op studio.blockracers.online. Dit komt later.'] },
        { h: 'Speel de beta', sky: true, cta: true },
      ] },
      en: { title: 'THE GAME', sub: 'Build it. Drive it. Build it again.', sections: [
        { h: 'What do you do?', ul: ['Build your own car.', 'Drive it through the world.', 'Build it again.'] },
        { h: 'The car builder', gallery: ['07_car_builder', '10_garage_clean'] },
        { h: 'Avatar creator', gallery: ['08_avatar_creator', '02_players_avatars'] },
        { h: 'The world', gallery: ['11_world_hud_desktop', '05_jumbo_takeoff', '06_fire_police', '03_loop_stunt'] },
        { h: 'Play together', p: ['There is no chat yet. [TBD Daniel: what players can do together]'] },
        { h: 'Phone and desktop', p: ['[TBD Daniel: platforms]'], gallery: ['12_phone_driving', '13_phone_start', '09_start_screen'] },
        { h: 'Later: the Studio', p: ['The Studio will later get its own home at studio.blockracers.online. This comes later.'] },
        { h: 'Play the beta', sky: true, cta: true },
      ] },
    } },
  { key: 'invite', slug: { nl: 'invite', en: 'invite' }, menu: { nl: 'Invite', en: 'Invite' }, hero: s('03_loop_stunt'),
    content: {
      nl: { title: 'VRAAG EEN INVITE AAN', sub: 'De beta heeft 200 plekken. Wil je testen? Vraag een invite aan.', sections: [
        { h: 'Zo werkt het', p: ['De beta is invite-only en heeft 200 plekken. Daniel keurt invites in groepjes goed. Je krijgt een invite code per e-mail. [DRAFT, WACHT OP DANIEL]'], ul: ['1. Vertel ons je leeftijd.', '2. Onder 16? Dan vraagt een ouder de invite aan, met het e-mailadres van de ouder.', '3. 16 of ouder? Dan geef je alleen je eigen e-mailadres.', 'Meer vragen we niet. Geen naam, geen adres, geen telefoonnummer.'] },
        { h: 'Aanmelden', invite: true, p: ['Aanmelden opent binnenkort. Het formulier verstuurt nog niets. [DRAFT, WACHT OP DANIEL] [LAWYER REVIEW]'] },
        { h: 'Heb je een invite code?', sky: true, p: ['Top! Ga naar game.blockracers.online en maak daar je account. Vul je code in als je je aanmeldt. De game checkt de code. [DRAFT, WACHT OP DANIEL]', 'Een code ziet eruit als BR-XXXX-XXXX. Elke code werkt maar een keer en hoort bij het e-mailadres waarop je de invite kreeg. [DRAFT, WACHT OP DANIEL]'], cta: true },
      ] },
      en: { title: 'REQUEST AN INVITE', sub: 'The beta has 200 spots. Want to test? Request an invite.', sections: [
        { h: 'How it works', p: ['The beta is invite-only and has 200 spots. Daniel approves invites in small batches. You get an invite code by email. [DRAFT, WACHT OP DANIEL]'], ul: ['1. Tell us your age.', '2. Under 16? Then a parent requests the invite, with the parent\'s email address.', '3. 16 or older? Then you only give your own email address.', 'That is all we ask. No name, no address, no phone number.'] },
        { h: 'Sign up', invite: true, p: ['Sign-up opens soon. The form does not send anything yet. [DRAFT, WACHT OP DANIEL] [LAWYER REVIEW]'] },
        { h: 'Got an invite code?', sky: true, p: ['Nice! Go to game.blockracers.online and create your account there. Enter your code when you sign up. The game checks the code. [DRAFT, WACHT OP DANIEL]', 'A code looks like BR-XXXX-XXXX. Each code works only once and belongs to the email address the invite was sent to. [DRAFT, WACHT OP DANIEL]'], cta: true },
      ] },
    } },
  { key: 'account', slug: { nl: 'account', en: 'account' }, menu: { nl: 'Account', en: 'Account' }, hero: s('13_phone_start'),
    content: {
      nl: { title: 'JE ACCOUNT', sub: 'Inloggen, je gegevens en je account verwijderen.', sections: [
        { h: 'Inloggen', ul: ['Vul je e-mailadres in op game.blockracers.online.', 'Je krijgt een code van 6 cijfers per e-mail.', 'Vul de code in. Klaar. Geen wachtwoord nodig.'], p: ['Je hebt een invite code nodig om een account te maken. [DRAFT, WACHT OP DANIEL]'] },
        { h: 'Wat andere spelers zien', p: ['Je bijnaam (max 16 tekens, geen echte naam), je avatar, coins, level en beste tijden. [LAWYER REVIEW]'] },
        { h: 'Account verwijderen', p: ['Er is nog geen verwijderknop in de game. Die komt later.', 'Wil je je account laten verwijderen? Mail naar privacy@blockracers.online. De studio verwerkt je verzoek. We verwijderen dan je profiel, je saves en de meldingen die jij hebt gedaan. [LAWYER REVIEW]', 'Ben je onder 16? Vraag een ouder om te mailen. [LAWYER REVIEW]'] },
      ] },
      en: { title: 'YOUR ACCOUNT', sub: 'Logging in, your data and deleting your account.', sections: [
        { h: 'Logging in', ul: ['Enter your email address at game.blockracers.online.', 'You get a 6-digit code by email.', 'Enter the code. Done. No password needed.'], p: ['You need an invite code to create an account. [DRAFT, WACHT OP DANIEL]'] },
        { h: 'What other players see', p: ['Your nickname (max 16 characters, no real names), your avatar, coins, level and best times. [LAWYER REVIEW]'] },
        { h: 'Delete your account', p: ['There is no delete button in the game yet. It comes later.', 'Want your account deleted? Email privacy@blockracers.online. The studio handles your request. We then delete your profile, your saves and the reports you made. [LAWYER REVIEW]', 'Under 16? Ask a parent to email us. [LAWYER REVIEW]'] },
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
        { h: 'Volgorde', ul: ['1. Beta release', '2. Studio release (komt later op studio.blockracers.online)', '3. Scholen'], p: ['Geen datums. Plannen kunnen veranderen.'] },
        { h: 'Feedback', sky: true, p: ['[TBD Daniel: manieren om feedback te geven]'] },
      ] },
      en: { title: 'ROADMAP', sub: 'What we are working on. Plans can change.', sections: [
        { h: 'Order', ul: ['1. Beta release', '2. Studio release (coming later at studio.blockracers.online)', '3. Schools'], p: ['No dates. Plans can change.'] },
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
        { h: 'Kort en eerlijk', p: ['BlockRacers is een beta. Alleen goedgekeurde testers spelen nu mee. Kinderen bouwen auto\'s en rijden door een blokkenwereld. Zie hieronder wat de game opslaat. [LAWYER REVIEW]'] },
        { h: 'Wat is BlockRacers?', p: ['BlockRacers is een game waarin je je eigen auto bouwt, ermee rijdt en opnieuw bouwt. Bouw. Rijd. Bouw opnieuw. De beta is beperkt en alleen voor goedgekeurde testers.'] },
        { h: 'Welke gegevens slaan we op?', p: ['De game draait op Supabase, in de EU (Frankfurt). [LAWYER REVIEW]'], ul: ['Account: e-mailadres, wanneer je inlogt en technische sessiegegevens.', 'Profiel, zichtbaar voor andere spelers: bijnaam (max 16 tekens, geen echte namen), avatar, coins, level, beste tijden en datums.', 'Saves, alleen voor jou: voortgang, garage, upgrades en instellingen.', 'Meldingen: wie wie meldt, een reden (naam, gedrag, bug, anders), een korte notitie van max 300 tekens, status en datum.', 'Live rijden: je positie gaat live naar andere spelers en wordt niet opgeslagen.'] },
        { h: 'E-mail', p: ['Inlogcodes en invites sturen we per e-mail via Resend. [DRAFT, WACHT OP DANIEL] [LAWYER REVIEW]'] },
        { h: 'Wat kunnen spelers met elkaar doen?', p: ['Samen rijden in de wereld. Alleen ingelogde spelers die niet geblokkeerd zijn door de studio kunnen meedoen. Er is geen vrije chat. [LAWYER REVIEW]'] },
        { h: 'Veiligheid', p: ['Zie je iets wat niet klopt? Meld een speler in de game. Kies een reden: naam, gedrag, bug of anders. De studio bekijkt meldingen en kan spelers verbergen of uitsluiten. [LAWYER REVIEW]'] },
        { h: 'Gegevens laten verwijderen', p: ['Mail naar privacy@blockracers.online. De studio verwijdert je profiel, saves en jouw meldingen. Lees meer op de pagina Account. [LAWYER REVIEW]'] },
        { h: 'Aankopen en reclame', p: ['Er zijn geen aankopen in de game. Je kunt alleen doneren. [TBD Daniel donatielink] Er is geen reclame en geen tracking van derden.', '[LAWYER REVIEW: tekst over aankopen, reclame en kinderen]'] },
        { h: 'Cookies en trackers', p: ['[TBD Daniel: gebruikt de site of game cookies, analytics of trackers? Welke?]', '[LAWYER REVIEW: cookietekst en toestemming]'] },
        { h: 'Wat kun jij als ouder doen?', ul: ['Speel een keer samen met je kind.', 'Praat over wat je kind online doet.', 'Heb je een vraag of zorg? Gebruik het contactformulier. [TBD Daniel] [LAWYER REVIEW]'], p: ['Rechten van ouders en kinderen, zoals inzage en verwijdering: [LAWYER REVIEW]'] },
        { h: 'Wie is verantwoordelijk voor de gegevens?', p: ['BlockRacers Studio, onderdeel van Grachten Holding B.V. [TBD Daniel: KvK-nummer, adres] [LAWYER REVIEW]', 'Functionaris gegevensbescherming of contactpersoon privacy: [TBD Daniel]. [LAWYER REVIEW]'] },
        { h: 'Leeftijd', p: ['Er is nog geen leeftijdsadvies. [TBD Daniel] [LAWYER REVIEW: leeftijdsgrens en toestemming van ouders onder de AVG]'] },
        { h: 'Privacyverklaring', p: ['Volledige privacyverklaring (AVG): [LAWYER REVIEW: volledige tekst volgt van de jurist]. Concept, niet definitief.'] },
        { h: 'Wijzigingen', p: ['Deze pagina kan veranderen. Laatst bijgewerkt: [TBD Daniel: datum bij publicatie]. [LAWYER REVIEW]'], gallery: ['02_players_avatars', '08_avatar_creator', '12_phone_driving'] },
      ] },
      en: { title: 'PARENTS AND PRIVACY', sub: 'You decide what feels safe. We explain it honestly.', sections: [
        { h: 'Short and honest', p: ['BlockRacers is a beta. Only approved testers play right now. Kids build cars and drive through a world made of blocks. See below what the game stores. [LAWYER REVIEW]'] },
        { h: 'What is BlockRacers?', p: ['BlockRacers is a game where you build your own car, drive it and build it again. Build it. Drive it. Build it again. The beta is limited and for approved testers only.'] },
        { h: 'What data do we store?', p: ['The game runs on Supabase, in the EU (Frankfurt). [LAWYER REVIEW]'], ul: ['Account: email address, when you log in and technical session data.', 'Profile, visible to other players: nickname (max 16 characters, no real names), avatar, coins, level, best times and dates.', 'Saves, only for you: progress, garage, upgrades and settings.', 'Reports: who reports whom, a reason (name, behaviour, bug, other), a short note of max 300 characters, status and date.', 'Live driving: your position is sent live to other players and is not stored.'] },
        { h: 'Email', p: ['We send login codes and invites by email through Resend. [DRAFT, WACHT OP DANIEL] [LAWYER REVIEW]'] },
        { h: 'What can players do with each other?', p: ['Drive together in the world. Only logged-in players who are not banned by the studio can join. There is no free chat. [LAWYER REVIEW]'] },
        { h: 'Safety', p: ['See something wrong? Report a player in the game. Pick a reason: name, behaviour, bug or other. The studio reviews reports and can hide or ban players. [LAWYER REVIEW]'] },
        { h: 'Getting data deleted', p: ['Email privacy@blockracers.online. The studio deletes your profile, saves and your reports. Read more on the Account page. [LAWYER REVIEW]'] },
        { h: 'Purchases and ads', p: ['There are no purchases in the game. You can only donate. [TBD Daniel donatielink] There are no ads and no third-party tracking.', '[LAWYER REVIEW: text about purchases, ads and children]'] },
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
        { h: 'Komt later', p: ['De Studio krijgt later een eigen plek op studio.blockracers.online.'] },
        { h: 'Ons verhaal', p: ['[TBD Daniel: ons verhaal in 5 regels]'] },
        { h: 'Hoe we games maken', ul: ['We bouwen in kleine stappen.', 'We luisteren naar spelers.'], gallery: ['07_car_builder'] },
        { h: 'Contact', sky: true, p: ['Via het contactformulier. [TBD Daniel]', 'Game: @BlockRacersGame op X en TikTok. Studio: @BlkRacersHub op X en TikTok. Zie ook Pers.'] },
      ] },
      en: { title: 'BLOCKRACERS STUDIO', sub: 'Who makes the game, and why.', sections: [
        { h: 'Who we are', p: ['People are only shown if they sign up for it. [TBD Daniel]'] },
        { h: 'Coming later', p: ['The Studio will later get its own home at studio.blockracers.online.'] },
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
        { h: 'Feiten', ul: ['Game: BlockRacers', 'Studio: BlockRacers Studio (Grachten Holding B.V.)', 'Website: www.blockracers.online', 'Game (beta): game.blockracers.online, beperkt, alleen goedgekeurde testers', 'Studio: studio.blockracers.online (komt later)', 'Platformen: [TBD Daniel]', 'Releasestatus: beta, alleen werkend om te testen'] },
        { h: 'Korte beschrijving', p: ['[TBD Daniel: goedgekeurde korte beschrijving NL]'] },
        { h: 'Perskit', p: ['Logo\'s, screenshots en brand board: [TBD Daniel: downloadpakket]. Logo niet uitrekken, niet herkleuren, geen outlines of effecten.'], gallery: ['01_hero_street', '02_players_avatars', '03_loop_stunt', '04_jet_over_city', '05_jumbo_takeoff', '06_fire_police', '07_car_builder', '08_avatar_creator', '09_start_screen', '10_garage_clean', '11_world_hud_desktop', '12_phone_driving', '13_phone_start'] },
        { h: 'Perscontact', sky: true, p: ['Via het contactformulier. [TBD Daniel]', 'Game: @BlockRacersGame op X en TikTok. Studio: @BlkRacersHub op X en TikTok.'] },
      ] },
      en: { title: 'PRESS', sub: 'Everything journalists and creators need in one place.', sections: [
        { h: 'Facts', ul: ['Game: BlockRacers', 'Studio: BlockRacers Studio (Grachten Holding B.V.)', 'Website: www.blockracers.online', 'Game (beta): game.blockracers.online, limited, approved testers only', 'Studio: studio.blockracers.online (coming later)', 'Platforms: [TBD Daniel]', 'Release status: beta, only working for testing'] },
        { h: 'Short description', p: ['[TBD Daniel: approved short description EN]'] },
        { h: 'Press kit', p: ['Logos, screenshots and brand board: [TBD Daniel: download pack]. Do not stretch, recolour, outline or add effects to the logo.'], gallery: ['01_hero_street', '02_players_avatars', '03_loop_stunt', '04_jet_over_city', '05_jumbo_takeoff', '06_fire_police', '07_car_builder', '08_avatar_creator', '09_start_screen', '10_garage_clean', '11_world_hud_desktop', '12_phone_driving', '13_phone_start'] },
        { h: 'Press contact', sky: true, p: ['Through the contact form. [TBD Daniel]', 'Game: @BlockRacersGame on X and TikTok. Studio: @BlkRacersHub on X and TikTok.'] },
      ] },
    } },
];

export const href = (lang: Lang, slug: string) => u((lang === 'nl' ? '/' : '/en/') + (slug ? slug + '/' : ''));

// Escape text and wrap [TBD ...] and [LAWYER REVIEW ...] markers in visible badges.
export function mark(t: string): string {
  const esc = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/\[(TBD[^\]]*|LAWYER REVIEW[^\]]*|DRAFT[^\]]*|CHECK BUDDY[^\]]*)\]/g, (_m, inner: string) =>
    `<span class="marker ${inner.startsWith('TBD') ? 'marker--tbd' : inner.startsWith('LAWYER') ? 'marker--lawyer' : 'marker--draft'}">[${inner}]</span>`);
}
