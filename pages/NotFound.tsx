import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-[150px] sm:text-[200px] md:text-[280px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 leading-none mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
              WebkitTextStroke: "2px rgba(59, 130, 246, 0.1)",
            }}
          >
            404
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-luxury font-semibold text-[#0A1628] mb-6 tracking-tight">
            Page Not Found
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full my-8"
            animate={{
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <motion.button
              onClick={() => navigate("/")}
              className="group flex items-center gap-3 px-8 py-4 bg-[#0A1628] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#162032] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Back to Homepage
            </motion.button>

            <motion.button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-[#0A1628] font-semibold rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </motion.button>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-6 font-medium">Looking for something else?</p>
            <div className="flex flex-wrap justify-center gap-8">
              <motion.button
                onClick={() => navigate("/about")}
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium text-lg underline-offset-4 hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                About Us
              </motion.button>
              <motion.button
                onClick={() => navigate("/contact")}
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium text-lg underline-offset-4 hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.button>
              <motion.button
                onClick={() => navigate("/#datasets")}
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium text-lg underline-offset-4 hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                Datasets
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
