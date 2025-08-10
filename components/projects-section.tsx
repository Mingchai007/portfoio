"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Demo E-Commerce Dashboard",
    description: "แดชบอร์ดสำหรับจัดการร้านค้าออนไลน์ พร้อมระบบวิเคราะห์ข้อมูลและกราฟแบบ Real-time",
    image: "https://img2.pic.in.th/pic/Screenshot-2025-07-10-174510525ce6f0d79028c0.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "http://dashboard.pixelnetwork.in.th/",
    githubUrl: "#",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Web Fivem E-Commerce",
    description: "เว็บไซต์ E-Commerce สำหรับ Fivem พร้อมระบบจัดการสินค้าและการชำระเงินอัตโนมัติ",
    image: "https://img2.pic.in.th/pic/imaged44596d95257fdb1.png",
    tags: ["React", "Next","TypeScript" , "Tailwind CSS"],
    liveUrl: "https://seoul-shop.com/",
    githubUrl: "#",
    gradient: "from-emerald-500/20 to-blue-500/20",
  },

  {
    title: "EZ-DEMO WEB SHOP (TH)",
    description: "แอปพยากรณ์อากาศพร้อม UI ที่สวยงาม Animation และข้อมูลสภาพอากาศแบบ Real-time",
    image: "https://img2.pic.in.th/pic/image3d37699057ffeff3.png",
    tags: ["React", "API Integration", "CSS Animations", "Responsive"],
    liveUrl: "https://ez-dev.tmkc.xyz/ ",
    githubUrl: "#",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "What City WEB Fivem E-Commerce",
    description: "แอปพยากรณ์อากาศพร้อม UI ที่สวยงาม Animation และข้อมูลสภาพอากาศแบบ Real-time",
    image: "https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-07-10-195755.png",
    tags: ["React", "Tailwind CSS" ,  "CSS Animations", "Responsive"],
    liveUrl: "https://universal.whatcityth.com/",
    githubUrl: "#",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },

  {
    title: "Ui Fivem / Inventory-Hub",
    description: "Ui กระเป๋า Fivem ที่ออกแบบมาอย่างสวยงามและใช้งานง่าย",
    image: "/inven.png",
    tags: ["Next.js" , "Tailwind CSS" ],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-500/20 to-pink-500/20",
  },

]

export function ProjectsSection() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [modalTitle, setModalTitle] = useState<string>("")
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/5 to-blue-950/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            ผลงาน
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            โปรเจคต์ที่ฉันได้พัฒนาและออกแบบด้วยความใส่ใจในรายละเอียด
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-border/50 hover:border-border transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => {
                      setModalImage(project.image || "/placeholder.svg");
                      setModalTitle(project.title);
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      onClick={() => {
                        setModalImage(project.image || "/placeholder.svg");
                        setModalTitle(project.title);
                      }}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      ดูตัวอย่าง
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      โค้ด
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      ดูเว็บไซต์
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal for full image preview */}
        <AnimatePresence>
          {modalImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalImage(null)}
            >
              <motion.div
                className="relative bg-transparent max-w-3xl w-full mx-4 rounded-lg shadow-lg"
                initial={{ scale: 0.9, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 40 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 z-10 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
                  onClick={() => setModalImage(null)}
                  aria-label="ปิด"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={modalImage}
                  alt={modalTitle}
                  className="w-full max-h-[80vh] object-contain rounded-lg bg-black"
                />
                <div className="text-center text-white mt-4 text-lg font-semibold">{modalTitle}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

