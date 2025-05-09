"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "HOME", path: "/" },
  { name: "WORK", path: "/work" },
  { name: "SERVICES", path: "/services" },
  { name: "INNOVATE", path: "/innovate" },
  { name: "BLOG", path: "/blog" },
  { name: "ABOUT", path: "/agency" },
  { name: "CONTACT", path: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-2 bg-background/90 backdrop-blur-sm border-b border-primary/5" : "py-2"
        }`}
      >
        <div className="container mx-auto px-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-50 hoverable">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diamond%20Tier%20Logo%20Symbol%20800x600-PIJavQfnYER87PBx2e5ToBgqOpE5Ru.png"
                alt="Diamond Tier Agency"
                width={120}
                height={90}
                className="w-16 h-auto transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_12px_rgba(0,255,204,0.4)]"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-5 mr-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-[10px] tracking-wider relative group hoverable ${
                      pathname === item.path ? "text-primary" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary"></span>
                    )}
                    {pathname !== item.path && (
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/50 group-hover:w-full transition-all duration-300"></span>
                    )}
                  </Link>
                ))}
              </div>
              <a
                href="https://calendly.com/diamondtiersolutions/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-wider text-primary border border-primary px-4 py-2 hover:bg-primary/10 transition-colors duration-300"
              >
                SCHEDULE
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 text-white p-1 hoverable"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden flex flex-col pt-20"
          >
            <div className="flex flex-col items-center h-full">
              <div className="w-full border-b border-white/10 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      className={`block text-center py-3 text-xs ${
                        pathname === item.path ? "text-primary" : "text-white/80"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <a
                  href="https://calendly.com/diamondtiersolutions/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-wider text-primary border border-primary px-4 py-2 hover:bg-primary/10 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SCHEDULE A CALL
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
