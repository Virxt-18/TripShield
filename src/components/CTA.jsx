import { ArrowRight, Shield, Building2 } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tourist CTA */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-card rounded-3xl p-8 md:p-12 border border-primary/20 hover:border-primary/40 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                For Tourists
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Register now and travel with confidence. Get your digital ID, access safety features, 
                and explore India's beautiful Northeast with peace of mind.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free digital safety ID",
                  "24/7 emergency support",
                  "Real-time safety alerts",
                  "Multilingual assistance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground font-medium rounded-lg hover:bg-primary/80 transition-colors">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Authority CTA */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-secondary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-card rounded-3xl p-8 md:p-12 border border-secondary/20 hover:border-secondary/40 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                For Authorities
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Access the command dashboard for real-time tourist monitoring, incident management, 
                and coordinated emergency response across your jurisdiction.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time heat maps",
                  "Automated E-FIR system",
                  "Alert management console",
                  "Analytics & reporting"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors">
                Access Dashboard
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
