import React from "react";
import {
  FaUsers,
  FaGlassCheers,
  FaCalendarAlt,
  FaUtensils,
} from "react-icons/fa";
import venue1 from "../../assets/images/menu/gal1.jpg?url";
import venue2 from "../../assets/images/menu/gal2.jpg?url";
import venue3 from "../../assets/images/menu/gal3.jpg?url";
import venue4 from "../../assets/images/menu/gal4.jpg?url";

const VanueLockoutBeatch = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-500 font-serif mb-4">
            Locația noastră
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pentru grupuri de toate mărimile, de la întâlniri intime la
            sărbători grandioase, LockOut Beach oferă spații versatile pentru
            orice ocazie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              LockOut Beach este spațiul multifuncțional perfect pentru
              evenimente corporative, nunți, petreceri private, lansări,
              logodne, aniversări importante și evenimente de grup
              personalizate.
            </p>
            <p className="text-lg text-gray-700">
              De la întâlniri intime de 10 persoane până la evenimente mari de
              până la 1000 de invitați, locația noastră de pe malul mării se
              adaptează viziunii dumneavoastră. Descoperiți mai jos opțiunile
              noastre și contactați-ne pentru a vă planifica următorul eveniment
              special.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaUsers className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Capacitate</h4>
                  <p className="text-gray-600">10-1000 de invitați</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaGlassCheers className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Evenimente</h4>
                  <p className="text-gray-600">Nunți, corporative</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaCalendarAlt className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Disponibilitate</h4>
                  <p className="text-gray-600">Tot anul</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <FaUtensils className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Catering</h4>
                  <p className="text-gray-600">Meniuri personalizate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src={venue1}
                alt="Locație pe malul mării"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src={venue2}
                alt="Amenajare eveniment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src={venue3}
                alt="Locație pentru nuntă"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <img
                src={venue4}
                alt="Eveniment corporativ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const section = document.querySelector("#footer");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Solicitați informații despre închirierea locației
          </button>
        </div>
      </div>
    </section>
  );
};

export default VanueLockoutBeatch;
