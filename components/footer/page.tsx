"use client";

import { Github, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const FooterSection = () => {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "Email", icon: Mail, href: "mailto:hello@lockin.app" },
  ];

  return (
    <footer className="dark:bg-black bg-white border-t dark:border-neutral-800 border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold dark:text-white text-black">
                LockIn
              </span>
            </Link>
            <p className="text-sm dark:text-gray-400 text-gray-600 text-center md:text-left max-w-xs">
              Block distractions, stay focused, and achieve more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="#features"
              className="text-sm dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#privacy"
              className="text-sm dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#terms"
              className="text-sm dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black transition-colors"
            >
              Terms
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full dark:bg-neutral-800 bg-neutral-100 flex items-center justify-center dark:hover:bg-neutral-700 hover:bg-neutral-200 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4 dark:text-gray-400 text-gray-600" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t dark:border-neutral-800 border-neutral-200">
          <p className="text-sm dark:text-gray-400 text-gray-600 text-center">
            © {currentYear} LockIn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
