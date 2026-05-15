/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import HeroContent from './components/HeroContent';
import { 
  AIBuildTogether, 
  CoreInnovation, 
  FeatureShowcase, 
  FeatureGrid, 
  FAQ, 
  FinalCTA, 
  Footer 
} from './components/LandingSections';
import { MessageSquare, Calendar, Mic2 } from 'lucide-react';

export default function App() {
  const VIDEO_URL = "https://res.cloudinary.com/df7ebzfhv/video/upload/v1778793290/mp__dkjic9.mp4";

  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white">
      {/* Background Video Component */}
      <VideoBackground src={VIDEO_URL} />
      
      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {/* Floating Navigation Bar Wrapper - Reverted to stable fixed state */}
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[840px]">
          <Navbar />
        </div>
        
        {/* Sections Container */}
        <div className="flex flex-col">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center">
            <HeroContent />
          </section>

          {/* Landing Sections */}
          <AIBuildTogether />
          <CoreInnovation />
          
          <FeatureShowcase 
            title="Chat experience for fast and smart conversations"
            desc="A conversational AI assistant that understands your questions, provides intelligent answers, and helps you get things done fast from casual chats to complex tasks."
            icon={MessageSquare}
            imgPos="right"
            image="https://res.cloudinary.com/df7ebzfhv/image/upload/v1778791846/1_mranf6.jpg"
          />

          <FeatureShowcase 
            title="AI assistant for efficient time management"
            desc="Let the AI schedule meetings, set reminders, and automatically attach relevant files. Save time and stay better organized with intelligent and context aware planning."
            icon={Calendar}
            imgPos="left"
            image="https://res.cloudinary.com/df7ebzfhv/image/upload/v1778791846/2_df9qdf.jpg"
          />

          <FeatureShowcase 
            title="Audio transcription for fast and accurate text"
            desc="Automatically convert speech into accurate, editable text in real time. Perfect for meetings, interviews, voice notes, and more, powered by advanced speech recognition technology."
            icon={Mic2}
            imgPos="right"
            image="https://res.cloudinary.com/df7ebzfhv/image/upload/v1778791846/3_ekry4w.jpg"
          />

          <FeatureGrid />
          
          <FAQ />
          
          <Footer />
        </div>
      </div>
    </main>
  );
}
