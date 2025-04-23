"use client"

import React from "react"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code,
  Edit,
  Palette,
  Search,
  Mic,
  Linkedin,
  Mail,
  Github,
  BookOpen,
  Server,
  Rocket,
  Radio,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

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

export default function Home() {
  const { theme } = useTheme()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: `Website - Personal Portfolio: ${formData.get('subject')}`,
          message: formData.get('message'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  React.useEffect(() => {
    // Check for URL parameters when component mounts
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.hash.split("?")[1])
      const tab = urlParams.get("tab")
      if (tab) {
        // Find the portfolio section and scroll to it
        const portfolioSection = document.getElementById("portfolio")
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: "smooth" })

          // Set the active tab
          setTimeout(() => {
            const tabElement = document.querySelector(`[data-value="${tab}"]`)
            if (tabElement) {
              ;(tabElement as HTMLElement).click()
            }
          }, 500)
        }
      }
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
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
          <nav className="hidden md:flex gap-6">
            {["About", "Experience", "Services", "Portfolio", "Books", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium transition-colors hover:text-primary relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] hover:from-[#7c3aed] hover:to-[#a855f7]"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Badge variant="outline" className="text-sm px-3 py-1 border-primary/30">
                    Software Developer • Author • Show Host
                  </Badge>
                </motion.div>
                <motion.h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Hi, I'm Sahithya
                </motion.h1>
              </div>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                A versatile software developer at GUVI Geek Networks, bestselling author, and show host passionate about
                creating impactful digital experiences.
              </motion.p>

              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] hover:from-[#7c3aed] hover:to-[#a855f7]"
                >
                  <Link href="#portfolio">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="https://www.linkedin.com/in/sahithyaba/" target="_blank">
                    <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    LinkedIn
                  </Link>
                </Button>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gradient-to-r from-[#8b5cf6]/10 to-[#c084fc]/10 -z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-12 left-20 w-12 h-12 rounded-md bg-gradient-to-r from-[#c084fc]/10 to-[#8b5cf6]/10 -z-10"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
            <motion.div
              className="flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-4 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 to-[#c084fc]/10 z-10"></div>
                <Image
                  src="/sahithyaba.png?height=400&width=400"
                  alt="Sahithya B A"
                  fill
                  className="object-cover transition-all hover:scale-105 duration-700"
                  priority
                />
              </div>

              {/* Elements near the profile image */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-r from-[#8b5cf6]/20 to-[#c084fc]/20 rounded-full p-3"
                whileHover={{ scale: 1.1 }}
              >
                <Code className="h-6 w-6 text-[#8b5cf6]" />
              </motion.div>
              <motion.div
                className="absolute top-1/4 -left-8 bg-gradient-to-r from-[#8b5cf6]/20 to-[#c084fc]/20 rounded-full p-3"
                whileHover={{ scale: 1.1 }}
              >
                <BookOpen className="h-6 w-6 text-[#8b5cf6]" />
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 -right-8 bg-gradient-to-r from-[#8b5cf6]/20 to-[#c084fc]/20 rounded-full p-3"
                whileHover={{ scale: 1.1 }}
              >
                <Mic className="h-6 w-6 text-[#8b5cf6]" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          className="container py-12 md:py-24 lg:py-32 bg-muted/40 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm a multidisciplinary professional with expertise across software development, content creation,
              writing, and show hosting. With a passion for creating impactful digital experiences, I help businesses
              and individuals bring their visions to life through clean code, compelling content, and innovative
              solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[85%] mt-8">
              <motion.div
                className="flex flex-col items-center p-4 rounded-lg bg-background border"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="rounded-full bg-gradient-to-r from-[#a855f7]/10 to-[#d8b4fe]/10 p-3 mb-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Software Developer</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Building robust applications with modern technologies
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-4 rounded-lg bg-background border"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="rounded-full bg-gradient-to-r from-[#a855f7]/10 to-[#d8b4fe]/10 p-3 mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Published Author</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">5 solo books and co-authored 25+ books</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-4 rounded-lg bg-background border"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="rounded-full bg-gradient-to-r from-[#a855f7]/10 to-[#d8b4fe]/10 p-3 mb-3">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Show Host & Emcee</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Podcast host and professional event anchor
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="container py-12 md:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My journey through technology, writing, and creative endeavors.
            </p>
          </div>

          <div className="mx-auto max-w-[58rem] mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">
                        Current
                      </Badge>
                      <h3 className="text-lg font-medium">Software Developer at GUVI Geek Networks</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Full-stack development for HyreNet platform</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-4 border-l-2 border-primary/20 ml-2">
                    <p>
                      As a Software Developer at GUVI Geek Networks, I contribute to the development of 'HyreNet' on
                      both the admin and user sides. My responsibilities involve utilizing a diverse tech stack for
                      developing crucial features, optimizations, scripts, and bug fixes.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Additional Responsibilities:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Host monthly internal technical show 'Geek Knight' for the development team</li>
                        <li>Spokesperson for 'She Codes' women-focused tech community</li>
                        <li>Secretary of the Dance Club at GUVI</li>
                        <li>Appeared in several GUVI videos and created a VLOG for TNCPL</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-medium">Show Host / Podcaster</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sahithya Versatile's Voices - Spotify for Podcasters
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-4 border-l-2 border-primary/20 ml-2">
                    <p>I host "Sahithya Versatile's Voices," a podcast where I:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Conceptualize engaging episode topics exploring life, tech, and storytelling</li>
                      <li>Craft compelling narratives on tech innovation and work-life balance</li>
                      <li>Share motivational stories inspiring listeners to embrace life's diversity</li>
                      <li>Manage end-to-end production, fostering an engaged listener community</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-medium">Digital Content Creator</h3>
                    <p className="text-sm text-muted-foreground mt-1">YouTube Channel - Sahithya Balasubramaniam</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-4 border-l-2 border-primary/20 ml-2">
                    <p>
                      I create and manage my YouTube channel, producing content that engages viewers and builds
                      community. My content focuses on technology, lifestyle, and creative topics.
                    </p>
                    <p>Skills: Content Management, Time Management, Video Production, Storytelling</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-medium">Blogger / Content Writer</h3>
                    <p className="text-sm text-muted-foreground mt-1">Monomousumi Services - Freelance</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-4 border-l-2 border-primary/20 ml-2">
                    <p>
                      I create engaging blog content on various topics including culture, family, and personal
                      development. Some of my notable works include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>PONGAL - Cultural exploration</li>
                      <li>Power of Joint Family - Social commentary</li>
                      <li>Always try to: BE YOU! - Personal development</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-medium">Award-Winning Writer</h3>
                    <p className="text-sm text-muted-foreground mt-1">International Writing Competitions</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-4 border-l-2 border-primary/20 ml-2">
                    <p>My writing has been recognized in numerous international competitions:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Achieved seven victories in the International Monthly Essay Writing Competition by Monomousumi,
                        securing both Second and Third places with distinctions like "Praiseworthy" and "Outstanding"
                      </li>
                      <li>Awarded the Editor's Choice in the Creative Writing Contest organized by Monomousumi</li>
                      <li>
                        Ranked in the Top 1000 globally in The League of Poets' Poem Writing Competition, with a
                        co-authored poem featured in "Songs of Peace: The World's Biggest Anthology 2020"
                      </li>
                      <li>
                        Won "Best Performer" in the National Essay Writing Competition (National Space Science
                        Competition 2020) organized by Go4Guru Inc.
                      </li>
                      <li>Contributed to 7 World Record Winning Books as a co-author</li>
                    </ul>
                    <p className="mt-4 font-medium">
                      Skills: Technical Writing, Creative Content Creation, Grammar, Non-fiction Writing, Blogging,
                      Planning, Written Communication
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-medium">UI/UX Designer & Front-end Developer</h3>
                    <p className="text-sm text-muted-foreground mt-1">Logic Research Labs - Internship</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-4 border-l-2 border-primary/20 ml-2">
                    <p>
                      During my internship at Logic Research Labs, I led the UI/UX design for a mobile application in
                      the 'Task Management' project, enhancing my skills in critical thinking, wireframing, and design.
                      I gained proficiency in Balsamiq and Figma and improved my communication within cross-functional
                      teams.
                    </p>
                    <p>
                      Additionally, I served as a front-end developer for the "MAPIMS" project, broadening my skill set
                      and dedication to delivering impactful tech solutions.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-medium">Event Host & Emcee</h3>
                    <p className="text-sm text-muted-foreground mt-1">College and Professional Events</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pl-4 border-l-2 border-primary/20 ml-2">
                    <p>
                      During my college years, I hosted more than 25 events, including those with crowds of 3,500 to
                      4,500 people. These experiences helped me develop strong public speaking and audience engagement
                      skills.
                    </p>
                    <p>
                      I continue to serve as an emcee for various professional and community events, bringing energy and
                      professionalism to each occasion.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.section>

        <motion.section
          id="services"
          className="container py-12 md:py-24 lg:py-32 bg-muted/40 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] bg-clip-text text-transparent">
              My Services
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I offer a wide range of professional services to help you achieve your goals.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={Code}
                title="Development"
                description="Websites, web applications, and mobile apps built with modern technologies and best practices."
                link="#portfolio?tab=development"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={Edit}
                title="Content Writing"
                description="Website content, blogs, articles, and personalized writing tailored to your audience."
                link="#portfolio?tab=writing"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={Mic}
                title="Anchoring & Hosting"
                description="Professional event hosting, emcee services, and podcast hosting for various occasions."
                link="/anchoring-works"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={Linkedin}
                title="LinkedIn Management"
                description="Profile optimization, content strategy, and engagement to boost your professional presence."
                link="#portfolio?tab=writing"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={Search}
                title="SEO"
                description="Technical SEO, on-page optimization, and content strategies to improve visibility."
                link="#portfolio?tab=seo"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={Palette}
                title="Design"
                description="UI/UX design, graphic design, and visual assets that elevate your brand."
                link="#portfolio?tab=design"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={Server}
                title="Software Support"
                description="Maintenance, bug fixes, and ongoing support to keep your applications running smoothly."
                link="#portfolio?tab=development"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={Rocket}
                title="Deployment"
                description="Seamless deployment to various platforms including AWS, Vercel, and more."
                link="#portfolio?tab=development"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard
                icon={Radio}
                title="Voice Over"
                description="Professional voice overs for commercials, explainer videos, and other audio content."
                link="/anchoring-works"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          id="portfolio"
          className="container py-12 md:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] bg-clip-text text-transparent">
              My Portfolio
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore my work across different categories.
            </p>
          </div>

          <Tabs defaultValue="development" className="mt-12 w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:max-w-3xl mx-auto">
              <TabsTrigger value="development" data-value="development">
                Development
              </TabsTrigger>
              <TabsTrigger value="writing" data-value="writing">
                Writing
              </TabsTrigger>
              <TabsTrigger value="design" data-value="design">
                Design
              </TabsTrigger>
              <TabsTrigger value="seo" data-value="seo">
                SEO
              </TabsTrigger>
            </TabsList>
            <TabsContent value="development" className="mt-8">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Shruti Dhavala"
                    description="Personal website development"
                    link="https://shrutidhavala.com/"
                    imageUrl="/images/projects/shrutiDhavala.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Filmytics"
                    description="Film analytics platform"
                    link="https://filmytics.com"
                    imageUrl="/images/projects/filmytics.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="HyreNet"
                    description="Landing Page"
                    link="https://hyre-admin.guvi.in/dashboard"
                    imageUrl="/images/projects/hyrenet.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Blog - Hyrenet"
                    description="Hyrenet Blog"
                    link="https://blog.hyrenet.in/"
                    imageUrl="/images/projects/hyrenetBlog.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Ghostly"
                    description="Self Destructing Messages"
                    link="https://ghostly.baserock.in/"
                    imageUrl="/images/projects/ghostly.png"
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
            <TabsContent value="writing" className="mt-8">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Writing Portfolio"
                    description="Collection of writing samples"
                    link="https://natural-laundry-d0b.notion.site/9a74c7a995ab4e3e911262bcb258e443?v=855817140bbc4ceb9f4e1be82b26781c"
                    imageUrl="/images/projects/writingPortfolio.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Filmytics"
                    description="Website Content Writing"
                    link="https://filmytics.com"
                    imageUrl="/images/projects/filmytics.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Hyre Blog"
                    description="Blog Writing, Recruitment"
                    link="https://blog.hyrenet.in"
                    imageUrl="/images/projects/hyrenetBlog.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="OneUs Travels"
                    description="Travel Website content"
                    link="https://oneustravels.com"
                    imageUrl="/images/projects/oneUsTravels.png"
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
            <TabsContent value="design" className="mt-8">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Author Design Portfolio"
                    description="UI/UX Design"
                    link="https://www.figma.com/proto/jIsvFprotyWo2vaYWQljFN/Work---My-Design?node-id=1121-875&node-type=frame&t=6oWKxok3tEn2nl27-1&scaling=min-zoom&content-scaling=fixed&page-id=1121%3A874"
                    imageUrl="/images/projects/authorDesignWebsite.png"
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
            <TabsContent value="seo" className="mt-8">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Filmytics"
                    description="Content, On-Page, Tech SEO"
                    link="https://filmytics.com"
                    imageUrl="/images/projects/filmytics.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Hyre Blog"
                    description="Content, On-Page, Tech SEO"
                    link="https://blog.hyrenet.in"
                    imageUrl="/images/projects/hyrenetBlog.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="OneUs Travels"
                    description="Content, On-Page, Tech SEO"
                    link="https://oneustravels.com"
                    imageUrl="/images/projects/oneUsTravels.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Ashok Minerals"
                    description="Content, On-Page SEO"
                    link="https://ashokminerals.vercel.app/"
                    imageUrl="/images/projects/ashokMinerals.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="AdsZoo"
                    description="Content, On-Page SEO"
                    link="https://adszoo.in"
                    imageUrl="/images/projects/adzoo.png"
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProjectCard
                    title="Shruti Dhavala"
                    description="Tech SEO"
                    link="https://shrutidhavala.com/"
                    imageUrl="/images/projects/shrutiDhavala.png"
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.section>

        <motion.section
          id="books"
          className="container py-12 md:py-24 lg:py-32 bg-muted/40 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] bg-clip-text text-transparent">
              Published Books
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Author of 5 solo books and co-author of 25+ books, with multiple international writing awards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {[
              {
                title: "Loving the Quest",
                description: "Amazon bestseller exploring personal journeys and growth",
                imageUrl: "/images/books/lovingTheQuest.PNG",
                link: "https://amzn.to/3xiuX6F",
                featured: true,
              },
              {
                title: "Stepping Into My Nineteen",
                description: "A coming-of-age story about self-discovery and growth",
                imageUrl: "/images/books/steppingIntoMyNineteen.jpg",
                link: "https://amzn.to/3tr89CC",
                featured: true,
              },
              {
                title: "On My Mind: Millions of Thoughts",
                description: "A collection of reflections and insights on life",
                imageUrl: "/images/books/onMyMind.png",
                link: "https://www.amazon.in/My-Mind-Millions-Thoughts-ebook/dp/B0BLM3WTB4/ref=sr_1_3?crid=2QV7Q5HXIS7DT&dib=eyJ2IjoiMSJ9.dj_HSENovlcMrLdg583R2OtnMMhTsXxmWnBMV5rfdBU6o6WE1Y_s9j_w7Bj_kGdxp8_nr9ewHJwcELZYk-N9-nmwQ7XCRHKShaDlSXajn3Q.qJ-4f8ObOE86crd3R-Nv3-K5_fGcvalZ0LSKIp53XDs&dib_tag=se&keywords=on+my+mind+millions+of+thoughts&qid=1739210695&s=books&sprefix=on+my+mind+millions+of+thought%2Cstripbooks%2C229&sr=1-3",
              },
              {
                title: "Whispering Everlasting Echoes",
                description: "Poetic expressions of timeless emotions and experiences",
                imageUrl: "/images/books/whisperingEverlastingEchoes.jpg",
                link: "https://www.amazon.in/Whispering-Everlasting-Echoes-Sahithya-Balasubramaniam/dp/9360942936",
              },
              { 
                title: "Polished Portrayals", 
                description: "Your latest literary creation exploring new themes",
                imageUrl: "/images/books/polishedPortrayals.jpg",
                link: "https://www.amazon.in/dp/B0DYF99JPC?ref_=pe_93986420_775043100",
              },
            ].map((book, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <BookCard
                  title={book.title}
                  description={book.description}
                  imageUrl={book.imageUrl}
                  link={book.link}
                  featured={book.featured}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 ">
            <h2 className="text-2xl font-bold text-center mb-6">Co-Authored Works</h2>
            <p className="text-muted-foreground max-w-[58rem] mx-auto text-center">
              I've contributed to over 25 co-authored books, including 7 World Record Winning Books, and have been
              featured in international anthologies like "Songs of Peace: The World's Biggest Anthology 2020."
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                className="bg-gradient-to-r from-[#8b5cf6]/10 to-[#c084fc]/10 hover:bg-gradient-to-r hover:from-[#8b5cf6]/30 hover:to-[#c084fc]/30"
                asChild
              >
                <Link href="/co-authored-books" target="_blank">
                  View All Co-Authored Books
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-gradient-to-r from-[#8b5cf6]/10 to-[#c084fc]/10 hover:bg-gradient-to-r hover:from-[#8b5cf6]/30 hover:to-[#c084fc]/30"
                asChild
              >
                <Link href="/anchoring-works" target="_blank">
                  View My Anchoring Works
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="container py-12 md:py-24 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Ready to start a project? Get in touch and let's discuss how I can help bring your vision to life.
              </p>
              <div className="space-y-2">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>sahithyabalasubramaniam@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <Link href="https://www.linkedin.com/in/sahithyaba/" target="_blank" className="hover:underline">
                    linkedin.com/in/sahithyaba
                  </Link>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/sahithyaba</span>
                </motion.div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full group bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] hover:from-[#7c3aed] hover:to-[#a855f7]"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Sahithya. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ y: -3, scale: 1.1 }}>
              <Link
                href="https://www.linkedin.com/in/sahithyaba/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3, scale: 1.1 }}>
              <Link href="https://github.com/sahithyaba" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3, scale: 1.1 }}>
              <Link href="mailto:sahithyabalasubramaniam@gmail.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
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
          className="h-full w-full object-contain transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button variant="link" className="p-0 h-auto mt-2 group" asChild>
          <Link href={link} target="_blank">
            View Project
            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
}: {
  icon: any
  title: string
  description: string
  link: string
}) {
  return (
    <Link href={link} className="block h-full">
      <Card className="flex flex-col items-center text-center p-6 h-full group hover:border-primary/50 transition-all duration-300 hover:shadow-md">
        <div className="rounded-full bg-gradient-to-r from-[#a855f7]/10 to-[#d8b4fe]/10 p-4 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#a855f7]/20 group-hover:to-[#d8b4fe]/20 transition-colors duration-300">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </Link>
  )
}

function BookCard({
  title,
  description,
  imageUrl,
  link,
  featured = false,
}: {
  title: string
  description: string
  imageUrl: string
  link?: string
  featured?: boolean
}) {
  return (
    <Card className={`overflow-hidden h-full flex flex-col ${featured ? "border-[#8b5cf6]/30" : ""}`}>
      <div className="relative mx-auto pt-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/5 to-transparent rounded-lg"></div>
        <div className="relative w-[150px] h-[220px]"> {/* Fixed container size */}
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`object-cover rounded shadow-md ${
              featured ? "border-2 border-[#8b5cf6]/20" : ""
            }`}
            sizes="(max-width: 150px) 100vw, 150px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {featured && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <CardContent className="p-4 text-center flex-1 flex flex-col justify-end">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-4 w-full bg-gradient-to-r from-[#8b5cf6]/5 to-[#c084fc]/5 hover:bg-gradient-to-r hover:from-[#8b5cf6]/20 hover:to-[#c084fc]/20"
          asChild
        >
          <Link href={link || "#"} target="_blank">
            Read Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

