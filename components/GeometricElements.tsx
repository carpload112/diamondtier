"use client"

import { motion } from "framer-motion"

export function FloatingShape({ className = "", ...props }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} {...props}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="50"
          cy="50"
          r="49"
          stroke="var(--primary)"
          strokeWidth="1"
          strokeDasharray="1 3"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="35"
          stroke="var(--primary)"
          strokeWidth="1"
          strokeDasharray="1 3"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </svg>
    </div>
  )
}

export function GridBackground() {
  return (
    <div
      className="absolute inset-0 bg-[#2E1250]"
      style={{
        backgroundImage: `radial-gradient(#00E5FF 0.5px, transparent 0.5px)`,
        backgroundSize: "30px 30px",
        opacity: 0.05,
      }}
    />
  )
}

export function GlowingOrb({ className = "", ...props }) {
  return (
    <motion.div
      className={`w-32 h-32 rounded-full bg-[#00E5FF] blur-[100px] ${className}`}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      {...props}
    />
  )
}

export function DiamondShape({ className = "", size = 20, ...props }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="var(--primary)" strokeWidth="1" fill="none" />
      </svg>
    </motion.div>
  )
}

export function ParticleField({ className = "", count = 50, ...props }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
            x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
            opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.3],
          }}
          transition={{
            duration: 20 + Math.random() * 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
