// Every fact on this site comes from the client's own sources, captured 2026-10-28:
// lakesfloral.com (the Floranext store that takes payment), lakesfloralgiftandgarden.com
// (GoDaddy), and the Google Business Profile. See clients/lakes-floral-gift-and-garden/
// in the studio repo for the raw captures.

const STORE = "https://lakesfloral.com";

export const site = {
  name: "Lakes Floral Gift & Garden",
  shortName: "Lakes Floral",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://site-lakes-floral-gift-and-garden.vercel.app",
  founded: 1930,
  owners: "Blake and Kelly Roberts",
  tagline: "Delivering Smiles Since 1930",
  phone: { display: "(651) 464-2134", tel: "+16514642134" },
  address: {
    street: "508 Lake Street South",
    city: "Forest Lake",
    region: "MN",
    zip: "55025",
    lat: 45.273443,
    lng: -92.9843474,
  },
  maps: "https://maps.google.com/?cid=5567286636282813432",
  // Google Business Profile, captured 2026-10-28. Update the count when it moves.
  rating: { value: 4.9, count: 1089, url: "https://maps.google.com/?cid=5567286636282813432", capturedAt: "2026-10-28" },
  hours: [
    { days: "Monday – Friday", short: "Mon–Fri", open: "9:00 AM", close: "6:00 PM" },
    { days: "Saturday", short: "Sat", open: "9:00 AM", close: "4:00 PM" },
    { days: "Sunday", short: "Sun", open: "10:00 AM", close: "2:00 PM" },
  ],
  store: STORE,
  // The VIP list lives on the GoDaddy marketing form today. Swap when the domain moves.
  vipUrl: "https://lakesfloralgiftandgarden.com/vip",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/lakesfloral/" },
    { label: "Instagram", href: "https://www.instagram.com/lakesfloral/" },
    { label: "Pinterest", href: "https://www.pinterest.com/flfloral/" },
    { label: "X", href: "https://www.x.com/FLFloral/" },
  ],
} as const;

export const storeLinks = {
  home: `${STORE}/`,
  bestSellers: `${STORE}/flowers/best-sellers.html`,
  fall: `${STORE}/flowers/fall-flowers-1.html`,
  luxe: `${STORE}/flowers/luxe-collection.html`,
  roses: `${STORE}/flowers/roses.html`,
  flowers: `${STORE}/flowers.html`,
  occasions: `${STORE}/occasions.html`,
  birthday: `${STORE}/occasions/birthday-flowers.html`,
  anniversary: `${STORE}/occasions/anniversary.html`,
  getWell: `${STORE}/occasions/get-well.html`,
  newBaby: `${STORE}/occasions/new-baby.html`,
  thankYou: `${STORE}/occasions/thank-you-flowers-2.html`,
  everyday: `${STORE}/occasions/everyday.html`,
  thanksgiving: `${STORE}/occasions/thanksgiving-11-24.html`,
  sympathy: `${STORE}/sympathy-funeral-flowers.html`,
  sympathyService: `${STORE}/sympathy-funeral-flowers/funeral-flowers-service.html`,
  sympathyHome: `${STORE}/sympathy-funeral-flowers/funeral-flowers-home.html`,
  sympathyCasket: `${STORE}/sympathy-funeral-flowers/funeral-flowers-casket.html`,
  plants: `${STORE}/plants.html`,
  europeanGardens: `${STORE}/plants/european-gardens.html`,
  bloomingPlants: `${STORE}/plants/blooming-plants.html`,
  greenPlants: `${STORE}/plants/green-plants-1.html`,
  succulents: `${STORE}/plants/succulents.html`,
  gourmet: `${STORE}/gourmet-treats.html`,
  chocolates: `${STORE}/gourmet-treats/minnesota-made-chocolates.html`,
  giftCard: `${STORE}/gift-card.html`,
  subscription: `${STORE}/flower-subscription-flowers-on-repeat.html`,
  designersChoice: `${STORE}/designer-s-choice.html`,
  events: `${STORE}/events.html`,
  gardenCenter: `${STORE}/galleries/garden-center.html`,
  faq: `${STORE}/frequently-asked-questions`,
  contact: `${STORE}/contact/`,
};

export type Moment = { title: string; note: string; href: string; image: string; alt: string };

export const moments: Moment[] = [
  { title: "Birthday", note: "Same-day, 7 days a week", href: storeLinks.birthday, image: "/products/garden-party.webp", alt: "Garden Party arrangement of roses, snapdragons and hydrangea" },
  { title: "Sympathy", note: "For the service, the home, the casket or urn", href: storeLinks.sympathy, image: "/products/succulent-serenity.webp", alt: "Succulent Serenity — white roses, hydrangea and succulents" },
  { title: "Love & roses", note: "Dozens, half dozens, garden roses", href: storeLinks.roses, image: "/products/dozen-vibrant-roses-top-seller.webp", alt: "A dozen vibrant roses in a clear vase" },
  { title: "Fall flowers", note: "Sunflowers, pinecones, autumn tones", href: storeLinks.fall, image: "/products/luminous-autumn-fields.webp", alt: "Luminous Autumn Fields — sunflowers and orange roses with pinecones" },
  { title: "Plants & gardens", note: "European gardens, succulents, blooming plants", href: storeLinks.plants, image: "/products/european-garden-14-ceramic-container.webp", alt: "European garden planted in a 14-inch ceramic container" },
  { title: "Just because", note: "Designer's choice, subscriptions, gift cards", href: storeLinks.everyday, image: "/products/sunflower-sunshine.webp", alt: "Sunflower Sunshine arrangement" },
];

export type Product = { name: string; price: number; href: string; image: string };

// Live products and prices from lakesfloral.com, captured 2026-10-28.
export const pricesCapturedAt = "October 28, 2026";
const p = (name: string, price: number, slug: string): Product => ({
  name,
  price,
  href: `${STORE}/${slug}.html`,
  image: `/products/${slug}.webp`,
});

export const bestSellers: Product[] = [
  p("Dozen Vibrant Roses", 120, "dozen-vibrant-roses-top-seller"),
  p("Roses and Romance", 110, "roses-and-romance-top-seller"),
  p("Luminous Autumn Fields", 109, "luminous-autumn-fields"),
  p("Garden Party", 115, "garden-party"),
  p("Sunflower Sunshine", 59, "sunflower-sunshine"),
  p("Hydrangea Perfection", 79, "hydrangea-perfection"),
  p("Succulent Serenity", 95, "succulent-serenity"),
  p("Harvest Sunburst", 59, "harvest-sunburst"),
];

export const moreProducts: Product[] = [
  p("A Walk on the Wild Side", 159, "a-walk-on-the-wild-side"),
  p("Garden of Capri", 109, "garden-of-capri"),
  p("One Dozen Dashing Gerbera", 89, "one-dozen-dashing-gerbera"),
  p("Havana Nights", 89, "havana-nights"),
  p("Mango Tango", 99, "mango-tango"),
  p("Harvest Season", 79, "harvest-season"),
  p("Rosy Sunflowers", 75, "rosy-sunflowers"),
  p("Capri Love", 59, "capri-love"),
  p("Blossom", 55, "blossom"),
  p("Succulent Surprise", 95, "succulent-surprise"),
  p('European Garden 14" Ceramic Container', 130, "european-garden-14-ceramic-container"),
  p("Flower Subscription — Flowers on Repeat", 259, "flower-subscription-flowers-on-repeat"),
];

export const collections = [
  { title: "Best sellers", href: storeLinks.bestSellers },
  { title: "Luxe collection", href: storeLinks.luxe },
  { title: "Roses", href: storeLinks.roses },
  { title: "Fall flowers", href: storeLinks.fall },
  { title: "Thanksgiving", href: storeLinks.thanksgiving },
  { title: "Anniversary & romance", href: storeLinks.anniversary },
  { title: "Get well", href: storeLinks.getWell },
  { title: "New baby", href: storeLinks.newBaby },
  { title: "Thank you", href: storeLinks.thankYou },
  { title: "Blooming plants", href: storeLinks.bloomingPlants },
  { title: "Green plants", href: storeLinks.greenPlants },
  { title: "Succulents", href: storeLinks.succulents },
  { title: "Minnesota-made chocolates", href: storeLinks.chocolates },
  { title: "Fruit, bagels & treats", href: storeLinks.gourmet },
  { title: "Designer's choice", href: storeLinks.designersChoice },
  { title: "Gift cards", href: storeLinks.giftCard },
];

export type WorkshopDate = { label: string; weekday: string; date: string; time: string; iso: string; href: string };

// Winter DIY Container Event — $75 per person (lakesfloral.com/events.html and the flyer).
export const workshop = {
  title: "Winter DIY Container Nights",
  price: 75,
  // Verbatim from the product page, typo "instuction" corrected to "instruction".
  description:
    "Join us in our heated greenhouse to create your own container. Class includes a demonstration and step by step instruction, 12 inch outdoor container, spruce tips and seasonal accents. Clippers will be provided. Gloves will be available for purchase or feel free to bring your own.",
  refreshments:
    "Beverages and light snacks will be served. (You are also welcome to bring your own drink of choice)",
  checkoutNote: "Choose “Pickup” at checkout.",
  private:
    "Looking for a group outing? Ask us about booking a private spruce pot party for friends or co-workers! They can bring their own container. Prices will vary depending on container.",
  dates: [
    {
      label: "Saturday, November 14",
      weekday: "Sat",
      date: "Nov 14",
      time: "10:30 AM",
      iso: "2026-11-14T10:30:00-06:00",
      href: `${STORE}/winter-diy-container-event-saturday-november-14th-at10-30-am-choose-pickup-at-checkout.html`,
    },
    {
      label: "Wednesday, November 18",
      weekday: "Wed",
      date: "Nov 18",
      time: "6:00 PM",
      iso: "2026-11-18T18:00:00-06:00",
      href: `${STORE}/winter-diy-container-event-wednesday-november-18th-at6-00pm-choose-pickup-at-checkout.html`,
    },
    {
      label: "Thursday, November 19",
      weekday: "Thu",
      date: "Nov 19",
      time: "6:00 PM",
      iso: "2026-11-19T18:00:00-06:00",
      href: `${STORE}/winter-diy-container-event-thursday-november-19th-at6-00pm-choose-pickup-at-checkout.html`,
    },
  ] satisfies WorkshopDate[],
};

/** Dates still ahead, evaluated at build time and again in the browser. */
export const upcoming = (dates: WorkshopDate[], now = Date.now()) =>
  dates.filter((d) => new Date(d.iso).getTime() + 3 * 3600_000 > now);

export type Review = { name: string; text: string; source: "Google" | "lakesfloral.com"; when?: string };

// Verbatim. Google reviews are 5★ (captured 2026-10-28); lakesfloral.com publishes first names only.
export const reviews: Review[] = [
  {
    name: "Angela Naser",
    source: "Google",
    when: "July 2026",
    text: "I called in a panic to place funeral flowers the night before the service. They were so helpful and kind. They even had the owner deliver the arrangement so it would arrive on time for the service. The flowers were stunning! More importantly, I was blown away by the professionalism and generosity of the service received. If I could give more than 5 stars, I would. Absolutely amazing!!",
  },
  {
    name: "Toni Outland",
    source: "Google",
    when: "July 2026",
    text: "I love Lakes Floral, Gift, and Garden! I grew up in Forest Lake and now live in South Dakota. I have had them deliver flowers and gifts a number of times to my beloved family and friends back home. They always do a marvelous job. Their website is very easy to use and ordering is a breeze. When they didn't have the precise chocolates I ordered, I got a call within an hour to allow me to choose another option. Their prices are competitive and their customer service is top-notch. This is the Twin Cities floral delivery place you want to use.",
  },
  {
    name: "Madeline Alden",
    source: "Google",
    when: "August 2026",
    text: "I cannot say enough wonderful things about Lakes Floral! They created my bridal bouquet and bridesmaids’ bouquets, and they were absolutely stunning. From the very beginning, they took the time to help me design and select the perfect flowers.\n\nWhat stood out even more than their incredible talent was how kind, patient, and genuinely caring they were throughout the entire process. Even with a full schedule, they still made time to support me and made me feel like a priority. Their dedication and attention to detail truly exceeded my expectations.\n\nThe bouquets were even more beautiful than I imagined and were one of my favorite details from our wedding day. I would highly, highly recommend Lakes Floral to anyone looking for exceptional flowers and outstanding customer service. They are simply amazing!",
  },
  {
    name: "Clydena Benson",
    source: "Google",
    when: "February 2026",
    text: "I called and asked if they could deliver a flower arrangement to my sister for her birthday on a Sunday. It was the most BEAUTIFUL arrangement I have ever seen ! My sister is so tickled ! She could not remember the last time she ever received flowers . It had been years and years . She sent me the picture and they are absolutely GORGEOUS!!!! Thank you so very much for making her birthday so special! I live very far away from her and this florist allowed me to send her something so special for her birthday ! Thank you !",
  },
  {
    name: "Thomas",
    source: "Google",
    when: "February 2026",
    text: "Ordering from Lakes Floral was an absolute pleasure. Their website was incredibly easy to navigate, and the product descriptions were spot‑on—right down to the vivid colors of the arrangements. I ordered a dozen mixed red and pink roses, and they looked every bit as beautiful in person as they did online.\nCommunication throughout the process was excellent. I received timely updates, and the delivery itself was flawless. The delivery driver was very polite, and the flowers arrived extremely well protected. My wife loved them, and the bouquet truly brightened her day.\nBased on this experience, I will definitely use Lakes Floral again in the future. I highly recommend this vendor to anyone looking for stunning, professionally arranged flowers that are a joy to look at.",
  },
  {
    name: "Gayle",
    source: "lakesfloral.com",
    text: "We are from out of town…Minnesota and Georgia…ordered flowers this morning and a beautiful Spring arrangement was delivered by 3:00 …very satisfied and will order from Lakes Floral again! 5 stars for sure!",
  },
  {
    name: "Anne",
    source: "lakesfloral.com",
    text: "One of the most gorgeous arrangements I’ve ever received. Stunning. My mom ordered from out of state. Arrived wrapped beautifully and flowers were in perfect condition. Highly recommend!",
  },
  {
    name: "Marge",
    source: "lakesfloral.com",
    text: "The flowers for my husband’s celebration of life were amazing. The suggestions offered were very helpful.\nVery pleased!!",
  },
  {
    name: "Tiffany",
    source: "lakesfloral.com",
    text: "Just had 2 deliveries today 1 for my daughter, and one for myself!!! Such beautiful flowers and a beautiful arrangement. Super amazing! Plus my delivery driver was extremely nice!",
  },
];

// lakesfloral.com FAQ, "Where is the delivery area" — as published (duplicates removed).
export const deliveryCities = Array.from(
  new Set(
    "Forest Lake, Almelund, Andover, Anoka, Apple Valley, Arden Hills, Bald Eagle, Bayport, Blaine, Bloomington, Brooklyn Center, Brooklyn Park, Burnsville, Cedar, Champlain, Chanhassen, Chaska, Christmas Lake, Circle Pines, Columbia Heights, Coon Rapids, Corcoran, Cottage Grove, Crystal, Dayton, Deephaven, Dellwood, Eagan, Franconia, Eden Prairie, Edina, Excelsior, Falcon Heights, Fridley, Fort Snelling, Gem Lake, Golden Valley, Grant Township, Greenwood, Ham Lake, Hastings, Hamel, Highland Park, Hilltop, Hopkin, Independence, Inver Grove Heights, Lake Park, Lakeville, Landfall, Lauderdale, Lexington, Lilydale, Linwood, Long Lake, Mahtomedi, Marine on the St. Croix, Center City, Maple Plain, Maplewood, Medicine Lake, Mendota Heights, Minneapolis, Minnetonka, Minnetrista, Mound, Mounds View, Navarre, New Brighton, New Hope, Newport, North Oaks, North St. Paul, Oak Grove, Oak Park Heights, Oakdale, Orono, Osseo, Pine Springs, Prior Lake, Ramsey, Richfield, Robbinsdale, Shafer, Rosemount, Roseville, Shakopee, Shoreview, Shorewood, South St. Paul, Spring Lake Park, St. Anthony, St. Bonifacious, St. Francis, St. Louis Park, St. Paul, St. Paul Park, Stillwater, Sunfish Lake, Taylors Fall, Tonka Bay, Vadnais Heights, Victoria, Wayzata, White Bear Lake, Hugo, Willernie, Woodbury, Harris, North Branch, Scandia, Wyoming, Stacy, Chisago City, Columbus, Lindstrom, East Bethel, Plymouth, Maple Grove, Lino Lakes, Hazelton, Farmington".split(
      ", ",
    ),
  ),
);

export const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/workshops", label: "Workshops" },
  { href: "/greenhouse", label: "Greenhouse & Gifts" },
  { href: "/sympathy", label: "Sympathy" },
  { href: "/delivery", label: "Delivery" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Visit" },
];
