"use client"
import { Button, Container } from "@mui/material"
import CodeIcon from "@mui/icons-material/Code"
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import CloudIcon from "@mui/icons-material/Cloud"
import FeedbackIcon from "@mui/icons-material/Feedback"
import Image from "next/image"

import Link from "next/link"
import gsap from "gsap"
import { useRef, useEffect, useState } from "react"

import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "test-c6a7a.firebaseapp.com",
  projectId: "test-c6a7a",
  storageBucket: "test-c6a7a.firebasestorage.app",
  messagingSenderId: "236410288126",
  appId: "1:236410288126:web:ff00bd9636ad60e20772af",
}

const app = initializeApp(firebaseConfig)









export default function LandingPage() {

  const [visitCount, setVisitCount] = useState(0)

  const pic = useRef(null)
  const header1 = useRef(null)
  const header2 = useRef(null)
  const header3 = useRef(null)
  const button = useRef(null)
  const container = useRef(null)
  const view = useRef(null)

  useEffect(() => {    

    const timeline = gsap.timeline();

    gsap.fromTo(
      pic.current,
      { x: 50, opacity: 0 },
      { x: -0, opacity: 1, duration: 1.5 }
    )



    timeline
      .fromTo(
        header1.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.3" // Starts slightly before the previous animation ends
      )
      .fromTo(
        header2.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.3" // Starts slightly before the previous animation ends
      )
      .fromTo(
        header3.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5 },
        "-=0.3" // Starts slightly before the previous animation ends
      )
      .fromTo(
        button.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5 },
        "-=1" // Starts earlier to sync with header3
      )
      .fromTo(
        view.current,
        { y : 50, opacity: 0 },
        { y : 0, opacity: 1, duration: 1.5 },
        "-=1" // Starts earlier to sync with header3
      ).
      fromTo(
        container.current,
        { opacity: 0 },
        {  opacity: 1, duration: .5}
      );


  }, []);


  useEffect(() => {
    
    async function incrementVisitAndReturnVisitCount() {

      const db = getFirestore(app)

      await addDoc(collection(db, "visit"), {
        visit: "visited",
      })

      const visit = collection(db, "visit")
      const visitSnapshot = await getDocs(visit)
      const visitCount = visitSnapshot.docs.length
      setVisitCount(visitCount)
    }

    incrementVisitAndReturnVisitCount()

  }, [])
  

  return (
    <Container maxWidth="lg" className="py-12 ">
    <section className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 ref={header1} className="text-5xl font-bold mb-4 opacity-0">
            Dev Starter
          </h1>
          <h1 ref={header2} className="text-2xl text-gray-600 mb-4 opacity-0">
            Simplify Your Development Setup
          </h1>
          <h1 ref={header3} className="text-gray-800 mb-6 text-md opacity-0">
            Dev Starter is your one-stop solution for kickstarting development projects. We provide easy-to-use tools
            and resources to streamline your setup process, allowing you to focus on what matters most - writing great
            code.
          </h1>
          <button ref={button} className="button opacity-0">
            <Link href="/pages/commandGenerator" > Get Started </Link>
          </button>
        </div>
        <div className="md:w-1/2 flex justify-end">
         <Image
            ref={pic}
            src="/pic.jpg"
            alt="Dev Starter Illustration"
            width={300}
            height={400}
            className="rounded-lg shadow-lg w-96 h-96 opacity-0"
          />
        </div>
      </section>
      
      <div ref={view} className="w-full h-24 border bg-black mb-5 rounded-lg shadow flex place-items-center  drop-shadow-lg opacity-0">
        <h1 className="text-3xl ms-5 font-bold text-stone-300 "> Visit Count : {visitCount}</h1>
      </div>
      <br /><br />
      
      <main ref={container} className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0">
        <FeatureSection
          icon={<CodeIcon fontSize="large" />}
          title="Copy-Paste Templates"
          description="Quickly set up your server with ready-to-use index files for Express, PHP, and more."
        />
        <FeatureSection
          icon={<InstallDesktopIcon fontSize="large" />}
          title="NPM Install Generator"
          description="Generate npm install commands for multiple dependencies in one go."
        />
        <FeatureSection
          icon={<MenuBookIcon fontSize="large" />}
          title="Quick Documentation Access"
          description="Access documentation for various libraries and dependencies with ease."
        />
        <FeatureSection
          icon={<CloudIcon fontSize="large" />}
          title="CDN Link Generator"
          description="Fetch CDN links for popular libraries without navigating multiple sites."
        />
      </main>

      <FeedbackSection />
    </Container>
  )
}

function FeatureSection({ icon, title, description }:any) {
  return (
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg drop-shadow-lg bg-stone-100">
      <div className="mb-4">{icon}</div>
      <h1  className=" font-semibold mb-2">
        {title}
      </h1>
      <h1  className="text-gray-600">
        {description}
      </h1>
    </div>
  )
}

function FeedbackSection() {
  return (
    <section className="mt-16 text-center">
      <h1  className="text-2xl font-semibold mb-4">
        We Value Your Feedback
      </h1>
      <h1 className="text-gray-600 mb-6">
        Have suggestions or concerns? We'd love to hear from you!
      </h1>
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<FeedbackIcon />}
        className="border-black text-black hover:bg-gray-100"
        
      >
        <Link href="/pages/feedback" > Contact us </Link>
      </Button>
    </section>
  )
}



