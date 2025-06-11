"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/villa.jpg"
          alt="Modern luxury home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl p-10 "
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-muted-foreground">
            Find Your Dream{" "}
            <span className="bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent">
              Property
            </span>{" "}
            Today
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-6xl">
            Discover premium properties with exclusive access to high-yield
            investment opportunities vetted by industry experts.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/properties">
              <Button
                size="lg"
                className="bg-emerald-800 text-muted-foreground text-xl from-accent-foreground px-6 py-3 shadow-emerald-950 hover:bg-emerald-900 shadow-sm transition-transform duration-300 rounded-full p-7 font-bold"
              >
                Explore Properties Now
                <ArrowRightIcon className="ml-2 font-bold" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
