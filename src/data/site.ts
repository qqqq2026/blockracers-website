// All page copy lives here. Source: website-kit fritz_draft_v1.md (DRAFT).
// Rules: no invented facts, keep [TBD Daniel] and markers visible, no em or en dashes.

export type Lang = 'nl' | 'en';
export type Section = { h: string; p?: string[]; ul?: string[]; gallery?: string[]; sky?: boolean; cta?: boolean; invite?: boolean; soon?: boolean; links?: { label: string; href: string }[]; download?: { label: string; href: string } };
export type Page = { key: string; slug: Record<Lang, string>; menu: Record<Lang, string>; hero: string; nav?: boolean;
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
  nl: { btn: 'VRAAG EEN INVITE AAN', note: 'Het formulier opent in de game. Duurt een halve minuut.' },
  en: { btn: 'REQUEST AN INVITE', note: 'The form opens in the game. Takes half a minute.' },
};
export const UI = {
  nl: { play: 'SPEEL DE BETA', testers: 'Invite-only, 200 plekken', tagline: 'Bouw. Rijd. Bouw opnieuw.', colofon: 'BlockRacers Studio is onderdeel van Grachten Holding B.V., KvK 90894502', soon: 'Aanmelden opent binnenkort', draft: 'CONCEPT: niet gepubliceerd. Teksten met markeringen zijn niet definitief.', game: 'De game', studio: 'De studio', other: 'English', otherLang: 'en' as Lang },
  en: { play: 'PLAY THE BETA', testers: 'Invite only, 200 spots', tagline: 'Build it. Drive it. Build it again.', colofon: 'BlockRacers Studio is part of Grachten Holding B.V., KvK 90894502', soon: 'Sign-up opens soon', draft: 'DRAFT: not published. Marked text is not final.', game: 'The game', studio: 'The studio', other: 'Nederlands', otherLang: 'nl' as Lang },
};

// Prefix a site path with the Astro base ("/" live, "/blockracers-website-preview/" on preview).
export const u = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
const s = (n: string) => `/img/screenshots/${n}.png`;

export const PAGES: Page[] = [
  { key: 'home', slug: { nl: '', en: '' }, menu: { nl: 'Home', en: 'Home' }, hero: s('01_hero_street'),
    content: {
      nl: { title: 'BOUW. RIJD. BOUW OPNIEUW.', sub: 'Racen door Parkstad en Beekdaelen, gewoon in je browser.', sections: [
        { h: 'Zo werkt het', ul: ['Maak je avatar.', 'Upgrade je auto in de garage.', 'Rijd door Parkstad en Beekdaelen op echte kaarten.'] },
        { h: 'Features', ul: ['Echte kaarten van Parkstad en Beekdaelen', 'Avatar en garage met upgrades', 'Meerdere races met leaderboard', 'Coins, levels en stuntplekken', 'Verkeer op de weg', 'Live samen rijden met ingelogde spelers'] },
        { h: 'Screenshots', gallery: ['03_loop_stunt', '04_jet_over_city', '02_players_avatars', '10_garage_clean', '12_phone_driving'] },
        { h: 'De beta', sky: true, p: ['BlockRacers is een invite-only beta met 200 plekken. Speel in je browser op telefoon, tablet of computer.'], cta: true },
        { h: 'Laatste devlog', p: ['Speelbare release. Lees meer op de Devlog.'] },
        { h: 'Voor ouders', p: ['Lees hoe we omgaan met veiligheid en privacy op de pagina Ouders en privacy.'] },
      ] },
      en: { title: 'BUILD IT. DRIVE IT. BUILD IT AGAIN.', sub: 'Race through Parkstad and Beekdaelen, right in your browser.', sections: [
        { h: 'How it works', ul: ['Create your avatar.', 'Upgrade your car in the garage.', 'Drive through Parkstad and Beekdaelen on real maps.'] },
        { h: 'Features', ul: ['Real maps of Parkstad and Beekdaelen', 'Avatar and garage with upgrades', 'Multiple races with a leaderboard', 'Coins, levels and stunt spots', 'Traffic on the road', 'Drive live with other logged-in players'] },
        { h: 'Screenshots', gallery: ['03_loop_stunt', '04_jet_over_city', '02_players_avatars', '10_garage_clean', '12_phone_driving'] },
        { h: 'The beta', sky: true, p: ['BlockRacers is an invite-only beta with 200 spots. Play in your browser on phone, tablet or computer.'], cta: true },
        { h: 'Latest devlog', p: ['Playable release. Read more on the Devlog.'] },
        { h: 'For parents', p: ['Read how we handle safety and privacy on the Parents and privacy page.'] },
      ] },
    } },
  { key: 'game', slug: { nl: 'de-game', en: 'the-game' }, menu: { nl: 'De game', en: 'The game' }, hero: s('04_jet_over_city'),
    content: {
      nl: { title: 'DE GAME', sub: 'Rijd. Race. Upgrade. Herhaal.', sections: [
        { h: 'Wat doe je?', ul: ['Rijd door Parkstad en Beekdaelen op echte kaarten, met verkeer.', 'Doe mee aan meerdere races en kom op het leaderboard.', 'Verdien coins, stijg in level en vind stuntplekken.'] },
        { h: 'De garage', p: ['Upgrade je auto in de garage.'], gallery: ['10_garage_clean', '07_car_builder'] },
        { h: 'Avatar maken', gallery: ['08_avatar_creator', '02_players_avatars'] },
        { h: 'De wereld', gallery: ['11_world_hud_desktop', '05_jumbo_takeoff', '06_fire_police', '03_loop_stunt'] },
        { h: 'Samen spelen', p: ['Rij live met andere ingelogde spelers. Er is geen vrije chat, alleen vaste berichten om uit te kiezen.'] },
        { h: 'Inloggen en opslaan', p: ['Log in met je e-mail en wachtwoord. Je voortgang wordt opgeslagen.'] },
        { h: 'Telefoon en desktop', p: ['BlockRacers is een web-app in je browser. Zet hem als icoon op je beginscherm. Touchscreen werkt. Een controller is nog niet getest.'], gallery: ['12_phone_driving', '13_phone_start', '09_start_screen'] },
        { h: 'Later: de Studio', p: ['De Studio komt later op studio.blockracers.online.'] },
        { h: 'Speel de beta', sky: true, cta: true },
      ] },
      en: { title: 'THE GAME', sub: 'Drive. Race. Upgrade. Repeat.', sections: [
        { h: 'What do you do?', ul: ['Drive through Parkstad and Beekdaelen on real maps, with traffic.', 'Join multiple races and get on the leaderboard.', 'Earn coins, level up and find stunt spots.'] },
        { h: 'The garage', p: ['Upgrade your car in the garage.'], gallery: ['10_garage_clean', '07_car_builder'] },
        { h: 'Avatar creator', gallery: ['08_avatar_creator', '02_players_avatars'] },
        { h: 'The world', gallery: ['11_world_hud_desktop', '05_jumbo_takeoff', '06_fire_police', '03_loop_stunt'] },
        { h: 'Play together', p: ['Drive live with other logged-in players. There is no free chat, only set messages to pick from.'] },
        { h: 'Log in and save', p: ['Log in with your email and password. Your progress is saved.'] },
        { h: 'Phone and desktop', p: ['BlockRacers is a web app in your browser. Add it to your home screen as an icon. Touchscreen works. A controller is not tested yet.'], gallery: ['12_phone_driving', '13_phone_start', '09_start_screen'] },
        { h: 'Later: the Studio', p: ['The Studio comes later at studio.blockracers.online.'] },
        { h: 'Play the beta', sky: true, cta: true },
      ] },
    } },
  { key: 'invite', nav: false, slug: { nl: 'invite', en: 'invite' }, menu: { nl: 'Invite', en: 'Invite' }, hero: s('03_loop_stunt'),
    content: {
      nl: { title: 'VRAAG EEN INVITE AAN', sub: 'De beta heeft 200 plekken. Wil je testen? Vraag een invite aan.', sections: [
        { h: 'Zo werkt het', p: ['De beta is invite-only en heeft 200 plekken. We laten spelers in groepjes toe. Ben je aan de beurt, dan krijg je een invite-code per e-mail.'], ul: ['16 of ouder? Je geeft alleen je eigen e-mailadres.', 'Onder 16? Je geeft je eigen e-mailadres en dat van je ouder. De invite gaat naar je ouder, die beslist of je mag meedoen.', 'Meer vragen we niet. Geen naam, geen adres, geen telefoonnummer.'] },
        { h: 'Zet jezelf op de lijst', invite: true, p: ['Je aanmelding wordt veilig opgeslagen in de EU en alleen gebruikt voor je beta-invite.'] },
        { h: 'Heb je een invite-code?', sky: true, p: ['Top! Klik op Speel nu in je invite-mail. Je code en e-mail staan dan al ingevuld. Kies een wachtwoord en klik op Account aanmaken & spelen.', 'Een invite-code ziet eruit als BR-XXXX-XXXX. Elke code werkt maar een keer en hoort bij het e-mailadres waarmee je je aanmeldde.'], cta: true },
      ] },
      en: { title: 'REQUEST AN INVITE', sub: 'The beta has 200 spots. Want to test? Request an invite.', sections: [
        { h: 'How it works', p: ['The beta is invite-only and has 200 spots. We let players in a few at a time. When it is your turn, you get an invite code by email.'], ul: ['16 or older? You only give your own email address.', 'Under 16? You give your own email address and your parent\'s. The invite goes to your parent, who decides if you can join.', 'That is all we ask. No name, no address, no phone number.'] },
        { h: 'Get on the list', invite: true, p: ['Your sign-up is stored securely in the EU and only used for your beta invite.'] },
        { h: 'Got an invite code?', sky: true, p: ['Nice! Click Play now in your invite email. Your code and email are already filled in. Choose a password and click Create account & play.', 'An invite code looks like BR-XXXX-XXXX. Each code works only once and belongs to the email address you signed up with.'], cta: true },
      ] },
    } },
  { key: 'account', nav: false, slug: { nl: 'account', en: 'account' }, menu: { nl: 'Account', en: 'Account' }, hero: s('13_phone_start'),
    content: {
      nl: { title: 'JE ACCOUNT', sub: 'Inloggen, je gegevens en je account verwijderen.', sections: [
        { h: 'Inloggen', ul: ['Ga naar game.blockracers.online.', 'Vul je e-mailadres en wachtwoord in.', 'Wachtwoord vergeten? Klik op Wachtwoord vergeten. Je krijgt een code per e-mail.'], p: ['Nieuw? Je hebt een invite-code nodig. Klik op Speel nu in je invite-mail en kies Account aanmaken & spelen.'] },
        { h: 'Wat andere spelers zien', p: ['Je bijnaam (max 16 tekens, geen echte naam), je avatar, coins, level en beste tijden.'] },
        { h: 'Account verwijderen', p: ['In de game: Start > Gevarenzone > Account verwijderen, bevestig met VERWIJDER. Je profiel, voortgang in de cloud en je meldingen worden direct gewist.', 'Ben je onder 16? Doe het samen met een ouder.'] },
      ] },
      en: { title: 'YOUR ACCOUNT', sub: 'Logging in, your data and deleting your account.', sections: [
        { h: 'Logging in', ul: ['Go to game.blockracers.online.', 'Enter your email address and password.', 'Forgot your password? Click Forgot password. You get a code by email.'], p: ['New? You need an invite code. Click Play now in your invite email and choose Create account & play.'] },
        { h: 'What other players see', p: ['Your nickname (max 16 characters, no real names), your avatar, coins, level and best times.'] },
        { h: 'Delete your account', p: ['In the game: Start > Danger zone > Delete account, confirm with VERWIJDER. Your profile, cloud progress and your reports are deleted right away.', 'Under 16? Do it together with a parent.'] },
      ] },
    } },
  { key: 'devlog', slug: { nl: 'devlog', en: 'devlog' }, menu: { nl: 'Devlog', en: 'Devlog' }, hero: s('01_hero_street'),
    content: {
      nl: { title: 'DEVLOG', sub: 'Eerlijke updates over wat er veranderd is, in korte posts.', sections: [
        { h: 'Speelbare release', p: ['De eerste speelbare versie van BlockRacers staat klaar voor de beta-testers. Rijd door Parkstad en Beekdaelen, upgrade je auto en doe mee aan races.'] },
        { h: 'Mis geen enkele update!', sky: true, p: ['Nieuwe devlogs zie je als eerste op X en TikTok. Volg @BlockRacersGame! Ben je jonger dan 13? Kijk dan samen met je ouder.'], links: SOCIAL.game },
      ] },
      en: { title: 'DEVLOG', sub: 'Honest updates on what changed, in short posts.', sections: [
        { h: 'Playable release', p: ['The first playable version of BlockRacers is ready for beta testers. Drive through Parkstad and Beekdaelen, upgrade your car and join races.'] },
        { h: 'Never miss an update!', sky: true, p: ['You see new devlogs first on X and TikTok. Follow @BlockRacersGame! Under 13? Watch together with a parent.'], links: SOCIAL.game },
      ] },
    } },
  { key: 'roadmap', slug: { nl: 'roadmap', en: 'roadmap' }, menu: { nl: 'Roadmap', en: 'Roadmap' }, hero: s('11_world_hud_desktop'),
    content: {
      nl: { title: 'ROADMAP', sub: 'Waar we aan werken. Plannen kunnen veranderen.', sections: [
        { h: 'Volgorde', ul: ['1. Beta release', '2. Studio release (komt later op studio.blockracers.online)', '3. Scholen'], p: ['Geen datums. Plannen kunnen veranderen.'] },
        { h: 'Feedback', sky: true, p: ['Zie je een bug? Gebruik de meldknop in de game en kies \'bug\'.'] },
      ] },
      en: { title: 'ROADMAP', sub: 'What we are working on. Plans can change.', sections: [
        { h: 'Order', ul: ['1. Beta release', '2. Studio release (coming later at studio.blockracers.online)', '3. Schools'], p: ['No dates. Plans can change.'] },
        { h: 'Feedback', sky: true, p: ['Found a bug? Use the report button in the game and pick \'bug\'.'] },
      ] },
    } },
  { key: 'support', slug: { nl: 'support', en: 'support' }, menu: { nl: 'Support / FAQ', en: 'Support / FAQ' }, hero: s('09_start_screen'),
    content: {
      nl: { title: 'SUPPORT', sub: 'Snel antwoord op je vragen.', sections: [
        { h: 'Is het echt gratis?', p: ['Ja! BlockRacers is gratis en je kunt niets kopen.'] },
        { h: 'Op welke apparaten kan ik spelen?', p: ['In je browser, op telefoon, tablet of computer. Zet de game als icoon op je beginscherm. Touchscreen werkt. Een controller is nog niet getest.'] },
        { h: 'Hoe start ik?', p: ['De beta is invite-only. Vraag een invite aan op de pagina Invite. Ben je aan de beurt? Dan krijg je een mail met je invite-code. Klik op Speel nu, kies een wachtwoord en klik op Account aanmaken & spelen. Daarna log je in met e-mail en wachtwoord. Maak je avatar, check je garage en rijd door Parkstad en Beekdaelen. Je voortgang wordt opgeslagen.'] },
        { h: 'Is het veilig voor mijn kind?', p: ['BlockRacers is gemaakt voor kinderen. Er is geen vrije chat, alleen vaste berichten. Geen reclame en geen trackers van derden. Zie je iets wat niet klopt? Meld het in de game. Meer op Ouders en privacy.'] },
        { h: 'Hoe meld ik een bug?', p: ['Gebruik de meldknop in de game en kies \'bug\'.'], gallery: ['09_start_screen', '13_phone_start'] },
      ] },
      en: { title: 'SUPPORT', sub: 'Quick answers to your questions.', sections: [
        { h: 'Is it really free?', p: ['Yes! BlockRacers is free and there is nothing to buy.'] },
        { h: 'Which devices can I play on?', p: ['In your browser, on phone, tablet or computer. Add the game to your home screen as an icon. Touchscreen works. A controller is not tested yet.'] },
        { h: 'How do I start?', p: ['The beta is invite-only. Request an invite on the Invite page. Your turn? Then you get an email with your invite code. Click Play now, choose a password and click Create account & play. After that you log in with email and password. Create your avatar, check your garage and drive through Parkstad and Beekdaelen. Your progress is saved.'] },
        { h: 'Is it safe for my child?', p: ['BlockRacers is made for kids. There is no free chat, only set messages. No ads and no third-party trackers. See something wrong? Report it in the game. More on Parents and privacy.'] },
        { h: 'How do I report a bug?', p: ['Use the report button in the game and pick \'bug\'.'], gallery: ['09_start_screen', '13_phone_start'] },
      ] },
    } },
  { key: 'parents', slug: { nl: 'ouders-en-privacy', en: 'parents-and-privacy' }, menu: { nl: 'Ouders en privacy', en: 'Parents and privacy' }, hero: s('02_players_avatars'),
    content: {
      nl: { title: 'OUDERS EN PRIVACY', sub: 'Jij bepaalt wat veilig voelt. Wij leggen het eerlijk uit.', sections: [
        { h: 'Kort en eerlijk', p: ['BlockRacers is een invite-only beta voor 8+. Spelers rijden door Parkstad en Beekdaelen, racen en upgraden hun auto. Geen vrije chat, geen reclame, geen trackers van derden.'] },
        { h: 'Welke gegevens slaan we op?', p: ['De game draait op Supabase, in de EU (Frankfurt).'], ul: ['Account: e-mailadres, wanneer je inlogt en technische sessiegegevens.', 'Profiel, zichtbaar voor andere spelers: bijnaam (max 16 tekens, geen echte namen), avatar, coins, level, beste tijden en datums.', 'Saves, alleen voor jou: voortgang, garage, upgrades en instellingen.', 'Meldingen: wie wie meldt, een reden (naam, gedrag, bug, anders), een korte notitie van max 300 tekens, status en datum.', 'Live rijden: je positie gaat live naar andere spelers en wordt niet opgeslagen.'] },
        { h: 'Aanmelden voor een invite', p: ['We bewaren je e-mailadres en je toestemming. Onder 16 ook het e-mailadres van je ouder, want de invite gaat naar de ouder. Alleen voor de beta-invite, opgeslagen in de EU. Verwijder je je account, dan wissen we ook je aanmelding.'] },
        { h: 'E-mail', p: ['Invites en codes voor Wachtwoord vergeten sturen we per e-mail via Resend.'] },
        { h: 'Wat kunnen spelers met elkaar doen?', p: ['Samen rijden in de wereld. Alleen ingelogde spelers die niet zijn uitgesloten door de studio kunnen meedoen. Er is geen vrije chat, alleen vaste berichten om uit te kiezen.'] },
        { h: 'Veiligheid', p: ['Zie je iets wat niet klopt? Meld een speler in de game. Kies een reden: naam, gedrag, bug of anders. De studio bekijkt meldingen en kan spelers verbergen of uitsluiten.'] },
        { h: 'Gegevens verwijderen', p: ['In de game: Start > Gevarenzone > Account verwijderen, bevestig met VERWIJDER. Je profiel, voortgang in de cloud en je meldingen worden direct gewist. Zie de pagina Account.'] },
        { h: 'Aankopen en reclame', p: ['Er zijn geen aankopen in de game. Geen reclame en geen trackers van derden.'] },
        { h: 'Cookies en trackers', p: ['Deze website gebruikt geen analytics en geen trackers van derden.'] },
        { h: 'Wat kun jij als ouder doen?', ul: ['Speel een keer samen met je kind.', 'Praat over wat je kind online doet.', 'Zie je iets vervelends? Meld het in de game.'], p: ['Wil je je gegevens inzien of laten verwijderen? Verwijder je account in de game.'] },
        { h: 'Wie is verantwoordelijk?', p: ['BlockRacers Studio is onderdeel van Grachten Holding B.V., KvK 90894502.'] },
        { h: 'Leeftijd', p: ['Leeftijdsadvies: 8+. Onder 16 gaat de invite naar een ouder, die beslist.'] },
        { h: 'Privacyverklaring', p: ['Volledige privacyverklaring (AVG): komt later. Concept, niet definitief.'] },
        { h: 'Wijzigingen', p: ['Deze pagina kan veranderen. Laatst bijgewerkt: 21 oktober 2026.'], gallery: ['02_players_avatars', '08_avatar_creator', '12_phone_driving'] },
      ] },
      en: { title: 'PARENTS AND PRIVACY', sub: 'You decide what feels safe. We explain it honestly.', sections: [
        { h: 'Short and honest', p: ['BlockRacers is an invite-only beta for ages 8+. Players drive through Parkstad and Beekdaelen, race and upgrade their car. No free chat, no ads, no third-party trackers.'] },
        { h: 'What data do we store?', p: ['The game runs on Supabase, in the EU (Frankfurt).'], ul: ['Account: email address, when you log in and technical session data.', 'Profile, visible to other players: nickname (max 16 characters, no real names), avatar, coins, level, best times and dates.', 'Saves, only for you: progress, garage, upgrades and settings.', 'Reports: who reports whom, a reason (name, behaviour, bug, other), a short note of max 300 characters, status and date.', 'Live driving: your position is sent live to other players and is not stored.'] },
        { h: 'Signing up for an invite', p: ['We store your email address and your consent. Under 16 also your parent\'s email address, because the invite goes to the parent. Only for the beta invite, stored in the EU. Delete your account and we delete your sign-up too.'] },
        { h: 'Email', p: ['We send invites and Forgot password codes by email through Resend.'] },
        { h: 'What can players do with each other?', p: ['Drive together in the world. Only logged-in players who are not banned by the studio can join. There is no free chat, only set messages to pick from.'] },
        { h: 'Safety', p: ['See something wrong? Report a player in the game. Pick a reason: name, behaviour, bug or other. The studio reviews reports and can hide or ban players.'] },
        { h: 'Deleting data', p: ['In the game: Start > Danger zone > Delete account, confirm with VERWIJDER. Your profile, cloud progress and your reports are deleted right away. See the Account page.'] },
        { h: 'Purchases and ads', p: ['There are no purchases in the game. No ads and no third-party trackers.'] },
        { h: 'Cookies and trackers', p: ['This website uses no analytics and no third-party trackers.'] },
        { h: 'What can you do as a parent?', ul: ['Play together with your child once.', 'Talk about what your child does online.', 'See something bad? Report it in the game.'], p: ['Want to see or delete your data? Delete your account in the game.'] },
        { h: 'Who is responsible?', p: ['BlockRacers Studio is part of Grachten Holding B.V., KvK 90894502.'] },
        { h: 'Age', p: ['Age advice: 8+. Under 16, the invite goes to a parent, who decides.'] },
        { h: 'Privacy statement', p: ['Full privacy statement (GDPR): coming later. Draft, not final.'] },
        { h: 'Changes', p: ['This page can change. Last updated: 21 October 2026.'], gallery: ['02_players_avatars', '08_avatar_creator', '12_phone_driving'] },
      ] },
    } },
  { key: 'studio', slug: { nl: 'studio', en: 'studio' }, menu: { nl: 'BlockRacers Studio', en: 'BlockRacers Studio' }, hero: s('01_hero_street'),
    content: {
      nl: { title: 'BLOCKRACERS STUDIO', sub: 'Straks bouw je je eigen levels.', sections: [
        { h: 'Komt later', p: ['De Studio komt later op studio.blockracers.online. Daar bouw je je eigen levels.'] },
        { h: 'Wie we zijn', p: ['Mensen tonen we alleen als ze zich aanmelden. Aanmelden opent binnenkort.'], soon: true },
        { h: 'Hoe we games maken', ul: ['We bouwen in kleine stappen.', 'We luisteren naar spelers.'], gallery: ['07_car_builder'] },
        { h: 'Volg ons', sky: true, p: ['Game: @BlockRacersGame. Studio: @BlkRacersHub. Op X en TikTok.'], links: [...SOCIAL.game, ...SOCIAL.studio] },
      ] },
      en: { title: 'BLOCKRACERS STUDIO', sub: 'Soon you build your own levels.', sections: [
        { h: 'Coming later', p: ['The Studio comes later at studio.blockracers.online. That is where you build your own levels.'] },
        { h: 'Who we are', p: ['We only show people who sign up for it. Sign-up opens soon.'], soon: true },
        { h: 'How we make games', ul: ['We build in small steps.', 'We listen to players.'], gallery: ['07_car_builder'] },
        { h: 'Follow us', sky: true, p: ['Game: @BlockRacersGame. Studio: @BlkRacersHub. On X and TikTok.'], links: [...SOCIAL.game, ...SOCIAL.studio] },
      ] },
    } },
  { key: 'education', slug: { nl: 'onderwijs', en: 'education' }, menu: { nl: 'Onderwijs', en: 'Education' }, hero: s('07_car_builder'),
    content: {
      nl: { title: 'ONDERWIJS', sub: 'BlockRacers in de klas.', sections: [
        { h: 'Komt later', p: ['BlockRacers voor scholen komt later, na de beta en de studio release.'], gallery: ['10_garage_clean', '11_world_hud_desktop'] },
      ] },
      en: { title: 'EDUCATION', sub: 'BlockRacers in class.', sections: [
        { h: 'Coming later', p: ['BlockRacers for schools comes later, after the beta and the studio release.'], gallery: ['10_garage_clean', '11_world_hud_desktop'] },
      ] },
    } },
  { key: 'press', slug: { nl: 'pers', en: 'press' }, menu: { nl: 'Pers', en: 'Press' }, hero: s('04_jet_over_city'),
    content: {
      nl: { title: 'PERS', sub: 'Alles voor journalisten en makers op een plek.', sections: [
        { h: 'Feiten', ul: ['Game: BlockRacers', 'Studio: BlockRacers Studio (Grachten Holding B.V., KvK 90894502)', 'Website: www.blockracers.online', 'Game (beta): game.blockracers.online, invite-only, 200 testers', 'Studio: studio.blockracers.online (komt later)', 'Platform: browser (web-app), telefoon, tablet en computer', 'Leeftijdsadvies: 8+'] },
        { h: 'Korte beschrijving', p: ['BlockRacers is een gratis 3D-racegame in je browser van BlockRacers Studio. Rijd door Parkstad en Beekdaelen op echte kaarten, met verkeer. Maak je avatar, upgrade je auto in de garage, verdien coins en vind stuntplekken. Stijg in level en doe mee aan meerdere races met leaderboard. Rijd live met andere ingelogde spelers. Inloggen gaat met e-mail en wachtwoord en je voortgang wordt opgeslagen. Zet de game op je beginscherm, touch werkt. Geen reclame, geen trackers van derden, geen vrije chat maar vaste berichten, en een meldfunctie. Nu in een invite-only beta voor 200 testers.'] },
        { h: 'Perskit', p: ['Logo\'s en echte screenshots in een zip. Logo niet uitrekken, niet herkleuren, geen outlines of effecten.'], download: { label: 'Download perskit (zip)', href: '/press/blockracers_presskit.zip' }, gallery: ['01_hero_street', '02_players_avatars', '03_loop_stunt', '04_jet_over_city', '05_jumbo_takeoff', '06_fire_police', '07_car_builder', '08_avatar_creator', '09_start_screen', '10_garage_clean', '11_world_hud_desktop', '12_phone_driving', '13_phone_start'] },
        { h: 'Volg ons', sky: true, p: ['Game: @BlockRacersGame. Studio: @BlkRacersHub. Op X en TikTok.'], links: [...SOCIAL.game, ...SOCIAL.studio] },
      ] },
      en: { title: 'PRESS', sub: 'Everything journalists and creators need in one place.', sections: [
        { h: 'Facts', ul: ['Game: BlockRacers', 'Studio: BlockRacers Studio (Grachten Holding B.V., KvK 90894502)', 'Website: www.blockracers.online', 'Game (beta): game.blockracers.online, invite-only, 200 testers', 'Studio: studio.blockracers.online (coming later)', 'Platform: browser (web app), phone, tablet and computer', 'Age advice: 8+'] },
        { h: 'Short description', p: ['BlockRacers is a free 3D racing game in your browser by BlockRacers Studio. Drive through Parkstad and Beekdaelen on real maps, with traffic. Create your avatar, upgrade your car in the garage, earn coins and find stunt spots. Level up and join multiple races with a leaderboard. Drive live with other logged-in players. Log in with email and password and your progress is saved. Add the game to your home screen, touch works. No ads, no third-party trackers, no free chat but set messages, and a report function. Now in an invite-only beta for 200 testers.'] },
        { h: 'Press kit', p: ['Logos and real screenshots in one zip. Do not stretch, recolour, outline or add effects to the logo.'], download: { label: 'Download press kit (zip)', href: '/press/blockracers_presskit.zip' }, gallery: ['01_hero_street', '02_players_avatars', '03_loop_stunt', '04_jet_over_city', '05_jumbo_takeoff', '06_fire_police', '07_car_builder', '08_avatar_creator', '09_start_screen', '10_garage_clean', '11_world_hud_desktop', '12_phone_driving', '13_phone_start'] },
        { h: 'Follow us', sky: true, p: ['Game: @BlockRacersGame. Studio: @BlkRacersHub. On X and TikTok.'], links: [...SOCIAL.game, ...SOCIAL.studio] },
      ] },
    } },
];

export const href = (lang: Lang, slug: string) => u((lang === 'nl' ? '/' : '/en/') + (slug ? slug + '/' : ''));

// Escape text and wrap [TBD ...] and markers in visible badges.
export function mark(t: string): string {
  const esc = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/\[(TBD[^\]]*|LAWYER REVIEW[^\]]*|DRAFT[^\]]*|CHECK BUDDY[^\]]*)\]/g, (_m, inner: string) =>
    `<span class="marker ${inner.startsWith('TBD') ? 'marker--tbd' : inner.startsWith('LAWYER') ? 'marker--lawyer' : 'marker--draft'}">[${inner}]</span>`);
}
