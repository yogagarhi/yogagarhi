import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { 
    CheckCircle2, 
    Calendar, 
    ShieldCheck, 
    BookOpen, 
    Users, 
    GraduationCap, 
    Sparkles, 
    ArrowRight,
    MessageCircle,
    Clock,
    Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { applyQualityGate, getReviewedHreflang } from "@/utils/seoQualityGate";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    let messages: any;
    try {
        messages = (await import(`@/messages/${locale}.json`)).default;
    } catch (e) {
        messages = (await import(`@/messages/en.json`)).default;
    }

    const title = locale === "en" ? "Apply for Yoga Teacher Training | YogaGarhi" : (messages.applyNow?.metaTitle || "Apply for Yoga Teacher Training | YogaGarhi");
    const description = locale === "en" ? "Apply for Yoga Alliance certified 100, 200 & 300-hour yoga teacher training courses in Bali and Rishikesh. Admissions, prerequisites & dates." : (messages.applyNow?.metaDesc || "Apply for Yoga Alliance certified 100, 200 & 300-hour yoga teacher training courses in Bali and Rishikesh. Admissions, prerequisites & dates.");
    const url = locale === "en" ? "https://www.yogagarhi.com/apply-now" : `https://www.yogagarhi.com/${locale}/apply-now`;

    const metadata: Metadata = {
        metadataBase: new URL("https://www.yogagarhi.com"),
        title: {
            absolute: title,
        },
        description,
        alternates: {
            canonical: url,
            languages: getReviewedHreflang("/apply-now"),
        },
        openGraph: {
            title,
            description,
            url,
            type: "website",
        },
    };

    return locale === "en" ? metadata : applyQualityGate(metadata, locale);
}

export const revalidate = 86400;

export default async function ApplyNowPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "applyNow" });

    const admissionsSteps = [
        {
            step: "01",
            title: t("s1Title"),
            description: t("s1Desc"),
            icon: GraduationCap,
        },
        {
            step: "02",
            title: t("s2Title"),
            description: t("s2Desc"),
            icon: CheckCircle2,
        },
        {
            step: "03",
            title: t("s3Title"),
            description: t("s3Desc"),
            icon: ShieldCheck,
        },
        {
            step: "04",
            title: t("s4Title"),
            description: t("s4Desc"),
            icon: BookOpen,
        },
        {
            step: "05",
            title: t("s5Title"),
            description: t("s5Desc"),
            icon: Users,
        },
    ];

    const courses = [
        {
            title: t("course200Title"),
            tag: t("course200Tag"),
            duration: t("course200Duration"),
            description: t("course200Desc"),
            baliLink: "/200-hour-yoga-teacher-training-in-bali",
            rishikeshLink: "/200-hour-yoga-teacher-training-in-rishikesh",
            features: [
                t("course200F1"),
                t("course200F2"),
                t("course200F3"),
                t("course200F4"),
            ],
        },
        {
            title: t("course100Title"),
            tag: t("course100Tag"),
            duration: t("course100Duration"),
            description: t("course100Desc"),
            baliLink: "/100-hour-yoga-teacher-training-in-bali",
            rishikeshLink: "/100-hour-yoga-teacher-training-in-rishikesh",
            features: [
                t("course100F1"),
                t("course100F2"),
                t("course100F3"),
                t("course100F4"),
            ],
        },
        {
            title: t("course300Title"),
            tag: t("course300Tag"),
            duration: t("course300Duration"),
            description: t("course300Desc"),
            baliLink: "/300-hour-yoga-teacher-training-in-bali",
            rishikeshLink: null,
            features: [
                t("course300F1"),
                t("course300F2"),
                t("course300F3"),
                t("course300F4"),
            ],
        },
    ];

    const faqs = [
        {
            q: t("q1"),
            a: t("a1"),
        },
        {
            q: t("q2"),
            a: t("a2"),
        },
        {
            q: t("q3"),
            a: t("a3"),
        },
        {
            q: t("q4"),
            a: t("a4"),
        },
        {
            q: t("q5"),
            a: t("a5"),
        },
    ];

    const whatsappUrl = `https://wa.me/917895350563?text=${encodeURIComponent(t("whatsappMessage"))}`;

    return (
        <div className="bg-background min-h-screen">
            {/* Header / Hero */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-muted/30 border-b border-border/50">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>{t("badge")}</span>
                    </div>
                    <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        {t("heroHeading")}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t("heroSub")}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>{t("smallCohorts")}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>{t("flexibleRescheduling")}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-emerald-600" />
                            <span>{t("rytCertification")}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-16 md:py-20 container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {t("chooseHeading")}
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                        {t("chooseSub")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {courses.map((course, idx) => (
                        <div 
                            key={idx}
                            className="bg-card border border-border/70 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                        >
                            <div>
                                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-secondary/80 text-secondary-foreground mb-3">
                                    {course.tag}
                                </span>
                                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                                    {course.title}
                                </h3>
                                <div className="flex items-center gap-1.5 text-xs font-medium text-primary mb-4">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{course.duration}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                    {course.description}
                                </p>
                                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-foreground/90">
                                    {course.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-2 pt-4 border-t border-border/50">
                                <Link href={course.baliLink} className="block">
                                    <Button className="w-full justify-between group">
                                        <span>{t("applyBali")}</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                {course.rishikeshLink && (
                                    <Link href={course.rishikeshLink} className="block">
                                        <Button variant="outline" className="w-full justify-between">
                                            <span>{t("applyRishikesh")}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Admissions Steps */}
            <section className="py-16 md:py-20 bg-muted/20 border-y border-border/50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                            {t("stepsHeading")}
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                            {t("stepsSub")}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {admissionsSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div 
                                    key={idx}
                                    className="bg-card border border-border/60 rounded-xl p-5 relative"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-2xl font-bold font-mono text-muted-foreground/30">
                                            {step.step}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Admissions FAQ */}
            <section className="py-16 md:py-20 container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {t("faqHeading")}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                        {t("faqSub")}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx}
                            className="bg-card border border-border/60 rounded-xl p-5 md:p-6"
                        >
                            <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-2">
                                {faq.q}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Admissions Support CTA */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
                        {t("ctaHeading")}
                    </h2>
                    <p className="text-primary-foreground/90 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
                        {t("ctaSub")}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a 
                            href={whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Button 
                                size="lg" 
                                variant="secondary" 
                                className="font-semibold gap-2 shadow-md"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>{t("whatsappButton")}</span>
                            </Button>
                        </a>
                        <Link href="/contact-us">
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
                            >
                                <span>{t("consultationButton")}</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
