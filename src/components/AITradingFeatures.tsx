import React from "react";
import {
  CheckCircle,
  ShoppingBag,
  Users,
  MessageCircle,
  Zap,
} from "lucide-react";

// ✅ Built-in Card components so no extra imports needed
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white/5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

const AITradingFeatures = () => {
  const features = [
    {
      icon: CheckCircle,
      color: "from-green-400 to-green-600",
      title: "Years of Proven Results",
      description:
        "Consistently profitable across all market conditions with verified track record since 2019.",
    },
    {
      icon: ShoppingBag,
      color: "from-green-400 to-green-600",
      title: "AI Tested Across All Market Conditions",
      description:
        "Advanced machine learning algorithms tested through bull markets, bear markets, and high volatility periods.",
    },
    {
      icon: Users,
      color: "from-green-400 to-green-600",
      title: "Dedicated Account Manager",
      description:
        "Personal account manager assigned to optimize your trading strategy and maximize performance.",
    },
    {
      icon: MessageCircle,
      color: "from-green-400 to-green-600",
      title: "24/7 Customer Support",
      description:
        "Round-the-clock support via WhatsApp, live chat, and phone to ensure uninterrupted trading.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900/50 to-black py-20 relative overflow-hidden z-10">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 animate-gradient-shift"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 max-w-8xl relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card-dark rounded-full px-4 py-2 mb-6 hover:border-green-400/40 transition-all duration-300 animate-border-glow">
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              Why Choose BotX
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The Future of{" "}
            <span className="text-gradient animate-text-glow">AI Trading</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of traders who trust BotX to deliver consistent,
            automated profits in the forex and crypto markets.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-black" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl">
            <div className="text-4xl font-bold text-green-400 mb-2">
              10,000+
            </div>
            <div className="text-gray-300">Active Traders</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl">
            <div className="text-4xl font-bold text-green-400 mb-2">$50M+</div>
            <div className="text-gray-300">Total Volume Traded</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl">
            <div className="text-4xl font-bold text-green-400 mb-2">92%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITradingFeatures;
