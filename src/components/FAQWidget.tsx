import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Search, HelpCircle, MessageCircle, Book, Shield, DollarSign, Zap, ChevronRight } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'pricing' | 'security';
  tags: string[];
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How does BotX AI trading technology work?',
    answer: 'BotX uses advanced machine learning algorithms that analyze market patterns, news sentiment, and technical indicators in real-time. Our AI processes over 10,000 data points per second to identify profitable trading opportunities and execute trades automatically on your behalf.',
    category: 'technical',
    tags: ['AI', 'algorithm', 'trading', 'automation']
  },
  {
    id: '2',
    question: 'Is my trading capital safe with BotX?',
    answer: 'Yes, your capital is completely safe. BotX never has direct access to your funds. We connect to your broker via secure API keys with trading-only permissions. Your money stays in your own MT4/MT5 account at your chosen broker.',
    category: 'security',
    tags: ['safety', 'security', 'capital', 'broker']
  },
  {
    id: '3',
    question: 'What is the minimum amount needed to start?',
    answer: 'You can start with as little as $500. However, we recommend starting with $1,000-$2,000 for better diversification and optimal performance. The bot automatically adjusts position sizes based on your account balance.',
    category: 'general',
    tags: ['minimum', 'capital', 'start', 'investment']
  },
  {
    id: '4',
    question: 'Can I use BotX with my existing broker?',
    answer: 'BotX is compatible with over 200+ MT4 and MT5 brokers worldwide. As long as your broker supports Expert Advisors (EAs) and API connections, you can use BotX. We provide a full compatibility list during setup.',
    category: 'technical',
    tags: ['broker', 'compatibility', 'MT4', 'MT5', 'EA']
  },
  {
    id: '5',
    question: 'What happens if I want to stop the bot?',
    answer: 'You have complete control at all times. You can pause, stop, or disable BotX instantly through our dashboard or your MT4/MT5 platform. All open positions can be closed manually or automatically based on your settings.',
    category: 'general',
    tags: ['stop', 'control', 'disable', 'manual']
  },
  {
    id: '6',
    question: 'How do I get my dedicated account manager?',
    answer: 'Every BotX client gets a dedicated account manager assigned within 24 hours of signup. Your manager will help optimize settings, provide market insights, and ensure your bot performs at its best. Contact via WhatsApp, phone, or email.',
    category: 'general',
    tags: ['manager', 'support', 'dedicated', 'WhatsApp']
  },
  {
    id: '7',
    question: 'Are there any hidden fees or commissions?',
    answer: 'No hidden fees whatsoever. Our pricing is completely transparent with no setup fees, withdrawal fees, or performance commissions. You pay only the monthly subscription fee based on your chosen plan.',
    category: 'pricing',
    tags: ['fees', 'commission', 'transparent', 'subscription']
  },
  {
    id: '8',
    question: 'What if BotX doesn\'t work for me?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with BotX performance within the first month, we\'ll refund your subscription fee completely. No questions asked, no complicated procedures.',
    category: 'general',
    tags: ['guarantee', 'refund', 'satisfaction', '30-day']
  }
];

const categories = [
  { id: 'general', label: 'General', icon: HelpCircle, color: 'text-green-400' },
  { id: 'technical', label: 'Technical', icon: Zap, color: 'text-blue-400' },
  { id: 'pricing', label: 'Pricing', icon: DollarSign, color: 'text-cyan-400' },
  { id: 'security', label: 'Security', icon: Shield, color: 'text-purple-400' }
];

export function FAQWidget() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 mb-6">
            <Book className="w-4 h-4" />
            <span className="text-sm font-medium">FAQ & Support</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked  <span className="text-gradient animate-text-glow">Questions</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get instant answers to common questions about BotX AI trading. Can't find what you're looking for? Our support team is here to help.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 bg-gray-900/50 border-green-500/30 text-white placeholder-gray-400 focus:border-green-400 text-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-green-500 text-black border-green-500 font-bold'
                  : 'bg-gray-900/50 text-gray-300 border-gray-600 hover:border-green-500/50'
              }`}
            >
              All Questions
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-black border-green-500 font-bold'
                    : 'bg-gray-900/50 text-gray-300 border-gray-600 hover:border-green-500/50'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((faq) => {
                    const category = categories.find(cat => cat.id === faq.category);
                    return (
                      <AccordionItem 
                        key={faq.id} 
                        value={faq.id}
                        className="bg-black/30 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline [&>svg]:text-green-400">
                          <div className="flex items-start space-x-4 text-left">
                            {category && (
                              <category.icon className={`w-5 h-5 mt-0.5 ${category.color} flex-shrink-0`} />
                            )}
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-white mb-2">
                                {faq.question}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <Badge 
                                  variant="outline" 
                                  className="text-xs border-green-500/30 text-green-400"
                                >
                                  {category?.label}
                                </Badge>
                                {faq.tags.slice(0, 2).map((tag) => (
                                  <Badge 
                                    key={tag}
                                    variant="outline" 
                                    className="text-xs border-gray-600 text-gray-400"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="pl-9 text-gray-300 leading-relaxed">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gray-900/50 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Results Found</h3>
                <p className="text-gray-400 mb-6">
                  We couldn't find any FAQs matching your search. Try different keywords or browse by category.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  Clear search and show all questions
                </button>
              </CardContent>
            </Card>
          )}

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-green-500/10 to-transparent border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-gray-300 mb-6">
                  Our support team is available 24/7 to help you get the most out of BotX.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat with Support</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-lg transition-colors">
                    <HelpCircle className="w-5 h-5" />
                    <span>Browse Knowledge Base</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}