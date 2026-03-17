import { HeartPulse, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none tracking-tight">
                  DR. M.L. SHARMA CLINIC
                </span>
                <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider mt-1">
                  Since 1966
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Providing professional consultation and patient-focused care to the local community of New Delhi for decades. A Unit of MLS Healthcare Pvt. Ltd.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Facilities', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-lg">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>60-A, Saini Mohalla, Vishal Colony, Nangloi I, New Delhi, 110041</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:08178353776" className="hover:text-white transition-colors">08178353776</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-lg">Working Hours</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-white font-medium">Mon - Sat</span>
                  <span>9:00 AM – 1:00 PM</span>
                  <span>5:00 PM – 8:00 PM</span>
                </div>
              </li>
              <li className="flex justify-between border-t border-white/10 pt-3 mt-1">
                <span>Sunday</span>
                <span className="text-destructive font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} DR. M.L. SHARMA CLINIC. All Rights Reserved.</p>
          <p>A Unit of MLS Healthcare Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
