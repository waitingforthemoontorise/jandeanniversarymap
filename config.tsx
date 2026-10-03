import { LocationData } from "./types";

// ============================================
// CUSTOMIZE: Edit all your text content here!
// ============================================

// Header text (shown at top of page)
export const HEADER_EMOJI = "🌍";
export const HEADER_TITLE = "Our Adventures Around the World";
export const HEADER_SUBTITLE =
  "Click markers to see our memories & plans • Drag to pan";

// Intro overlay (welcome screen)
export const INTRO_EMOJI = "🌍";
export const INTRO_TITLE = "Our Travel Map";
export const INTRO_DESCRIPTION =
  "Explore all the special places we've visited together. Click on the heart markers to see our memories from each location!";
export const INTRO_STATS_SUFFIX = "places"; // Will show as "X places"
export const INTRO_BUTTON_TEXT = "View Map";
export const INTRO_EMOJIS = ["🏠", "✈️", "🏖️", "🍕", "🥂"];

// Sidebar (location list)
export const SIDEBAR_TITLE = "The Itinerary";
export const SIDEBAR_PIN_EMOJI = "📍";

// Side panel (location details)
export const PANEL_GALLERY_TITLE = "Photos";
export const PANEL_NO_PHOTOS_EMOJI = "📸";
export const PANEL_NO_PHOTOS_TEXT = "No photos added yet";

// Mobile instructions
export const MOBILE_INSTRUCTIONS = "Tap markers to view";

// ============================================
// CUSTOMIZE: Add your own locations below!
// ============================================
// Each location needs: id, name, coords [lat, lng], date, story, images array, and type
export const LOCATIONS: LocationData[] = [
  {
    id: "our first date",
    name: "Volcano Hot Pot",
    coords: [30.4646267, -84.2709240],
    date: "September 13, 2024",
    story: "our first date where you definitely could hear me and we were both still straight",
    images: ["/images/map first date webp.webp"],
  },
  {
    id: "my old apartment",
    name: "My Old Apartment",
    coords: [30.446699, -84.281204],
    date: "September 22, 2024-May 3, 2025",
    story: "where we shared our first kiss, i asked you to be my girlfriend, we told each other that we loved each other for the first time, etc.",
    images: ["/images/industrywebp.webp"],
  },
  {
    id: "aurora",
    name: "Shell Point Beach",
    coords: [30.058099, -84.291489],
    date: "October 11, 2024",
    story: "our aurora date",
    images: ["/images/aurorawebp.webp"],
  },
  {
    id: "our first party together",
    name: "Our First Party Together",
    coords: [30.432478, -84.309903],
    date: "October 13, 2024",
    story: "team alice",
    images: ["/images/wonkytownwebp.webp"],
  },
  {
    id: "ind-classroom",
    name: "Interior Design Classroom",
    coords: [30.438535, -84.322386],
    date: "October 28, 2024",
    story: "where I realized I was in love with you",
    images: ["/images/ind-classroomwebp.webp"],
  },
  {
    id: "i-hope",
    name: "IHope",
    coords: [30.470439, -84.287991],
    date: "October 31, 2024",
    story: "our first date after we told each other we loved eachother",
    images: ["/images/ihopewebp.webp"],
  },
  {
    id: "first-roadtrip",
    name: "Rosemary Beach",
    coords: [30.279267, -86.016643],
    date: "January 19, 2025",
    story: "our first roadtrip together",
    images: ["/images/rosemary-beachwebp.webp"],
  },
  {
    id: "snow-day",
    name: "Snow Day",
    coords: [30.441549, -84.294296],
    date: "January 22, 2025",
    story: "spent the summer having fun (first time seeing snow together)",
    images: ["/images/snow-daywebp.webp"]
  },
  {
    id: "tally-cat-cafe",
    name: "Tally Cat Cafe",
    coords: [30.469497, -84.288922],
    date: "February 5, 2025",
    story: "where we met our farter and celebrated our four months",
    images: ["/images/tally-cat-cafewebp.webp"],
  },
  {
    id: "dune-allen-beach",
    name: "Dune Allen Beach",
    coords: [30.352236, -86.252316],
    date: "June 23, 2025",
    story: "my favorite sunset date with you",
    images: ["/images/dune-allen-sunsetwebp.webp"],
  },
  {
    id: "vintage-lake-mary",
    name: "Vintage Lake Mary",
    coords: [28.787304, -81.345651],
    date: "August 30, 2025",
    story: "my first sanford apartment where we celebrated our one year + your 21st and my 22nd bday, baked, shared my favorite time slow dancing together, etc.",
    images: ["/images/vintagewebp.webp"],
  },
  {
    id: "stardust",
    name: "Stardust Video and Coffee",
    coords: [28.568368, -81.346480],
    date: "August 31, 2025",
    story: "where we took our first photobooth pictures together",
    images: ["/images/stardustwebp.webp"],
  },
  {
    id: "lotte-market",
    name: "Lotte Market",
    coords: [28.554781, -81.414991],
    date: "August 31, 2025",
    story: "i felt my face light up as i watched you get excited about everything and then you became jungkook and i fell even more in love",
    images: ["/images/lotte marketwebp.webp"],
  },
  {
    id: "morse-museum",
    name: "Morse Museum",
    coords: [28.600791, -81.351281],
    date: "October 4, 2025",
    story: "our one year date where i crode because heart so full of love",
    images: ["/images/morsewebp.webp"],
  },
  {
    id: "palate",
    name: "Palate Coffee Brewery",
    coords: [28.810704, -81.268445],
    date: "October 5, 2025",
    story: "our go to coffee shop in sanford",
    images: ["/images/palatewebp.webp"],
  },
  {
    id: "sea-life",
    name: "Sea Life",
    coords: [28.443160, -81.468609],
    date: "October 26, 2025",
    story: "our first aquarium date + where we celebrated your 21st",
    images: ["/images/sea lifewebp.webp"],
  },
  {
    id: "926",
    name: "926 Bar and Grill",
    coords: [30.464253, -84.298030],
    date: "October 31, 2025",
    story: "our first time going out together when we're both 21 + my favorite time & our first drag show together",
    images: ["/images/tallyweenwebp.webp"],
  },
  {
    id: "lantern-festival",
    name: "Asian Lantern Festival",
    coords: [28.825113, -81.312838],
    date: "January 18, 2026",
    story: "part of my favorite series of dates",
    images: ["/images/asian lantern festivalwebp.webp"],
  },
  {
    id: "picnic",
    name: "Park on Park",
    coords: [28.804994, -81.268169],
    date: "January 19, 2026",
    story: "where we had our first picnic together",
    images: ["/images/picnicwebp.webp"],
  },
  {
    id: "goofy-golf",
    name: "Goofy Golf",
    coords: [30.436611, -86.601426],
    date: "January 19, 2026",
    story: "we made it to goofy golf and your parents let me sleep over for the first time (hopefully hot pot night is soon)",
    images: ["/images/goofy golfwebp.webp"],
  },
  {
    id: "ringling",
    name: "Ringling Museum",
    coords: [27.382941, -82.564423],
    date: "June 8, 2026",
    story: "you finally were able to visit my hometown yayyy and we found brandy melville door",
    images: ["/images/ringlingwebp.webp"],
  },
  {
    id: "mote-marine",
    name: "Mote Marine",
    coords: [27.380149, -82.452084],
    date: "June 8, 2026",
    story: "your first time touching a shark and our first real aquarium date",
    images: ["/images/motewebp.webp"],
  },
  {
    id: "peanut-island",
    name: "Peanut Island",
    coords: [26.773951, -80.043423],
    date: "June 9, 2026",
    story: "our first time going across the state together",
    images: ["/images/peanut islandwebp.webp"],
  },
  {
    id: "point-break-arcade",
    name: "Point Break Arcade",
    coords: [30.156080, -85.660690],
    date: "August 2, 2026",
    story: "panama city day w yummy coffee and our first time playing dance game at arcade together",
    images: ["/images/pcb wild roots webp.webp"],
  },
  {
    id: "novel-parkway",
    name: "Novel Parkway",
    coords: [28.799279, -81.350654],
    date: "September 5, 2026",
    story: "my new apartment where we will celebrate holidays, continue to ration water, and make many more yummy meals",
    images: ["/images/novel webp.webp"],
  },
  {
    id: "st-augustine",
    name: "St. Augustine",
    coords: [29.891188, -81.313927],
    date: "September 6, 2026",
    story: "st. augustine day trip where we fed koi and saw pretty architecture (and also saw the horrors and sweat sm but we don't talk about that)",
    images: ["/images/st augustine webp.webp"],
  },
  {
    id: "monterey",
    name: "Monterey Bay Aquarium",
    coords: [36.618086, -121.901041],
    date: "Summer 2027",
    story: "we will see sea otters together",
    images: ["/images/monterey webp.webp"],
  },
  {
    id: "benicia",
    name: "Benicia Farmer's Market",
    coords: [38.046120, -122.161218],
    date: "Summer 2027",
    story: "your meccha yayyy",
    images: ["/images/benicia farmers market webp.webp"],
  },
  {
    id: "sciences",
    name: "Academy of Sciences",
    coords: [37.770054, -122.466359],
    date: "Summer 2027",
    story: "we see science and kisth",
    images: ["/images/academy of sciences webp.webp"],
  },
  {
    id: "golden-gate",
    name: "Hyde Street Beach",
    coords: [37.807508, -122.422193],
    date: "Summer 2027",
    story: "u show golden gate to me and we kisth",
    images: ["/images/golden gate webp.webp"],
  },
  {
    id: "mealtime-malatang",
    name: "Mealtime Malatang",
    coords: [51.519660, -0.135297],
    date: "Summer 2028",
    story: "hot pot date i am not afraid",
    images: ["/images/mealtime malatang webp.webp"],
  },
  {
    id: "apple-market",
    name: "Apple Market",
    coords: [51.511945, -0.123113],
    date: "Summer 2028",
    story: "our relationship meccha",
    images: ["/images/apple market webp.webp"],
  },
  {
    id: "primrose-hill",
    name: "Primrose Hill",
    coords: [51.539447, -0.160765],
    date: "Summer 2028",
    story: "we watch the sunset and kisth",
    images: ["/images/primrose hill webp.webp"],
  },
  {
    id: "edinburgh",
    name: "Edinburgh",
    coords: [55.958102, -3.205024],
    date: "Summer 2028",
    story: "we go to my meccha this is awesome",
    images: ["/images/circus lane webp.webp"],
  },
  {
    id: "jorban",
    name: "Jordan's Restaurant",
    coords: [44.388809, -68.210040],
    date: "Summer 2029",
    story: "we steal mugs after seeing us as puffins",
    images: ["/images/jordans restaurant bar harbor webp.webp"],
  },
  {
    id: "cabanatuan",
    name: "Cabanatuan",
    coords: [15.489446, 120.963861],
    date: "Summer 2030",
    story: "PHILIPPINES",
    images: ["/images/philippines webp.webp"],
  },
  {
    id: "cebu city",
    name: "Cebu City",
    coords: [10.298102, 123.903809],
    date: "Summer 2030",
    story: "we see whale sharks and sardines and waterfalls + go to markets and museums in the city hooray",
    images: ["/images/cebu webp.webp"],
  },
  {
    id: "Northern Lights",
    name: "Northern Lights",
    coords: [69.702122, 18.995705],
    date: "October 2031",
    story: "we see the northern lights and recreate our aurora date",
    images: ["/images/aurora fwwrat webp.webp"],
  },
  {
    id: "london apartment",
    name: "London Apartment",
    coords: [51.503642, -0.201109],
    date: "September 2032",
    story: "we move to londonnn",
    images: ["/images/london apt webp.webp"],
  },
  {
    id: "bacchanalia",
    name: "Bacchanalia",
    coords: [51.510309, -0.148578],
    date: "October 5, 2032",
    story: "8 yrs since we started dating anniversary dinner",
    images: ["/images/bacchanalia webp.webp"],
  },
  {
    id: "london-christmas",
    name: "London Christmas Lights",
    coords: [51.512103, -0.139679],
    date: "December 2032",
    story: "our first christmas in london",
    images: ["/images/london christmas lights webp.webp"],
  },
  {
    id: "neuschwastein",
    name: "Neuschwastein Castle",
    coords: [47.557478, 10.749661],
    date: "Summer 2033",
    story: "DEUTSCHLAND date with your favorite castle (and me of course not with the castle)",
    images: ["/images/neuschwastein et ikea bear webp.webp"],
  },
  {
    id: "caveau",
    name: "Caveau de la Huchette",
    coords: [48.852808, 2.346302],
    date: "Summer 2033",
    story: "we slow dance at, hopefully not our first, jazz club and never watch la la land...  Happy 2 years, sweetheart! Here's to all of our memories and the many more we will create (as I have planned out by year which you will follow exactly if you love and we are not broke). In all seriousness, I love you very much and hope you like the map and will continue to update it as frequently as I can<3",
    images: ["/images/caveau de la hutchette webp.webp"],
  },
];

// ============================================
// COMING SOON: Color customization
// ============================================
// Future versions will support:
// - ACCENT_COLOR: Change the pink theme to any color
// - BACKGROUND_COLOR: Customize the app background
