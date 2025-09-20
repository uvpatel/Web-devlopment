"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link as ScrollLink } from "react-scroll";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">My Website</h1>
          <NavigationMenu>
            <NavigationMenuList>
              {["home", "about", "team", "contact"].map((section) => (
                <NavigationMenuItem key={section}>
                  <NavigationMenuLink asChild>
                    <ScrollLink
                      to={section}
                      smooth={true}
                      duration={600}
                      offset={-80} // accounts for fixed navbar
                      className="cursor-pointer"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </ScrollLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Page Sections */}
      <div className="mt-20">
        <section id="home" className="h-screen flex items-center justify-center bg-blue-100">
          <h2 className="text-4xl font-bold">Home 🏡</h2>
        </section>
        <section id="about" className="h-screen flex items-center justify-center bg-purple-100">
          <h2 className="text-4xl font-bold">About 📖</h2>
        </section>
        <section id="team" className="h-screen flex items-center justify-center bg-green-100">
          <h2 className="text-4xl font-bold">Team 👥</h2>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center bg-pink-100">
          <h2 className="text-4xl font-bold">Contact 📬</h2>
        </section>
      </div>
    </main>
  );
}
