import React, { useState, useEffect } from "react";
import { faAngleDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = () => {
  const [productCount, setProductCount] = useState(8);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [buttonDisable, setButtonDisable] = useState(false);

  const availableProducts = [
    {
      brand: "ceat",
      brandLogo:
        "https://phdessay.com/wp-content/uploads/2017/02/1200px-Apollo_Tyres_logo.svg_-1024x365.png",
      name: "AMAZER 4G LIFE",
      version: "155/65 R13",
      rating: "4",
      reviews: "321 Reviews",
      price: 3401,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "apollo",
      brandLogo:
        "https://phdessay.com/wp-content/uploads/2017/02/1200px-Apollo_Tyres_logo.svg_-1024x365.png",
      name: "AMAZER 4G LIFE",
      version: "155/60 R13",
      rating: "4",
      reviews: "321 Reviews",
      price: 2401,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "apollo",
      brandLogo:
        "https://phdessay.com/wp-content/uploads/2017/02/1200px-Apollo_Tyres_logo.svg_-1024x365.png",
      name: "AMAZER 4G LIFE",
      version: "155/70 R13",
      rating: "4",
      reviews: "321 Reviews",
      price: 2801,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "apollo",
      brandLogo:
        "https://phdessay.com/wp-content/uploads/2017/02/1200px-Apollo_Tyres_logo.svg_-1024x365.png",
      name: "AMAZER 4G LIFE",
      version: "155/75 R13",
      rating: "4",
      reviews: "321 Reviews",
      price: 2201,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "apollo",
      brandLogo:
        "https://phdessay.com/wp-content/uploads/2017/02/1200px-Apollo_Tyres_logo.svg_-1024x365.png",
      name: "AMAZER 4G LIFE",
      version: "155/65 R13",
      rating: "4",
      reviews: "321 Reviews",
      price: 4401,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "apollo",
      brandLogo:
        "https://phdessay.com/wp-content/uploads/2017/02/1200px-Apollo_Tyres_logo.svg_-1024x365.png",
      name: "AMAZER 4G LIFE",
      version: "155/60 R13",
      rating: "4",
      reviews: "321 Reviews",
      price: 3801,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "apollo",
      brandLogo:
        "https://phdessay.com/wp-content/uploads/2017/02/1200px-Apollo_Tyres_logo.svg_-1024x365.png",
      name: "AMAZER 4G LIFE",
      version: "155/70 R13",
      rating: "4",
      reviews: "321 Reviews",
      price: 2200,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "apollo",
      brandLogo:
        "https://phdessay.com/wp-content/uploads/2017/02/1200px-Apollo_Tyres_logo.svg_-1024x365.png",
      name: "AMAZER 4G LIFE",
      version: "155/75 R13",
      rating: "4",
      reviews: "321 Reviews",
      price: 3000,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "mrf",
      brandLogo:
        "https://www.pngitem.com/pimgs/m/218-2189796_mrf-tyre-logo-png-transparent-png.png",
      name: "NYLOGRIP ZAPPER",
      version: "120/70-14",
      rating: "4",
      reviews: "175 Reviews",
      price: 1759,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "mrf",
      brandLogo:
        "https://www.pngitem.com/pimgs/m/218-2189796_mrf-tyre-logo-png-transparent-png.png",
      name: "NYLOGRIP ZAPPER",
      version: "120/60-14",
      rating: "4",
      reviews: "175 Reviews",
      price: 2759,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "mrf",
      brandLogo:
        "https://www.pngitem.com/pimgs/m/218-2189796_mrf-tyre-logo-png-transparent-png.png",
      name: "NYLOGRIP ZAPPER",
      version: "120/65-14",
      rating: "4",
      reviews: "175 Reviews",
      price: 2259,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "mrf",
      brandLogo:
        "https://www.pngitem.com/pimgs/m/218-2189796_mrf-tyre-logo-png-transparent-png.png",
      name: "NYLOGRIP ZAPPER",
      version: "120/75-14",
      rating: "4",
      reviews: "175 Reviews",
      price: 3459,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "mrf",
      brandLogo:
        "https://www.pngitem.com/pimgs/m/218-2189796_mrf-tyre-logo-png-transparent-png.png",
      name: "NYLOGRIP ZAPPER",
      version: "120/70-14",
      rating: "4",
      reviews: "175 Reviews",
      price: 3559,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "mrf",
      brandLogo:
        "https://www.pngitem.com/pimgs/m/218-2189796_mrf-tyre-logo-png-transparent-png.png",
      name: "NYLOGRIP ZAPPER",
      version: "120/60-14",
      rating: "4",
      reviews: "175 Reviews",
      price: 3159,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "mrf",
      brandLogo:
        "https://www.pngitem.com/pimgs/m/218-2189796_mrf-tyre-logo-png-transparent-png.png",
      name: "NYLOGRIP ZAPPER",
      version: "120/65-14",
      rating: "4",
      reviews: "175 Reviews",
      price: 2959,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "mrf",
      brandLogo:
        "https://www.pngitem.com/pimgs/m/218-2189796_mrf-tyre-logo-png-transparent-png.png",
      name: "NYLOGRIP ZAPPER",
      version: "120/75-14",
      rating: "4",
      reviews: "175 Reviews",
      price: 2159,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "bridgestone",
      brandLogo:
        "https://th.bing.com/th/id/R.419bb0cbbf6a2da7ba6bb6923b3179f5?rik=oLqbq%2f4PVYg7qQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fbridgestone-logo-10.jpg&ehk=zse%2fZBTeGY6B%2fbUKwtUbEZ%2fBamf7M0OYToho0A5kpXE%3d&risl=&pid=ImgRaw&r=0",
      name: "B290",
      version: "165/65 R14",
      rating: "4.1",
      reviews: "207 Reviews",
      price: 5226,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "bridgestone",
      brandLogo:
        "https://th.bing.com/th/id/R.419bb0cbbf6a2da7ba6bb6923b3179f5?rik=oLqbq%2f4PVYg7qQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fbridgestone-logo-10.jpg&ehk=zse%2fZBTeGY6B%2fbUKwtUbEZ%2fBamf7M0OYToho0A5kpXE%3d&risl=&pid=ImgRaw&r=0",
      name: "B290",
      version: "165/60 R14",
      rating: "4.1",
      reviews: "188 Reviews",
      price: 4826,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "bridgestone",
      brandLogo:
        "https://th.bing.com/th/id/R.419bb0cbbf6a2da7ba6bb6923b3179f5?rik=oLqbq%2f4PVYg7qQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fbridgestone-logo-10.jpg&ehk=zse%2fZBTeGY6B%2fbUKwtUbEZ%2fBamf7M0OYToho0A5kpXE%3d&risl=&pid=ImgRaw&r=0",
      name: "B290",
      version: "165/70 R14",
      rating: "4.1",
      reviews: "288 Reviews",
      price: 3826,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "bridgestone",
      brandLogo:
        "https://th.bing.com/th/id/R.419bb0cbbf6a2da7ba6bb6923b3179f5?rik=oLqbq%2f4PVYg7qQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fbridgestone-logo-10.jpg&ehk=zse%2fZBTeGY6B%2fbUKwtUbEZ%2fBamf7M0OYToho0A5kpXE%3d&risl=&pid=ImgRaw&r=0",
      name: "B290",
      version: "165/75 R14",
      rating: "4.1",
      reviews: "588 Reviews",
      price: 5826,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "bridgestone",
      brandLogo:
        "https://th.bing.com/th/id/R.419bb0cbbf6a2da7ba6bb6923b3179f5?rik=oLqbq%2f4PVYg7qQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fbridgestone-logo-10.jpg&ehk=zse%2fZBTeGY6B%2fbUKwtUbEZ%2fBamf7M0OYToho0A5kpXE%3d&risl=&pid=ImgRaw&r=0",
      name: "B290",
      version: "165/65 R14",
      rating: "4.1",
      reviews: "207 Reviews",
      price: 5226,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "bridgestone",
      brandLogo:
        "https://th.bing.com/th/id/R.419bb0cbbf6a2da7ba6bb6923b3179f5?rik=oLqbq%2f4PVYg7qQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fbridgestone-logo-10.jpg&ehk=zse%2fZBTeGY6B%2fbUKwtUbEZ%2fBamf7M0OYToho0A5kpXE%3d&risl=&pid=ImgRaw&r=0",
      name: "B290",
      version: "165/60 R14",
      rating: "4.1",
      reviews: "188 Reviews",
      price: 4826,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "bridgestone",
      brandLogo:
        "https://th.bing.com/th/id/R.419bb0cbbf6a2da7ba6bb6923b3179f5?rik=oLqbq%2f4PVYg7qQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fbridgestone-logo-10.jpg&ehk=zse%2fZBTeGY6B%2fbUKwtUbEZ%2fBamf7M0OYToho0A5kpXE%3d&risl=&pid=ImgRaw&r=0",
      name: "B290",
      version: "165/70 R14",
      rating: "4.1",
      reviews: "288 Reviews",
      price: 3826,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "bridgestone",
      brandLogo:
        "https://th.bing.com/th/id/R.419bb0cbbf6a2da7ba6bb6923b3179f5?rik=oLqbq%2f4PVYg7qQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fbridgestone-logo-10.jpg&ehk=zse%2fZBTeGY6B%2fbUKwtUbEZ%2fBamf7M0OYToho0A5kpXE%3d&risl=&pid=ImgRaw&r=0",
      name: "B290",
      version: "165/75 R14",
      rating: "4.1",
      reviews: "588 Reviews",
      price: 5826,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "pirelli",
      brandLogo:
        "https://th.bing.com/th/id/OIP.iZHJCyVrmSnaP741zJko8QHaBu?rs=1&pid=ImgDetMain",
      name: "ANGEL CITY",
      version: "80/90-17",
      rating: "4.3",
      reviews: "24 Reviews",
      price: 2501,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "pirelli",
      brandLogo:
        "https://th.bing.com/th/id/OIP.iZHJCyVrmSnaP741zJko8QHaBu?rs=1&pid=ImgDetMain",
      name: "ANGEL CITY",
      version: "80/80-17",
      rating: "4.3",
      reviews: "204 Reviews",
      price: 4501,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "pirelli",
      brandLogo:
        "https://th.bing.com/th/id/OIP.iZHJCyVrmSnaP741zJko8QHaBu?rs=1&pid=ImgDetMain",
      name: "ANGEL CITY",
      version: "80/70-17",
      rating: "4.3",
      reviews: "299 Reviews",
      price: 3000,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "pirelli",
      brandLogo:
        "https://th.bing.com/th/id/OIP.iZHJCyVrmSnaP741zJko8QHaBu?rs=1&pid=ImgDetMain",
      name: "ANGEL CITY",
      version: "80/60-17",
      rating: "4.3",
      reviews: "299 Reviews",
      price: 2899,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "pirelli",
      brandLogo:
        "https://th.bing.com/th/id/OIP.iZHJCyVrmSnaP741zJko8QHaBu?rs=1&pid=ImgDetMain",
      name: "ANGEL CITY",
      version: "80/90-17",
      rating: "4.3",
      reviews: "24 Reviews",
      price: 2501,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "pirelli",
      brandLogo:
        "https://th.bing.com/th/id/OIP.iZHJCyVrmSnaP741zJko8QHaBu?rs=1&pid=ImgDetMain",
      name: "ANGEL CITY",
      version: "80/80-17",
      rating: "4.3",
      reviews: "204 Reviews",
      price: 4501,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "pirelli",
      brandLogo:
        "https://th.bing.com/th/id/OIP.iZHJCyVrmSnaP741zJko8QHaBu?rs=1&pid=ImgDetMain",
      name: "ANGEL CITY",
      version: "80/70-17",
      rating: "4.3",
      reviews: "299 Reviews",
      price: 3000,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "pirelli",
      brandLogo:
        "https://th.bing.com/th/id/OIP.iZHJCyVrmSnaP741zJko8QHaBu?rs=1&pid=ImgDetMain",
      name: "ANGEL CITY",
      version: "80/60-17",
      rating: "4.3",
      reviews: "299 Reviews",
      price: 2899,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "firestone",
      brandLogo:
        "https://www.logolynx.com/images/logolynx/a0/a0e8ae0420e38e30f67c0dac2db26b06.jpeg",
      name: "FS100",
      version: "145/70 R13",
      rating: "4.2",
      reviews: "17 Reviews",
      price: 2960,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "firestone",
      brandLogo:
        "https://www.logolynx.com/images/logolynx/a0/a0e8ae0420e38e30f67c0dac2db26b06.jpeg",
      name: "FS100",
      version: "145/60 R13",
      rating: "4.2",
      reviews: "90 Reviews",
      price: 2460,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "firestone",
      brandLogo:
        "https://www.logolynx.com/images/logolynx/a0/a0e8ae0420e38e30f67c0dac2db26b06.jpeg",
      name: "FS100",
      version: "145/65 R13",
      rating: "4.2",
      reviews: "50 Reviews",
      price: 3460,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "firestone",
      brandLogo:
        "https://www.logolynx.com/images/logolynx/a0/a0e8ae0420e38e30f67c0dac2db26b06.jpeg",
      name: "FS100",
      version: "145/65 R13",
      rating: "4.2",
      reviews: "150 Reviews",
      price: 3960,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "firestone",
      brandLogo:
        "https://www.logolynx.com/images/logolynx/a0/a0e8ae0420e38e30f67c0dac2db26b06.jpeg",
      name: "FS100",
      version: "145/70 R13",
      rating: "4.2",
      reviews: "17 Reviews",
      price: 2960,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "firestone",
      brandLogo:
        "https://www.logolynx.com/images/logolynx/a0/a0e8ae0420e38e30f67c0dac2db26b06.jpeg",
      name: "FS100",
      version: "145/60 R13",
      rating: "4.2",
      reviews: "90 Reviews",
      price: 2460,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "firestone",
      brandLogo:
        "https://www.logolynx.com/images/logolynx/a0/a0e8ae0420e38e30f67c0dac2db26b06.jpeg",
      name: "FS100",
      version: "145/65 R13",
      rating: "4.2",
      reviews: "50 Reviews",
      price: 3460,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "firestone",
      brandLogo:
        "https://www.logolynx.com/images/logolynx/a0/a0e8ae0420e38e30f67c0dac2db26b06.jpeg",
      name: "FS100",
      version: "145/65 R13",
      rating: "4.2",
      reviews: "150 Reviews",
      price: 3960,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ralson",
      brandLogo:
        "https://marketplace.b2btyres.com/wp-content/uploads/2019/07/RALSON.png",
      name: "BLASTER PRO",
      version: "100/90-17",
      rating: "2.9",
      reviews: "10 Reviews",
      price: 1100,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ralson",
      brandLogo:
        "https://marketplace.b2btyres.com/wp-content/uploads/2019/07/RALSON.png",
      name: "BLASTER PRO",
      version: "100/80-17",
      rating: "2.9",
      reviews: "5 Reviews",
      price: 1500,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ralson",
      brandLogo:
        "https://marketplace.b2btyres.com/wp-content/uploads/2019/07/RALSON.png",
      name: "BLASTER PRO",
      version: "100/70-17",
      rating: "2.9",
      reviews: "8 Reviews",
      price: 1220,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ralson",
      brandLogo:
        "https://marketplace.b2btyres.com/wp-content/uploads/2019/07/RALSON.png",
      name: "BLASTER PRO",
      version: "100/60-17",
      rating: "2.9",
      reviews: "3 Reviews",
      price: 999,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ralson",
      brandLogo:
        "https://marketplace.b2btyres.com/wp-content/uploads/2019/07/RALSON.png",
      name: "BLASTER PRO",
      version: "100/90-17",
      rating: "2.9",
      reviews: "10 Reviews",
      price: 1100,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ralson",
      brandLogo:
        "https://marketplace.b2btyres.com/wp-content/uploads/2019/07/RALSON.png",
      name: "BLASTER PRO",
      version: "100/80-17",
      rating: "2.9",
      reviews: "5 Reviews",
      price: 1500,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ralson",
      brandLogo:
        "https://marketplace.b2btyres.com/wp-content/uploads/2019/07/RALSON.png",
      name: "BLASTER PRO",
      version: "100/70-17",
      rating: "2.9",
      reviews: "8 Reviews",
      price: 1220,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ralson",
      brandLogo:
        "https://marketplace.b2btyres.com/wp-content/uploads/2019/07/RALSON.png",
      name: "BLASTER PRO",
      version: "100/60-17",
      rating: "2.9",
      reviews: "3 Reviews",
      price: 999,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ceat",
      brandLogo:
        "https://www.carlogos.org/tire-brands-logos/CEAT-Tyre-logo-640x189.jpg",
      name: "MILAZE X3",
      version: "145/70 R12",
      rating: "3.9",
      reviews: "270 Reviews",
      price: 2690,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ceat",
      brandLogo:
        "https://www.carlogos.org/tire-brands-logos/CEAT-Tyre-logo-640x189.jpg",
      name: "MILAZE X3",
      version: "145/60 R12",
      rating: "3.9",
      reviews: "210 Reviews",
      price: 2190,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ceat",
      brandLogo:
        "https://www.carlogos.org/tire-brands-logos/CEAT-Tyre-logo-640x189.jpg",
      name: "MILAZE X3",
      version: "145/65 R12",
      rating: "3.9",
      reviews: "110 Reviews",
      price: 3190,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ceat",
      brandLogo:
        "https://www.carlogos.org/tire-brands-logos/CEAT-Tyre-logo-640x189.jpg",
      name: "MILAZE X3",
      version: "145/75 R12",
      rating: "3.9",
      reviews: "60 Reviews",
      price: 1190,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ceat",
      brandLogo:
        "https://www.carlogos.org/tire-brands-logos/CEAT-Tyre-logo-640x189.jpg",
      name: "MILAZE X3",
      version: "145/70 R12",
      rating: "3.9",
      reviews: "270 Reviews",
      price: 2690,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ceat",
      brandLogo:
        "https://www.carlogos.org/tire-brands-logos/CEAT-Tyre-logo-640x189.jpg",
      name: "MILAZE X3",
      version: "145/60 R12",
      rating: "3.9",
      reviews: "210 Reviews",
      price: 2190,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ceat",
      brandLogo:
        "https://www.carlogos.org/tire-brands-logos/CEAT-Tyre-logo-640x189.jpg",
      name: "MILAZE X3",
      version: "145/65 R12",
      rating: "3.9",
      reviews: "110 Reviews",
      price: 3190,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
    {
      brand: "ceat",
      brandLogo:
        "https://www.carlogos.org/tire-brands-logos/CEAT-Tyre-logo-640x189.jpg",
      name: "MILAZE X3",
      version: "145/75 R12",
      rating: "3.9",
      reviews: "60 Reviews",
      price: 1190,
      offer: "Offer Available",
      feature: "Tubeless",
      image:
        "https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services",
    },
  ];

  let prods = [];

  const showMoreProducts = () => {
    if (displayedProducts.length == prods.length) {
      window.alert("This is the end of Product list!");
      return;
    }
    setProductCount(productCount + 8); // setting product count
    if (productCount == prods.length) {
      setButtonDisable(true);
    }
  };

  const handleSort = (event) => {
    // console.log(event.target.value)
    if (event.target.value == "lth") {
      prods = availableProducts.sort((a, b) => a.price - b.price);
      displayProds(prods);
    } else {
      prods = availableProducts.sort((a, b) => b.price - a.price);
      displayProds(prods);
    }
  };

  const handleFilter = (event) => {
    setButtonDisable(true);
    if (event.target.value !== "") {
      setDisplayedProducts(() => {
        return prods=availableProducts.filter(
          (product) => product.brand === event.target.value
        );
      });
    } else {
      setDisplayedProducts([]);
      displayProds(availableProducts);
    }
  };

  const displayProds = (prods) => {
    setDisplayedProducts(() => {
      return prods.slice(0, productCount);
    });
  };

  // Showing products on page load
  useEffect(() => {
    if(prods.length==0){
        displayProds(availableProducts);
    } else {
        displayProds(prods);
    }
  }, [productCount]); // running useEffect on change of product count

  return (
    <div className="w-11/12 m-auto">
      <div className="sm:flex sm:items-end sm:justify-between">
        <h2 className="font-bold text-lg mt-8 mb-4 sm:text-xl lg:text-2xl">
          Tyres sold by this Dealer
        </h2>
        <div className="flex gap-3">
          <select
            name="filter"
            id="filter"
            className="px-6 border py-3"
            onChange={handleFilter}
          >
            <option value="">Filter Brand</option>
            <option value="apollo">Apollo</option>
            <option value="mrf">MRF</option>
            <option value="bridgestone">Bridgestone</option>
            <option value="pirelli">Pirelli</option>
            <option value="firestone">Firestone</option>
            <option value="ralson">Ralson</option>
            <option value="ceat">CEAT</option>
          </select>
          <select
            name="sort"
            id="sort"
            className="px-6 border py-3"
            onChange={handleSort}
          >
            <option value="">Sort by price</option>
            <option value="htl">High to low</option>
            <option value="lth">Low to high</option>
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {displayedProducts.map((el, index) => (
          <div key={index} className="shadow-lg flex justify-between px-2 py-4 relative overflow-hidden">
            <div>
              <div>
                <img src={el.brandLogo} alt="brand logo" className="w-20" />
              </div>
              <h3 className="mt-3 mb-1">{el.name}</h3>
              <p className="text-gray-600 m-0">{el.version}</p>
              <div className="flex items-end gap-3">
                <div className="bg-green-700 px-1 py-[1px] rounded-md flex gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-white w-4" />
                  <span className="text-sm text-white">{el.rating}</span>
                </div>
                <p>{el.reviews}</p>
              </div>
              <p className="text-2xl">₹ {el.price}</p>
              <p cla>{el.offer}</p>
              <p cla>feature</p>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex gap-1 bg-orange-200 px-2">
                  <span>
                    <img
                      src="https://cdn.tyreplex.net/themes/moonlight/images/warranty-tag-2x.png?v=2850&tr=q-60"
                      alt="warranty"
                      className="w-4"
                    />
                  </span>
                  <span className="text-sm">5 Year Warranty</span>
                </div>
                <img
                  src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-250,q-60"
                  alt=""
                  className="block w-52 absolute right-[-70px] top-24"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6 hover:cursor-not-allowed">
        <button
          onClick={showMoreProducts}
          className="border py-3 px-6 mt-4"
          disabled={buttonDisable}
        >
          Show More{" "}
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
