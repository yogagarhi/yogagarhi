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

export default function Italia200OreFormazioneInsegnantiYoga() {
  return (
    <div lang="it" className="bg-background text-foreground min-h-screen">
      {/* 1. BARRA DI NAVIGAZIONE SUPERIORE DEDICATA IN ITALIANO */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl h-20 flex items-center justify-between">
          <Link
            href="/italia-200-ore-formazione-insegnanti-yoga"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              Y
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-serif text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                Yogagarhi
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                Formazione yoga in Italia
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-foreground/80">
            <a href="#presentazione" className="hover:text-primary transition-colors">
              Presentazione
            </a>
            <a href="#programma" className="hover:text-primary transition-colors">
              Programma
            </a>
            <a href="#orario" className="hover:text-primary transition-colors">
              Orario quotidiano
            </a>
            <a href="#luogo-alloggio" className="hover:text-primary transition-colors">
              Luogo e alloggio
            </a>
            <a href="#attestato" className="hover:text-primary transition-colors">
              Attestato
            </a>
            <a href="#domande-frequenti" className="hover:text-primary transition-colors">
              Domande frequenti
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all duration-200"
            >
              Prenota il tuo posto
            </Link>
          </div>
        </div>
      </header>

      {/* 2. SEZIONE PRINCIPALE (HERO) */}
      <section className="relative py-16 md:py-24 bg-secondary/30 overflow-hidden border-b border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Percorso residenziale intensivo in Italia</span>
            </span>
            <h1 className="font-heading font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
              Formazione per insegnanti di yoga in Italia da 200 ore
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8">
              Un percorso formativo intensivo di ventiquattro giorni per acquisire le competenze, la sicurezza pedagogica e la profondità interiore necessarie per guidare gli altri nello yoga con passione e consapevolezza.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/apply-now"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200"
              >
                Prenota il tuo posto
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-card border border-border text-foreground hover:bg-secondary transition-all duration-200 shadow-sm"
              >
                Parla con la nostra segreteria
              </Link>
            </div>
          </div>

          {/* FASCIA RIEPILOGATIVA DEI DATI PRINCIPALI */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-card border border-border shadow-sm mb-12">
            <div className="text-center p-2">
              <Clock className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Durata complessiva</p>
              <p className="text-sm font-bold text-foreground">24 giorni (200 ore)</p>
            </div>
            <div className="text-center p-2">
              <Users className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Gruppo ristretto</p>
              <p className="text-sm font-bold text-foreground">Da 8 a 10 allievi</p>
            </div>
            <div className="text-center p-2">
              <Calendar className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Prossime sessioni</p>
              <p className="text-sm font-bold text-foreground">[Date delle prossime sessioni]</p>
            </div>
            <div className="text-center p-2">
              <DollarSign className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Costo di partecipazione</p>
              <p className="text-sm font-bold text-foreground">[Dettagli sul prezzo]</p>
            </div>
            <div className="text-center p-2 col-span-2 sm:col-span-1">
              <Award className="w-5 h-5 mx-auto text-primary mb-1.5" />
              <p className="text-xs text-muted-foreground uppercase font-semibold">Attestato finale</p>
              <p className="text-sm font-bold text-foreground">[Dettagli sull&apos;attestato]</p>
            </div>
          </div>

          {/* IMMAGINE PRINCIPALE */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-border">
            <picture className="w-full h-full block">
              <img
                src="https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,w_1024/yogagarhi/assets/course-200-hour.jpg"
                alt="Pratica di yoga all'aperto durante il corso di formazione in Italia"
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

      {/* 3. INTRODUZIONE */}
      <section id="presentazione" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Un viaggio umano e formativo</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formazione per insegnanti di yoga in Italia: un&apos;esperienza trasformativa
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Dedicare un intero mese allo studio, alla cura del corpo e alla scoperta della propria voce pedagogica.
            </p>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed bg-card p-6 md:p-10 rounded-3xl border border-border shadow-sm">
            <p>
              Intraprendere un percorso di <strong className="text-foreground font-semibold">formazione per insegnanti di yoga in Italia</strong> significa concedersi uno spazio privilegiato di silenzio, approfondimento e crescita personale. Lo yoga non si riduce a una serie di posture ginniche eseguite con precisione formale; è una via di ascolto interiore, una disciplina filosofica viva e un metodo concreto per risvegliare l&apos;equilibrio tra respiro, mente e sistema corporeo.
            </p>
            <p>
              Il paesaggio italiano offre da sempre una cornice naturale e culturale senza eguali per chi ricerca concentrazione e serenità. Lontano dal frastuono delle grandi aree urbane e dalle distrazioni della vita quotidiana, la quiete delle colline, l&apos;aria limpida e la luce naturale favoriscono uno stato di presenza autentica. La tradizione di Yogagarhi si fonda sul rispetto delle radici storiche della disciplina e su un approccio metodologico rigoroso, che insegna a comprendere il corpo umano nella sua unicità e a trasmettere la pratica con sensibilità, fermezza e cura amorevole.
            </p>
            <p>
              La nostra scelta di limitare ogni gruppo a un numero compreso tra 8 e 10 partecipanti rappresenta il cuore della nostra pedagogia. In una classe intima ogni persona viene ascoltata e seguita giorno dopo giorno. I maestri possono correggere le posture con delicatezza, rispondere a ogni dubbio teorico e offrire indicazioni personalizzate per valorizzare i talenti naturali di ciascun allievo, preparando insegnanti sicuri, responsabili e pronti a guidare classi in qualsiasi contesto.
            </p>
            <div className="pt-4 border-t border-border flex flex-wrap gap-4 items-center justify-between">
              <span className="text-sm font-semibold text-foreground">
                Desideri conoscere le origini della nostra scuola?
              </span>
              <Link
                href="/about-school"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                <span>Scopri di più sulla scuola e sulla tradizione di Yogagarhi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUADRO GENERALE DEL CORSO */}
      <section className="py-16 md:py-24 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Visione del programma</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Corso di yoga da 200 ore: struttura e visione del percorso residenziale
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Ventiquattro giorni di studio continuativo, pratica consapevole e vita comunitaria per interiorizzare l&apos;insegnamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-2">
                Monte ore e impegno quotidiano
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Il programma copre interamente le duecento ore previste dagli standard educativi internazionali, alternando sessioni mattutine di movimento ed energia a lezioni pomeridiane di anatomia, filosofia e didattica applicata.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-2">
                Partecipazione limitata
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rifiutiamo le aule sovraffollate. Accogliere al massimo dieci persone per sessione assicura un dialogo continuo con i docenti, esercitazioni pratiche approfondite e una crescita corale senza paragoni.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-2">
                Formula residenziale protetta
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vivere insieme nello stesso luogo permette di immergersi completamente nello studio. L&apos;alloggio confortevole, i pasti caldi e la sala per la pratica creano un ambiente sicuro in cui ogni allievo può aprirsi con fiducia.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border text-center max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              I posti per ciascuna sessione sono limitati per garantire la massima qualità didattica.
            </p>
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
            >
              <span>Compila la domanda di iscrizione per riservare il tuo posto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROGRAMMA DETTAGLIATO IN SETTE PARTI */}
      <section id="programma" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Le sette aree formative</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diventare insegnante di yoga: le sette aree di studio del programma
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Un piano di studi integrato che unisce l&apos;esperienza pratica sul tappetino alla padronanza teorica e pedagogica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AREA 1: ASANA */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Modulo 1
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  Ore: [Dettaglio delle ore]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                Pratica degli asana (Hatha yoga e Vinyasa)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Studio dettagliato delle posture in piedi, sedute, piegamenti in avanti, inarcamenti all&apos;indietro, torsioni, equilibri e inversioni. Comprensione delle linee di energia, stabilità corporea, utilizzo del respiro consapevole e corretta attivazione muscolare per costruire una pratica solida e sicura nel tempo.
              </p>
            </div>

            {/* AREA 2: PRANAYAMA */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Modulo 2
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  Ore: [Dettaglio delle ore]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                Pranayama e controllo del respiro vitale
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Studio teorico e sperimentazione diretta delle principali tecniche respiratorie tradizionali: respirazione a narici alternate, respirazione rinfrescante, tecniche dinamiche di purificazione energetica e controllo del diaframma. Approfondimento dei tre sigilli energetici interni per convogliare l&apos;energia vitale.
              </p>
            </div>

            {/* AREA 3: MEDITAZIONE */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Modulo 3
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  Ore: [Dettaglio delle ore]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                Meditazione e concentrazione interiore
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Metodi pratici per calmare l&apos;attività mentale, sviluppare una presenza stabile e gestire l&apos;agitazione interiore. Tecniche di visualizzazione, rilassamento guidato profondo, ascolto del silenzio naturale e pratiche di concentrazione sui centri di consapevolezza per favorire lucidità mentale e serenità emotiva.
              </p>
            </div>

            {/* AREA 4: ANATOMIA */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Modulo 4
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  Ore: [Dettaglio delle ore]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                Anatomia e biomeccanica applicata allo yoga
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Analisi dell&apos;apparato scheletrico, delle principali articolazioni, dei gruppi muscolari e della colonna vertebrale. Studio delle differenze scheletriche individuali, prevenzione degli infortuni più comuni, adattamento delle posture tramite sostegni e costruzione di lezioni rispettose delle possibilità di ogni persona.
              </p>
            </div>

            {/* AREA 5: FILOSOFIA */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Modulo 5
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  Ore: [Dettaglio delle ore]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                Storia e filosofia classica dello yoga
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Introduzione storica allo sviluppo della disciplina, lettura e commento dei passi fondamentali degli otto rami dello yoga di Patanjali. Principi di etica personale e sociale, non violenza, veridicità e distacco. Comprensione di come trasformare la teoria filosofica in un atteggiamento quotidiano di rispetto e chiarezza.
              </p>
            </div>

            {/* AREA 6: DIDATTICA */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Modulo 6
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  Ore: [Dettaglio delle ore]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                Metodologia didattica e arte dell&apos;insegnamento
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Apprendimento delle tecniche di comunicazione: uso della voce, linguaggio chiaro, presenza nello spazio, osservazione visiva della classe e regolazioni manuali consapevoli. Come strutturare una sequenza logica, armonica ed efficace da sessanta o novanta minuti adatta a principianti o praticanti esperti.
              </p>
            </div>

            {/* AREA 7: TIROCINIO ED ESAME */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-3 md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Modulo 7
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  Ore: [Dettaglio delle ore]
                </span>
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground">
                Tirocinio pratico guidato e valutazione finale
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Durante l&apos;ultima settimana ogni allievo conduce lezioni simulate davanti ai colleghi e ai docenti responsabili. I maestri offrono riscontri dettagliati e costruttivi per affinare il tono di voce, la gestione del tempo e la chiarezza delle indicazioni. Il percorso si conclude con una verifica teorica scritta e la prova pratica conclusiva.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-card border border-border text-center text-sm text-muted-foreground">
            Nota informativa: la suddivisione oraria per ciascun singolo modulo formativo è: [Dettaglio delle ore]. Il monte ore totale certificato corrisponde a 200 ore.
          </div>
        </div>
      </section>

      {/* 6. ORARIO QUOTIDIANO */}
      <section id="orario" className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Sun className="w-3.5 h-3.5" />
              <span>Disciplina e ritmo quotidiano</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              L&apos;orario quotidiano: un ritmo naturale tra pratica e studio
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Dalla prima luce dell&apos;alba al silenzio della sera, una scansione pensata per favorire concentrazione ed energia vitale.
            </p>
          </div>

          <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden divide-y divide-border/60">
            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                06:00
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Risveglio e tisane naturali</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Inizio della giornata nel silenzio, igiene personale e bevande calde a base di erbe aromatiche.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                06:30
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Pranayama e meditazione del mattino</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Esercizi di respirazione profonda, concentrazione mentale e canti tradizionali per predisporre la mente all&apos;ascolto.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                08:00
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Pratica di Hatha yoga classico</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Sessione posturale intensa incentrata sulla stabilità, sul corretto allineamento articolare e sulla tenuta consapevole delle posture.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                09:30
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Colazione nutriente e pausa rigenerante</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Pasto sano e abbondante con frutta fresca di stagione, cereali, pane integrale, bevande calde e prodotti genuini.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                10:30
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Filosofia dello yoga e testi classici</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Lezione teorica sui fondamenti filosofici della tradizione, riflessione guidata ed etica dell&apos;insegnamento.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                12:00
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Anatomia funzionale e biomeccanica</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Studio visivo e pratico delle strutture muscolo-scheletriche e adattamento delle posture per allievi con esigenze particolari.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                13:00
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Pranzo e tempo libero per il riposo</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Pasto fresco a base di piatti della tradizione culinaria italiana come pasta, risotto, legumi e verdure, seguito da riposo o studio individuale.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                14:30
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Laboratorio di didattica e regolazioni manuali</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Esercizi a coppie su correzioni fisiche, uso della voce, dimostrazione visiva e gestione sicura della sala da pratica.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                16:00
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Vinyasa yoga e sequenze dinamiche</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Pratica attiva che collega respiro e movimento armonico, esplorando transizioni fluide e ritmo energetico.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                17:30
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Meditazione serale e rilassamento profondo</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Pratiche di rilassamento cosciente a terra per sciogliere la stanchezza fisica e pacificare la mente al tramonto.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                19:00
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Cena comunitaria</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Zuppe calde, minestrone, pane fresco, olio d&apos;oliva e pietanze leggere digeribili per favorire il riposo notturno.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                20:00
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Incontro serale, domande e confronto</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Momento dedicato a chiarire i dubbi emersi durante la giornata, condividere esperienze e consolidare l&apos;intesa del gruppo.</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-secondary/20 transition-colors">
              <span className="font-mono font-bold text-primary text-sm sm:text-base shrink-0 w-24">
                21:30
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">Silenzio notturno e riposo</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Riposo completo per permettere al corpo e alla mente di rigenerarsi per il nuovo giorno di studio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEZIONE ITALIA (LUOGO, ALLOGGIO, CIBO E DINTORNI) */}
      <section id="luogo-alloggio" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ospitalità e natura italiana</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formazione yoga in Italia: alloggio accogliente, natura e alimentazione sana
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Uno spazio dedicato al silenzio e alla cura, dove il ritmo lento del paesaggio sostiene la profondità della pratica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* LUOGO DI FORMAZIONE E ALLOGGIO */}
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-2xl font-bold text-foreground">
                La struttura e gli alloggi
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Il corso si svolge presso una struttura residenziale selezionata per la sua tranquillità e riservatezza: <strong className="text-foreground font-semibold">[Luogo esatto dello svolgimento]</strong>. Immersa nel verde, lontana dal traffico e dalle mete turistiche affollate, offre l&apos;ambiente perfetto per immergersi completamente nello studio dello yoga.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Gli alloggi sono confortevoli, puliti e silenziosi. È possibile scegliere tra sistemazioni in camera singola privata o in camera doppia condivisa. Tutte le camere dispongono di servizi privati, riscaldamento, scrivania per lo studio individuale e affaccio sul paesaggio circostante.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Camere singole o doppie con bagno privato e riscaldamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Ampia sala per la pratica luminosa con pavimenti in legno naturale</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Giardino silenzioso e spazi aperti per passeggiate meditative</span>
                </li>
              </ul>
            </div>

            {/* ALIMENTAZIONE SANA TRADIZIONALE */}
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-serif text-2xl font-bold text-foreground">
                Alimentazione sana e ingredienti di stagione
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                La cura dell&apos;alimentazione rappresenta un pilastro essenziale della nostra proposta formativa. I pasti sono interamente preparati al momento con prodotti freschi del territorio italiano, prediligendo cibi sani, integrali e ricchi di nutrienti vitali.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                La cucina valorizza ricette tradizionali genuine come risotto con verdure dell&apos;orto, pasta fresca preparata con farine integrali, legumi saporiti, minestrone aromatico, pane casereccio cotto a legna, olio extravergine d&apos;oliva spremuto a freddo, frutta fresca di stagione e rinfrescante gelato artigianale preparato con ingredienti genuini.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Tre pasti quotidiani sani e leggeri a base vegetale</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Uso quotidiano di olio d&apos;oliva italiano e verdure di stagione</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Tisane depurative, frutta fresca e gelato artigianale a disposizione</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PAESAGGIO ITALIANO E CONTESTO REGIONALE */}
          <div className="bg-card p-6 md:p-10 rounded-3xl border border-border shadow-sm">
            <h3 className="font-heading font-serif text-xl sm:text-2xl font-bold text-foreground mb-4 text-center">
              Il patrimonio naturale e culturale dell&apos;Italia
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              Dalle dolci colline della Toscana e dell&apos;Umbria fino agli splendidi borghi d&apos;arte di Assisi, Firenze e Roma, dai sentieri a picco sul mare della Costiera Amalfitana e delle Cinque Terre fino ai paesaggi assolati e suggestivi di Puglia e Sicilia, o ancora dalle maestose vette delle Dolomiti alle acque tranquille del Lago di Como, l&apos;Italia offre una straordinaria varietà di scenari naturali che invita spontaneamente all&apos;armonia, alla calma e alla meditazione profonda.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                <h4 className="font-semibold text-foreground mb-1">Toscana, Umbria e borghi storici</h4>
                <p className="text-xs text-muted-foreground">Campagne dorate, uliveti secolari e città storiche come Assisi, Firenze e Roma ideali per il raccoglimento spirituale.</p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                <h4 className="font-semibold text-foreground mb-1">Dalle Dolomiti alle Coste</h4>
                <p className="text-xs text-muted-foreground">La bellezza selvaggia di Dolomiti e Lago di Como unita alle vedute di Costiera Amalfitana, Cinque Terre, Puglia e Sicilia.</p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center">
                <h4 className="font-semibold text-foreground mb-1">Cucina e tradizione italiana</h4>
                <p className="text-xs text-muted-foreground">Sapori autentici preparati con amore: olio d&apos;oliva, pane fresco, pasta, risotto e gelato artigianale per nutrire corpo e spirito.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/retreat"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                <span>Esplora i nostri ritiri dedicati allo yoga e alla meditazione</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPETENZE AL TERMINE DEL CORSO */}
      <section className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Competenze pratiche</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sbocchi e competenze acquisite: guidare gli altri con sicurezza
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Al completamento delle duecento ore di studio sarai in grado di insegnare con autorevolezza, chiarezza e profonda empatia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-3">
                Conduzione autonoma di una classe
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Saprai progettare lezioni complete e bilanciate da sessanta o novanta minuti, scegliendo gli asana con intelligenza pedagogica e guidando gli allievi con istruzioni verbali precise e rassicuranti.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-3">
                Avvio di corsi personali
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Avrai le conoscenze organizzative ed etiche per aprire corsi personali, seguire studenti privati individualmente oppure impostare percorsi tematici sia dal vivo sia attraverso piattaforme a distanza.
              </p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-3">
                Collaborazione con centri e studi
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Potrai candidarti con sicurezza presso studi di yoga, centri di benessere, villaggi turistici e associazioni culturali in Italia e in qualsiasi paese estero che richieda una preparazione formativa certificata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. A CHI SI RIVOLGE E REQUISITI */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Un percorso inclusivo</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formazione per insegnanti di yoga all&apos;estero: a chi si rivolge il corso
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Il corso accoglie persone con storie diverse unite dalla volontà sincera di approfondire la conoscenza dello yoga.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Praticanti motivati</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Coloro che praticano con regolarità e desiderano comprendere le basi scientifiche, biomeccaniche e filosofiche che animano ogni singolo asana.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Futuri insegnanti</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Chi desidera trasformare una profonda passione personale in un&apos;attività professionale riconosciuta, guidando classi con competenza e dedizione.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Professionisti del benessere</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Fisioterapisti, educatori fisici e operatori del benessere intenzionati a integrare tecniche respiratorie e posturali nei loro trattamenti.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2">Viaggiatori solitari</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Uomini e donne che scelgono di viaggiare da soli troveranno un ambiente familiare, accogliente e rispettoso, perfetto per fare nuove amicizie autentiche.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border text-center max-w-3xl mx-auto">
            <h3 className="font-heading font-serif text-xl font-bold text-foreground mb-2">
              Requisiti di accesso essenziali
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Per iscriversi al corso è richiesta la maggiore età (almeno diciotto anni compiuti), un buono stato di salute fisica e psicologica generale e, soprattutto, l&apos;apertura mentale necessaria per vivere in armonia con il gruppo e rispettare le regole della comunità residenziale. Non sono richieste doti acrobatiche né una flessibilità eccezionale.
            </p>
          </div>
        </div>
      </section>

      {/* 10. ATTESTATO FINALE */}
      <section id="attestato" className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Riconoscimento delle competenze</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Attestato di formazione per insegnanti: il valore della preparazione
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Al termine del percorso residenziale, avendo completato le ore previste e superato le prove di verifica, viene rilasciato il documento ufficiale di completamento.
          </p>

          <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm max-w-2xl mx-auto">
            <Award className="w-16 h-16 mx-auto text-primary mb-4" />
            <h3 className="font-heading font-serif text-2xl font-bold text-foreground mb-3">
              Attestato ufficiale di superamento del corso
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Specifiche formali dell&apos;attestato, dettagli sulle registrazioni e certificazioni rilasciate al termine del percorso: <strong className="text-foreground">[Dettagli sull&apos;attestato]</strong>. Questo documento comprova l&apos;acquisizione delle duecento ore di formazione teorico-pratica.
            </p>
            <div className="p-4 rounded-xl bg-secondary/40 border border-border text-xs sm:text-sm text-foreground/80">
              Nota per i partecipanti: tutte le specifiche normative e i titoli di studio conseguiti sono riportati nella sezione: [Dettagli sull&apos;attestato]
            </div>
          </div>
        </div>
      </section>

      {/* 11. PREZZO, DATE E POSTI DISPONIBILI */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Trasparenza e pianificazione</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Costi di partecipazione, calendario e posti disponibili
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Offriamo formule chiare che comprendono alloggio completo, pasti quotidiani, materiale didattico e assistenza continua.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <DollarSign className="w-8 h-8 mx-auto text-primary mb-2" />
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-1">Quota di iscrizione</h3>
              <p className="text-2xl font-bold text-primary mb-2">[Dettagli sul prezzo]</p>
              <p className="text-xs text-muted-foreground">Comprensiva di insegnamento, alloggio residenziale, tre pasti al giorno e materiale di studio.</p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <Calendar className="w-8 h-8 mx-auto text-primary mb-2" />
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-1">Calendario delle sessioni</h3>
              <p className="text-base font-bold text-foreground mb-2">[Date delle prossime sessioni]</p>
              <p className="text-xs text-muted-foreground">Sessioni programmate durante i diversi periodi dell&apos;anno.</p>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <Users className="w-8 h-8 mx-auto text-primary mb-2" />
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-1">Disponibilità attuale</h3>
              <p className="text-base font-bold text-foreground mb-2">[Posti disponibili]</p>
              <p className="text-xs text-muted-foreground">Ciascun gruppo è rigorosamente limitato a un massimo di 8-10 partecipanti.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/30 border border-border max-w-xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              Per scegliere la sistemazione desiderata e confermare la tua candidatura, invia la tua richiesta oggi stesso.
            </p>
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all"
            >
              <span>Prenota il tuo posto nel corso</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. GLI INSEGNANTI */}
      <section className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Smile className="w-3.5 h-3.5" />
            <span>Guide esperte e appassionate</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            I maestri e le guide del percorso formativo
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Docenti dedicati con molti anni di pratica personale, studio costante e una comprovata capacità di trasmettere l&apos;insegnamento.
          </p>

          <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm max-w-2xl mx-auto text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-secondary mx-auto flex items-center justify-center text-muted-foreground font-semibold text-xs border border-border">
              [Foto dell&apos;insegnante]
            </div>
            <h3 className="font-heading font-serif text-2xl font-bold text-foreground">
              [Nome dell&apos;insegnante]
            </h3>
            <p className="text-sm font-semibold text-primary">
              Maestro principale e coordinatore della didattica
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              [Esperienza dell&apos;insegnante]: anni di insegnamento continuativo, profonda padronanza dell&apos;anatomia posturale e fedeltà ai principi tradizionali dello yoga classico.
            </p>
          </div>
        </div>
      </section>

      {/* 13. TESTIMONIANZE DEGLI ALLIEVI */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Voci dal percorso</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonianze ed esperienze di chi ha già intrapreso il cammino
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Le parole di chi ha vissuto l&apos;esperienza formativa e ha trasformato la propria vita quotidiana.
          </p>

          <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm max-w-2xl mx-auto text-center space-y-4">
            <p className="text-base sm:text-lg text-muted-foreground italic leading-relaxed">
              [Esperienze e testimonianze degli allievi]
            </p>
            <p className="text-xs text-muted-foreground">
              Le testimonianze e le recensioni autentiche dei nostri diplomati saranno pubblicate in questo spazio al termine delle prime sessioni.
            </p>
          </div>
        </div>
      </section>

      {/* 14. DOMANDE FREQUENTI (FAQ) */}
      <section id="domande-frequenti" className="py-16 md:py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Risposte chiare per ogni dubbio</span>
            </span>
            <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Domande frequenti: tutto quello che desideri sapere
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Informazioni pratiche su viaggio, documenti, soggiorno, cibo e svolgimento delle lezioni.
            </p>
          </div>

          <div className="space-y-4">
            {/* DOMANDA 1 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                <span>Quali documenti o visti sono necessari per partecipare al corso in Italia?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                I cittadini dell&apos;Unione Europea possono viaggiare liberamente con la carta d&apos;identità valida per l&apos;espatrio o il passaporto in corso di validità. I partecipanti provenienti da paesi terzi devono verificare i requisiti del visto turistico Schengen presso l&apos;ambasciata o il consolato competente prima della partenza.
              </p>
            </div>

            {/* DOMANDA 2 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                <span>Che tipo di alimentazione viene servita durante il periodo residenziale?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                Offriamo tre pasti quotidiani completi a base vegetale, preparati freschi con ingredienti di stagione della cucina tradizionale italiana, come pasta, risotto, verdure fresche, legumi e pane casereccio, ideali per sostenere la pratica energetica quotidiana.
              </p>
            </div>

            {/* DOMANDA 3 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                <span>È sicuro viaggiare da soli per partecipare a questo percorso formativo?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                L&apos;Italia è una destinazione molto tranquilla e ospitale per chi viaggia individualmente. La nostra struttura garantisce un ambiente protetto, familiare e inclusivo in cui allieve e allievi di ogni provenienza si sentono sempre accolti e al sicuro.
              </p>
            </div>

            {/* DOMANDA 4 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">4.</span>
                <span>Cosa occorre portare con sé per l&apos;intera durata del corso?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                Consigliamo abbigliamento comodo e traspirante in cotone per la pratica fisica, un capo caldo per le meditazioni del mattino presto, una borraccia personale, un quaderno per gli appunti e calzature adatte a passeggiate nella natura circostante.
              </p>
            </div>

            {/* DOMANDA 5 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">5.</span>
                <span>È richiesto un livello avanzato di flessibilità fisica o esperienza pregressa?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                Non è necessaria una flessibilità eccezionale. Il programma accoglie praticanti di ogni livello con una dedizione sincera; gli insegnanti guidano ogni persona con adattamenti mirati e rispetto per la struttura anatomica individuale.
              </p>
            </div>

            {/* DOMANDA 6 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">6.</span>
                <span>Quali sono le condizioni in merito a cancellazione e rimborso della quota?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                L&apos;acconto versato per bloccare il proprio posto può essere trasferito a una data successiva con un preavviso adeguato. Per ogni specifica situazione invitiamo a consultare la nostra informativa completa sui rimborsi o a contattare la segreteria.
              </p>
            </div>

            {/* DOMANDA 7 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">7.</span>
                <span>In quale lingua si svolgono le lezioni e le spiegazioni teoriche?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                L&apos;insegnamento è condotto in un italiano chiaro, semplice e coinvolgente, con particolare cura nell&apos;illustrare la terminologia classica dello yoga, l&apos;anatomia applicata e la filosofia di fondo in modo perfettamente comprensibile per tutti.
              </p>
            </div>

            {/* DOMANDA 8 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">8.</span>
                <span>Come sono organizzati gli alloggi e le camere per il riposo?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                Mettiamo a disposizione camere singole o condivise tra due persone, luminose, silenziose e dotate di servizi privati, riscaldamento, biancheria pulita e ampie finestre con affaccio sul paesaggio italiano.
              </p>
            </div>

            {/* DOMANDA 9 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">9.</span>
                <span>Sono previsti momenti liberi o giornate di pausa settimanale?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                Durante il percorso di ventiquattro giorni è prevista una giornata settimanale di pausa per riposare, integrare le nozioni apprese, passeggiare nei borghi vicini o visitare luoghi d&apos;arte e borghi storici del territorio.
              </p>
            </div>

            {/* DOMANDA 10 */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-heading font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                <span className="text-primary font-bold">10.</span>
                <span>Quale supporto riceve l&apos;allievo al termine del percorso formativo?</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-6">
                Dopo la conclusione del corso offriamo un contatto diretto con i maestri per chiarimenti sulla didattica, consigli sull&apos;impostazione delle prime lezioni e una comunità di confronto per accompagnare i primi passi nell&apos;insegnamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. SEZIONE FINALE DI INVITO ALL'AZIONE (CTA) */}
      <section className="py-16 md:py-24 bg-background text-center border-t border-border/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inizia una nuova tappa della tua vita</span>
          </span>
          <h2 className="font-heading font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inizia oggi il tuo cammino per diventare insegnante di yoga
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Posti limitati, studio approfondito e un&apos;esperienza residenziale indimenticabile. Prenota oggi il tuo posto per la prossima sessione in Italia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Prenota il tuo posto nel corso
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-card border border-border text-foreground hover:bg-secondary transition-all duration-200 shadow-sm"
            >
              Contatta direttamente la nostra segreteria
            </Link>
          </div>
        </div>
      </section>

      {/* 16. PIÈ DI PAGINA DEDICATO IN ITALIANO */}
      <footer className="bg-card border-t border-border py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  Y
                </div>
                <span className="font-heading font-serif text-2xl font-bold text-foreground">
                  Yogagarhi
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Corsi residenziali intensivi di formazione per insegnanti di yoga in Italia. Pratica di Hatha yoga classico, Vinyasa, anatomia funzionale e filosofia per un insegnamento consapevole.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                Pagine informative
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about-school" className="hover:text-primary transition-colors">
                    La nostra scuola e visione
                  </Link>
                </li>
                <li>
                  <Link href="/retreat" className="hover:text-primary transition-colors">
                    Ritiri di yoga e meditazione
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-primary transition-colors">
                    Contatti e informazioni
                  </Link>
                </li>
                <li>
                  <Link href="/apply-now" className="hover:text-primary transition-colors">
                    Domanda di ammissione
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                Sede e condizioni
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground">Sede:</span> [Luogo esatto dello svolgimento], Italia
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
                    Termini e condizioni del servizio
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-primary transition-colors">
                    Politica di rimborso
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                    Informativa sulla riservatezza
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© 2026 Yogagarhi. Tutti i diritti riservati.</p>
            <p>Italia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
