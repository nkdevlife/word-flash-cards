"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SideMenuProps {
  className?: string;
}

export function SideMenu({ className }: SideMenuProps) {
  const pathname = usePathname();

  const flashcardItems = [
    {
      title: "TOEIC 600",
      href: "/flashcards/toeic-600",
    },
    {
      title: "TOEIC 700",
      href: "/flashcards/toeic-700",
    },
    {
      title: "TOEIC 800",
      href: "/flashcards/toeic-800",
    },
    {
      title: "TOEIC 900",
      href: "/flashcards/toeic-900",
    },
  ];

  const menuItems = [
    {
      title: "設定",
      href: "/settings",
    },
  ];

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            メニュー
          </h2>
          <div className="space-y-1">
            <Accordion type="single" collapsible defaultValue="flashcards">
              <AccordionItem value="flashcards">
                <AccordionTrigger className="px-4">単語カード</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-1 pl-6">
                    {flashcardItems.map((item) => (
                      <Button
                        key={item.href}
                        variant={pathname === item.href ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start px-4"
                asChild
              >
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
