"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Zap, Heart } from "lucide-react"

const features = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Clean Code",
    description: "เขียนโค้ดที่สะอาด อ่านง่าย และบำรุงรักษาได้",
    color: "text-blue-400",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Creative Design",
    description: "ออกแบบ UI ที่สวยงาม ใช้งานง่าย และตอบโจทย์ผู้ใช้",
    color: "text-purple-400",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance",
    description: "เว็บไซต์ที่โหลดเร็ว ทำงานลื่น และประสบการณ์ที่ดี",
    color: "text-emerald-400",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion",
    description: "รักในการเรียนรู้เทคโนโลยีใหม่ๆ และพัฒนาตนเองอย่างต่อเนื่อง",
    color: "text-rose-400",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 to-purple-950/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            เกี่ยวกับฉัน
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ฉันเป็น Frontend Developer ที่หลงใหลในการสร้าง User Interface ที่สวยงามและใช้งานง่าย
            ด้วยประสบการณ์ในการพัฒนาเว็บไซต์และแอปพลิเคชันที่หลากหลาย
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
