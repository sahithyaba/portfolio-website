"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Code, Edit, Palette, Search, Mic, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Works() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sahithya B A
            </motion.span>
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] bg-clip-text text-transparent">
            My Works
          </h1>
        </div>

        <p className="text-muted-foreground mb-8 max-w-3xl">
          Explore my professional works across different domains including development, design, content writing, and
          more.
        </p>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:max-w-3xl mx-auto">
            <TabsTrigger value="all">All Works</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceSection
                title="Development"
                icon={Code}
                works={[
                  {
                    title: "Shruti Dhavala",
                    description: "Personal website development",
                    link: "https://shrutidhavala.com/",
                  },
                  { title: "Filmytics", description: "Film analytics platform", link: "https://filmytics.com" },
                  {
                    title: "Wallarant",
                    description: "Mobile application",
                    link: "https://play.google.com/store/apps/details?id=com.brusooo.wallarant",
                  },
                ]}
              />

              <ServiceSection
                title="Content Writing"
                icon={Edit}
                works={[
                  {
                    title: "Writing Portfolio",
                    description: "Collection of writing samples",
                    link: "https://natural-laundry-d0b.notion.site/9a74c7a995ab4e3e911262bcb258e443?v=855817140bbc4ceb9f4e1be82b26781c",
                  },
                  { title: "Filmytics Blog", description: "Film analysis and reviews", link: "https://filmytics.com" },
                  { title: "Hyre Blog", description: "HR and recruitment content", link: "https://blog.hyrenet.in" },
                ]}
              />

              <ServiceSection
                title="Anchoring & Hosting"
                icon={Mic}
                works={[
                  {
                    title: "Annual Tech Conference",
                    description: "Hosted the main stage presentations",
                    link: "/anchoring-works",
                  },
                  {
                    title: "Sahithya Versatile's Voices",
                    description: "Podcast on Spotify",
                    link: "/anchoring-works?tab=podcast",
                  },
                  {
                    title: "Corporate Events",
                    description: "Professional emcee services",
                    link: "/anchoring-works?tab=corporate",
                  },
                ]}
              />

              <ServiceSection
                title="LinkedIn Management"
                icon={Linkedin}
                works={[
                  { title: "Profile Optimization", description: "Professional LinkedIn profiles", link: "#" },
                  { title: "Content Strategy", description: "Engagement-focused content", link: "#" },
                  { title: "Network Growth", description: "Strategic connection building", link: "#" },
                ]}
              />

              <ServiceSection
                title="SEO"
                icon={Search}
                works={[
                  { title: "Filmytics", description: "Content, On-Page, Tech SEO", link: "https://filmytics.com" },
                  { title: "Hyre Blog", description: "Content, On-Page, Tech SEO", link: "https://blog.hyrenet.in" },
                  {
                    title: "OneUs Travels",
                    description: "Content, On-Page, Tech SEO",
                    link: "https://oneustravels.com",
                  },
                ]}
              />

              <ServiceSection
                title="Design"
                icon={Palette}
                works={[
                  {
                    title: "Design Portfolio",
                    description: "UI/UX and graphic design work",
                    link: "https://www.figma.com/proto/jIsvFprotyWo2vaYWQljFN/Work---My-Design?node-id=1121-875&node-type=frame&t=6oWKxok3tEn2nl27-1&scaling=min-zoom&content-scaling=fixed&page-id=1121%3A874",
                  },
                  { title: "Mobile App UI", description: "User interface design", link: "#" },
                  { title: "Brand Identity", description: "Logo and visual identity", link: "#" },
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  title: "Shruti Dhavala",
                  description: "Personal website development",
                  link: "https://shrutidhavala.com/",
                },
                { title: "Filmytics", description: "Film analytics platform", link: "https://filmytics.com" },
                {
                  title: "Wallarant",
                  description: "Mobile application",
                  link: "https://play.google.com/store/apps/details?id=com.brusooo.wallarant",
                },
                { title: "IconLot", description: "Icon library platform", link: "https://iconlot.vercel.app/" },
                { title: "Hyre Admin", description: "Admin dashboard", link: "https://hyre-admin.guvi.in/dashboard" },
                {
                  title: "Task App",
                  description: "Task management application",
                  link: "https://sahithyaba-task.netlify.app/",
                },
              ].map((project, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <WorkCard
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    imageUrl="/placeholder.svg?height=200&width=300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="content" className="mt-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  title: "Writing Portfolio",
                  description: "Collection of writing samples",
                  link: "https://natural-laundry-d0b.notion.site/9a74c7a995ab4e3e911262bcb258e443?v=855817140bbc4ceb9f4e1be82b26781c",
                },
                { title: "Filmytics Blog", description: "Film analysis and reviews", link: "https://filmytics.com" },
                { title: "Hyre Blog", description: "HR and recruitment content", link: "https://blog.hyrenet.in" },
                { title: "OneUs Travels", description: "Travel content and guides", link: "https://oneustravels.com" },
                {
                  title: "Sahithya Versatile's Voices",
                  description: "Podcast on Spotify",
                  link: "/anchoring-works?tab=podcast",
                },
                {
                  title: "LinkedIn Articles",
                  description: "Professional thought leadership",
                  link: "https://www.linkedin.com/in/sahithyaba/",
                },
              ].map((project, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <WorkCard
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    imageUrl="/placeholder.svg?height=200&width=300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="design" className="mt-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  title: "Design Portfolio",
                  description: "UI/UX and graphic design work",
                  link: "https://www.figma.com/proto/jIsvFprotyWo2vaYWQljFN/Work---My-Design?node-id=1121-875&node-type=frame&t=6oWKxok3tEn2nl27-1&scaling=min-zoom&content-scaling=fixed&page-id=1121%3A874",
                },
                { title: "Mobile App UI", description: "User interface design for mobile applications", link: "#" },
                { title: "Brand Identity", description: "Logo and visual identity systems", link: "#" },
                { title: "Web Interfaces", description: "Responsive website designs", link: "#" },
              ].map((project, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <WorkCard
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    imageUrl="/placeholder.svg?height=200&width=300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function ServiceSection({
  title,
  icon: Icon,
  works,
}: {
  title: string
  icon: any
  works: { title: string; description: string; link: string }[]
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-full bg-gradient-to-r from-[#8b5cf6]/10 to-[#c084fc]/10 p-2">
            <Icon className="h-5 w-5 text-[#8b5cf6]" />
          </div>
          <h2 className="text-lg font-bold">{title}</h2>
        </div>

        <div className="space-y-3">
          {works.map((work, index) => (
            <Link key={index} href={work.link} className="block group">
              <div className="p-3 rounded-md hover:bg-gradient-to-r hover:from-[#8b5cf6]/5 hover:to-[#c084fc]/5 transition-colors">
                <h3 className="font-medium group-hover:text-[#8b5cf6] transition-colors">{work.title}</h3>
                <p className="text-sm text-muted-foreground">{work.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function WorkCard({
  title,
  description,
  link,
  imageUrl,
}: {
  title: string
  description: string
  link: string
  imageUrl: string
}) {
  return (
    <Card className="overflow-hidden group h-full">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button variant="link" className="p-0 h-auto mt-2 group" asChild>
          <Link href={link} target="_blank">
            View Project
            <ArrowLeft className="ml-1 h-3 w-3 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

