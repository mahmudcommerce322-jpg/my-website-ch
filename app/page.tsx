"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, ExternalLink, Code, Users, MessageSquare, GitBranch } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-blue-100 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-blue-900">Mahmud Akhtar</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#skills" className="text-slate-700 hover:text-blue-600 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <img
                  src="/young-man-headshot.png"
                  alt="Mahmud Akhtar"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 animate-fade-in">
              Hi, I'm <span className="text-blue-600">Mahmud Akhtar</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-fade-in-delay">
              Commerce Student & Aspiring Web Developer
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg animate-fade-in-delay-2"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">About Me</h2>
          <div className="text-center">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a passionate commerce student with a growing love for web development and technology. Currently
              pursuing my studies while dedicating time to learning modern web technologies and building projects that
              solve real-world problems.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              My journey in coding started with curiosity and has evolved into a genuine passion for creating beautiful,
              functional websites. I believe in continuous learning and am always excited to take on new challenges that
              push my skills to the next level.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "HTML", icon: Code, color: "bg-orange-100 text-orange-700" },
              { name: "CSS", icon: Code, color: "bg-blue-100 text-blue-700" },
              { name: "JavaScript", icon: Code, color: "bg-yellow-100 text-yellow-700" },
              { name: "GitHub", icon: Github, color: "bg-slate-100 text-slate-700" },
              { name: "Vercel", icon: GitBranch, color: "bg-black text-white" },
              { name: "Communication", icon: MessageSquare, color: "bg-green-100 text-green-700" },
              { name: "Teamwork", icon: Users, color: "bg-purple-100 text-purple-700" },
            ].map((skill, index) => (
              <Card key={skill.name} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${skill.color} flex items-center justify-center`}
                  >
                    <skill.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Website",
                description:
                  "A modern e-commerce platform built with HTML, CSS, and JavaScript featuring responsive design and interactive shopping cart.",
                image: "/modern-ecommerce-mockup.png",
              },
              {
                title: "Portfolio Website",
                description:
                  "Personal portfolio showcasing web development skills with clean design and smooth animations.",
                image: "/placeholder-f4fcl.png",
              },
              {
                title: "Task Management App",
                description:
                  "A productivity app for managing daily tasks with local storage and intuitive user interface.",
                image: "/task-management-app.png",
              },
              {
                title: "Weather Dashboard",
                description: "Real-time weather application with location-based forecasts and beautiful UI design.",
                image: "/weather-app-dashboard.png",
              },
              {
                title: "Restaurant Website",
                description:
                  "Responsive restaurant website with menu display, reservation system, and contact information.",
                image: "/restaurant-homepage.png",
              },
              {
                title: "Blog Platform",
                description:
                  "Simple blog platform with article management and responsive layout for optimal reading experience.",
                image: "/blog-website-layout.png",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Let's Connect</h3>
              <p className="text-slate-700 mb-6">
                I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
                discuss a project or just say hello!
              </p>
              <div className="flex items-center space-x-3 text-slate-700">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:mahmud.akhtar@email.com" className="hover:text-blue-600 transition-colors">
                  mahmud.akhtar@email.com
                </a>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="border-slate-200" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="border-slate-200" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={4} className="border-slate-200" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">© 2025 Mahmud Akhtar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
