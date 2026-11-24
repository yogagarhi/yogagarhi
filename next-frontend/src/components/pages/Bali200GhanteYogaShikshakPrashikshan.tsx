import React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Award,
  Users,
  DollarSign,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Sparkles,
  HeartHandshake,
  BookOpen,
  ArrowRight,
  Sun,
  ShieldCheck,
  Compass,
  Smile,
  Utensils,
  Home,
  Check,
} from "lucide-react";

export default function Bali200GhanteYogaShikshakPrashikshan() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* १. शीर्ष नेविगेशन बार (DEDICATED HINDI HEADER) */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl h-20 flex items-center justify-between">
          <Link
            href="/bali-200-ghante-yoga-shikshak-prashikshan"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              य
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-serif text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                योगगढ़ी
              </span>
              <span className="text-[१०px] text-muted-foreground uppercase tracking-widest font-medium">
                बाली योग आश्रम
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-foreground/80">
            <a href="#parichay" className="hover:text-primary transition-colors">
              परिचय
            </a>
            <a href="#pathyakram" className="hover:text-primary transition-colors">
              पाठ्यक्रम
            </a>
            <a href="#dincharya" className="hover:text-primary transition-colors">
              दिनचर्या
            </a>
            <a href="#bali-aawas" className="hover:text-primary transition-colors">
              स्थान व आवास
            </a>
            <a href="#praman-patra" className="hover:text-primary transition-colors">
              प्रमाण पत्र
            </a>
            <a href="#prashnottari" className="hover:text-primary transition-colors">
              अक्सर पूछे जाने वाले प्रश्न
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all duration-200"
            >
              सीट सुरक्षित करें
            </Link>
          </div>
        </div>
      </header>

      {/* २. मुख्य शीर्षक खंड (HERO SECTION) */}
      <section className="relative py-16 md:py-24 bg-secondary/30 overflow-hidden border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>उबुद और गियानयार, बाली</span>
            </span>
            <h1 className="font-heading font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
              बाली में २०० घंटे का योग शिक्षक प्रशिक्षण
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8">
              उबुद के शांत और पवित्र वातावरण में एक कुशल, आत्मविश्वासी और ज्ञानी योग शिक्षक बनें। पारंपरिक हठ योग, विन्यास प्रवाह, प्राणायाम और ध्यान का गहन अभ्यास।
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/apply-now"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200"
              >
                अपनी सीट सुरक्षित करें
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-card border border-border text-foreground hover:bg-secondary transition-all duration-200 shadow-sm"
              >
                हमसे सीधे बात करें
              </Link>
            </div>
          </div>

          {/* त्वरित तथ्य पट्टी (QUICK FACTS STRIP) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card border border-border shadow-sm mb-12">
            <div className="text-center p-2">
              <Clock className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">कुल अवधि</p>
              <p className="text-sm font-bold text-foreground">२४ दिन (२०० घंटे)</p>
            </div>
            <div className="text-center p-2">
              <Users className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">समूह सीमा</p>
              <p className="text-sm font-bold text-foreground">८ से १० विद्यार्थी</p>
            </div>
            <div className="text-center p-2">
              <Calendar className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">आगामी सत्र</p>
              <p className="text-sm font-bold text-foreground">[आगामी सत्र की तिथियां]</p>
            </div>
            <div className="text-center p-2">
              <DollarSign className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">पाठ्यक्रम शुल्क</p>
              <p className="text-sm font-bold text-foreground">[शुल्क का विवरण]</p>
            </div>
            <div className="text-center p-2 col-span-2 sm:col-span-1">
              <Award className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">प्रमाण पत्र</p>
              <p className="text-sm font-bold text-foreground">[प्रमाण पत्र का विवरण]</p>
            </div>
          </div>

          {/* मुख्य तस्वीर (HERO IMAGE) */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-border">
            <picture className="w-full h-full block">
              <img
                src="https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_1024/yogagarhi/assets/hero-yoga-bali-new.jpg"
                alt="बाली में योग शिक्षक प्रशिक्षण के दौरान योगाभ्यास करते साधक"
                width={1024}
                height={683}
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* ३. परिचय खंड (INTRODUCTION) */}
      <section id="parichay" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>आत्मिक और व्यावहारिक यात्रा</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              बाली में योग शिक्षक प्रशिक्षण: एक संपूर्ण और जीवन बदलने वाली यात्रा
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              स्वयं के भीतर उतरने और दूसरों को योग मार्ग दिखाने का सबसे सुंदर अवसर।
            </p>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed bg-card p-6 md:p-10 rounded-3xl border border-border shadow-sm">
            <p>
              योग केवल शारीरिक व्यायाम नहीं है, बल्कि यह जीवन जीने की एक पूर्ण और गहरी कला है। जब आप <strong className="text-foreground font-semibold">बाली में योग शिक्षक प्रशिक्षण</strong> प्राप्त करने का निर्णय लेते हैं, तो आप केवल एक उपाधि नहीं लेते, बल्कि अपने पूरे जीवन को एक नया दृष्टिकोण और अनुशासन देते हैं। यह २४ दिवसीय आवासीय कार्यक्रम उन सभी साधकों के लिए बनाया गया है जो योग की गहराइयों को समझकर एक कुशल और मार्गदर्शक शिक्षक बनना चाहते हैं।
            </p>
            <p>
              इंडोनेशिया का यह शांत द्वीप बाली सदियों से अपनी आध्यात्मिक ऊर्जा, शांत प्रकृति, हरे-भरे ताड़ के वृक्षों और निर्मल नदियों के लिए पूरी दुनिया में जाना जाता है। विशेष रूप से गियानयार और उबुद का क्षेत्र योग और आत्म-चिंतन के लिए एक आदर्श भूमि है। यहां का शांत वातावरण, ताजी हवा और सकारात्मक ऊर्जा आपके मन को शांत करती है और आपकी एकाग्रता को कई गुना बढ़ा देती है। बड़े शहरों के शोर-शराबे और व्यस्त जीवन से दूर, यहां आप बिना किसी भटकाव के अपनी पूरी शक्ति योग साधना में लगा सकते हैं।
            </p>
            <p>
              हमारे आश्रम योगगढ़ी में हम इस बात का विशेष ध्यान रखते हैं कि प्रत्येक विद्यार्थी को व्यक्तिगत मार्गदर्शन मिले। इसलिए हमारी प्रत्येक कक्षा में विद्यार्थियों की संख्या केवल ८ से १० तक ही सीमित रखी जाती है। इस छोटे समूह की वजह से हमारे अनुभवी शिक्षक आपकी शारीरिक बनावट, लचीलेपन और मानसिक स्थिति को अच्छी तरह समझ पाते हैं। वे प्रत्येक आसन में आपके शरीर के सही संतुलन (अलाइनमेंट) और सुधार (एडजस्टमेंट) पर व्यक्तिगत ध्यान देते हैं, जिससे आप बिना किसी चोट के डर के आत्मविश्वास के साथ आगे बढ़ते हैं।
            </p>
            <div className="pt-4 border-t border-border flex flex-wrap gap-4 items-center justify-between">
              <span className="text-sm font-semibold text-foreground">
                क्या आप हमारे आश्रम के बारे में और जानना चाहते हैं?
              </span>
              <Link
                href="/about-school"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                <span>योगगढ़ी विद्यालय और परंपरा के बारे में और पढ़ें</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ४. पाठ्यक्रम अवलोकन (COURSE OVERVIEW) */}
      <section className="py-16 md:py-24 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>प्रशिक्षण की रूपरेखा</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              २०० घंटे का योग प्रशिक्षण: पाठ्यक्रम की रूपरेखा और बुनियादी जानकारी
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              २४ दिनों का सघन, अनुशासित और आनंददायक अध्ययन जो आपको एक स्वतंत्र शिक्षक बनाता है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-2">
                कुल समय व अवधि
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                यह गहन आवासीय प्रशिक्षण कुल २४ दिनों तक चलता है। इसमें प्रतिदिन लगभग ७ से ८ घंटे का व्यावहारिक और सैद्धांतिक अध्ययन होता है, जिससे कुल मिलाकर <strong className="text-foreground">२०० घंटे का योग प्रशिक्षण</strong> पूर्ण होता है।
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-2">
                सीमित विद्यार्थी संख्या
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                हम बड़े और भीड़भाड़ वाले बैच नहीं चलाते हैं। हमारे प्रत्येक सत्र में केवल ८ से १० विद्यार्थियों को ही प्रवेश दिया जाता है। इससे प्रत्येक साधक को शिक्षक से सीधा संवाद और निरंतर मार्गदर्शन मिलता है।
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-2">
                सुरक्षित व व्यवस्थित वातावरण
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                आश्रम का वातावरण शांत, सुरक्षित और अध्ययन के अनुकूल है। रहने के लिए हवादार कमरे, प्रतिदिन तीन समय का सात्विक आहार और अभ्यास के लिए लकड़ी के फर्श वाला सुंदर योग कक्ष उपलब्ध कराया जाता है।
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border text-center max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              इस सत्र के लिए उपलब्ध सीटें सीमित हैं। क्या आप अपने लिए एक स्थान सुनिश्चित करना चाहते हैं?
            </p>
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
            >
              <span>अपनी सीट सुरक्षित करने के लिए आवेदन पत्र भरें</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ५. विस्तृत पाठ्यक्रम खंड (DETAILED SYLLABUS) */}
      <section id="pathyakram" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>सात प्रमुख अध्ययन खंड</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              योग शिक्षक बनने का पाठ्यक्रम: सात प्रमुख अध्ययन खंड
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              एक संपूर्ण योग शिक्षक बनने के लिए आवश्यक सभी सिद्धांतों, आसनों और शिक्षण पद्धतियों का क्रमबद्ध अध्ययन।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* खंड १: आसन अभ्यास */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  खंड १
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  घंटे: [घंटों का विवरण]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                आसन अभ्यास (हठ योग और विन्यास प्रवाह)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                पारंपरिक हठ योग और आधुनिक विन्यास प्रवाह के मुख्य आसनों का गहन अभ्यास। खड़े होने वाले आसन, बैठकर किए जाने वाले आसन, आगे और पीछे झुकने वाले आसन, संतुलन आसन और उल्टे आसन (इन्वर्सन)। शरीर की स्थिरता, सांस के साथ तालमेल और आसनों में सही संरेखण (अलाइनमेंट) का सूक्ष्म अध्ययन।
              </p>
            </div>

            {/* खंड २: प्राणायाम और श्वास क्रियाएं */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  खंड २
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  घंटे: [घंटों का विवरण]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                प्राणायाम और श्वास क्रियाएं
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                प्राण ऊर्जा के प्रवाह को नियंत्रित करने की प्राचीन तकनीकें। नाड़ी शोधन, भस्त्रिका, कपालभाति, शीतली, सीत्कारी, भ्रामरी और उज्जायी प्राणायाम। तीनों बंधों (मूल बंध, उड्डियान बंध, जालंधर बंध) का व्यावहारिक प्रयोग और शरीर के सूक्ष्म ऊर्जा केंद्रों (चक्रों) पर उनका प्रभाव।
              </p>
            </div>

            {/* खंड ३: ध्यान और एकाग्रता */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  खंड ३
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  घंटे: [घंटों का विवरण]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                ध्यान और मानसिक एकाग्रता
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                चंचल मन को शांत करने और गहरी एकाग्रता विकसित करने की विधियां। योग निद्रा, चक्र ध्यान, विपश्यना शैली का साक्षी भाव ध्यान, नाद योग और शांत वातावरण में मौन साधना। दैनिक जीवन में तनाव कम करने और मानसिक स्पष्टता पाने के सरल अभ्यास।
              </p>
            </div>

            {/* खंड ४: शरीर रचना और क्रिया विज्ञान */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  खंड ४
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  घंटे: [घंटों का विवरण]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                शरीर रचना और क्रिया विज्ञान (एनाटॉमी)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                मानव शरीर की हड्डियों, मांसपेशियों, जोड़ों और रीढ़ की हड्डी की बनावट का व्यावहारिक अध्ययन। आसनों के दौरान शरीर पर पड़ने वाले खिंचाव और दबाव को समझना। चोट से बचाव, विभिन्न शारीरिक सीमाओं वाले विद्यार्थियों के लिए आसनों में बदलाव (मॉडिफिकेशन) और सहायक उपकरणों (प्रॉप्स) का उपयोग।
              </p>
            </div>

            {/* खंड ५: योग दर्शन और इतिहास */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  खंड ५
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  घंटे: [घंटों का विवरण]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                योग दर्शन और इतिहास
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                महर्षि पतंजलि के अष्टांग योग (यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान, समाधि) का सरल और व्यावहारिक अध्ययन। भगवद्गीता के प्रमुख योग सिद्धांत, कर्म योग, भक्ति योग, ज्ञान योग और राज योग की समझ। एक योग शिक्षक के नैतिक नियम और दैनिक आचरण।
              </p>
            </div>

            {/* खंड ६: शिक्षण पद्धति और कक्षा प्रबंधन */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  खंड ६
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  घंटे: [घंटों का विवरण]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                शिक्षण पद्धति और कक्षा संचालन
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                एक आत्मविश्वासी शिक्षक बनने की कला। स्पष्ट आवाज, निर्देश देने का सही तरीका, कक्षा में विद्यार्थियों का सही निरीक्षण, हाथ से आसन सही करने की तकनीक और विद्यार्थियों को प्रोत्साहित करना। ६० से ९० मिनट की कक्षा का क्रमबद्ध और संतुलित ढांचा तैयार करना।
              </p>
            </div>

            {/* खंड ७: अंतिम व्यावहारिक और सैद्धांतिक परीक्षा */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3 md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  खंड ७
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  घंटे: [घंटों का विवरण]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                प्रायोगिक शिक्षण और अंतिम मूल्यांकन
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                पाठ्यक्रम के अंतिम सप्ताह में प्रत्येक विद्यार्थी साथी विद्यार्थियों के सामने वास्तविक कक्षा का संचालन करता है। हमारे मुख्य शिक्षक आपके शिक्षण कौशल, आसन प्रदर्शन, आवाज और समय प्रबंधन का मूल्यांकन करते हैं और सुधार के लिए रचनात्मक सुझाव देते हैं। इसके साथ ही बुनियादी सैद्धांतिक विषयों पर एक लिखित परीक्षा होती है।
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-card border border-border text-center text-sm text-muted-foreground">
            नोट: प्रत्येक विषय के लिए निर्धारित घंटों का आधिकारिक विभाजन: [घंटों का विवरण]। कुल अध्ययन समय २०० घंटे है।
          </div>
        </div>
      </section>

      {/* ६. दैनिक दिनचर्या खंड (DAILY TIMETABLE) */}
      <section id="dincharya" className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Sun className="w-3.5 h-3.5" />
              <span>अनुशासन और ऊर्जा</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              आश्रम की दैनिक समय सारिणी: साधना और अनुशासन का दिन
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              सुबह के शांत ब्रह्ममुहूर्त से लेकर रात्रि के विश्राम तक, एक संतुलित और प्राकृतिक दिनचर्या।
            </p>
          </div>

          <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden divide-y divide-border/60">
            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                प्रातः ०६:००
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">जागरण और ताजी जड़ी-बूटी चाय</p>
                <p className="text-xs sm:text-sm text-muted-foreground">प्राकृतिक वातावरण में उठना, व्यक्तिगत स्वच्छता और स्थानीय हर्बल पेय जामु का सेवन।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                प्रातः ०६:३०
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">प्राणायाम, मंत्र जप और ध्यान साधना</p>
                <p className="text-xs sm:text-sm text-muted-foreground">सुबह की ठंडी और शुद्ध हवा में श्वसन क्रियाएं, नाद योग और मानसिक शांति का अभ्यास।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                प्रातः ०८:००
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">पारंपरिक हठ योग आसन अभ्यास</p>
                <p className="text-xs sm:text-sm text-muted-foreground">शारीरिक शक्ति, संतुलन और लचीलेपन को विकसित करने के लिए शास्त्रीय आसनों का अभ्यास।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                प्रातः ०९:३०
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">पौष्टिक सात्विक नाश्ता</p>
                <p className="text-xs sm:text-sm text-muted-foreground">बाली के ताजे उष्णकटिबंधीय फल, दलिया, ताजे नारियल और ऊर्जा देने वाला पौष्टिक आहार।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                प्रातः १०:३०
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">योग दर्शन और प्राचीन ग्रंथों का अध्ययन</p>
                <p className="text-xs sm:text-sm text-muted-foreground">पतंजलि योग सूत्र, जीवन के नैतिक मूल्य और योग के ऐतिहासिक विकास पर विचार-विमर्श।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                दोपहर १२:००
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">शरीर रचना विज्ञान (एनाटॉमी) और शारीरिक सुरक्षा</p>
                <p className="text-xs sm:text-sm text-muted-foreground">मांसपेशियों और जोड़ों की क्रियाविधि, रीढ़ की सुरक्षा और चोटों से बचाव के नियम।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                दोपहर १३:००
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">दोपहर का भोजन और विश्राम</p>
                <p className="text-xs sm:text-sm text-muted-foreground">ताजा शाकाहारी भोजन, नासी गोरेंग और गादो-गादो के साथ हल्का आराम और स्वाध्याय।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                दोपहर १४:३०
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">शिक्षण कला और आसन सुधार कार्यशाला</p>
                <p className="text-xs sm:text-sm text-muted-foreground">हाथ से आसन सुधारने की तकनीकें, कक्षा का कुशल संचालन और विद्यार्थियों के साथ संवाद।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                सायं १६:००
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">विन्यास प्रवाह और गतिशील अभ्यास</p>
                <p className="text-xs sm:text-sm text-muted-foreground">सांस और गति के सुंदर समन्वय के साथ गतिशील विन्यास योग का अभ्यास।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                सायं १७:३०
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">संध्या ध्यान और योग निद्रा</p>
                <p className="text-xs sm:text-sm text-muted-foreground">सूर्यास्त के समय शरीर को पूरी तरह शिथिल करने और थकान दूर करने का विश्राम सत्र।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                रात्रि १९:००
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">सात्विक रात्रि भोज</p>
                <p className="text-xs sm:text-sm text-muted-foreground">हल्का, सुपाच्य और स्वादिष्ट गर्म भोजन, सूप और उबली हुई ताजी सब्जियां।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                रात्रि २०:००
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">सत्संग, प्रश्नोत्तर और स्व-चिंतन</p>
                <p className="text-xs sm:text-sm text-muted-foreground">शिक्षकों के साथ दिन के अनुभवों पर चर्चा, शंका समाधान और मधुर कीर्तन।</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-28">
                रात्रि २१:३०
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">मौन और गहरी विश्राम निद्रा</p>
                <p className="text-xs sm:text-sm text-muted-foreground">अगले दिन के अभ्यास के लिए पूर्ण शारीरिक और मानसिक विश्राम।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ७. बाली खंड (BALI LOCATION, STAY, FOOD & SURROUNDINGS) */}
      <section id="bali-aawas" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>पवित्र द्वीप का सानिध्य</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              बाली योग प्रशिक्षण: उबुद और गियानयार में प्राकृतिक वातावरण, आवास और भोजन
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              प्रकृति की गोद में स्थित हमारा आश्रम, जहां हर सांस में शांति और ताजगी का अनुभव होता है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* प्रशिक्षण स्थल व आवास */}
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-2xl font-bold text-foreground">
                प्रशिक्षण स्थल और शांत आवास
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                हमारा आश्रम बाली के गियानयार जिले में, सांस्कृतिक नगर उबुद से कुछ ही दूरी पर स्थित है। यह स्थान भीड़भाड़ वाले पर्यटन केंद्रों से दूर, हरे-भरे खेतों और उष्णकटिबंधीय वनस्पतियों के बीच एक शांत आश्रम के रूप में बनाया गया है।
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                रहने के लिए साफ-सुथरे, हवादार और आरामदायक कमरे उपलब्ध हैं। प्रत्येक कमरे में आरामदायक बिस्तर, निजी स्नानघर, गर्म पानी और बालकनी की सुविधा है जहां बैठकर आप सुबह के शांत वातावरण का आनंद ले सकते हैं।
              </p>
              <ul className="space-y-2 text-sm text-foreground/80 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>निजी अथवा साझा कमरे चुनने का विकल्प</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>स्वच्छ बिस्तर, तौलिए और दैनिक सफाई की व्यवस्था</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>प्राकृतिक बगीचा और विश्राम के लिए शांत स्थान</span>
                </li>
              </ul>
            </div>

            {/* सात्विक आहार */}
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-2xl font-bold text-foreground">
                पौष्टिक सात्विक आहार
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                योग साधना में भोजन का स्थान अत्यंत महत्वपूर्ण है। आश्रम में बनने वाला प्रत्येक भोजन शुद्ध शाकाहारी, ताजा और सात्विक होता है जो पचने में आसान और शरीर को भरपूर स्फूर्ति देने वाला होता है।
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                स्थानीय रूप से उगाए गए फल जैसे पपीता, अनानास, केला और ड्रैगन फ्रूट प्रतिदिन परोसे जाते हैं। साथ ही बाली के पारंपरिक शाकाहारी व्यंजन जैसे नासी गोरेंग (शाकाहारी शैली में), गादो-गादो (उबली सब्जियों और मूंगफली की चटनी का संतुलित व्यंजन) और हल्दी-अदरक से बना पारंपरिक पेय जामु नियमित रूप से मिलता है।
              </p>
              <ul className="space-y-2 text-sm text-foreground/80 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>प्रतिदिन तीन समय का ताजा और संतुलित सात्विक भोजन</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>स्थानीय ताजे फल और हर्बल पेय जामु</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>पाचन को सुगम बनाने वाला शुद्ध आहार</span>
                </li>
              </ul>
            </div>
          </div>

          {/* आसपास के प्रसिद्ध प्राकृतिक स्थल */}
          <div className="bg-card p-6 md:p-10 rounded-3xl border border-border shadow-sm">
            <h3 className="font-heading font-serif text-xl sm:text-2xl font-bold text-foreground mb-4 text-center">
              बाली के प्रमुख दर्शनीय स्थल और आसपास का परिवेश
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              प्रशिक्षण के दौरान मिलने वाले साप्ताहिक अवकाश के दिन आप बाली की समृद्ध संस्कृति और प्राकृतिक सुंदरता का अनुभव कर सकते हैं।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                <h4 className="font-semibold text-foreground mb-1">तेगालालांग धान के खेत</h4>
                <p className="text-xs text-muted-foreground">उबुद के समीप सीढ़ीनुमा हरे-भरे धान के खेत जो आंखों को असीम सुकून देते हैं।</p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                <h4 className="font-semibold text-foreground mb-1">तानाह लोत मंदिर</h4>
                <p className="text-xs text-muted-foreground">समुद्र की चट्टान पर बना बाली का प्राचीन और अत्यंत शांत आध्यात्मिक मंदिर।</p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                <h4 className="font-semibold text-foreground mb-1">चंपुहान रिज और उबुद</h4>
                <p className="text-xs text-muted-foreground">पहाड़ियों के बीच बनी सुंदर पगडंडी जहां सुबह टहलना मन को शांति प्रदान करता है।</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/retreat/bali"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                <span>बाली में योग साधना और विश्राम शिविर की जानकारी प्राप्त करें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ८. पाठ्यक्रम के बाद विद्यार्थी क्या कर सकेंगे (AFTER COURSE CAPABILITIES) */}
      <section className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>प्रशिक्षण के बाद आपका भविष्य</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              प्रशिक्षण के बाद आपकी नई क्षमताएं: एक स्वतंत्र और कुशल शिक्षक बनें
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              २४ दिनों के गहन अध्ययन के बाद आप एक आत्मविश्वासी और व्यावहारिक योग शिक्षक के रूप में उभरेंगे।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                १
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-3">
                कक्षा का स्वतंत्र संचालन
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                आप किसी भी स्तर के विद्यार्थियों के लिए ६० से ९० मिनट की संतुलित योग कक्षा की योजना बना सकेंगे, स्पष्ट निर्देश दे सकेंगे और समय का कुशल प्रबंधन कर सकेंगे।
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                २
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-3">
                अपनी योग कक्षाएं आरंभ करना
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                आप अपने गृह नगर में, व्यक्तिगत रूप से अथवा ऑनलाइन माध्यम से अपने स्वयं के योग सत्र और कार्यशालाएं शुरू करने में पूरी तरह सक्षम होंगे।
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                ३
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-3">
                योग केंद्रों में अध्यापन
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                आप दुनिया भर के योग विद्यालयों, स्वास्थ्य केंद्रों, होटलों और आश्रमों में एक पेशेवर योग शिक्षक के पद के लिए आवेदन कर सकेंगे।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ९. कौन जुड़ सकता है (WHO CAN JOIN) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>सभी के लिए खुला मार्ग</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              विदेश में योग शिक्षक प्रशिक्षण: कौन शामिल हो सकता है और पात्रता क्या है?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              यह पाठ्यक्रम उन सभी व्यक्तियों के लिए तैयार किया गया है जो योग के प्रति समर्पित हैं।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">आरंभिक साधक</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                यदि आप योग में नए हैं लेकिन अपने अभ्यास की सही और मजबूत नींव रखना चाहते हैं, तो यह पाठ्यक्रम आपके लिए बिल्कुल उपयुक्त है।
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">नियमित अभ्यासी</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                जो लोग पहले से योगाभ्यास कर रहे हैं और अब अपने व्यक्तिगत अभ्यास को अगले स्तर पर ले जाकर दूसरों को सिखाना चाहते हैं।
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">कामकाजी पेशेवर</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                व्यस्त नौकरी और तनावपूर्ण जीवनशैली से कुछ समय निकालकर स्वयं को पुनर्जीवित करने और स्वास्थ्य क्षेत्र में नई दिशा खोजने वाले लोग।
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">अकेले यात्रा करने वाले</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                अकेले आने वाले पुरुष और महिला साधकों के लिए हमारा आश्रम अत्यंत सुरक्षित, आत्मीय और पारिवारिक माहौल प्रदान करता है।
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border text-center max-w-3xl mx-auto">
            <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-2">
              प्रवेश के लिए बुनियादी पात्रता
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              इस पाठ्यक्रम में प्रवेश के लिए किसी विशेष प्रमाणपत्र की आवश्यकता नहीं है। उम्मीदवार की आयु कम से कम १८ वर्ष होनी चाहिए, सामान्य शारीरिक और मानसिक स्वास्थ्य होना चाहिए, तथा आश्रम के नियमों और अनुशासन का पालन करने की तत्परता होनी चाहिए।
            </p>
          </div>
        </div>
      </section>

      {/* १०. प्रमाण पत्र खंड (CERTIFICATE SECTION) */}
      <section id="praman-patra" className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>आपकी शैक्षणिक मान्यता</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            योग शिक्षक प्रमाण पत्र: आपकी शिक्षा और मानकता
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            पाठ्यक्रम की सभी आवश्यकताओं, उपस्थिति और मूल्यांकन को सफलतापूर्वक पूर्ण करने पर प्रत्येक योग्य विद्यार्थी को आधिकारिक प्रमाण पत्र प्रदान किया जाता है।
          </p>

          <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm max-w-2xl mx-auto">
            <Award className="w-16 h-16 mx-auto text-primary mb-4" />
            <h3 className="font-heading font-serif text-2xl font-bold text-foreground mb-3">
              आधिकारिक पाठ्यक्रम पूर्णता प्रमाण पत्र
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              प्रमाण पत्र का विवरण, आधिकारिक मान्यता और पंजीकरण की पुष्टि: [प्रमाण पत्र का विवरण]। यह दस्तावेज प्रमाणित करता है कि आपने २०० घंटे का व्यवस्थित और अनुशासित योग अध्ययन पूर्ण किया है।
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border text-xs sm:text-sm text-foreground/80">
              नोट: प्रमाण पत्र संबंधी सभी तकनीकी विवरण और पंजीकरण विकल्प: [प्रमाण पत्र का विवरण]
            </div>
          </div>
        </div>
      </section>

      {/* ११. शुल्क, तिथियां और सीटें (FEES, DATES & BATCHES) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>स्पष्ट और पारदर्शी व्यवस्था</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            प्रशिक्षण शुल्क, आगामी सत्र और उपलब्ध सीटें
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            हमारे सभी सत्रों में सीमित स्थान होने के कारण अग्रिम पंजीकरण आवश्यक है।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <DollarSign className="w-8 h-8 mx-auto text-primary mb-2" />
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-1">पाठ्यक्रम शुल्क</h3>
              <p className="text-2xl font-bold text-primary mb-2">[शुल्क का विवरण]</p>
              <p className="text-xs text-muted-foreground">आवास, सात्विक भोजन, अध्ययन सामग्री और भ्रमण सहित।</p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <Calendar className="w-8 h-8 mx-auto text-primary mb-2" />
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-1">आगामी सत्र तिथियां</h3>
              <p className="text-base font-bold text-foreground mb-2">[आगामी सत्र की तिथियां]</p>
              <p className="text-xs text-muted-foreground">प्रत्येक माह के निर्धारित सत्र की शुरुआत।</p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <Users className="w-8 h-8 mx-auto text-primary mb-2" />
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-1">सीटों की स्थिति</h3>
              <p className="text-base font-bold text-foreground mb-2">[उपलब्ध सीटें]</p>
              <p className="text-xs text-muted-foreground">प्रत्येक सत्र में केवल ८ से १० सीटें उपलब्ध।</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/30 border border-border max-w-xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              अपनी मनपसंद तिथि और कमरे का प्रकार चुनने के लिए अभी संपर्क करें।
            </p>
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all"
            >
              <span>सीट सुरक्षित करने के लिए आवेदन करें</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* १२. हमारे शिक्षक खंड (TEACHERS SECTION) */}
      <section className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Smile className="w-3.5 h-3.5" />
            <span>समर्पित आचार्य</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            हमारे मुख्य योग शिक्षक और अनुभवी मार्गदर्शक
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            पारंपरिक योग ज्ञान और आधुनिक शरीर रचना की गहरी समझ रखने वाले समर्पित शिक्षक।
          </p>

          <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm max-w-2xl mx-auto text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-secondary mx-auto flex items-center justify-center text-muted-foreground font-semibold text-xs border border-border">
              [शिक्षक की तस्वीर]
            </div>
            <h3 className="font-heading font-serif text-2xl font-bold text-foreground">
              [शिक्षक का नाम]
            </h3>
            <p className="text-sm font-semibold text-primary">
              मुख्य योग आचार्य एवं मार्गदर्शक
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              [शिक्षक का अनुभव]: वर्षों का साधना अनुभव, सैकड़ों विद्यार्थियों को कुशल योग शिक्षक बनाने का कीर्तिमान और पारंपरिक योग दर्शन पर गहरा अधिकार।
            </p>
          </div>
        </div>
      </section>

      {/* १३. विद्यार्थियों के अनुभव (STUDENT EXPERIENCES) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>सच्चे अनुभव</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            पूर्व विद्यार्थियों के अनुभव और साझा विचार
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            जानिए उन साधकों के अनुभव जिन्होंने बाली में अपने जीवन की एक नई शुरुआत की।
          </p>

          <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm max-w-2xl mx-auto text-center space-y-4">
            <p className="text-base sm:text-lg text-muted-foreground italic leading-relaxed">
              [विद्यार्थियों के अनुभव और समीक्षाएं]
            </p>
            <p className="text-xs text-muted-foreground">
              हमारे पूर्व विद्यार्थियों की वास्तविक समीक्षाएं और अनुभव शीघ्र ही यहां जोड़े जाएंगे।
            </p>
          </div>
        </div>
      </section>

      {/* १४. अक्सर पूछे जाने वाले प्रश्न (FAQ SECTION - AT LEAST 10 QUESTIONS) */}
      <section id="prashnottari" className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>स्पष्ट समाधान</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              अक्सर पूछे जाने वाले प्रश्न: आपके सभी महत्वपूर्ण सवाल
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              बाली यात्रा, वीज़ा, भोजन, आवास और पाठ्यक्रम से जुड़े सभी आवश्यक प्रश्नों के सरल उत्तर।
            </p>
          </div>

          <div className="space-y-4">
            {/* प्रश्न १ */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">१.</span>
                <span>क्या बाली आने के लिए मुझे पहले से यात्रा अनुमति या वीज़ा लेना होगा?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                अधिकांश विदेशी नागरिकों को इंडोनेशिया आने पर हवाई अड्डे पर ही आगमन अनुमति (वीज़ा ऑन अराइवल) मिल जाती है, जो तीस दिनों के लिए मान्य होती है। आप यात्रा से पहले इंडोनेशिया के आधिकारिक सरकारी पोर्टल से इलेक्ट्रॉनिक यात्रा अनुमति भी प्राप्त कर सकते हैं। आपका पासपोर्ट कम से कम छह महीने तक वैध होना चाहिए।
              </p>
            </div>

            {/* प्रश्न २ */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">२.</span>
                <span>प्रशिक्षण के दौरान कैसा भोजन उपलब्ध कराया जाता है?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                आश्रम में प्रतिदिन तीन बार ताजा, पौष्टिक और शुद्ध शाकाहारी सात्विक भोजन परोसा जाता है। इसमें बाली के ताजे फल, हरी सब्जियां, स्थानीय व्यंजन जैसे नासी गोरेंग, गादो-गादो और पारंपरिक हर्बल पेय जामु शामिल हैं। यह भोजन योगाभ्यास के अनुकूल और ऊर्जा देने वाला होता है।
              </p>
            </div>

            {/* प्रश्न ३ */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">३.</span>
                <span>क्या बाली में अकेले यात्रा करना और रहना सुरक्षित है?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                बाली दुनिया के सबसे सुरक्षित और शांत पर्यटन स्थलों में से एक माना जाता है। यहां के स्थानीय लोग अत्यंत विनम्र, मददगार और धार्मिक स्वभाव के हैं। हमारे आश्रम में चौबीसों घंटे सुरक्षा, सुरक्षित कमरे और पारिवारिक वातावरण रहता है। अकेले आने वाले पुरुष और महिला साधक यहां पूरी तरह सुरक्षित महसूस करते हैं।
              </p>
            </div>

            {/* प्रश्न ४ */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">४.</span>
                <span>प्रशिक्षण में शामिल होने के लिए मुझे अपने साथ क्या सामान लाना चाहिए?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                हल्के और आरामदायक सूती कपड़े लाएं जो योगाभ्यास के लिए उपयुक्त हों। मंदिर दर्शन के लिए शालीन वस्त्र, व्यक्तिगत पानी की बोतल, आवश्यक दवाएं, धूप से बचाव के लिए चश्मा व टोपी लाएं। योग चटाई (मैट) आश्रम में उपलब्ध कराई जाती है, परंतु आप चाहें तो अपनी पसंदीदा चटाई ला सकते हैं।
              </p>
            </div>

            {/* प्रश्न ५ */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">५.</span>
                <span>क्या इस पाठ्यक्रम के लिए उच्च शारीरिक लचीलापन या पूर्व अनुभव आवश्यक है?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                नहीं, इसके लिए बहुत अधिक लचीलापन होना जरूरी नहीं है। यह पाठ्यक्रम आरंभिक और मध्यम स्तर के सभी साधकों के लिए उपयुक्त है। हमारे शिक्षक प्रत्येक विद्यार्थी के शरीर की बनावट और क्षमता के अनुसार आसनों में आवश्यक संशोधन और सहायता प्रदान करते हैं। केवल सीखने की लगन आवश्यक है।
              </p>
            </div>

            {/* प्रश्न ६ */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">६.</span>
                <span>शुल्क वापसी और रद्दीकरण के नियम क्या हैं?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                सीट सुरक्षित करने के लिए जमा की गई अग्रिम राशि आगामी सत्रों के लिए स्थानांतरित की जा सकती है यदि आप उचित समय पूर्व सूचित करते हैं। विस्तृत नियमों के लिए हमारी शुल्क वापसी नीति देखें या हमारी टीम से संपर्क करें।
              </p>
            </div>

            {/* प्रश्न ७ */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">७.</span>
                <span>कक्षाओं में शिक्षण का माध्यम क्या होगा?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                कक्षाएं सरल, सहज और सुगम भाषा में संचालित की जाती हैं। योग के मूल सिद्धांतों, आसनों के नामों और शारीरिक क्रियाओं को बहुत स्पष्ट रूप से समझाया जाता है ताकि प्रत्येक विद्यार्थी हर विषय को सरलता से समझ सके।
              </p>
            </div>

            {/* प्रश्न ८ */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">८.</span>
                <span>रहने के लिए कमरे किस प्रकार के होते हैं?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                आश्रम में स्वच्छ, हवादार और शांत कमरे उपलब्ध हैं। आप अपनी पसंद के अनुसार निजी कमरा (सिंगल रूम) या साझा कमरा (ट्विन शेयरिंग) चुन सकते हैं। सभी कमरों में आरामदायक बिस्तर, निजी स्नानघर, गर्म पानी और स्वच्छ वातावरण की व्यवस्था है।
              </p>
            </div>

            {/* प्रश्न ९ */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">९.</span>
                <span>क्या सप्ताह में विश्राम या भ्रमण का समय मिलता है?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                हां, सप्ताह में एक दिन कक्षाएं नहीं होती हैं। उस दिन विद्यार्थी विश्राम कर सकते हैं, स्वाध्याय कर सकते हैं या बाली के प्रसिद्ध स्थलों जैसे तेगालालांग धान के खेत, चंपुहान रिज, तानाह लोत मंदिर या उबुद के पारंपरिक बाजारों का भ्रमण कर सकते हैं।
              </p>
            </div>

            {/* प्रश्न १० */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">१०.</span>
                <span>पाठ्यक्रम पूरा होने के बाद क्या सहायता मिलती है?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                सफलतापूर्वक पाठ्यक्रम पूरा करने के बाद विद्यार्थियों को हमारे शिक्षक समूह से निरंतर मार्गदर्शन मिलता है। यदि आप अपनी कक्षाएं शुरू करते हैं या शिक्षण में कोई कठिनाई आती है, तो आप हमेशा हमारे आचार्यों से परामर्श ले सकते हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* १५. अंतिम बुलावा खंड (FINAL CTA SECTION) */}
      <section className="py-16 md:py-24 bg-background text-center border-t border-border/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>जीवन में नया मोड़ लाएं</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            बाली में अपनी योग यात्रा आज ही आरंभ करें
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            सीमित सीटें, असीम शांति और आत्म-रूपांतरण का अवसर। बाली के पवित्र वातावरण में अपनी सीट आज ही सुरक्षित करें।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200"
            >
              अपनी सीट अभी सुरक्षित करें
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-card border border-border text-foreground hover:bg-secondary transition-all duration-200 shadow-sm"
            >
              हमारी टीम से सीधे संपर्क करें
            </Link>
          </div>
        </div>
      </section>

      {/* १६. समर्पित पादलेख (DEDICATED HINDI FOOTER) */}
      <footer className="bg-card border-t border-border py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  य
                </div>
                <span className="font-heading font-serif text-2xl font-bold text-foreground">
                  योगगढ़ी
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                बाली के शांत वातावरण में समर्पित योग शिक्षक प्रशिक्षण। पारंपरिक हठ योग, विन्यास प्रवाह और अष्टांग साधना के माध्यम से जीवन का समग्र रूपांतरण।
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                महत्वपूर्ण पृष्ठ
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about-school" className="hover:text-primary transition-colors">
                    हमारे आश्रम के बारे में
                  </Link>
                </li>
                <li>
                  <Link href="/retreat/bali" className="hover:text-primary transition-colors">
                    बाली योग विश्राम शिविर
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-primary transition-colors">
                    संपर्क और मार्गदर्शन
                  </Link>
                </li>
                <li>
                  <Link href="/apply-now" className="hover:text-primary transition-colors">
                    प्रवेश आवेदन पत्र
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                स्थान और नियम
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground">स्थान:</span> गियानयार और उबुद, बाली
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
                    नियम एवं शर्तें
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-primary transition-colors">
                    शुल्क वापसी नीति
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                    गोपनीयता नीति
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© २०२६ योगगढ़ी। सर्वाधिकार सुरक्षित।</p>
            <p>उबुद और गियानयार, बाली, इंडोनेशिया</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
