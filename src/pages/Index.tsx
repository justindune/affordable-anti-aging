import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex flex-col gap-0">
      <h1 style={{color: 'white', background: 'linear-gradient(90deg, #ff0055, #ffcc00)', fontSize: '3rem', textAlign: 'center', margin: '2rem 0', padding: '2rem', borderRadius: '1rem', boxShadow: '0 0 16px #ff0055'}}>HOMEPAGE LIVE TEST: YOU ARE SEEING THE UPDATED INDEX.TSX 🎉</h1>
      {/* Hero Section - Humanistic, Welcoming */}
      <div className="relative h-[550px] bg-gradient-to-br from-emerald-400 to-indigo-700 flex items-center justify-center text-center">
        <div className="z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Welcome to a New Chapter of You
          </h1>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Imagine feeling truly alive again—full of energy, confidence, and purpose. Our caring team is here to help you rediscover joy and well-being at every age. This is more than medicine—it's your journey to a brighter, healthier life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">Start Your Journey</Button>
            <Button variant="outline" size="lg">Meet Your Care Team</Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Patient Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">Real Lives, Real Change</h2>
          <blockquote className="text-xl italic text-slate-700 mb-6 border-l-4 border-emerald-400 pl-4">
            “Before I found this clinic, I was tired and discouraged. Now, I have the energy to play with my grandkids, travel, and enjoy every day. The team truly cared about me as a person, not just a patient.”
          </blockquote>
          <span className="block text-emerald-600 font-medium">— Real Patient Story</span>
        </div>
      </div>

      {/* Your Journey Section */}
      <div className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Your Journey Starts Here</h2>
          <p className="text-lg text-slate-700 mb-6">
            We believe in more than just treatments—we believe in transformation. Our approach is rooted in empathy, science, and a genuine desire to see you thrive. Every step is guided by compassion, expertise, and your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">See How We Can Help</Button>
            <Button variant="outline" size="lg">Contact Us</Button>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">Meet Your Care Team</h2>
          <p className="text-lg text-slate-700 mb-8">
            Our dedicated professionals are here to listen, guide, and support you every step of the way. We’re passionate about helping you live your best life—because your story matters to us.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Example team cards - replace with real team info if desired */}
            <div className="bg-slate-50 rounded-xl shadow-md p-6 w-64">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Lee" className="w-20 h-20 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-indigo-800 mb-1">Dr. Alex Lee</h3>
              <p className="text-slate-600 mb-2">Medical Director</p>
              <p className="text-sm text-slate-500">“I love seeing patients rediscover hope and energy.”</p>
            </div>
            <div className="bg-slate-50 rounded-xl shadow-md p-6 w-64">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Nurse Kim" className="w-20 h-20 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-indigo-800 mb-1">Nurse Jamie Kim</h3>
              <p className="text-slate-600 mb-2">Patient Advocate</p>
              <p className="text-sm text-slate-500">“Every patient’s journey is unique. I’m here to listen.”</p>
            </div>
            <div className="bg-slate-50 rounded-xl shadow-md p-6 w-64">
              <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Coach Patel" className="w-20 h-20 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-indigo-800 mb-1">Coach Ravi Patel</h3>
              <p className="text-slate-600 mb-2">Wellness Coach</p>
              <p className="text-sm text-slate-500">“I’m passionate about helping you feel your best.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}