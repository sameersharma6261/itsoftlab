import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap";




export default function SplashScreen({ onComplete }) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    gsap.to(".logo-container", {
      x: 100,
      delay: 0.5,
      opacity: 1,
      duration: 2, 
      ease: "power2.out"
    });
  }, []);

  useEffect(() => {
    gsap.to(".welcome-text", {
      x: -100,
      delay: 0.5,
      opacity: 1,
      duration: 2, 
      ease: "power2.out"
    });
  }, []);

  useEffect(() => {
    gsap.to(".tagline", {
      x: 100,
      delay: 0.5,
      opacity: 1,
      duration: 2, 
      ease: "power2.out"
    });
  }, []);

  useEffect(() => {
    gsap.to(".loading-bar-container", {
      x: 100,
      delay: 0.5,
      opacity: 1,
      duration: 2, 
      ease: "power2.out"
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
      setTimeout(() => {
        if (onComplete) {
          onComplete() // Ensure it is only called if defined
        }
      }, 1000)
    }, 4200)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="logo-container">
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.path
                d="M30,20 L70,20 L70,80 L30,80 Z"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.svg>
          </div>
          <h1 className="welcome-text">Welcome to <span>ITSoftlab</span></h1>
          <p className="tagline">Transforming Ideas into Digital Reality</p>
          <div className="loading-bar-container">
            <motion.div
              className="loading-bar"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.6 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const style = `
  .splash-screen {
    position: fixed;
    inset: 0;
    // background: linear-gradient(to bottom right,rgb(30, 59, 138),rgb(49, 46, 129));
      // background: linear-gradient(to right,#87c7ff, #8786e0);
        background: linear-gradient(to right,#1d8ef0, #18a39c);


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    top: 0;
  }
  .logo-container {
    width: 128px;
    opacity: 0;
    height: 128px;
    margin-right: 200px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .welcome-text {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
    margin-left: 200px;
    opacity: 0;
    text-align: center;
  }
  .welcome-text span {
    color:rgb(0, 225, 255);
  }
  .tagline {
    font-size: 1.2rem;
    color: #bfdbfe;
    opacity: 0;
    max-width: 500px;
    text-align: center;
    margin-right: 200px;
  }
  .loading-bar-container {
    width: 256px;
    height: 4px;
    opacity: 0;
    background: #1e40af;
    margin-top: 3rem;
    border-radius: 999px;
    margin-right: 200px;
    overflow: hidden;
  }
  .loading-bar {
    height: 100%;
    background:rgb(19, 122, 248);
    width: 0%;
    transition: width 1.6s ease-in-out;
  }
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.type = "text/css"
  styleSheet.innerText = style
  document.head.appendChild(styleSheet)
}
