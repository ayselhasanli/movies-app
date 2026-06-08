import adv1 from "../assets/images/adv-1.png";
import adv2 from "../assets/images/adv-2.png";
import adv3 from "../assets/images/adv-3.png";
import adv4 from "../assets/images/adv-4.png";

import com1 from "../assets/images/com-1.png";
import com2 from "../assets/images/com-2.png";
import com3 from "../assets/images/com-3.png";
import com4 from "../assets/images/com-4.png";

import dr1 from "../assets/images/dr-1.png";
import dr2 from "../assets/images/dr-2.png";
import dr3 from "../assets/images/dr-3.png";

export const categories = [
  {
    id: 1,
    name: "Action",
    images: [adv1, adv2, adv3, adv4],
  },
  {
    id: 2,
    name: "Adventure",
    images: [com1, com2, com3, com4],
  },
  {
    id: 3,
    name: "Comedy",
    images: [dr1, dr2, dr3, adv1],
  },
  {
    id: 4,
    name: "Drama",
    images: [adv3, dr2, com1, dr1],
  },
  {
    id: 5,
    name: "Horror",
    images: [dr3, com4, adv2, adv3],
  },
  {
    id: 6,
    name: "Sci-Fi",
    images: [adv4, com2, dr3, com3],
  },
];