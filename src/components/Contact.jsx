const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-serif font-bold leading-tight sm:leading-none uppercase tracking-tight">
              LETS CREATE TOGETHER
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Email</p>
              <p>alex.chen@visualcanvas.com</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Phone</p>
              <p>+65 9123 4567</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Location</p>
              <p>Singapore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
