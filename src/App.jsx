import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Globe } from 'lucide-react';
import { menuData, menuByCategory } from './data/menuData';

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
      phoneNumber: '+49 30 123 4567',
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
      phoneNumber: '+49 30 123 4567',
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
        weekdays: 'Montag - Sonntag: 12:00 - 23:00 Uhr'
      },
      newsletter: 'Newsletter',
      subscribeText: 'Abonnieren Sie, um Sonderangebote und Updates zu erhalten.',
      emailPlaceholder: 'Ihre E-Mail',
      join: 'Abonnieren',
      rights: 'Alle Rechte vorbehalten.'
    }
  }
};

// App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('de');
  const [showNavOrderOptions, setShowNavOrderOptions] = useState(false);
  const [showHeroOrderOptions, setShowHeroOrderOptions] = useState(false);

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  // Get current translations
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white text-gray-800">
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
        <About t={t} />
        <MenuSection t={t} language={language} />
        <Reviews t={t} language={language} />
        <Location t={t} />
      </main>
      <Footer t={t} language={language} />
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
  // Toggle order options dropdown
  const toggleOrderOptions = (e) => {
    e.preventDefault();
    setShowOrderOptions(!showOrderOptions);
  };
  
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Pizza Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <img 
            src="/pink-pizza.png" 
            alt="Pink Pizza Logo" 
            className="h-32 mb-6"
          />
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            <span className="text-pink-500">Pink</span> Pizza
          </h1> */}
          <p className="text-xl md:text-2xl mb-8 text-white">
            {t?.hero?.tagline || 'Where flavor meets flair.'}
          </p>
          
          {/* Order Now with dropdown */}
          <div id="hero-dropdown-container" className="relative">
            <button 
              onClick={toggleOrderOptions}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium text-lg transform transition duration-300 hover:scale-105 flex items-center"
            >
              {t?.orderButtons?.orderNow || 'Order Now'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ml-2 transition-transform ${showOrderOptions ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {showOrderOptions && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white rounded-lg shadow-xl z-20 overflow-hidden">
                <a 
                  href="https://wolt.com/en/deu/berlin/restaurant/pink-pizza" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors border-b border-gray-100"
                  onClick={() => setShowOrderOptions(false)}
                >
                  <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-blue-400 text-white">
                    <span className="text-sm font-bold">W</span>
                  </div>
                  <span className="font-medium">{t?.orderButtons?.wolt || 'Order on Wolt'}</span>
                </a>
                <a 
                  href="https://www.lieferando.de/speisekarte/pink-pizza-berlin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors border-b border-gray-100"
                  onClick={() => setShowOrderOptions(false)}
                >
                  <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-orange-500 text-white">
                    <span className="text-sm font-bold">L</span>
                  </div>
                  <span className="font-medium">{t?.orderButtons?.lieferando || 'Order on Lieferando'}</span>
                </a>
                <a 
                  href="https://www.ubereats.com/de-en/store/pink-pizza/sJUpevW5WyO_Y5OylBdEEQ?srsltid=AfmBOooIDfxadbBf-rQNb_8yNpfEtq336VQ_ehrAsvXyGb__rWXI1wKq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors"
                  onClick={() => setShowOrderOptions(false)}
                >
                  <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-green-700 text-white">
                    <span className="text-sm font-bold">U</span>
                  </div>
                  <span className="font-medium">{t?.orderButtons?.ubereats || 'Order on Uber Eats'}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

// About Component
const About = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="hidden md:block rounded-lg overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1600628421055-4d30de868b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="About Pink Pizza" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {t?.about?.title?.split(' ')[0] || 'The'}{' '}
              {t?.about?.title?.split(' ').slice(1).map((word, i) => (
                word.toLowerCase().includes('pizza') || word.toLowerCase().includes('späti') ? 
                <span key={i} className="text-pink-500">{word} </span> : 
                word + ' '
              ))}
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              {t?.about?.paragraph1 || 'Born from a passion for pushing culinary boundaries, Pink Pizza brings a fresh twist to traditional Italian pizza making.'}
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              {t?.about?.paragraph2 || 'We believe pizza should be an experience—a perfect harmony of flavors, textures, and presentation that delights all your senses.'}
            </p>
            <button className="border-b-2 border-pink-500 text-gray-700 pb-1 flex items-center font-medium hover:text-pink-500 transition duration-300">
              {t?.about?.learnMore || 'Learn Our Story'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Menu Component
const MenuSection = ({ t, language }) => {
  // Safe title splitting with fallbacks
  const menuTitle = t?.menu?.title || 'Our Menu';
  const menuFirstWord = menuTitle.split(' ')[0];
  const menuRestWords = menuTitle.split(' ').slice(1).join(' ');
  
  // Get categories based on language
  const categorizedMenu = menuByCategory(language);
  const categories = Object.keys(categorizedMenu);

  // State to manage dropdown visibility for each category
  const [activeCategoryDropdown, setActiveCategoryDropdown] = useState(null);

  // Price display function
  const getCategoryPrice = (category) => {
    if (category.includes('PIZZA') || category.includes('PIZZEN')) {
      return language === 'en' ? 'All pizzas 10€' : 'Alle Pizzen 10€';
    } else if (category.includes('SALAD') || category.includes('SALATE')) {
      return language === 'en' ? 'All salads 8€' : 'Alle Salate 8€';
    }
    return '';
  };

  // Toggle dropdown for a specific category
  const toggleCategoryDropdown = (category) => {
    if (activeCategoryDropdown === category) {
      setActiveCategoryDropdown(null);
    } else {
      setActiveCategoryDropdown(category);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownContainer = document.getElementById(`category-dropdown-${activeCategoryDropdown}`);
      if (dropdownContainer && !dropdownContainer.contains(event.target)) {
        setActiveCategoryDropdown(null);
      }
    };

    if (activeCategoryDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeCategoryDropdown]);

  return (
    <section id="menu" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-pink-500">{menuFirstWord}</span> {menuRestWords}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t?.menu?.description || 'Explore our selection of artisanal pizzas crafted with premium ingredients and bold flavor combinations.'}
          </p>
        </div>
        
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <div className="mb-8 text-center flex flex-col items-center">
              <h3 className="text-2xl font-bold pb-2 text-center border-b-2 border-pink-500 inline-block">
                {category}
              </h3>
              {/* Price display */}
              {getCategoryPrice(category) && (
                <div className="mt-3 bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium inline-flex items-center">
                  <span className="inline-block mr-1">💰</span>
                  {getCategoryPrice(category)}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categorizedMenu[category].map((item) => (
                <MenuItem key={item.id} item={item} language={language} t={t} />
              ))}
            </div>

            {/* Order Now button for each category */}
            {(category.includes('PIZZA') || category.includes('PIZZEN') || 
              category.includes('SALAD') || category.includes('SALATE')) && (
              <div className="mt-12 text-center">
                <div id={`category-dropdown-${category}`} className="relative inline-block">
                  <button 
                    onClick={() => toggleCategoryDropdown(category)}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium text-lg transform transition duration-300 hover:scale-105 flex items-center mx-auto"
                  >
                    {t?.orderButtons?.orderNow || 'Order Now'}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ml-2 transition-transform ${activeCategoryDropdown === category ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeCategoryDropdown === category && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white rounded-lg shadow-xl z-20 overflow-hidden">
                      <a 
                        href="https://wolt.com/en/deu/berlin/restaurant/pink-pizza" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors border-b border-gray-100"
                        onClick={() => setActiveCategoryDropdown(null)}
                      >
                        <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-blue-400 text-white">
                          <span className="text-sm font-bold">W</span>
                        </div>
                        <span className="font-medium">{t?.orderButtons?.wolt || 'Order on Wolt'}</span>
                      </a>
                      <a 
                        href="https://www.lieferando.de/speisekarte/pink-pizza-berlin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors border-b border-gray-100"
                        onClick={() => setActiveCategoryDropdown(null)}
                      >
                        <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-orange-500 text-white">
                          <span className="text-sm font-bold">L</span>
                        </div>
                        <span className="font-medium">{t?.orderButtons?.lieferando || 'Order on Lieferando'}</span>
                      </a>
                      <a 
                        href="https://www.ubereats.com/de-en/store/pink-pizza/sJUpevW5WyO_Y5OylBdEEQ?srsltid=AfmBOooIDfxadbBf-rQNb_8yNpfEtq336VQ_ehrAsvXyGb__rWXI1wKq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-3 text-gray-800 hover:bg-pink-50 transition-colors"
                        onClick={() => setActiveCategoryDropdown(null)}
                      >
                        <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-green-700 text-white">
                          <span className="text-sm font-bold">U</span>
                        </div>
                        <span className="font-medium">{t?.orderButtons?.ubereats || 'Order on Uber Eats'}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* <div className="text-center mt-16">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-medium text-lg transform transition duration-300 hover:scale-105">
            {t?.menu?.viewFullMenu || 'View Full Menu'}
          </button>
        </div> */}
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
            name: "Daniela Bergmann",
            comment: "Sehr lecker! Great pizza and nice owners, there's a späti inside so you can grab a beer and snacks with your pizza! 👌🏻",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            rating: 5,
            source: "Google Maps",
            date: "1 month ago"
          },
          {
            id: 2,
            name: "Shmuel Erez",
            comment: "Quality ingredients and a diverse menu! I had a delicious pizza. Their pizzas include great quality ingredients and topping combinations you won't find elsewhere.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            rating: 5,
            source: "Google Maps",
            date: "2 months ago"
          },
          {
            id: 3,
            name: "Hanz Wassermann",
            comment: "Very tasty pizza with nice relaxed atmosphere and friendly service. I had the Fungi pizza and it was excellent - super flavorful with a perfect crust.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            rating: 5,
            source: "Google Maps",
            date: "2 weeks ago"
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
const Location = ({ t }) => {
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
          <div className="bg-white rounded-xl overflow-hidden h-full shadow-md border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.2772857643067!2d13.425515599999999!3d52.5284171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f4e6db4e98b%3A0x76e94cb8e12c038b!2sPink%20Pizza%20Berlin!5e0!3m2!1sen!2sde!4v1744463491460!5m2!1sen!2sde" 
              className="w-full h-full min-h-[400px]" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Pink Pizza Berlin Location"
            ></iframe>
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
                  <p className="text-gray-600">
                    {t?.location?.addressText?.split('\n')[0] || 'Am Friedrichshain 33'}<br />
                    {t?.location?.addressText?.split('\n')[1] || 'Prenzlauerberg 10407'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-pink-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{t?.location?.phone || 'Phone'}</h4>
                  <p className="text-gray-600">{t?.location?.phoneNumber || '+49 30 123 4567'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 text-pink-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{t?.location?.email || 'Email'}</h4>
                  <p className="text-gray-600">{t?.location?.emailAddress || 'pinkpizzaberlin@gmail.com'}</p>
                </div>
              </div>
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
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <Twitter />
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
            <ul className="space-y-3 text-gray-400">
              <li>{t.footer.hours.weekdays}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Pink Pizza Berlin. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;