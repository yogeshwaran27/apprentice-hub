import Link from "next/link";
import { motion } from "framer-motion";
import { Bookmark, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type Apprenticeship } from "@/data/mockData";

export interface JobCardProps {
  role: Apprenticeship;
  isSaved?: boolean;
  onToggleSave?: () => void;
  isReference?: boolean;
}

export function JobCard({ role, isSaved = false, onToggleSave, isReference = false }: JobCardProps) {
  const content = (
    <div className={`rounded-2xl border border-border/50 bg-card p-6 card-elevated h-full flex flex-col ${isReference ? "opacity-55" : ""}`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-xl md:text-xl mb-0.5 group-hover:text-primary transition-colors">{role.title}</h3>
            <p className="text-base md:text-lg text-primary font-bold">{role.company}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {role.application_status === "closing_soon" && (
              <Badge className="text-xs rounded-full bg-accent/10 text-accent border-accent/20 animate-pulse-soft">Closing soon</Badge>
            )}
            {isReference && <Badge variant="secondary" className="text-xs rounded-full">Reference</Badge>}
            {!isReference && onToggleSave && (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onToggleSave(); }}
                className="p-2 rounded-full hover:bg-secondary transition-all"
              >
                <Bookmark className={`h-4 w-4 transition-all ${isSaved ? "fill-primary text-primary" : "text-muted-foreground/40"}`} />
              </motion.button>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="secondary" className="text-xs rounded-full bg-secondary/80">{role.industry}</Badge>
          {role.salary && (
            <span className="text-xs text-muted-foreground flex items-center gap-1 bg-secondary/80 px-2.5 py-0.5 rounded-full">
              {role.salary}
            </span>
          )}
          {role.location && (
            <span className="text-xs text-muted-foreground flex items-center gap-1 bg-secondary/80 px-2.5 py-0.5 rounded-full">
              {role.location}
            </span>
          )}
          {role.university && (
            <span className="text-xs text-muted-foreground flex items-center gap-1 bg-secondary/80 px-2.5 py-0.5 rounded-full">
              {role.university}
            </span>
          )}
        </div>
      </div>
      {!isReference && (
        <div className="mt-auto pt-4 flex items-center justify-end">
          <span className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 shadow-sm shadow-primary/15 group-hover:bg-primary/90 transition-colors">
            View details
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      )}
    </div>
  );

  if (isReference) return <div className="h-full">{content}</div>;
  return <Link href={`/apprenticeships/${role.id}`} className="block group h-full">{content}</Link>;
}
