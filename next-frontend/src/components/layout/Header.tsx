"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X, ChevronDown, Sparkles, Globe, Mountain, ArrowRight, Clock, Palmtree, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { getCloudinaryImage } from "@/utils/cloudinary";
import PromoCountdown from "@/components/PromoCountdown";
import { PROMO_OFFER } from "@/constants/offers";
import LanguageSwitcher from "./LanguageSwitcher";

const logo = "/images/logo/yogagarhi-logo.png";


// Chakra/Mandala spiritual symbols
const ChakraSymbol1 = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="12" r="2" fill="currentColor" className="text-primary" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
  </svg>
);

const ChakraSymbol2 = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <polygon points="12,4 18,9 18,15 12,20 6,15 6,9" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="text-primary" />
  </svg>
);

const ChakraSymbol3 = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M12 6l3.5 3-3.5 3-3.5-3z" stroke="currentColor" strokeWidth="1.2" className="text-primary" />
    <path d="M12 12l3.5 3-3.5 3-3.5-3z" stroke="currentColor" strokeWidth="1.2" className="text-primary" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-primary" />
  </svg>
);

// About section icons
const AshramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M12 2L2 9h3v11h14V9h3L12 2z" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M12 10v-2M12 18v-2" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
  </svg>
);

const TeachersIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M12 11v2M10 13h4" stroke="currentColor" strokeWidth="1.2" className="text-primary" />
  </svg>
);

const TestimonialsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary" />
  </svg>
);

const SunIcon1 = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
  </svg>
);

const SunIcon2 = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M20 4l-2 2M6 18l-2 2M4 4l2 2M18 18l2 2" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
  </svg>
);

const SunIcon3 = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
  </svg>
);

interface NavDropdownItem {
  id?: string;
  name: string;
  href: string;
  icon: any;
  subItems?: { id?: string; name: string; href: string }[];
}

const getCourses = (t: any): NavDropdownItem[] => [
  {
    id: "bali",
    name: t("baliLocation"),
    href: "#",
    icon: Globe,
    subItems: [
      { id: "course100", name: t("course100"), href: "/100-hour-yoga-teacher-training-in-bali" },
      { id: "course200", name: t("course200"), href: "/200-hour-yoga-teacher-training-in-bali" },
      { id: "course300", name: t("course300"), href: "/300-hour-yoga-teacher-training-in-bali" },
    ]
  },
  {
    id: "rishikesh",
    name: t("rishikeshLocation"),
    href: "#",
    icon: Mountain,
    subItems: [
      { id: "course100", name: t("course100"), href: "/100-hour-yoga-teacher-training-in-rishikesh" },
      { id: "course200", name: t("course200"), href: "/200-hour-yoga-teacher-training-in-rishikesh" },
    ]
  },
];

const getRetreats = (t: any): NavDropdownItem[] => [
  {
    id: "bali",
    name: t("retreatBali"),
    href: "/retreat/bali/7-days",
    icon: Palmtree,
    subItems: [
      { id: "retreat3Days", name: t("retreat3Days"), href: "/retreat/bali/3-days" },
      { id: "retreat7Days", name: t("retreat7Days"), href: "/retreat/bali/7-days" },
      { id: "retreat14Days", name: t("retreat14Days"), href: "/retreat/bali/14-days" },
    ]
  },
  {
    id: "rishikesh",
    name: t("retreatRishikesh"),
    href: "/retreat/rishikesh/7-days",
    icon: Mountain,
    subItems: [
      { id: "retreat3Days", name: t("retreat3Days"), href: "/retreat/rishikesh/3-days" },
      { id: "retreat7Days", name: t("retreat7Days"), href: "/retreat/rishikesh/7-days" },
      { id: "retreat14Days", name: t("retreat14Days"), href: "/retreat/rishikesh/14-days" },
    ]
  },
  {
    id: "warkala",
    name: t("retreatWarkala"),
    href: "/retreat/warkala/7-days",
    icon: Waves,
    subItems: [
      { id: "retreat3Days", name: t("retreat3Days"), href: "/retreat/warkala/3-days" },
      { id: "retreat7Days", name: t("retreat7Days"), href: "/retreat/warkala/7-days" },
      { id: "retreat14Days", name: t("retreat14Days"), href: "/retreat/warkala/14-days" },
    ]
  },
];

const getAboutItems = (t: any): NavDropdownItem[] => [
  { id: "aboutSchool", name: t("aboutSchool"), href: "/about-school", icon: AshramIcon },
  { id: "ourTeachers", name: t("ourTeachers"), href: "/teachers", icon: TeachersIcon },
  { id: "testimonials", name: t("testimonials"), href: "/testimonials", icon: TestimonialsIcon },
];

const getSundayItems = (t: any): NavDropdownItem[] => [
  { id: "sunday1", name: t("sunday1"), href: "/sunday-schedule#sunday-1", icon: SunIcon1 },
  { id: "sunday2", name: t("sunday2"), href: "/sunday-schedule#sunday-2", icon: SunIcon2 },
  { id: "sunday3", name: t("sunday3"), href: "/sunday-schedule#sunday-3", icon: SunIcon3 },
];

const getOnlineCourses = (t: any): NavDropdownItem[] => [
  { id: "anatomyMasterclass", name: t("anatomyMasterclass"), href: "/yoga-anatomy-masterclass", icon: Sparkles },
];

export default function Header() {
  const tNav = useTranslations("nav");
  const tDrop = useTranslations("navDropdown");
  const tPromo = useTranslations("promo");

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { setShowEnrollDialog } = useEnrollment();
  const { setShowQuickEnquiry } = useQuickEnquiry();

  const navLinks = useMemo(() => [
    { id: "home", name: tNav("home"), href: "/" },
    { id: "about", name: tNav("about"), href: "#", dropdown: getAboutItems(tDrop) },
    { id: "courses", name: tNav("courses"), href: "#", dropdown: getCourses(tDrop) },
    { id: "retreat", name: tNav("retreat"), href: "#", dropdown: getRetreats(tDrop) },
    { id: "onlineCourses", name: tNav("onlineCourses"), href: "#", dropdown: getOnlineCourses(tDrop) },
    { id: "gallery", name: tNav("gallery"), href: "/gallery" },
    { id: "sundaySchedule", name: tNav("sundaySchedule"), href: "/sunday-schedule", dropdown: getSundayItems(tDrop) },
    { id: "blogs", name: tNav("blogs"), href: "/blogs" },
    { id: "contact", name: tNav("contact"), href: "/contact-us" },
  ], [tNav, tDrop]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
    setMobileOpenDropdown(null);
    setMobileOpenSubDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isCoursesActive = pathname.includes("-hour-yoga-teacher-training-in-bali");
  const isRetreatActive = pathname.startsWith("/retreat");
  const isOnlineCoursesActive = pathname === "/yoga-anatomy-masterclass";
  const isAboutActive = pathname === "/about-school" || pathname === "/teachers" || pathname === "/testimonials";
  const isSundayActive = pathname === "/sunday-schedule";

  return (
    <div className="fixed top-0 left-0 right-0 z-[70]">
      {/* Top Countdown Promo Bar - Visible on Mobile & Desktop */}
      <div className="bg-[#2D7A70] text-white py-1.5 sm:py-3 shadow-sm overflow-hidden">
        <div className="container mx-auto px-2 sm:px-4 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-8">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 sm:whitespace-nowrap animate-none md:animate-pulse text-center">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
            <span className="text-[11px] min-[375px]:text-xs sm:text-sm font-bold tracking-wide uppercase leading-tight">
              {tPromo("title")} 🎉 Flat <span className="text-amber-300 font-extrabold">{tPromo("discountText")}</span> {tPromo("batchesText")}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 bg-black/20 px-3 sm:px-4 py-1 rounded-full border border-white/10 backdrop-blur-sm shadow-inner">
            <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
              <span className="text-[9px] min-[375px]:text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-white/90">
                {tPromo("endsIn")}
              </span>
            </div>
            <PromoCountdown className="sm:scale-90 sm:origin-left" />
          </div>
        </div>
      </div>

      <header
        className={`py-2.5 sm:py-3 transition-colors duration-300 ${scrolled
          ? 'bg-background/98 backdrop-blur-md shadow-md'
          : 'bg-background'
          }`}
      >
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between gap-3">

            {/* Logo */}
            <Link href="/" prefetch={false} className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
              <div className="relative shrink-0">
                <Image
                  src={logo}
                  alt="YogaGarhi"
                  width={56}
                  height={52}
                  unoptimized
                  className="object-contain h-9 w-9 min-[375px]:h-11 min-[375px]:w-11 sm:h-14 sm:w-14"
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-bold text-primary tracking-wide text-sm min-[375px]:text-base sm:text-xl whitespace-nowrap">
                  YOGAGARHI
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:block">
                  Transform Within
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Semantic & Accessible */}
            <nav className="hidden lg:flex items-center" aria-label="Main Navigation">
              <ul className="flex items-center bg-secondary/30 rounded-full px-2 py-1.5 list-none m-0 p-0">
                {navLinks.map((link) => {
                  const isDropdownActive = link.id === 'courses' ? isCoursesActive :
                    link.id === 'retreat' ? isRetreatActive :
                    link.id === 'about' ? isAboutActive :
                      link.id === 'onlineCourses' ? isOnlineCoursesActive :
                      link.id === 'sundaySchedule' ? isSundayActive : false;
                  const dropdownKey = link.id || link.name;
                  return (
                    <li key={dropdownKey} className="relative list-none">
                      {link.dropdown ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setOpenDropdown(dropdownKey)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <button
                            type="button"
                            suppressHydrationWarning
                            aria-haspopup="true"
                            aria-expanded={openDropdown === dropdownKey}
                            aria-label={`${link.name} navigation menu`}
                            onClick={() => setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey)}
                            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isDropdownActive
                              ? 'bg-primary text-primary-foreground'
                              : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                              }`}
                          >
                            {link.name}
                            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === dropdownKey ? 'rotate-180' : ''
                              }`} />
                          </button>

                          {/* Dropdown Menu */}
                          <div
                            role="menu"
                            aria-label={`${link.name} Submenu`}
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-card rounded-2xl shadow-xl border border-border/50 transition-all duration-300 ${openDropdown === dropdownKey
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible -translate-y-4'
                              }`}
                          >
                            <ul className="p-2 list-none m-0">
                              {link.dropdown.map((item) => {
                                const subItemKey = item.id || item.name;
                                return (
                                <li
                                  key={subItemKey}
                                  className="relative list-none"
                                  onMouseEnter={() => item.subItems && setOpenSubDropdown(subItemKey)}
                                  onMouseLeave={() => setOpenSubDropdown(null)}
                                >
                                  {item.subItems ? (
                                    <div className="relative">
                                      <button
                                        type="button"
                                        suppressHydrationWarning
                                        aria-haspopup="true"
                                        aria-expanded={openSubDropdown === subItemKey}
                                        onClick={() => setOpenSubDropdown(openSubDropdown === subItemKey ? null : subItemKey)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 ${openSubDropdown === subItemKey
                                          ? 'bg-primary/10 text-primary font-medium'
                                          : 'text-foreground/70 hover:bg-secondary hover:text-primary'
                                          }`}
                                      >
                                        <span className="flex items-center gap-3">
                                          <item.icon className="h-4 w-4 text-primary" />
                                          {item.name}
                                        </span>
                                        <ArrowRight className={`h-3 w-3 transition-transform ${openSubDropdown === subItemKey ? 'translate-x-1' : ''}`} />
                                      </button>

                                      {/* Sub-dropdown */}
                                      <div
                                        role="menu"
                                        aria-label={`${item.name} Retreat Durations`}
                                        className={`absolute top-0 left-full ml-1 w-56 bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden transition-all duration-300 ${openSubDropdown === subItemKey
                                          ? 'opacity-100 visible translate-x-0'
                                          : 'opacity-0 invisible -translate-x-2'
                                          }`}
                                      >
                                        <ul className="p-2 list-none m-0">
                                          {item.subItems.map((sub) => (
                                            <li key={sub.id || sub.name} className="list-none">
                                              <Link
                                                href={sub.href}
                                                prefetch={false}
                                                onClick={() => {
                                                  setOpenDropdown(null);
                                                  setOpenSubDropdown(null);
                                                }}
                                                className={`block px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${pathname === sub.href
                                                  ? 'bg-primary/10 text-primary font-medium'
                                                  : 'text-foreground/70 hover:bg-secondary hover:text-primary'
                                                  }`}
                                              >
                                                {sub.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      href={item.href}
                                      prefetch={false}
                                      onClick={() => {
                                        setOpenDropdown(null);
                                        setOpenSubDropdown(null);
                                      }}
                                      className={`block px-4 py-3 rounded-xl text-sm transition-all duration-200 ${pathname === item.href
                                        ? 'bg-primary/10 text-primary font-medium'
                                        : 'text-foreground/70 hover:bg-secondary hover:text-primary'
                                        }`}
                                    >
                                      <span className="flex items-center gap-3">
                                        <item.icon className="h-4 w-4 text-primary" />
                                        {item.name}
                                      </span>
                                    </Link>
                                  )}
                                </li>
                              )})}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          prefetch={false}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.href)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                            }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right Side - Switcher & CTA */}
            <div className="flex items-center gap-1.5 min-[375px]:gap-2 sm:gap-3 shrink-0">
              <LanguageSwitcher />

              {/* Mobile CTA Button */}
              <Button
                type="button"
                variant="default"
                size="sm"
                className="lg:hidden bg-[#2D7A70] hover:bg-[#2D7A70]/90 text-white font-semibold rounded-lg px-2.5 min-[375px]:px-3.5 sm:px-4 h-8 min-[375px]:h-9 text-xs min-[375px]:text-sm shadow-sm transition-all whitespace-nowrap"
                onClick={() => setShowEnrollDialog(true)}
              >
                {tNav("beginJourney")}
              </Button>

              {/* Desktop CTA Button */}
              <Button
                type="button"
                variant="default"
                className="hidden lg:flex bg-[#2D7A70] hover:bg-[#2D7A70]/90 text-white font-bold rounded-lg px-6 py-2.5 h-auto shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
                onClick={() => setShowEnrollDialog(true)}
              >
                {tNav("beginJourney")}
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden p-1.5 min-[375px]:p-2 rounded-full hover:bg-secondary transition-colors"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={tNav("toggleMenu")}
              >
                <div className="relative w-5 h-4 min-[375px]:w-6 min-[375px]:h-5 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-0.5' : ''
                    }`} />
                  <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-4' : ''
                    }`} />
                  <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-0.5' : ''
                    }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide Down (CSS transition prevents ghost click on DOM unmount) */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border/50 shadow-lg transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[80vh] opacity-100 pointer-events-auto overflow-y-auto' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isMobileDropdownActive = link.id === 'courses' ? isCoursesActive :
                link.id === 'retreat' ? isRetreatActive :
                link.id === 'about' ? isAboutActive :
                  link.id === 'onlineCourses' ? isOnlineCoursesActive :
                  link.id === 'sundaySchedule' ? isSundayActive : false;
              const dropdownKey = link.id || link.name;
              const isThisDropdownOpen = mobileOpenDropdown === dropdownKey;

              return (
                <div key={dropdownKey}>
                  {link.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileOpenDropdown(isThisDropdownOpen ? null : dropdownKey)}
                        className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all ${isMobileDropdownActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground/80 hover:bg-secondary'
                          }`}
                      >
                        {link.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isThisDropdownOpen ? 'rotate-180' : ''
                          }`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isThisDropdownOpen ? 'max-h-[600px] mt-1' : 'max-h-0'
                        }`}>
                        <div className="pl-4 flex flex-col gap-1 pb-2">
                          {link.dropdown.map((item) => {
                            const subItemKey = item.id || item.name;
                            return (
                            <div key={subItemKey}>
                              {item.subItems ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => setMobileOpenSubDropdown(mobileOpenSubDropdown === subItemKey ? null : subItemKey)}
                                    className={`w-full flex items-center justify-between py-2.5 px-4 rounded-lg text-sm transition-all ${mobileOpenSubDropdown === subItemKey
                                      ? 'text-primary'
                                      : 'text-foreground/60'
                                      }`}
                                  >
                                    <span className="flex items-center gap-3">
                                      <item.icon className="h-4 w-4" />
                                      {item.name}
                                    </span>
                                    <ChevronDown className={`h-3 w-3 transition-transform ${mobileOpenSubDropdown === subItemKey ? 'rotate-180' : ''}`} />
                                  </button>
                                  <div className={`overflow-hidden transition-all duration-300 ${mobileOpenSubDropdown === subItemKey ? 'max-h-48 mt-1' : 'max-h-0'}`}>
                                    <div className="pl-8 flex flex-col gap-1 pb-2">
                                      {item.subItems.map((sub) => (
                                        <Link
                                          key={sub.id || sub.name}
                                          href={sub.href}
                                          onClick={() => setIsOpen(false)}
                                          className={`block py-2 px-4 rounded-lg text-xs transition-all ${pathname === sub.href
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-foreground/50 hover:text-primary'
                                            }`}
                                        >
                                          {sub.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={item.href}
                                  prefetch={false}
                                  onClick={() => setIsOpen(false)}
                                  className={`flex items-center gap-3 py-2.5 px-4 rounded-lg text-sm transition-all ${pathname === item.href
                                    ? 'bg-primary/10 text-primary font-medium'
                                    : 'text-foreground/60 hover:text-primary hover:bg-secondary/50'
                                    }`}
                                >
                                  <item.icon />
                                  {item.name}
                                </Link>
                              )}
                            </div>
                          )})}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      prefetch={false}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-base font-medium transition-all ${isActive(link.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-secondary hover:text-primary'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Mobile Language & Footer CTA */}
            <div className="mt-6 px-4 pb-8 flex flex-col gap-4">
              <div className="flex items-center justify-between py-2 border-t border-border/40 pt-4">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Language / Bhasha
                </span>
                <LanguageSwitcher align="left" />
              </div>

              <Button
                type="button"
                className="w-full bg-[#2D7A70] hover:bg-[#2D7A70]/90 text-white font-bold rounded-lg py-6 text-lg shadow-sm transition-all"
                onClick={() => {
                  setShowEnrollDialog(true);
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 150);
                }}
              >
                {tNav("beginYourJourney")}
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
