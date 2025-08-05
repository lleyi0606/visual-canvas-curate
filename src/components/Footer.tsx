const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold mb-4">ATELIER</h3>
            <p className="text-muted-foreground max-w-md">
              Creating visual narratives through photography, digital art, and design. 
              Based in San Francisco, working globally.
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
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Behance
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="mailto:alex@atelier.studio" className="text-muted-foreground hover:text-accent transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Atelier. All rights reserved. Crafted with passion in San Francisco.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;