"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles, Globe, Mountain, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnrollment } from "@/components/EnrollmentDialog";
import { useQuickEnquiry } from "@/components/QuickEnquiryDialog";
import { getCloudinaryImage } from "@/utils/cloudinary";
import PromoCountdown from "@/components/PromoCountdown";
const logo = getCloudinaryImage("yogagarhi-logo-hd-preview.png");

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
  name: string;
  href: string;
  icon: any;
  subItems?: { name: string; href: string }[];
}

const courses: NavDropdownItem[] = [
  {
    name: "Bali, Indonesia",
    href: "#",
    icon: Globe,
    subItems: [
      { name: "100 Hour YTTC", href: "/100-hour-yoga-teacher-training-in-bali" },
      { name: "200 Hour YTTC", href: "/200-hour-yoga-teacher-training-in-bali" },
      { name: "300 Hour YTTC", href: "/300-hour-yoga-teacher-training-in-bali" },
    ]
  },
  {
    name: "Rishikesh, India",
    href: "#",
    icon: Mountain,
    subItems: [
      { name: "100 Hour YTTC", href: "/100-hour-yoga-teacher-training-in-rishikesh" },
      { name: "200 Hour YTTC", href: "/200-hour-yoga-teacher-training-in-rishikesh" },
    ]
  },
];

const aboutItems: NavDropdownItem[] = [
  { name: "About School", href: "/about-school", icon: AshramIcon },
  { name: "Our Teachers", href: "/teachers", icon: TeachersIcon },
  { name: "Testimonials", href: "/testimonials", icon: TestimonialsIcon },
];

const sundayItems: NavDropdownItem[] = [
  { name: "Sunday 1", href: "/sunday-schedule#sunday-1", icon: SunIcon1 },
  { name: "Sunday 2", href: "/sunday-schedule#sunday-2", icon: SunIcon2 },
  { name: "Sunday 3", href: "/sunday-schedule#sunday-3", icon: SunIcon3 },
];

const onlineCourses: NavDropdownItem[] = [
  { name: "Anatomy Mastery", href: "/yoga-anatomy-mastery", icon: Sparkles },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#", dropdown: aboutItems },
  { name: "Courses", href: "#", dropdown: courses },
  { name: "Online Courses", href: "#", dropdown: onlineCourses },
  { name: "Gallery", href: "/gallery" },
  { name: "Sunday Schedule", href: "/sunday-schedule", dropdown: sundayItems },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { setShowEnrollDialog } = useEnrollment();
  const { setShowQuickEnquiry } = useQuickEnquiry();

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
  const isOnlineCoursesActive = pathname === "/yoga-anatomy-mastery";
  const isAboutActive = pathname === "/about-school" || pathname === "/teachers" || pathname === "/testimonials";
  const isSundayActive = pathname === "/sunday-schedule";

  return (
    <div className="fixed top-0 left-0 right-0 z-[70]">
      {/* April to July Batch Promo Bar */}
      <div className="bg-[#2D7A70] text-white py-2 sm:py-3 shadow-sm overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
          <div className="flex items-center gap-2 whitespace-nowrap animate-pulse">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
              Summer Sale 🎉 Flat <span className="text-amber-300 font-extrabold">$300 OFF</span> on May to July batches
            </span>
          </div>

          <div className="flex items-center gap-3 bg-black/20 px-4 py-1 rounded-full border border-white/10 backdrop-blur-sm shadow-inner">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/90">
                Offer Ends In:
              </span>
            </div>
            <PromoCountdown />
          </div>
        </div>
      </div>

      <header
        className={`py-3 transition-colors duration-300 ${scrolled
          ? 'bg-background/98 backdrop-blur-md shadow-md'
          : 'bg-background'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Image
                  src={logo}
                  alt="YogaGarhi"
                  className="object-contain h-12 w-12 sm:h-14 sm:w-14"
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-primary tracking-wide text-base sm:text-xl">
                  YOGAGARHI
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:block">
                  Transform Within
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center bg-secondary/30 rounded-full px-2 py-1.5">
                {navLinks.map((link, index) => {
                  const isDropdownActive = link.name === 'Courses' ? isCoursesActive :
                    link.name === 'About' ? isAboutActive :
                      link.name === 'Online Courses' ? isOnlineCoursesActive :
                      link.name === 'Sunday Schedule' ? isSundayActive : false;
                  return (
                    <div key={link.name} className="relative">
                      {link.dropdown ? (
                        <div
                          className="relative"
                          onMouseEnter={() => setOpenDropdown(link.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <button
                            suppressHydrationWarning
                            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isDropdownActive
                              ? 'bg-primary text-primary-foreground'
                              : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                              }`}
                          >
                            {link.name}
                            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''
                              }`} />
                          </button>

                          {/* Dropdown */}
                          <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-card rounded-2xl shadow-xl border border-border/50 transition-all duration-300 ${openDropdown === link.name
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible -translate-y-4'
                              }`}
                          >
                            <div className="p-2">
                              {link.dropdown.map((item) => (
                                <div
                                  key={item.name}
                                  className="relative"
                                  onMouseEnter={() => item.subItems && setOpenSubDropdown(item.name)}
                                  onMouseLeave={() => setOpenSubDropdown(null)}
                                >
                                  {item.subItems ? (
                                    <div className="relative">
                                      <button
                                        suppressHydrationWarning
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setOpenSubDropdown(openSubDropdown === item.name ? null : item.name);
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 ${openSubDropdown === item.name
                                          ? 'bg-primary/10 text-primary font-medium'
                                          : 'text-foreground/70 hover:bg-secondary hover:text-primary'
                                          }`}
                                      >
                                        <span className="flex items-center gap-3">
                                          <item.icon className="h-4 w-4" />
                                          {item.name}
                                        </span>
                                        <ArrowRight className={`h-3 w-3 transition-transform ${openSubDropdown === item.name ? 'translate-x-1' : ''}`} />
                                      </button>

                                      {/* Sub-dropdown */}
                                      <div
                                        className={`absolute top-0 left-full ml-1 w-56 bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden transition-all duration-300 ${openSubDropdown === item.name
                                          ? 'opacity-100 visible translate-x-0'
                                          : 'opacity-0 invisible -translate-x-2'
                                          }`}
                                      >
                                        <div className="p-2">
                                          {item.subItems.map((sub) => (
                                            <Link
                                              key={sub.name}
                                              href={sub.href}
                                              className={`block px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${pathname === sub.href
                                                ? 'bg-primary/10 text-primary font-medium'
                                                : 'text-foreground/70 hover:bg-secondary hover:text-primary'
                                                }`}
                                            >
                                              {sub.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      href={item.href}
                                      className={`block px-4 py-3 rounded-xl text-sm transition-all duration-200 ${pathname === item.href
                                        ? 'bg-primary/10 text-primary font-medium'
                                        : 'text-foreground/70 hover:bg-secondary hover:text-primary'
                                        }`}
                                    >
                                      <span className="flex items-center gap-3">
                                        <item.icon />
                                        {item.name}
                                      </span>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.href)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                            }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Right Side - CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile CTA Button */}
              <Button
                variant="default"
                size="sm"
                className="lg:hidden bg-[#2D7A70] hover:bg-[#2D7A70]/90 text-white font-semibold rounded-lg px-4 h-9 shadow-sm transition-all whitespace-nowrap"
                onClick={() => setShowEnrollDialog(true)}
              >
                Book Now
              </Button>

              {/* Desktop CTA Button */}
              <Button
                variant="default"
                className="hidden lg:flex bg-[#2D7A70] hover:bg-[#2D7A70]/90 text-white font-bold rounded-lg px-6 py-2.5 h-auto shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
                onClick={() => setShowEnrollDialog(true)}
              >
                Book Now
              </Button>


              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
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

        {/* Mobile Menu - Slide Down */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border/50 shadow-lg transition-all duration-400 overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isMobileDropdownActive = link.name === 'Courses' ? isCoursesActive :
                link.name === 'About' ? isAboutActive :
                  link.name === 'Online Courses' ? isOnlineCoursesActive :
                  link.name === 'Sunday Schedule' ? isSundayActive : false;
              const isThisDropdownOpen = mobileOpenDropdown === link.name;

              return (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileOpenDropdown(isThisDropdownOpen ? null : link.name)}
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
                          {link.dropdown.map((item) => (
                            <div key={item.name}>
                              {item.subItems ? (
                                <>
                                  <button
                                    onClick={() => setMobileOpenSubDropdown(mobileOpenSubDropdown === item.name ? null : item.name)}
                                    className={`w-full flex items-center justify-between py-2.5 px-4 rounded-lg text-sm transition-all ${mobileOpenSubDropdown === item.name
                                      ? 'text-primary'
                                      : 'text-foreground/60'
                                      }`}
                                  >
                                    <span className="flex items-center gap-3">
                                      <item.icon className="h-4 w-4" />
                                      {item.name}
                                    </span>
                                    <ChevronDown className={`h-3 w-3 transition-transform ${mobileOpenSubDropdown === item.name ? 'rotate-180' : ''}`} />
                                  </button>
                                  <div className={`overflow-hidden transition-all duration-300 ${mobileOpenSubDropdown === item.name ? 'max-h-48 mt-1' : 'max-h-0'}`}>
                                    <div className="pl-8 flex flex-col gap-1 pb-2">
                                      {item.subItems.map((sub) => (
                                        <Link
                                          key={sub.name}
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
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
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

            {/* Mobile Footer CTA */}
            <div className="mt-6 px-4 pb-8">
              <Button
                className="w-full bg-[#2D7A70] hover:bg-[#2D7A70]/90 text-white font-bold rounded-lg py-6 text-lg shadow-sm transition-all"
                onClick={() => {
                  setIsOpen(false);
                  setShowEnrollDialog(true);
                }}
              >
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
