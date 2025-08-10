import { ResumeContent } from "@/components/resume-content"

export const metadata = {
  title: "Resume - Frontend Developer",
  description: "ประวัติการทำงานและประสบการณ์ของ Frontend Developer",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <ResumeContent />
    </div>
  )
}
