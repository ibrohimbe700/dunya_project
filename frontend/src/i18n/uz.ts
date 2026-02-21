const uz = {
  brand: "Dunya Jewellery",
  nav: {
    home: "Bosh sahifa",
    catalog: "Katalog",
    cart: "Savatcha",
    checkout: "Buyurtma"
  },
  hero: {
    title: "Kumush uzuklar — nafislik timsoli",
    subtitle: "925 probali kumush, zamonaviy dizayn va premium qadoq.",
    cta: "Katalogni ko‘rish"
  },
  benefits: {
    title: "Nega Dunya Jewellery",
    items: [
      "925 probali kumush",
      "Premium jilolash va qadoqlash",
      "O‘zbekiston bo‘ylab ehtiyotkor yetkazib berish"
    ]
  },
  newArrivals: "Yangi kolleksiya",

  // ✅ добавили, чтобы Breadcrumbs.tsx не падал
  breadcrumbs: {
    home: "Bosh sahifa"
  },

  catalog: {
    title: "Kumush uzuklar katalogi",
    dataStale: "Ma’lumotlar eskirgan bo‘lishi mumkin",
    search: "Nom va tavsif bo‘yicha qidirish",
    sort: "Saralash",
    sortOptions: {
      newest: "Yangi avval",
      priceAsc: "Narx o‘sish bo‘yicha",
      priceDesc: "Narx pasayish bo‘yicha"
    },
    empty: "Hozircha mahsulot yo‘q",

    // ✅ добавили, чтобы FiltersPanel.tsx не падал
    filters: {
      title: "Filtrlar",
      material: "Material",
      materials: {
        gold: "Oltin",
        silver: "Kumush",
        platinum: "Platina"
      },
      stoneType: "Tosh turi",
      stoneTypes: {
        diamond: "Brilliant",
        ruby: "Yoqut",
        emerald: "Zumrad",
        sapphire: "Safir",
        none: "Toshsiz"
      },
      size: "O‘lcham",
      sizes: {
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22"
      },
      priceRange: "Narx oralig‘i",
      minPrice: "Min narx",
      maxPrice: "Max narx",
      style: "Uslub",
      styles: {
        classic: "Klassik",
        modern: "Zamonaviy",
        vintage: "Vintaj"
      },
      inStockOnly: "Faqat mavjudlari",
      all: "Barchasi",
      reset: "Filtrlarni tozalash"
    }
  },

  product: {
    selectSize: "O‘lchamni tanlang",
    addToCart: "Savatchaga qo‘shish",

    // ✅ у вас в ru есть — добавляем, чтобы не словить следующие ошибки
    addToWishlist: "Sevimlilarga qo‘shish",
    removeFromWishlist: "Sevimlilardan o‘chirish",

    inStock: "Mavjud",
    outOfStock: "Mavjud emas",
    description: "Tavsif",
    similar: "O‘xshash mahsulotlar",
    youMayAlsoLike: "Sizga ham yoqishi mumkin",
    compare: "Taqqoslash"
  },

  cart: {
    title: "Savatcha",
    empty: "Savatchangiz bo‘sh",
    total: "Jami",
    checkout: "Buyurtmani rasmiylashtirish",
    remove: "O‘chirish"
  },

  checkout: {
    orderQueued: "Server vaqtincha ishlamayapti. Buyurtma saqlandi va avtomatik yuboriladi.",
    title: "Buyurtma rasmiylashtirish",
    name: "Ism",
    phone: "Telefon",
    address: "Manzil",
    comment: "Izoh",
    placeOrder: "Buyurtma berish",
    success: "Dunya Jewellery’ni tanlaganingiz uchun rahmat",
    successSubtitle: "Tez orada administrator siz bilan bog‘lanadi. Kutganingiz uchun rahmat❤️",
    telegramFailed: "Buyurtma saqlandi, ammo Telegram yetkazilmadi"
  },

  toast: {
    added: "Savatchaga qo‘shildi",
    removed: "Savatchadan olib tashlandi",
    selectSize: "O‘lchamni tanlang",
    formError: "Majburiy maydonlarni to‘ldiring",
    orderError: "Buyurtma berilmadi"
  },

  // ✅ добавили целиком блок compare (у вас есть CompareStore и компонент)
  compare: {
    title: "Mahsulotlarni taqqoslash",
    products: "mahsulot",
    selectFeatures: "Taqqoslash uchun xususiyatlarni tanlang",
    feature: "Xususiyat",
    features: {
      material: "Material",
      stoneType: "Tosh turi",
      stoneSize: "Tosh o‘lchami",
      setting: "O‘rnatish turi",
      weight: "Og‘irlik",
      price: "Narx",
      sizes: "O‘lchamlar"
    },
    addToCart: "Savatchaga qo‘shish",
    viewDetails: "Batafsil",
    clearSelection: "Tanlovni tozalash",
    maxProducts: "Maksimum 4 ta mahsulotni taqqoslash mumkin"
  },

  // ✅ добавили wishlist (у вас есть WishlistStore и компонент)
  wishlist: {
    title: "Sevimlilar",
    empty: "Sevimlilar ro‘yxati bo‘sh",
    emptyDescription: "Yoqtirgan mahsulotlaringizni keyinroq ko‘rish uchun saqlang",
    addToCart: "Savatchaga",
    remove: "O‘chirish",
    totalItems: "Jami mahsulotlar",
    total: "Jami summa",
    addAllToCart: "Hammasini savatchaga"
  },

  notFound: {
    title: "Sahifa topilmadi",
    back: "Bosh sahifaga qaytish"
  },

  footer: "Muhabbat bilan yaratilgan kumush uzuklar"
};

export default uz;