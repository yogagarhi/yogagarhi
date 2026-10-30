// Localized data for WhyRishikesh and WhyVarkala sections

export interface WhyLocationData {
  badge: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  photoCaptions: {
    main: string;
    sub1: string;
    sub2: string;
  };
  pillars?: {
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
  };
}

export const WHY_RISHIKESH_TRANSLATIONS: Record<string, WhyLocationData> = {
  en: {
    badge: "Spiritual Epicenter",
    title: "Why Choose Rishikesh for Yoga Teacher Training",
    subtitle: "Immerse in the timeless energy of the world capital of yoga, where five millennia of sacred Vedic wisdom meets the pristine Himalayan foothills.",
    paragraphs: [
      "Nestled gracefully where the sacred Himalayan mountains open into the lush northern plains, Rishikesh is internationally revered as the Yoga Capital of the World. For over five millennia, legendary Vedic rishis, enlightened sages, and classical yoga masters have undertaken deep spiritual sadhana along these riverbanks. Walking through this sacred valley, you are not merely attending a contemporary training course—you are actively stepping into an unbroken, living stream of ancient yogic consciousness.",
      "The spiritual geography of Rishikesh is unmatched anywhere on Earth. As the holy River Ganga descends directly from high glacial peaks, her fast-flowing emerald waters saturate the surrounding atmosphere with high negative ions and pristine Himalayan prana. This unique natural ecosystem exerts a scientifically verified calming effect upon the human central nervous system, naturally quieting mental chatter and allowing students to effortlessly access deeper states of dharana (concentration) and dhyana (meditation).",
      "Unlike commercial Western retreat centers, every aspect of life in Rishikesh is tuned to spiritual awakening. At sunset, the valley vibrates with the celestial resonance of Sanskrit chanting, traditional temple bells, and the hypnotic Vedic fire ceremonies of the Parmarth Niketan and Triveni Ghat Ganga Aarti. Immersing your daily routine in this sacred environment bridges physical asana practice with profound inner philosophy, transforming personal exercise into a genuine journey of soul realization.",
      "Our ashram sanctuary is nestled in Tapovan—an elevated, serene enclave whose very name translates to \"the forest of penance.\" Historically the quiet dwelling place of wandering yogis, Tapovan sits comfortably above the busier market streets, surrounded by green Himalayan ridges while remaining just a short, pleasant walk from the sacred river and Lakshman Jhula. Here, away from noise and urban distraction, you experience the peaceful sanctuary essential for serious, life-transforming yogic study.",
      "From exploring the ancient subterranean meditation cave of Sage Vashistha along the river's white-sand shores to meditating at the 1,676-meter summit of Kunjapuri Temple as the dawn sun illuminates snow-capped Himalayan summits, training with YogaGarhi in Rishikesh provides an authentic immersion that will forever ground your teaching in genuine spiritual authority."
    ],
    photoCaptions: {
      main: "Himalayan Foothills & Holy Ganga River",
      sub1: "Sacred Ganga Aarti",
      sub2: "Kunjapuri Sunrise Trek"
    }
  },
  nl: {
    badge: "Spiritueel Epicentrum",
    title: "Waarom Kiezen voor Rishikesh voor je Yogadocentenopleiding",
    subtitle: "Dompel je onder in de tijdloze energie van de yoga-hoofdstad van de wereld, waar vijf millennia aan heilige Vedische wijsheid samenkomen aan de voet van de Himalaya.",
    paragraphs: [
      "Gelegen op de plek waar de majestueuze Himalaya overgaat in de weelderige noordelijke vlakten, wordt Rishikesh wereldwijd vereerd als de Yoga Hoofdstad van de Wereld. Al meer dan vijf millennia hebben legendarische rishi's, verlichte wijzen en traditionele yogameesters diepe spirituele sadhana beoefend langs deze heilige oevers. Wanneer je door deze vallei wandelt, volg je niet zomaar een opleiding—je stapt in een levende traditie van eeuwenoude yogische wijsheid.",
      "De spirituele energie van Rishikesh is uniek op aarde. Terwijl de heilige rivier de Ganges rechtstreeks afdaalt uit gletsjertoppen, vult het smaragdgroene water de berglucht met zuivere prana en negatieve ionen. Dit natuurlijke ecosysteem heeft een kalmerende werking op het zenuwstelsel, brengt de geest tot rust en stelt studenten in staat om moeiteloos diepere niveaus van dharana (concentratie) en dhyana (meditatie) te bereiken.",
      "In tegenstelling tot westerse commerciële centra is elk aspect van het dagelijks leven in Rishikesh gericht op innerlijke verdieping. Bij zonsondergang weerklinken Sanskriet-mantra's, tempelklokken en de Vedische vuurceremonies van de Ganga Aarti bij Parmarth Niketan en Triveni Ghat. Deze heilige omgeving verbindt fysieke asana's met diepe filosofie en tilt je persoonlijke beoefening naar een hoger niveau.",
      "Onze ashram bevindt zich in Tapovan—een verhoogde, rustige wijk waarvan de naam letterlijk 'het woud van bezinning' betekent. Tapovan ligt boven de levendige marktstraten en wordt omringd door groene heuvels, op slechts een korte wandeling van de Ganges en de Lakshman Jhula. Hier vind je de rust en focus die essentieel zijn voor een diepgaande opleiding.",
      "Van mediteren in de eeuwenoude grot van Vashistha aan de rivieroevers tot de zonsopgangmeditatie bij de Kunjapuri-tempel op 1.676 meter hoogte met uitzicht op de besneeuwde toppen: een opleiding bij YogaGarhi in Rishikesh legt een authentieke en solide basis voor je carrière als yogadocent."
    ],
    photoCaptions: {
      main: "Voetheuvels van de Himalaya & Heilige Ganges",
      sub1: "Heilige Ganga Aarti",
      sub2: "Kunjapuri Zonsopgangtrektocht"
    }
  }
};

export const WHY_VARKALA_TRANSLATIONS: Record<string, WhyLocationData> = {
  en: {
    badge: "Coastal Spiritual Haven",
    title: "Why Choose Varkala for Yoga Teacher Training",
    subtitle: "Where soaring red laterite cliffs meet the Arabian Sea and Kerala’s 5,000-year Ayurvedic tradition nurtures profound personal transformation.",
    paragraphs: [
      "Perched majestically along the southwestern Malabar coast, Varkala is Kerala’s crowning spiritual jewel. Famous for its dramatic geological formation where towering red laterite cliffs plunge directly into the azure Arabian Sea, Varkala provides a breathtaking natural backdrop for immersive yogic sadhana. Here, the fresh marine breeze is continually enriched by negative ions from crashing surf, naturally clearing mental fog, expanding lung capacity during pranayama, and soothing the autonomic nervous system.",
      "At the foot of the cliffs lies sacred Papanasam Beach, whose Sanskrit name literally translates to \"the cleansing of sins.\" Revered for over two millennia as a sacred coastal tirtham (pilgrimage site), holy natural mineral water springs bubble directly through the cliffside rocks into the ocean. Taking dawn meditative walks along these sands as golden sunlight reflects off the Arabian Sea grounds your physical practice in pristine natural elements and centuries of spiritual devotion.",
      "As part of Kerala—celebrated worldwide as \"God’s Own Country\" and the ancestral birthplace of classical Ayurveda—Varkala integrates genuine holistic wellness into every breath you take. Unlike tourist-congested destinations, Varkala maintains a gentle, bohemian rhythm where peaceful coconut palm groves, fresh tender coconut water, and locally grown medicinal herbs support genuine inner healing and deep bodily detoxification (Panchakarma).",
      "Adding to this high-vibrational sanctuary is the 2,000-year-old Janardanaswamy Temple, an ancient Vaishnavite pilgrimage site perched above sacred freshwater springs. The subtle spiritual energy of this consecrated coastal town, combined with our tranquil open-air cliffside shalas, creates a deeply focused learning sanctuary where you can escape the noise of modern life and absorb authentic yogic wisdom directly into your soul."
    ],
    photoCaptions: {
      main: "Varkala Red Laterite Cliffs",
      sub1: "Papanasam Beach Yoga",
      sub2: "Kerala Ayurveda Heritage"
    },
    pillars: {
      p1Title: "Papanasam Beach",
      p1Desc: "Sacred mineral waters",
      p2Title: "Ayurveda Cradle",
      p2Desc: "Authentic herbal medicine",
      p3Title: "Coastal Sanctuary",
      p3Desc: "Peaceful, uncrowded shalas",
      p4Title: "Ancient Temple",
      p4Desc: "2,000-year-old heritage"
    }
  },
  nl: {
    badge: "Kustreservaat van Spiritualiteit",
    title: "Waarom Kiezen voor Varkala voor je Yogadocentenopleiding",
    subtitle: "Waar indrukwekkende rode kliffen de Arabische Zee ontmoeten en Kerala's 5.000 jaar oude Ayurvedische traditie zorgt voor diepgaande transformatie.",
    paragraphs: [
      "Gelegen langs de zuidwestelijke Malabarkust is Varkala het spirituele juweel van Kerala. Beroemd om haar unieke geologie waar rode laterietkliffen direct uitmonden in de azuurblauwe Arabische Zee, biedt Varkala een adembenemend decor voor intensieve yoga-beoefening. De zuivere zeebries verfrist de geest, vergroot de longcapaciteit tijdens pranayama en brengt het zenuwstelsel tot rust.",
      "Aan de voet van de kliffen ligt het heilige Papanasam Beach, waarvan de Sanskrietnaam 'het zuiveren van karma' betekent. Al meer dan tweeduizend jaar wordt deze kust vereerd als bedevaartsplek, waar natuurlijke minerale bronnen door de rotsen stromen. Vroeg in de ochtend mediteren op dit strand terwijl de zon opkomt boven de oceaan, verbindt je fysieke beoefening met de oerkracht van de natuur.",
      "Als onderdeel van Kerala—wereldwijd bekend als 'God's Own Country' en de bakermat van klassieke Ayurveda—is welzijn in Varkala overal voelbaar. In tegenstelling tot drukke toeristische oorden heerst hier een ontspannen sfeer met rustige kokosgaarden, vers kokoswater en lokale geneeskrachtige kruiden die diepe ontgifting en verjonging ondersteunen.",
      "De 2.000 jaar oude Janardanaswamy-tempel completeert deze bijzondere plek. De spirituele sfeer van dit kustplaatsje, gecombineerd met onze openlucht shala's op de kliffen, creëert een serene leeromgeving waarin je de hectiek van alledag achter je laat en authentieke yogakennis kunt opdoen."
    ],
    photoCaptions: {
      main: "Rode Kliffen van Varkala",
      sub1: "Yoga op Papanasam Beach",
      sub2: "Ayurvedisch Erfgoed van Kerala"
    },
    pillars: {
      p1Title: "Papanasam Strand",
      p1Desc: "Heilzame mineraalbronnen",
      p2Title: "Bakermat van Ayurveda",
      p2Desc: "Traditionele kruidenkunde",
      p3Title: "Kustoase",
      p3Desc: "Rustige openlucht shala's",
      p4Title: "Eeuwenoude Tempel",
      p4Desc: "2.000 jaar oud erfgoed"
    }
  }
};
