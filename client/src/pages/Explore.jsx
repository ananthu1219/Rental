import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, Calendar } from "lucide-react";

// MOCK DATA
const BIKES = [
  {
    id: 1,
    name: "Yamaha R15 V4",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2940&auto=format&fit=crop",
    price: 35,
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 2,
    name: "Royal Enfield Classic 350",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2940&auto=format&fit=crop",
    price: 45,
    rating: 4.9,
    category: "Cruiser",
  },
  {
    id: 3,
    name: "KTM Duke 390",
    image: "https://images.unsplash.com/photo-1596423736776-6ba6a7751c6e?q=80&w=2836&auto=format&fit=crop",
    price: 50,
    rating: 4.7,
    category: "Naked",
  },
  {
    id: 4,
    name: "BMW G 310 R",
    image: "https://images.unsplash.com/photo-1622185135505-2d79504399d9?q=80&w=2940&auto=format&fit=crop",
    price: 60,
    rating: 4.9,
    category: "Premium",
  },
  {
    id: 5,
    name: "Kawasaki Ninja 400",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2940&auto=format&fit=crop",
    price: 55,
    rating: 4.8,
    category: "Sports",
  },
  {
    id: 6,
    name: "Harley Davidson 883",
    image: "https://images.unsplash.com/photo-1525160354320-545e30ed5546?q=80&w=2836&auto=format&fit=crop",
    price: 85,
    rating: 5.0,
    category: "Cruiser",
  },
];

function Explore() {
  const [selectedBike, setSelectedBike] = useState(null);
  const [dates, setDates] = useState({ start: "", end: "" });

  const handleRentClick = (bike) => {
    setSelectedBike(bike);
    setDates({ start: "", end: "" });
  };

  const handleConfirmRent = (e) => {
    e.preventDefault();
    if (!dates.start || !dates.end) {
      alert("Please select both start and end dates.");
      return;
    }
    console.log(`Renting ${selectedBike.name} from ${dates.start} to ${dates.end}`);
    alert(`Rental confirmed for ${selectedBike.name}!`);
    setSelectedBike(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-green-500/30">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* PAGE HEADER */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Explore Our <span className="text-green-500">Fleet</span>
          </h1>
          <p className="text-slate-400 max-w-xl text-lg">
            Choose from our premium collection of maintained bikes for your next adventure.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BIKES.map((bike) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              key={bike.id}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all"
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* DETAILS */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-semibold text-green-400 bg-green-500/10 px-2 py-1 rounded mb-2 inline-block">
                      {bike.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{bike.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold">{bike.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Price per day</span>
                    <span className="text-2xl font-bold text-white">${bike.price}</span>
                  </div>
                  <button
                    onClick={() => handleRentClick(bike)}
                    className="
                      bg-white text-black px-6 py-2.5 rounded-full font-bold
                      hover:bg-green-500 hover:scale-105 transition-all
                      shadow-[0_4px_14px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)]
                    "
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />

      {/* RENTAL MODAL */}
      <AnimatePresence>
        {selectedBike && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBike(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* MODAL CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="
                relative w-full max-w-md bg-slate-900 border border-green-500/20
                rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.15)] overflow-hidden
              "
            >
              {/* MODAL HEADER */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-xl font-bold">Rent {selectedBike.name}</h3>
                <button
                  onClick={() => setSelectedBike(null)}
                  className="text-slate-400 hover:text-white transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* MODAL FORM */}
              <form onSubmit={handleConfirmRent} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Select Duration</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-xs text-green-400 font-semibold">Start Date</span>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 text-slate-500" size={16} />
                        <input
                          type="date"
                          value={dates.start}
                          onChange={(e) => setDates({ ...dates, start: e.target.value })}
                          className="
                            w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-3 py-2
                            text-white text-sm focus:border-green-500 focus:outline-none transition
                          "
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs text-green-400 font-semibold">End Date</span>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 text-slate-500" size={16} />
                        <input
                          type="date"
                          value={dates.end}
                          onChange={(e) => setDates({ ...dates, end: e.target.value })}
                          className="
                            w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-3 py-2
                            text-white text-sm focus:border-green-500 focus:outline-none transition
                          "
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* PRICE CALCULATION (Visual only for now) */}
                <div className="bg-slate-950/50 rounded-lg p-4 border border-white/5 flex justify-between items-center">
                  <span className="text-sm text-slate-400">Rate per day</span>
                  <span className="font-bold text-lg">${selectedBike.price}</span>
                </div>

                <button
                  type="submit"
                  className="
                    w-full py-3 rounded-xl bg-green-500 text-black font-bold
                    hover:bg-green-400 transition shadow-[0_0_20px_rgba(34,197,94,0.3)]
                  "
                >
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Explore;