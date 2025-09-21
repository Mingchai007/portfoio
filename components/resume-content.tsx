"use client"

import { motion } from "framer-motion"
import {
  Download,
  PrinterIcon as Print,
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const personalInfo = {
  name: "Phanuphong Mingchai",
  title: "Frontend Developer & UI Designer",
  email: "phanuphong.ming@bumail.net",
  phone: "+66 82-929-7423",
  location: "กรุงเทพมหานคร, ประเทศไทย",
  website: "yourwebsite.com",
  summary:
    "Frontend Developer ที่มีประสบการณ์ 5+ ปี ในการพัฒนาเว็บแอปพลิเคชันและ UI/UX Design เชี่ยวชาญในการใช้ React, Next.js, และ Tailwind CSS ในการสร้างผลงานที่ทันสมัยและใช้งานง่าย",
}

const experiences = [
  {
    title: "ฝึกงาน IT Support (โรงพยาบาลหัวหิน)",
    company: "โรงพยาบาลหัวหิน",
    period: "2021",
    location: "หัวหิน, ประจวบคีรีขันธ์",
    description: "ดูแลและสนับสนุนระบบ IT ภายในโรงพยาบาล รวมถึงการแก้ไขปัญหาทางเทคนิคและการฝึกอบรมผู้ใช้งาน",
    achievements: [
      "แก้ไขปัญหาทางเทคนิค",
      "ได้รับคำชมจากผู้บริหารเรื่องการบริการและความรวดเร็วในการแก้ไขปัญหา",

    ],
    technologies: ["-", "-", "-", "-", "-"],
  },

  {
    title: "Front-End Developer ( UI )",
    company: "Ez-Developer & Pixel-Team",
    period: "2024 - 2025",
    location: "ปทุมธานี",
    description: "ร่วมพัฒนาเว็บไซต์และแอปพลิเคชันในฐานะฟรีแลนซ์กับทีม เพื่อตอบโจทย์ธุรกิจหลากหลายประเภท ทั้งระบบ E-commerce และระบบจัดการภายในองค์กร โดยรับผิดชอบด้านการพัฒนา UI ให้สวยงาม ทันสมัย และใช้งานง่าย",
    achievements: [
      "ส่งมอบ UI โปรเจกต์ตรงตามกำหนดกว่า 95% ของงานทั้งหมด",
      "ออกแบบและพัฒนา UI สำหรับระบบ E-commerce ที่มีผู้ใช้งานมากกว่า 3,000 คน",
      "พัฒนาเว็บไซต์ที่มีประสิทธิภาพสูงและรองรับการใช้งานบนอุปกรณ์มือถือได้อย่างสมบูรณ์",
      "ได้รับคำชมจากลูกค้าเรื่องความสวยงามและใช้งานง่ายของ UI",
    ],
    technologies: ["React", "Next.js", "Nuxt.js" , "CSS", "Tailwind CSS", "Figma"]
  },

  {
    title: "Junior Frontend Developer (Freelance)",
    company: "Pixel-Team (J Ventures Co., Ltd. Project)",
    period: "2025 - ปัจจุบัน",
    location: "ปทุมธานี",
    description: "เข้าร่วมกับทีมงานของ J Ventures Co., Ltd. ในฐานะสมาชิก Pixel-Team เพื่อพัฒนา UI สำหรับระบบติดตามงาน (Tracking System) และ Backoffice ของบริษัท ทั้งในเวอร์ชัน Mobile และ Desktop โดยเน้นการออกแบบที่ตอบโจทย์การใช้งานจริงและประสบการณ์ผู้ใช้ที่ดี",
    achievements: [
      "ทำ UI สำหรับระบบหลังบ้านและแอปบนมือถือที่เน้น mobile-first",
      "ร่วมพัฒนาโปรเจกต์ที่ใช้เป็นส่วนหนึ่งของระบบภายในจริงของบริษัท J Ventures",
      "เรียนรู้และใช้ Nuxt Js พัฒนา UI ได้อย่างมีประสิทธิภาพภายในเวลา 3 เดือน"
    ],
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS"]
  },
]

const education = [
  {
    degree: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
    school: "มหาวิทยาลัยกรุงเทพ",
    period: "2022 - 2025",
    gpa: "2.42",
    activities: ["-", "-"],
  },
]

const skills = [
  { category: "Frontend Frameworks", items: ["React", "Next.js", "Vue.Js", "Nuxt.Js"], level: 60 },
  { category: "Languages", items: ["TypeScript", "JavaScript", "HTML5", "CSS3"], level: 50 },
  { category: "Styling", items: ["Tailwind CSS", "bootstrap"], level: 85 },
  { category: "Tools & Others", items: ["Git", "Figma", "xampp"], level: 70 },
]

const certifications = [
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialId: "ABC123456",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022",
    credentialId: "DEF789012",
  },
]

const languages = [
  { name: "ไทย", level: "Native" },
  { name: "English", level: "Basic" },
]

export function ResumeContent() {
  const showCerts = false // เปลี่ยนเป็น false หากต้องการซ่อน

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">


        {/* Personal Info Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 mb-6">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{personalInfo.title}</p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-400" />
              {personalInfo.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-400" />
              {personalInfo.phone}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple-400" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-orange-400" />
              {personalInfo.website}
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full" />
                สรุปประสบการณ์
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{personalInfo.summary}</p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-blue-400" />
                ประสบการณ์การทำงาน
              </h2>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-400 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">ผลงานที่โดดเด่น:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-emerald-400" />
                การศึกษา
              </h2>

              {education.map((edu, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground text-nowrap">{edu.degree}</h3>
                        <p className="text-lg text-emerald-400 font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">เกรดเฉลี่ย: {edu.gpa}</p>
                      </div>
                      <div className="flex items-center gap-1 px-1 text-xs md:text-[12px] text-muted-foreground mt-2 md:mt-1 whitespace-nowrap">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">กิจกรรม:</h4>
                      <ul className="space-y-1">
                        {edu.activities.map((activity, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground">ทักษะ</h2>

              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">{skillGroup.category}</h3>

                      <div className="space-y-3">
                        {skillGroup.items.map((skill) => (
                          <div key={skill} className="flex items-center">
                            <span className="text-sm text-muted-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            {showCerts && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <Award className="h-6 w-6 text-orange-400" />
                  ใบรับรอง
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="border-border/50">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground text-sm">{cert.name}</h3>
                        <p className="text-orange-400 text-sm font-medium">{cert.issuer}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">{cert.date}</span>
                          <span className="text-xs text-muted-foreground">ID: {cert.credentialId}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground">ภาษา</h2>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{lang.name}</span>
                        <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                          {lang.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          html, body {
            width: 100%;
            height: auto;
            background: #fff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            font-size: 13px !important;
            line-height: 1.5 !important;
          }
          .navbar, .portfolio-navbar, .enhanced-navbar {
            display: none !important;
          }
          .bg-gradient-to-r, .bg-gradient-to-b, .bg-gradient-to-br, .bg-gradient-to-l, .bg-gradient-to-t, .bg-gradient-to-tr, .bg-gradient-to-tl, .bg-gradient-to-bl {
            background: none !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .container {
            max-width: 900px !important;
            margin: 0 auto !important;
            padding: 0 !important;
          }
          .card {
            break-inside: avoid;
            page-break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #eee !important;
            background: #fff !important;
          }
          .border-border\/50 {
            border-color: #eee !important;
          }
          h1, h2, h3 {
            break-after: avoid;
            page-break-after: avoid;
            color: #222 !important;
            background: none !important;
            text-shadow: none !important;
          }
          .text-muted-foreground {
            color: #555 !important;
          }
          .rounded-full, .rounded-lg {
            border-radius: 8px !important;
          }
          .w-32.h-32.mx-auto.rounded-full.bg-gradient-to-br {
            display: none !important;
          }
          .flex.justify-end.gap-4.mb-8.print\\:hidden {
            display: none !important;
          }
          .pt-24.pb-12 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .mb-12 {
            margin-bottom: 16px !important;
          }
          .mb-6 {
            margin-bottom: 12px !important;
          }
          .mb-4 {
            margin-bottom: 8px !important;
          }
          .p-8 {
            padding: 16px !important;
          }
          .p-6 {
            padding: 12px !important;
          }
          .p-4 {
            padding: 8px !important;
          }
          .gap-8 {
            gap: 16px !important;
          }
          .gap-6 {
            gap: 12px !important;
          }
          .gap-4 {
            gap: 8px !important;
          }
          .space-y-8 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 16px !important;
          }
          .space-y-6 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 12px !important;
          }
          .space-y-4 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 8px !important;
          }
          .space-y-3 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 6px !important;
          }
          .flex.flex-wrap.justify-center.gap-6.text-sm.text-muted-foreground {
            flex-wrap: wrap !important;
            gap: 8px !important;
          }
          .grid-cols-1.lg\:grid-cols-3 {
            display: grid !important;
            grid-template-columns: 2fr 1fr 1fr !important;
            gap: 16px !important;
          }
          .lg\:col-span-2 {
            grid-column: span 2 !important;
          }
          .space-y-8 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 16px !important;
          }
          .page-break {
            page-break-before: always;
            break-before: page;
          }
        }
      `}</style>
    </div>
  )
}
