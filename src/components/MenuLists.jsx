import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCocktail,
  FaUtensils,
  FaWineGlassAlt,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaWineBottle,
  FaCoffee,
} from "react-icons/fa";
import { MdLocalDrink, MdOutlineRestaurant } from "react-icons/md";
import manestach from "../assets/images/home/divinebird2.png?url";
// Import your menu images
import foodMenu from "../assets/images/restorant/food-menu.jpg";
import drinkMenu from "../assets/images/restorant/drink-menu.webp";
import wineMenu from "../assets/images/restorant/wine-menu.webp";
import cocktailMenu from "../assets/images/restorant/cocktail-menu.jpg";

// fullitems list image
import onionSoupImg from "../assets/images/menulist/onion-soup.jpeg";
import goatCheeseImg from "../assets/images/menulist/goat-cheese.jpg";
import coqAuVinImg from "../assets/images/menulist/coq-au-vin.webp";
import beefBourguignonImg from "../assets/images/menulist/beef-bourguignon.jpeg";
import ratatouilleImg from "../assets/images/menulist/ratatouille.jpg";
import kirRoyalImg from "../assets/images/menulist/kir-royal.jpg";
import french75Img from "../assets/images/menulist/french-75.avif";
import sidecarImg from "../assets/images/menulist/sidecar.webp";
import pastisImg from "../assets/images/menulist/pastis.webp";
import bordeauxImg from "../assets/images/menulist/bordeaux.jpg";
import burgundyImg from "../assets/images/menulist/burgundy.jpeg";
import chablisImg from "../assets/images/menulist/chablis.webp";
import sancerreImg from "../assets/images/menulist/sancerre.jpg";
import cafeAuLaitImg from "../assets/images/menulist/cafe-au-lait.webp";
import espressoImg from "../assets/images/menulist/espresso.jpeg";
import oranginaImg from "../assets/images/menulist/orangina.jpg";
import eauPetillanteImg from "../assets/images/menulist/eau-petillante.jpg";
import { GiSodaCan } from "react-icons/gi";

const MenuLists = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    {
      id: "food",
      title: "Bucătărie de coastă",
      icon: <FaUtensils className="text-2xl" />,
      image: foodMenu,
      description: "Fructe de mare proaspete și preparate de inspirație mediteraneană",
      featuredItems: [
        "Aperitive: Tartar de ton, Caracatiță la grătar",
        "Feluri principale: Risotto cu homar, Biban de mare en papillote",
        "Deserturi: Cheesecake cu fructul pasiunii, Lava cake cu ciocolată",
      ],
      fullItems: [
        {
          name: "Soupe à l'Oignon",
          description:
            "O supă franțuzească de ceapă, bogată și consistentă, preparată cu ceapă caramelizată și supă de vită, servită cu pâine prăjită și brânză Gruyère topită. Perfectă pentru serile răcoroase.",
          icon: <FaUtensils />,
          image: onionSoupImg,
        },
        {
          name: "Salade de Chèvre Chaud",
          description:
            "O salată caldă cu brânză de capră: felii de pâine prăjită cu chèvre cremos, servite pe un pat de verdețuri, stropite cu miere sau vinegretă.",
          icon: <FaUtensils />,
          image: goatCheeseImg,
        },
        {
          name: "Coq au Vin",
          description:
            "Un preparat tradițional franțuzesc de pui gătit lent în vin roșu, cu ciuperci, usturoi, ceapă și ierburi aromatice: reconfortant, savuros și intens aromat.",
          icon: <FaUtensils />,
          image: coqAuVinImg,
        },
        {
          name: "Boeuf Bourguignon",
          description:
            "O tocăniță de vită gătită lent, originară din Burgundia, preparată cu vin roșu, bacon, ciuperci, morcovi și ceapă. Bogată și foarte sățioasă.",
          icon: <FaUtensils />,
          image: beefBourguignonImg,
        },
        {
          name: "Ratatouille",
          description:
            "Un amestec provensal de legume, cu dovlecei, vinete, ardei, roșii și ierburi aromatice: ușor, colorat și plin de arome proaspete de grădină.",
          icon: <FaUtensils />,
          image: ratatouilleImg,
        },
      ],
    },
    {
      id: "cocktails",
      title: "Cocktailuri de autor",
      icon: <FaCocktail className="text-2xl" />,
      image: cocktailMenu,
      description: "Create cu ingrediente locale și arome tropicale",
      featuredItems: [
        "LockOut Sunset: Rom, fructul pasiunii, lime, cocos",
        "Sea Breeze Martini: Gin, soc, castravete, sare de mare",
        "Golden Sands: Tequila, mango, chili, lime",
      ],
      fullItems: [
        {
          name: "Kir Royal",
          description:
            "O combinație rafinată de șampanie și crème de cassis — ușoară, spumoasă și elegantă fără efort.",
          icon: <FaCocktail />,
          image: kirRoyalImg,
        },
        {
          name: "French 75",
          description:
            "Un cocktail spumant cu gin, suc de lămâie, zahăr și șampanie. Proaspăt, citric și rafinat.",
          icon: <FaCocktail />,
          image: french75Img,
        },
        {
          name: "Sidecar",
          description:
            "Brandy, lichior de portocale și suc de lămâie, agitate la perfecție. Intens și echilibrat, cu o notă citrică.",
          icon: <FaCocktail />,
          image: sidecarImg,
        },
        {
          name: "Pastis",
          description:
            "Lichior cu aromă de anason, servit cu apă și gheață — răcoritor și inconfundabil franțuzesc.",
          icon: <FaCocktail />,
          image: pastisImg,
        },
      ],
    },
    {
      id: "wine",
      title: "Selecție de vinuri",
      icon: <FaWineGlassAlt className="text-2xl" />,
      image: wineMenu,
      description: "Vinuri internaționale și locale atent selecționate",
      featuredItems: [
        "Albe: Chablis, Sauvignon Blanc, Albariño",
        "Roșii: Malbec, Pinot Noir, Châteauneuf-du-Pape",
        "Spumante: Prosecco, Șampanie, Cava",
      ],
      fullItems: [
        {
          name: "Bordeaux",
          description:
            "Un cupaj de Merlot, Cabernet Sauvignon și Cabernet Franc; intens și bine structurat.",
          icon: <FaWineBottle />,
          image: bordeauxImg,
        },
        {
          name: "Burgundia (Pinot Noir)",
          description: "Elegant și teros, cu note de fructe roșii.",
          icon: <FaWineBottle />,
          image: burgundyImg,
        },
        {
          name: "Chablis (Burgundia)",
          description: "Chardonnay sec și proaspăt, cu note minerale.",
          icon: <FaWineBottle />,
          image: chablisImg,
        },
        {
          name: "Sancerre (Valea Loarei)",
          description: "Sauvignon Blanc vioi, cu tonuri citrice și ierboase.",
          icon: <FaWineBottle />,
          image: sancerreImg,
        },
      ],
    },
    {
      id: "drinks",
      title: "Băuturi",
      icon: <MdOutlineRestaurant className="text-2xl" />,
      image: drinkMenu,
      description: "Opțiuni răcoritoare fără alcool",
      featuredItems: [
        "Sucuri proaspete: Pepene roșu, Ananas, Portocale",
        "Mocktailuri de autor: Virgin Mojito, Berry Spritz",
        "Ceaiuri și cafele premium",
      ],
      fullItems: [
        {
          name: "Café au Lait",
          description:
            "O băutură clasică franțuzească din cafea tare și lapte spumat în părți egale. Fină, reconfortantă și savurată de obicei la micul dejun.",
          icon: <FaCoffee />,
          image: cafeAuLaitImg,
        },
        {
          name: "Espresso",
          description:
            "O cafea intensă și concentrată, servită în ceașcă mică. Nelipsită din cafenelele franțuzești — tare, bogată și perfectă pentru un plus rapid de energie.",
          icon: <FaCoffee />,
          image: espressoImg,
        },
        {
          name: "Orangina",
          description:
            "O băutură carbogazoasă citrică, cu suc și pulpă de portocale. Ușor dulce, cu un gust unic și o sticlă inconfundabilă în formă de pară.",
          icon: <GiSodaCan />,
          image: oranginaImg,
        },
        {
          name: "Eau Pétillante",
          description:
            "Apă minerală carbogazoasă franțuzească — proaspătă, răcoritoare și servită adesea în restaurante ca alternativă la apa plată.",
          icon: <MdLocalDrink />,
          image: eauPetillanteImg,
        },
      ],
    },
  ];

  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const openFullMenu = (menu) => {
    setSelectedMenu(menu);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
  };
  return (
    <section id="our-menus" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-8 font-serif text-[#ff2709]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Meniurile noastre
      </motion.h2>
      <div className="flex flex-col items-center justify-center mb-16">
        <motion.img
          variants={scaleUp}
          src={"/logo3.png"}
          alt="Element decorativ Divine Kitchen"
          className="mx-auto h-20 w-auto opacity-80"
        />

        <motion.p
          variants={fadeIn}
          className="mt-4 text-gray-600 italic tracking-wider font-semibold uppercase text-2xl"
        >
          „Unde fiecare preparat spune o poveste”
        </motion.p>
      </div>
      <div className="space-y-6">
        {menuItems.map((menu) => (
          <motion.div
            key={menu.id}
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className={`p-6 flex items-center justify-between cursor-pointer transition-colors ${
                activeMenu === menu.id
                  ? "bg-[#ff2709] text-white"
                  : "bg-white text-[#000]"
              }`}
              onClick={() => toggleMenu(menu.id)}
            >
              <div className="flex items-center">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    activeMenu === menu.id
                      ? "bg-white text-[#ff2709]"
                      : "bg-[#ffaa13] text-white"
                  }`}
                >
                  {menu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{menu.title}</h3>
                  <p
                    className={
                      activeMenu === menu.id ? "text-white/90" : "text-gray-600"
                    }
                  >
                    {menu.description}
                  </p>
                </div>
              </div>
              {activeMenu === menu.id ? (
                <FaChevronUp className="text-xl" />
              ) : (
                <FaChevronDown className="text-xl" />
              )}
            </div>

            {activeMenu === menu.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[#f8f8f8] overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 p-6">
                  <div>
                    <img
                      src={menu.image}
                      alt={menu.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#ff2709] mb-4">
                      Preparate recomandate
                    </h4>
                    <ul className="space-y-3">
                      {menu.featuredItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="block w-2 h-2 bg-[#ffaa13] rounded-full mt-2 mr-3"></span>
                          <span className="text-[#000]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => openFullMenu(menu)}
                      className="mt-6 bg-[#ff2709] hover:bg-[#ff3709] text-white py-2 px-6 rounded-full text-sm transition-colors shadow-md cursor-pointer"
                    >
                      Vezi meniul complet
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Full Menu Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMenu && (
          <motion.div
            className="fixed inset-0 bg-black/60 opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-[#ff2709]">
                    {selectedMenu.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-[#ff2709]"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                <div className="space-y-8">
                  {selectedMenu.fullItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-6 p-4 border-b border-gray-100 last:border-0"
                    >
                      {/* Image or Icon Container */}
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                          />
                        ) : (
                          <div className="bg-[#ffaa13] text-white p-8 rounded-lg flex items-center justify-center h-48">
                            {item.icon || (
                              <MdOutlineRestaurant className="text-4xl" />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-[#000] mb-2">
                          {item.name}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={closeModal}
                    className="bg-[#ff2709] hover:bg-[#ff3709] text-white py-3 px-8 rounded-full text-sm transition-colors shadow-md"
                  >
                    Închide meniul
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuLists;
