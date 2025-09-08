import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Globe, 
  Headphones,
  Users,
  Shield,
  Star,
  ArrowRight,
  Send,
  User,
  Building2,
  MessageSquare,
  TrendingUp,
  Package,
  Sparkles
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: 'US',
    location: '',
    experience: '',
    productInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const countryCodes = [
    { code: 'US', label: 'US +1', flag: '🇺🇸' },
    { code: 'UK', label: 'UK +44', flag: '🇬🇧' },
    { code: 'CA', label: 'CA +1', flag: '🇨🇦' },
    { code: 'AU', label: 'AU +61', flag: '🇦🇺' },
    { code: 'DE', label: 'DE +49', flag: '🇩🇪' },
    { code: 'FR', label: 'FR +33', flag: '🇫🇷' },
    { code: 'JP', label: 'JP +81', flag: '🇯🇵' },
    { code: 'SG', label: 'SG +65', flag: '🇸🇬' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        countryCode: 'US',
        location: '',
        experience: '',
        productInterest: ''
      });
    }, 4000);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hi, I need help with BotX AI Trading', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/botxtrading', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description: 'Get instant help via WhatsApp',
      action: 'Message Now',
      color: 'from-green-500 to-green-600',
      onClick: handleWhatsAppClick,
      available: '24/7',
      response: 'Instant'
    },
    {
      icon: Send,
      title: 'Telegram',
      description: 'Join our Telegram community',
      action: 'Join Channel',
      color: 'from-blue-500 to-blue-600',
      onClick: handleTelegramClick,
      available: '24/7',
      response: '< 5 min'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      color: 'from-purple-500 to-purple-600',
      onClick: () => window.location.href = 'mailto:support@botx.ai',
      available: 'Business Hours',
      response: '< 2 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      action: 'Call Now',
      color: 'from-orange-500 to-orange-600',
      onClick: () => window.location.href = 'tel:+1234567890',
      available: '9 AM - 6 PM EST',
      response: 'Immediate'
    }
  ];

  const supportFeatures = [
    {
      icon: Users,
      title: 'Dedicated Account Manager',
      description: 'Personal support for your trading journey'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support when you need it'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: 'Multi-language support worldwide'
    },
    {
      icon: Shield,
      title: 'Secure Communication',
      description: 'Encrypted and private conversations'
    }
  ];

  const officeLocations = [
    {
      city: 'New York',
      country: 'USA',
      address: '123 Wall Street, NY 10005',
      phone: '+1 (555) 123-4567',
      timezone: 'EST'
    },
    {
      city: 'London',
      country: 'UK',
      address: '456 Canary Wharf, London E14',
      phone: '+44 20 7946 0958',
      timezone: 'GMT'
    },
    {
      city: 'Singapore',
      country: 'SG',
      address: '789 Marina Bay, Singapore 018956',
      phone: '+65 6123 4567',
      timezone: 'SGT'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-2 mb-6 hover:border-green-400/40 transition-all duration-300">
                <Headphones className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">24/7 Support</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Get in <span className="text-green-400">Touch</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Need help with BotX AI Trading? Our expert support team is here to assist you 
                with setup, optimization, and any questions you may have.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">&lt; 2 min</div>
                  <div className="text-gray-400">Average Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                  <div className="text-gray-400">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support Availability</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your <span className="text-green-400">Preferred Method</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Multiple ways to reach us - pick what works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
                  onClick={method.onClick}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-400 mb-4">{method.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Available:</span>
                        <span className="text-green-400">{method.available}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Response:</span>
                        <span className="text-cyan-400">{method.response}</span>
                      </div>
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white font-bold`}>
                      {method.action}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info & CTA */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get BotX Demo & <span className="text-green-400">Manager</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  Connect with your dedicated account manager and get a personalized demo of 
                  BotX AI trading solutions. Start your journey to automated profits today.
                </p>

                {isSubmitted ? (
                  <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                    <CardContent className="p-10 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-400/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <CheckCircle className="w-10 h-10 text-green-400" />
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-white mb-3">
                          🎉 Welcome to BotX!
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          Your request has been submitted successfully. Our dedicated account manager will contact you within 
                          <span className="text-green-400 font-semibold"> 24 hours</span>.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-8">
                        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3">
                          <Mail className="w-5 h-5 text-green-400" />
                          <div className="text-left">
                            <p className="text-green-400 font-semibold text-sm">Check Your Email</p>
                            <p className="text-gray-300 text-xs">Instant access to trading resources sent!</p>
                          </div>
                        </div>
                        
                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex items-center gap-3">
                          <Phone className="w-5 h-5 text-blue-400" />
                          <div className="text-left">
                            <p className="text-blue-400 font-semibold text-sm">Personal Manager Assigned</p>
                            <p className="text-gray-300 text-xs">Dedicated support for your trading journey</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 rounded-xl p-4">
                        <p className="text-white font-medium text-sm">
                          🚀 Get ready to revolutionize your trading with AI-powered automation!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
                    <CardContent className="p-8">
                      {/* Trust Indicators */}
                      <div className="flex items-center justify-center gap-6 mb-8 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Shield className="w-4 h-4 text-green-400" />
                          <span>Secure & Private</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-4 h-4 text-blue-400" />
                          <span>Global Support</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Sparkles className="w-4 h-4 text-purple-400" />
                          <span>AI Powered</span>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* Full Name */}
                        <div className="relative">
                          <label className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
                            <User className="w-4 h-4 text-green-400" />
                            Full Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('fullName')}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Enter your full name"
                              className={`w-full bg-gray-800/50 border-2 rounded-xl px-4 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                                focusedField === 'fullName' 
                                  ? 'border-green-400 bg-gray-800/80 shadow-lg shadow-green-400/20' 
                                  : 'border-gray-600 hover:border-gray-500'
                              }`}
                              required
                            />
                            {focusedField === 'fullName' && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <label className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
                            <Mail className="w-4 h-4 text-blue-400" />
                            Email Address
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Enter your email address"
                              className={`w-full bg-gray-800/50 border-2 rounded-xl px-4 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                                focusedField === 'email' 
                                  ? 'border-blue-400 bg-gray-800/80 shadow-lg shadow-blue-400/20' 
                                  : 'border-gray-600 hover:border-gray-500'
                              }`}
                              required
                            />
                            {focusedField === 'email' && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="relative">
                          <label className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
                            <Phone className="w-4 h-4 text-purple-400" />
                            Phone Number
                          </label>
                          <div className="flex flex-row gap-3">
                            <select 
                              name="countryCode"
                              value={formData.countryCode}
                              onChange={handleInputChange}
                              className="flex-shrink-0 bg-gray-800/50 border-2 border-gray-600 hover:border-gray-500 rounded-xl px-3 py-4 text-white focus:border-purple-400 focus:outline-none transition-all duration-300 min-w-[120px]"
                            >
                              {countryCodes.map(country => (
                                <option key={country.code} value={country.code}>
                                  {country.flag} {country.label}
                                </option>
                              ))}
                            </select>
                            <div className="relative flex-1">
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField('phone')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Enter phone number"
                                className={`w-full bg-gray-800/50 border-2 rounded-xl px-4 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                                  focusedField === 'phone' 
                                    ? 'border-purple-400 bg-gray-800/80 shadow-lg shadow-purple-400/20' 
                                    : 'border-gray-600 hover:border-gray-500'
                                }`}
                                required
                              />
                              {focusedField === 'phone' && (
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-500 text-xs mt-2">10-16 digits required for US/CA</p>
                        </div>

                        {/* Location */}
                        <div className="relative">
                          <label className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            Location
                          </label>
                          <select
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('location')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-gray-800/50 border-2 rounded-xl px-4 py-4 text-white transition-all duration-300 focus:outline-none ${
                              focusedField === 'location' 
                                ? 'border-cyan-400 bg-gray-800/80 shadow-lg shadow-cyan-400/20' 
                                : 'border-gray-600 hover:border-gray-500'
                            }`}
                            required
                          >
                            <option value="">Select your location</option>
                            <option value="US">🇺🇸 United States</option>
                            <option value="UK">🇬🇧 United Kingdom</option>
                            <option value="CA">🇨🇦 Canada</option>
                            <option value="AU">🇦🇺 Australia</option>
                            <option value="DE">🇩🇪 Germany</option>
                            <option value="FR">🇫🇷 France</option>
                            <option value="JP">🇯🇵 Japan</option>
                            <option value="SG">🇸🇬 Singapore</option>
                            <option value="Other">🌍 Other</option>
                          </select>
                        </div>

                        {/* Trading Experience */}
                        <div className="relative">
                          <label className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
                            <TrendingUp className="w-4 h-4 text-orange-400" />
                            Trading Experience
                          </label>
                          <select
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('experience')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-gray-800/50 border-2 rounded-xl px-4 py-4 text-white transition-all duration-300 focus:outline-none ${
                              focusedField === 'experience' 
                                ? 'border-orange-400 bg-gray-800/80 shadow-lg shadow-orange-400/20' 
                                : 'border-gray-600 hover:border-gray-500'
                            }`}
                            required
                          >
                            <option value="">Select your experience level</option>
                            <option value="beginner">📚 Beginner (0-1 years)</option>
                            <option value="intermediate">📈 Intermediate (1-3 years)</option>
                            <option value="advanced">🎯 Advanced (3-5 years)</option>
                            <option value="expert">🏆 Expert (5+ years)</option>
                          </select>
                        </div>

                        {/* Product Interest */}
                        <div className="relative">
                          <label className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
                            <Package className="w-4 h-4 text-pink-400" />
                            Product Interest
                          </label>
                          <select
                            name="productInterest"
                            value={formData.productInterest}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('productInterest')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-gray-800/50 border-2 rounded-xl px-4 py-4 text-white transition-all duration-300 focus:outline-none ${
                              focusedField === 'productInterest' 
                                ? 'border-pink-400 bg-gray-800/80 shadow-lg shadow-pink-400/20' 
                                : 'border-gray-600 hover:border-gray-500'
                            }`}
                            required
                          >
                            <option value="">What are you most interested in?</option>
                            <option value="auto-trading">🤖 Auto Trading Software</option>
                            <option value="indicators">📊 Trading Indicators</option>
                            <option value="funded-account">💰 Funded Account Tools</option>
                            <option value="copy-trading">📋 Copy Trading</option>
                            <option value="all">🎯 All Products</option>
                          </select>
                        </div>

                        {/* Enhanced Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-700 text-black disabled:text-gray-400 px-6 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30 glow-effect flex flex-row items-center justify-center gap-3 relative overflow-hidden"
                        >
                          {isSubmitting ? (
                            <div className="flex flex-row items-center gap-3">
                              <div className="w-6 h-6 border-3 border-black/20 border-t-black rounded-full animate-spin"></div>
                              <span>Processing Your Request...</span>
                            </div>
                          ) : (
                            <div className="flex flex-row items-center gap-3">
                              <Package className="w-6 h-6" />
                              <span>Get Demo & Manager</span>
                              <Sparkles className="w-5 h-5 animate-pulse" />
                            </div>
                          )}
                          
                          {/* Button shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </Button>

                        {/* Enhanced Terms */}
                        <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 flex flex-col items-center text-center">
                          <p className="text-gray-400 text-xs leading-relaxed">
                            🔒 By submitting this form, you agree to be contacted by our team and accept our 
                            <span className="text-green-400 hover:text-green-300 cursor-pointer"> Terms of Service</span> and 
                            <span className="text-green-400 hover:text-green-300 cursor-pointer"> Privacy Policy</span>.
                            <br />
                            <span className="text-gray-500">Your information is secure and will never be shared.</span>
                          </p>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Contact Info & Features */}
              <div className="space-y-8">
                {/* Support Features */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Why Choose Our <span className="text-green-400">Support</span>
                  </h3>
                  <div className="space-y-4">
                    {supportFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg border border-green-500/10">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                          <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Locations */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Our <span className="text-green-400">Global Offices</span>
                  </h3>
                  <div className="space-y-4">
                    {officeLocations.map((office, index) => (
                      <Card key={index} className="bg-gray-900/30 border-green-500/10">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-white font-semibold mb-1">
                                {office.city}, {office.country}
                              </h4>
                              <p className="text-gray-400 text-sm mb-2">{office.address}</p>
                              <p className="text-green-400 text-sm">{office.phone}</p>
                            </div>
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              {office.timezone}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Customer Reviews */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    What Customers <span className="text-green-400">Say</span>
                  </h3>
                  <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">
                        "The support team is incredible! They helped me set up my trading bot 
                        and I was profitable within the first week. Highly recommended!"
                      </p>
                      <div className="text-green-400 font-semibold">- Sarah M., Professional Trader</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      <Footer />
    </>
  );
};

export default ContactPage;