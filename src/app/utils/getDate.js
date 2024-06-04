export const getDate = (temp) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateTime = new Date(temp);
  return dateTime.toLocaleDateString("en-US", options);
};

export function formatDate(dateString) {
  const date = new Date("2024-06-02T04:29:00Z");
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = dayOfWeek[date.getDay()];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export const topHeadlines = {
  status: "ok",
  totalResults: 70,
  articles: [
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Best gaming phones to buy under ₹30,000 in June 2024: Poco F6, Realme GT 6T, Infinix GT 20 Pro and more | Mint - Mint",
      description:
        "Smartphone makers launch new phones frequently, making it tough to find the ideal gaming device. Here are the top 5 gaming phones under  ₹30,000 in India for June 2024.",
      url: "https://www.livemint.com/technology/gadgets/best-gaming-phones-to-buy-under-rs-30-000-in-june-2024-poco-f6-realme-gt-6t-infinix-gt-20-pro-oneplus-nord-ce-4-11717384441307.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/06/03/1600x900/unnamed_1715576694608_1717388903611.jpg",
      publishedAt: "2024-06-03T04:31:48Z",
      content:
        "With smartphone manufacturers launching new phones almost every week, it can be hard to find the ideal device for your specific needs. And with all the brands claiming blazing fast performance, findi… [+5434 chars]",
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "Bharat Upadhyay",
      title:
        "WWDC 2024: 5 Big Announcements To Expect From Apple CEO Tim Cook On June 10 - Times Now",
      description:
        "With Apple's WWDC scheduled to begin next week, here are five major announcements we can expect from CEO Tim Cook during his keynote next Monday.",
      url: "https://www.timesnownews.com/technology-science/wwdc-2024-5-big-announcements-to-expect-from-apple-ceo-tim-cook-on-june-10-article-110652993",
      urlToImage:
        "https://static.tnn.in/thumb/msid-110652952,thumbsize-27402,width-1280,height-720,resizemode-75/110652952.jpg",
      publishedAt: "2024-06-03T04:27:13Z",
      content:
        "Computex 2024: Nvidia Announces New AI Chips, Says Companies That Don't Embrace AI Will Be Left Behind",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Deeksha Somani",
      title:
        "Garena Free Fire MAX redeem codes for June 3: Win exciting gifts, free diamonds, skins, and more - The Times of India",
      description:
        "GAMING News: Garena Free Fire Max in India offers exclusive redemption codes for in-game perks and rewards, including sought-after weapons, skins, and items. Playe",
      url: "https://timesofindia.indiatimes.com/technology/gaming/garena-free-fire-max-redeem-codes-for-june-3-win-exciting-gifts-free-diamonds-skins-and-more/articleshow/110652948.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110652999,width-1070,height-580,imgsize-38368,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-03T04:26:00Z",
      content:
        "Garena Free Fire Max in India offers exclusive redemption codes for in-game perks and rewards, including sought-after weapons, skins, and items. Players can redeem codes on the Rewards Redemption web… [+1318 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Tech",
      title:
        "Vivo X Fold 3 India launch this week: Expected specifications and price - India Today",
      description:
        "The Vivo X Fold 3 Pro which features AI capabilities will debut in India on June 6 Here are the expected specifications and price of the phone",
      url: "https://www.indiatoday.in/technology/news/story/vivo-x-fold-3-india-launch-this-week-expected-specifications-and-price-2547293-2024-06-03",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/vivo-x-fold-3-pro-234801754-16x9.jpg?VersionId=jGtLw09u_AYvHZThrMAPmwZQtbgDV5F8",
      publishedAt: "2024-06-03T03:52:01Z",
      content:
        "Last year, the Indian market saw a surge of foldable phones with the introduction of models like the Samsung Galaxy Z Fold 5, OnePlus Open, and Oppo Find N2 Flip. These devices were well-received by … [+3085 chars]",
    },
    {
      source: {
        id: null,
        name: "Financial Express",
      },
      author: "The Financial Express",
      title:
        "Apple WWDC 2024: Not just AI superpowers, your iPhone is set to get these big changes with iOS 18 - The Financial Express",
      description: null,
      url: "https://www.financialexpress.com/life/technology-apple-wwdc-2024-not-just-ai-superpowers-your-iphone-is-set-to-get-these-big-changes-with-ios-18-3510511/",
      urlToImage: null,
      publishedAt: "2024-06-03T03:23:40Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Storyboard18",
      title:
        "Samsung’s Galaxy S24 series dominates GenAI-capable smartphone market in Q1 2024 - Storyboard18",
      description: null,
      url: "https://news.google.com/rss/articles/CBMihgFodHRwczovL3d3dy5zdG9yeWJvYXJkMTguY29tL2JyYW5kLW1hcmtldGluZy9zYW1zdW5ncy1nYWxheHktczI0LXNlcmllcy1kb21pbmF0ZXMtZ2VuYWktY2FwYWJsZS1zbWFydHBob25lLW1hcmtldC1pbi1xMS0yMDI0LTMzMTc4Lmh0bdIBigFodHRwczovL3d3dy5zdG9yeWJvYXJkMTguY29tL2FtcC9icmFuZC1tYXJrZXRpbmcvc2Ftc3VuZ3MtZ2FsYXh5LXMyNC1zZXJpZXMtZG9taW5hdGVzLWdlbmFpLWNhcGFibGUtc21hcnRwaG9uZS1tYXJrZXQtaW4tcTEtMjAyNC0zMzE3OC5odG0?oc=5",
      urlToImage: null,
      publishedAt: "2024-06-03T03:22:11Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Storyboard18.com",
      },
      author: "Delshad Irani",
      title:
        "More than 75 games are now available to play directly on YouTube - Storyboard18",
      description:
        "More than 75 games are now available to play directly on YouTube",
      url: "https://www.storyboard18.com/gaming-news/more-than-75-games-are-now-available-to-play-directly-on-youtube-33162.htm",
      urlToImage:
        "https://images.storyboard18.com/storyboard18/2024/06/javier-miranda-xW7d0pvzdDk-unsplash-2024-06-aa215e8904ffae8c99075d676bae5a85-768x584.jpg",
      publishedAt: "2024-06-03T03:09:43Z",
      content:
        "A limited number of users in select markets have been testing a new feature called Playables on YouTube. Playables is a collection of free games users can play directly on the Google-owned platform. … [+1003 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "AMD Announces Ryzen 9950X, 9900X, 9700X, & 9600X Zen 5 CPUs, Extends AM5 Life, & AI CPUs - Gamers Nexus",
      description:
        "Sponsor: Fractal Torrent case on Amazon https://geni.us/VVBjoAMD today announced its new Zen 5 CPU lineup for a release date of July 2024, including the AMD ...",
      url: "https://www.youtube.com/watch?v=Y1yubL0h46U",
      urlToImage: "https://i.ytimg.com/vi/Y1yubL0h46U/maxresdefault.jpg",
      publishedAt: "2024-06-03T03:00:27Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Storyboard18.com",
      },
      author: "Indrani Bose",
      title:
        "Adani Sportsline's Sanjay Adsera on how corporate backing can elevate both player and chess - Storyboard18",
      description:
        "Adani Sportsline's Sanjay Adsera on how corporate backing can elevate both player and chess",
      url: "https://www.storyboard18.com/brand-marketing/adani-sportslines-sanjay-adsera-on-how-corporate-backing-can-elevate-both-player-and-chess-33163.htm",
      urlToImage:
        "https://images.storyboard18.com/storyboard18/2024/06/e-bit-of-body-text-2024-06-03T081920.313-2024-06-8c9a777f218b4fdd84953da4e940ab3d-768x432.jpg",
      publishedAt: "2024-06-03T02:56:03Z",
      content:
        'In India, the chess ecosystem has produced great talent; stories about R Pragganandhaa (who is supported by the Adani Group) are a source of inspiration for the rest of the country. "In India, weve g… [+3621 chars]',
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "Moinak Pal",
      title:
        "iPhone 15 Price Drop Alert: Now Available At Under Rs 65,000 During Flipkart Sale - Times Now",
      description:
        "Initially, the iPhone 15's 128GB variant was priced at Rs 79,900, the 256GB at Rs 89,900, and the 512GB at Rs 1,09,900.",
      url: "https://www.timesnownews.com/technology-science/iphone-15-price-drop-alert-now-available-at-under-rs-65000-during-flipkart-sale-article-110650473",
      urlToImage:
        "https://static.tnn.in/thumb/msid-110650487,thumbsize-44852,width-1280,height-720,resizemode-75/110650487.jpg",
      publishedAt: "2024-06-03T02:51:18Z",
      content:
        "iPhone 16 Pro Max To iPhone 16: Launch Date, Price In India, Design, Camera, Specifications, Latest Leaks",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Tech Desk",
      title:
        "Asus launches ROG Ally X handheld gaming console: All the details - The Times of India",
      description:
        "GAMING News: Asus has launched the ROG Ally X, a new variant of its handheld gaming PC, at Computex 2024, promising significant improvements over the original ROG",
      url: "https://timesofindia.indiatimes.com/technology/gaming/asus-launches-rog-ally-x-handheld-gaming-console-all-the-details/articleshow/110644133.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110644180,width-1070,height-580,imgsize-421079,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-03T02:25:00Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Tech Desk",
      title:
        "Nvidia announces Project G-Assist, an AI gaming sidekick - The Times of India",
      description:
        "GAMING News: Nvidia has unveiled Project G-Assist, an AI-powered assistant for gamers at Computex in Taipei. The AI overlay provides in-game tips and hardware opti",
      url: "https://timesofindia.indiatimes.com/technology/gaming/nvidia-announces-project-g-assist-an-ai-gaming-sidekick/articleshow/110643941.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110643941,width-1070,height-580,imgsize-1308624,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-03T02:23:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Akanksha Agnihotri",
      title:
        "From clutter-free zen to cosy comfort: The mental health benefits of home decor - Hindustan Times",
      description:
        "Creating a sanctuary within our homes goes beyond mere aesthetics; it nurtures our mental well-being. Discover the amazing mental health benefits of home decor.",
      url: "https://www.hindustantimes.com/photos/lifestyle/from-clutter-free-zen-to-cosy-comfort-the-mental-health-benefits-of-home-decor-101717348901433.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/spacejoy-IH7wPsjwomc-unsplash_1692880047187_1717349397486.jpg",
      publishedAt: "2024-06-03T00:30:03Z",
      content:
        "Published on Jun 03, 2024 06:00 AM IST\r\nCreating a sanctuary within our homes goes beyond mere aesthetics; it nurtures our mental well-being. Discover the amazing mental health benefits of home decor… [+653 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Wes Davis",
      title:
        "Billionaire who booked a SpaceX flight around the Moon cancels after delays - The Verge",
      description:
        "Billionaire Yusaku Maezawa announced that he is no longer planning a flight around the Moon with eight artists on SpaceX’s Starship.",
      url: "https://www.theverge.com/2024/6/2/24169972/spacex-starship-billionaire-lunar-flight-dearmoon-canceled-delays-yusaku-maezawa",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/45YBjDvxNcmOEVcysUgIyvmBWnE=/0x0:4000x2722/1200x628/filters:focal(2000x1361:2001x1362)/cdn.vox-cdn.com/uploads/chorus_asset/file/25475001/1364429812.jpg",
      publishedAt: "2024-06-02T20:38:11Z",
      content:
        "Billionaire who booked a SpaceX flight around the Moon cancels after delays\r\nBillionaire who booked a SpaceX flight around the Moon cancels after delays\r\n / I cant plan my future in this situation.\r\n… [+1616 chars]",
    },
    {
      source: {
        id: null,
        name: "Financial Express",
      },
      author: "The Financial Express",
      title:
        "IQOO Z9X 5G: Battery life is the big thing in its favour - The Financial Express",
      description: null,
      url: "https://www.financialexpress.com/life/technology-iqoo-z9x-5g-battery-life-is-the-big-thing-in-its-favour-3510366/",
      urlToImage: null,
      publishedAt: "2024-06-02T20:10:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "People Matters",
      },
      author: "Samriddhi Srivastava, People Matters Media Pvt. Ltd.",
      title:
        "How does new hire grooming impact company success? Epsilon's VP HR explains - People Matters",
      description:
        "The VP of HR at Epsilon revealed how Epsilon is actively seeking innovative methods to improve its onboarding and learning processes with a keen interest in exploring the potential of virtual reality VR and augmented reality AR",
      url: "https://www.peoplematters.in/article/recruitment/how-does-new-hire-grooming-impact-company-success-epsilons-vp-of-hr-explains-41509",
      urlToImage:
        "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1717051185/1717051177.jpg",
      publishedAt: "2024-06-02T18:35:42Z",
      content:
        "As organisations navigate the complexities of a digital age characterised by unprecedented innovation and disruption, the process of onboarding and nurturing new talent has emerged as a critical impe… [+8209 chars]",
    },
    {
      source: {
        id: null,
        name: "GSMArena.com",
      },
      author: "Ro",
      title:
        "Galaxy Watch Ultra confirmed, Realme C83 official and vivo announces S19 series, Week 22 in review - GSMArena.com news - GSMArena.com",
      description:
        "The Motorola Edge 50 Ultra and the Poco F6 family sparked a lot of interest this week as well. This week Realme made the budget C63 official with a 50MP...",
      url: "https://www.gsmarena.com/galaxy_watch_ultra_confirmed_realme_c83_official_and_vivo_announces_s19_series_week_22_in_review-news-63107.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/24/06/week-in-review-22/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2024-06-02T18:23:01Z",
      content:
        "This week Realme made the budget C63 official with a 50MP main camera and 45W charging, while vivo announced its upper mid-range duo, the S19 and S19 Pro. The two feature fast charging, capable Dimen… [+1527 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Business Standard",
      title:
        "Tech giant Google's AI search leaves content publishers scrambling - Business Standard",
      description: null,
      url: "https://www.business-standard.com/world-news/tech-giant-google-s-ai-search-leaves-content-publishers-scrambling-124060200673_1.html",
      urlToImage: null,
      publishedAt: "2024-06-02T17:07:19Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Notebookcheck.net",
      },
      author: "Notebookcheck.net",
      title:
        "More evidence of new Ultra-high-end Samsung foldable appears ahead of next Unpacked event - Notebookcheck.net",
      description: null,
      url: "https://www.notebookcheck.net/More-evidence-of-new-Ultra-high-end-Samsung-foldable-appears-ahead-of-next-Unpacked-event.843480.0.html",
      urlToImage: null,
      publishedAt: "2024-06-02T16:41:56Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Wccftech",
      },
      author: "Hassan Mujtaba",
      title:
        "Watch The AMD CEO, Dr. Lisa Su, Computex 2024 Opening Keynote Live Here! - Wccftech",
      description:
        "AMD CEO, Dr. Lisa Su, will host the opening keynote of Computex 2024 today that will be live from the Nangang Exhibition Center in Taipei.",
      url: "https://wccftech.com/watch-amd-ceo-dr-lisa-su-computex-2024-keynote-live-here/",
      urlToImage:
        "https://cdn.wccftech.com/wp-content/uploads/2024/02/AMD-Computex-2024-CEO-Dr.-Lisa-Su-Keynote.jpg",
      publishedAt: "2024-06-02T16:15:00Z",
      content:
        "AMD CEO, Dr. Lisa Su, will be hosting the opening keynote of Computex 2024 today which will be live from the Nangang Exhibition Center in Taipei.\r\nAMD's Computex 2024 Keynote To Be Hosted By CEO, Dr.… [+2156 chars]",
    },
  ],
};

export const globalNews = {
  status: "ok",
  totalResults: 12526,
  articles: [
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Jennifer Pattison Tuohy",
      title: "This smart smoker makes barbecuing indoors a breeze",
      description:
        "The first indoor smoker has Wi-Fi connectivity, easy clean-up, and simple controls, making it a breeze to use. But its basic smarts are disappointing.",
      url: "https://www.theverge.com/24159117/ge-profile-smart-indoor-smoker-review",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/_-OqhqPiywn6IiNzc3jyyjCFiK0=/0x0:2700x1800/1200x628/filters:focal(1063x652:1064x653)/cdn.vox-cdn.com/uploads/chorus_asset/file/25453625/247116_GE_Indoor_Smoker_JTuohy_0013.jpg",
      publishedAt: "2024-05-18T14:00:00Z",
      content:
        "The GE Profile is a smart indoor smoker — designed to keep smoke inside the oven, not in your kitchen. Wi-Fi connectivity means it works the Smart HQ app for remote control, but there’s no magic sauc… [+7614 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Medea Giordano",
      title:
        "Dyson's Hair Tools, the Airstrait and Airwrap, are $100 Off Right Now",
      description:
        "Banish puff and frizz with these discounted flat irons and blow dryers—not just from Dyson.",
      url: "https://www.wired.com/story/dyson-hair-tool-deals-may-2024/",
      urlToImage:
        "https://media.wired.com/photos/66593291c34c8a5866c380b9/191:100/w_1280,c_limit/Drybar-Buttercup-Blow-Dryer-Color-Background-Deals-SOURCE-Amazon.jpg",
      publishedAt: "2024-05-31T16:01:54Z",
      content:
        "Summer might mean pool days and wet hair but also vacations and nights out at beach bars. For those times, you want hair tools that work quickly for effortless styles that defy humidity. Some of our … [+3447 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Emily Mae Czachor",
      title:
        "Delhi temperature may break record for India's highest: 126.1 degrees",
      description:
        "A substation in Delhi gave a preliminary reading of 126.1 degrees Fahrenheit this week amid a heat wave.",
      url: "https://www.cbsnews.com/news/delhi-temperature-may-break-record-highest-ever-india-126-degrees/?ftag=YHF4eb9d17",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/tAhVJXRV_Hd9UKb35Q236Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03ODA-/https://media.zenfs.com/en/cbs_news_897/871ff8f4f402f72fabcfe08a7de724b3",
      publishedAt: "2024-05-29T18:59:16Z",
      content:
        "A temperature reading collected in Delhi, India's capital territory, may have broken national records as the country grapples with a blistering heat wave. The reading 52.9 degrees Celsius or 126.1 de… [+4188 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Thomas Ricker",
      title:
        "Bluetti SwapSolar review: power and chill with swappable batteries",
      description:
        "Bluetti’s SwapSolar kit shares batteries between an AC180 solar generator and 3-in-1 MultiCooler for max flexibility.",
      url: "https://www.theverge.com/24145138/multicooler-ac180t-modular-battery-review-price-specs",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/_BX-Uxm0wNVl8X7i1RySbDmsyD4=/0x0:5028x3771/1200x628/filters:focal(2694x1714:2695x1715)/cdn.vox-cdn.com/uploads/chorus_asset/file/25434068/IMG_4162.jpeg",
      publishedAt: "2024-06-01T06:18:18Z",
      content:
        "Sharing this solar generators batteries with a 3-in-1 solar fridge, freezer, and ice-making combo is a good idea that might get better.\r\nByThomas Ricker, a deputy editor and Verge co-founder with a p… [+15800 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Geraldine Castro",
      title: "Mexico Is So Hot, Monkeys Are Falling to Their Death From Trees",
      description:
        "Authorities and conservation groups are investigating the deaths of dozens of howler monkeys in Tabasco, where extreme heat and land-use change appear to be threatening the vulnerable species.",
      url: "https://www.wired.com/story/mexico-is-so-hot-monkeys-are-falling-to-their-death-from-trees/",
      urlToImage:
        "https://media.wired.com/photos/664f4ba3805544cda087b27d/191:100/w_1280,c_limit/Mono%20aullador%20negro%20retratado%20por%20Jorge%20Ramos..jpg",
      publishedAt: "2024-05-25T10:00:00Z",
      content:
        "Since the 2000s, cacao production has declined, due to plant diseases and falling local prices, causing many people to turn their cacao farms into pasture. Valenzuela explains that this means that, i… [+2168 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Mexico heat wave melts temperature records in ten cities, including Mexico City",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_81b76171-b835-425b-bd42-4e7c6bb45a5e",
      urlToImage: null,
      publishedAt: "2024-05-10T22:11:16Z",
      content:
        "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "India may have recorded its hottest temperature ever amid severe heat wave",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_4a8e0758-b602-4c5c-a0da-aeea75de35b3",
      urlToImage: null,
      publishedAt: "2024-05-29T15:39:00Z",
      content:
        "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "My feet and hands were amputated after sepsis - MP",
      description:
        "Craig Mackinlay was given a 5% chance of survival after being rushed to hospital in September.",
      url: "https://www.bbc.co.uk/news/uk-politics-69037424",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/17C17/production/_133330379_b7e520a2-0e5f-4af8-a497-f189bcfec095.jpg",
      publishedAt: "2024-05-21T19:15:40Z",
      content:
        "It was on 27 September, when Mr Mackinlay, 57, began feeling unwell. He didn't think much of it, took a Covid test (which came back negative) and had an early night.\r\nDuring the night he was badly si… [+746 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
      title:
        "The Xiaomi 14 and 14 Ultra have a worrying camera problem, but Xiaomi doesn't think so",
      description:
        "The Xiaomi 14 and 14 Ultra are among the best phones you can buy at the moment, but both devices seem to be affected by condensation getting into the camera housing. In a statement, Xiaomi said that isn't a product issue.",
      url: "https://www.androidcentral.com/phones/xiaomi-14-xiaomi-14-ultra-camera-lens-condensation-issue",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/7FCBiwXaGcNgLRJAciPgM9-1200-80.jpg",
      publishedAt: "2024-05-08T02:41:17Z",
      content:
        "The Xiaomi 14 Ultra has the best camera package of any phone today; the quartet of 50MP cameras at the back take magnificent photos and videos in any situation. The Xiaomi 14 isn't far behind either,… [+2975 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Jennifer Pattison Tuohy",
      title:
        "Matter is now racing ahead, but the platforms are holding it back",
      description:
        "The new Matter 1.3 spec adds energy management, EV chargers, and ovens to the smart home standard.",
      url: "https://www.theverge.com/2024/5/8/24151664/matter-smarthome-standard-spec-1dot3-released-device-types-features",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/wIESoTiYMx9X6KNyBRHqcN73yvQ=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24348456/Matter_Screengrab_01.jpg",
      publishedAt: "2024-05-08T12:30:00Z",
      content:
        "Matter is now racing ahead, but the platforms are holding it back\r\nMatter is now racing ahead, but the platforms are holding it back\r\n / The new Matter 1.3 spec finally brings energy management to th… [+11057 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Nina Raemont",
      title:
        "Don't Feel Good After Eating That Leftover Rice? Here's Why - CNET",
      description: "Think twice before you tear into that leftover takeout.",
      url: "https://www.cnet.com/home/kitchen-and-household/dont-feel-good-after-eating-leftover-rice-heres-why/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/bdbb410254f6a01479ce3081e97d5f47f3bd5145/hub/2023/01/11/c9d80179-b544-49db-9d3e-494ea00c5626/gettyimages-580669567.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-06-01T13:15:04Z",
      content:
        "If you're often pressed for time, meal prepping can be a real game-changer. Planning your meals in advance can save you some serious cash, too. But if you often include foods like rice in your meal p… [+3345 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Matt Simon",
      title: "Don’t Believe the Biggest Myth About Heat Pumps",
      description:
        "Not only do heat pumps work fine in cold weather, they’re still more efficient than gas furnaces in such conditions.",
      url: "https://www.wired.com/story/myth-heat-pumps-cold-weather-freezing-subzero/",
      urlToImage:
        "https://media.wired.com/photos/664e4688a6a4667fb965e01f/191:100/w_1280,c_limit/Science_GettyImages-907945646.jpg",
      publishedAt: "2024-05-24T10:30:00Z",
      content:
        "By contrast, a heat pump works by circulating refrigerants and changing their pressure, and thus their temperature, both to grab thermal energy from outdoor air and then do the reverse in the summer … [+2849 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Bill Hutchinson",
      title:
        "Texas town deploys snow plows after 50-degree temperature swing and 2 feet of hail",
      description:
        "As severe weather continued Thursday across Texas, residents of a southwest Texas town reported a dramatic temperature drop on Wednesday.",
      url: "https://abcnews.go.com/US/texas-town-deploys-snow-plows-after-50-degree/story?id=110671830",
      urlToImage:
        "https://i.abcnewsfe.com/a/e06dbf1b-b29a-4391-a426-aa018d1dfb0a/hail-marathon-texas-ht-jt-240530_1717091342743_hpMain_16x9.jpg?w=1600",
      publishedAt: "2024-05-30T20:46:12Z",
      content:
        "As severe weather continued Thursday through the Great Plains, residents of a southwest Texas town reported a dramatic temperature drop on Wednesday and hail so deep they had to deploy snow plows to … [+3192 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Taylor Freitas",
      title:
        "Is Wearing Socks to Bed The Best Kept Secret to a Good Night's Sleep? - CNET",
      description:
        "Finding it hard to get quality sleep? Your socks may be the solution.",
      url: "https://www.cnet.com/health/sleep/wearing-socks-to-bed/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/5e1284fafdc8709d394b221ead344a6d673dddd8/hub/2022/10/11/287a0865-e3db-4e7b-825d-964fb40030ea/gettyimages-622220834.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-15T14:12:17Z",
      content:
        "If you're struggling to sleep or find yourself waking up in the middle of the night, the solution could be hiding in your sock drawer. It's true. \r\nThough stress and certain health conditions are oft… [+7106 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "Zachary Visconti",
      title:
        "Level up your smart home with 44% OFF the tiny Amazon Echo Dot (for a limited time)",
      description:
        "Amazon has cut 44% off the price of the fifth-generation Echo Dot, offering a great deal on an already-affordable smart speaker.",
      url: "https://www.androidcentral.com/accessories/smart-home/level-up-your-smart-home-with-44-off-the-tiny-amazon-echo-dot-for-a-limited-time",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/PbByyLqg5ef2szCyPF4zvH-1200-80.jpg",
      publishedAt: "2024-05-10T22:58:00Z",
      content:
        "Setting up a smart home is more accessible than ever, especially with smart speaker deals like this one. For a limited time, Amazon has launched a sale on the Echo Dot (5th Gen), cutting 44% off of t… [+1282 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Hartley Charlton",
      title: "Apple Reportedly Developing OLED iPad Mini for 2026",
      description:
        "Apple has requested OLED display panels designed for future iPad mini models from its suppliers, ZDNET Korea reports.\n\n\n\n\n\nSamsung Display reportedly started developing sample 8-inch OLED panels for a future ‌iPad mini‌ last month, with plans to initiate mass…",
      url: "https://www.macrumors.com/2024/05/24/apple-developing-oled-ipad-mini-for-2026/",
      urlToImage:
        "https://images.macrumors.com/t/w-1ynclaKgONgtatwFza_wNn5e0=/1920x/article-new/2021/09/ipad-mini-3.jpg",
      publishedAt: "2024-05-24T12:44:51Z",
      content:
        "Apple has requested OLED display panels designed for future iPad mini models from its suppliers, ZDNET Korea reports.\r\nSamsung Display reportedly started developing sample 8-inch OLED panels for a fu… [+1289 chars]",
    },
    {
      source: {
        id: "ars-technica",
        name: "Ars Technica",
      },
      author: "Elizabeth Rayne",
      title:
        "Dinosaurs needed to be cold enough that being warm-blooded mattered",
      description:
        "Two groups of dinosaurs moved to cooler climes during a period of climate change.",
      url: "https://arstechnica.com/science/2024/05/when-warm-blooded-dinosaurs-first-roamed-the-earth/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-1124675220-760x380.jpg",
      publishedAt: "2024-05-28T16:27:35Z",
      content:
        "Enlarge/ Later theropods had multiple adaptations to varied temperatures.\r\n3\r\nDinosaurs were once assumed to have been ectothermic, or cold-blooded, an idea that makes sense given that they were rept… [+4077 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Kurt Knutsson, CyberGuy Report",
      title: "Top 10 tips to maximize your iPhone’s battery life",
      description:
        'Tech guru Kurt "CyberGuy" Knutsson explains how to maximize the life of an iPhone battery, which depends on chemical age, temperature and charge history.',
      url: "https://www.foxnews.com/tech/top-10-tips-maximize-your-iphones-battery-life",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2024/05/3-What-to-do-and-not-do-when-it-comes-to-charging-your-phone-Black-Solar-Power-Bank-on-Brown-Surface.jpg",
      publishedAt: "2024-05-30T14:00:30Z",
      content:
        "Theres nothing worse than spending a lot of money on a nice new phone only to have a shortened battery life, curtailing its usefulness. Various factors can impact your iPhones battery life quality an… [+5614 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "Zachary Visconti",
      title:
        "Wow! Last-minute Memorial Day deal carves 50% OFF the Galaxy Watch 5 Pro",
      description:
        "Best Buy has cut the price of the Samsung Galaxy Watch 5 Pro LTE IN HALF for Memorial Day, offering a great deal on a smartwatch with superb battery life.",
      url: "https://www.androidcentral.com/wearables/wow-last-minute-memorial-day-deal-carves-50-off-the-galaxy-watch-5-pro",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/wCDxcFpMAiC2vpNqrjhACD-1200-80.jpg",
      publishedAt: "2024-05-27T16:15:48Z",
      content:
        "If you're on the hunt for a new wearable this Memorial Day, this Samsung Galaxy watch deal is certainly worth your consideration. As a limited-time Memorial Day special, Best Buy has cut the price of… [+1520 chars]",
    },
    {
      source: {
        id: null,
        name: "Science Daily",
      },
      author: null,
      title: "Temperature, time and blueberry wine",
      description:
        "Nutrient-rich blueberries -- a common breakfast smoothie ingredient -- can also create wine. But does the heat and time required to ferment this mighty berry strip out any of those potential health-promoting compounds? Researchers examine fermentation's effec…",
      url: "https://www.sciencedaily.com/releases/2024/05/240515164327.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2024-05-15T20:43:27Z",
      content:
        "Nutrient-rich blueberries -- a common breakfast smoothie ingredient -- can also create wine. But does the heat and time required to ferment this mighty berry strip out any of those potential health-p… [+2696 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Georgina Torbet",
      title: "Astronomers discover rare ‘exo-Venus’ just 40 light-years away",
      description:
        "Astronomers have discovered a rare type of planets called an exo-Venus with a similar temperature to Earth, located in our cosmic back yard.",
      url: "https://www.digitaltrends.com/space/exo-venus-discovered/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2024/05/Gl12b_Illustration_less_atmosphere1.jpg?resize=1200%2C630&p=1",
      publishedAt: "2024-05-23T22:11:21Z",
      content:
        "Gliese 12 b, which orbits a cool, red dwarf star located just 40 light-years away, promises to tell astronomers more about how planets close to their stars retain or lose their atmospheres. In this a… [+3260 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Jessica Rendall",
      title:
        "Heatstroke Awareness: How to Spot, Prevent and Respond to Emergencies - CNET",
      description: "Follow these expert tips for staying safe in extreme heat.",
      url: "https://www.cnet.com/health/medical/heatstroke-awareness-how-to-spot-prevent-and-respond-to-emergencies/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/cd58bafe35f99cbffef9ca3fc4f2f8b5a5677c9f/hub/2022/06/06/27da3e55-c9f8-4442-ae8f-4d8917473d54/gettyimages-1305112178.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-11T14:02:07Z",
      content:
        "Last year's high temperatures set records, prompting the US Department of Labor to remind employers to protect workers exposed to extreme heat. Among certain populations -- like older adults, young c… [+5143 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Taylor Leamey",
      title:
        "Knock 20% off My Favorite Sleep Number Comforter for Memorial Day - CNET",
      description:
        "If you’ve been searching for a new comforter to solve your sleep problems, consider my favorite customizable option from Sleep Number. It’s on sale for Memorial Day.",
      url: "https://www.cnet.com/deals/sleep-number-memorial-day-2024/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/3602fcb45ef0360c6b63b1951e5950bbe5c6b013/hub/2024/05/16/e800961c-aa66-47bc-8138-7552af772fd6/screenshot-2024-05-16-at-3-50-59pm.png?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-20T14:00:00Z",
      content:
        "Like so many of you, my life has been a constant stage of blanket tug-of-war at night because my partner is a hot sleeper who likes to kick the blanket off the bed at night. That was until I started … [+2181 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Medea Giordano",
      title: "The 11 Best Early Memorial Day 2024 Mattress Deals",
      description:
        "Sleep starting to feel less like a luxury? It might be time for a new mattress, and they’re often discounted.",
      url: "https://www.wired.com/story/best-mattress-deals/",
      urlToImage:
        "https://media.wired.com/photos/6646865c05d135e5dfc89146/191:100/w_1280,c_limit/Memorial%20Day%20Mattress%20Deals%20052024%20Abstract%20Background%202%20SOURCE%20Birch%20by%20Helix.jpg",
      publishedAt: "2024-05-17T10:30:00Z",
      content:
        "Mattresses and cars are two things you should never pay sticker price for, because sticker prices are inflated and therefore deals are usually the actual retail price. We can't help you with cars, bu… [+5502 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Ed Cara",
      title: "Family Eats Bear, Ends Up With Parasitic Worms",
      description:
        "A family reunion’s bear feast turned into a medical disaster, thanks to some parasitic worms. In a recent paper, scientists with the Centers for Disease Control and Prevention detail how the family caught trichinellosis from contaminated bear meat that wasn’t…",
      url: "https://gizmodo.com/family-eats-undercooked-bear-meat-parasitic-worms-1851503602",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/32d9e522672a31e06ea9b2455999b840.jpg",
      publishedAt: "2024-05-28T15:40:00Z",
      content:
        "A family reunions bear feast turned into a medical disaster, thanks to some parasitic worms. In a recent paper, scientists with the Centers for Disease Control and Prevention detail how the family ca… [+3341 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Ryan Waniata",
      title: "Hisense U8N TV Review: Loaded Package, Shades Required",
      description:
        "Hisense’s flagship TV brings over-the-top brightness but still comes out a winner.",
      url: "https://www.wired.com/review/hisense-u8n/",
      urlToImage:
        "https://media.wired.com/photos/663f7dec90f031722ab0d7d1/191:100/w_1280,c_limit/Hisense-U8N-TV-collage-052024-SOURCE-Ryan-Waniata.jpg",
      publishedAt: "2024-05-12T14:00:00Z",
      content:
        "The U8N also lets you control the volume output of its optical port with the TV remote, making it much simpler to control older audio systems that dont support HDMI ARC/eARC, like my original KEF LSX… [+4172 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Mariella Moon",
      title: "Google's Wear OS 5 promises better battery life",
      description:
        "Google has unveiled Wear OS 5 at its I/O developer conference today, giving us a glimpse of new features and other improvements coming with the platform. The company isn't quite ready to roll out the final version of the wearable OS, but its developer preview…",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_34a16b6d-22a7-47f6-9ec2-1563249ab5dd",
      urlToImage: null,
      publishedAt: "2024-05-15T18:28:34Z",
      content:
        "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Science X",
      title:
        "Single atom defect in 2D material can hold quantum information at room temp",
      description:
        'Scientists have discovered that a "single atomic defect" in a layered 2D material can hold onto quantum information for microseconds at room temperature, underscoring the potential of 2D materials in advancing quantum technologies.',
      url: "\n      https://phys.org/news/2024-05-scientists-atom-defect-2d-material.html\n          ",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2024/scientists-make-quantu.jpg",
      publishedAt: "2024-05-23T23:53:48Z",
      content:
        "This article has been reviewed according to Science X's editorial process\r\n and policies. \r\n Editors have highlighted the following attributes while ensuring the content's credibility: \r\npeer-reviewe… [+4701 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "techkritiko@gmail.com (Jay Bonggolto)",
      title:
        "Android 15 Beta 2 just landed for Google Pixels and non-Pixel devices too",
      description:
        "The second beta release for Android 15 introduces improved large screen multitasking, 'private space,' new Health Connect data types, and more.",
      url: "https://www.androidcentral.com/apps-software/android-15-beta-2-just-landed-for-google-pixels-and-non-pixel-devices-too",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/WymQhvqn9KZWMgDvhbDvdg-1200-80.jpg",
      publishedAt: "2024-05-15T17:00:36Z",
      content:
        'What you need to know\r\n<ul><li>The second Android 15 beta release introduces "Private space," allowing users to hide apps in a secure, separate profile, improving privacy.</li><li>Additionally, apps … [+4765 chars]',
    },
    {
      source: {
        id: null,
        name: "Fresno Bee",
      },
      author: "Joshua Tehee",
      title:
        "Another weekend of temperature drops, rain projected for Fresno. What we can expect",
      description: "One Reddit user called it the “weirdest forecast ever.”",
      url: "https://www.fresnobee.com/news/weather-news/article288284695.html",
      urlToImage:
        "https://media.zenfs.com/en/fresno_bee_mcclatchy_articles_660/acdd46e135c5bf67c39a6edf3851aaf6",
      publishedAt: "2024-05-04T12:30:00Z",
      content:
        "So far, its been a wild Spring in Fresno, marked by big swings in weather.\r\nCase in point, temperatures were seasonally warm on Thursday and Friday (four to seven degrees above the norm) but expected… [+1000 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Taylor Leamey",
      title:
        "The Scandinavian Sleep Method Might Be the Key to Saving Your Relationship - CNET",
      description:
        "Are you living with a blanket hog? Try the Scandinavian sleeping method tonight and watch your sleep quality improve.",
      url: "https://www.cnet.com/health/sleep/the-scandinavian-sleep-method-might-be-the-key-to-saving-your-relationship/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/7cdcc66f5ed0888509e4829b44dce8a7a3d4e500/hub/2022/09/13/ebd9a1c8-4393-444a-b3ad-80068cf3cbc2/gettyimages-1350230025.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-23T20:23:57Z",
      content:
        "If your better half is keeping you awake at night, you aren't alone -- 1 in 3 Americans report that their partner negatively affects their sleep. No matter how much we love them, sometimes they're th… [+5284 chars]",
    },
    {
      source: {
        id: null,
        name: "Hackaday",
      },
      author: "Kristina Panos",
      title: "Hive Monitor Is the Bee’s Knees",
      description:
        "Beekeeping is quite the rewarding hobby. There’s delicious honey and useful wax to be had, plus you get the honor of knowing that you’re helping to keep the bee population surviving and…",
      url: "https://hackaday.com/2024/05/05/hive-monitor-is-the-bees-knees/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2024/05/beehive-monitor-800.jpg",
      publishedAt: "2024-05-05T14:00:13Z",
      content:
        "Beekeeping is quite the rewarding hobby. There’s delicious honey and useful wax to be had, plus you get the honor of knowing that you’re helping to keep the bee population surviving and thriving. [Be… [+1308 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "India says Delhi's record 52.9 Celsius temperature last week was wrong by 3 C",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_2cf66870-153d-4bde-bcd9-72bc3172011a",
      urlToImage: null,
      publishedAt: "2024-06-01T11:27:29Z",
      content:
        "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Jan Cuyco / Purple ROMERO / AFP Philippines",
      title:
        "Misleading posts criticising heat index warnings spread online as Philippines swelters",
      description:
        'Multiple experts have rebuffed a misleading online claim shared during extreme heat in the Philippines that the heat index -- a measurement of the "real feel...',
      url: "https://www.yahoo.com/news/misleading-posts-criticising-heat-index-034356223.html",
      urlToImage:
        "https://media.zenfs.com/en/afp_factcheck_us_713/20fcbcd45d0c2a05446ef1b90c87e87c",
      publishedAt: "2024-05-24T03:43:56Z",
      content:
        'Multiple experts have rebuffed a misleading online claim shared during extreme heat in the Philippines that the heat index  -- a measurement of the "real feel" temperature after humidity is taken int… [+3570 chars]',
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "David Watsky",
      title:
        "These 1-Minute Microwaved Poached Eggs Are a Brunch Hack for the Ages - CNET",
      description:
        "Eggs Benedict have never been easier with this fail-proof and lightning-fast method for poaching eggs.",
      url: "https://www.cnet.com/home/kitchen-and-household/these-1-minute-microwaved-poached-eggs-are-a-brunch-hack-for-the-ages/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/6e6dc8d61368f63aa4d0cc2feab2e7ddc3b95d6b/hub/2023/10/06/77f7a038-aa94-48a9-92ae-9dc4a7a3ca2d/img-4553.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-05T16:55:00Z",
      content:
        "Poached eggs are a brunch staple but they can be tricky to make at home without overcooking or breaking the yolk as you drop it into a pot of boiling water. I recently learned about microwave poached… [+2503 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "David Watsky",
      title:
        "1-Minute Microwave Poached Eggs Are the Easiest Way to Get Your Morning Protein - CNET",
      description:
        "Swap empty carbs for food fuel in the morning with this foolproof method for poaching eggs.",
      url: "https://www.cnet.com/home/kitchen-and-household/1-minute-microwave-poached-eggs-are-the-easiest-way-to-get-your-morning-protein/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/6e6dc8d61368f63aa4d0cc2feab2e7ddc3b95d6b/hub/2023/10/06/77f7a038-aa94-48a9-92ae-9dc4a7a3ca2d/img-4553.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-11T12:02:04Z",
      content:
        "Poached eggs are a brunch staple but they can be tricky to make at home without overcooking or breaking the yolk as you drop it into a pot of boiling water. I recently learned how to make microwave-p… [+2533 chars]",
    },
    {
      source: {
        id: "time",
        name: "Time",
      },
      author: "Chantelle Lee",
      title: "Food Safety Tips You Should Know As Summer Heats Up",
      description:
        "As the weather gets hotter and people start eating outside again, it’s important to make sure that your food remains safe to eat.",
      url: "https://time.com/6980818/food-safety-tips-memorial-day-summer/",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2024/05/Food-Safety-Tips-Memorial-Day.jpg?quality=85&w=1200&h=628&crop=1",
      publishedAt: "2024-05-21T21:45:34Z",
      content:
        "With Memorial Day weekend fast approaching, the start of the summer is in sight. As the weather gets hotter and people start eating and grilling outside again, its important to make sure that your fo… [+2661 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "msmash",
      title:
        "'Never-Ending' UK Rain Made 10 Times More Likely By Climate Crisis, Study Says",
      description:
        'The seemingly "never-ending" rain last autumn and winter in the UK and Ireland was made 10 times more likely and 20% wetter by human-caused global heating, a study has found. From a report: More than a dozen storms battered the region in quick succession betw…',
      url: "https://news.slashdot.org/story/24/05/22/1731258/never-ending-uk-rain-made-10-times-more-likely-by-climate-crisis-study-says",
      urlToImage: "https://a.fsdn.com/sd/topics/earth_64.png",
      publishedAt: "2024-05-22T18:05:00Z",
      content:
        "More than a dozen storms battered the region in quick succession between October and March, which was the second-wettest such period in nearly two centuries of records. The downpour led to severe flo… [+1060 chars]",
    },
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      author: "Srishti Mitra",
      title:
        "Snøhetta’s Newest High-Rise Maintains A Comfy Temperature Indoors Without Any Grid-Based Power",
      description:
        "Snøhetta’s Newest High-Rise Maintains A Comfy Temperature Indoors Without Any Grid-Based PowerDubbed the Vertika Nydalen – this impressive high-rise is Snøhetta’s recently completed project. Located in Norway, this energy-efficient high-rise is truly one-of-a…",
      url: "https://www.yankodesign.com/2024/05/20/snohettas-newest-high-rise-maintains-a-comfy-temperature-indoors-without-any-grid-based-power/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2024/05/vertikal-nydalen/snohetta_hi_rise_yanko_design_01.jpg",
      publishedAt: "2024-05-20T23:30:01Z",
      content:
        "Dubbed the Vertika Nydalen – this impressive high-rise is Snøhetta’s recently completed project. Located in Norway, this energy-efficient high-rise is truly one-of-a-kind! The studio merged an ingeni… [+2264 chars]",
    },
    {
      source: {
        id: null,
        name: "Smittenkitchen.com",
      },
      author: "deb",
      title: "grilled feta with asparagus chimichurri",
      description:
        "My superpower? Dropping recipes so late on the Friday of a holiday weekend, absolutely nobody will see them. Well, except you. I’m here for us last-minute planners, we indecisive “I want to make something new this weekend, but nothing has jumped out at me.” I…",
      url: "https://smittenkitchen.com/2024/05/grilled-feta-with-asparagus-chimichurri/",
      urlToImage:
        "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2024/05/grilled-feta-with-asparagus-chimichurri-16-scaled.jpg?fit=1200%2C800&ssl=1",
      publishedAt: "2024-05-24T20:24:08Z",
      content:
        "Make the chimichurri: Place garlic, oregano, and red chili in a food processor or high speed blender and blend until chopped. Strip the leaves from the parsley and add them to the blender, pulsing th… [+2515 chars]",
    },
    {
      source: {
        id: "time",
        name: "Time",
      },
      author: "Eamon Akil Farhat / Bloomberg",
      title: "April Was the 11th Consecutive Month of Record-Breaking Heat",
      description:
        "April 2024 was the hottest April on record. It was also the Earth’s 11th consecutive month of record-breaking heat.",
      url: "https://time.com/6975854/april-record-heat-consecutive-months/",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2024/05/ice-pool-bulacan-philippines.jpg?quality=85&w=1024&h=628&crop=1",
      publishedAt: "2024-05-08T08:30:00Z",
      content:
        "April was the Earths 11th consecutive month of record-breaking heat, with warmer weather already sweeping across Asia and a hotter-than-usual summer expected in Europe.\r\nThe European Unions Copernicu… [+1466 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Rich Edmonds",
      title:
        "How to undervolt a GPU: Everything you need to know about GPU undervolting",
      description:
        "Here's how to reduce the temperature of your AMD, Intel, or Nvidia GPU.",
      url: "https://www.xda-developers.com/how-to-undervolt-gpu/",
      urlToImage:
        "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/02/powercolor-hellhound-radeon-rx-7900-gre-gpu-power.jpg",
      publishedAt: "2024-05-29T22:00:13Z",
      content:
        "As well as overclocking PC components, it's possible to undervolt them. Whether it's the central processing unit (CPU) or graphics processing unit (GPU), there could be a time when undervolting the p… [+3713 chars]",
    },
    {
      source: {
        id: "new-scientist",
        name: "New Scientist",
      },
      author: "Chen Ly",
      title:
        "Earth-like exoplanet found just 40 light years away – the closest yet",
      description:
        "A nearby planet named Gilese 12 b has an estimated surface temperature of 42°C (108°F), making it a promising candidate for liquid water and maybe life",
      url: "https://www.newscientist.com/article/2432840-earth-like-exoplanet-found-just-40-light-years-away-the-closest-yet/",
      urlToImage:
        "https://images.newscientist.com/wp-content/uploads/2024/05/23143140/SEI_205703551.jpg",
      publishedAt: "2024-05-23T15:00:53Z",
      content:
        "Illustration of the exoplanet Gliese 12 b, which orbits a cool, red dwarf star 40 light years away from Earth\r\nNASA/JPL-Caltech/R. Hurt (Caltech-IPAC)\r\nAstronomers have discovered an Earth-like exopl… [+1793 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Megan Wollerton",
      title:
        "Save Money on Your AC Bill: Change the Placement of Your Fan - CNET",
      description:
        "The location of your fan can make a difference when it comes to the temperature of your home. Placing your fan in the right spot can help slash AC costs.",
      url: "https://www.cnet.com/home/energy-and-utilities/save-money-on-your-ac-bill-change-the-placement-of-your-fan/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/16c5db4fbd143c2fc16b44e17e469982d75847db/hub/2022/07/22/44684ac4-e070-455e-9b1c-e5b37a0eae1d/gettyimages-1049248894.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-14T15:12:00Z",
      content:
        "Summer 2024 is shaping up to be one of the hottest yet. And this comes in the wake of 2023 -- the hottest summer in recorded history.\r\nNot only has this past summer been hot and humid as per usual th… [+3028 chars]",
    },
    {
      source: {
        id: null,
        name: "Wikipedia.org",
      },
      author: "Contributors to Wikimedia projects",
      title: "Helium Flash",
      description: "Comments",
      url: "https://en.wikipedia.org/wiki/Helium_flash",
      urlToImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Helium_flash.svg/1200px-Helium_flash.svg.png",
      publishedAt: "2024-05-23T01:59:35Z",
      content:
        "Fusion of helium in the core of low mass stars.\r\nA helium flash is a very brief thermal runawaynuclear fusion of large quantities of helium into carbon through the triple-alpha process in the core of… [+10023 chars]",
    },
    {
      source: {
        id: null,
        name: "Hackaday",
      },
      author: "Navarre Bartz",
      title: "Industrial Solar Heat Hits 1000˚C",
      description:
        "While electricity generation has been the star of the energy transition show, about half of the world’s energy consumption is to make heat. Many industrial processes rely on fossil fuels …read more",
      url: "https://hackaday.com/2024/05/21/industrial-solar-heat-hits-1000%cb%9ac/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2024/05/image.imageformat.carousel.1179893634.jpg",
      publishedAt: "2024-05-22T02:00:47Z",
      content:
        "While electricity generation has been the star of the energy transition show, about half of the world’s energy consumption is to make heat. Many industrial processes rely on fossil fuels to reach hig… [+1261 chars]",
    },
    {
      source: {
        id: null,
        name: "kottke.org",
      },
      author: "Jason Kottke",
      title:
        "Good god, the temperature in Delhi hit 50.5°C (122.9°F) today, an all-time...",
      description:
        "Good god, the temperature in Delhi hit 50.5°C (122.9°F) today, an all-time record. “Years of scientific research have found",
      url: "https://kottke.org/24/05/0044695-good-god-the-temperature-",
      urlToImage: "",
      publishedAt: "2024-05-29T14:57:19Z",
      content:
        "×Hello! In order to leave a comment, you need to be a current kottke.org member. If you'd like to sign up for a membership to support the site and join the conversation, you can explore your options … [+394 chars]",
    },
    {
      source: {
        id: null,
        name: "Thekitchn.com",
      },
      author: "Kayla Hoang",
      title:
        "These Pistachio Muffins Are So Delicious, I Bake a Batch Every Single Week",
      description: "They’re perfectly plush and tender.\nREAD MORE...",
      url: "https://www.thekitchn.com/pistachio-crunch-muffins-recipe-23658789",
      urlToImage:
        "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-05-pistachio-crunch-muffins%2Fpistachio-crunch-muffins-054",
      publishedAt: "2024-05-18T14:00:00Z",
      content:
        "General tips: You will need about 9 ounces shelled pistachios in total.\r\nSubstitutions: Substitute the sour cream with full-fat, plain yogurt.\r\nIngredient/equipment variations: Using every other well… [+697 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Briley Kenney",
      title:
        "TORRAS COOLiFY Cyber is the ultimate personal cooling and comfort solution",
      description:
        "When it's hot and you need to cool down the TORRAS COOLiFY Cyber will help you with ice cold personal AC and localized cooling. Check it out!",
      url: "https://www.digitaltrends.com/outdoors/torras-coolify-cyber-wearable-ac-may-2024/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2024/05/TORRAS-COOLiFY-Cyber-personal-AC-worn-outdoors.jpeg?resize=1200%2C630&p=1",
      publishedAt: "2024-05-24T20:36:17Z",
      content:
        "TORRAS Global\r\nImagine this: The summer heat is baking down on you from above. You’re close to overheating, and you desperately need to cool down. The problem is you don’t have quick access to a vehi… [+4529 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "Carrot Weather gets major update with new look, line charts, fresh layouts, and more",
      description:
        "Carrot Weather 6.0 is here with a range of new features and improvements. The default new design features a “garden that grows over time,” line charts have arrived for hourly and daily forecasts, weather news is integrated from around the world, and more.\n\n\n\n…",
      url: "https://9to5mac.com/2024/05/29/carrot-weather-gets-major-update-with-line-charts/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/05/carrot-update-6-0.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-05-29T13:59:00Z",
      content:
        "Carrot Weather 6.0 is here with a range of new features and improvements. The default new design features a “garden that grows over time,” line charts have arrived for hourly and daily forecasts, wea… [+3529 chars]",
    },
    {
      source: {
        id: "ars-technica",
        name: "Ars Technica",
      },
      author: "Stephen Clark",
      title:
        "First Dream Chaser spaceplane needs more work when it gets to launch site",
      description:
        "The rest of Dream Chaser's heat shield tiles will be installed at Kennedy Space Center.",
      url: "https://arstechnica.com/space/2024/05/first-dream-chaser-spaceplane-needs-more-work-when-it-gets-to-launch-site/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2024/05/Dream-Chaser-Full-Profile-Landscape-2-760x380.jpg",
      publishedAt: "2024-05-10T00:18:00Z",
      content:
        "Enlarge/ Sierra Space's Dream Chaser spaceplane inside a NASA test chamber in Ohio.\r\n9\r\nThere is still some work to do to prepare Sierra Space's Dream Chaser spaceplane for its first mission, but the… [+3211 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Jon Bitner",
      title: "How to disable learning on the Nest Learning Thermostat",
      description:
        "You'll want to disable learning on the Nest Learning Thermostat if you want to run your own heating and cooling schedule. Here's how it works.",
      url: "https://www.digitaltrends.com/home/how-to-disable-learning-nest-learning-thermostat/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2022/05/google-nest-learning-smart-wifi-thermostat-stainless-steel.jpg?resize=1200%2C630&p=1",
      publishedAt: "2024-05-24T21:00:58Z",
      content:
        "A big appeal of the Nest Learning Thermostat is that it's smart enough to help curate a temperature schedule that keeps you comfortable and saves you money. It does this by automatically changing you… [+2492 chars]",
    },
    {
      source: {
        id: null,
        name: "Hackaday",
      },
      author: "Elliot Williams",
      title: "Sometimes It’s Not the Solution",
      description:
        "Watching a video about a scratch-built ultra-precise switch for metrology last week reminded me that it’s not always the projects that are the most elegant solutions that I enjoy reading about the …",
      url: "https://hackaday.com/2024/06/01/sometimes-its-not-the-solution/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2018/09/inspiration.jpg",
      publishedAt: "2024-06-01T14:00:51Z",
      content:
        "Watching a video about a scratch-built ultra-precise switch for metrology last week reminded me that its not always the projects that are the most elegant solutions that I enjoy reading about the mos… [+1428 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "JD Christison",
      title:
        "WinkBed Plus Mattress Review 2024: An Ultra-Supportive Pillow-Top Bed Tested by Experts - CNET",
      description:
        "Are you looking for a luxurious pillow-top bed that's able to handle a substantial amount of weight on a nightly basis? Here's what you need to know about the WinkBed Plus.",
      url: "https://www.cnet.com/health/sleep/winkbed-plus-mattress-review/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/8843e4d0081c0cde56d06ebf20a1f57ee333cdeb/hub/2024/05/09/a6d6464d-88ae-4bbf-8f8f-4cb13f360224/dsc01155.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-20T17:00:04Z",
      content:
        "There are many things I enjoy that come from the great state of Wisconsin. Harley Davidson. Chris Farley. And who could forget the cheese? But aside from the rad bikes, delicious dairy products and h… [+11006 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "oburke@businessinsider.com (Owen Burke)",
      title: "The best charcoal for grilling in 2024, according to our experts",
      description:
        "The best charcoal is essential to grilling with even heat and great flavor. Here are the best charcoal briquettes and lump charcoal for grill season.",
      url: "https://www.businessinsider.com/guides/home/best-charcoal",
      urlToImage:
        "https://i.insider.com/63e52e6c27e5db0018eeeebf?width=1200&format=jpeg",
      publishedAt: "2024-05-10T15:08:25Z",
      content:
        "When you buy through our links, Business Insider may earn an affiliate commission. Learn more\r\nManaging and monitoring the heat while cooking over charcoal can be tricky. Just like you wouldn't start… [+13199 chars]",
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Science X",
      title:
        "Study finds Black and Hispanic Americans are disproportionately exposed to wider temperature swings",
      description:
        "Extreme heat can harm human health, but so can extreme temperature swings. Large daily temperature variation (DTV) has been associated with elevated mortality in studies around the world. Trees and other vegetation can lower DTV, as trees reduce temperature t…",
      url: "https://phys.org/news/2024-05-black-hispanic-americans-disproportionately-exposed.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2024/black-and-hispanic-ame.jpg",
      publishedAt: "2024-05-22T17:07:03Z",
      content:
        "This article has been reviewed according to Science X's \r\neditorial process\r\nand policies.\r\nEditors have highlighted\r\nthe following attributes while ensuring the content's credibility:\r\nfact-checked\r… [+1571 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Julia Jacobo",
      title:
        "How scientists discovered summer 2023 was the hottest season in 2,000 years on Earth",
      description:
        "A closer look at tree rings is adding to the growing list of evidence that shows unprecedented temperatures measured on Earth over the past year.",
      url: "https://abcnews.go.com/US/temperatures-measured-summer-2023-unparalleled-past-2000-years/story?id=110171017",
      urlToImage:
        "https://i.abcnewsfe.com/a/42fc4fcb-8e4a-4bc2-94ad-2fa6cbda56cc/summer-heat-record-gty-lv-240513_1715635109238_hpMain_16x9.jpg?w=1600",
      publishedAt: "2024-05-14T15:02:00Z",
      content:
        "A closer look at tree rings is adding to the growing list of evidence that shows unprecedented temperatures measured on Earth over the past year.\r\nThe summer of 2023 was the warmest in the Northern H… [+2559 chars]",
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Science X",
      title: "Vietnam temperature records tumble as heat wave scorches",
      description:
        "More than 100 temperature records fell across Vietnam in April, according to official data, as a deadly heat wave scorches South and Southeast Asia.",
      url: "https://phys.org/news/2024-05-vietnam-temperature.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/2024/a-boat-sits-on-a-dried.jpg",
      publishedAt: "2024-05-04T08:16:01Z",
      content:
        "More than 100 temperature records fell across Vietnam in April, according to official data, as a deadly heat wave scorches South and Southeast Asia.\r\nExtreme heat has blasted Asia from India to the P… [+2683 chars]",
    },
    {
      source: {
        id: null,
        name: "Science Daily",
      },
      author: null,
      title:
        "Bee body mass, pathogens and local climate influence heat tolerance",
      description:
        "How well bees tolerate temperature extremes could determine their ability to persist in a changing climate. But heat tolerance varies between and within populations, so entomologists examined bee physical traits to understand how these traits interact with en…",
      url: "https://www.sciencedaily.com/releases/2024/05/240507150124.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2024-05-07T19:01:24Z",
      content:
        "How well bees tolerate temperature extremes could determine their ability to persist in a changing climate. But heat tolerance varies between and within populations, so a research team led by Penn St… [+6034 chars]",
    },
    {
      source: {
        id: null,
        name: "Cheezburger.com",
      },
      author: "BenWeiss, BenWeiss",
      title:
        "'I don't need your input. Just do what I say': New manager flexes his muscles with warehouse temperature policy, employee tries to warn him, malicious compliance ensues",
      description:
        "Don't you just love it when the new manager makes things exponentially worse for everyone else? It's a common mistake that these horrible bosses tend to make. They come in and immediately feel like they know a better solution to the current system. Without pr…",
      url: "https://cheezburger.com/26075141/i-dont-need-your-input-just-do-what-i-say-new-manager-flexes-his-muscles-with-warehouse-temperature",
      urlToImage:
        "https://i.chzbgr.com/thumb1200/26075141/h479614F1/muscles-with-warehouse-temperature-policy-employee-tries-to-warn-him-malicious-compliance-ensues",
      publishedAt: "2024-05-24T18:00:00Z",
      content:
        "Don't you just love it when the new manager makes things exponentially worse for everyone else? It's a common mistake that these horrible bosses tend to make. They come in and immediately feel like t… [+957 chars]",
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Robert Lea",
      title:
        "NASA's TESS exoplanet-hunter finds tantalizingly close Earth-size world with moderate temperature",
      description:
        "NASA exoplanet-hunter TESS has found a temperate, Earth-size world in the habitable zone of its red dwarf star. This planet could make waves in the search for life.",
      url: "https://www.space.com/gliese-12-b-tess-exoplanet-hunt-for-life",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/3kFZeeVoNk3vy3HmLrgrF7-1200-80.png",
      publishedAt: "2024-05-23T17:00:28Z",
      content:
        'Using NASA\'s Transiting Exoplanet Survey Satellite (TESS), scientists have discovered a tantalizing world that is remarkably close to our solar system.\r\nThe extrasolar planet, or "exoplanet," named G… [+10930 chars]',
    },
    {
      source: {
        id: null,
        name: "InsideEVs ",
      },
      author: "Iulian Dnistran",
      title:
        "Putting a Wet Towel on a Tesla Supercharger Handle Gets Faster Charging Speeds",
      description:
        "The trick is reportedly most useful on older, V2 Supercharger stalls, but it can also come in handy on the newer V3 units if you happen to have a Cybertruck parked on your driveway.",
      url: "https://insideevs.com/news/718718/tesla-supercharger-wet-towel-improve-charging-speed/",
      urlToImage:
        "https://cdn.motor1.com/images/mgl/rKZNoY/s1/tesla-owners-using-wet-towels-on-charging-cable-handles-to-improve-charging-speeds-on-superchargers.jpg",
      publishedAt: "2024-05-08T01:22:21Z",
      content:
        "Everybody who knows EVs knows that extreme temperatures and high charging speeds dont usually mix well. But some Tesla owners discovered that they can trick the system on hot, sunny days to get a lit… [+4338 chars]",
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Science X",
      title:
        "Solid-state reaction among multiphase multicomponent ceramic enhances ablation performance, study finds",
      description:
        "Multicomponent ultra-high temperature ceramic (UHTC) has attracted much attention in research due to its superior high-temperature mechanical properties, lower thermal conductivity and enhanced oxidation resistance.",
      url: "https://phys.org/news/2024-05-solid-state-reaction-multiphase-multicomponent.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2024/solid-state-reaction-a.jpg",
      publishedAt: "2024-05-08T18:45:19Z",
      content:
        "by KeAi Communications Co., Ltd.\r\nMulticomponent ultra-high temperature ceramic (UHTC) has attracted much attention in research due to its superior high-temperature mechanical properties, lower therm… [+1972 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "judysanhz30@gmail.com (Judy Sanhz)",
      title: "Is the Google Pixel 8a waterproof?",
      description:
        "Is the Google Pixel 8a waterproof? We'll provide easy-to-understand answers so you know how much water your phone can resist.",
      url: "https://www.androidcentral.com/phones/is-the-pixel-8a-waterproof",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/uUonzEjAggGMsaeQsivaN9-1200-80.jpg",
      publishedAt: "2024-05-08T20:10:00Z",
      content:
        "Is the Google Pixel 8a waterproof?\r\nBest answer: Yes, the Google Pixel 8a is waterproof, but there are some limitations. It has an IP67 rating, which means that it's protected against temporary immer… [+3132 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "judysanhz30@gmail.com (Judy Sanhz)",
      title: "Is the Fitbit Ace LTE waterproof?",
      description:
        "The Kid's wearable Fitbit Ace LTE comes with a long list of specs, including its resistance to water. It can take on some water, but what's its limit?",
      url: "https://www.androidcentral.com/wearables/is-fitbit-ace-lte-waterproof",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/SeA6joAVvtnE984jnVB6R4-1200-80.jpg",
      publishedAt: "2024-05-31T16:15:53Z",
      content:
        "Is the Fitbit Ace LTE waterproof?\r\nBest answer: No, the Fitbit Ace LTE is not waterproof but rather water-resistant. It can withstand the pressure 50 meters of water can create, but that doesn't mean… [+3210 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
      title: "Galaxy Watch 7 Ultra leak reveals a very new design",
      description:
        "The July Galaxy Unpacked event will likely unveil Samsung’s next Wear OS-powered smartwatches. However, leaked renders give us an early preview.",
      url: "https://www.androidcentral.com/wearables/samsung-galaxy-watch-7-ultra-renders-leak",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/7WHLsALvxiberxzotozTBg-1200-80.jpg",
      publishedAt: "2024-05-24T15:54:54Z",
      content:
        "What you need to know\r\n<ul><li>Ahead of the anticipated July Unpacked event, the first renders of Galaxy Watch 7 Ultra have popped up on the web.</li><li>They reveal an all-new squarish design on the… [+3113 chars]",
    },
    {
      source: {
        id: null,
        name: "Slothconservation.org",
      },
      author: "Admin",
      title: "Why Are Sloths So Slow?",
      description:
        "Why Are Sloths So Slow? The answer is surprisingly simple: Being slow is an incredibly successful strategy for survival. Learn more...",
      url: "https://slothconservation.org/sloths-move-slow/",
      urlToImage:
        "https://slothconservation.b-cdn.net/wp-content/uploads/2016/06/SLOTH_TH_027338.jpg",
      publishedAt: "2024-05-21T08:55:56Z",
      content:
        "When you imagine a sloth, you probably think of a simple, lazy creature that does little other than sleep all day. In fact, you might wonder how such a slow-moving animal survives in the wild at all.… [+6948 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Mary-Elisabeth Combs",
      title:
        "Gas Prices Might Be Up This Spring, but What Can You Expect to Be Paying This Summer? - CNET",
      description:
        "Gas prices might be spiking this spring, but experts have other ideas about what could happen this summer. Here's what to know.",
      url: "https://www.cnet.com/personal-finance/gas-prices-might-be-up-this-spring-but-what-can-you-expect-to-be-paying-this-summer/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/afc600316cd0e221ea9b72c9e2a0fbd28f1ed843/hub/2022/08/11/a6874364-614f-4e34-9719-a13e693b5a96/gettyimages-1406448699.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-09T09:00:04Z",
      content:
        "Every summer, when I go to fuel up my car, it seems like gas prices skyrocket out of nowhere. One day I'm paying about $3.50 a gallon for gas, and then the next day, without any rhyme or reason, and … [+2702 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Tyler Lacoma",
      title:
        "Today Only: Lock in $130 in Savings on the Level Lock+ Connect at Best Buy - CNET",
      description:
        "Keep your wallet and home or business safe with this major discount on the Level Lock+ at Best Buy today only.",
      url: "https://www.cnet.com/deals/today-only-lock-in-130-in-savings-on-the-level-lock-connect-at-best-buy/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/957a103d7c821557664cf57c43823c7a22d7fd59/hub/2024/02/14/c9e11814-6629-4c46-a1ee-b0a261aeb805/level-lock-apple-watch-1.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-29T19:40:19Z",
      content:
        "We hear two things all the time about smart locks: They're expensive, and they look too bulky on your front door. But Best Buy's deal of the day on the Level Lock+ addresses both complaints. The prem… [+2360 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Jessica Rendall",
      title:
        "Apple Announces New Tinnitus Research, Continues Dive Into Hearing Health - CNET",
      description:
        "Apple is running a few long-term health studies. Your hearing health -- and what those earbuds and headphones can do it -- is one of them.",
      url: "https://www.cnet.com/health/medical/apple-announces-new-tinnitus-research-continues-dive-into-hearing-health/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/9c064e9757aa8eaf3abed5500794881dfb5744c6/hub/2024/04/15/0d87c9d7-7352-4e0a-8358-189db68231b5/airpods-2-features.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-28T22:14:00Z",
      content:
        "Apple on Tuesday announced preliminary insights on tinnitus from its ongoing hearing health study, adding evidence to the fact that tinnitus is a widespread and sometimes disruptive condition stemmin… [+3865 chars]",
    },
    {
      source: {
        id: null,
        name: "Gigazine.net",
      },
      author: "@GIGAZINE",
      title:
        "車の中で息を吸うと発がん性のある有害物質も吸い込んでしまうリスクがある",
      description:
        "通勤や子どもの送り迎え、旅行などに車を利用している人は多いはずですが、車内を漂う有害物質のリスクを認識している人は少ないかもしれません。新たに、アメリカのデューク大学やグリーン科学政策研究所などが行った研究では、「ほとんどの自動車には難燃性の材料として発がん性物質が使われており、車内で息を吸うとこれらの有害物質を吸い込んでしまうリスクがある」ことが明らかになりました。続きを読む...",
      url: "https://gigazine.net/news/20240514-breathing-potential-carcinogens-inside-car/",
      urlToImage:
        "https://i.gzn.jp/img/2024/05/14/breathing-potential-carcinogens-inside-car/00.jpg",
      publishedAt: "2024-05-14T03:30:00Z",
      content:
        "Flame Retardant Exposure in Vehicles Is Influenced by Use in Seat Foam and Temperature | Environmental Science &amp; Technologyhttps://pubs.acs.org/doi/10.1021/acs.est.3c10440\r\nStudy: Youre Breathing… [+485 chars]",
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Science X",
      title:
        "Potentially habitable 'exo-Venus' with Earth-like temperature discovered",
      description:
        'Astronomers have made the rare and tantalizing discovery of an Earth-like exoplanet 40 light-years away that may be just a little warmer than our own world. The new paper "Gliese 12 b, A Temperate Earth-sized Planet at 12 Parsecs Discovered with TESS and CHEO…',
      url: "https://phys.org/news/2024-05-potentially-habitable-exo-venus-earth.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2024/potentially-habitable.jpg",
      publishedAt: "2024-05-23T14:00:02Z",
      content:
        "This article has been reviewed according to Science X's \r\neditorial process\r\nand policies.\r\nEditors have highlighted\r\nthe following attributes while ensuring the content's credibility:\r\nfact-checked\r… [+425 chars]",
    },
    {
      source: {
        id: null,
        name: "Phys.Org",
      },
      author: "Science X",
      title: "Indian capital records highest-ever temperature of 49.9 Celsius",
      description:
        "Temperatures in India's capital have soared to a record-high 49.9 degrees Celsius (121.8 Fahrenheit) as authorities warn of water shortages in the sprawling mega-city.",
      url: "https://phys.org/news/2024-05-indian-capital-highest-temperature-celsius.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/2024/a-vendor-with-an-umbre.jpg",
      publishedAt: "2024-05-29T07:38:08Z",
      content:
        "Temperatures in India's capital have soared to a record-high 49.9 degrees Celsius (121.8 Fahrenheit) as authorities warn of water shortages in the sprawling mega-city.\r\nThe India Meteorological Depar… [+3587 chars]",
    },
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      author: "Sarang Sheth",
      title:
        "Want Perfect Sourdough Bread every single time? This Kitchen Tool gives you foolproof results",
      description:
        "Want Perfect Sourdough Bread every single time? This Kitchen Tool gives you foolproof resultsThe beauty of baking your own bread lies in its simplicity, and the fact that the yeast and bacteria does most of the job for...",
      url: "https://www.yankodesign.com/2024/05/14/want-perfect-sourdough-bread-every-single-time-this-kitchen-tool-gives-you-foolproof-results/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2024/05/want-perfect-sourdough-bread-every-single-time-this-kitchen-tool-gives-you-results-every-time/DoughBed_by_Sourhouse_hero.jpg",
      publishedAt: "2024-05-15T01:45:30Z",
      content:
        "The beauty of baking your own bread lies in its simplicity, and the fact that the yeast and bacteria does most of the job for you. You don’t need fancy equipment or ingredients, just a big container … [+4764 chars]",
    },
    {
      source: {
        id: "the-next-web",
        name: "The Next Web",
      },
      author: "Siôn Geschwindt",
      title:
        "Swedish startup wins EU funding to print organic indoor solar panels",
      description:
        "The EU has granted €3.3mn to a consortium led by Swedish startup Epishine. The group’s mission is to boost the development of organic solar panels.    In this case, organic refers to solar panels that are carbon-based. Instead of using silicon to conduct elec…",
      url: "https://thenextweb.com/news/swedish-startup-eu-funding-print-organic-indoor-solar-panels",
      urlToImage:
        "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F05%2Fepishine-organic-solar-panel.jpeg&signature=9e5ba218b974beb610cccabf5fb03013",
      publishedAt: "2024-05-06T15:11:57Z",
      content:
        "The EU has granted 3.3mn to a consortium led by Swedish startup Epishine. The groups mission is to boost the development of organic solar panels.   \r\nIn this case, organic refers to solar panels that… [+2152 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "そうこ",
      title: "史上最も深い「ブルーホール」見つかる。底、まだ見えず",
      description:
        "画像はベリーズにあるグレート・ブルーホール。Photo:TheTerraMarProjectブルーホール。地面が海中に水没することで、まるで海の真ん中に大きな穴が空いているように見える地形のこと。世界には大きなブルーホールがいくつかありますが、メキシコのチェトゥマル湾で発見されたブルーホールは、史上最深の可能性が…。だって、まだ底がわからないくらい深いのですから。TaamJaブルーホール深いふかー",
      url: "https://www.gizmodo.jp/2024/05/deepest-blue-hole-world-bottom-elusive.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2024/05/07/240607bluehole.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2024-05-10T11:00:00Z",
      content:
        "Taam Ja\r\nTaam Ja\r\n12Frontiers\r\nCTDConductivity/Temperature/Depth/) 1378420\r\nGraphic: Alcérreca-Huerta et al., Front. Mar. Sci. 2023\r\n300\r\nTaam Ja100\r\n420\r\n2Taam Ja\r\n420\r\nGraphic: Alcérreca-Huerta et … [+25 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "The Associated Press",
      title:
        "Ex-day care worker convicted in death of 1-year-old girl left in van on scorching day",
      description:
        "A former Nebraska day care worker who mistakenly left a 1-year-old girl in a van for more than five hours on a scorching day has been convicted in her death from hyperthermia",
      url: "https://abcnews.go.com/US/wireStory/day-care-worker-convicted-death-1-year-girl-110519163",
      urlToImage:
        "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
      publishedAt: "2024-05-24T00:16:34Z",
      content:
        "OMAHA, Neb. -- A former Nebraska day care worker who mistakenly left a 1-year-old girl in a van for more than five hours on a scorching day has been convicted in her death from hyperthermia. \r\nRyan W… [+1095 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Aaron Mamiit",
      title: "Hurry! The Dyson Airstrait straightener has a rare discount",
      description:
        "The Dyson Airstrait gets your hair from wet to dry and straight at the same time. The hair straightener is on sale from Best Buy for $400, for savings of $100.",
      url: "https://www.digitaltrends.com/home/dyson-airstrait-hair-straightener-deal-best-buy-may-2024/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2023/10/Dyson-Airstrait-In-Use-e1697904861614.jpeg?resize=1200%2C630&p=1",
      publishedAt: "2024-05-21T16:30:57Z",
      content:
        "Dyson\r\nThere’s always high demand for Dyson deals because the popular brand’s products are expensive, though that’s understandable considering the premium features that they come with. For example, w… [+1863 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Charles Martin)",
      title: "Under-screen Face ID allegedly pushed back to 2026 iPhone 18 Pro",
      description:
        "Under-screen Face ID always seems to be a year away, and the latest rumor now pins it to the 2027 iPhone 18 Pro and iPhone 18 Pro Max models.iPhone 15 always-on displayWriting on X/Twitter in April, Young's original roadmap claimed that an under-screen Face I…",
      url: "https://appleinsider.com/articles/24/05/04/under-screen-face-id-allegedly-pushed-back-to-2026-iphone-17-pro",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/59545-121559-50215-98746-Apple-Event----September-7-1-18-0-screenshot-xl-xl.jpg",
      publishedAt: "2024-05-04T16:55:05Z",
      content:
        "iPhone 15 always-on display\r\nUnder-screen Face ID always seems to be a year away, and the latest rumor now pins it to the 2026 iPhone 18 Pro and iPhone 18 Pro Max models.\r\nWriting on X/Twitter in Apr… [+1110 chars]",
    },
    {
      source: {
        id: "new-scientist",
        name: "New Scientist",
      },
      author: "Karmela Padavic-Callaghan",
      title: "Physicists are grappling with their own reproducibility crisis",
      description:
        "A contentious meeting of physicists highlighted concerns, failures and possible fixes for a crisis in condensed matter physics",
      url: "https://www.newscientist.com/article/2431927-physicists-are-grappling-with-their-own-reproducibility-crisis/",
      urlToImage:
        "https://images.newscientist.com/wp-content/uploads/2024/05/17205033/SEI_204659144.jpg",
      publishedAt: "2024-05-17T20:58:32Z",
      content:
        "Some claims of high-temperature superconductivity were unable to be recreated\r\nShutterstock / Dragon Claws\r\nPhysics is in a crisis. Over the past year, a series of research papers claimed to find evi… [+410 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Lloyd Lee",
      title:
        "Cockroaches wouldn't exist without humans. We helped them become one of the world's worst pests, according to a new study.",
      description:
        "The German cockroach, one of the most common household pests,  adapted to thrive in human dwellings about 2,100 years ago, according to a new study.",
      url: "https://www.businessinsider.com/origin-cockroaches-evolution-human-made-environments-study-2024-5",
      urlToImage:
        "https://i.insider.com/6655052e239fda2da6cbea9f?width=1200&format=jpeg",
      publishedAt: "2024-05-27T23:57:17Z",
      content:
        "A German cockroach on a piece of bread.Schellhorn/ullstein bild via Getty Images\r\n<ul><li>The German cockroach is one of the most common household pests worldwide.</li><li>New research found that the… [+3692 chars]",
    },
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      author: "Vincent Nguyen",
      title:
        "This All-in-One Device Automatically Monitors Your Home Environment for Healthier Living",
      description:
        "This All-in-One Device Automatically Monitors Your Home Environment for Healthier LivingThe Ultrahuman Home is an advanced home health device designed to track and improve key environmental markers such as light exposure, air quality, and noise...",
      url: "https://www.yankodesign.com/2024/05/25/this-all-in-one-device-automatically-monitors-your-home-environment-for-healthier-living/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2024/05/this-all-in-one-device-automatically-monitors-your-home-environment-for-healthier-living/Ultrahuman_Home_health_monitor_hero.jpg",
      publishedAt: "2024-05-26T01:45:43Z",
      content:
        "The Ultrahuman Home is an advanced home health device designed to track and improve key environmental markers such as light exposure, air quality, and noise levels. It establishes a unique connection… [+8943 chars]",
    },
    {
      source: {
        id: null,
        name: "Science Daily",
      },
      author: null,
      title: "Free-forming organelles help plants adapt to climate change",
      description:
        "Plants' ability to sense light and temperature, and their ability to adapt to climate change, hinges on free-forming structures in their cells whose function was, until now, a mystery. Researchers have now determined how these structures work on a molecular l…",
      url: "https://www.sciencedaily.com/releases/2024/05/240507145953.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2024-05-07T18:59:53Z",
      content:
        "Plants' ability to sense light and temperature, and their ability to adapt to climate change, hinges on free-forming structures in their cells whose function was, until now, a mystery.For the first t… [+4424 chars]",
    },
    {
      source: {
        id: null,
        name: "Science Daily",
      },
      author: null,
      title: "Strings that can vibrate forever (kind of)",
      description:
        "Researchers have engineered string-like resonators capable of vibrating longer at ambient temperature than any previously known solid-state object -- approaching what is currently only achievable near absolute zero temperatures. Their study pushes the edge of…",
      url: "https://www.sciencedaily.com/releases/2024/05/240522130402.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2024-05-22T17:04:02Z",
      content:
        "Researchers from TU Delft and Brown University have engineered string-like resonators capable of vibrating longer at ambient temperature than any previously known solid-state object -- approaching wh… [+4467 chars]",
    },
    {
      source: {
        id: null,
        name: "Cam.ac.uk",
      },
      author: null,
      title: "2023 was the hottest summer in two thousand years",
      description:
        "Researchers have found that 2023 was the hottest summer in the Northern Hemisphere in the past two thousand years, almost four degrees warmer than the coldest",
      url: "https://www.cam.ac.uk/research/news/2023-was-the-hottest-summer-in-two-thousand-years",
      urlToImage:
        "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/news/research/news/gettyimages-2022583362-dp.jpg",
      publishedAt: "2024-05-20T12:52:32Z",
      content:
        "Although 2023 has been reported as the hottest year on record, the instrumental evidence only reaches back as far as 1850 at best, and most records are limited to certain regions.\r\nNow, by using past… [+4445 chars]",
    },
    {
      source: {
        id: null,
        name: "Umich.edu",
      },
      author: null,
      title: "Recovering electricity from heat storage hits 44% efficiency",
      description:
        "Closing in on the theoretical maximum efficiency, devices for turning heat into electricity are edging closer to being practical for use on the grid, according to University of Michigan research.",
      url: "https://news.umich.edu/renewable-grid-recovering-electricity-from-heat-storage-hits-44-efficiency/",
      urlToImage:
        "https://news.umich.edu/wp-content/uploads/mc-image-cache/2024/05/renewable-grid-recovering-electricity-from-heat-storage-hits-44-efficiency-TPVcell_test.jpg",
      publishedAt: "2024-05-24T13:26:22Z",
      content:
        "To measure the power produced by his photovoltaic cells, Roy-Layinde holds a heat source held over the photovoltaic cell, which emits the infrared radiation that the cell converts into electricity. W… [+4847 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Jacqui Kenyon,Steffie Drucker",
      title:
        "Google Earth lets you explore the world via satellite images on a 3D globe. Here's how to use it and make custom maps.",
      description:
        "Google Earth lets you explore the world virtually in 3D via satellite images and interactive maps. Use it to find your house or famous landmarks.",
      url: "https://www.businessinsider.com/google-earth",
      urlToImage:
        "https://i.insider.com/66199ced1caec1275a6fdd00?width=1200&format=jpeg",
      publishedAt: "2024-05-21T07:05:02Z",
      content:
        "Google Earth shows users a 3D view of our planet using satellite images. You can access Google Earth on any desktop or mobile device.Timothy A. Clary/Getty Images\r\n<ul><li>Google Earth combines satel… [+3642 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Amanda Goh",
      title:
        "A brutal heat wave in Mexico is causing monkeys to drop dead from trees",
      description:
        "Mexico's ongoing heat wave has been linked to the deaths of at least 26 people since March, the Associated Press reported.",
      url: "https://www.businessinsider.com/heat-wave-mexico-monkeys-falling-dead-trees-climate-change-extreme-2024-5",
      urlToImage:
        "https://i.insider.com/664d4fa114fb5b23cc5ef3be?width=1200&format=jpeg",
      publishedAt: "2024-05-22T04:04:07Z",
      content:
        "Monkeys are falling dead from trees because of a heat wave in Mexico.Luis Manuel Lopez/Reuters\r\n<ul><li>Soaring temperatures in Mexico are causing monkeys to fall dead from trees.</li><li>Dehydration… [+3461 chars]",
    },
    {
      source: {
        id: null,
        name: "Autoblog",
      },
      author: "Keenan Thompson",
      title: "The best LED headlights of 2024",
      description:
        "Filed under:\n Commerce,Parts and Accessories\n Continue reading The best LED headlights of 2024\nThe best LED headlights of 2024 originally appeared on Autoblog on Thu, 23 May 2024 05:00:00 EDT. Please see our terms for use of feeds.\nPermalink | \nEmail this | \n…",
      url: "https://www.autoblog.com/article/best-led-headlights/",
      urlToImage:
        "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/05/15135837/shiny_led_car_headlight_lamp.jpeg",
      publishedAt: "2024-05-23T09:00:00Z",
      content:
        "Autoblog may receive a share from purchases made via links on this page. Pricing and availability are subject to change.\r\nHeadlights are key to safety for nighttime driving and other low-visibility c… [+4488 chars]",
    },
    {
      source: {
        id: null,
        name: "Science Daily",
      },
      author: null,
      title: "Low-energy process for high-performance solar cells",
      description:
        "Finding reliable, eco-friendly power sources is crucial as our world grapples with increasing energy needs and the urgent call to combat climate change. Solar energy offers one solution, with scientists devising ever more efficient materials for capturing sun…",
      url: "https://www.sciencedaily.com/releases/2024/05/240507150043.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2024-05-07T19:00:43Z",
      content:
        "Finding reliable, eco-friendly power sources is crucial as our world grapples with increasing energy needs and the urgent call to combat climate change. Solar energy offers one solution, with scienti… [+3068 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "nandika.iyerravi@futurenet.com (Nandika Ravi)",
      title: "Google I/O 2024: The biggest announcements from AI to Android",
      description:
        "A round-up of all the biggest announcements at this year's Google I/O.",
      url: "https://www.androidcentral.com/apps-software/google-io-2024-biggest-announcements",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/itUbmDWojwRBzuhSguszf-1200-80.jpg",
      publishedAt: "2024-05-16T06:00:13Z",
      content:
        "It's a wrap on Google I/O 2024, and our crew was on the ground experiencing the event firsthand as the tech giant announced a host of Gemini-related features. Even if you didn't make it to Mountain V… [+12075 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "JD Christison",
      title:
        "WinkBed EcoCloud Mattress Review 2024: A Latex Hybrid Bed for Side Sleepers - CNET",
      description:
        "Softer natural hybrid beds are few and far between online. Luckily, this mattress may work for green thumbs who want a more pressure-relieving option.",
      url: "https://www.cnet.com/health/sleep/winkbed-ecocloud-mattress-review/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/581f95a218b0a128ec4923bb0571ee9d733ba13c/hub/2024/05/22/a6178064-d463-4500-9338-cbc8ad9c2ff3/ecocloud-mattress-by-winkbed-construction-jg-2.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-30T14:00:04Z",
      content:
        "It is common for us to test a latex hybrid bed and perceive it to be around a proper medium-firm. It's the nature of the beast when you're dealing with beds composed of ultra-responsive materials lik… [+11844 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "McKenzie Dillon",
      title:
        "Saatva Classic Mattress Review 2024: An Expert Take on This Responsive, Premium Bed - CNET",
      description:
        "The Saatva Classic is a luxury mattress with three firmness options, providing comfort and enhanced support for proper spinal alignment.",
      url: "https://www.cnet.com/health/sleep/saatva-classic-mattress-review/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/a18d7da699f936188d0d14a4d64dc4b46b6e8a7d/hub/2021/10/20/7eaca019-b31b-4b88-9105-f2f4c7d34bed/saatva-mattress-review-cover-5.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-05-11T00:00:00Z",
      content:
        "In recent years, memory foam mattresses have grown in popularity, but there are still a lot of quality innerspring mattresses on the market. The Saatva Classic mattress is one of the more notable inn… [+14868 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "Paul McNally",
      title:
        "The Qidi Tech Q1 Pro is next level when it comes to adding a new 3D printer to your set-up for your games room gear",
      description:
        "The last 12 months have been great for 3D printers. My favorites so far have been the Bambu A1, despite… Continue reading The Qidi Tech Q1 Pro is next level when it comes to adding a new 3D printer to your set-up for your games room gear\nThe post The Qidi Tec…",
      url: "https://readwrite.com/the-qidi-tech-q1-pro-is-next-level-when-it-comes-to-adding-a-new-3d-printer-to-your-set-up-for-your-games-room-gear/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/05/qidiq1pro.jpg",
      publishedAt: "2024-05-20T11:08:03Z",
      content:
        "The last 12 months have been great for 3D printers. My favorites so far have been the Bambu A1, despite its now-resolved issues, the recent Creality K1C which I love, and now the Qidi Tech Q1 Pro whi… [+5792 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Caleb Denison",
      title: "You Asked: Sony vs. Sony, neon TVs, and YouTube in HDR",
      description:
        "This week: Why buy one Sony over another, the grass can be too green, and why isn't there more HDR content on YouTube?",
      url: "https://www.digitaltrends.com/home-theater/you-asked-sony-a80l-vs-bravia-8-lg-g2-g4-youtube-hdr/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2024/06/You-Asked-Ep-40-On-Site-1.jpg?resize=1200%2C630&p=1",
      publishedAt: "2024-06-02T14:00:01Z",
      content:
        "On today’s episode of You Asked: The Sony A80L versus the 2024 Bravia 8 OLED, how to fix colors that look like neon on your TV, who actually cares about TV speakers, and why aren’t more TV review vid… [+8666 chars]",
    },
    {
      source: {
        id: "new-scientist",
        name: "New Scientist",
      },
      author: "Michael Le Page",
      title:
        "Hottest April on record is the 11th record-breaking month in a row",
      description:
        "Global temperatures in April 2024 were 1.6°C higher than the average for April during the pre-industrial era",
      url: "https://www.newscientist.com/article/2430049-hottest-april-on-record-is-the-11th-record-breaking-month-in-a-row/",
      urlToImage:
        "https://images.newscientist.com/wp-content/uploads/2024/05/07164631/SEI_203062665.jpg",
      publishedAt: "2024-05-08T03:00:22Z",
      content:
        "A truck sprays water on a road in Dhaka, Bangladesh, to lower the temperature during a heatwave in April\r\nMUNIR UZ ZAMAN/AFP via Getty Images\r\nThe records just keep being smashed. Global temperatures… [+2170 chars]",
    },
    {
      source: {
        id: null,
        name: "Robb Report",
      },
      author: "Rachel Cormack",
      title:
        "The World’s First Commercial Space Plane Is (Almost) Ready for Takeoff",
      description:
        "Sierra Space’s Dream Chaser is expected to deliver 7,800 pounds of cargo to the ISS later this year.",
      url: "https://robbreport.com/motors/aviation/dream-chaser-space-plane-nasa-mission-1235624146/",
      urlToImage:
        "https://media.zenfs.com/en/robb_report_967/fd3e46a9454ea4fb68c60f8087b89d8d",
      publishedAt: "2024-05-21T17:00:00Z",
      content:
        "The worlds first winged commercial space plane is one step closer to launch.\r\nSierra Spaces Dream Chaser DC-100 arrived at NASAs Kennedy Space Center in Florida on Saturday, May 18 for final testing … [+2353 chars]",
    },
    {
      source: {
        id: null,
        name: "The Atlantic",
      },
      author: "Yasmin Tayag",
      title: "Wait, Nuts and Flour Should Go in the Fridge?",
      description: "Food storage is way more confusing than it ought to be.",
      url: "https://www.theatlantic.com/health/archive/2024/05/fridge-grocery-storage-nuts-flour/678540/?utm_source=feed",
      urlToImage: null,
      publishedAt: "2024-05-30T15:13:00Z",
      content:
        "My refrigerator has a chronic real-estate problem. The issue isn’t leftovers; it’s condiments. Jars and bottles have filled the door and taken over the main shelves. There’s so little room between th… [+8434 chars]",
    },
  ],
};

export const moviesNews = {
  status: "ok",
  totalResults: 70,
  articles: [
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Lifestyle Desk",
      title:
        "Disha Patani sets fashion goals in backless dress at Anant Ambani's lavish cruise party - The Times of India",
      description:
        "Disha Patani, a prominent Bollywood actress, stunned in a luxurious dress designed by Silvia Tcherassi, priced at 1,390 dollars, at Anant Ambani and R",
      url: "https://timesofindia.indiatimes.com/life-style/fashion/celeb-style/disha-patani-sets-fashion-goals-in-backless-dress-at-anant-ambanis-lavish-cruise-party/articleshow/110650896.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110650896,width-1070,height-580,imgsize-71814,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-03T03:15:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title: "Lengthy runtime locked for Prabhas’ Kalki 2898 AD? - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/lengthy-runtime-locked-for-prabhas-kalki-2898-ad.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-06-03T02:30:00Z",
      content:
        "With every update, the buzz around Prabhas’ Kalki 2898 AD is skyrocketing. The recently released animated series Bujji and Bhairava gave us a hint on what to expect from this flick, which is a fusion… [+1045 chars]",
    },
    {
      source: {
        id: null,
        name: "Greatandhra.com",
      },
      author: "admin",
      title:
        "Will Actress Samyuktha Continue Her Success Spree in Hindi Cinema? - Greatandhra",
      description:
        "Actress Samyuktha has earned a good reputation by delivering super hits in Telugu, Tamil, Malayalam, and Kannada films from the moment she entered the film industry.",
      url: "https://www.greatandhra.com/movies/news/will-samyuktha-continue-her-success-spree-in-bwood-138322",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/Samyuktha-Menon21717381469.jpg",
      publishedAt: "2024-06-03T02:24:29Z",
      content:
        "Actress Samyuktha has earned a good reputation by delivering super hits in Telugu, Tamil, Malayalam, and Kannada films from the moment she entered the film industry.\r\nHer combination of beauty and ta… [+705 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Ananya Das",
      title:
        "Mr and Mrs Mahi box office collection day 3: Rajkummar Rao film witnesses growth, earns nearly ₹6 cr on first Sunday - Hindustan Times",
      description:
        "Mr and Mrs Mahi box office collection day 3: The film saw some growth on the third day of its release. It's the second collaboration between Janhvi, RajKummar. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/mr-and-mrs-mahi-box-office-collection-day-3-rajkummar-rao-janhvi-kapoor-film-witnesses-growth-on-first-sunday-101717379884663.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/03/1600x900/mrmrs_mahi_1717165674932_1717381283437.jpg",
      publishedAt: "2024-06-03T02:23:27Z",
      content:
        "Mr and Mrs Mahi box office collection day 3: The romantic drama stars Rajkummar Rao and Janhvi Kapoor in lead roles. As per Sacnilk.com, the film saw a jump in its numbers on its first Sunday, taking… [+2085 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Kashvi Raj Singh",
      title:
        "Natasa Stankovic Heads Out For A 'Glorious Day' Amid Hardik Pandya Divorce Rumours; See Viral Photo - News18",
      description:
        "Natasa Stankovic looked radiant as she dropped a mirror selfie taken in her building's elevator.",
      url: "https://www.news18.com/movies/natasa-stankovic-heads-out-for-a-glorious-day-amid-hardik-pandya-divorce-rumours-see-viral-photo-8918233.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2024/06/natasa-hardik-1-2024-06-28c1b32b7f02c4b66cac8c776dd39a51-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-06-03T02:02:52Z",
      content:
        "Natasa Stankovic and Hardik Pandyas divorce rumours have been making headlines for a long time now. While the couple has not issued any official statement as of now, Natasa took to her Instagram hand… [+2162 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Ananya Das",
      title:
        "Raha kisses dad Ranbir Kapoor on his cheeks, then gives a big smile as they return to Mumbai with Alia Bhatt. Watch - Hindustan Times",
      description:
        "In a video, Ranbir Kapoor was seen carrying Raha in his arms as he exited the Kalina Airport. Alia Bhatt walked beside him. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/raha-kapoor-kisses-dad-ranbir-kapoor-on-his-cheeks-then-gives-a-big-smile-as-they-return-to-mumbai-with-alia-bhatt-101717376363872.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/03/1600x900/raha_kapoor_1717379047703_1717379056302.jpg",
      publishedAt: "2024-06-03T01:45:49Z",
      content:
        "Actor couple Alia Bhatt and Ranbir Kapoor returned to Mumbai with their daughter Raha Kapoor after attending Anant Ambani and Radhika Merchant's second pre-wedding bash in Europe. Actor Salman Khan a… [+2503 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Raveena Tandon Was Not Drunk, False Complaint Filed: Mumbai Police - NDTV",
      description:
        "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      url: "https://www.ndtv.com",
      urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
      publishedAt: "2024-06-03T01:34:28Z",
      content:
        "arrow-down\r\nsearch\r\nbell\r\ntop-nav\r\nright-arrow\r\nsearch\r\nolympic\r\ncrypto_icon\r\n<ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>\r\nar… [+110 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "Rajinikanth and Lokesh Kanagaraj’s Coolie to start rolling from this date - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/rajinikanth-and-lokesh-kanagarajs-coolie-to-start-rolling-from-this-date.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-06-03T01:26:00Z",
      content:
        "Rajinikanth’s Vettaiyan arrives on big screens on October 10, clashing with NTR’s Devara. The film that is being directed by TJ Gnanavel explores the judiciary, police, and entrepreneurial systems. A… [+750 chars]",
    },
    {
      source: {
        id: null,
        name: "Odishatv.in",
      },
      author: "Deepak Acharya",
      title:
        "Daily Horoscope for June 3, 2024: Legal victory and health solutions for Gemini; navigating challenges for Libra - OTV News",
      description:
        "Daily Horoscope for June 3, 2024: Legal victory and health solutions for Gemini; navigating challenges for Libra",
      url: "https://odishatv.in/astrospeak/daily-horoscope-jun-03-2024-legal-victory-and-health-solutions-for-gemini-navigating-challenges-for-libra-236391",
      urlToImage:
        "https://images.odishatv.in/uploadimage/library/16_9/16_9_0/recent_photo_1685984029.jpg",
      publishedAt: "2024-06-03T00:10:00Z",
      content:
        "Zodiac signs play a crucial role in almost all aspects of our life. Every sign has its own set of characteristics. So, if you are eager to know about your wealth, health and financial issues, read th… [+43 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Dr J.N Pandey",
      title:
        "Capricorn Daily Horoscope Today, June 03, 2024 predicts embracing challenges - Hindustan Times",
      description:
        "Read Capricorn daily horoscope for June 03, 2024 to know your astrological predictions. Challenges may arise, but your perseverance will see you through. | Horoscope",
      url: "https://www.hindustantimes.com/astrology/horoscope/capricorn-daily-horoscope-today-june-03-2024-predicts-embracing-challenges-101717347012300.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/Capri_freepik_1716404225777_1717349688900.jpg",
      publishedAt: "2024-06-02T18:39:07Z",
      content:
        "Capricorn (22nd December to 19th January)\r\nDaily Horoscope Prediction says, Seize Your Opportunities Today\r\nCapricorn Daily Horoscope Today, June 03, 2024. However, it's crucial to stay humble and re… [+3504 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Dr J.N Pandey",
      title:
        "Sagittarius Daily Horoscope Today, June 03, 2024 predicts growth and fulfillment - Hindustan Times",
      description:
        "Read Sagittarius daily horoscope for June 03, 2024 to know your astrological predictions. Embrace spontaneity and the unknown with an open heart. | Horoscope",
      url: "https://www.hindustantimes.com/astrology/horoscope/sagittarius-daily-horoscope-today-june-03-2024-predicts-growth-and-fulfillment-101717347003440.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/sagi_freepik_1716403893629_1717349661869.jpg",
      publishedAt: "2024-06-02T18:38:06Z",
      content:
        "Sagittarius (22nd November to 21st December)\r\nDaily Horoscope Prediction says, Exploring New Horizons with Confidence\r\nSagittarius Daily Horoscope Today, June 03, 2024. Your adventurous spirit will g… [+3181 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Dr J.N Pandey",
      title:
        "Scorpio Daily Horoscope Today, June 03, 2024 predicts romantic endeavors - Hindustan Times",
      description:
        "Read Scorpio daily horoscope for June 03, 2024 to know your astrological predictions. Today marks a significant juncture in your professional life, Scorpio. | Horoscope",
      url: "https://www.hindustantimes.com/astrology/horoscope/scorpio-daily-horoscope-today-june-03-2024-predicts-romantic-endeavors-101717346996394.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/scorpio_freepik_1716403122737_1717349635053.jpg",
      publishedAt: "2024-06-02T18:37:06Z",
      content:
        "Scorpio (23rd October to 21st November)\r\nDaily Horoscope Prediction says, A Day of Reflection and Bold Decisions\r\nScorpio Daily Horoscope Today, June 03, 2024. Today marks a significant juncture in y… [+3446 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Dr J.N Pandey",
      title:
        "Virgo Daily Horoscope Today, June 03, 2024 predicts collaboration - Hindustan Times",
      description:
        "Read Virgo daily horoscope for June 03, 2024 to know your astrological predictions. Virgo, today is all about finding harmony in the chaos. | Horoscope",
      url: "https://www.hindustantimes.com/astrology/horoscope/virgo-daily-horoscope-today-june-03-2024-predicts-collaboration-101717346979295.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/Virgo_freepik_1716402299759_1717349589589.jpg",
      publishedAt: "2024-06-02T18:35:06Z",
      content:
        "Virgo (23rd August to 22nd September)\r\nDaily Horoscope Prediction says, Unlock Your Potential, Virgo Awaits\r\nVirgo Daily Horoscope Today, June 03, 2024. Take the time to reflect on what truly matters… [+3281 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "Krithi Shetty reveals what made her a big fan of Ram Charan - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/krithi-shetty-reveals-what-made-her-a-big-fan-of-ram-charan.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-06-02T17:30:00Z",
      content:
        "After the blockbuster Uppena, Krithi Shetty became an overnight sensation. Her performance as Bebamma made youth go crazy. But sadly, after this romantic drama, the young actress faced multiple failu… [+811 chars]",
    },
    {
      source: {
        id: null,
        name: "Greatandhra.com",
      },
      author: "admin",
      title: "Indrani Trailer - Brilliant Vision for India.. - Greatandhra",
      description:
        "Writer and Director Stephen Pallam stunned everyone by revealing the highly anticipated official trailer of Indrani movie and sharing his insightful outlook on India's future.",
      url: "https://www.greatandhra.com/movies/news/indrani-trailer-brilliant-vision-for-india-138317",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/IndianClicks_Indrani_Movie_650x400_06022024_1_11717346402.jpg",
      publishedAt: "2024-06-02T16:41:15Z",
      content:
        "Indrani Trailer - Technically Excellent &amp; Brilliant Vision For India\r\nWriter and Director Stephen Pallam stunned everyone by revealing the highly anticipated official trailer of Indrani movie and… [+1211 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "Shankar – During Indian shoot, Kamal sir asked me to plan a sequel - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/shankar-during-indian-shoot-kamal-sir-asked-me-to-plan-a-sequel.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-06-02T15:31:00Z",
      content:
        "During the audio launch of Indian 2, Shankar revealed an interesting detail about how the film kickstarted. He said, “While shooting for Indian, Kamal Haasan sir asked me to plan a sequel. But I didn… [+721 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Srijita Sen, Yatamanyu Narain",
      title:
        "Adah Sharma Shifts Into Sushant Singh Rajput’s Former Apartment, Says 'It Gives Me Positive Vibes' - News18",
      description:
        "Adah Sharma has finally moved into Sushant Singh Rajput's old apartment, citing it gives her positive vibes.",
      url: "https://www.news18.com/movies/adah-sharma-shifts-into-sushant-singh-rajputs-former-apartment-says-it-gives-me-positive-vibes-8917732.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2024/06/adah-sharma-sushant-singh-rajput-2024-06-d257b3aea276cb802a869cb3b7694da4-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-06-02T15:22:50Z",
      content:
        "For the past few months, there has been a lot of speculation about Adah Sharma moving into the late actor Sushant Singh Rajputs apartment in Mumbai. Recently, the actress addressed these rumors and c… [+2550 chars]",
    },
    {
      source: {
        id: null,
        name: "soompi",
      },
      author: null,
      title:
        "BTS's Jungkook To Release New Song “Never Let Go” This Week - soompi",
      description:
        "Get ready for a brand-new song from BTS’s Jungkook!\r\n\r\nOn June 3 at midnight KST, BIGHIT MUSIC announced that Jungkook would be releasing a new fan song called “Never Let Go” later this week.\r\n\r\n“Never Let Go,” which is described as “a heartfelt tribute to Ju…",
      url: "https://www.soompi.com",
      urlToImage:
        "https://0.soompi.io/wp-content/uploads/2024/06/02081352/Jungkook.jpg",
      publishedAt: "2024-06-02T15:15:34Z",
      content:
        "Get ready for a brand-new song from BTSs Jungkook!\r\nOn June 3 at midnight KST, BIGHIT MUSIC announced that Jungkook would be releasing a new fan song called Never Let Go later this week.\r\nNever Let G… [+285 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "Suriya44: Suriya’s first look from Karthik Subbaraj’s film is splendid - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/suriya44-suriyas-first-look-from-karthik-subbarajs-film-is-splendid.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-06-02T15:07:00Z",
      content:
        "It’s raining updates from the Suriya44 team. The other day, it was announced that the star heroine and gorgeous beauty Pooja Hegde was roped in as the female lead. Now, here is the biggest surprise. … [+1023 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Entertainment Desk",
      title:
        "Imran Khan's witty response to person asking about his wealth: I acted... - India Today",
      description:
        "Actor Imran Khan recently had a witty response ready for an internet user who raised questions about how he has the money to build a house",
      url: "https://www.indiatoday.in/movies/celebrities/story/imran-khan-witty-response-to-person-asking-about-his-wealth-2547189-2024-06-02",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/imran-khan-025320443-16x9_0.jpg?VersionId=_4mIx1kstU3rkrJlt3EI21VRkPg_Ik1E",
      publishedAt: "2024-06-02T14:23:42Z",
      content:
        "Actor Imran Khan was recently asked about his wealth after he shared a post on social media about building a new house from scratch. When the user asked how come Imran has the money to build such a v… [+1118 chars]",
    },
  ],
};

export const technologyNews = {
  status: "ok",
  totalResults: 70,
  articles: [
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Best gaming phones to buy under ₹30,000 in June 2024: Poco F6, Realme GT 6T, Infinix GT 20 Pro and more | Mint - Mint",
      description:
        "Smartphone makers launch new phones frequently, making it tough to find the ideal gaming device. Here are the top 5 gaming phones under  ₹30,000 in India for June 2024.",
      url: "https://www.livemint.com/technology/gadgets/best-gaming-phones-to-buy-under-rs-30-000-in-june-2024-poco-f6-realme-gt-6t-infinix-gt-20-pro-oneplus-nord-ce-4-11717384441307.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/06/03/1600x900/unnamed_1715576694608_1717388903611.jpg",
      publishedAt: "2024-06-03T04:31:48Z",
      content:
        "With smartphone manufacturers launching new phones almost every week, it can be hard to find the ideal device for your specific needs. And with all the brands claiming blazing fast performance, findi… [+5434 chars]",
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "Bharat Upadhyay",
      title:
        "WWDC 2024: 5 Big Announcements To Expect From Apple CEO Tim Cook On June 10 - Times Now",
      description:
        "With Apple's WWDC scheduled to begin next week, here are five major announcements we can expect from CEO Tim Cook during his keynote next Monday.",
      url: "https://www.timesnownews.com/technology-science/wwdc-2024-5-big-announcements-to-expect-from-apple-ceo-tim-cook-on-june-10-article-110652993",
      urlToImage:
        "https://static.tnn.in/thumb/msid-110652952,thumbsize-27402,width-1280,height-720,resizemode-75/110652952.jpg",
      publishedAt: "2024-06-03T04:27:13Z",
      content:
        "Computex 2024: Nvidia Announces New AI Chips, Says Companies That Don't Embrace AI Will Be Left Behind",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Deeksha Somani",
      title:
        "Garena Free Fire MAX redeem codes for June 3: Win exciting gifts, free diamonds, skins, and more - The Times of India",
      description:
        "GAMING News: Garena Free Fire Max in India offers exclusive redemption codes for in-game perks and rewards, including sought-after weapons, skins, and items. Playe",
      url: "https://timesofindia.indiatimes.com/technology/gaming/garena-free-fire-max-redeem-codes-for-june-3-win-exciting-gifts-free-diamonds-skins-and-more/articleshow/110652948.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110652999,width-1070,height-580,imgsize-38368,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-03T04:26:00Z",
      content:
        "Garena Free Fire Max in India offers exclusive redemption codes for in-game perks and rewards, including sought-after weapons, skins, and items. Players can redeem codes on the Rewards Redemption web… [+1318 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Tech",
      title:
        "Vivo X Fold 3 India launch this week: Expected specifications and price - India Today",
      description:
        "The Vivo X Fold 3 Pro which features AI capabilities will debut in India on June 6 Here are the expected specifications and price of the phone",
      url: "https://www.indiatoday.in/technology/news/story/vivo-x-fold-3-india-launch-this-week-expected-specifications-and-price-2547293-2024-06-03",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/vivo-x-fold-3-pro-234801754-16x9.jpg?VersionId=jGtLw09u_AYvHZThrMAPmwZQtbgDV5F8",
      publishedAt: "2024-06-03T03:52:01Z",
      content:
        "Last year, the Indian market saw a surge of foldable phones with the introduction of models like the Samsung Galaxy Z Fold 5, OnePlus Open, and Oppo Find N2 Flip. These devices were well-received by … [+3085 chars]",
    },
    {
      source: {
        id: null,
        name: "Financial Express",
      },
      author: "The Financial Express",
      title:
        "Apple WWDC 2024: Not just AI superpowers, your iPhone is set to get these big changes with iOS 18 - The Financial Express",
      description: null,
      url: "https://www.financialexpress.com/life/technology-apple-wwdc-2024-not-just-ai-superpowers-your-iphone-is-set-to-get-these-big-changes-with-ios-18-3510511/",
      urlToImage: null,
      publishedAt: "2024-06-03T03:23:40Z",
      content: null,
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Storyboard18",
      title:
        "Samsung’s Galaxy S24 series dominates GenAI-capable smartphone market in Q1 2024 - Storyboard18",
      description: null,
      url: "https://news.google.com/rss/articles/CBMihgFodHRwczovL3d3dy5zdG9yeWJvYXJkMTguY29tL2JyYW5kLW1hcmtldGluZy9zYW1zdW5ncy1nYWxheHktczI0LXNlcmllcy1kb21pbmF0ZXMtZ2VuYWktY2FwYWJsZS1zbWFydHBob25lLW1hcmtldC1pbi1xMS0yMDI0LTMzMTc4Lmh0bdIBigFodHRwczovL3d3dy5zdG9yeWJvYXJkMTguY29tL2FtcC9icmFuZC1tYXJrZXRpbmcvc2Ftc3VuZ3MtZ2FsYXh5LXMyNC1zZXJpZXMtZG9taW5hdGVzLWdlbmFpLWNhcGFibGUtc21hcnRwaG9uZS1tYXJrZXQtaW4tcTEtMjAyNC0zMzE3OC5odG0?oc=5",
      urlToImage: null,
      publishedAt: "2024-06-03T03:22:11Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Storyboard18.com",
      },
      author: "Delshad Irani",
      title:
        "More than 75 games are now available to play directly on YouTube - Storyboard18",
      description:
        "More than 75 games are now available to play directly on YouTube",
      url: "https://www.storyboard18.com/gaming-news/more-than-75-games-are-now-available-to-play-directly-on-youtube-33162.htm",
      urlToImage:
        "https://images.storyboard18.com/storyboard18/2024/06/javier-miranda-xW7d0pvzdDk-unsplash-2024-06-aa215e8904ffae8c99075d676bae5a85-768x584.jpg",
      publishedAt: "2024-06-03T03:09:43Z",
      content:
        "A limited number of users in select markets have been testing a new feature called Playables on YouTube. Playables is a collection of free games users can play directly on the Google-owned platform. … [+1003 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "AMD Announces Ryzen 9950X, 9900X, 9700X, & 9600X Zen 5 CPUs, Extends AM5 Life, & AI CPUs - Gamers Nexus",
      description:
        "Sponsor: Fractal Torrent case on Amazon https://geni.us/VVBjoAMD today announced its new Zen 5 CPU lineup for a release date of July 2024, including the AMD ...",
      url: "https://www.youtube.com/watch?v=Y1yubL0h46U",
      urlToImage: "https://i.ytimg.com/vi/Y1yubL0h46U/maxresdefault.jpg",
      publishedAt: "2024-06-03T03:00:27Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Storyboard18.com",
      },
      author: "Indrani Bose",
      title:
        "Adani Sportsline's Sanjay Adsera on how corporate backing can elevate both player and chess - Storyboard18",
      description:
        "Adani Sportsline's Sanjay Adsera on how corporate backing can elevate both player and chess",
      url: "https://www.storyboard18.com/brand-marketing/adani-sportslines-sanjay-adsera-on-how-corporate-backing-can-elevate-both-player-and-chess-33163.htm",
      urlToImage:
        "https://images.storyboard18.com/storyboard18/2024/06/e-bit-of-body-text-2024-06-03T081920.313-2024-06-8c9a777f218b4fdd84953da4e940ab3d-768x432.jpg",
      publishedAt: "2024-06-03T02:56:03Z",
      content:
        'In India, the chess ecosystem has produced great talent; stories about R Pragganandhaa (who is supported by the Adani Group) are a source of inspiration for the rest of the country. "In India, weve g… [+3621 chars]',
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "Moinak Pal",
      title:
        "iPhone 15 Price Drop Alert: Now Available At Under Rs 65,000 During Flipkart Sale - Times Now",
      description:
        "Initially, the iPhone 15's 128GB variant was priced at Rs 79,900, the 256GB at Rs 89,900, and the 512GB at Rs 1,09,900.",
      url: "https://www.timesnownews.com/technology-science/iphone-15-price-drop-alert-now-available-at-under-rs-65000-during-flipkart-sale-article-110650473",
      urlToImage:
        "https://static.tnn.in/thumb/msid-110650487,thumbsize-44852,width-1280,height-720,resizemode-75/110650487.jpg",
      publishedAt: "2024-06-03T02:51:18Z",
      content:
        "iPhone 16 Pro Max To iPhone 16: Launch Date, Price In India, Design, Camera, Specifications, Latest Leaks",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Tech Desk",
      title:
        "Asus launches ROG Ally X handheld gaming console: All the details - The Times of India",
      description:
        "GAMING News: Asus has launched the ROG Ally X, a new variant of its handheld gaming PC, at Computex 2024, promising significant improvements over the original ROG",
      url: "https://timesofindia.indiatimes.com/technology/gaming/asus-launches-rog-ally-x-handheld-gaming-console-all-the-details/articleshow/110644133.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110644180,width-1070,height-580,imgsize-421079,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-03T02:25:00Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Tech Desk",
      title:
        "Nvidia announces Project G-Assist, an AI gaming sidekick - The Times of India",
      description:
        "GAMING News: Nvidia has unveiled Project G-Assist, an AI-powered assistant for gamers at Computex in Taipei. The AI overlay provides in-game tips and hardware opti",
      url: "https://timesofindia.indiatimes.com/technology/gaming/nvidia-announces-project-g-assist-an-ai-gaming-sidekick/articleshow/110643941.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110643941,width-1070,height-580,imgsize-1308624,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-03T02:23:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Akanksha Agnihotri",
      title:
        "From clutter-free zen to cosy comfort: The mental health benefits of home decor - Hindustan Times",
      description:
        "Creating a sanctuary within our homes goes beyond mere aesthetics; it nurtures our mental well-being. Discover the amazing mental health benefits of home decor.",
      url: "https://www.hindustantimes.com/photos/lifestyle/from-clutter-free-zen-to-cosy-comfort-the-mental-health-benefits-of-home-decor-101717348901433.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/spacejoy-IH7wPsjwomc-unsplash_1692880047187_1717349397486.jpg",
      publishedAt: "2024-06-03T00:30:03Z",
      content:
        "Published on Jun 03, 2024 06:00 AM IST\r\nCreating a sanctuary within our homes goes beyond mere aesthetics; it nurtures our mental well-being. Discover the amazing mental health benefits of home decor… [+653 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Wes Davis",
      title:
        "Billionaire who booked a SpaceX flight around the Moon cancels after delays - The Verge",
      description:
        "Billionaire Yusaku Maezawa announced that he is no longer planning a flight around the Moon with eight artists on SpaceX’s Starship.",
      url: "https://www.theverge.com/2024/6/2/24169972/spacex-starship-billionaire-lunar-flight-dearmoon-canceled-delays-yusaku-maezawa",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/45YBjDvxNcmOEVcysUgIyvmBWnE=/0x0:4000x2722/1200x628/filters:focal(2000x1361:2001x1362)/cdn.vox-cdn.com/uploads/chorus_asset/file/25475001/1364429812.jpg",
      publishedAt: "2024-06-02T20:38:11Z",
      content:
        "Billionaire who booked a SpaceX flight around the Moon cancels after delays\r\nBillionaire who booked a SpaceX flight around the Moon cancels after delays\r\n / I cant plan my future in this situation.\r\n… [+1616 chars]",
    },
    {
      source: {
        id: null,
        name: "Financial Express",
      },
      author: "The Financial Express",
      title:
        "IQOO Z9X 5G: Battery life is the big thing in its favour - The Financial Express",
      description: null,
      url: "https://www.financialexpress.com/life/technology-iqoo-z9x-5g-battery-life-is-the-big-thing-in-its-favour-3510366/",
      urlToImage: null,
      publishedAt: "2024-06-02T20:10:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "People Matters",
      },
      author: "Samriddhi Srivastava, People Matters Media Pvt. Ltd.",
      title:
        "How does new hire grooming impact company success? Epsilon's VP HR explains - People Matters",
      description:
        "The VP of HR at Epsilon revealed how Epsilon is actively seeking innovative methods to improve its onboarding and learning processes with a keen interest in exploring the potential of virtual reality VR and augmented reality AR",
      url: "https://www.peoplematters.in/article/recruitment/how-does-new-hire-grooming-impact-company-success-epsilons-vp-of-hr-explains-41509",
      urlToImage:
        "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1717051185/1717051177.jpg",
      publishedAt: "2024-06-02T18:35:42Z",
      content:
        "As organisations navigate the complexities of a digital age characterised by unprecedented innovation and disruption, the process of onboarding and nurturing new talent has emerged as a critical impe… [+8209 chars]",
    },
    {
      source: {
        id: null,
        name: "GSMArena.com",
      },
      author: "Ro",
      title:
        "Galaxy Watch Ultra confirmed, Realme C83 official and vivo announces S19 series, Week 22 in review - GSMArena.com news - GSMArena.com",
      description:
        "The Motorola Edge 50 Ultra and the Poco F6 family sparked a lot of interest this week as well. This week Realme made the budget C63 official with a 50MP...",
      url: "https://www.gsmarena.com/galaxy_watch_ultra_confirmed_realme_c83_official_and_vivo_announces_s19_series_week_22_in_review-news-63107.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/24/06/week-in-review-22/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2024-06-02T18:23:01Z",
      content:
        "This week Realme made the budget C63 official with a 50MP main camera and 45W charging, while vivo announced its upper mid-range duo, the S19 and S19 Pro. The two feature fast charging, capable Dimen… [+1527 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Business Standard",
      title:
        "Tech giant Google's AI search leaves content publishers scrambling - Business Standard",
      description: null,
      url: "https://www.business-standard.com/world-news/tech-giant-google-s-ai-search-leaves-content-publishers-scrambling-124060200673_1.html",
      urlToImage: null,
      publishedAt: "2024-06-02T17:07:19Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Notebookcheck.net",
      },
      author: "Notebookcheck.net",
      title:
        "More evidence of new Ultra-high-end Samsung foldable appears ahead of next Unpacked event - Notebookcheck.net",
      description: null,
      url: "https://www.notebookcheck.net/More-evidence-of-new-Ultra-high-end-Samsung-foldable-appears-ahead-of-next-Unpacked-event.843480.0.html",
      urlToImage: null,
      publishedAt: "2024-06-02T16:41:56Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Wccftech",
      },
      author: "Hassan Mujtaba",
      title:
        "Watch The AMD CEO, Dr. Lisa Su, Computex 2024 Opening Keynote Live Here! - Wccftech",
      description:
        "AMD CEO, Dr. Lisa Su, will host the opening keynote of Computex 2024 today that will be live from the Nangang Exhibition Center in Taipei.",
      url: "https://wccftech.com/watch-amd-ceo-dr-lisa-su-computex-2024-keynote-live-here/",
      urlToImage:
        "https://cdn.wccftech.com/wp-content/uploads/2024/02/AMD-Computex-2024-CEO-Dr.-Lisa-Su-Keynote.jpg",
      publishedAt: "2024-06-02T16:15:00Z",
      content:
        "AMD CEO, Dr. Lisa Su, will be hosting the opening keynote of Computex 2024 today which will be live from the Nangang Exhibition Center in Taipei.\r\nAMD's Computex 2024 Keynote To Be Hosted By CEO, Dr.… [+2156 chars]",
    },
  ],
};

export const sportsNews = {
  status: "ok",
  totalResults: 54,
  articles: [
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "hindustantimes.com",
      title:
        "Namibia vs Oman T20 World Cup 2024 Highlights: Namibia beat Oman in Super Over - Hindustan Times",
      description:
        "Namibia vs Oman T20 World Cup 2024 Highlights: Namibia got to a score of 109/6 in response to Oman's 109 all out and prevailed in a Super Over",
      url: "https://www.hindustantimes.com/cricket/namibia-vs-oman-live-score-match-3-of-icc-mens-t20-world-cup-2024-final-updates-today-03-jun-2024-101717371311077.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/03/550x309/mehran_khan_getty_1717386408389_1717386413637.jpg",
      publishedAt: "2024-06-03T04:26:51Z",
      content:
        "Namibia vs Oman T20 World Cup 2024 Highlights: Namibia beat Oman in the first Super Over of the T20 World Cup since 2012 to begin their campaign on a winning note in Barbados. Batting first, Oman wer… [+6670 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "'Don't even want to watch the T20 World Cup': Riyan Parag's staggering 'biased' remark - Hindustan Times",
      description:
        "Rajasthan Royals star Riyan Parag made a sensational statement admitting that he has no interest in watching the T20 World Cup this year. | Crickit",
      url: "https://www.hindustantimes.com/cricket/dont-even-want-to-watch-the-t20-world-cup-riyan-parag-takes-sly-dig-at-icc-with-staggering-biased-remark-101717384162537.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/03/1600x900/image_-_2024-06-03T083922724_1717384296570_1717384296815.jpg",
      publishedAt: "2024-06-03T03:34:49Z",
      content:
        "Amid concerns of a low turnout at the venues, the ninth edition of the T20 World Cup kicked off on Sunday, with both the host nations securing convincing wins. While the USA beat Canada by seven wick… [+2215 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "'Rohit, Kohli, Suryakumar make India handicapped': Rahul Dravid warned against Yashasvi Jaiswal snub in T20 World Cup - Hindustan Times",
      description:
        "Despite what the T20 World Cup warm-up game against Bangladesh might have indicated, Irfan Pathan is against dropping Yashasvi Jaiswal from the India XI. | Crickit",
      url: "https://www.hindustantimes.com/cricket/rohit-sharma-virat-kohli-suryakumar-yadav-india-handicapped-rahul-dravid-warned-yashasvi-jaiswal-snub-t20-world-cup-101717382457772.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/03/1600x900/kohli_sky_handi_1717382591426_1717382603233.jpg",
      publishedAt: "2024-06-03T03:00:55Z",
      content:
        "Although India captain Rohit Sharma denied having narrowed in on the team's playing XI for the 2024 T20 World Cup, one thing that the warm-up fixture against Bangladesh on Saturday certainly indicate… [+3570 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Virat Kohli skips practice again, India given rest day ahead of T20 World Cup opener against Ireland because of SL vs SA - Hindustan Times",
      description:
        "Virat Kohli is expected to be part of India's T20 World Cup training session on Monday, with timings yet to be confirmed. | Crickit",
      url: "https://www.hindustantimes.com/cricket/virat-kohli-skips-practice-again-india-given-rest-day-ahead-of-t20-world-cup-opener-against-ireland-because-of-sl-vs-sa-101717380539022.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/03/1600x900/GO_mKPuWIAAHPDC_1717381133886_1717381140042.png",
      publishedAt: "2024-06-03T02:39:00Z",
      content:
        "Team India wrapped up an impressive outing at the Nassau County International Cricket Stadium in New York last week as they beat Bangladesh by 60 runs in their only warm-up game in the build-up to th… [+2081 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        'Sunil Gavaskar Settles Rishabh Pant vs Sanju Samson T20 World Cup Debate, Says: "Last Few Games..." - NDTV Sports',
      description:
        "Sunil Gavaskar has opened up on the team's playing combination for the T20 World Cup, as far as the wicketkeeping department is concerned.",
      url: "https://sports.ndtv.com/t20-world-cup-2024/sunil-gavaskar-settles-rishabh-pant-vs-sanju-samson-t20-world-cup-debate-says-last-few-games-5801031",
      urlToImage:
        "https://c.ndtvimg.com/2024-06/qtb9lddo_pant-samson_625x300_02_June_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2024-06-03T01:40:52Z",
      content:
        "Former India captain Sunil Gavaskar has opened up on the team's playing combination for the T20 World Cup, as far as the wicketkeeping department is concerned. India have picked two wicketkeepers -- … [+1802 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricbuzz",
      },
      author: null,
      title:
        "Pat Cummins set to play for San Francisco Unicorns in MLC - Cricbuzz",
      description:
        "Cummins is expected to fill in the leadership vacuum at the Unicorns after Aaron Finch's retirement",
      url: "https://www.cricbuzz.com/cricket-news/130586/pat-cummins-set-to-play-for-san-francisco-unicorns-in-mlc",
      urlToImage:
        "http://www.cricbuzz.comhttps://static.cricbuzz.com/a/img/v1/600x400/i1/c492808/with-mlc-cummins-will-complet.jpg",
      publishedAt: "2024-06-03T00:55:05Z",
      content:
        "With MLC, Cummins will complete a gruelling cricket schedule for him that began with the New Zealand tour in February © Getty\r\nIn a bumper signing, Australia Test and ODI skipper Pat Cummins is set t… [+1754 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Yuvraj Singh snubs Australia for T20 World Cup final; endorses Virat Kohli to finish ICC event as leading run-getter - Hindustan Times",
      description:
        "Yuvraj Singh has named the finalists for the T20 World Cup. The former India all-rounder also feels Virat Kohli will top the batting charts at the World Cup. | Crickit",
      url: "https://www.hindustantimes.com/cricket/yuvraj-singh-snubs-australia-for-t20-world-cup-final-endorses-virat-kohli-to-finish-icc-event-as-leading-run-getter-101717353669203.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/ANI-20240509109-0_1717357255844_1717357266077.jpg",
      publishedAt: "2024-06-03T00:35:49Z",
      content:
        "Legendary Indian cricketer Yuvraj Singh wants Rohit Sharma's Team India to play to their own strengths at the T20 World Cup as cricket entered uncharted territory on Saturday. Co-hosts United States … [+2227 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "The Indian Express",
      title:
        "Craig Fulton at Idea Exchange: ‘One of the bigger problems in India is hierarchy. I don’t subscribe to that’ - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/idea-exchange/india-hockey-coach-craig-fulton-at-idea-exchange-9368387/",
      urlToImage: null,
      publishedAt: "2024-06-03T00:10:06Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Chess.com",
      },
      author: "Colin McGourty",
      title:
        "Norway Chess Round 6: Carlsen Leads Norway Chess After Ding Blunders Mate-In-2 - Chess.com",
      description:
        "World number-one Magnus Carlsen has taken over as the leader of Norway Chess 2024 after World Champion Ding Liren blundered into mate-in-two and lost a fourth game in a row.",
      url: "https://www.chess.com/news/view/2024-norway-chess-round-6",
      urlToImage:
        "https://images.chesscomfiles.com/uploads/v1/news/1396295.7b537360.5000x5000o.a74f3784197e.png",
      publishedAt: "2024-06-02T20:00:00Z",
      content:
        "World number-one Magnus Carlsen has taken over as the leader of Norway Chess 2024 after World Champion Ding Liren blundered into mate-in-two and sank to a fourth loss in a row. Elsewhere there was ar… [+9984 chars]",
    },
    {
      source: {
        id: null,
        name: "Sportskeeda",
      },
      author: "Sportskeeda",
      title:
        "WATCH: Carlos Alcaraz makes use of Felix Auger-Aliassime's medical timeout to entertain French Open fans with his warm-up routine during 3R win - Sportskeeda",
      description: null,
      url: "https://www.sportskeeda.com/tennis/news-watch-carlos-alcaraz-makes-use-felix-auger-aliassime-s-medical-timeout-entertain-french-open-fans-warm-up-routine-3r-win",
      urlToImage: null,
      publishedAt: "2024-06-02T19:12:00Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Sports Desk",
      title:
        "West Indies pushed to limit by plucky PNG in their T20 World Cup opener - The Times of India",
      description:
        "Cricket News: West Indies stuttered and stumbled before eventually scrambling a five-wicket win over minnows Papua New Guinea in the opening Group C encounter of th",
      url: "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/west-indies-pushed-to-limit-by-plucky-png-in-their-t20-world-cup-opener/articleshow/110645431.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110645434,width-1070,height-580,imgsize-97218,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-02T18:42:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Crictracker.com",
      },
      author: "CricTracker",
      title:
        "RJ vs KT Live Score, Match 1 | Ratnagiri Jets vs Kolhapur Tuskers Match 1 Live Score & Ball by Ball Commentary Updates - CricTracker",
      description:
        "RJ vs KT Match 1, Live Score: Get all the latest RJ vs KT Live Score of Match 1 along with ball by ball commentary & updates on CricTracker.",
      url: "https://www.crictracker.com/live-scores/rj-vs-kt-match-1-t20-maharashtra-premier-league-02-jun-2024/",
      urlToImage:
        "https://www.crictracker.com/images/CricTracker-Facebook-Preview.jpg",
      publishedAt: "2024-06-02T17:57:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Kylian Mbappe says yes to Real Madrid: UEFA Champions League winners to unveil ex-PSG star on this date - Hindustan Times",
      description:
        "As per the latest developments, France captain Kylian Mbappe has signed a deal to play for Real Madrid.  | Football News",
      url: "https://www.hindustantimes.com/sports/football/kylian-mbappe-says-yes-to-real-madrid-uefa-champions-league-winners-to-unveil-ex-psg-star-on-this-date-101717347447428.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/FBL-FRA-ESP-1_1717348790877_1717348825340.jpg",
      publishedAt: "2024-06-02T17:21:30Z",
      content:
        "Kylian Mbappe has reportedly signed a deal to play for Real Madrid after his previous contract with Paris Saint Germain (PSG) ended on June 30. The Real Madrid-bound forward had already made it clear… [+2050 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "Andrew Fidel Fernando",
      title:
        "The power of South Africa against the variety of Sri Lanka - ESPNcricinfo",
      description:
        "Kagiso Rabada had left the IPL early with a soft tissue infection in a lower limb, but is available to play SA's World Cup opener",
      url: "https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/sri-lanka-vs-south-africa-4th-match-group-d-1415704/match-preview",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/381600/381607.6.jpg",
      publishedAt: "2024-06-02T17:15:00Z",
      content:
        "PreviewKagiso Rabada had left the IPL early with a soft tissue infection in a lower limb, but is available to play SA's World Cup opener\r\nAndrew Fidel Fernando is a senior writer at ESPNcricinfo. @af… [+4 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "Babar Azam indirectly mentions Virat Kohli's knock, feels Pakistan should have won India game at WC: 'They took it…' - Hindustan Times",
      description:
        "Babar Azam recalled Pakistan's World Cup defeat at the hands of Virat Kohli-starrer Team India. | Crickit",
      url: "https://www.hindustantimes.com/cricket/babar-azam-indirectly-mentions-virat-kohli-knock-feels-pakistan-should-have-won-india-game-at-wc-they-took-101717332824576.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/babar_azam_virat_kohli_getty_images_1717344455320_1717344460065.JPG",
      publishedAt: "2024-06-02T16:12:38Z",
      content:
        "Virat Kohli played a knock for the ages when India last met arch-rivals Pakistan at the T20 World Cup. Kohli played a majestic knock to seal a stunning win for Rohit Sharma and Co. over Babar Azam's … [+2264 chars]",
    },
    {
      source: {
        id: "the-hindu",
        name: "The Hindu",
      },
      author: "The Hindu",
      title: "Would love to coach the Indian team: Gautam Gambhir - The Hindu",
      description: null,
      url: "https://www.thehindu.com/sport/cricket/would-love-to-coach-the-indian-team-gautam-gambhir/article68244126.ece",
      urlToImage: null,
      publishedAt: "2024-06-02T15:58:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Amar Sunil Panicker, Sahil Malhotra",
      title:
        "No Restrictions on Movement of India Cricketers in New York After ISIS threat - News18",
      description:
        "Security arrangements for Team India have been beefed up after the ISIS threat and heavy security was deployed for the side’s warm-up game vs Bangladesh.",
      url: "https://www.news18.com/cricket/no-restrictions-on-movement-of-india-cricketers-in-new-york-after-isis-threat-8917748.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2024/06/indian-mens-team-t20-world-cup-2024-instagram-2024-06-6090a00259c9ea7e82c30f677836091b-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-06-02T15:55:31Z",
      content:
        "India played their only warm-up vs Bangladesh amid a lot of security at the Nassau Country International Cricket Stadium and arrangements have been tightened after the ISIS threat in the high-octane … [+2736 chars]",
    },
    {
      source: {
        id: null,
        name: "Wisden.com",
      },
      author: "Ben Gardner",
      title:
        "Watch: County Bowler Applauded For Choosing Not To Run Out Injured Batter | T20 Blast 2024 - Wisden",
      description:
        "Chris Wood received a warm round of applause for choosing not to run out Matt Parkinson, who had been hit and hurt by a straight drive.",
      url: "https://wisden.com/stories/county-cricket/t20-blast-2024/watch-county-bowler-applauded-for-choosing-not-to-run-out-injured-batter",
      urlToImage:
        "https://cdn.wisden.com/wp-content/uploads/2024/06/Two-image-watch-piece-2024-06-02T160549.741.png",
      publishedAt: "2024-06-02T15:16:50Z",
      content:
        "Hampshire Hawks bowler Chris Wood received a warm round of applause for choosing not to run out Kents Matt Parkinson, who had been hit and hurt by a straight drive.\r\nThe incident came in the final ov… [+1694 chars]",
    },
    {
      source: {
        id: null,
        name: "The Quint",
      },
      author: "IANS",
      title:
        "Boxing Qualifiers: Jaismine Becomes 6th Indian Boxer To Win an Olympics Quota - The Quint",
      description:
        "Boxing Qualifiers: Jaismine Lamboria secured her spot for the Paris Olympics after defeating Mali’s Marine Camara 5-0 in the quarterfinals of the 57kg category at the World Olympic Boxing Qualifiers.",
      url: "https://www.thequint.com/sports/boxing/boxing-qualifiers-jaismine-lamboria-6th-indian-boxer-win-2024-paris-olympics-quota",
      urlToImage:
        "https://images.thequint.com/thequint%2F2024-06%2F640ea957-532c-4287-98f0-bd35adaaf5f1%2Ff3fa105a_241d_47f7_a6a5_d4b4e2316b65.jpg",
      publishedAt: "2024-06-02T13:56:07Z",
      content:
        "The bronze medallist at the Commonwealth Games took back the 57kg quota that India was compelled to give up after Parveen Hooda's 22-month suspension for a whereabouts failure. After taking home the … [+462 chars]",
    },
    {
      source: {
        id: null,
        name: "Crictracker.com",
      },
      author: "Mihir Korde",
      title:
        "Venkatesh Iyer ties the knot with Shruti Raghunathan - CricTracker",
      description:
        "Kolkata Knight Riders' star all-rounder Venkatesh Iyer has got married to Shruti Raghunathan on June 2, just days after IPL 2024 title victory. The couple, which got engaged in November last year, exc",
      url: "https://www.crictracker.com/social-tracker-cricket/venkatesh-iyer-ties-the-knot-with-shruti-raghunathan/",
      urlToImage:
        "https://media.crictracker.com/media/attachments/1717313849628_Venkatesh-Iyer-wedding.jpeg",
      publishedAt: "2024-06-02T13:34:00Z",
      content:
        "Kolkata Knight Riders' star all-rounder Venkatesh Iyer has got married to Shruti Raghunathan on June 2, just days after IPL 2024 title victory. The couple, which got engaged in November last year, ex… [+1759 chars]",
    },
  ],
};

export const healthNews = {
  status: "ok",
  totalResults: 69,
  articles: [
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "The Indian Express",
      title:
        "Can you eat whatever you want after ‘reversing’ type 2 diabetes? - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/lifestyle/life-style/can-you-eat-whatever-you-want-after-reversing-type-2-diabetes-food-9361786/",
      urlToImage: null,
      publishedAt: "2024-06-03T04:00:22Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "Debosmita Ghosh",
      title:
        "Study Finds Wealthy People Have A Genetically Higher Risk Of Cancer Than Poor - Times Now",
      description:
        "A recent study found that rich people have a genetically higher risk of developing breast, prostate and several other types of cancer than the poor. On the other hand, those with a low socioeconomic status are more likely to develop complex diseases such as d…",
      url: "https://www.timesnownews.com/health/study-finds-wealthy-people-have-a-genetically-higher-risk-of-cancer-than-poor-article-110650272",
      urlToImage:
        "https://static.tnn.in/thumb/msid-110650311,thumbsize-21668,width-1280,height-720,resizemode-75/110650311.jpg",
      publishedAt: "2024-06-03T02:39:49Z",
      content:
        "IBPS Calendar 2024: IBPS RRB, PO, Clerk Notification 2024 Expected Soon on ibps.in",
    },
    {
      source: {
        id: null,
        name: "News-Medical.Net",
      },
      author: "Vijay Kumar Malesu",
      title:
        "Garlic proves potent in reducing blood sugar and cholesterol, study reveals - News-Medical.Net",
      description:
        "Study confirms garlic's significant benefits in lowering blood glucose and lipid levels, offering a natural remedy for metabolic disorders.",
      url: "https://www.news-medical.net/news/20240602/Garlic-proves-potent-in-reducing-blood-sugar-and-cholesterol-study-reveals.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_781561_17173823079534677.jpg",
      publishedAt: "2024-06-03T02:39:00Z",
      content:
        "In a recent study published in the journal Nutrients, a group of researchers in China conducted a systematic review and meta-analysis to investigate the effects of garlic on blood lipid and glucose l… [+5971 chars]",
    },
    {
      source: {
        id: null,
        name: "News-Medical.Net",
      },
      author: "Dr. Chinta Sidharthan",
      title:
        "Long-term health risks linger for severe COVID-19 patients three years after hospitalization - News-Medical.Net",
      description:
        "Three years after severe COVID-19 hospitalization, significant risks of mortality and long-term symptoms persist, impacting overall health and quality of life.",
      url: "https://www.news-medical.net/news/20240602/Long-term-health-risks-linger-for-severe-COVID-19-patients-three-years-after-hospitalization.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_781560_17173813352179709.jpg",
      publishedAt: "2024-06-03T02:23:00Z",
      content:
        "In a recent study published in the journal Nature Medicine, researchers reported long-term follow-up data from a large cohort of individuals who have had severe acute respiratory syndrome coronavirus… [+6689 chars]",
    },
    {
      source: {
        id: null,
        name: "News-Medical.Net",
      },
      author: "Dr. Sanchari Sinha Dutta, Ph.D.",
      title:
        "Progesterone therapy shows mixed results for neurodevelopment in infants with heart defects - News-Medical.Net",
      description:
        "A randomized clinical trial published in JAMA Network Open found no significant overall benefit of maternal progesterone therapy on neurodevelopmental outcomes in infants with congenital heart defects, but observed improvements in female children and specific…",
      url: "https://www.news-medical.net/news/20240602/Progesterone-therapy-shows-mixed-results-for-neurodevelopment-in-infants-with-heart-defects.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_781559_17173791092383485.jpg",
      publishedAt: "2024-06-03T01:47:00Z",
      content:
        "Scientists at the University of Pennsylvania, USA, have conducted a randomized clinical trial to investigate the impact of maternal progesterone therapy on neurodevelopmental outcomes in infants with… [+5557 chars]",
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "Nikita Toppo",
      title:
        "Kheera Vs Kakdi: Which Is Your Choice During Summer Months - Times Now",
      description:
        "Kheera and kakdi are stwo summer staples that are widely enjoyed as salads during summer. Rich in water and various vitamins and minerals, they are perfect to stay hydrated in this season. Read on to know the difference between them.",
      url: "https://www.timesnownews.com/lifestyle/food/news/kheera-vs-kakdi-which-is-your-choice-during-summer-months-article-110570519",
      urlToImage:
        "https://static.tnn.in/thumb/msid-110570532,thumbsize-60468,width-1280,height-720,resizemode-75/110570532.jpg",
      publishedAt: "2024-06-03T00:56:36Z",
      content:
        "Suriya Sports Fu Manchu And Mullet In The First Shot Of Karthik Subbaraj's Film, Watch Video From Suriya 44",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Vicky Pathare",
      title: "Pune hospitals witness surge in mumps cases - Hindustan Times",
      description:
        "As per the doctors, the absence of mumps vaccination in the national immunisation program is leading to recurrent outbreaks",
      url: "https://www.hindustantimes.com/cities/pune-news/pune-hospitals-witness-surge-in-mumps-cases-101717351416521.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/02/1600x900/The-mumps-vaccination-is-not-given-under-the-progr_1717351372103.jpg",
      publishedAt: "2024-06-02T23:48:19Z",
      content:
        "City hospitals have seen a rise in mumps cases, an acute viral infection that affects children. According to doctors, there have been five to six cases of mumps recorded every day in May, up from the… [+3188 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TNN",
      title:
        "Salt intake spurs hypertension in youngsters: ICMR scientist - The Times of India",
      description:
        "A staggering 7% of individuals under the age of 30 are afflicted with hypertension due to excessive salt consumption. Learn about the alarming statistics and global burden of hypertension in young adults. Discover the India Hypertension Control Initiative and…",
      url: "https://timesofindia.indiatimes.com/city/bhopal/salt-intake-spurs-hypertension-in-youngsters-icmr-scientist/articleshow/110647802.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110647801,width-1070,height-580,imgsize-7400,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-02T22:52:00Z",
      content: "10 stunning space images captured by NASA's telescope",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TNN",
      title: "20% of cancer patients below 40: Study - The Times of India",
      description:
        "A study reveals that 20% of cancer patients in Delhi and other cities of India are below 40 years old, with 60% being male and 40% female. The study highlights the rise of cancer among the younger generation and the importance of seeking second opinions for t…",
      url: "https://timesofindia.indiatimes.com/city/delhi/20-of-cancer-patients-below-40-study/articleshow/110647060.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-02T22:36:00Z",
      content: "10 stunning space images captured by NASA's telescope",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TNN",
      title: "How heel-prick can save an infant’s life - The Times of India",
      description:
        "Newborn screening (NBS) is a critical healthcare initiative conducted shortly after birth to detect serious inherited developmental and metabolic diso.",
      url: "https://timesofindia.indiatimes.com/city/chennai/how-heel-prick-can-save-an-infants-life/articleshow/110645379.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-06-02T22:30:00Z",
      content: "10 stunning space images captured by NASA's telescope",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Prescription Health: Study looking into effectiveness of fish oil supplements - KRGV",
      description:
        "https://www.krgv.com/news/prescription-health-study-looking-into-effectiveness-of-fish-oil-supplements",
      url: "https://www.youtube.com/watch?v=5S1Zu4dZ83E",
      urlToImage:
        "https://i.ytimg.com/vi/5S1Zu4dZ83E/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgUygpMA8=&rs=AOn4CLAhY2XeyshwRl5ETW9D9plPbyfEcg",
      publishedAt: "2024-06-02T20:28:13Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Kashmirreader.com",
      },
      author: "Shahid Shafi",
      title: "Kidney Health: A Growing Concern In Kashmir - Kashmir Reader",
      description:
        "Increasing prevalence of chronic kidney disease and related disorders highlights need for preventive measures and equitable healthcare access\r\n\r\nThe issue of kidney health has gained significant attention worldwide, including in Kashmir, posing substantial ch…",
      url: "https://kashmirreader.com/2024/06/03/kidney-health-a-growing-concern-in-kashmir/",
      urlToImage:
        "https://kashmirreader.com/wp-content/uploads/2024/03/World-Kidney-Day.jpg",
      publishedAt: "2024-06-02T20:01:00Z",
      content:
        "Increasing prevalence of chronic kidney disease and related disorders highlights need for preventive measures and equitable healthcare access\r\nThe issue of kidney health has gained significant attent… [+6414 chars]",
    },
    {
      source: {
        id: null,
        name: "Lokmattimes.com",
      },
      author: "IANS",
      title: "Sri Lanka declares 71 high risk dengue zones - Lokmat Times",
      description:
        "Colombo, June 3 Sri Lanka's National Dengue Control Unit (NDCU) has said that 71 divisions in 15 districts, including the capital Colombo, had been identified as high-risk zones for dengue fever.The NDCU said on Sunday in a statement that it carried out a sur…",
      url: "https://www.lokmattimes.com/international/sri-lanka-declares-71-high-risk-dengue-zones-1/",
      urlToImage:
        "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/202310253074182_202406.jpg",
      publishedAt: "2024-06-02T19:56:49Z",
      content:
        "Colombo, June 3 Sri Lanka's National Dengue Control Unit (NDCU) has said that 71 divisions in 15 districts, including the capital Colombo, had been identified as high-risk zones for dengue fever.\r\nTh… [+656 chars]",
    },
    {
      source: {
        id: null,
        name: "India.com",
      },
      author: "Shweta Malik",
      title:
        "7 Amazing Health Benefits of Tiger Nuts You Must Know - India.com",
      description:
        "From improved digestion to stronger muscles, let us discover the 7 health benefits of eating tiger nuts.",
      url: "https://www.india.com/webstories/health/7-health-benefits-of-tiger-nuts-6977983/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2024/05/TIGER-NUT-3.jpg",
      publishedAt: "2024-06-02T18:13:23Z",
      content:
        "Tiger nuts, also known as earth almonds, are not botanically classified as nuts. They grow underground and can be eaten as a snack.\r\nTiger nuts are full of carbohydrates, can boost health by turning … [+539 chars]",
    },
    {
      source: {
        id: null,
        name: "WION",
      },
      author: "Heena Sharma",
      title: "Bael Juice: 5 Amazing Health Benefits - WION",
      description: "Bael Juice: 5 Amazing Health Benefits",
      url: "https://www.wionews.com/web-stories/life-fun/bael-juice-5-amazing-health-benefits-1717345797307",
      urlToImage: null,
      publishedAt: "2024-06-02T16:38:51Z",
      content: "Jun 2, 2024, 10:08 PM IST",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI+Lifestyle+Desk",
      title: "Chandra Namaskar and its health benefits - The Times of India",
      description: "Let's see some of the health benefits of Chandra Namaskar.",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/web-stories/what-is-chandra-namaskar-and-its-benefits/photostory/110597462.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110597511,imgsize-211321,width-900,height-1200,resizemode-6/110597511.jpg",
      publishedAt: "2024-06-02T16:30:00Z",
      content:
        "Back stretching helps in a better back posture, mainly the sore muscles around the elbows, waist, and back neck, providing you with a better and straight posture.",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Swedish study shows tattoos could be risk factor for lymphoma - LOCAL 12",
      description:
        "A new report is now raising concerns about tattoos and a possible connection to cancer: https://tinyurl.com/2b9399ww_______________Stay up to date with our s...",
      url: "https://www.youtube.com/watch?v=9puijJ2uiD4",
      urlToImage: "https://i.ytimg.com/vi/9puijJ2uiD4/maxresdefault.jpg",
      publishedAt: "2024-06-02T15:00:07Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Thehealthsite.com",
      },
      author: "Ankit Kumar",
      title:
        "Arthritis Pain In Summer: 5 Effective Ways To Get Relief From Joint Stiffness at Home | TheHealthSite.com - TheHealthSite",
      description:
        "Discover five simple yet effective ways to alleviate arthritis pain from the comfort of your home. TheHealthSite.com",
      url: "https://www.thehealthsite.com/photo-gallery/arthritis-pain-in-summer-5-effective-ways-to-get-relief-from-joint-stiffness-at-home-1096417/",
      urlToImage:
        "https://www.thehealthsite.com/wp-content/uploads/2024/06/Arthritis-Pain.jpg",
      publishedAt: "2024-06-02T14:38:39Z",
      content:
        "To soothe pain and stiffness warm compress can be applied on the affected joints, as the heat released by it can help in increasing blood flow, reduces inflammation and relaxes muscles. Worm compress… [+253 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "2nd human case of bird flu confirmed, bringing total this year to 3 - ABC11",
      description:
        "The most recent case in Michigan is in a farmworker who was exposed to cows infected with bird flu, according to the Michigan Department of Health and Human ...",
      url: "https://www.youtube.com/watch?v=FoeuqyKO64k",
      urlToImage:
        "https://i.ytimg.com/vi/FoeuqyKO64k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgOSh_MA8=&rs=AOn4CLBh8Qnfoye7zjhZhRRYPicDnkwn4Q",
      publishedAt: "2024-06-02T14:34:50Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Investing.com",
      },
      author: "Investing.com India",
      title:
        "'Curbing insulin resistance can help prevent or delay diabetes' - Investing.com India",
      description: null,
      url: "https://in.investing.com/news/general-news/curbing-insulin-resistance-can-help-prevent-or-delay-diabetes-4229147",
      urlToImage: null,
      publishedAt: "2024-06-02T14:17:43Z",
      content: null,
    },
  ],
};
