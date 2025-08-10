"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 60, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 60, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 60, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    title: "Design & Animation",
    skills: [
      { name: "Figma", level: 70, color: "from-purple-400 to-purple-600" },
      { name: "Framer Motion", level: 40, color: "from-pink-400 to-pink-600" },
      { name: "CSS Animations", level: 50, color: "from-emerald-400 to-emerald-600" },
      { name: "UI/UX Design", level: 50, color: "from-orange-400 to-orange-600" },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>

                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
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
