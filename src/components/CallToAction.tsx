import { Button } from './ui/button';
import { MessageCircle, Bot, Zap, ArrowRight, Users, Shield, Clock } from 'lucide-react';

interface CallToActionProps {
  onOpenForm: () => void;
}

export function CallToAction({ onOpenForm }: CallToActionProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hi, I want to get a dedicated manager and software demo for BotX AI Trading', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-green-900/10 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 mb-8">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to Get Started?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get Dedicated Manager &<br />
             <span className="text-gradient animate-text-glow">Software Demo Today</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the AI trading revolution. Get your personal account manager and see BotX in action with a live demo tailored to your trading goals.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-6 text-lg group"
            >
              <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Talk to Manager on WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={onOpenForm}
              size="lg"
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-6 text-lg group"
            >
              <Bot className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Get Software Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center justify-center space-x-3 p-6 bg-green-500/5 border border-green-500/10 rounded-2xl">
              <Users className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <div className="text-white font-bold">Personal Manager</div>
                <div className="text-sm text-gray-400">Dedicated support for your success</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-6 bg-green-500/5 border border-green-500/10 rounded-2xl">
              <Shield className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <div className="text-white font-bold">Risk-Free Trial</div>
                <div className="text-sm text-gray-400">30-day money-back guarantee</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-6 bg-green-500/5 border border-green-500/10 rounded-2xl">
              <Clock className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <div className="text-white font-bold">24/7 Support</div>
                <div className="text-sm text-gray-400">Always here when you need us</div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Demo Request Card */}
          <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Bot className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              See BotX in Action
            </h3>
            <p className="text-gray-300 mb-6">
              Watch our AI make live trades and see real-time performance data. No commitment required.
            </p>
            <Button 
              onClick={onOpenForm}
              className="w-full bg-green-500 hover:bg-green-600 text-black font-bold"
            >
              Request Live Demo
            </Button>
          </div>

          {/* WhatsApp Contact Card */}
          <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Instant Manager Access
            </h3>
            <p className="text-gray-300 mb-6">
              Connect directly with your dedicated account manager via WhatsApp for immediate assistance.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-black font-bold"
            >
              Message on WhatsApp
            </Button>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium">Limited spots available - Only 47 new accounts this month</span>
          </div>
        </div>
      </div>
    </section>
  );
}