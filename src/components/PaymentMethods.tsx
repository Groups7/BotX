import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Lock, CreditCard, Smartphone, Bitcoin, Building2 } from 'lucide-react';

const paymentMethods = [
  {
    category: 'Cards',
    icon: CreditCard,
    methods: ['Visa', 'MasterCard', 'Amex', 'RuPay'],
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
    iconColor: 'text-cyan-400'
  },
  {
    category: 'UPI',
    icon: Smartphone,
    methods: ['Google Pay', 'PhonePe', 'Paytm', 'BHIM'],
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400'
  },
  {
    category: 'Crypto',
    icon: Bitcoin,
    methods: ['Bitcoin', 'Ethereum', 'USDT'],
    bgGradient: 'from-cyan-400/10 to-teal-500/10',
    borderColor: 'border-cyan-400/30',
    iconColor: 'text-cyan-300'
  },
  {
    category: 'Bank Transfer',
    icon: Building2,
    methods: ['Wire Transfer', 'Direct Bank', 'SWIFT'],
    bgGradient: 'from-blue-400/10 to-indigo-500/10',
    borderColor: 'border-blue-400/30',
    iconColor: 'text-blue-300'
  }
];

export function PaymentMethods() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Accept Multiple Payment Methods
          </h2>
          
          <div className="flex items-center justify-center space-x-2 text-cyan-400 mb-8">
            <span className="text-lg">Fast</span>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <span className="text-lg">Secure</span>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <span className="text-lg">Global</span>
          </div>

          {/* Secure Badge */}
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <Lock className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Secure & Encrypted Payments</span>
          </div>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {paymentMethods.map((method, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${method.bgGradient} ${method.borderColor} border backdrop-blur-sm hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
            >
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                </div>

                {/* Category Title */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {method.category}
                </h3>

                {/* Payment Methods List */}
                <div className="space-y-1">
                  {method.methods.map((paymentMethod, methodIndex) => (
                    <div key={methodIndex} className="text-sm text-gray-300">
                      {paymentMethod}
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${method.bgGradient} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-12 text-center">
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm">SSL 256-bit Encryption</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm">PCI DSS Compliant</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
            <span className="text-sm">2FA Protection</span>
          </div>
        </div>

        {/* Payment Logos Row (Optional Enhancement) */}
        <div className="mt-8 flex items-center justify-center space-x-6 opacity-60">
          {/* Card Logos */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">
              VISA
            </div>
            <div className="w-12 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
              MC
            </div>
            <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded text-white text-xs flex items-center justify-center font-bold">
              AMEX
            </div>
          </div>

          {/* Crypto Symbols */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
              ₿
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
              Ξ
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
              ₮
            </div>
          </div>
        </div>
      </div>

      {/* Separator Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </section>
  );
}

export default PaymentMethods