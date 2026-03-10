const asset = (path) => new URL(path, import.meta.url).href;

export const siteMeta = {
  siteUrl: "https://www.baktygul.com",
  name: "Baktygul Chynybaeva",
  role: "Award-winning journalist from Central Asia",
  tagline:
    "Award winning human rights, healthcare, and climate change journalist from Central Asia.",
  statement: "I came to this world to tell untold stories...",
  intro:
    "Award winning human rights, healthcare, and climate change journalist from Central Asia.",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/baktygul.chynybaeva"
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/baktygulchynybaeva?igsh=MWM0bHJuYmM4ZXQxOA=="
    },
    {
      label: "X",
      href: "https://x.com/ChynybaevaB"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/baktygulchynybaeva0808"
    }
  ]
};

export const seoPages = {
  "/": {
    title: "Baktygul Chynybaeva | Award-Winning Journalist from Central Asia",
    description:
      "Official website of Baktygul Chynybaeva, award-winning journalist from Central Asia covering human rights, healthcare, climate change, investigations, and video storytelling."
  },
  "/personal-story-blogs": {
    title: "Personal Story & Blogs | Baktygul Chynybaeva",
    description:
      "Read Baktygul Chynybaeva's personal story, journalism journey, human rights work, investigations, and long-form reflections from Central Asia."
  },
  "/recent-stories": {
    title: "Recent Stories | Baktygul Chynybaeva",
    description:
      "Recent stories and reporting by Baktygul Chynybaeva on climate, migration, investigations, and human rights in Central Asia."
  },
  "/published-books": {
    title: "Published Books | Baktygul Chynybaeva",
    description:
      "Published books, translations, and long-form writing by Baktygul Chynybaeva, including children's publishing and literary work."
  },
  "/investigations": {
    title: "Investigations | Baktygul Chynybaeva",
    description:
      "Investigative reporting by Baktygul Chynybaeva on accountability, migration, sanctions, human rights, and public interest issues."
  },
  "/video-stories": {
    title: "Video Stories | Baktygul Chynybaeva",
    description:
      "Watch video stories and documentary reporting by Baktygul Chynybaeva focused on Central Asia, gender, climate, and human rights."
  },
  "/awards-and-fellowships": {
    title: "Awards & Fellowships | Baktygul Chynybaeva",
    description:
      "Awards, fellowships, and professional milestones of journalist Baktygul Chynybaeva in human rights, healthcare, and climate reporting."
  },
  "/climate-reporting": {
    title: "Climate Reporting | Baktygul Chynybaeva",
    description:
      "Climate reporting by Baktygul Chynybaeva on air pollution, water, glaciers, and environmental justice in Central Asia."
  },
  "/contact": {
    title: "Contact | Baktygul Chynybaeva",
    description:
      "Contact Baktygul Chynybaeva for editorial commissions, collaborations, speaking, and story inquiries."
  }
};

export const navigation = [
  { label: "Home", path: "/" },
  { label: "Personal Story & Blogs", path: "/personal-story-blogs" },
  { label: "Recent Stories", path: "/recent-stories" },
  { label: "Published Books", path: "/published-books" },
  { label: "Investigations", path: "/investigations" },
  { label: "Video Stories", path: "/video-stories" },
  { label: "Awards & Fellowships", path: "/awards-and-fellowships" },
  { label: "Climate Reporting", path: "/climate-reporting" },
  { label: "Contact", path: "/contact" }
];

export const photography = {
  hero: asset("../../baktygul_files/homepic-mP424y783OIRD50v.jpg"),
  cover: asset("../../baktygul_files/homepagen-mjEqDE7plVu3wnnP.jpg"),
  craftedCarpet:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=488,fit=crop/YanqnEEqw0U672Om/ayilsurot-dOq80qe210upz0p2.JPG",
  newsroom:
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=650,fit=crop/YanqnEEqw0U672Om/azattyk-mv02X0rOLyIV1LVv.JPG",
  gallery: [
    asset("../../baktygul_files/img_0515-qdhBgFS56CI03u2L.jpeg"),
    asset("../../baktygul_files/img_0931-aW3r8omxuU4ZU6dS.jpeg"),
    asset("../../baktygul_files/img_7047-ta0IWF6BPTOImB8D.jpeg"),
    asset("../../baktygul_files/img_7367-YkfhtaH2SxAp0CjD.jpeg"),
    asset("../../baktygul_files/img_7368-4C6QPoXyIkpuyTT6.jpeg"),
    asset("../../baktygul_files/410c5038-ce29-4711-ae75-83d821da135c-U4PaCwScns5lo6Ec.jpeg"),
    asset("../../baktygul_files/7c07d6c7-148d-4dde-a79c-20f556097235-ubovlB8DHYdd6P7x.jpeg"),
    asset("../../baktygul_files/edc65e31-5004-4dfe-a001-403f00baa1ab-VhJ1vX2wfutKC84t.jpeg")
  ],
  books: asset("../../Published Books _ Personal Blog_files/books-mv02X0grNjIa2BMy.JPG"),
  climate: asset("../../Climate Reporting _ Personal Blog_files/clim-dWxBVValyQu88jG9.jpg"),
  awards: asset("../../Awards and Fellowships _ Personal Blog_files/award-AGBnjjpO1pt6B4MQ.JPG"),
  contact: asset("../../Contact _ Personal Blog_files/generated-AE0axxqOvVTy5ZgQ.png")
};

export const homeSections = {
  personalStory: {
    title: "Welcome to My Personal Blog",
    text:
      "I was born and raised in a tiny Central Asian mountain village near the Chinese border. Situated 3,000 meters above sea level, this village in Kyrgyzstan, the smallest country in the region, became the starting point of my lifelong mission - telling the stories of my people.",
    path: "/personal-story-blogs"
  },
  galleryTitle: "Photo Gallery of Events Where I Delivered Speechs in 2024-2025",
  featuredVideo: {
    title: "Personal Story Video",
    embed: "https://www.youtube.com/embed/FgEpujeIeag?list=TLGGxeY0nJOg9ggxMDAzMjAyNg"
  },
  sectionIndex: [
    {
      title: "Personal Story & Blogs",
      path: "/personal-story-blogs",
      summary: "Biography, essays, and context behind the reporting."
    },
    {
      title: "Recent Stories",
      path: "/recent-stories",
      summary: "Latest reporting arranged as a cleaner editorial archive."
    },
    {
      title: "Published Books",
      path: "/published-books",
      summary: "Long-form work presented with more structure and weight."
    },
    {
      title: "Investigations",
      path: "/investigations",
      summary: "A dedicated frame for accountability and in-depth reporting."
    },
    {
      title: "Video Stories",
      path: "/video-stories",
      summary: "Playable visual pieces and documentary reporting."
    },
    {
      title: "Awards & Fellowships",
      path: "/awards-and-fellowships",
      summary: "Recognition, fellowships, and professional milestones."
    },
    {
      title: "Climate Reporting",
      path: "/climate-reporting",
      summary: "Climate stories tied to human-scale consequences."
    },
    {
      title: "Contact",
      path: "/contact",
      summary: "Commissions, collaborations, and source contact."
    }
  ]
};

export const pageContent = {
  personal: {
    title: "Personal Story & Blogs",
    kicker: "Personal Story & Blogs",
    layout: "longform",
    lead:
      "The Journey Started With Crafted carpet",
    image: photography.craftedCarpet,
    imageAlt: "Crafted carpet from Baktygul's personal story",
    sections: [
      {
        heading: "The Journey Started With Crafted carpet",
        text:
          "Growing up in deep poverty, with limited resources and societal expectations shaped by traditions like bride kidnapping and deep corruption in the education system, I did not believe higher education was within my reach. My grandmother, who raised me, began preparing my dowry two years before I graduated high school, anticipating that I, like thousands of other girls in our country, might be kidnapped by a suitor from the village and forced into marriage. For many girls, this marked the end of their aspirations."
      },
      {
        heading: "Everything changed with learning",
        text:
          "Everything changed when I discovered my passion for learning and began participating in subject Olympiads in the 9th grade. By my final year of high school, I had won at the national level, earning the right to study at one of the best universities in the country with a full scholarship and no entrance exams. However, my family could not afford the cost of travel. In a selfless act of love, my grandmother decided to sell the dowry she had so carefully prepared for years - beautifully crafted Kyrgyz carpets woven by her own hands."
      },
      {
        heading: "Starting journalism in age 18",
        text:
          "From the day my grandparents sent me to the capital, I began to believe in dreams and rely on myself. Yet, I never stopped my relentless pursuit of finding a place where I could belong and continue learning. I chose the Faculty of International Cultural Communication at the university, focusing on Turkish studies. In my first year, I worked nights at a local primary school, cleaning classrooms to support myself."
      },
      {
        heading: "A newsroom opened the way",
        text:
          "By my second year, my faculty arranged a language internship at the international newspaper Zaman - a Turkish media outlet in post-Soviet Kyrgyzstan in 2000, with a modern newsroom equipped with computers, a rarity at the time. After just two weeks of my internship, the editors recognized my potential and offered me a part-time correspondent position. It was there that I began shaping myself into a professional journalist."
      },
      {
        heading: "Global events and local voices",
        text:
          "I covered high-profile global events, including the 9/11 attacks, the Afghan War, the Beslan tragedy, and the establishment of international cooperation organizations led by Russia, China, and the U.S. I also reported on the opening ceremonies of U.S. and Russian military bases in Kyrgyzstan. While reporting on these significant political and international issues, I never lost sight of my mission to amplify the voices of those often unheard."
      },
      {
        heading: "Passion to human rights and investigation",
        text:
          "Despite the demanding workload, I graduated from university with an honors diploma. Driven by my passion for knowledge, I applied for a master's degree at Kyrgyzstan-Turkey Manas University, one of Central Asia's leading graduate schools, hoping to pursue a career in academia alongside journalism. Even as a top graduate student and a doctoral candidate, my passion for journalism never decreased."
      },
      {
        heading: "A full commitment to journalism",
        text:
          "In 2006, I made the serious decision to dedicate myself fully to the field. Over the years, I have written thousands of articles and feature stories, hosted hundreds of radio and TV programs, and spent a decade anchoring live shows on Azattyk Media - the Kyrgyz bureau of Radio Free Europe/Radio Liberty, the leading media organization in the country."
      },
      {
        heading: "Investigations that changed lives",
        text:
          "My investigative reporting has led to significant legislative changes in Kyrgyzstan. For instance, in 2013, I began investigating the state of the children's cancer ward in Bishkek. What I discovered was appalling: rampant neglect, corruption, and a lack of resources. More than 3,000 children under 18 were diagnosed with cancer annually, and around 80% of them died within a year due to inadequate care."
      },
      {
        heading: "Journalism can create real change",
        text:
          "Through relentless reporting, I brought national attention to these issues. My investigations spurred Parliament to act, resulting in legislative changes that made cancer treatment for children under 18 free. The children's oncology department has since been transformed into a modern, three-story facility with dozens of oncologists working to save lives. The death rate among children with cancer has fallen to 30% - a dramatic improvement."
      },
      {
        heading: "Bride kidnapping and national identity",
        text:
          "I have also reported extensively on the issue of bride kidnapping, leading a massive campaign against this horrifying tradition. My work contributed to legislative changes that now classify bride kidnapping as a serious crime in Kyrgyzstan. Throughout my career, a guiding principle in my work has been the importance of reporting in Kyrgyz. Language plays a vital role in shaping national identity, especially in a region like Central Asia, where the remnants of a colonial mindset continue to limit our nations' full freedom."
      }
    ],
    entries: [
      {
        title: "Reporting in Kyrgyz as cultural independence",
        source: "Personal Story & Blogs",
        note:
          "Language is a cornerstone of cultural independence, and that principle continues to guide the work."
      }
    ]
  },
  recent: {
    title: "Recent Stories",
    kicker: "Recent Stories",
    lead:
      "A cleaner editorial archive for current reporting, features, and dispatches, keeping the original structure while moving much closer to the real published stories.",
    image: photography.newsroom,
    imageAlt: "Baktygul in the newsroom",
    sections: [
      {
        heading: "Climate and regional systems",
        text:
          "Recent work tracks climate risk, energy, and the structural blind spots shaping Central Asia's future."
      },
      {
        heading: "Human rights and migration",
        text:
          "The archive also needs to hold accountability reporting on deportation, social violence, and the people most exposed to state neglect."
      },
      {
        heading: "An active reporting file",
        text:
          "This page is now structured as a live editorial list rather than decorative placeholders, so future reporting can be added without redesigning the whole page."
      }
    ],
    entries: [
      {
        title: "The Urgent Need For Better Climate Data In Central Asia",
        source: "Project Syndicate",
        note: "Climate change impacts cannot be addressed without stronger regional data.",
        href: "https://www.project-syndicate.org/commentary/central-asia-climate-change-reliable-data-needed-by-baktygul-chynybaeva-2025-02"
      },
      {
        title: "The New Investigation: Kyrgyzstan Sells Coal To Europe Via Sanctioned Russia",
        source: "Bellingcat",
        note: "An investigation into sanctions, supply chains, and cross-border trade.",
        href: "https://www.bellingcat.com/news/rest-of-world/2025/02/27/the-new-investigation-kyrgyzstan-sells-coal-to-europe-via-sanctioned-russia/"
      },
      {
        title: "This Is How Migrants Are Deported From Bishkek To Moscow",
        source: "Mediazona Central Asia",
        note: "A reporting piece on deportation systems, movement, and power.",
        href: "https://mediazona.ca/article/2025/01/16/deportation"
      },
      {
        title: "The Children Of The Border",
        source: "The Dial",
        note: "A human-centred story from a contested border landscape.",
        href: "https://www.thedial.world/articles/news/issue-23/kyrgyzstan-tajikistan-border-children"
      },
      {
        title: "A New Era For Kyrgyz Journalism Begins Behind Bars",
        source: "New Lines Magazine",
        note: "A story about pressure on independent media and the cost of reporting.",
        href: "https://newlinesmag.com/argument/a-new-era-for-kyrgyz-journalism-begins-behind-bars/"
      }
    ]
  },
  books: {
    title: "Published Books",
    kicker: "Published Books",
    lead:
      "In 2004, I launched Kulunchak (Baby Horse), the first children's magazine in Kyrgyz after independence, and distributed it across every corner of the country. For five years, Kulunchak was the only media outlet dedicated to children in Kyrgyz.",
    image: photography.books,
    imageAlt: "Published books",
    sections: [
      {
        heading: "Children's publishing",
        text:
          "I have also written several books for children, including Kyz Kitep (Book for Girls) and Menin Komputerim (My Computer), which won an international award in Moscow in 2021 as the best children's book of the year."
      },
      {
        heading: "Translation work",
        text:
          "Throughout my personal journey I translated fiction and nonfiction works. Among them the most well-known work is the only memoir of Kyrgyzstan's famous writer Chyngyz Aitmatov, My Childhood, which I translated from Turkish into Kyrgyz in 2003."
      },
      {
        heading: "Published list",
        text:
          "The original list of translated and published books is preserved here in a cleaner sequence."
      }
    ],
    entries: [
      {
        title: "Chyngyz Aitmatov, My Childhood",
        source: "Memoir, translated 2003",
        note: "Translated from Turkish into Kyrgyz."
      },
      {
        title: "Ozgen Keskin, Alperender Ochogu",
        source: "Fiction, translated 2014",
        note: "Part of the translated and published books list from the original site."
      },
      {
        title: "Lucio Valerio Sarandrea, LUNA - The Tail Of Aisuluu",
        source: "Translated, 2019",
        note: "Included in the original published books list."
      },
      {
        title: "Kyz Kitep",
        source: "Written and published, 2020",
        note: "Book for girls."
      },
      {
        title: "Menin Komputerim",
        source: "Written and published, 2020",
        note: "My Computer."
      },
      {
        title: "Life with Autism",
        source: "Written and published, 2023",
        note: "Latest book named on the original page."
      }
    ]
  },
  investigations: {
    title: "Investigations",
    kicker: "Structured for accountability reporting",
    lead:
      "The exported files did not include a dedicated investigations page, so this version creates a serious shell for future investigative work while staying inside the site's visual identity.",
    image: photography.gallery[5],
    imageAlt: "Investigations",
    sections: [
      {
        heading: "Forensic clarity",
        text:
          "Investigative work needs order. This page uses stronger sectioning and cleaner visual hierarchy to support complex stories."
      },
      {
        heading: "Room for depth",
        text:
          "The redesign is built to hold timelines, source framing, embedded media, and long summaries without collapsing into clutter."
      },
      {
        heading: "Serious visual tone",
        text:
          "The palette stays within the established blue language but becomes sharper and more controlled."
      }
    ],
    entries: [
      {
        title: "The New Investigation: Kyrgyzstan Sells Coal To Europe Via Sanctioned Russia",
        source: "Bellingcat",
        note: "An accountability story that fits a more forensic page structure."
      },
      {
        title: "This Is How Migrants Are Deported From Bishkek To Moscow",
        source: "Mediazona Central Asia",
        note: "Migration, power, and state systems need stronger editorial framing."
      },
      {
        title: "The Children Of The Border",
        source: "The Dial",
        note: "Long-form investigative and human-centred reporting belongs in a calmer, more serious layout."
      }
    ]
  },
  video: {
    title: "Video Stories",
    kicker: "Video Stories",
    lead:
      "Digital media is constantly evolving, and in order to showcase the vision and beauty of my region, I am working on creating a variety of stories. Nowadays, social videos without narration have become extremely popular.",
    image: photography.gallery[2],
    imageAlt: "Video stories",
    sections: [
      {
        heading: "Why video storytelling",
        text:
          "As a journalist, I strive to keep up with new trends and adapt to the changing landscape."
      },
      {
        heading: "Underreported region",
        text:
          "Central Asia is often underrepresented in the global media, and a significant part of Eurasia lacks proper video storytelling. My aim is to fill this gap."
      },
      {
        heading: "Independent production",
        text:
          "I handle the scripting, pitching, and editing of my videos myself, and much of my fieldwork is a vital and rewarding aspect of my journalism career."
      }
    ],
    videos: [
      {
        title: "Another Two Months: A Kyrgyz Court's Decision For 11 Journalists",
        description:
          "A Kyrgyz court extended the pretrial detention of 11 journalists arrested on a charge of calling for mass riots.",
        embed: "https://www.rferl.org/embed/player/article/32858755.html",
        stream:
          "https://rfe-video-ns.akamaized.net/pangeavideo/2024/03/0/01/01000000-0aff-0242-ada0-08dc42a831ef.mp4",
        poster: "https://gdb.rferl.org/01000000-0a00-0242-7f15-08dc42a64d9e_w1080_h608.jpg",
        href: "https://www.rferl.org/a/a-kyrgyz-court-s-decision-for-11-journalists/32858755.html"
      },
      {
        title: "Young Kyrgyz Mother's Yurt Camp On Central Asia's Highest Peak",
        description:
          "A young Kyrgyz entrepreneur creates a yurt camp near Lenin Peak, linking tourism, borders, and livelihood.",
        embed: "https://www.rferl.org/embed/player/article/33057819.html",
        stream:
          "https://rfe-video-ns.akamaized.net/pangeavideo/2024/07/0/01/01000000-c0a8-0242-7b0c-08dcb14edda2.mp4",
        poster: "https://gdb.rferl.org/01000000-0aff-0242-be7c-08dcb1482f65_w1080_h608.jpg",
        href: "https://www.rferl.org/a/young-kyrgyz-mother-s-yurt-camp-on-central-asia-s-highest-peak/33057819.html"
      },
      {
        title: "Persian-Style Wedding In Uzbekistan: Throwing Money Into The Air",
        description:
          "A social and cultural video story from Uzbekistan, listed on the original page.",
        href: "https://www.rferl.org/a/persian-style-weddings-in-uzbekistan/32840472.html"
      },
      {
        title: "Tajikistan Shortens List Of Jobs Banned For Women",
        description:
          "A video story focused on gender and labor policy in Tajikistan.",
        href: "https://www.rferl.org/a/tajikistan-shortens-list/32812648.html"
      },
      {
        title: "Galloping At The Gender Gap: Kyrgyz Woman Challenges Male-Dominated Sport",
        description:
          "A video feature on gender, sport, and social norms in Kyrgyzstan.",
        href: "https://www.rferl.org/a/kyrgyz-woman-challenges-male-dominated-sport/32770252.html"
      },
      {
        title: "What's Driving A Rash Of Suicides In A Remote Kyrgyz Town?",
        description:
          "A reporting piece on mental health and social pressure in a remote community.",
        href: "https://www.rferl.org/a/a-rash-of-suicides-in-a-remote-kyrgyz-town/32762800.html"
      }
    ]
  },
  awards: {
    title: "Awards & Fellowships",
    kicker: "Awards and Fellowships",
    lead:
      "A cleaner presentation of fellowships, awards, and professional milestones from the original site.",
    image: photography.awards,
    imageAlt: "Awards and fellowships",
    sections: [
      {
        heading: "Professional milestones",
        text:
          "The original recognition list is preserved, but the page now reads more like a professional profile than a builder block."
      },
      {
        heading: "Fellowships",
        text:
          "It includes international journalism fellowships, climate reporting networks, and speaking or training roles."
      },
      {
        heading: "Awards",
        text:
          "Recognition for healthcare, human rights, and journalism is listed with stronger hierarchy and less clutter."
      }
    ],
    entries: [
      {
        title: "2024 Knight Wallace Journalism Fellowship",
        source: "Fellowship",
        note: "Listed on the original awards page."
      },
      {
        title: "2023 Daisy Sindellar Regional Exchange Fellowship, RFE/RL",
        source: "Fellowship",
        note: "Regional exchange fellowship."
      },
      {
        title: "2023 Senior Trainer for Climate Journalism Training",
        source: "ECOCAMP, Osh and Bishkek",
        note: "Climate journalism training role."
      },
      {
        title: "2022 Senior Journalist for UNEP's Vanishing Treasure Workshop",
        source: "GRIDArendal",
        note: "Workshop role from the original list."
      },
      {
        title: "2022 Oxford Climate Journalism Network Fellowship",
        source: "Climate Change Reporting",
        note: "Oxford climate reporting fellowship."
      },
      {
        title: "2021 Internews National Aspiration Award",
        source: "National Healthcare Reporting",
        note: "Recognition for healthcare reporting."
      },
      {
        title: "2021 Human Rights Award",
        source: "Ombudsman Institution of Kyrgyzstan",
        note: "Human rights recognition."
      },
      {
        title: "2021 Human Rights Medal",
        source: "Internal Affairs Ministry of Kyrgyzstan",
        note: "Medal named on the original page."
      },
      {
        title: "2021 Earth Journalism Network CCMP COP26 Reporting Fellowship",
        source: "Glasgow",
        note: "COP26 reporting fellowship."
      },
      {
        title: "2019 The Best Journalist Award",
        source: "Economy Ministry of Kyrgyzstan",
        note: "Journalism award."
      },
      {
        title: "2018 Mercy National Award",
        source: "Healthcare Reporting",
        note: "National award for healthcare reporting."
      }
    ]
  },
  climate: {
    title: "Climate Reporting",
    kicker: "Climate Reporting",
    lead:
      "Central Asia is one of the most vulnerable regions in the world when it comes to climate change, yet this issue has largely gone unreported in global media. My journey in climate reporting began in 2014, when Bishkek, the capital of Kyrgyzstan, was suffocated by severe air pollution, and local authorities failed to acknowledge it as a problem.",
    image: photography.climate,
    imageAlt: "Climate reporting",
    sections: [
      {
        heading: "Regional urgency",
        text:
          "Through persistent reporting and several investigations, I was able to raise awareness about air pollution in Bishkek, which led nonprofit environmental organizations to install air quality measurement equipment."
      },
      {
        heading: "International climate journalism",
        text:
          "I take great pride in being the first and only journalist to raise the concerns of my region at the United Nations climate conference."
      },
      {
        heading: "Published work",
        text:
          "My climate change stories were published by Columbia, Oxford Universities, and other international outlets, while I also contribute to climate journalism networks and communication work across Eastern Europe, the Caucasus, and Central Asia."
      }
    ],
    entries: [
      {
        title: "Climate journalists need to connect the dots between climate change and the invasion of Ukraine",
        source: "Reuters Institute",
        note: "Original climate reporting page link."
      },
      {
        title: "COP27 and Its Outcomes for Kyrgyzstan",
        source: "Columbia Climate School",
        note: "Original climate reporting page link."
      },
      {
        title: "The aftermath of Kyrgyzstan's viral glacier collapse",
        source: "Dialogue Earth",
        note: "Original climate reporting page link."
      },
      {
        title: "Climate Change Is Destroying Honey Production in Kyrgyzstan",
        source: "Earth Journalism Network",
        note: "Original climate reporting page link."
      },
      {
        title: "Azerbaijan: residents are against the building of cyanide lake",
        source: "CAN EECCA",
        note: "Original climate reporting page link."
      },
      {
        title: "The water crisis in Central Asia - how to find solutions?",
        source: "CAN EECCA",
        note: "Original climate reporting page link."
      }
    ]
  },
  contact: {
    title: "Contact",
    kicker: "Do you have a story you feel deserves to be told?",
    lead:
      "The contact page keeps the invitation from the original site but presents it with more trust, more clarity, and a better mobile experience.",
    image: photography.contact,
    imageAlt: "Contact illustration",
    sections: [
      {
        heading: "Commissioning and inquiries",
        text:
          "A cleaner form layout makes the page useful for editors, producers, collaborators, and sources."
      },
      {
        heading: "Newsletter",
        text:
          "The subscription area is separated visually so it supports the page instead of fighting with the main inquiry action."
      },
      {
        heading: "Direct contact feel",
        text:
          "The page is designed to feel human and credible, not like a generic contact template."
      }
    ]
  }
};
