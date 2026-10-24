import React from "react";
import { motion } from "framer-motion";
import {
  FaRegClock,
  FaMapMarkerAlt,
  FaPhone,
  FaUtensils,
  FaWineGlassAlt,
  FaWineBottle,
  FaCoffee,
  FaBirthdayCake,
  FaLeaf,
} from "react-icons/fa";
import cafeImage from "../../assets/images/restorant/cafe.jpg?url";
import breakfast from "../../assets/images/restorant/morning.webp?url";
import lunch from "../../assets/images/restorant/lanch.webp?url";
import evening from "../../assets/images/restorant/afternoon.webp?url";
import Wine from "../../assets/images/restorant/wine.webp?url";
import coffee from "../../assets/images/restorant/coffee.jpg?url";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const AboutCafeBeatch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="flex flex-col md:flex-row md:min-h-screen">
        <motion.div
          className="w-full md:w-1/2 h-80 sm:h-96 md:h-auto relative overflow-hidden order-1 md:order-2"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <img
            src={cafeImage}
            alt="Restaurantul Divine Kitchen"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 md:bg-gradient-to-l md:from-black md:to-transparent"></div>

          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={() => {
                const section = document.querySelector("#footer");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rezervă acum
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 bg-white order-2 md:order-1"
          initial="hidden"
          animate="show"
          variants={slideInFromLeft}
        >
          <div className="max-w-md mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-amber-600 mb-6 font-serif"
              variants={item}
            >
              Cafe Beach
            </motion.h1>
            <motion.p
              className="text-3xl md:text-4xl text-primary font-lobster leading-tight tracking-widest font-semibold italic mb-8"
              variants={item}
            >
              Un refugiu îndrăgit la malul mării
            </motion.p>

            <motion.div
              className="space-y-6 text-gray-700 mb-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.p variants={item}>
                Divine Kitchen celebrează o experiență culinară relaxată și
                liberă, așezată perfect de-a lungul coastei. Aici, priveliștile
                uimitoare asupra mării întâlnesc o atmosferă calmă și
                primitoare.
              </motion.p>

              <motion.p variants={item}>
                Îmbinând un farmec vibrant cu senzația unui refugiu liniștit,
                Divine Kitchen oferă mai mult decât o simplă masă;{" "}
                <span className="italic text-amber-600 font-medium">
                  „o lume aparte”
                </span>{" "}
                în inima plajei.
              </motion.p>

              <motion.div
                className="flex items-center text-amber-800"
                variants={item}
              >
                <FaMapMarkerAlt className="mr-2 text-amber-600" />
                <span>Ul. Hrvoja Macanovića 44A, 10000, Zagreb, Croatia</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:block text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => {
                  const section = document.querySelector("#footer");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rezervă acum
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-12"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div className="flex items-center" variants={item}>
                <FaRegClock className="text-amber-600 mr-2" />
                <span>12:00 - 23:00</span>
              </motion.div>
              <motion.div className="flex items-center" variants={item}>
                <FaUtensils className="text-amber-600 mr-2" />
                <span>Vedere la ocean</span>
              </motion.div>
              <motion.div className="flex items-center" variants={item}>
                <FaWineGlassAlt className="text-amber-600 mr-2" />
                <span>Asocieri cu vin</span>
              </motion.div>
              <motion.div className="flex items-center" variants={item}>
                <FaBirthdayCake className="text-amber-600 mr-2" />
                <span>Evenimente private</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={item}>
            <h2 className="text-3xl font-bold text-amber-600 mb-6 font-serif">
              Filosofia noastră
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                La Divine Kitchen, îmbinăm pasiunea pentru arta culinară cu
                angajamentul față de ingrediente proaspete, de sezon. Fiecare
                preparat este creat pentru a reflecta armonia dintre uscat și
                mare, inspirat de arome din întreaga lume și înrădăcinat în
                tehnici atemporale.
              </p>
              <p>
                Apreciat pentru ospitalitatea caldă și mesele de neuitat, Divine
                Kitchen a devenit locul preferat al celor care prețuiesc
                mâncarea excepțională într-o atmosferă primitoare.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-3xl font-bold text-amber-600 mb-6 font-serif">
              Experiențe culinare
            </h2>
            <div className="space-y-6">
              <motion.div
                className="border-l-4 border-amber-500 pl-4"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-medium text-amber-600">
                  Masa bucătarului-șef
                </h3>
                <p className="text-gray-700">
                  O călătorie culinară personalizată, cu preparate exclusive
                  alese de bucătarul nostru-șef.
                </p>
              </motion.div>
              <motion.div
                className="border-l-4 border-amber-500 pl-4"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-medium text-amber-600">
                  Cină la apus
                </h3>
                <p className="text-gray-700">
                  Savurați ora de aur cu locuri rezervate și priveliști
                  uimitoare — cadrul perfect pentru o seară relaxată.
                </p>
              </motion.div>
              <motion.div
                className="border-l-4 border-amber-500 pl-4"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-medium text-amber-600">
                  Evenimente private
                </h3>
                <p className="text-gray-700">
                  Meniuri personalizate, servicii atente și un cadru elegant
                  pentru cele mai memorabile ocazii ale dumneavoastră.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 overflow-x-clip"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-4xl font-bold text-amber-600 text-center mb-16 font-serif"
            variants={item}
          >
            Serviciile cafenelei noastre
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-amber-200 transform -translate-x-1/2 hidden md:block"></div>

            <motion.div
              className="space-y-12 md:space-y-24"
              variants={container}
            >
              <motion.div
                className="flex flex-col md:flex-row items-center"
                variants={item}
              >
                <motion.div
                  className="w-full md:w-1/2 py-6 md:pl-12 order-1 md:order-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaCoffee className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Dimineți fericite
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Începeți ziua cum se cuvine cu micul nostru dejun la
                      răsărit: produse de patiserie artizanale, ouă bio și
                      amestecuri de cafea de specialitate.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>07:00 - 11:00</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 md:pr-12 order-2 md:order-1"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      src={breakfast}
                      alt="Mic dejun"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center"
                variants={item}
              >
                <motion.div
                  className="w-full md:w-1/2 py-6 md:pr-12"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaUtensils className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Răgaz la prânz
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Prânzuri ușoare și băuturi răcoritoare, perfecte pentru o
                      pauză pe plajă. Savurați salatele, sandvișurile și
                      sucurile presate la rece ale casei.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>11:00 - 15:00</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 md:pl-12"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      src={lunch}
                      alt="Prânz"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center"
                variants={item}
              >
                <motion.div
                  className="w-full md:w-1/2 py-6 md:pl-12 order-1 md:order-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaWineGlassAlt className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Ora de aur
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Delicii de după-amiază cu selecția noastră de ceaiuri
                      premium, degustări de vin și platouri mici de împărțit, în
                      timp ce soarele apune peste ocean.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>15:00 - 18:00</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 md:pr-12 order-2 md:order-1"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      src={evening}
                      alt="Servire de seară"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center"
                variants={item}
              >
                <motion.div
                  className="w-full md:w-1/2 py-6 md:pr-12"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaWineBottle className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Cină sub clar de lună
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Cine intime, cu mese luminate de lumânări, specialitățile
                      bucătarului-șef și o listă bogată de vinuri, sub cerul
                      înstelat.
                    </p>
                    <div className="flex items-center text-amber-600">
                      <FaRegClock className="mr-2" />
                      <span>18:00 - 23:00</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 md:pl-12"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      src={Wine}
                      alt="Cină"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center md:bg-amber-50 rounded-2xl md:p-1"
                variants={item}
              >
                <motion.div
                  className="w-full md:w-1/2 py-6 md:p-6 order-1 md:order-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromLeft}
                >
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-amber-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <FaCoffee className="text-amber-600 text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-amber-800">
                        Cafeaua fără sfârșit
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Barul nostru de cafea și ceai, deschis 24/7, oferă boabe
                      dintr-o singură origine, frunze de ceai rare și metode
                      artizanale de preparare. Primiți biscotti din partea casei
                      la fiecare ceașcă.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        Ethiopian Yirgacheffe
                      </span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        Matcha de calitate ceremonială
                      </span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        Degustări de cold brew
                      </span>
                    </div>
                    <div className="flex items-center text-amber-600 mt-4">
                      <FaRegClock className="mr-2" />
                      <span className="font-medium">Disponibil oricând</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 md:p-6 order-2 md:order-1"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideInFromRight}
                >
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white relative">
                    <motion.img
                      src={coffee}
                      alt="Cafea și ceai"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <p className="text-white text-sm font-light">
                        „Aerul mării face ca espresso-ul nostru să fie mai
                        dulce” - Marco, Barista-șef
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-24 grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBirthdayCake className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Evenimente speciale
              </h3>
              <p className="text-gray-600">
                Organizați-vă sărbătorile cu pachetele noastre personalizabile
                pentru evenimente și echipe de servire dedicate.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Specialități de sezon
              </h3>
              <p className="text-gray-600">
                Meniu schimbat periodic, cu cele mai bune ingrediente de sezon
                și creații disponibile pentru o perioadă limitată.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                Clubul membrilor
              </h3>
              <p className="text-gray-600">
                Beneficii exclusive pentru membri, inclusiv rezervare prioritară
                și evenimente speciale de degustare.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-6 font-serif">
            Sunteți gata pentru călătoria culinară?
          </h3>
          <motion.button
            onClick={() => {
              const section = document.querySelector("#footer");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-16 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rezervați-vă masa
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCafeBeatch;
