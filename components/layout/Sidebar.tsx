"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  BookOpen,
  MessageSquare,
  Settings,
  LogOut,
  BellRing,
  Star,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  description?: string;
  isNew?: boolean;
}

const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="w-5 h-5" />,
    description: "Overview of your academic activities",
  },
  {
    title: "Students",
    href: "/students",
    icon: <Users className="w-5 h-5" />,
    badge: "150",
    description: "Manage your student roster",
  },
  {
    title: "Attendance",
    href: "/attendance",
    icon: <CalendarCheck className="w-5 h-5" />,
    description: "Track and manage attendance",
  },
  {
    title: "Courses",
    href: "/courses",
    icon: <BookOpen className="w-5 h-5" />,
    badge: "4",
    description: "Your active courses and materials",
  },
  {
    title: "Messages",
    href: "/messages",
    icon: <MessageSquare className="w-5 h-5" />,
    badge: "3",
    isNew: true,
    description: "Communication hub",
  },
];

const bottomNavItems: NavItem[] = [
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    title: "Logout",
    href: "/login",
    icon: <LogOut className="w-5 h-5" />,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 bottom-0 w-16 h-16 flex items-end justify-center bg-transparent z-50"
        >
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-lg"
            aria-label="Expand sidebar"
            onClick={() => setCollapsed(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </motion.button>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <TooltipProvider delayDuration={0}>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -40, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative flex flex-col h-screen border-r border-neutral-800 bg-black/50 backdrop-blur-xl w-[280px] p-4"
      >
        {/* Collapse Button - absolutely positioned at edge, centered vertically */}
        <button
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-lg z-10"
          aria-label="Collapse sidebar"
          onClick={() => setCollapsed(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        {/* ...existing code... */}
        <div className="flex items-center justify-between px-4 py-6">
          <span className="font-light text-2xl text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
            Class<span className="font-medium text-amber-200">Echo</span>
          </span>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="relative p-2 rounded-xl hover:bg-white/5 transition-colors">
                  <BellRing className="w-5 h-5 text-neutral-400" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-amber-200 rounded-full" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>You have new notifications</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        {/* ...existing code... */}
        <ScrollArea className="flex flex-col flex-1 pt-4">
          <nav className="flex flex-col flex-1 px-2 space-y-2">
            {mainNavItems.map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: "0 2px 16px 0 rgba(255,193,7,0.08)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={item.href}
                      className={`
                        group flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                        ${
                          pathname === item.href
                            ? "bg-amber-200/20 text-amber-200 border-2 border-amber-200 shadow-md"
                            : "text-neutral-400 hover:text-white hover:bg-white/5 border-2 border-transparent"
                        }
                      `}
                    >
                      <span className="flex items-center gap-3 flex-1">
                        {item.icon}
                        {item.title}
                      </span>
                      {item.badge && (
                        <Badge variant="outline" className={`
                          ${pathname === item.href ? 'border-amber-200/20 text-amber-200' : 'border-neutral-800 text-neutral-400'}
                        `}>
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-[200px]">
                  <p>{item.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </ScrollArea>
        {/* ...existing code... */}
        <div className="px-2 pt-2">
          <Separator className="my-4 bg-neutral-800" />
          {bottomNavItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                    ${
                      pathname === item.href
                        ? "bg-amber-200/10 text-amber-200"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.description || `Go to ${item.title.toLowerCase()}`}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
  </motion.div>
    </TooltipProvider>
  );
}