"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useRef, useEffect } from "react"

// EmailJS configuration
declare global {
  interface Window {
    emailjs: any;
  }
}

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "phanuphong.ming@bumail.net",
    href: "mailto:phanuphong.ming@bumail.net",
    color: "text-blue-400",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "โทรศัพท์",
    value: "+66 82-929-7423",
    href: "tel:+66829297423",
    color: "text-emerald-400",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "ที่อยู่",
    value: "ปทุมธานี คลองหลวง คลองหนึ่ง  12120  ประเทศไทย",
    href: "https://maps.google.com/?q=ปทุมธานี+คลองหลวง+คลองหนึ่ง+12120+ประเทศไทย",
    color: "text-purple-400",
  },
]

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [emailJSLoaded, setEmailJSLoaded] = useState(false)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  })

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init('AvqgfHz1yVpoCJHcj')
        setEmailJSLoaded(true)
      }
    }
    script.onerror = () => {
      setEmailJSLoaded(false)
    }
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  // ฟังก์ชันสำหรับรีเซ็ต status หลังจากแสดงข้อความสำเร็จ
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle')
      }, 5000) // แสดงข้อความสำเร็จ 5 วินาที
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!window.emailjs || !emailJSLoaded) {
      setStatus('error')
      return
    }
    if (!formData.user_name || !formData.user_email || !formData.subject || !formData.message) {
      setStatus('error')
      return
    }
    setIsLoading(true)
    setStatus('idle')
    try {
      const templateParams = {
        from_name: formData.user_name,
        from_email: formData.user_email,
        name: formData.user_name, // เพิ่ม name สำหรับ template ที่ใช้ {{name}}
        email: formData.user_email, // เพิ่ม email สำหรับ template ที่ใช้ {{email}}
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.user_email,
        formatted_message: `จากผู้ติดต่อ: ${formData.user_name}\nอีเมล: ${formData.user_email}\nหัวข้อ: ${formData.subject}\n\nข้อความ:\n${formData.message}\n\nเวลาที่ส่ง: ${new Date().toLocaleString('th-TH')}`
      }
      const result = await window.emailjs.send(
        'service_vrd5jda',
        'template_cr1ombd',
        templateParams,
        'AvqgfHz1yVpoCJHcj'
      )
      if (result.status === 200) {
        setStatus('success')
        setFormData({ user_name: '', user_email: '', subject: '', message: '' })
        if (form.current) form.current.reset()
        if (window.Notification && Notification.permission === 'granted') {
          new Notification('ส่งข้อความสำเร็จ!', {
            body: 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับเร็วๆ นี้',
            icon: '/favicon.ico'
          })
        } else if (window.Notification && Notification.permission !== 'denied') {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              new Notification('ส่งข้อความสำเร็จ!', {
                body: 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับเร็วๆ นี้',
                icon: '/favicon.ico'
              })
            }
          })
        }
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/5 to-blue-950/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">
            ติดต่อ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            พร้อมรับงานใหม่และโอกาสในการร่วมงาน มาคุยกันเรื่องโปรเจคต์ของคุณ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">ช่องทางการติดต่อ</h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.title === "ที่อยู่" ? "_blank" : "_self"}
                    rel={info.title === "ที่อยู่" ? "noopener noreferrer" : undefined}
                    className="group block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-border/50 hover:border-border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`${info.color} group-hover:scale-110 transition-transform duration-300`}>
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-blue-400 transition-colors duration-300">
                              {info.title}
                            </h4>
                            <p className="text-muted-foreground">{info.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/*  Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">ส่งข้อความ</h3>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400"
                    >
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <div className="font-semibold">ส่งข้อความสำเร็จ! 🎉</div>
                        <div className="text-sm opacity-90">ขอบคุณที่ติดต่อเรา เราจะตอบกลับเร็วๆ นี้</div>
                      </div>
                    </motion.div>
                  )}
                  
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                    >
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">เกิดข้อผิดพลาด</div>
                        <div className="text-sm opacity-90">กรุณาลองใหม่อีกครั้ง หรือติดต่อโดยตรงที่ phanuphong.ming@bumail.net</div>
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">ชื่อ</label>
                      <Input
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleInputChange}
                        placeholder="ชื่อของคุณ"
                        className="border-border/50 focus:border-blue-400 transition-colors duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">อีเมล</label>
                      <Input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-border/50 focus:border-blue-400 transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">หัวข้อ</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="หัวข้อที่ต้องการสอบถาม"
                      className="border-border/50 focus:border-blue-400 transition-colors duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">ข้อความ</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="รายละเอียดที่ต้องการสอบถาม..."
                      rows={5}
                      className="border-border/50 focus:border-blue-400 transition-colors duration-300 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || !emailJSLoaded}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        กำลังส่ง...
                      </>
                    ) : !emailJSLoaded ? (
                      <>
                        <div className="animate-pulse h-4 w-4 bg-white/50 rounded mr-2" />
                        รอโหลด EmailJS...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        ส่งข้อความ
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
