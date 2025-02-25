
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import burger from './images/burger.png';
import burrito from './images/burrito.png';
import pizza from './images/pizza.png';
import ramen from './images/ramen.png';
import plate from './images/plate.png';
import logo from './images/logo.png'; // Importing your logo

const FoodShowcase = () => {
  // State to track which plate is currently selected
  const [selectedPlate, setSelectedPlate] = useState(0);
  // State to track viewport width
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // All food images (keeping all 4 food images for the main display)
  const allFoods = [burger, pizza, burrito, ramen];
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Dynamically adjust food positions based on screen size
  const getFoodPositions = () => {
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;
    
    if (isMobile) {
      return [
        { x: 0, y: -120, z: 0, size: 70, delay: 0 },       // Burger (top)
        { x: -140, y: 60, z: 10, size: 65, delay: 0.3 },   // Pizza (left)
        { x: 140, y: -30, z: 20, size: 65, delay: 0.6 },   // Burrito (right)
        { x: 20, y: 100, z: 15, size: 60, delay: 0.9 },    // Ramen (bottom)
      ];
    } else if (isTablet) {
      return [
        { x: 0, y: -160, z: 0, size: 100, delay: 0 },      // Burger (top)
        { x: -200, y: 60, z: 10, size: 90, delay: 0.3 },   // Pizza (left)
        { x: 230, y: -40, z: 20, size: 95, delay: 0.6 },   // Burrito (right)
        { x: 40, y: 160, z: 15, size: 85, delay: 0.9 },    // Ramen (bottom)
      ];
    } else {
      return [
        { x: 0, y: -220, z: 0, size: 140, delay: 0 },      // Burger (top)
        { x: -320, y: 90, z: 10, size: 130, delay: 0.3 },  // Pizza (left)
        { x: 370, y: -50, z: 20, size: 135, delay: 0.6 },  // Burrito (right)
        { x: 60, y: 220, z: 15, size: 125, delay: 0.9 },   // Ramen (bottom)
      ];
    }
  };
  
  const foodPositions = getFoodPositions();

  // Reduced to 3 food plates for smoother transitions
  const foodPlates = [
    { name: "AR Visual Dining", image: plate, description: "Experience lifelike AR models of meals!" },
    { name: "Gordon Rams-AI", image: plate, description: "Chat with our bot to get personalized recommendations and descriptions!" },
    { name: "Sustainability Tracker", image: plate, description: "Recieve information on the carbon footprint and sourcing of your meals!" },
  ];

  // Smoother transition configurations
  const plateTransition = {
    type: "spring",
    stiffness: 150,
    damping: 20,
    mass: 1,
    velocity: 0
  };

  // Dynamically calculate showcase height based on screen size
  const getShowcaseHeight = () => {
    if (windowWidth < 768) {
      return 400; // Mobile
    } else if (windowWidth < 1024) {
      return 600; // Tablet
    } else {
      return 800; // Desktop
    }
  };

  // Dynamically calculate text sizes
  const getTitleSize = () => {
    if (windowWidth < 768) {
      return 'text-5xl'; // Mobile
    } else if (windowWidth < 1024) {
      return 'text-7xl'; // Tablet
    } else {
      return 'text-9xl'; // Desktop
    }
  };

  const getSubtitleSize = () => {
    if (windowWidth < 768) {
      return 'text-xl'; // Mobile
    } else if (windowWidth < 1024) {
      return 'text-2xl'; // Tablet
    } else {
      return 'text-3xl'; // Desktop
    }
  };

  const getHeadingSize = () => {
    if (windowWidth < 768) {
      return 'text-xl'; // Mobile
    } else if (windowWidth < 1024) {
      return 'text-2xl'; // Tablet
    } else {
      return 'text-3xl'; // Desktop
    }
  };

  const getDescriptionSize = () => {
    if (windowWidth < 768) {
      return 'text-base'; // Mobile
    } else if (windowWidth < 1024) {
      return 'text-lg'; // Tablet
    } else {
      return 'text-lg'; // Desktop
    }
  };

  // Dynamically calculate utensil dimensions
  const getUtensilSize = () => {
    if (windowWidth < 768) {
      return { width: 20, height: 80 }; // Mobile
    } else if (windowWidth < 1024) {
      return { width: 30, height: 110 }; // Tablet
    } else {
      return { width: 40, height: 140 }; // Desktop
    }
  };

  // Get logo size based on screen width
  const getLogoSize = () => {
    if (windowWidth < 768) {
      return { width: 60, height: 60 }; // Mobile
    } else if (windowWidth < 1024) {
      return { width: 80, height: 80 }; // Tablet
    } else {
      return { width: 100, height: 100 }; // Desktop
    }
  };

  const utensilSize = getUtensilSize();
  const logoSize = getLogoSize();

  // Calculate plate sizes
  const getPlateSize = (isSelected) => {
    if (windowWidth < 768) {
      return isSelected ? '80px' : '60px'; // Mobile
    } else if (windowWidth < 1024) {
      return isSelected ? '100px' : '70px'; // Tablet
    } else {
      return isSelected ? '120px' : '80px'; // Desktop
    }
  };

  // Calculate button spacing
  const getButtonSpacing = () => {
    if (windowWidth < 768) {
      return 'mt-28'; // More space on mobile 
    } else if (windowWidth < 1024) {
      return 'mt-32'; // More space on tablet
    } else {
      return 'mt-36'; // More space on desktop
    }
  };

  return (
    <div className="min-h-screen bg-teal-700 flex flex-col items-center justify-center w-full">
      {/* Logo in top left corner */}
      <motion.div 
        className="absolute top-4 left-4 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div 
          className="overflow-hidden shadow-lg"
          style={{ width: `${logoSize.width}px`, height: `${logoSize.height}px` }}
        >
          {/* Your actual logo */}
          <img 
            src={logo} 
            alt="HoloBites Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      <div className="w-full bg-teal-700 p-0 m-0">
        {/* Food showcase area with title in center */}
        <div 
          className="relative flex items-center justify-center mb-4 md:mb-8 overflow-hidden w-full"
          style={{ height: `${getShowcaseHeight()}px` }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Map through all foods with revised positions */}
            {allFoods.map((food, index) => (
              <motion.div
                key={index}
                className="absolute flex items-center justify-center cursor-pointer"
                style={{
                  width: `${foodPositions[index].size * 2}px`,
                  height: `${foodPositions[index].size * 2}px`,
                  zIndex: 100 + foodPositions[index].z,
                  transform: `translate(${foodPositions[index].x}px, ${foodPositions[index].y}px)`,
                }}
                initial={{ 
                  y: -1000, 
                  x: foodPositions[index].x,
                  scale: 0.6,
                  opacity: 0
                }}
                animate={{ 
                  y: foodPositions[index].y,
                  x: foodPositions[index].x,
                  scale: 1,
                  opacity: 1
                }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 70,
                  delay: foodPositions[index].delay,
                  duration: 2
                }}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  // Only select plates that exist in the foodPlates array
                  if (index < foodPlates.length) {
                    setSelectedPlate(index);
                  }
                }}
              >
                {/* Container for each food - removed self-rotation */}
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={food} 
                    alt={`Food ${index}`}
                    className="w-full h-full object-contain"
                    style={{ 
                      filter: `drop-shadow(0 20px 20px rgba(0, 0, 0, 0.6))`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
            
            {/* HoloBites text in the center */}
            <motion.div 
              className="absolute z-200"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { 
                  delay: 1.2, 
                  duration: 0.8,
                  type: "spring",
                  damping: 10,
                }
              }}
            >
              <h1 
                className={`${getTitleSize()} font-extrabold text-center`}
                style={{
                  background: 'white',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'white',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  fontFamily: "'Armageda Wide', 'Helvetica Bold', sans-serif",
                  letterSpacing: '0.05em',
                  padding: '0.2em',
                  textStroke: '2px black',
                }}
              >
                HoloBites
              </h1>
              <h3
                className={`${getSubtitleSize()} font-extrabold text-center`}
                style={{
                  background: 'white',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'white',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  fontFamily: "'Armageda Wide', 'Helvetica Bold', sans-serif",
                  letterSpacing: '0.05em',
                  padding: '0.2em',
                  textStroke: '2px black',
                }}
              >
                Where Tech meets Food!
              </h3>
            </motion.div>
          </div>
        </div>

        {/* Fork, Spoon and Plates Section - MODIFIED: completely restructured */}
        <div className="relative h-24 md:h-36 lg:h-48 mb-4 w-full flex justify-center">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg relative flex items-center justify-center">
            {/* Fork (left side) */}
            <motion.div 
              className="absolute left-5 md:left-9 h-full flex items-center justify-center z-10"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              style={{ width: '15%' }}
            >
              {/* Placeholder fork */}
              <div className="w-full h-full flex items-center justify-center">
                <svg width={utensilSize.width} height={utensilSize.height} viewBox="0 0 30 40" className="text-gray-200">
                  <path 
                    d="M5,2 L5,15 M10,2 L10,15 M15,2 L15,15 M10,15 C10,15 5,15 5,25 C5,28 10,30 10,30 L10,40" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>
            </motion.div>
            
            {/* Center Plates Section - Taking 70% of the container width */}
            <div className="w-3/5 relative h-full flex items-center justify-center">
              {foodPlates.map((plate, index) => (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer"
                  style={{
                    zIndex: selectedPlate === index ? 30 : 20,
                  }}
                  initial={{ 
                    x: (index - 1) * 40,
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{ 
                    x: selectedPlate === index ? 0 : 
                      selectedPlate > index ? (windowWidth < 768 ? -60 : -100) + (index * (windowWidth < 768 ? 20 : 30)) : 
                      (windowWidth < 768 ? 60 : 100) + (index * (windowWidth < 768 ? 20 : 30)),
                    opacity: selectedPlate === index ? 1 : 0.6,
                    scale: selectedPlate === index ? 1.2 : 0.8,
                    y: selectedPlate === index ? -10 : 0
                  }}
                  whileHover={{
                    scale: selectedPlate === index ? 1.2 : 0.9,
                    opacity: 0.9
                  }}
                  transition={plateTransition}
                  onClick={() => setSelectedPlate(index)}
                >
                  {/* Plate with border */}
                  <div 
                    className="rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                      width: getPlateSize(selectedPlate === index),
                      height: getPlateSize(selectedPlate === index),
                      border: selectedPlate === index ? '4px solid #FFD700' : '2px solid #888888',
                      backgroundColor: '#333',
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    {plate.image ? (
                      <img 
                        src={plate.image}
                        alt={plate.name}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-500 flex items-center justify-center text-white">
                        Plate {index+1}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Spoon (right side) */}
            <motion.div 
              className="absolute right-5 md:right-9 h-full flex items-center justify-center z-10"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              style={{ width: '15%' }}
            >
              {/* Placeholder spoon */}
              <div className="w-full h-full flex items-center justify-center">
                <svg width={utensilSize.width} height={utensilSize.height} viewBox="0 0 30 40" className="text-gray-200">
                  <path 
                    d="M15,2 C20,5 25,10 25,15 C25,25 15,25 15,25 L15,40" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  <ellipse cx="15" cy="15" rx="10" ry="13" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic caption based on selected plate with smoother transitions */}
        <div className="text-center mt-4 md:mt-6 lg:mt-8 relative h-48 md:h-52 lg:h-64 w-full">
          <motion.div 
            key={selectedPlate}
            className="absolute w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className={`text-white ${getHeadingSize()} font-bold mb-2 md:mb-4`}>
              {foodPlates[selectedPlate].name}
            </h2>
            <p className={`text-gray-300 ${getDescriptionSize()} mb-4 md:mb-6 lg:mb-8 px-4 md:px-0`}>
              {foodPlates[selectedPlate].description}
            </p>
          </motion.div>
          
          {/* Adjusted button position for responsive layout - increased spacing */}
          <motion.div
            className={`absolute w-full ${getButtonSpacing()} pt-3 md:pt-5 lg:pt-7`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a href="https://holobites.netlify.app/">
              <button className="bg-yellow-400 text-teal-900 px-8 md:px-10 lg:px-12 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-300 transition-colors">
                Hog In!
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FoodShowcase;