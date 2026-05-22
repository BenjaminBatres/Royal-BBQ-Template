import BBQBurger from "../assets/Menu-Images/BBQ-Burger.jpg";
import BBQMac from "../assets/Menu-Images/BBQ-Mac.png";
import BBQBrisket from "../assets/Menu-Images/BBQ-Brisket.png";
import BBQBrisketSandwich from "../assets/Menu-Images/BBQ-BrisketSandwich.jpg";
import BBQTriTip from "../assets/Menu-Images/BBQ-Tri-Tip.jpg";
import BBQPorkSandwich from "../assets/Menu-Images/BBQ-PorkSandwich.jpg";
import BBQRibs from "../assets/Menu-Images/BBQ-Ribs.jpg";
import BBQWings from "../assets/Menu-Images/BBQ-Wings.jpg";
import BBQBakedPotato from "../assets/Menu-Images/BBQ-BakedPotato.jpg";
const bbqMenu = [
  {
    id: "bbq-burger",
    name: "BBQ Burger",
    price: "$9.50",
    rating: 4.5,
    image: BBQBurger,
    ingredients: [
      "beef patty",
      "smoked cheddar",
      "crispy onion rings",
      "bbq sauce",
      "lettuce",
      "brioche bun",
    ],
  },
  {
    id: "bbq-mac",
    name: "BBQ Mac",
    price: "$5.00",
    rating: 4.3,
    image: BBQMac,
    ingredients: [
      "macaroni pasta",
      "cheddar cheese",
      "smoked brisket",
      "bbq drizzle",
      "green onions",
      "crispy breadcrumbs",
    ],
  },
  {
    id: "bbq-brisket",
    name: "BBQ Brisket",
    price: "$7.50",
    rating: 4.4,
    image: BBQBrisket,
    ingredients: [
      "slow smoked brisket",
      "house dry rub",
      "bbq glaze",
      "pickles",
      "coleslaw",
      "texas toast",
    ],
  },
  {
    id: "bbq-brisket-sandwich",
    name: "BBQ Brisket Sandwich",
    price: "$6.00",
    rating: 4.2,
    image: BBQBrisketSandwich,
    ingredients: [
      "sliced brisket",
      "bbq sauce",
      "pickled onions",
      "coleslaw",
      "brioche bun",
    ],
  },
  {
    id: "bbq-tri-tip",
    name: "BBQ Tri Tip",
    price: "$7.00",
    rating: 4,
    image: BBQTriTip,
    ingredients: [
      "tri tip steak",
      "garlic butter",
      "smoked seasoning",
      "grilled onions",
      "cornbread",
    ],
  },
  {
    id: "pulled-pork-sandwich",
    name: "Pulled Pork Sandwich",
    price: "$7.00",
    rating: 4.4,
    image: BBQPorkSandwich,
    ingredients: [
      "pulled pork",
      "bbq sauce",
      "coleslaw",
      "pickles",
      "potato bun",
    ],
  },
  {
    id: "bbq-ribs",
    name: "BBQ Ribs",
    price: "$5.50",
    rating: 4.7,
    image: BBQRibs,
    ingredients: [
      "pork ribs",
      "dry rub",
      "smoked glaze",
      "cornbread",
      "baked beans",
    ],
  },
  {
    id: "bbq-wings",
    name: "BBQ Wings",
    price: "$4.50",
    rating: 4.2,
    image: BBQWings,
    ingredients: [
      "smoked chicken wings",
      "bbq glaze",
      "garlic butter",
      "green onions",
      "ranch dip",
    ],
  },
  {
    id: "loaded-baked-potato",
    name: "Loaded Baked Potato",
    price: "$9.50",
    rating: 4.6,
    image: BBQBakedPotato,
    ingredients: [
      "baked potato",
      "brisket",
      "cheddar cheese",
      "sour cream",
      "green onions",
      "bbq sauce",
    ],
  },
];

export default bbqMenu