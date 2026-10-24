import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaUsers,
  FaPalette,
  FaTshirt,
  FaCameraRetro,
  FaBrush,
  FaWineGlassAlt,
  FaChessQueen,
} from "react-icons/fa";
import heroImage from "../../../assets/images/wedding/artfrtion.jpg?url";
import artf1 from "../../../assets/images/wedding/arf1.webp?url";
import artf2 from "../../../assets/images/wedding/arf2.webp?url";
import artf3 from "../../../assets/images/wedding/arf3.jpg?url";
import artf4 from "../../../assets/images/wedding/af4.jpg?url";
import artf5 from "../../../assets/images/wedding/arf5.png?url";
import artf6 from "../../../assets/images/wedding/arf6.jpg?url";

const ArtFashion = () => {
  const artImages = [heroImage, artf1, artf2, artf3, artf4, artf5, artf6];
  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const goToNext = () => {
    setCurrentIndices((prev) => [
      (prev[0] + 1) % artImages.length,
      (prev[1] + 1) % artImages.length,
      (prev[2] + 1) % artImages.length,
    ]);
  };

  const goToPrev = () => {
    setCurrentIndices((prev) => [
      (prev[0] - 1 + artImages.length) % artImages.length,
      (prev[1] - 1 + artImages.length) % artImages.length,
      (prev[2] - 1 + artImages.length) % artImages.length,
    ]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Vă mulțumim pentru solicitare! Vă vom contacta în curând.");
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="font-serif text-gray-800">
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <motion.img
          src={heroImage}
          alt="Evenimente de artă și modă Divine Kitchen"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <motion.div
            className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src={"/logo2.png"}
              alt="Logo companie"
              className="h-24 lg:h-32 w-auto drop-shadow-lg"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl"
          >
            Evenimente de artă și modă
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
          >
            Unde stilul întâlnește gustul
          </motion.p>

          {/* Added Button */}
          <motion.div
            onClick={() => {
              const section = document.querySelector("#event-book");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Rezervați-vă evenimentul
            </button>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            De la prezentări de modă exclusiviste la vernisaje de galerii
            contemporane, Divine Kitchen aduce arta culinară în inima expresiei
            creative. Credem că mâncarea trebuie să fie la fel de inspirată ca
            evenimentul însuși — atent creată, frumos prezentată și adaptată
            esteticii dumneavoastră.
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="max-w-6xl mx-auto relative"
        >
          <div className="relative">
            <div className="flex justify-center gap-6">
              {currentIndices.map((index, i) => (
                <motion.div
                  key={i}
                  className={`flex-1 min-w-0 overflow-hidden rounded-lg shadow-lg ${
                    i > 0 ? "hidden md:block" : ""
                  }`}
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={artImages[index]}
                    alt={`Eveniment de artă și modă ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-amber-800 z-10 -ml-4"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-amber-800 z-10 -mr-4"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-12"
          >
            Artă culinară pentru evenimente creative
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaPalette className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Meniuri pentru vernisaje
                  </h3>
                  <p className="text-gray-600">
                    Meniurile noastre sunt create pentru a completa tema aleasă,
                    fie ea minimalistă și șic, îndrăzneață și avangardistă sau
                    atemporală și elegantă.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaTshirt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Catering pentru prezentări de modă
                  </h3>
                  <p className="text-gray-600">
                    De la canapele rafinate și cocktailuri de autor până la
                    experiențe de degustare captivante, fiecare detaliu este
                    realizat cu precizie și stil.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaCameraRetro className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Dining pentru expoziții de fotografie
                  </h3>
                  <p className="text-gray-600">
                    Prezentări culinare care oglindesc viziunea artistică a
                    expoziției dumneavoastră, creând o experiență senzorială
                    unitară.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaBrush className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Prezentări artistice personalizate
                  </h3>
                  <p className="text-gray-600">
                    Lăsați Divine Kitchen să vă înnobileze următorul eveniment
                    creativ cu mâncare care nu este doar servită — ci stilizată.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[500px]">
              <img
                src={artf3}
                alt="Catering pentru expoziție de artă"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Spațiul nostru pentru evenimente creative
                </h3>
                <div className="flex items-center text-white mb-4">
                  <FaMapMarkerAlt className="mr-2 text-amber-300" />
                  <span>Districtul Galeriilor 123, Cartierul Artelor</span>
                </div>
                <p className="text-white/90">
                  Un spațiu versatil care se transformă după viziunea
                  dumneavoastră artistică, cu o capacitate de până la 300 de
                  invitați.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="event-book" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold text-center text-amber-600 mb-12"
          >
            Planificați-vă evenimentul artistic
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Numele dumneavoastră"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaPhone />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaCalendarAlt />
                  </div>
                  <input
                    type="date"
                    name="date"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaUsers />
                  </div>
                  <select
                    name="guests"
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Număr de invitați</option>
                    <option value="50-100">50-100</option>
                    <option value="100-200">100-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                <div className="relative md:col-span-2">
                  <textarea
                    name="message"
                    placeholder="Spuneți-ne despre viziunea dumneavoastră artistică..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Solicitați o consultanță pentru evenimentul artistic
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArtFashion;
