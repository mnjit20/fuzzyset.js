console.log('leven using nodejs');

const leven = require('leven');

const categoryList = ["maruti suzuki", "renault", "hyundai", "honda", "mahindra", "toyota", "tata", "volkswagen",
  "ford", "datsun", "chevrolet", "audi", "mercedes-benz", "nissan", "bmw", "skoda", "fiat", "land rover",
  "jaguar", "volvo", "jeep", "honda two wheeler", "tvs", "hero", "bajaj", "suzuki", "yamaha", "royal enfield",
  "ktm", "kawasaki", "mahindra two wheelers", "vespa", "um", "aprilia", "harley davidson", "benelli",
  "samsung mobiles", "apple mobiles", "nokia mobiles", "xiaomi mobiles", "micromax mobiles", "oneplus mobiles",
  "sony mobiles", "lenovo mobiles", "motorola mobiles", "lg mobiles", "oppo mobiles", "vivo mobiles",
  "htc mobiles", "lava mobiles", "asus mobiles", "nubia mobiles", "honor mobiles", "gionee mobiles",
  "mobile accessories", "desktop", "laptop", "computer software", "computer accessories", "ios", "windows",
  "android", "bollywood", "bollywood celebrity", "hollywood", "hollywood celebrity", "television", "music",
  "health insurance", "life insurance", "property insurance", "travel insurance", "term plan insurance",
  "four wheeler insurance", "two wheeler insurance", "personal accident", "cancer insurance", "critical illness",
  "mediclaim policy", "retirement solutions", "tax benefit", "mutual funds", "stock exchange", "mens health",
  "womens health", "child health", "nutrition & supplements", "weight management", "cardio", "strength training",
  "yoga", "skin care", "hair care", "smoking", "paediatric medicine", "allopathic", "homeopathic",
  "homemade medicinal tips", "diabetes", "cancer", "kidney stones", "debit card", "credit cards", "banking",
  "home loans", "student loans", "automobile loans", "loans", "job seeker", "job recruiter", "new property",
  "under construction", "ready to move", "rental", "resale", "fragrance", "makeup", "skincare",
  "women's clothing", "men's clothing", "girls clothing", "boys clothing", "kids clothing", "baby clothing",
  "alcoholic beverages", "non-alcoholic beverages", "cuisine", "diet", "herbs & spices", "nutritional foods",
  "recipe & cooking", "restaurant", "online games", "pc games", "nitendo", "playstation", "xbox", "android games",
  "ios games", "anniversaries", "birthdays", "graduations", "weddings", "new year", "indian republic day",
  "indian independence day", "diwali", "dussehra", "holi", "eid al-fitr", "muharram", "christmas",
  "valentines day", "hindu festivals", "islamic festivals", "christain festivals", "other festivals",
  "elder care", "family counseling", "friendship", "genealogy", "home improvement", "housekeeping",
  "lawn & garden", "parenting", "pets", "national news", "international news", "andaman and nicobar islands news",
  "andhra pradesh news", "arunachal pradesh news", "assam news", "bihar news", "chandigarh news",
  "chhattisgarh news", "dadra and nagar haveli news", "daman and diu news", "new delhi news", "goa news",
  "gujarat news", "haryana news", "himachal pradesh news", "jammu and kashmir news", "jharkhand news",
  "karnataka news", "kerala news", "lakshadweep news", "madhya pradesh news", "maharashtra news", "manipur news",
  "meghalaya news", "mizoram news", "nagaland news", "odisha news", "puducherry news", "punjab news",
  "rajasthan news", "sikkim news", "tamil nadu news", "telangana news", "tripura news", "uttar pradesh news",
  "uttarakhand news", "west bengal news", "dating", "relationship advice", "elementary education",
  "pre-kindergarden education", "primary school education", "high school education", "graduate education",
  "masters education", "post graduation education", "mba", "diploma", "online education", "online shopping",
  "online fashion shopping", "online electronics shopping", "offline shopping", "discount coupons", "grocery",
  "facebook", "googleplus", "linkedin", "pinterest", "social media referrals", "stumbleupon", "twitter",
  "youtube", "cricket", "football", "kabaddi", "tennis", "motogp", "formula1", "golf", "wrestling", "olympics",
  "commonwealth", "cycling", "basket ball", "swimming", "camping", "martial arts", "airlines", "cruise", "rail",
  "bus", "domestic travel", "international travel", "business travel", "vacation travel", "domestic hotels",
  "international hotels", "visa", "master card", "american express", "allahabad bank", "andhra bank",
  "bank of baroda", "bank of india", "bank of maharashtra", "canara bank", "central bank of india",
  "corporation bank", "dena bank", "indian bank", "indian overseas bank", "idbi bank",
  "oriental bank of commerce", "punjab and sind bank", "punjab national bank", "state bank of india",
  "syndicate bank", "uco bank", "union bank of india", "united bank of india", "vijaya bank", "jewellery",
  "architecture", "art techniques", "crafts & hobbies", "dance", "graphic design", "industrial design",
  "interior design", "digital art", "drawing", "mixed media art", "painting", "photography", "printmaking",
  "sculpture", "theater", "culture", "fiction", "non-fiction", "comic book/strips", "editorial cartoons",
  "magazines", "newspaper", "religious literature", "history", "accounting ", "administration ",
  "advertising & marketing ", "agriculture ", "automotive repair", "building & construction", "buyer business",
  "c-suite business", "creative business", "engineering business", "finance business", "government business",
  "human resource business", "information technology business", "legal ", "marketing ", "medical & health ",
  "manufacturing business", "nurse ", "non-profit business", "operations business", "public relations ",
  "package delivery business", "product business", "public relations business", "sales business",
  "scientist (business)", "small business (business)", "staffing and recruiting business",
  "consulting  (business)", "consumer services ", "economics ", "education ", "energy, utilities, & waste ",
  "finance ", "government ", "healthcare ", "hospitality ", "insurance ", "lawyers & legal services ",
  "manufacturing ", "media & entertainment ", "metals & mining ", "non profit ", "other ", "pharmaceuticles ",
  "real estate ", "retail ", "software ", "telecommunications ", "transportation ", "lottery",
  "online gambling games", "air force", "army", "coast guard", "marines", "merchant marines", "navy", "politics",
  "agnostic", "atheist", "baha'i", "baptist", "buddhism", "christianity", "confucianism", "hinduism", "islam",
  "jainism", "judaism", "mormon", "muslim", "rastafari", "shinto", "sikhism", "taoism", "wheeler", "wheeler"
];

var list = [];


//, "France", "Redoine Faid", "Paris", "dynamite", "American", "Vinod Kambli", "wife vinod kambali", "assault singer Ankit Tiwari father", "Mumbai mall", "rajendra tiwari fater ankit tiwari", "Peru", "Doctor", "hospitals", "families", "ailment", "Andes", "Amazon", "dainik Bhaskar", "Lima", "Andes Mountains", "Amazon River", "पेरू", "चिकित्सक", "अस्पतालों", "परिवारों", "रोग", "एंडीज", "वीरांगना", "दैनिक भास्कर", "लीमा", "एंडीज पर्वत", "अमेजन नदी,Preview", "Live", "news and updates", "Romelu Lukaku", "Brazil", "Mexico 2", "Belgium", "Uruguay", "Spain", "Germany", "Belgian", "World Cup", "Group F", "Group H", "पूर्वावलोकन", "जीना", "समाचार और अद्यतन", "ब्राज़िल", "मेक्सिको 2", "बेल्जियम", "उरुग्वे", "स्पेन", "जर्मनी", "बेल्जियाई", "विश्व कप", "ग्रुप एफ", "ग्रुप एच", "latest laptop", "laptop", "Dell Inspiron 15 3567", "Asus X541UA-XO561T", "Lenovo Ideapad 320 (80XG008MIN)", "HP 15q-BY003AU 2017", "Lenovo Ideapad 320E (80XH01QFIH)"


var keywords = ["two wheeler"];

function check(keyword) {
  categoryList.forEach(function (category) {
    var result = leven(keyword, category)

    if (result < 5) {
      console.log(result, category);
    }
  })
}

keywords.forEach(function (keyword) {
  console.log('========== checking for ', keyword, '==============');
  check(keyword);
});