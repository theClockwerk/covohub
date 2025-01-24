"use client";

import Image from "next/image";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { FlipWords } from "@/components/ui/flip-words";
import { RandomReveal } from "react-random-reveal";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";

export default function Home() {
  const words = ["save", "change", "destroy", "control", "conquer"];
  return (
    <>
      <div className=" w-screen h-screen border-white/[0.2] dark:border-black/[0.2] flex flex-col items-start mx-auto p-4 relative">
        <EvervaultCard className="" text="C" />
      </div>

      <div className="h-screen h-screen px-4">
        <div className=" py-40 dark:bg-black bg-black w-full">
          <div className="text-6xl font-normal text-red-600 dark:text-neutral-400 z-100">
            Working everyday to <br></br>
            <RandomReveal
              isPlaying
              duration={2}
              characters="conquer"
              onComplete={() => ({ shouldRepeat: true, delay: 2 })}
            />{" "}
            <p>the world</p>
          </div>
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
