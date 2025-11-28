import Background from "@/components/Background";
import { Shield, Target, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Background />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            About LockIn
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help people reclaim their focus and achieve their goals 
            by eliminating digital distractions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                In today's hyper-connected world, staying focused has become one of the biggest 
                challenges we face. Every notification, every social media feed, every "quick check" 
                pulls us away from what truly matters.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LockIn was created to give you back control. We believe that with the right tools, 
                anyone can overcome digital distractions and unlock their full potential.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Sites Blocked</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                <div className="text-sm text-muted-foreground">Hours Saved</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Focus First</h3>
              <p className="text-muted-foreground">
                We believe deep work and focused attention are the keys to achieving meaningful goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Privacy Matters</h3>
              <p className="text-muted-foreground">
                Your browsing data stays on your device. We never track, collect, or sell your information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Simple & Effective</h3>
              <p className="text-muted-foreground">
                No complicated setups or confusing features. Just straightforward tools that work.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Community Driven</h3>
              <p className="text-muted-foreground">
                Built with feedback from thousands of users who share the same goal: staying focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            How LockIn Started
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              LockIn was born out of personal frustration. Like many people, our founder struggled 
              with staying focused while working on important projects. Despite trying various 
              productivity techniques, the pull of social media and news sites was too strong.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              After realizing that willpower alone wasn't enough, the idea for LockIn emerged: 
              a simple browser extension that would physically block distracting websites for 
              set periods of time. No bypassing, no exceptions—just pure, uninterrupted focus.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a personal tool quickly grew into something bigger. Friends and 
              colleagues wanted it. Beta testers loved it. And now, thousands of people use 
              LockIn every day to stay productive and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Lock In?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of focused individuals who've taken control of their time.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-full transition-colors"
            >
              Get Started Free
            </Link>
            <Link 
              href="/#pricing"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-primary bg-background border-2 border-primary hover:bg-primary/10 rounded-full transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}