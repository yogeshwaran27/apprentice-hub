"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GLOBAL_FLAGS } from "@/data/mockData";

export const SeasonalBanner = () => {
  const rolesCount = GLOBAL_FLAGS.open_count;
  const isInSeason = rolesCount > 0;

  return (
    <div
      className="w-full flex items-center justify-center overflow-hidden border-b border-white/5 bg-primary"
      style={{
        height: '56px'
      }}
    >
      <div className="container max-w-6xl flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="hidden sm:flex"
          >

            <Sparkles className="h-4 w-4 text-accent" />
          </motion.div>

          <p className="text-sm md:text-[16px] font-medium text-white truncate">
            {isInSeason
              ? "Applications are now open — browse 200+ live roles from leading employers"
              : "Degree apprenticeship roles normally open around September — browse programmes and save roles to prepare"
            }
          </p>
        </div>

        <Link href={isInSeason ? "/jobs?tab=open" : "/jobs?tab=last-cycle"}>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold px-4 transition-all group shrink-0"
          >
            {isInSeason ? "Explore roles" : "View programmes"}
            <ArrowRight className="h-3.5 w-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
