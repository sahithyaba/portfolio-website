"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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

export default function CoAuthoredBooks() {
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
            Co-Authored Books
          </h1>
        </div>

        <p className="text-muted-foreground mb-8 max-w-3xl">
          I've contributed to over 25 co-authored books, including 7 World Record Winning Books, and have been featured
          in international anthologies. Below is a selection of my collaborative works.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {coAuthoredBooks.map((book, index) => (
            <motion.div key={index} variants={fadeIn}>
              <CoAuthoredBookCard
                title={book.title}
                description={book.description}
                publisher={book.publisher}
                year={book.year}
                achievement={book.achievement}
              />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}

function CoAuthoredBookCard({
  title,
  description,
  publisher,
  year,
  achievement,
}: {
  title: string
  description: string
  publisher: string
  year: string
  achievement?: string
}) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-gradient-to-r from-[#8b5cf6]/10 to-[#c084fc]/10 p-3 flex-shrink-0">
            <BookOpen className="h-6 w-6 text-[#8b5cf6]" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>

            <div className="mt-4 space-y-1">
              <div className="text-sm">
                <span className="font-medium">Publisher:</span> {publisher}
              </div>
              <div className="text-sm">
                <span className="font-medium">Year:</span> {year}
              </div>
              {achievement && (
                <div className="mt-2">
                  <span className="inline-block bg-gradient-to-r from-[#8b5cf6]/20 to-[#c084fc]/20 text-[#8b5cf6] text-xs px-2 py-1 rounded-full">
                    {achievement}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const coAuthoredBooks = [
  {
    title: "Songs of Peace: The World's Biggest Anthology",
    description: "A collection of poems promoting peace and harmony from writers around the world.",
    publisher: "The League of Poets",
    year: "2020",
    achievement: "Top 1000 Globally",
  },
  {
    title: "World Record Book 1",
    description: "Part of a record-breaking anthology series featuring diverse voices and perspectives.",
    publisher: "Global Writers Association",
    year: "2021",
    achievement: "World Record Winner",
  },
  {
    title: "World Record Book 2",
    description: "Continuation of the record-breaking anthology series with international contributors.",
    publisher: "Global Writers Association",
    year: "2021",
    achievement: "World Record Winner",
  },
  {
    title: "World Record Book 3",
    description: "Third installment in the acclaimed anthology series recognized for its global reach.",
    publisher: "Global Writers Association",
    year: "2022",
    achievement: "World Record Winner",
  },
  {
    title: "World Record Book 4",
    description: "Fourth volume in the prestigious anthology series featuring exceptional writing.",
    publisher: "Global Writers Association",
    year: "2022",
    achievement: "World Record Winner",
  },
  {
    title: "World Record Book 5",
    description: "Fifth collection in the groundbreaking anthology series with diverse themes.",
    publisher: "Global Writers Association",
    year: "2023",
    achievement: "World Record Winner",
  },
  {
    title: "World Record Book 6",
    description: "Sixth entry in the celebrated anthology series showcasing literary excellence.",
    publisher: "Global Writers Association",
    year: "2023",
    achievement: "World Record Winner",
  },
  {
    title: "World Record Book 7",
    description: "Seventh volume in the record-setting anthology series with global contributors.",
    publisher: "Global Writers Association",
    year: "2024",
    achievement: "World Record Winner",
  },
  {
    title: "Collaborative Anthology 1",
    description: "A themed collection exploring contemporary social issues through multiple perspectives.",
    publisher: "Literary Press",
    year: "2020",
  },
  {
    title: "Collaborative Anthology 2",
    description: "An exploration of human emotions and experiences through collaborative storytelling.",
    publisher: "Creative Writing Collective",
    year: "2021",
  },
  {
    title: "Collaborative Anthology 3",
    description: "A multi-author work examining the complexities of modern relationships.",
    publisher: "Modern Writers Guild",
    year: "2022",
  },
  {
    title: "Collaborative Anthology 4",
    description: "A diverse collection of voices addressing environmental concerns and sustainability.",
    publisher: "Green Earth Publications",
    year: "2022",
  },
]

