"use client"

import { motion } from "framer-motion"
import { 
  SiReact, 
  SiNextdotjs, 
  SiNuxtdotjs,
  SiVuedotjs, 
  SiTailwindcss,
  SiFigma,
  SiBootstrap,
  SiDocker,
  SiPrisma,
  SiMysql
} from 'react-icons/si'

const skillCategories = [
  {
    title: "Frontend Frameworks",
    skills: [
      { 
        name: "Next.js", 
        level: 85, 
        color: "text-gray-200 hover:text-white",
        bgColor: "bg-gray-400/10 hover:bg-gray-400/20",
        icon: SiNextdotjs
      },
      { 
        name: "React.js", 
        level: 80, 
        color: "text-blue-400 hover:text-blue-300",
        bgColor: "bg-blue-400/10 hover:bg-blue-400/20",
        icon: SiReact
      },
      { 
        name: "Nuxt.js", 
        level: 70, 
        color: "text-green-400 hover:text-green-300",
        bgColor: "bg-green-400/10 hover:bg-green-400/20",
        icon: SiNuxtdotjs
      },
      { 
        name: "Vue.js", 
        level: 75, 
        color: "text-green-500 hover:text-green-400",
        bgColor: "bg-green-500/10 hover:bg-green-500/20",
        icon: SiVuedotjs
      },
    ],
  },
  {
    title: "Styling & Design",
    skills: [
      { 
        name: "Tailwind CSS", 
        level: 95, 
        color: "text-cyan-400 hover:text-cyan-300",
        bgColor: "bg-cyan-400/10 hover:bg-cyan-400/20",
        icon: SiTailwindcss
      },
      { 
        name: "Figma", 
        level: 85, 
        color: "text-purple-400 hover:text-purple-300",
        bgColor: "bg-purple-400/10 hover:bg-purple-400/20",
        icon: SiFigma
      },
      { 
        name: "Bootstrap 5", 
        level: 80, 
        color: "text-purple-600 hover:text-purple-500",
        bgColor: "bg-purple-600/10 hover:bg-purple-600/20",
        icon: SiBootstrap
      },
      { 
        name: "Shadcn UI", 
        level: 85, 
        color: "text-gray-300 hover:text-white",
        bgColor: "bg-gray-300/10 hover:bg-gray-300/20",
        icon: SiReact
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { 
        name: "Docker", 
        level: 60, 
        color: "text-blue-500 hover:text-blue-400",
        bgColor: "bg-blue-500/10 hover:bg-blue-500/20",
        icon: SiDocker
      },
      { 
        name: "Prisma", 
        level: 75, 
        color: "text-indigo-400 hover:text-indigo-300",
        bgColor: "bg-indigo-400/10 hover:bg-indigo-400/20",
        icon: SiPrisma
      },
      { 
        name: "MySQL", 
        level: 70, 
        color: "text-orange-500 hover:text-orange-400",
        bgColor: "bg-orange-500/10 hover:bg-orange-500/20",
        icon: SiMysql
      },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/5 to-blue-950/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
            ทักษะ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">เทคโนโลยีและเครื่องมือที่ฉันใช้ในการพัฒนาผลงาน</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-6"
              initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">{category.title}</h3>

              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={`group relative p-6 rounded-xl border border-border/50 ${skill.bgColor} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          type: "spring",
                          bounce: 0.5
                        }}
                        viewport={{ once: true }}
                        className={`text-4xl ${skill.color} transition-colors duration-300`}
                      >
                        <skill.icon />
                      </motion.div>

                      <div>
                        <h4 className="text-foreground font-medium text-sm mb-1">{skill.name}</h4>
                        <div className="flex items-center justify-center space-x-1">
                          {/* <span className={`text-xs ${skill.color} font-medium`}>{skill.level}%</span> */}
                        </div>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}