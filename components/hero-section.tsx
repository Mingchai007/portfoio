"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import SplitText from "./SplitText"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-900/10 to-purple-950/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <img
                  src="/korn.jpg"
                  alt="My_Korn"
                  className="w-28 h-28 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          <div className="mb-6">
            <SplitText
              text="Frontend Developer"
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={() => console.log('All letters have animated!')}
            />
          </div>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            สร้างสรรค์ UI/UX ที่สวยงามและใช้งานง่าย
            <br />
            ด้วยเทคโนโลยีที่ทันสมัย
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              ดูผลงาน
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-300 bg-transparent"
              onClick={() => window.open("/resume", "_blank")}
            >
              ดู Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              ติดต่อ
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
