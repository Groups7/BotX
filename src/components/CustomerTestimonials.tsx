import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Michael Rodriguez',
    title: 'Professional Trader',
    location: 'London, UK',
    avatar: 'MR',
    rating: 5,
    text: 'BotX has completely transformed my trading. The AI makes decisions I never would have thought of, and my account has grown 340% in just 6 months.',
    profit: '+$47,230'
  },
  {
    name: 'Sarah Chen',
    title: 'Fund Manager',
    location: 'Singapore',
    avatar: 'SC',
    rating: 5,
    text: 'The consistency is incredible. While other traders struggle with emotions, BotX executes perfectly every time. My FTMO challenge was passed in just 3 weeks.',
    profit: '+$23,890'
  },
  {
    name: 'David Thompson',
    title: 'Crypto Investor',
    location: 'New York, USA',
    avatar: 'DT',
    rating: 5,
    text: 'I was skeptical about AI trading, but BotX proved me wrong. The Bitcoin trades alone have paid for my subscription 10 times over.',
    profit: '+$89,120'
  },
  {
    name: 'Ahmed Al-Mansouri',
    title: 'Forex Trader',
    location: 'Dubai, UAE',
    avatar: 'AM',
    rating: 5,
    text: 'As a busy executive, I needed something that works while I sleep. BotX trades XAUUSD perfectly during Asian sessions. Highly recommended!',
    profit: '+$34,560'
  },
  {
    name: 'Emma Johnson',
    title: 'Private Investor',
    location: 'Toronto, Canada',
    avatar: 'EJ',
    rating: 5,
    text: 'The customer support is outstanding. My dedicated account manager helped optimize my settings, and now I see consistent 8-12% monthly returns.',
    profit: '+$56,780'
  }
];

export function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our  <span className="text-gradient animate-text-glow">Traders Say</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real traders. Join thousands who have transformed their trading with BotX AI.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20 backdrop-blur-sm relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10 w-12 h-12"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10 w-12 h-12"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>

              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Profit Badge */}
                <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-8">
                  <span className="text-green-400 font-bold text-lg">
                    {currentTestimonial.profit} Profit
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-16 h-16 border-2 border-green-500/30">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentTestimonial.name}`} />
                    <AvatarFallback className="bg-green-500/20 text-green-400 font-bold">
                      {currentTestimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">{currentTestimonial.name}</div>
                    <div className="text-green-400 text-sm">{currentTestimonial.title}</div>
                    <div className="text-gray-400 text-sm">{currentTestimonial.location}</div>
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-transparent rounded-lg blur opacity-50 -z-10"></div>
          </Card>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-green-400 w-8' 
                    : 'bg-green-500/30 hover:bg-green-500/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-green-400 mb-2">4.9/5</div>
            <div className="text-gray-300">Average Rating</div>
            <div className="text-sm text-gray-400 mt-1">Based on 1,247 reviews</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-green-400 mb-2">89%</div>
            <div className="text-gray-300">Would Recommend</div>
            <div className="text-sm text-gray-400 mt-1">To other traders</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-2xl">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.3M+</div>
            <div className="text-gray-300">Client Profits</div>
            <div className="text-sm text-gray-400 mt-1">Generated this month</div>
          </div>
        </div>
      </div>
    </section>
  );
}