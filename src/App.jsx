import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Instagram, Facebook, Globe } from 'lucide-react';
import { menuByCategory } from './data/menuData';
import SEO from './components/SEO';

// Language translations
const translations = {
  en: {
    navItems: ['Home', 'About', 'Menu', 'Reviews', 'Contact'],
    orderButtons: {
      orderNow: 'Order Now',
      wolt: 'Order on Wolt',
      lieferando: 'Order on Lieferando',
      ubereats: 'Order on Uber Eats'
    },
    hero: {
      tagline: 'Where flavor meets flair.'
    },
    about: {
      title: 'The Berlin Dream, Pizza in a Späti',
      paragraph1: 'Pink Pizza began when Turkish entrepreneur Engin and his family transformed a section of their Späti shop into a pizzeria. Their love for bold flavors and warm hospitality quickly won hearts in the neighborhood.',
      paragraph2: 'More than just pizza, they created a community space where guests can grab a beer from the shop while enjoying their freshly-made pizza-pies. This unique blend of convenience and quality defines the Pink Pizza experience.',
      learnMore: 'Our Story'
    },
    menu: {
      title: 'Our Menu',
      description: 'Explore our selection of artisanal pizzas and fresh salads crafted with premium ingredients and bold flavor combinations.',
      viewFullMenu: 'View Full Menu',
      addToOrder: 'Add to Order'
    },
    reviews: {
      title: 'What Our Customers Say',
      description: 'Don\'t just take our word for it. Here\'s what pizza lovers are saying about their Pink Pizza experience.'
    },
    location: {
      title: 'Find Us',
      description: 'Stop by for an unforgettable pizza experience or order online for delivery.',
      contact: 'Contact Us',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      sendMessage: 'Send a Message',
      addressText: 'Am Friedrichshain 33\nPrenzlauerberg 10407',
      phoneNumber: '015151831473',
      emailAddress: 'pinkpizzaberlin@gmail.com',
      formFields: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message'
      }
    },
    footer: {
      quickLinks: 'Quick Links',
      openingHours: 'Opening Hours',
      hours: {
        weekdays: 'Monday - Sunday: 11am - 11.30pm'
      },
      rights: 'All rights reserved.'
    },
    cookiePopup: {
      title: 'Cookie Notice',
      message: 'This website does not use cookies and does not store any personal data. We respect your privacy.',
      accept: 'Understood'
    }
  },
  de: {
    navItems: ['Startseite', 'Über uns', 'Speisekarte', 'Bewertungen', 'Kontakt'],
    orderButtons: {
      orderNow: 'Jetzt bestellen',
      wolt: 'Bestellen auf Wolt',
      lieferando: 'Bestellen auf Lieferando',
      ubereats: 'Bestellen auf Uber Eats'
    },
    hero: {
      tagline: 'Wo Geschmack auf Stil trifft.'
    },
    about: {
      title: 'Der Berliner Traum, Pizza im Späti',
      paragraph1: 'Pink Pizza entstand, als der türkische Geschäftsführer Engin und seine Familie eine Ecke ihres Spätis in eine Pizzeria verwandelten. Ihre Liebe zu kräftigen Aromen und herzlicher Gastfreundschaft gewann schnell die Herzen der Nachbarschaft.',
      paragraph2: 'Mehr als nur Pizza haben sie einen Gemeinschaftsraum geschaffen, in dem Gäste ein Bier aus dem Laden genießen können, während sie ihre frisch zubereiteten Pizzen genießen. Diese einzigartige Mischung aus Komfort und Qualität definiert das Pink Pizza-Erlebnis.',
      learnMore: 'Unsere Geschichte'
    },
    menu: {
      title: 'Unsere Speisekarte',
      description: 'Entdecken Sie unsere Auswahl an handwerklich hergestellten Pizzen und frischen Salaten mit erstklassigen Zutaten und kühnen Geschmackskombinationen.',
      viewFullMenu: 'Vollständige Speisekarte',
      addToOrder: 'Zur Bestellung hinzufügen'
    },
    reviews: {
      title: 'Was unsere Kunden sagen',
      description: 'Nehmen Sie nicht nur unser Wort. Hier ist, was Pizza-Liebhaber über ihr Pink Pizza-Erlebnis sagen.'
    },
    location: {
      title: 'Finden Sie uns',
      description: 'Besuchen Sie uns für ein unvergessliches Pizza-Erlebnis oder bestellen Sie online zur Lieferung.',
      contact: 'Kontaktieren Sie uns',
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
      sendMessage: 'Nachricht senden',
      addressText: 'Am Friedrichshain 33\nPrenzlauerberg 10407',
      phoneNumber: '015151831473',
      emailAddress: 'pinkpizzaberlin@gmail.com',
      formFields: {
        name: 'Name',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Nachricht',
        submit: 'Nachricht senden'
      }
    },
    footer: {
      quickLinks: 'Schnelllinks',
      openingHours: 'Öffnungszeiten',
      hours: {
        weekdays: 'Montag - Sonntag: 11:00 - 23:45 Uhr'
      },
      newsletter: 'Newsletter',
      subscribeText: 'Abonnieren Sie, um Sonderangebote und Updates zu erhalten.',
      emailPlaceholder: 'Ihre E-Mail',
      join: 'Abonnieren',
      rights: 'Alle Rechte vorbehalten.'
    },
    cookiePopup: {
      title: 'Cookie-Hinweis',
      message: 'Diese Website verwendet keine Cookies und speichert keine persönlichen Daten. Wir respektieren Ihre Privatsphäre.',
      accept: 'Verstanden'
    }
  }
};

// Cookie Popup Component
const CookiePopup = ({ t, showCookiePopup, setShowCookiePopup }) => {
  const handleAccept = () => {
    setShowCookiePopup(false);
    // Store acceptance in localStorage to prevent showing again
    localStorage.setItem('cookieAccepted', 'true');
  };

  // Check if user has already accepted
  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieAccepted');
    if (hasAccepted === 'true') {
      setShowCookiePopup(false);
    }
  }, [setShowCookiePopup]);

  if (!showCookiePopup) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 border-t-4 border-pink-500">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2 text-pink-500">{t?.cookiePopup?.title}</h3>
          <p className="text-gray-300 text-sm">
            {t?.cookiePopup?.message}
          </p>
        </div>
        <button
          onClick={handleAccept}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium transition duration-300 whitespace-nowrap"
        >
          {t?.cookiePopup?.accept}
        </button>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('de');
  const [showNavOrderOptions, setShowNavOrderOptions] = useState(false);
  const [showHeroOrderOptions, setShowHeroOrderOptions] = useState(false);
  const [showCookiePopup, setShowCookiePopup] = useState(true);

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  // Get current translations
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SEO section="home" />
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        language={language}
        toggleLanguage={toggleLanguage}
        showOrderOptions={showNavOrderOptions}
        setShowOrderOptions={setShowNavOrderOptions}
        t={t}
      />
      <main>
        <Hero 
          t={t} 
          showOrderOptions={showHeroOrderOptions} 
          setShowOrderOptions={setShowHeroOrderOptions} 
        />
        {/* <About t={t} /> */}
        <MenuSection t={t} language={language} />
        <Reviews t={t} language={language} />
        <Location t={t} language={language} />
      </main>
      <Footer t={t} language={language} />
      <CookiePopup 
        t={t} 
        showCookiePopup={showCookiePopup} 
        setShowCookiePopup={setShowCookiePopup} 
      />
    </div>
  );
};

// Navbar Component
const Navbar = ({ isMenuOpen, setIsMenuOpen, language, toggleLanguage, showOrderOptions, setShowOrderOptions, t }) => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Function to handle dropdown toggle
  const toggleOrderOptions = (e) => {
    e.preventDefault();
    setShowOrderOptions(!showOrderOptions);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownContainer = document.getElementById('navbar-dropdown-container');
      if (dropdownContainer && !dropdownContainer.contains(event.target)) {
        setShowOrderOptions(false);
      }
    };

    if (showOrderOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOrderOptions, setShowOrderOptions]);
  
  return (
    <nav className="fixed w-full z-50 py-5 transition-all duration-300 bg-white backdrop-blur-sm py-2 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center">
          {/* <img 
            src="/pink-pizza.png" 
            alt="Pink Pizza Logo" 
            className="h-12 w-auto mr-2"
          /> */}
          <span className="text-pink-500 font-bold text-2xl">Pink Pizza</span>
        </div>
        
        {/* Desktop Navigation - centered items with white theme */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {t?.navItems?.map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${['home', 'about', 'menu', 'reviews', 'contact'][index]}`} 
                  className="text-gray-700 hover:text-pink-500 transition duration-300 font-medium"
                >
                  {item}
                </a>
              </li>
            )) || []}
          </ul>
        </div>
        
        {/* Order Button and Language Toggle */}
        <div className="hidden md:flex items-center">
          {/* Language toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center mr-4 text-gray-700 hover:text-pink-500 transition duration-300"
          >
            <Globe size={18} className="mr-1" />
            <span>{language === 'en' ? 'DE' : 'EN'}</span>
          </button>
          
          {/* Order Now button with dropdown */}
          <div id="navbar-dropdown-container" className="relative">
            <button 
              onClick={toggleOrderOptions}
              className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-medium transition duration-300 text-white flex items-center"
            >
              {t?.orderButtons?.orderNow || 'Order Now'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ml-2 transition-transform ${showOrderOptions ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {showOrderOptions && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-20 overflow-hidden">
                <a 
                  href="https://wolt.com/en/deu/berlin/restaurant/pink-pizza" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors border-b border-gray-100"
                  onClick={() => setShowOrderOptions(false)}
                >
                  <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-blue-400 text-white">
                    <span className="text-xs font-bold">W</span>
                  </div>
                  {t?.orderButtons?.wolt || 'Order on Wolt'}
                </a>
                <a 
                  href="https://www.lieferando.de/speisekarte/pink-pizza-berlin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors border-b border-gray-100"
                  onClick={() => setShowOrderOptions(false)}
                >
                  <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-orange-500 text-white">
                    <span className="text-xs font-bold">L</span>
                  </div>
                  {t?.orderButtons?.lieferando || 'Order on Lieferando'}
                </a>
                <a 
                  href="https://www.ubereats.com/de-en/store/pink-pizza/sJUpevW5WyO_Y5OylBdEEQ?srsltid=AfmBOooIDfxadbBf-rQNb_8yNpfEtq336VQ_ehrAsvXyGb__rWXI1wKq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors"
                  onClick={() => setShowOrderOptions(false)}
                >
                  <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-green-700 text-white">
                    <span className="text-xs font-bold">U</span>
                  </div>
                  {t?.orderButtons?.ubereats || 'Order on Uber Eats'}
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Language toggle for mobile */}
          <button 
            onClick={toggleLanguage}
            className="mr-4 text-gray-700 hover:text-pink-500 transition duration-300"
          >
            <Globe size={20} />
          </button>
          
          <button 
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-sm absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col py-4 px-4 space-y-4">
            {t?.navItems?.map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${['home', 'about', 'menu', 'reviews', 'contact'][index]}`}
                  className="text-gray-700 block py-2 hover:text-pink-500 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            )) || []}
            
            {/* Single order button for mobile */}
            <li className="pt-2">
              <button 
                onClick={toggleOrderOptions}
                className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-medium w-full transition duration-300 mb-2 text-white flex items-center justify-center"
              >
                {t?.orderButtons?.orderNow || 'Order Now'}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 ml-2 transition-transform ${showOrderOptions ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile dropdown options */}
              {showOrderOptions && (
                <div className="mt-2 bg-white rounded-lg shadow-inner overflow-hidden">
                  <a 
                    href="https://wolt.com/en/deu/berlin/restaurant/pink-pizza" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors border-b border-gray-100"
                    onClick={() => { setShowOrderOptions(false); setIsMenuOpen(false); }}
                  >
                    <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-blue-400 text-white">
                      <span className="text-xs font-bold">W</span>
                    </div>
                    {t?.orderButtons?.wolt || 'Order on Wolt'}
                  </a>
                  <a 
                    href="https://www.lieferando.de/speisekarte/pink-pizza-berlin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors border-b border-gray-100"
                    onClick={() => { setShowOrderOptions(false); setIsMenuOpen(false); }}
                  >
                    <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-orange-500 text-white">
                      <span className="text-xs font-bold">L</span>
                    </div>
                    {t?.orderButtons?.lieferando || 'Order on Lieferando'}
                  </a>
                  <a 
                    href="https://www.ubereats.com/de-en/store/pink-pizza/sJUpevW5WyO_Y5OylBdEEQ?srsltid=AfmBOooIDfxadbBf-rQNb_8yNpfEtq336VQ_ehrAsvXyGb__rWXI1wKq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors"
                    onClick={() => { setShowOrderOptions(false); setIsMenuOpen(false); }}
                  >
                    <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-green-700 text-white">
                      <span className="text-xs font-bold">U</span>
                    </div>
                    {t?.orderButtons?.ubereats || 'Order on Uber Eats'}
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

// Hero Component
const Hero = ({ t, showOrderOptions, setShowOrderOptions }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Toggle order options dropdown
  const toggleOrderOptions = (e) => {
    e.preventDefault();
    setShowOrderOptions(!showOrderOptions);
  };
  
  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownContainer = document.getElementById('hero-dropdown-container');
      if (dropdownContainer && !dropdownContainer.contains(event.target)) {
        setShowOrderOptions(false);
      }
    };

    if (showOrderOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOrderOptions, setShowOrderOptions]);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
             {/* Background with parallax effect */}
       <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>
         <img 
           src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
           alt="Pizza Background" 
           className="w-full h-full object-cover"
         />
       </div>
      
             {/* Floating decorative elements */}
       <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
         {/* Floating pizza slice icons */}
         <div className="absolute top-20 left-10 opacity-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
           <div className="w-16 h-16 text-pink-500 text-6xl">🍕</div>
         </div>
         <div className="absolute top-32 right-16 opacity-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
           <div className="w-12 h-12 text-pink-500 text-4xl">🍕</div>
         </div>
         <div className="absolute bottom-32 left-20 opacity-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
           <div className="w-14 h-14 text-pink-500 text-5xl">🍕</div>
         </div>
         
         {/* Gradient orbs */}
         <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
         <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-600/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
       </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          
          {/* Logo with animation */}
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
              <img 
                src="/pink-pizza.png" 
                alt="Pink Pizza Logo" 
                className="relative h-24 sm:h-32 lg:h-40 mx-auto transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
          
          {/* Brand name - hidden but can be uncommented if needed */}
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
              <span className="text-pink-400 drop-shadow-lg">Pink</span>{' '}
              <span className="text-white drop-shadow-lg">Pizza</span>
            </h1>
          </div>
          
          {/* Tagline with stagger animation */}
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-12 text-white/90 font-light max-w-3xl leading-relaxed drop-shadow-lg">
              {t?.hero?.tagline || 'Where flavor meets flair.'}
            </p>
          </div>
          
          {/* Enhanced CTA section */}
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mb-8">
              
              {/* Primary Order Button */}
              <div id="hero-dropdown-container" className="relative">
                <button 
                  onClick={toggleOrderOptions}
                  className="group relative bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:via-pink-700 hover:to-pink-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25 flex items-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">{t?.orderButtons?.orderNow || 'Order Now'}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`relative z-10 h-6 w-6 ml-3 transition-all duration-300 ${showOrderOptions ? 'rotate-180' : 'group-hover:translate-x-1'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                                 {/* Enhanced Dropdown Menu */}
                 {showOrderOptions && (
                   <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-72 sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl z-50 overflow-hidden border border-white/20 animate-in slide-in-from-top duration-300">
                    <div className="p-2">
                      <a 
                        href="https://wolt.com/en/deu/berlin/restaurant/pink-pizza" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 rounded-xl border-b border-gray-100/50 group"
                        onClick={() => setShowOrderOptions(false)}
                      >
                        <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-lg font-bold">W</span>
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-lg">{t?.orderButtons?.wolt || 'Order on Wolt'}</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a 
                        href="https://www.lieferando.de/speisekarte/pink-pizza-berlin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-300 rounded-xl border-b border-gray-100/50 group"
                        onClick={() => setShowOrderOptions(false)}
                      >
                        <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-lg font-bold">L</span>
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-lg">{t?.orderButtons?.lieferando || 'Order on Lieferando'}</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a 
                        href="https://www.ubereats.com/de-en/store/pink-pizza/sJUpevW5WyO_Y5OylBdEEQ?srsltid=AfmBOooIDfxadbBf-rQNb_8yNpfEtq336VQ_ehrAsvXyGb__rWXI1wKq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all duration-300 rounded-xl group"
                        onClick={() => setShowOrderOptions(false)}
                      >
                        <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-800 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-lg font-bold">U</span>
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-lg">{t?.orderButtons?.ubereats || 'Order on Uber Eats'}</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Secondary CTA */}
              <a 
                href="#menu" 
                className="group border-2 border-white/80 hover:border-white text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-medium text-lg sm:text-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center"
              >
                <span>View Menu</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span>5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">🚚</span>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-400">🍕</span>
                <span>Fresh Made</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 via-white/20 to-transparent"></div>

    </section>
  );
};

// About Component (currently unused)
// const About = ({ t }) => {
//   return (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <div className="md:w-1/2 relative">
//             <div className="hidden md:block rounded-lg overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
//               <img 
//                 src="https://images.unsplash.com/photo-1600628421055-4d30de868b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
//                 alt="About Pink Pizza" 
//                 className="w-full h-auto"
//               />
//             </div>
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-2xl"></div>
//           </div>
//           
//           <div className="md:w-1/2">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
//               {t?.about?.title?.split(' ')[0] || 'The'}{' '}
//               {t?.about?.title?.split(' ').slice(1).map((word, i) => (
//                 word.toLowerCase().includes('pizza') || word.toLowerCase().includes('späti') ? 
//                 <span key={i} className="text-pink-500">{word} </span> : 
//                 word + ' '
//               ))}
//             </h2>
//             <p className="text-gray-600 mb-6 text-lg">
//               {t?.about?.paragraph1 || 'Born from a passion for pushing culinary boundaries, Pink Pizza brings a fresh twist to traditional Italian pizza making.'}
//             </p>
//             <p className="text-gray-600 mb-8 text-lg">
//               {t?.about?.paragraph2 || 'We believe pizza should be an experience—a perfect harmony of flavors, textures, and presentation that delights all your senses.'}
//             </p>
//             <button className="border-b-2 border-pink-500 text-gray-700 pb-1 flex items-center font-medium hover:text-pink-500 transition duration-300">
//               {t?.about?.learnMore || 'Learn Our Story'}
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Menu Component
const MenuSection = ({ t, language }) => {
  // Safe title splitting with fallbacks
  const menuTitle = t?.menu?.title || 'Our Menu';
  const menuFirstWord = menuTitle.split(' ')[0];
  const menuRestWords = menuTitle.split(' ').slice(1).join(' ');
  
  // Get categories based on language
  const categorizedMenu = menuByCategory(language);
  const categories = Object.keys(categorizedMenu);
  
  // Separate pizzas and salads
  const pizzaCategory = categories.find(cat => cat.includes('PIZZA') || cat.includes('PIZZEN'));
  const saladCategory = categories.find(cat => cat.includes('SALAD') || cat.includes('SALATE'));
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('pizzas');
  const [showOrderOptions, setShowOrderOptions] = useState(false);

     // Tab definitions
   const tabs = [
     {
       id: 'pizzas',
       label: language === 'en' ? 'Pizzas' : 'Pizzen',
       emoji: '🍕',
       category: pizzaCategory,
       price: language === 'en' ? 'All pizzas 10€' : 'Alle Pizzen 10€',
       items: pizzaCategory ? categorizedMenu[pizzaCategory] : []
     },
     {
       id: 'salads',
       label: language === 'en' ? 'Salads' : 'Salate',
       emoji: '🥗',
       category: saladCategory,
       price: language === 'en' ? 'All salads 8€' : 'Alle Salate 8€',
       items: saladCategory ? categorizedMenu[saladCategory] : []
     }
   ];

  // Get current tab data
  const currentTab = tabs.find(tab => tab.id === activeTab);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownContainer = document.getElementById('menu-dropdown-container');
      if (dropdownContainer && !dropdownContainer.contains(event.target)) {
        setShowOrderOptions(false);
      }
    };

    if (showOrderOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOrderOptions]);

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-gray-50 to-white text-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-pink-500">{menuFirstWord}</span> {menuRestWords}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t?.menu?.description || 'Explore our selection of artisanal pizzas crafted with premium ingredients and bold flavor combinations.'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  <span className="text-2xl">{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.slice(0, 4)}</span>
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-xl animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

                 {/* Price Badge */}
         {currentTab && (
           <div className="text-center mb-8">
             <div className="inline-flex flex-col items-center bg-gradient-to-r from-pink-100 to-pink-50 text-pink-800 px-6 py-4 rounded-2xl font-bold shadow-md border border-pink-200 max-w-md mx-auto">
               <div className="flex items-center text-lg mb-1">
                 <span className="mr-2">🏪</span>
                 {currentTab.price}
                 <span className="ml-2">{language === 'en' ? '(In-Store)' : '(Im Laden)'}</span>
               </div>
               <div className="text-sm font-medium text-pink-600 opacity-90">
                 {language === 'en' 
                   ? '📱 Online orders have additional delivery fees' 
                   : '📱 Online-Bestellungen haben zusätzliche Liefergebühren'
                 }
               </div>
             </div>
           </div>
         )}

        {/* Menu Items Grid */}
        <div className="min-h-[600px]">
          {currentTab && currentTab.items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12">
              {currentTab.items.map((item) => (
                <MenuItem key={item.id} item={item} language={language} t={t} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                {language === 'en' ? 'Coming Soon' : 'Bald verfügbar'}
              </h3>
              <p className="text-gray-500">
                {language === 'en' 
                  ? 'We\'re working on adding more delicious options!' 
                  : 'Wir arbeiten daran, weitere köstliche Optionen hinzuzufügen!'
                }
              </p>
            </div>
          )}
        </div>

        {/* Enhanced Order CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {language === 'en' ? 'Ready to Order?' : 'Bereit zu bestellen?'}
            </h3>
                         <p className="text-gray-600 mb-4">
               {language === 'en' 
                 ? 'Choose your preferred delivery platform and enjoy our delicious food!' 
                 : 'Wählen Sie Ihre bevorzugte Lieferplattform und genießen Sie unser köstliches Essen!'
               }
             </p>
             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 text-sm">
               <div className="flex items-center text-yellow-800">
                 <span className="mr-2">💡</span>
                 <span className="font-medium">
                   {language === 'en' 
                     ? 'Note: Online prices include delivery fees and may differ from in-store prices' 
                     : 'Hinweis: Online-Preise enthalten Liefergebühren und können von den Ladenpreisen abweichen'
                   }
                 </span>
               </div>
             </div>
            
            {/* Order Button */}
            <div id="menu-dropdown-container" className="relative">
              <button 
                onClick={() => setShowOrderOptions(!showOrderOptions)}
                className="group relative bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:via-pink-700 hover:to-pink-800 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25 flex items-center mx-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">{t?.orderButtons?.orderNow || 'Order Now'}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`relative z-10 h-6 w-6 ml-3 transition-all duration-300 ${showOrderOptions ? 'rotate-180' : 'group-hover:translate-x-1'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Enhanced Dropdown Menu */}
              {showOrderOptions && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-72 sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl z-50 overflow-hidden border border-white/20 animate-in slide-in-from-top duration-300">
                  <div className="p-2">
                    <a 
                      href="https://wolt.com/en/deu/berlin/restaurant/pink-pizza" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 rounded-xl border-b border-gray-100/50 group"
                      onClick={() => setShowOrderOptions(false)}
                    >
                      <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg font-bold">W</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-lg">{t?.orderButtons?.wolt || 'Order on Wolt'}</span>
                        <div className="text-sm text-gray-500">{language === 'en' ? 'Fast delivery' : 'Schnelle Lieferung'}</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.lieferando.de/speisekarte/pink-pizza-berlin" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-300 rounded-xl border-b border-gray-100/50 group"
                      onClick={() => setShowOrderOptions(false)}
                    >
                      <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg font-bold">L</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-lg">{t?.orderButtons?.lieferando || 'Order on Lieferando'}</span>
                        <div className="text-sm text-gray-500">{language === 'en' ? 'Popular choice' : 'Beliebte Wahl'}</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.ubereats.com/de-en/store/pink-pizza/sJUpevW5WyO_Y5OylBdEEQ?srsltid=AfmBOooIDfxadbBf-rQNb_8yNpfEtq336VQ_ehrAsvXyGb__rWXI1wKq" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all duration-300 rounded-xl group"
                      onClick={() => setShowOrderOptions(false)}
                    >
                      <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-800 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg font-bold">U</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-lg">{t?.orderButtons?.ubereats || 'Order on Uber Eats'}</span>
                        <div className="text-sm text-gray-500">{language === 'en' ? 'Global platform' : 'Globale Plattform'}</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// MenuItem Component
const MenuItem = ({ item, language, t }) => {
  // Get fallback image if item.image_url is empty
  const imageUrl = item.image_url || 'https://via.placeholder.com/400x300?text=Coming+Soon';
  
  // Determine price based on category
  const isPizza = item.category.en.includes('PIZZA') || item.category.de.includes('PIZZEN');
  const isSalad = item.category.en.includes('SALAD') || item.category.de.includes('SALATE');
  const price = isPizza ? '10€' : isSalad ? '8€' : '';
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-2 border border-gray-100 relative">
      {/* Price Badge */}
      {price && (
        <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full font-bold shadow-lg z-10">
          {price}
        </div>
      )}
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {item.description[language] || item.description.en}
        </p>
      </div>
    </div>
  );
};

// Reviews Component
const Reviews = ({ t, language }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Split the title for styling
  const reviewsTitle = t?.reviews?.title || 'What Our Customers Say';
  const titleParts = reviewsTitle.split(' ');
  const middleIndex = Math.floor(titleParts.length / 2);
  
  const firstPart = titleParts.slice(0, middleIndex).join(' ');
  const highlightPart = titleParts[middleIndex];
  const lastPart = titleParts.slice(middleIndex + 1).join(' ');

  useEffect(() => {
    // This function would normally fetch reviews from an API
    // For this demo, we'll simulate an API call with setTimeout
    const fetchReviews = async () => {
      setLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const reviewsData = [
          {
            id: 1,
            name: "Regina Dogan",
            comment: "Die Pizzen schmecken sehr gut und sind liebevoll gemacht ,war sehr begeistert kann ich nur  weiter  empfehlen der Pizzateig wunderbar.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            rating: 5,
            source: "Google Maps",
            date: "April 2025"
          },
          {
            id: 2,
            name: "Patrick Ded.",
            comment: "Top Späti und Top Pizza. Die Pizzen sind wirklich gut und das Personal sehr freundlich. Toller Laden, super Auswahl. Hammer Lage direkt am Volkspark. Immer gerne dort.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            rating: 5,
            source: "Google Maps",
            date: "May 2025"
          },
          {
            id: 3,
            name: "Hubertus Rösch",
            comment: "Weltklasse Pizza absoluter Geheimtip für mich. Love it alles frisch super freundlich Mega meine Pizza in Berlin",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            rating: 5,
            source: "Google Maps",
            date: "April 2025"
          }
        ];
        
        setReviews(reviewsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
        setLoading(false);
      }
    };

    fetchReviews();
    
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            <span className="text-gray-800">{firstPart} </span>
            <span className="text-pink-500">{highlightPart}</span>
            <span className="text-gray-800"> {lastPart}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t?.reviews?.description || "Don't just take our word for it. Here's what pizza lovers are saying about their Pink Pizza experience."}
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          <a 
            href="https://maps.app.goo.gl/cYQHqDZdW5MioCDn7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-500 transition-colors flex justify-center items-center"
          >
            <span>Read more reviews on Google Maps</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  // Generate star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md relative transform transition duration-300 hover:shadow-lg hover:-translate-y-2 border border-gray-100">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-pink-500">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="pt-10 text-center">
        <div className="flex justify-center mb-2">
          {renderStars(testimonial.rating)}
        </div>
        <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
        <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
        <div className="flex justify-center items-center space-x-2 text-xs text-gray-500 mt-1">
          <span>via {testimonial.source}</span>
          <span>•</span>
          <span>{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
};

// Location Component
const Location = ({ t, language }) => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            <span className="text-gray-800">{t?.location?.title?.split(' ')[0] || 'Find'} </span>
            <span className="text-pink-500">{t?.location?.title?.split(' ')[1] || 'Us'}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t?.location?.description || 'Stop by for an unforgettable pizza experience or order online for delivery.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl overflow-hidden h-full shadow-md border border-gray-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.2772857643067!2d13.425515599999999!3d52.5284171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f4e6db4e98b%3A0x76e94cb8e12c038b!2sPink%20Pizza%20Berlin!5e0!3m2!1sen!2sde!4v1744463491460!5m2!1sen!2sde" 
              className="w-full h-full min-h-[400px]" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Pink Pizza Berlin Location"
            ></iframe>
            
            {/* Google Maps Link Button */}
            <div className="absolute bottom-4 left-4">
              <a 
                href="https://maps.app.goo.gl/tHRUPX944go3uUbU8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg transition duration-300 flex items-center"
              >
                <MapPin size={16} className="mr-2" />
                {language === 'de' ? 'In Google Maps öffnen' : 'View on Google Maps'}
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              <span className="text-gray-800">{t?.location?.contact?.split(' ')[0] || 'Contact'} </span>
              <span className="text-pink-500">{t?.location?.contact?.split(' ')[1] || 'Us'}</span>
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="mr-4 text-pink-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{t?.location?.address || 'Address'}</h4>
                  <p className="text-gray-600 mb-2">
                    {t?.location?.addressText?.split('\n')[0] || 'Am Friedrichshain 33'}<br />
                    {t?.location?.addressText?.split('\n')[1] || 'Prenzlauerberg 10407'}
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/tHRUPX944go3uUbU8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 text-sm font-medium transition duration-300 flex items-center"
                  >
                    <MapPin size={14} className="mr-1" />
                    {language === 'de' ? 'Auf Google Maps ansehen' : 'View on Google Maps'}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-pink-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{t?.location?.phone || 'Phone'}</h4>
                  <p className="text-gray-600">{t?.location?.phoneNumber || '+49 1515 1831473'}</p>
                </div>
              </div>
              
              {/* <div className="flex items-start">
                <Mail className="mr-4 text-pink-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{t?.location?.email || 'Email'}</h4>
                  <p className="text-gray-600">{t?.location?.emailAddress || 'pinkpizzaberlin@gmail.com'}</p>
                </div>
              </div> */}
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              <span className="text-pink-500">{t?.location?.sendMessage?.split(' ')[0] || 'Send'}</span>
              <span className="text-gray-800"> {t?.location?.sendMessage?.split(' ')?.slice(1)?.join(' ') || 'a Message'}</span>
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder={t?.location?.formFields?.name || 'Name'} 
                  className="bg-gray-50 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-200"
                />
                <input 
                  type="email" 
                  placeholder={t?.location?.formFields?.email || 'Email'} 
                  className="bg-gray-50 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-200"
                />
              </div>
              <input 
                type="text" 
                placeholder={t?.location?.formFields?.subject || 'Subject'} 
                className="bg-gray-50 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full border border-gray-200"
              />
              <textarea 
                placeholder={t?.location?.formFields?.message || 'Message'} 
                rows="4" 
                className="bg-gray-50 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full resize-none border border-gray-200"
              ></textarea>
              <button 
                type="submit" 
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium w-full transition duration-300"
              >
                {t?.location?.formFields?.submit || 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ t, language }) => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              {/* <img 
                src="/pink-pizza.png" 
                alt="Pink Pizza Logo" 
                className="h-12 w-auto mr-2"
              /> */}
              <span className="text-pink-500 font-bold text-2xl">Pink Pizza</span>
            </div>
            <p className="text-gray-400 mb-6">
              {t.hero.tagline}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/site_and_sight" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <Instagram />
              </a>
              <a href="https://www.instagram.com/site_and_sight" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {t.navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${['home', 'about', 'menu', 'reviews', 'contact'][index]}`} 
                    className="text-gray-400 hover:text-pink-400 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.openingHours}</h4>
            <ul className="space-y-3 text-gray-400 mb-6">
              <li>{t.footer.hours.weekdays}</li>
            </ul>
            
            {/* Google Maps Link */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">{language === 'de' ? 'Finden Sie uns' : 'Find Us'}</h4>
              <a 
                href="https://maps.app.goo.gl/tHRUPX944go3uUbU8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition duration-300 flex items-center"
              >
                <MapPin size={16} className="mr-2" />
                {language === 'de' ? 'Google Maps' : 'Google Maps'}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
        <p className="text-gray-500 text-center">
          <a href="https://www.siteandsight.com/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-pink-500">
            Webdesign by <span className="text-pink-500">Site</span>
            &
            <span className="text-pink-500">Sight</span>
          </a>
        </p>
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Pink Pizza Berlin. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;