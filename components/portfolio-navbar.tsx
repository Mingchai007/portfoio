"use client"

import type * as React from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Home, User, Briefcase, Mail, Code, FileText, ChevronUp } from "lucide-react"
import { useTheme } from "next-themes"
import { ThemeToggle } from "./theme-toggle"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-400",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "/#about",
    gradient: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)",
    iconColor: "text-purple-400",
  },
  {
    icon: <Code className="h-5 w-5" />,
    label: "Skills",
    href: "/#skills",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-emerald-400",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Projects",
    href: "/#projects",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-400",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Resume",
    href: "/resume",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-violet-400",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contact",
    href: "/#contact",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-rose-400",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export function PortfolioNavbar() {
  const { theme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const isDarkTheme = theme === "dark"
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
    setShowScrollTop(latest > 300)
  })

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        router.push("/")
        setTimeout(() => {
          const element = document.querySelector(href.substring(1))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      } else {
        const element = document.querySelector(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else {
      router.push(href)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const isActiveRoute = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href === "/resume" && pathname === "/resume") return true
    return false
  }

  return (
    <>
      {/* Main Navigation */}
      <motion.div
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.nav
          className={`p-2 rounded-2xl border border-border/50 shadow-2xl relative overflow-hidden transition-all duration-300 ${
            isScrolled
              ? "bg-background/95 backdrop-blur-xl"
              : "bg-gradient-to-b from-background/90 to-background/60 backdrop-blur-xl"
          }`}
          initial="initial"
          whileHover="hover"
          animate={{
            scale: isScrolled ? 0.95 : 1,
            y: isScrolled ? -5 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className={`absolute -inset-2 bg-gradient-radial from-transparent ${
              isDarkTheme
                ? "via-blue-400/20 via-30% via-purple-400/20 via-60% via-emerald-400/20 via-90%"
                : "via-blue-400/15 via-30% via-purple-400/15 via-60% via-emerald-400/15 via-90%"
            } to-transparent rounded-3xl z-0 pointer-events-none`}
            variants={navGlowVariants}
          />

          <div className="flex items-center justify-center gap-4 relative z-10">
            <ul className="flex items-center gap-2">
              {menuItems.map((item) => {
                const isActive = isActiveRoute(item.href)
                return (
                  <motion.li key={item.label} className="relative">
                    <motion.div
                      className={`block rounded-xl overflow-visible group relative cursor-pointer transition-all duration-300 ${
                        isActive ? "bg-blue-500/10 border border-blue-500/20" : ""
                      }`}
                      style={{ perspective: "600px" }}
                      whileHover="hover"
                      initial="initial"
                      onClick={() => handleNavigation(item.href)}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 z-0 pointer-events-none"
                        variants={glowVariants}
                        style={{
                          background: item.gradient,
                          opacity: isActive ? 0.3 : 0,
                          borderRadius: "16px",
                        }}
                      />

                      {/* Front face */}
                      <motion.div
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl ${
                          isActive
                            ? `text-foreground ${item.iconColor}`
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                        variants={itemVariants}
                        transition={sharedTransition}
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                      >
                        <span
                          className={`transition-colors duration-300 ${
                            isActive ? item.iconColor : `group-hover:${item.iconColor} text-foreground`
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="hidden sm:block text-sm font-medium">{item.label}</span>
                      </motion.div>

                      {/* Back face */}
                      <motion.div
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl ${
                          isActive
                            ? `text-foreground ${item.iconColor}`
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                        variants={backVariants}
                        transition={sharedTransition}
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                      >
                        <span
                          className={`transition-colors duration-300 ${
                            isActive ? item.iconColor : `group-hover:${item.iconColor} text-foreground`
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="hidden sm:block text-sm font-medium">{item.label}</span>
                      </motion.div>
                    </motion.div>
                  </motion.li>
                )
              })}
            </ul>

            {/* Divider */}
            <div className="h-6 w-px bg-border/50" />

            {/* Theme Toggle */}
            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </motion.nav>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </motion.div>
    </>
  )
}
