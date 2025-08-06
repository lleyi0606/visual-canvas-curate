import InfiniteText from "./InfiniteText";
import instagramIcon from "../assets/instagram.png";
import behanceIcon from "../assets/behance.png";
import dribbbleIcon from "../assets/dribble.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/20">

      {/* Infinite scrolling text - full width */}
      <div>
        <InfiniteText text="VISUAL DESIGN • PHOTOGRAPHY • DIGITAL ART • CREATIVE DIRECTION • BRAND IDENTITY • " speed={0.04} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">ATELIER</h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              We create compelling visual narratives through photography, digital art, and innovative design. 
              <br />
              <span className="text-sm mt-2 block">Based in Singapore • Working globally</span>
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#works" className="text-muted-foreground hover:text-accent transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect & Contact</h4>
            <div className="space-y-3">
              {/* Social Media Links */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground/80 uppercase tracking-wide">Follow</p>
                <div className="flex flex-col space-y-2 text-sm">
                  <a 
                    href="https://instagram.com/atelier.studio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors flex items-center group"
                  >
                    <img 
                      src={instagramIcon} 
                      alt="Instagram" 
                      className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" 
                    />
                    <span className="group-hover:underline">Instagram</span>
                  </a>
                  <a 
                    href="https://behance.net/atelierstudio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors flex items-center group"
                  >
                    <img 
                      src={behanceIcon} 
                      alt="Behance" 
                      className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" 
                    />
                    <span className="group-hover:underline">Behance</span>
                  </a>
                  <a 
                    href="https://dribbble.com/atelierstudio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors flex items-center group"
                  >
                    <img 
                      src={dribbbleIcon} 
                      alt="Dribbble" 
                      className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" 
                    />
                    <span className="group-hover:underline">Dribbble</span>
                  </a>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-2 pt-2 border-t border-border/50">
                <p className="text-xs text-muted-foreground/80 uppercase tracking-wide">Get in Touch</p>
                <div className="space-y-1 text-sm">
                  <a 
                    href="mailto:hello@atelier.studio" 
                    className="text-muted-foreground hover:text-accent transition-colors block group"
                  >
                    <span className="group-hover:underline">hello@atelier.studio</span>
                  </a>
                  <p className="text-muted-foreground/70 text-xs">
                    Singapore • Available Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Atelier Studio. All rights reserved.
            <span className="hidden sm:inline"> • Crafted with passion in Singapore</span>
          </p>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
