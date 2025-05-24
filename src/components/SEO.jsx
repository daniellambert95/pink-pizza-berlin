import React from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  type = 'website',
  image = '/pink-pizza.png',
  section = 'home'
}) => {
  const baseUrl = 'https://www.pinkpizza-berlin.de';
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const fullCanonical = canonical || `${baseUrl}/`;

  // Section-specific titles and descriptions
  const sectionData = {
    home: {
      title: 'Pink Pizza Berlin - Authentische Pizza im Prenzlauer Berg | Späti-Pizzeria',
      description: 'Pink Pizza Berlin - Einzigartige Pizzeria im Späti in Prenzlauer Berg. Frische handgemachte Pizzas und Salate. Bestellen Sie online über Wolt, Lieferando oder Uber Eats. Täglich 11-23:30 Uhr geöffnet.'
    },
    about: {
      title: 'Über Pink Pizza Berlin - Unsere Geschichte | Türkische Familie, Berliner Traum',
      description: 'Erfahren Sie die Geschichte von Pink Pizza Berlin - wie eine türkische Familie ihren Späti in eine beliebte Pizzeria verwandelte. Authentische Küche trifft Berliner Gemeinschaftsgefühl.'
    },
    menu: {
      title: 'Speisekarte - Pink Pizza Berlin | Handgemachte Pizzas & Frische Salate',
      description: 'Entdecken Sie unsere Speisekarte mit handgemachten Pizzas und frischen Salaten. Hochwertige Zutaten und kreative Geschmackskombinationen. Online bestellen bei Wolt, Lieferando oder Uber Eats.'
    },
    reviews: {
      title: 'Kundenbewertungen - Pink Pizza Berlin | Was unsere Gäste sagen',
      description: 'Lesen Sie echte Bewertungen von Pink Pizza Berlin Kunden. Erfahren Sie, warum wir eine der beliebtesten Pizzerien in Prenzlauer Berg sind.'
    },
    contact: {
      title: 'Kontakt & Standort - Pink Pizza Berlin | Am Friedrichshain 33, Prenzlauer Berg',
      description: 'Besuchen Sie Pink Pizza Berlin am Friedrichshain 33 in Prenzlauer Berg. Öffnungszeiten: Mo-So 11:00-23:30. Tel: 015151831473. Oder bestellen Sie online für Lieferung.'
    }
  };

  const seoTitle = title || sectionData[section]?.title || sectionData.home.title;
  const seoDescription = description || sectionData[section]?.description || sectionData.home.description;
  const seoKeywords = keywords || 'Pink Pizza Berlin, Pizza Prenzlauer Berg, Pizza Lieferung Berlin, Späti Pizza, Pizza bestellen Berlin, Friedrichshain Pizza, authentische Pizza, handgemachte Pizza';

  return (
    <>
      {/* Primary Meta Tags - React 19 native support */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={fullImage} />

      {/* Additional structured data based on section */}
      {section === 'menu' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": "Pink Pizza Berlin Speisekarte",
            "description": "Handgemachte Pizzas und frische Salate",
            "provider": {
              "@type": "Restaurant",
              "name": "Pink Pizza Berlin"
            },
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Pizzas",
                "description": "Handgemachte Pizzas mit frischen Zutaten"
              },
              {
                "@type": "MenuSection", 
                "name": "Salate",
                "description": "Frische Salate mit saisonalen Zutaten"
              }
            ]
          })}
        </script>
      )}

      {section === 'reviews' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Restaurant",
              "name": "Pink Pizza Berlin"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Organization",
              "name": "Pink Pizza Berlin Customers"
            }
          })}
        </script>
      )}
    </>
  );
};

export default SEO; 