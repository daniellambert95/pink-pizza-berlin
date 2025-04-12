// Restructured Menu Data with multilingual support
const menuData = [
  // PIZZAS
  {
    id: 'pizza-margherita',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Margherita',
    description: {
      en: 'Enjoyment to the last crust',
      de: 'Genuss bis zur letzten Kruste'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c27a688f466affe33be',
    local_image_path: 'images/pink_pizza_5._pizza_margherita.jpg'
  },
  {
    id: 'pizza-diavola',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Diavola',
    description: {
      en: 'With mozzarella, spicy pork salami and olives',
      de: 'Mit Mozzarella, scharfer Schweinesalami und Oliven'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1cb1ab310ee0c4b1b8',
    local_image_path: 'images/pink_pizza_3._pizza_diavola.jpg'
  },
  {
    id: 'pizza-funghi',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Funghi',
    description: {
      en: 'With mozzarella and mushrooms',
      de: 'Mit Mozzarella und Champignons'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1cb1ab310ee0c4b1ba',
    local_image_path: 'images/pink_pizza_4._pizza_funghi.jpg'
  },
  {
    id: 'pizza-bufalina',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Bufalina',
    description: {
      en: 'With buffalo mozzarella, basil and arugula',
      de: 'Mit Büffelmozzarella, Basilikum und Rucola'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1fb1ab310ee0c4b1c4',
    local_image_path: 'images/pink_pizza_14._pizza_bufalina.jpg'
  },
  {
    id: 'pizza-salami',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Salami',
    description: {
      en: 'With mozzarella and pork salami',
      de: 'Mit Mozzarella und normaler Schweinesalami'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1cb1ab310ee0c4b1b8',
    local_image_path: 'images/pink_pizza_18._pizza_salami.jpg'
  },
  {
    id: 'pizza-prosciutto',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Prosciutto',
    description: {
      en: 'With mozzarella and cooked pork ham',
      de: 'Mit Mozzarella und Kochschinken aus Schwein'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1eb1ab310ee0c4b1bd',
    local_image_path: 'images/pink_pizza_8._pizza_prosciutto.jpg'
  },
  {
    id: 'pizza-carciofi',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Carciofi',
    description: {
      en: 'With mozzarella, artichokes and dried tomatoes',
      de: 'Mit Mozzarella, Artischocken und getrockneten Tomaten'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1cb1ab310ee0c4b1bb',
    local_image_path: 'images/pink_pizza_2._pizza_carciofi.jpg'
  },
  {
    id: 'pizza-parma',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Parma',
    description: {
      en: 'With mozzarella, Parma ham, cherry tomatoes and arugula',
      de: 'Mit Mozzarella, Parmaschinken aus Schwein, Kirschtomaten und Rucola'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1eb1ab310ee0c4b1bf',
    local_image_path: 'images/pink_pizza_7._pizza_parma.jpg'
  },
  {
    id: 'pizza-tonno',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Tonno e Cipola',
    description: {
      en: 'With mozzarella, tuna and onions',
      de: 'Mit Mozzarella, Thunfisch und Zwiebeln'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1eb1ab310ee0c4b1c0',
    local_image_path: 'images/pink_pizza_10._pizza_tonno_e_cipola.jpg'
  },
  {
    id: 'pizza-hawaii',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Hawaii',
    description: {
      en: 'With mozzarella, cooked pork ham and pineapple',
      de: 'Mit Mozzarella, Kochschinken aus Schwein und Ananas'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c20b1ab310ee0c4b1c6',
    local_image_path: 'images/pink_pizza_11._pizza_hawaii.jpg'
  },
  {
    id: 'pizza-regina',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Regina',
    description: {
      en: 'With mozzarella, pork ham and mushrooms',
      de: 'Mit Mozzarella, Schweineschinken und Champignons'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1eb1ab310ee0c4b1bc',
    local_image_path: 'images/pink_pizza_9._pizza_regina.jpg'
  },
  {
    id: 'pizza-crudo',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Crudo e Rucola',
    description: {
      en: 'With mozzarella, Parma ham and arugula',
      de: 'Mit Mozzarella, Parmaschinken aus Schwein und Rucola'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c20b1ab310ee0c4b1c5',
    local_image_path: 'images/pink_pizza_15._pizza_crudo_e_rucola.jpg'
  },
  {
    id: 'pizza-verdure',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza alle Verdure Grigliate',
    description: {
      en: 'With mozzarella and grilled vegetables',
      de: 'Mit Mozzarella und gegrilltem Gemüse'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1cb1ab310ee0c4b1b7',
    local_image_path: 'images/pink_pizza_1._pizza_alle_verdure_grigliate.jpg'
  },
  {
    id: 'pizza-marinara',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Marinara',
    description: {
      en: 'With garlic and oregano',
      de: 'Mit Knoblauch und Oregano'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1eb1ab310ee0c4b1be',
    local_image_path: 'images/pink_pizza_6._pizza_marinara.jpg'
  },
  {
    id: 'pizza-bella',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Bella',
    description: {
      en: 'With mozzarella, potatoes, olives and arugula',
      de: 'Mit Mozzarella, Kartoffeln, Oliven und Rucola'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c20b1ab310ee0c4b1c7',
    local_image_path: 'images/pink_pizza_13._pizza_bella.jpg'
  },
  {
    id: 'pizza-vegan-verdure',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Pizza Vegan alle Verdure Grigliate',
    description: {
      en: 'With colorful bell peppers, onions, olives and grilled tomatoes',
      de: 'Mit bunter Paprika, Zwiebeln, Oliven und gegrillten Tomaten'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c20b1ab310ee0c4b1c8',
    local_image_path: 'images/pink_pizza_16._pizza_vegan_alle_verdure_grigliate.jpg'
  },
  {
    id: 'pizza-calzone',
    category: {
      en: 'PIZZAS 🍕',
      de: 'PIZZEN 🍕'
    },
    name: 'Calzone',
    description: {
      en: 'With mozzarella and Parma ham',
      de: 'Mit Mozzarella und Parmaschinken aus Schwein'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c1fb1ab310ee0c4b1c3',
    local_image_path: 'images/pink_pizza_12._calzone.jpg'
  },
  
  // SALADS
  {
    id: 'salad-carciofi',
    category: {
      en: 'SALADS 🥗',
      de: 'SALATE 🥗'
    },
    name: 'Carciofi Salat',
    description: {
      en: 'All salads are prepared with arugula',
      de: 'Alle Salate werden mit Rucola zubereitet'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c21b1ab310ee0c4b1ca',
    local_image_path: 'images/pink_pizza_1._carciofi_salat.jpg'
  },
  {
    id: 'salad-ziegenkaese',
    category: {
      en: 'SALADS 🥗',
      de: 'SALATE 🥗'
    },
    name: 'Ziegenkäse und Honig Salat',
    description: {
      en: 'With goat cheese, honey, corn, iceberg lettuce and carrots',
      de: 'Mit Ziegenkäse, Honig, Mais, Eisbergsalat und Karotten'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c21b1ab310ee0c4b1cd',
    local_image_path: 'images/pink_pizza_4._ziegenkäse_und_honig_salat.jpg'
  },
  {
    id: 'salad-tonno',
    category: {
      en: 'SALADS 🥗',
      de: 'SALATE 🥗'
    },
    name: 'Tonno Salat',
    description: {
      en: 'With corn, iceberg lettuce, carrots and tuna',
      de: 'Mit Mais, Eisbergsalat, Karotten und Thunfisch'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c21b1ab310ee0c4b1cb',
    local_image_path: 'images/pink_pizza_3._tonno_salat.jpg'
  },
  {
    id: 'salad-rucola',
    category: {
      en: 'SALADS 🥗',
      de: 'SALATE 🥗'
    },
    name: 'Rucola e Parmesan Salat',
    description: {
      en: 'With parmesan and cherry tomatoes',
      de: 'Mit Parmesan und Kirschtomaten'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c21b1ab310ee0c4b1cc',
    local_image_path: 'images/pink_pizza_2._rucola_e_parmesan_salat.jpg'
  },
  {
    id: 'salad-mediterran',
    category: {
      en: 'SALADS 🥗',
      de: 'SALATE 🥗'
    },
    name: 'Mediterraner Ofengemüsesalat',
    description: {
      en: 'With grilled vegetables, corn, carrots and iceberg lettuce',
      de: 'Mit gegrilltem Gemüse, Mais, Karotten und Eisbergsalat'
    },
    image_url: 'https://imageproxy.wolt.com/assets/679c8c21b1ab310ee0c4b1ce',
    local_image_path: 'images/pink_pizza_5._mediterraner_ofengemüsesalat.jpg'
  }
];

// Group menu items by category (with language support)
const menuByCategory = (language = 'en') => {
  return menuData.reduce((acc, item) => {
    // Get the category based on language, fallback to English
    const categoryKey = item.category[language] || item.category.en;
    
    if (!acc[categoryKey]) {
      acc[categoryKey] = [];
    }
    acc[categoryKey].push(item);
    return acc;
  }, {});
};

export { menuData, menuByCategory }; 