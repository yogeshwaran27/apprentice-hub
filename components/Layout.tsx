"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Home,
  FileText,
  ClipboardList,
  User,
  LogOut,
  GraduationCap,
  Menu,
  X,
  ArrowRight,
  Mail,
  MapPin,
  Settings,
} from "lucide-react";
import { SeasonalBanner } from "./SeasonalBanner";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/auth";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/jobs", label: "Apprenticeships", icon: Briefcase },
  { to: "/applications", label: "Applications", icon: ClipboardList },
  { to: "/resources", label: "Resources", icon: FileText },
];

export const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();

  const initials =
    (user?.name || "Student")
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "ST";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10" style={{ backgroundColor: '#13493B' }}>
      <div className="container max-w-6xl flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/apprentice_hub_logo.svg" alt="ApprenticeHub logo" className="h-8 w-auto" />
          </motion.div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link key={item.to} href={item.to} className="relative px-0 py-1 text-sm font-medium">
                <motion.span
                  animate={{ scale: isActive ? 2 : 1, fontWeight: isActive ? 700 : 400 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className={`transition-colors duration-300 ${isActive
                    ? "text-white text-[15px] md:text-base"
                    : "text-white/70 hover:text-white text-sm"
                    }`}
                >
                  {item.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {!isLoggedIn ? (
            <>
              <Link href="/applications?mode=login">
                <Button variant="ghost" size="sm" className="hidden sm:flex rounded-full text-white/90 hover:text-white hover:bg-white/10">
                  Log in
                </Button>
              </Link>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/applications?mode=create">
                  <Button size="sm" className="hidden sm:flex rounded-full bg-white text-[#13493B] hover:bg-white/90 px-5 font-semibold">
                    Create free account
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </motion.div>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm pl-3 pr-1 py-1 hover:bg-white/20 hover:shadow-md transition-all duration-200 group">
                  {/* Three horizontal lines */}
                  {/* Three horizontal lines with custom color and animation */}
                  <div className="flex flex-col gap-[4px] shrink-0">
                    <motion.span
                      animate={{ width: [18, 14, 18] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="block h-[2px] rounded-full bg-accent"
                    />
                    <motion.span
                      animate={{ width: [14, 18, 14] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="block h-[2px] rounded-full bg-accent"
                    />
                    <motion.span
                      animate={{ width: [18, 14, 18] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="block h-[2px] rounded-full bg-accent"
                    />
                  </div>
                  {/* Circular avatar */}
                  <Avatar className="h-8 w-8 ring-2 ring-white/30 shrink-0">
                    <AvatarFallback className="text-xs font-semibold bg-primary text-white border-2 border-white/20">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Account
                </DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>My Hub</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => logout()}
                  className="text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/10"
            style={{ backgroundColor: '#13493B' }}
          >
            <div className="p-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
              {!isLoggedIn ? (
                <div className="pt-3 flex gap-2">
                  <Link href="/applications?mode=login" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full rounded-full border-white/30 text-white hover:bg-white/10">Log in</Button>
                  </Link>
                  <Link href="/applications?mode=create" className="flex-1">
                    <Button size="sm" className="w-full rounded-full bg-white text-[#13493B] hover:bg-white/90 font-semibold">Create free account</Button>
                  </Link>
                </div>
              ) : (
                <div className="pt-3 flex flex-col gap-2">
                  <Link href="/dashboard" className="w-full" onClick={() => setMobileOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full rounded-full flex items-center gap-2 border-white/30 text-white hover:bg-white/10">
                      <User className="h-4 w-4" />
                      My Hub
                    </Button>
                  </Link>
                  <Link href="/settings" className="w-full" onClick={() => setMobileOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full rounded-full flex items-center gap-2 border-white/30 text-white hover:bg-white/10">
                      <Settings className="h-4 w-4" />
                      Settings
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-full rounded-full flex items-center gap-2 text-red-300 hover:text-red-200 hover:bg-white/10"
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </Button>
                </div>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer className="mt-auto bg-primary text-white">
    <div className="container py-12 max-w-6xl">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 mb-3">
            <img src="/apprentice_hub_logo.svg" alt="ApprenticeHub logo" className="h-8 w-auto" />
          </Link>
          <p className="mt-3 text-sm text-white/70 max-w-xs leading-relaxed">
            Transforming how students in the UK discover apprenticeships and build their careers.
          </p>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white" />
              <span>contact@apprienticehub.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-white" />
              <span>London, United Kingdom</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Company</h4>
          <div className="space-y-2 text-sm text-white/70">
            <Link href="/about" className="block hover:text-white transition-colors">
              About us
            </Link>
            <Link href="/contact" className="block hover:text-white transition-colors">
              Contact us
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Resources</h4>
          <div className="space-y-2 text-sm text-white/70">
            <Link href="/jobs" className="block hover:text-white transition-colors">
              Apprenticeships
            </Link>
            <Link href="/applications" className="block hover:text-white transition-colors">
              Application Tracking
            </Link>
            <Link href="/resources" className="block hover:text-white transition-colors">
              Resources
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Legal</h4>
          <div className="space-y-2 text-sm text-white/70">
            <Link href="/privacy" className="block hover:text-white transition-colors">
              Privacy policy
            </Link>
            <Link href="/terms" className="block hover:text-white transition-colors">
              Terms of privacy
            </Link>
            <Link href="/cookies" className="block hover:text-white transition-colors">
              Cookies policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© 2026 ApprienticeHub. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {/* <a href="#" aria-label="ApprienticeHub on Instagram" className="hover:text-white transition-colors">
            <Instagram className="h-4 w-4" />
          </a> */}
          <a href="#" aria-label="ApprienticeHub on Twitter" className="hover:text-white transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="ApprienticeHub on LinkedIn" className="hover:text-white transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      {pathname === "/" && <SeasonalBanner />}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
