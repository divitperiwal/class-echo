"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Bell,
  User,
  Calendar,
  Clock,
  CheckCircle2,
  BookOpen,
  Users,
  MessageSquare,
  Settings,
  Shield,
  Command as CommandIcon,
  LogOut,
  Calculator,
  FileText,
  Timer,
} from "lucide-react";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle keyboard shortcut for search
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const notifications = [
    {
      id: 1,
      text: "New assignment posted in CSE101",
      time: "5m ago",
      icon: <BookOpen className="w-4 h-4 text-amber-200" />,
      type: "Assignment",
    },
    {
      id: 2,
      text: "Your attendance was marked for today's classes",
      time: "10m ago",
      icon: <Calendar className="w-4 h-4 text-emerald-400" />,
      type: "Attendance",
    },
    {
      id: 3,
      text: "Grade updated in MTH202: Linear Algebra",
      time: "1h ago",
      icon: <Shield className="w-4 h-4 text-blue-400" />,
      type: "Grade",
    },
    {
      id: 4,
      text: "New message from Prof. Sarah in Discussion Forum",
      time: "2h ago",
      icon: <MessageSquare className="w-4 h-4 text-violet-400" />,
      type: "Message",
    },
  ];

  const searchCategories = [
    {
      category: "Quick Links",
      items: [
        {
          id: 1,
          name: "View Today's Schedule",
          icon: <Calendar className="w-4 h-4" />,
        },
        {
          id: 2,
          name: "Check Attendance",
          icon: <Users className="w-4 h-4" />,
        },
        {
          id: 3,
          name: "Recent Assignments",
          icon: <BookOpen className="w-4 h-4" />,
        },
        { id: 4, name: "Grade Report", icon: <Shield className="w-4 h-4" /> },
      ],
    },
    {
      category: "Messages",
      items: [
        {
          id: 5,
          name: "Chat with Teachers",
          icon: <MessageSquare className="w-4 h-4" />,
        },
        {
          id: 6,
          name: "Discussion Forums",
          icon: <Users className="w-4 h-4" />,
        },
        { id: 7, name: "Class Groups", icon: <Users className="w-4 h-4" /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { id: 8, name: "Calculator", icon: <Calculator className="w-4 h-4" /> },
        { id: 9, name: "Note Taking", icon: <FileText className="w-4 h-4" /> },
        { id: 10, name: "Study Timer", icon: <Timer className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-[72px] py-6 border-b border-neutral-800 bg-black/50 backdrop-blur-xl px-8">
        <div className="flex items-center justify-between">
          {/* Left section - Search */}
          <div className="flex-1 max-w-md">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center gap-3 h-12 pl-4 pr-6 rounded-xl bg-neutral-950/50 border border-neutral-800 text-neutral-400 hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-200 group"
            >
              <Search className="w-4 h-4 group-hover:text-amber-200/70 transition-colors" />
              <span className="text-sm">Search anything...</span>
            </button>
          </div>

          {/* Right section - Today pill and Profile */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800 shadow-sm select-none cursor-pointer">
              <Calendar className="w-4 h-4 text-amber-200" />
              <span className="text-sm text-neutral-200 font-medium">
                Today
              </span>
              <span className="text-xs text-neutral-400">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <Avatar className="w-9 h-9 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-neutral-900 text-neutral-400">
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <p className="text-sm font-medium text-white">
                      Divit Periwal
                    </p>
                    <p className="text-xs text-neutral-400">
                      Computer Science • Year 2
                    </p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel className="font-normal p-4">
                  <div className="flex flex-col space-y-1.5">
                    <p className="text-base">Divit Periwal</p>
                    <p className="text-xs text-neutral-400">
                      dp3300@srmist.edu.in
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-2 w-fit text-[10px] font-medium bg-neutral-900"
                    >
                      Student ID: RA2411003012037
                    </Badge>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 p-2.5 px-4 focus:bg-neutral-900/50">
                  <User className="w-4 h-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 p-2.5 px-4 focus:bg-neutral-900/50">
                  <Settings className="w-4 h-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-400 hover:text-red-300 gap-2 p-2.5 px-4 focus:bg-red-950/20">
                  <LogOut className="w-4 h-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <CommandDialog
        open={isSearchOpen}
        onOpenChange={setIsSearchOpen}
        className="border-neutral-800"
      >
        <CommandInput
          placeholder="Type a command or search..."
          className="h-14 border-none border-b border-neutral-800 focus:ring-0"
        />
        <CommandList className="px-2 py-4">
          <CommandEmpty className="py-6 text-neutral-400">
            No results found.
          </CommandEmpty>
          {searchCategories.map((group) => (
            <CommandGroup
              key={group.category}
              heading={group.category}
              className="pb-2"
            >
              {group.items.map((item) => (
                <CommandItem
                  key={item.id}
                  className="gap-2 px-4 py-3 rounded-xl cursor-pointer data-[selected=true]:bg-neutral-900/50"
                >
                  <div className="p-2 rounded-lg bg-neutral-900/50 border border-neutral-800">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandGroup heading="Tips" className="pt-2">
            <div className="px-2 py-3 flex gap-2 text-xs text-neutral-400">
              <kbd className="px-2 py-1 rounded-lg bg-neutral-900 border border-neutral-800">
                ↑↓
              </kbd>
              <span>to navigate</span>
              <kbd className="px-2 py-1 rounded-lg bg-neutral-900 border border-neutral-800">
                enter
              </kbd>
              <span>to select</span>
              <kbd className="px-2 py-1 rounded-lg bg-neutral-900 border border-neutral-800">
                esc
              </kbd>
              <span>to close</span>
            </div>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
