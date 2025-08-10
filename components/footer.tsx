"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href="#"
              className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          <p className="text-muted-foreground flex items-center justify-center gap-2">
            สร้างด้วย <Heart className="h-4 w-4 text-red-400" /> และ Next.js
          </p>

          <p className="text-sm text-muted-foreground mt-2">© 2024 Your Name. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
