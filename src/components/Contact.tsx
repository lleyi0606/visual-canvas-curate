import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project 
            and explore how we can collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <Input placeholder="Photography, Digital Art, Design..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project vision, timeline, and goals..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      alex@atelier.studio
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="pt-6">
              <h3 className="font-medium mb-4">Follow My Work</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Behance
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;