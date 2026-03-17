import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Star, Phone, MapPin, Clock, CalendarCheck, ShieldCheck, 
  HeartPulse, History, Users, ArrowRight, Accessibility, 
  Baby, Stethoscope, Car
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative" id="home">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-muted/30">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
              alt="Medical abstract background" 
              className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-background"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-12 pb-20">
            <div className="max-w-3xl">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                  <Star className="w-4 h-4 fill-primary" />
                  <span>4.5 Patient Rating</span>
                  <span className="w-1 h-1 rounded-full bg-primary/50 mx-1"></span>
                  <span>Est. 1966</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-foreground leading-[1.1] mb-6 tracking-tight text-balance">
                  Trusted Healthcare <br/><span className="text-primary">Since 1966</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4 max-w-2xl text-balance">
                  Compassionate and reliable medical care for you and your family.
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                  Providing professional consultation and patient-focused care to the local community of New Delhi for decades.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-transform" asChild>
                  <a href="#contact">Book Appointment</a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full bg-white/50 backdrop-blur-sm border-2 hover:bg-white hover:-translate-y-0.5 transition-transform" asChild>
                  <a href="tel:08178353776">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 08178353776
                  </a>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-background relative border-t border-border">
          <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern-bg.png)` }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-muted border border-border/50 shadow-2xl relative p-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/5"></div>
                    <HeartPulse className="w-48 h-48 text-primary/20 absolute -bottom-10 -right-10" />
                    <div className="text-center z-10 relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-white/50">
                      <h3 className="text-7xl font-bold font-display text-primary mb-2">58+</h3>
                      <p className="text-xl font-medium text-foreground">Years of Service</p>
                      <p className="text-muted-foreground mt-2">Serving the community with trust</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <div className="flex flex-col justify-center">
                <FadeIn delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
                    A Trusted Healthcare Clinic Serving the Community
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    At DR. M.L. SHARMA CLINIC, we believe that healthcare is built on trust, empathy, and experience. Since our establishment in 1966, we have been a pillar of health and wellness for families in Nangloi and the greater New Delhi area.
                  </p>
                  <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                    Under the umbrella of MLS Healthcare Pvt. Ltd., our clinic combines decades of medical wisdom with a deeply personal touch, ensuring that every patient feels heard, respected, and expertly cared for.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50">
                      <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Trusted by Families</h4>
                        <p className="text-sm text-muted-foreground mt-1">Multi-generational care you can rely on.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50">
                      <div className="p-3 bg-white rounded-xl shadow-sm text-secondary">
                        <Star className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">4.5 Star Rating</h4>
                        <p className="text-sm text-muted-foreground mt-1">Highly rated by our local patients.</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITIES SECTION */}
        <section id="facilities" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FadeIn className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                Clinic Facilities & Amenities
              </h2>
              <p className="text-lg text-muted-foreground">
                We've designed our clinic to be accessible, comfortable, and welcoming for every patient who walks through our doors.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Accessibility, title: "Wheelchair Accessible", desc: "Easy access parking and entrance" },
                { icon: Users, title: "Gender-Neutral", desc: "Inclusive toilet facilities" },
                { icon: Baby, title: "Restroom Facility", desc: "Clean and hygienic amenities" },
                { icon: CalendarCheck, title: "By Appointment", desc: "Structured consultation times" }
              ].map((facility, i) => (
                <StaggerItem key={i}>
                  <Card className="p-8 h-full flex flex-col items-center text-center hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <facility.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{facility.title}</h3>
                    <p className="text-muted-foreground">{facility.desc}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-24 bg-accent text-accent-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 flex flex-col justify-center">
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                    Why Patients Trust Our Clinic
                  </h2>
                  <p className="text-accent-foreground/80 text-lg mb-8">
                    Choosing the right doctor is an important decision. Here is why our community has consistently chosen us for nearly six decades.
                  </p>
                  <Button variant="secondary" size="lg" className="rounded-full font-semibold w-fit" asChild>
                    <a href="#contact">Visit Us Today <ArrowRight className="w-4 h-4 ml-2"/></a>
                  </Button>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-2">
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: History, title: "Decades of Experience", desc: "Serving since 1966 with proven medical expertise." },
                    { icon: Stethoscope, title: "Patient-Focused Approach", desc: "Friendly, thorough, and unhurried consultation." },
                    { icon: ShieldCheck, title: "Trusted by Local Families", desc: "Generations of patient satisfaction and trust." },
                    { icon: MapPin, title: "Accessible & Convenient", desc: "Located centrally in Nangloi for easy access." }
                  ].map((feature, i) => (
                    <StaggerItem key={i}>
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl h-full hover:bg-white/15 transition-colors">
                        <feature.icon className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-accent-foreground/70">{feature.desc}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section id="reviews" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <FadeIn className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[1, 2, 3, 4].map((i) => <Star key={i} className="w-8 h-8 fill-current" />)}
                <Star className="w-8 h-8 fill-current opacity-50" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                What Our Patients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Read authentic reviews from the families and individuals who trust us with their healthcare needs.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  text: "The clinic is very good and the doctor's behavior is also very good.", 
                  author: "Patient from Nangloi",
                  rating: 5
                },
                { 
                  text: "Dr. Sharma has been treating our family for years. Very trusted doctor who listens carefully.", 
                  author: "Regular Patient",
                  rating: 5
                },
                { 
                  text: "Affordable and reliable healthcare right in our neighborhood. Facilities are very clean.", 
                  author: "Local Resident",
                  rating: 4
                }
              ].map((review, i) => (
                <StaggerItem key={i}>
                  <Card className="p-8 h-full bg-muted/20 border-border/50 shadow-sm relative">
                    <div className="absolute top-8 right-8 text-primary/10">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                      </svg>
                    </div>
                    <div className="flex gap-1 text-amber-500 mb-6">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'fill-current' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                    <p className="text-foreground text-lg mb-6 leading-relaxed relative z-10 italic">"{review.text}"</p>
                    <p className="font-bold text-foreground font-display">— {review.author}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* WORKING HOURS & CONTACT COMBINED SECTION */}
        <section id="contact" className="py-24 bg-muted/50 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              
              {/* Left Col - Working Hours & Info */}
              <div className="flex flex-col gap-10">
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
                    Visit Our Clinic
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We are conveniently located in Nangloi. Please note our operating hours below. Appointments are highly recommended to avoid wait times.
                  </p>
                  
                  <Card className="p-8 border-primary/10 shadow-lg shadow-primary/5">
                    <div className="flex items-center gap-3 mb-6">
                      <Clock className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold font-display">Clinic Timings</h3>
                    </div>
                    
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center pb-4 border-b border-border/50">
                        <span className="font-semibold text-foreground">Monday – Saturday</span>
                        <div className="text-right font-medium text-foreground/80">
                          <span className="block">9:00 AM – 1:00 PM</span>
                          <span className="block text-sm text-muted-foreground">and</span>
                          <span className="block">5:00 PM – 8:00 PM</span>
                        </div>
                      </li>
                      <li className="flex justify-between items-center pt-2">
                        <span className="font-semibold text-foreground">Sunday</span>
                        <span className="font-semibold text-destructive py-1 px-3 bg-destructive/10 rounded-md">Closed</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 text-sm font-medium flex items-center gap-3">
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      Appointments are recommended for consultation.
                    </div>
                  </Card>
                </FadeIn>
              </div>

              {/* Right Col - Contact Card & Map */}
              <FadeIn delay={0.2} className="flex flex-col gap-6">
                <Card className="p-8 shadow-xl border-border overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  <h3 className="text-2xl font-bold font-display mb-8">Contact Information</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Clinic Address</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          60-A, Saini Mohalla, Vishal Colony,<br />
                          Nangloi I, Nangloi,<br />
                          New Delhi, Delhi 110041
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 text-secondary rounded-xl shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Phone Number</h4>
                        <a href="tel:08178353776" className="text-xl font-bold text-foreground hover:text-primary transition-colors block">
                          08178353776
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                    <Button className="flex-1 h-12 text-base" asChild>
                      <a href="tel:08178353776"><Phone className="w-4 h-4 mr-2" /> Call Now</a>
                    </Button>
                    <Button variant="outline" className="flex-1 h-12 text-base" asChild>
                      <a href="https://maps.google.com/?q=DR.+M.L.+SHARMA+CLINIC+Nangloi" target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-2" /> Get Directions
                      </a>
                    </Button>
                  </div>
                </Card>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden h-64 bg-muted border border-border relative flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=28.6811,77.0658&zoom=15&size=800x400&sensor=false')] opacity-30 grayscale saturate-0 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-500 bg-cover bg-center"></div>
                  <Button variant="secondary" className="relative z-10 shadow-lg" asChild>
                     <a href="https://maps.google.com/?q=DR.+M.L.+SHARMA+CLINIC+Nangloi" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                  </Button>
                </div>
              </FadeIn>
              
            </div>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250px_250px]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
            <FadeIn>
              <HeartPulse className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 tracking-tight">
                Your Health Matters
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                Book your consultation today and experience trusted healthcare backed by decades of community trust.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full shadow-xl hover:scale-105 transition-transform" asChild>
                  <a href="#contact">Book Appointment</a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full text-white border-white/30 hover:bg-white hover:text-primary transition-all" asChild>
                  <a href="tel:08178353776">Call Clinic</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />

      {/* MOBILE FLOATING CTA */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden animate-in fade-in slide-in-from-bottom-10 duration-500 delay-1000 fill-mode-both">
        <Button size="icon" className="w-14 h-14 rounded-full shadow-2xl bg-secondary hover:bg-secondary/90 text-white" asChild>
          <a href="tel:08178353776" aria-label="Call Now">
            <Phone className="w-6 h-6" />
          </a>
        </Button>
      </div>
    </div>
  );
}
