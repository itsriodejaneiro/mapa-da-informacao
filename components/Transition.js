import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function Transition({ children, parentLoading }) {
  const router = useRouter()

  const [loading, setLoading] = useState(parentLoading || false)

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true)
    const handleComplete = (url) => (url === router.asPath) && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  const LoadingDot = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: "#ffc28f",
    borderRadius: "50%"
  };
  
  const LoadingContainer = {
    width: "5rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around"
  };
  
  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2
      }
    },
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const DotVariants = {
    initial: {
      y: "0%"
    },
    animate: {
      y: "100%"
    }
  };
  
  const DotTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
  };

  useEffect(() => setLoading(parentLoading), [parentLoading]);

  return (
    <>
    {loading ? (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <motion.div
          style={LoadingContainer}
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
        >
            <motion.span
              style={LoadingDot}
              variants={DotVariants}
              transition={DotTransition}
            />
            <motion.span
              style={LoadingDot}
              variants={DotVariants}
              transition={DotTransition}
            />
            <motion.span
              style={LoadingDot}
              variants={DotVariants}
              transition={DotTransition}
            />
        </motion.div>
      </div>
    ) : (
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.main>
    )}
    </>
  )
}

export default Transition