
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'wouter';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Clickable } from "./Clickable";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full header-appear",
        isScrolled ? "shadow-lg" : ""
      )}
      style={{
        background: isScrolled 
          ? 'white' 
          : 'linear-gradient(90deg, #8B0000 0% 50%, #0EA5A5 50% 100%)'
      }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={cn("text-xl font-bold", isScrolled ? "text-[#8B0000]" : "text-white")}>KTL</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {/* Home */}
              <Link 
                to="/"
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-140 fx-underlineSlide fx-pop",
                  isScrolled 
                    ? "text-gray-700 hover:text-gray-900 hover:opacity-92" 
                    : "text-white hover:opacity-92"
                )}
                data-testid="nav-home"
              >
                Home
              </Link>
              
              {/* Certifications */}
              <button 
                onClick={() => scrollToSection('certifications')}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-140 fx-underlineSlide fx-pop",
                  isScrolled 
                    ? "text-gray-700 hover:text-gray-900 hover:opacity-92" 
                    : "text-white hover:opacity-92"
                )}
                data-testid="nav-certifications"
              >
                Certifications
              </button>
              
              {/* Clients */}
              <button 
                onClick={() => scrollToSection('clients')}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-140 fx-underlineSlide fx-pop",
                  isScrolled 
                    ? "text-gray-700 hover:text-gray-900 hover:opacity-92" 
                    : "text-white hover:opacity-92"
                )}
                data-testid="nav-clients"
              >
                Clients
              </button>
              
              {/* Contact */}
              <button 
                onClick={() => scrollToSection('contact')}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-140 fx-underlineSlide fx-pop",
                  isScrolled 
                    ? "text-gray-700 hover:text-gray-900 hover:opacity-92" 
                    : "text-white hover:opacity-92"
                )}
                data-testid="nav-contact"
              >
                Contact
              </button>
              
              {/* Careers - Primary CTA */}
              <Link 
                to="/careers"
                className="px-6 py-2 mx-2 rounded-md button-primary fx-bounceGlow text-white"
                data-testid="button-careers"
              >
                Careers
              </Link>
              
              {/* Investor Info - Secondary CTA */}
              <Link 
                to="/investors"
                className="px-6 py-2 rounded-md button-secondary fx-rippleBlue text-white"
                data-testid="button-investors"
              >
                Investor Info
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={cn(
                "focus:outline-none p-2 ham",
                isMenuOpen ? "active" : "",
                isScrolled ? "text-gray-700" : "text-white"
              )}
              data-testid="button-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Slides from top with stagger animation */}
      <div className={cn("md:hidden mobile-drawer w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0", "overflow-hidden")}>
        <div className="bg-white px-4 pt-4 pb-4 shadow-lg">
          <div className="space-y-3">
            <Link 
              to="/" 
              className="block px-4 py-3 text-[#222] hover:bg-gray-50 rounded-md text-sm min-h-11"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              data-testid="mobile-nav-home"
            >
              Home
            </Link>
            
            <button 
              onClick={() => scrollToSection('certifications')} 
              className="block w-full text-left px-4 py-3 text-[#222] hover:bg-gray-50 rounded-md text-sm min-h-11"
              data-testid="mobile-nav-certifications"
            >
              Certifications
            </button>
            
            <button 
              onClick={() => scrollToSection('clients')} 
              className="block w-full text-left px-4 py-3 text-[#222] hover:bg-gray-50 rounded-md text-sm min-h-11"
              data-testid="mobile-nav-clients"
            >
              Clients
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-3 text-[#222] hover:bg-gray-50 rounded-md text-sm min-h-11"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
            
            {/* CTAs stacked at bottom */}
            <div className="pt-4 space-y-2">
              <Link 
                to="/careers" 
                className="block w-full px-4 py-3 button-primary text-white text-center rounded-md text-sm min-h-11"
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-button-careers"
              >
                Careers
              </Link>
              
              <Link 
                to="/investors" 
                className="block w-full px-4 py-3 button-secondary text-white text-center rounded-md text-sm min-h-11"
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-button-investors"
              >
                Investor Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
