import { TrendingUp, Users, Clock, MapPin, Shield, AlertTriangle } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "52,847",
    label: "Tourists Protected",
    trend: "+12%",
    trendLabel: "this month",
  },
  {
    icon: Clock,
    value: "2.4 min",
    label: "Avg Response Time",
    trend: "-18%",
    trendLabel: "improved",
  },
  {
    icon: MapPin,
    value: "847",
    label: "Active Check-Posts",
    trend: "+23",
    trendLabel: "new locations",
  },
  {
    icon: AlertTriangle,
    value: "156",
    label: "Incidents Resolved",
    trend: "100%",
    trendLabel: "resolution rate",
  },
];

const regions = [
  { name: "Assam", tourists: "12,450", status: "active" },
  { name: "Meghalaya", tourists: "8,230", status: "active" },
  { name: "Arunachal Pradesh", tourists: "6,890", status: "active" },
  { name: "Nagaland", tourists: "5,420", status: "active" },
  { name: "Manipur", tourists: "4,780", status: "monitoring" },
  { name: "Sikkim", tourists: "7,650", status: "active" },
  { name: "Tripura", tourists: "3,920", status: "active" },
  { name: "Mizoram", tourists: "3,507", status: "active" },
];

const SafetyStatsSection = () => {
  return (
    <section id="safety" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-muted-foreground">Live System Status</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real-Time
            <span className="text-gradient-primary"> Safety Metrics</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent monitoring data across all protected regions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-success text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.trend}</span>
                </div>
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-xs text-success mt-2">{stat.trendLabel}</p>
            </div>
          ))}
        </div>

        {/* Regional Coverage */}
        <div className="bg-gradient-card rounded-2xl border border-border/50 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-bold text-foreground">
              Regional Coverage
            </h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-muted-foreground">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-muted-foreground">Monitoring</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${region.status === 'active' ? 'bg-success' : 'bg-secondary'}`} />
                  <span className="font-medium text-foreground">{region.name}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-primary">{region.tourists}</span>
                  <span className="text-xs text-muted-foreground">tourists</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyStatsSection;
