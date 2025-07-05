const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

document.querySelectorAll('.dropdown-content button').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        console.log('Gekozen taal:', lang);
        alert('Taal geselecteerd: ' + lang);
    });
});

const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
}

const translations = {
    nl: {
        home: "Home",
        mission: "Missie",
        events: "Events",
        about: "Over ons",
        contact: "Tickets/Contact",
        welcome1: "Welkom,",
        welcome2: "bij de",
        welcome3: "De STrooperij",
        missionTitle: "Missie",
        event2register3x3: "🏀Inschrijven 3x3",
        missionIntro: "De STrooperij is een vriendengroep met elk hun eigen talenten. We organiseren unieke evenementen in onze geboortestad DieST, met als missie: mensen samenbrengen rond urban sports en cultuur. Sinds de eerste edities van Summer Jam (2002-2007) in het Warandepark, is de passie voor street culture altijd blijven leven. In 2018 bliezen we het concept nieuw leven in, en met groot succes, want in 2023 kregen we de Publieksprijs van de Cultuurraad van DieST. Het draait om creativiteit, sport, muziek, en verbinding – voor jong en oud.",
        sportTitle: "Sport",
        sportText: "Van skatecontest en 3x3 basketbal tot freerunning en street workouts – sport is een vaste waarde bij elk event van De STrooperij. Lokale verenigingen zoals de Diestse Sharks en skaters nemen het voortouw in de organisatie. Bewegen, samenwerken en samen genieten.",
        artTitle: "Kunst",
        artText: "Graffiti-jams en live painting vormen een artistieke rode draad. Lokale kunstenaars krijgen een platform om hun creativiteit te tonen en jongeren worden aangemoedigd om te experimenteren. De STrooperij inspireert met kleur en expressie.",
        musicTitle: "Muziek",
        musicText: "Beats, livemuziek en DJ-sets brengen elk event tot leven. Tijdens Silent Disco en andere evenementen krijgen ook jonge, opkomende talenten een podium. De STrooperij gelooft in de kracht van muziek om mensen te verbinden.",
        eventsTitle: "EVENTS",
        event1Title: "Total Loods",
        event1Date: "april 2025",
        event1Text: "Op de site van de Citadel organiseert De STrooperij opnieuw Total Loods: een dag vol workshops en activiteiten, gevolgd door een avond met een silent disco (drie genres). Jonge DJ’s krijgen een kans op het podium. De toegang is gratis – enkel de hoofdtelefoon betaal je zelf.",
        event2Title: "Summer Jam",
        event2Date: "augustus 2025",
        event2Text: "Terug in het Warandepark – de thuisbasis – brengt Summer Jam opnieuw een dag vol urban sports en muziek. Verwacht een skatecontest, graffiti-jam, 3on3 basketbal, breakdance, freerunning en kinderanimatie. ’s Avonds sluiten we af met een spectaculaire liveshow in het amfitheater.",
        event3Title: "Barbecrew",
        event3Date: "september 2025",
        event3Text: "Een jaarlijks dankfeest voor alle vrijwilligers en sponsors van De STrooperij. Want zonder hen zou dit alles niet mogelijk zijn. Barbecrew draait om gezelligheid, dankbaarheid, en verbondenheid.",
        event4Title: "Meer dan events",
        event4Date: "Doorlopend en overal",
        event4Text: "De STrooperij denkt verder dan events. Zo helpen we mee aan de renovatie van de Citadel en ondersteunen we creatieve jongeren via TEXTUUR – een loods aan de Nijverheidslaan die dienstdoet als creatieve uitvalsbasis. Hier kunnen jongeren muziek maken, creëren en experimenteren.",
        aboutTitle: "Over ons",
        aboutSubtitle: "De CREW",
        aboutText: "De STrooperij begon als een vriendengroep met een passie voor hun stad DieST. Doorheen de jaren groeide het collectief uit tot een vzw die cultuur en sport toegankelijk maakt voor iedereen. Dankzij de steun van vrijwilligers, verenigingen, sponsors en de stad Diest blijft hun impact groeien. Het draait om kansen geven, samenwerken, en bouwen aan een warme, creatieve community.",
        contactTitle: "Tickets/Contact",
        ticketTitle: "Tickets",
        ticketText: "Koop hier",
        emailTitle: "Email",
        emailText: "DeStrooperij@gmail.com",
        volunteerTitle: "Vrijwilligers",
        volunteerText: "Wil je meehelpen op ons volgende event?",
        footerText: "Gemaakt door Tom Lamers – 2025"
    },
    en: {
        home: "Home",
        mission: "Mission",
        events: "Events",
        about: "About us",
        contact: "Tickets/Contact",
        welcome1: "Welcome,",
        welcome2: "to the",
        welcome3: "De STrooperij",
        missionTitle: "Mission",
        event2register3x3: "🏀Register 3x3",
        missionIntro: "De STrooperij is a group of friends, each with their own talents. We organize unique events in our hometown DieST with one mission: bringing people together through urban sports and culture. Since the early editions of Summer Jam (2002–2007) in Warande Park, our passion for street culture has never faded. In 2018, we revived the concept with great success – in 2023 we won the Audience Award from DieST’s Culture Council. It's all about creativity, sports, music, and connection – for young and old.",
        sportTitle: "Sports",
        sportText: "From skate contests and 3x3 basketball to freerunning and street workouts – sports are a staple at every De STrooperij event. Local organizations like the Diest Sharks and skaters take the lead in planning. Movement, collaboration, and shared fun.",
        artTitle: "Art",
        artText: "Graffiti jams and live painting are an artistic common thread. Local artists are given a platform to showcase their creativity, and young people are encouraged to experiment. De STrooperij inspires with color and expression.",
        musicTitle: "Music",
        musicText: "Beats, live music, and DJ sets bring every event to life. During Silent Disco and other events, young, emerging talents also get their moment on stage. De STrooperij believes in the power of music to connect people.",
        eventsTitle: "EVENTS",
        event1Title: "Total Loods",
        event1Date: "April, 2025",
        event1Text: "At the Citadel site, De STrooperij presents another edition of Total Loods: a day full of workshops and activities, followed by an evening Silent Disco (three genres). Young DJs get their time in the spotlight. Entry is free – you only pay for the headphones.",
        event2Title: "Summer Jam",
        event2Date: "August, 2025",
        event2Text: "Back in Warande Park – our home base – Summer Jam brings another day of urban sports and music. Expect a skate contest, graffiti jam, 3-on-3 basketball, breakdance, freerunning, and kids entertainment. In the evening, we wrap up with a spectacular live show in the amphitheater.",
        event3Title: "Barbecrew",
        event3Date: "September, 2025",
        event3Text: "An annual thank-you party for all the volunteers and sponsors of De STrooperij. Because none of this would be possible without them. Barbecrew is all about fun, gratitude, and connection.",
        event4Title: "More than events",
        event4Date: "Ongoing and everywhere",
        event4Text: "De STrooperij thinks beyond events. We contribute to the renovation of the Citadel and support creative youth through TEXTUUR – a warehouse on Nijverheidslaan that serves as a creative base. Here, young people can make music, create, and experiment.",
        aboutTitle: "About us",
        aboutSubtitle: "The CREW",
        aboutText: "De STrooperij started as a group of friends with a passion for their city, DieST. Over the years, the collective has grown into a non-profit organization making culture and sports accessible to all. Thanks to the support of volunteers, associations, sponsors, and the city of DieST, their impact continues to grow. It's about creating opportunities, working together, and building a warm, creative community.",
        contactTitle: "Tickets/Contact",
        ticketTitle: "Tickets",
        ticketText: "Buy here",
        emailTitle: "Email",
        emailText: "DeStrooperij@gmail.com",
        volunteerTitle: "Volunteers",
        volunteerText: "Want to help out at our next event?",
        footerText: "Built by Tom Lamers – 2025"
    },
    fr: {
        home: "Accueil",
        mission: "Mission",
        events: "Événements",
        about: "À propos",
        contact: "Tickets/Contact",
        welcome1: "Bienvenue,",
        welcome2: "chez",
        welcome3: "De STrooperij",
        missionTitle: "Mission",
        event2register3x3: "🏀Inscription 3x3",
        missionIntro: "De STrooperij est un groupe d’amis, chacun avec ses propres talents. Nous organisons des événements uniques dans notre ville natale de DieST avec une mission : rassembler les gens autour des sports urbains et de la culture. Depuis les premières éditions de Summer Jam (2002–2007) au parc Warande, notre passion pour la culture urbaine n’a jamais cessé. En 2018, nous avons relancé le concept avec grand succès – en 2023, nous avons reçu le Prix du Public du Conseil de la Culture de DieST. Il s'agit de créativité, de sport, de musique et de connexion – pour les jeunes et les moins jeunes.",
        sportTitle: "Sport",
        sportText: "Des concours de skate et du basket 3x3 au freerun et aux entraînements de rue – le sport est une valeur sûre lors de chaque événement de De STrooperij. Des associations locales comme les Diest Sharks et des skateurs prennent les devants dans l’organisation. Bouger, collaborer et profiter ensemble.",
        artTitle: "Art",
        artText: "Jams de graffiti et les performances de peinture en direct forment un fil conducteur artistique. Les artistes locaux disposent d’une plateforme pour montrer leur créativité, et les jeunes sont encouragés à expérimenter. De STrooperij inspire avec des couleurs et de l’expression.",
        musicTitle: "Musique",
        musicText: "Beats, la musique live et des DJ sets donnent vie à chaque événement. Lors de la Silent Disco et d'autres événements, de jeunes talents émergents montent également sur scène. De STrooperij croit au pouvoir de la musique pour rassembler les gens.",
        eventsTitle: "ÉVÉNEMENTS",
        event1Title: "Total Loods",
        event1Date: "avril 2025",
        event1Text: "Sur le site de la Citadelle, De STrooperij organise une nouvelle édition de Total Loods : une journée pleine d'ateliers et d'activités, suivie d'une soirée Silent Disco (trois styles). De jeunes DJ auront l'occasion de se produire. L'entrée est gratuite – seul le casque est à votre charge.",
        event2Title: "Summer Jam",
        event2Date: "août 2025",
        event2Text: "De retour au parc Warande – notre base – le Summer Jam propose à nouveau une journée de sports urbains et de musique. Attendez-vous à un concours de skate, un graffiti jam, du basket 3 contre 3, du breakdance, du freerun et des animations pour enfants. La soirée se termine par un show spectaculaire dans l’amphithéâtre.",
        event3Title: "Barbecrew",
        event3Date: "septembre 2025",
        event3Text: "Une fête annuelle pour remercier tous les bénévoles et sponsors de De STrooperij. Car sans eux, rien de tout cela ne serait possible. Barbecrew, c’est la convivialité, la gratitude et la solidarité.",
        event4Title: "Plus que des événements",
        event4Date: "En continu et partout",
        event4Text: "De STrooperij va plus loin que les événements. Nous participons à la rénovation de la Citadelle et soutenons les jeunes créatifs via TEXTUUR – un entrepôt situé rue de l’Industrie servant de base créative. Les jeunes peuvent y faire de la musique, créer et expérimenter.",
        aboutTitle: "À propos",
        aboutSubtitle: "La CREW",
        aboutText: "De STrooperij a commencé comme un groupe d’amis passionnés par leur ville, DieST. Au fil des années, le collectif est devenu une ASBL qui rend la culture et le sport accessibles à tous. Grâce au soutien des bénévoles, des associations, des sponsors et de la ville de DieST, leur impact ne cesse de croître. Il s’agit de donner des opportunités, de collaborer, et de construire une communauté chaleureuse et créative.",
        contactTitle: "Tickets/Contact",
        ticketTitle: "Tickets",
        ticketText: "Achetez ici",
        emailTitle: "Email",
        emailText: "DeStrooperij@gmail.com",
        volunteerTitle: "Bénévoles",
        volunteerText: "Envie de nous aider lors de notre prochain événement ?",
        footerText: "Créé par Tom Lamers – 2025"
    }
};

// Functie om de video-popup te openen met de juiste video
function openVideoModal(videoPath) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("eventVideo");
    const source = document.getElementById("videoSource");

    source.src = videoPath;
    video.load();
    modal.style.display = "flex";
    video.play();
}

// Functie om de video-popup te sluiten
function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("eventVideo");

    video.pause();
    modal.style.display = "none";
}
