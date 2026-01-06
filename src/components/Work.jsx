import { ArrowDown, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Register & Verify",
    description: "Tourists register via app or at designated check-posts. KYC verification links Aadhaar/Passport to create a secure digital ID.",
    details: ["Digital ID issuance", "Emergency contact setup", "Itinerary submission"],
  },
  {
    step: "02",
    title: "Activate Protection",
    description: "Enable optional real-time tracking and geo-fencing alerts. The system calculates a personalized safety score based on your travel plans.",
    details: ["Opt-in location sharing", "Zone-based alerts", "Safety score generation"],
  },
  {
    step: "03",
    title: "AI Monitoring",
    description: "Our AI continuously monitors for anomalies—signal loss, inactivity, or route deviations—flagging potential distress situations.",
    details: ["24/7 behavioral analysis", "Pattern recognition", "Automatic flagging"],
  },
  {
    step: "04",
    title: "Rapid Response",
    description: "In emergencies, the panic button shares live location with authorities and contacts. E-FIR generation enables immediate action.",
    details: ["One-tap emergency alert", "Multi-channel notification", "Coordinated rescue"],
  },
];

const Work = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden bg-linear-to-b from-background via-muted/20 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-muted-foreground">Simple & Effective</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It
            <span className="text-gradient-secondary"> Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From registration to rescue—a seamless, privacy-respecting safety journey.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-12 top-24 w-0.5 h-24 bg-linear-to-b from-primary/50 to-primary/10 hidden md:block" />
              )}
              
              <div className="flex gap-6 md:gap-10 mb-8 md:mb-12 group">
                {/* Step Number */}
                <div className="shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-card border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <span className="font-display text-2xl md:text-3xl font-bold text-gradient-primary">
                        {step.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {step.details.map((detail, dIndex) => (
                      <div
                        key={dIndex}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow Indicator */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mb-8 md:hidden">
                  <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
