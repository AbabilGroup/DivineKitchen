import React, { useState, useEffect, useRef } from "react";
import {
  FaHeart,
  FaGlassCheers,
  FaRing,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import heroCafe from "../../assets/images/wedding/cafe.jpg?url";
import weddinggalry1 from "../../assets/images/wedding/w1.jpg?url";
import weddinggalry2 from "../../assets/images/wedding/w2.jpeg?url";
import weddinggalry3 from "../../assets/images/wedding/w3.jpeg?url";
import weddinggalry4 from "../../assets/images/wedding/w4.jpeg?url";
import weddinggalry5 from "../../assets/images/wedding/w5.webp?url";
import weddinggalry6 from "../../assets/images/wedding/w6.jpeg?url";
import venueImage from "../../assets/images/wedding/vanue.jpg?url";

const HeroWeddingCafe = () => {
  const weddingImages = [
    weddinggalry1,
    weddinggalry2,
    weddinggalry3,
    weddinggalry4,
    weddinggalry5,
    weddinggalry6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    venue: "",
    request: "",
  });

  // Animation controls
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getVisibleCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, visibleCount]);

  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (weddingImages.length - visibleCount + 1)
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? weddingImages.length - visibleCount : prevIndex - 1
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Vă mulțumim pentru solicitare! Vă vom contacta în curând.");
  };

  const visibleImages = weddingImages.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const slideInFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleUpVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-black/30 z-10"
        ></motion.div>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroCafe}
          alt="Locație pentru nunți Divine Kitchen"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Nunți la <span className="text-amber-300">Divine Kitchen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
          >
            Unde excelența culinară întâlnește sărbătorile romantice de la malul mării
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
            onClick={() => {
              const section = document.querySelector("#wedding-cafe");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Planificați-vă ziua specială
          </motion.button>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-4 bg-amber-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif font-bold mb-6 text-amber-800"
          >
            Nunți la Divine Kitchen
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            Divine Kitchen oferă nunți intime și memorabile de-a lungul
            frumoasei coaste Zandvoort. Bucurați-vă de sunetul liniștitor al
            valurilor și de priveliștile uimitoare ale mării pentru ca ziua
            dumneavoastră specială să fie cu adevărat Divine.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-serif font-bold mb-12 text-center text-amber-800"
          >
            Galeria noastră de nunți
          </motion.h2>

          <motion.div variants={itemVariants} className="relative group">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {visibleImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex-shrink-0 px-2 ${
                    visibleCount === 1
                      ? "w-full"
                      : visibleCount === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg h-64 md:h-80 lg:h-96 transform transition-all duration-300 hover:shadow-xl">
                    <motion.img
                      src={image}
                      alt={`Nuntă la Divine Kitchen ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-lg font-serif">
                        Nuntă #{index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="text-xl" />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="text-xl" />
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-8 space-x-2"
          >
            {Array.from({
              length: weddingImages.length - visibleCount + 1,
            }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-amber-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Mergi la diapozitivul ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        id="wedding-cafe"
        className="py-20 px-4 bg-amber-50"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideInFromLeft}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <motion.img
              src={venueImage}
              alt="Locația Lookout Beach de la Divine Kitchen"
              className="w-full h-auto object-cover"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
          </motion.div>

          <motion.div variants={slideInFromRight} className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-serif font-bold text-amber-800"
            >
              Locația noastră
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-serif font-semibold text-amber-600"
            >
              Cafe Beach
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="bg-amber-100 p-3 rounded-full"
              >
                <FaHeart className="text-amber-600 text-xl" />
              </motion.div>
              <div>
                <h4 className="font-semibold text-gray-700">Utilizare exclusivă:</h4>
                <p className="text-gray-600">200 - 800 de invitați</p>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Situat de-a lungul frumoasei coaste Zandvoort, Divine Kitchen este
              ideal pentru evenimente cu locuri la masă pentru 200 până la 800
              de invitați. Priveliștile panoramice asupra oceanului și spațiile
              elegante creează decorul perfect pentru ziua dumneavoastră
              specială.
            </motion.p>

            <motion.form
              variants={scaleUpVariants}
              onSubmit={handleSubmit}
              className="space-y-5 mt-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Numele dumneavoastră"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Număr de telefon"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Adresă de e-mail"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <select
                    name="guests"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Număr de invitați</option>
                    <option value="50-100">50-100</option>
                    <option value="100-200">100-200</option>
                    <option value="200-400">200-400</option>
                    <option value="400-800">400-800</option>
                  </select>
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <select
                    name="venue"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.venue}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selectați locația</option>
                    <option value="Lookout Beach">Lookout Beach</option>
                    <option value="Oceanview Terrace">Terasa cu vedere la ocean</option>
                    <option value="Grand Ballroom">Marea sală de bal</option>
                  </select>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  name="request"
                  placeholder="Cerințe speciale"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={formData.request}
                  onChange={handleInputChange}
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Trimiteți solicitarea
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-serif font-bold mb-16 text-center text-amber-800"
          >
            De ce să alegeți Divine Kitchen
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-amber-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
              >
                <FaHeart className="text-amber-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold mb-3 text-amber-800">
                Atmosferă romantică
              </h3>
              <p className="text-gray-700">
                Priveliștile uimitoare asupra oceanului și decorul elegant
                creează atmosfera romantică perfectă pentru ziua dumneavoastră
                specială.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-amber-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
              >
                <FaGlassCheers className="text-amber-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold mb-3 text-amber-800">
                Excelență gourmet
              </h3>
              <p className="text-gray-700">
                Bucătari premiați creează meniuri rafinate adaptate
                preferințelor dumneavoastră, folosind cele mai proaspete
                ingrediente locale.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-amber-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <motion.div
                whileHover={{ rotate: 20 }}
                className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
              >
                <FaRing className="text-amber-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold mb-3 text-amber-800">
                Pachete personalizate
              </h3>
              <p className="text-gray-700">
                Opțiuni flexibile pentru a vă crea sărbătoarea perfectă, de la
                întâlniri intime până la recepții grandioase.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-amber-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -10 }}
                className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
              >
                <FaCamera className="text-amber-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold mb-3 text-amber-800">
                Ca în poze
              </h3>
              <p className="text-gray-700">
                Fundalurile naturale uimitoare și iluminatul profesionist fac ca
                fotografiile de nuntă să fie absolut magice.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroWeddingCafe;
