import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaUmbrellaBeach,
  FaUtensils,
  FaRegClock,
  FaMapMarkerAlt,
  FaCocktail,
} from "react-icons/fa";
import { GiSandsOfTime, GiWaveSurfer, GiSunset } from "react-icons/gi";
import { MdOutlineRestaurant, MdEventSeat } from "react-icons/md";

// Image imports (replace with your actual image paths)
import Restorant from "../../assets/images/restorant/restorent.jpg";
import sunsetSession from "../../assets/images/restorant/sunset-session.jpeg";
import beachDining from "../../assets/images/restorant/beach-dining.jpeg";
import vipCabana from "../../assets/images/restorant/vip-cabana.jpg";

import MenuLists from "../../components/MenuLists";

const LockOutBeach = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const experiences = [
    {
      id: "sunset",
      title: "Sesiuni la apus",
      icon: <GiSunset className="text-3xl" />,
      image: sunsetSession,
      description: "Muzică live în timp ce soarele se topește în orizont",
    },
    {
      id: "dining",
      title: "Dining pe malul mării",
      icon: <MdOutlineRestaurant className="text-3xl" />,
      image: beachDining,
      description: "Bucătărie gourmet cu picioarele în nisip",
    },
    {
      id: "vip",
      title: "Cabane VIP",
      icon: <MdEventSeat className="text-3xl" />,
      image: vipCabana,
      description: "Refugii private pe malul oceanului, cu servicii dedicate",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-amber-50">
      {/* Hero Section */}

      <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-4 text-black  p-8 md:p-12 bg-white">
        <div className="overflow-hidden rounded-lg md:order-1 order-2">
          <img
            src={Restorant}
            alt="Restaurant"
            className="w-full h-full object-cover bg-gray-100 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="max-w-md mx-auto text-center md:order-2 order-1 bg-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 font-serif text-amber-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            LockOut Beach
          </motion.h1>
          <motion.p
            className="text-3xl md:text-4xl text-primary font-lobster leading-tight tracking-widest font-semibold italic mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Experiența supremă de beach club
          </motion.p>

          <motion.div
            className="space-y-6 text-gray-700 leading-relaxed mb-10 text-left max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeIn}>
              LockOut Beach întruchipează spiritul vibrant al vieții de pe
              coastă, acolo unde nisipul auriu, starea bună și compania plăcută
              se întâlnesc. Cu priveliști uimitoare asupra oceanului și o
              atmosferă electrizantă, este destinația ideală pentru zile
              însorite și nopți de neuitat.
            </motion.p>
            <motion.p variants={fadeIn}>
              De la relaxarea la răsărit până la sesiunile de la apus, LockOut
              Beach este locul unde ritmul întâlnește relaxarea. Fie că savurați
              cocktailuri de autor la bar, dansați desculți pe seturi DJ live
              sau vă răsfățați cu preparate proaspete de la malul mării, fiecare
              moment este gândit pentru o fericire autentică pe coastă.
            </motion.p>
            <motion.p variants={fadeIn}>
              Îmbinând eleganța relaxată cu distracția plină de energie, LockOut
              Beach oferă o evadare revigorantă din cotidian, unde valurile
              întâlnesc minunea și fiecare experiență este o celebrare a vieții,
              a muzicii și a magiei țărmului.
            </motion.p>
            <br />
            <br />

            <motion.div
              className="flex items-center text-blue-900"
              variants={fadeIn}
            >
              <FaMapMarkerAlt className="mr-2 text-amber-500" />
              <span>Ul. Hrvoja Macanovića 44A, 10000, Zagreb, Croatia</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => {
                const section = document.querySelector("#footer");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Rezervă acum
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 mt-12"
            variants={staggerContainer}
          >
            {[
              {
                icon: <FaRegClock className="text-amber-500 mr-2" />,
                text: "10AM - 10PM",
              },
              {
                icon: <FaUmbrellaBeach className="text-amber-500 mr-2" />,
                text: "Paturi de plajă",
              },
              {
                icon: <FaCocktail className="text-amber-500 mr-2" />,
                text: "Cocktailuri",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5 text-amber-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                text: "Vedere la ocean",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                variants={fadeIn}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10">
              <motion.h2
                className="text-3xl font-bold text-amber-600 mb-6 font-serif"
                variants={fadeIn}
              >
                Povestea noastră
              </motion.h2>
              <motion.div
                className="space-y-6 text-gray-700"
                variants={staggerContainer}
              >
                <motion.p variants={fadeIn}>
                  LockOut Beach s-a născut dintr-un vis simplu, dar îndrăzneț:
                  crearea unui refugiu pe malul mării, unde luxul relaxat
                  întâlnește frumusețea sălbatică a mării. Ceea ce a început ca
                  o viziune a devenit o destinație îndrăgită, care îmbină stilul
                  natural cu sufletul vieții de pe coastă.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Construit pe pasiune, creativitate și o dragoste profundă
                  pentru stilul de viață de pe plajă, LockOut Beach a devenit
                  refugiul preferat al celor care caută mai mult decât o zi la
                  soare. De la cocktailurile preparate manual până la apusurile
                  noastre emblematice, fiecare detaliu este gândit pentru a vă
                  înnobila experiența.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Astăzi, suntem mândri să fim recunoscuți drept cel mai bun
                  beach club din regiune, locul unde se creează amintiri de
                  neuitat, val după val.
                </motion.p>
              </motion.div>
            </div>
            <div className="bg-amber-50 p-10 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    className="bg-white p-4 rounded-lg shadow-md h-32 flex items-center justify-center"
                    whileHover={{ y: -5 }}
                  >
                    <FaUmbrellaBeach className="text-amber-500 text-4xl" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 font-serif text-amber-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experiențe de top
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500 p-3 rounded-full mr-4">
                      {exp.icon}
                    </div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-blue-100">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuLists />

      {/* Venue Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <motion.h2
                  className="text-3xl font-bold text-amber-600 mb-6 font-serif"
                  variants={fadeIn}
                >
                  Locația noastră
                </motion.h2>
                <motion.p className="text-gray-700 mb-6" variants={fadeIn}>
                  Fie că plănuiți o seară intimă sau o sărbătoare grandioasă,
                  LockOut Beach oferă un cadru elegant și versatil, conceput
                  pentru a vă transforma viziunea în realitate.
                </motion.p>
                <motion.p className="text-gray-700 mb-8" variants={fadeIn}>
                  Oaza noastră de pe malul mării este ideală pentru o gamă largă
                  de evenimente, de la întâlniri corporative și nunți de lux
                  până la petreceri private, lansări de produse, logodne și
                  aniversări importante. Fiecare experiență este atent
                  personalizată pentru a vă reflecta stilul și a depăși
                  așteptările.
                </motion.p>

                <motion.div
                  className="grid grid-cols-2 gap-6 mb-8"
                  variants={staggerContainer}
                >
                  {[
                    {
                      icon: <GiWaveSurfer className="text-2xl" />,
                      title: "Capacitate",
                      value: "10 - 1.000 de invitați",
                    },
                    {
                      icon: <MdEventSeat className="text-2xl" />,
                      title: "Ideal pentru",
                      value: "Nunți și evenimente",
                    },
                    {
                      icon: <GiSandsOfTime className="text-2xl" />,
                      title: "Disponibilitate",
                      value: "Deschis tot anul",
                    },
                    {
                      icon: <FaUtensils className="text-2xl" />,
                      title: "Bucătărie",
                      value: "Meniuri personalizate",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      variants={fadeIn}
                    >
                      <div className="bg-amber-100 p-3 rounded-full mr-4 text-amber-600">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{item.title}</h4>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={fadeIn}>
                  <button
                    onClick={() => {
                      const section = document.querySelector("#footer");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
                  >
                    Rezervați-vă experiența exclusivă
                  </button>
                </motion.div>
              </div>
              <div className="bg-gray-800 p-10 flex items-center justify-center">
                <div className="text-white text-center">
                  <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-amber-300" />
                  <h3 className="text-xl font-bold mb-2">Vizitați-ne</h3>
                  <p className="mb-6">
                    Ul. Hrvoja Macanovića 44A, <br /> 10000, Zagreb, Croatia
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button className="bg-white text-blue-900 py-2 px-6 rounded-full text-sm font-medium">
                      Indicații de orientare
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sunteți gata pentru evadarea pe coastă?
          </motion.h2>
          <motion.p
            className="text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Rezervați-vă astăzi masa sau cabana și trăiți magia LockOut Beach
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => {
                const section = document.querySelector("#footer");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Rezervă acum
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LockOutBeach;
