import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-background border-t border-white/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Get in touch with our investment experts
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Ready to start your real estate investment journey? Our team of
                experts is here to guide you through every step of the process.
                Contact us today for a free consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">+91 9294553783</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">info@minilands.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-gray-300">
                    401 , Heritage Building , 582 , MG Road , Oppsite Hukumchand
                    Ghanta Ghar ,New Palasia , Indore , Madhya Pradesh ,452001
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Business Hours
                  </h4>
                  <p className="text-gray-300">
                    10:00 AM – 7:00 PM ( Monday – Saturday )
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-accent focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-accent focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-accent focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-accent focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us more about your investment goals..."
                  className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-accent focus:border-accent"
                />
              </div>

              <Button className="w-full bg-accent text-background hover:bg-accent/90 font-semibold py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
