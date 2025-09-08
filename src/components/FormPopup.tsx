import React, { useEffect, useMemo, useState } from 'react';
import { X, User, Mail, Phone, MapPin, TrendingUp, Package, CheckCircle, Sparkles, Globe, Shield } from 'lucide-react';

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

type CountryCode = {
  code: string;
  country: string;
  minLength: number;
  maxLength: number;
};

const countryCodes: CountryCode[] = [
  { code: '+1', country: 'US/CA', minLength: 10, maxLength: 10 },
  { code: '+44', country: 'UK',  minLength: 10, maxLength: 11 },
  { code: '+91', country: 'India', minLength: 10, maxLength: 10 },
  { code: '+971', country: 'UAE', minLength: 9, maxLength: 9 },
  { code: '+966', country: 'Saudi', minLength: 9, maxLength: 9 },
  { code: '+965', country: 'Kuwait',minLength: 8, maxLength: 8 },
  { code: '+973', country: 'Bahrain', minLength: 8, maxLength: 8 },
  { code: '+974', country: 'Qatar',minLength: 8, maxLength: 8 },
  { code: '+968', country: 'Oman', minLength: 8, maxLength: 8 },
  { code: '+61', country: 'Australia', minLength: 9, maxLength: 9 },
  { code: '+49', country: 'Germany', minLength: 10, maxLength: 12 },
  { code: '+33', country: 'France',minLength: 9, maxLength: 9 },
  { code: '+39', country: 'Italy',minLength: 9, maxLength: 10 },
  { code: '+34', country: 'Spain', minLength: 9, maxLength: 9 },
  { code: '+31', country: 'Netherlands', minLength: 9, maxLength: 9 },
  { code: '+65', country: 'Singapore',minLength: 8, maxLength: 8 },
  { code: '+60', country: 'Malaysia', minLength: 9, maxLength: 10 },
  { code: '+86', country: 'China',minLength: 11, maxLength: 11 },
  { code: '+81', country: 'Japan', minLength: 10, maxLength: 11 },
  { code: '+82', country: 'South Korea', minLength: 10, maxLength: 11 }
];

const API_BASE = 'https://botxcontactform.onrender.com';
const API_URL = `${API_BASE}/api/send-mail`;

const FormPopup: React.FC<FormPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+1',          // default set (important)
    location: '',
    experience: '',
    productInterest: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const selectedCodeMeta = useMemo(
    () => countryCodes.find(c => c.code === formData.countryCode) ?? countryCodes[0],
    [formData.countryCode]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numeric = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, phone: numeric }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email.';
    if (!formData.countryCode) nextErrors.countryCode = 'Select a country code.';
    const phoneLen = formData.phone.length;
    if (phoneLen < selectedCodeMeta.minLength || phoneLen > selectedCodeMeta.maxLength) {
      nextErrors.phone = `Phone must be ${selectedCodeMeta.minLength}${selectedCodeMeta.minLength !== selectedCodeMeta.maxLength ? `–${selectedCodeMeta.maxLength}` : ''} digits for ${selectedCodeMeta.country}.`;
    }
    if (!formData.location) nextErrors.location = 'Select your location.';
    if (!formData.experience) nextErrors.experience = 'Select your experience level.';
    if (!formData.productInterest) nextErrors.productInterest = 'Select a product of interest.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleClose = () => {
    // If you want to preserve inputs on close, remove the resets below.
    setFocusedField(null);
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose(); // delegate to parent to actually hide the popup
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors(prev => ({ ...prev, submit: '' }));

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: `${formData.countryCode}${formData.phone}`, // include country code
      countryCode: formData.countryCode,
      location: formData.location,
      experience: formData.experience,
      productInterest: formData.productInterest,
      source: 'BotX Modal Form'
    };

    // Warm-up (Render cold start)
    try { await fetch(`${API_BASE}/`, { mode: 'cors' }); } catch {}

    // POST with timeout + CORS mode
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (!res.ok) {
        const msg = await res.text().catch(() => '');
        throw new Error(msg || `Request failed with ${res.status}`);
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          countryCode: '+1',
          location: '',
          experience: '',
          productInterest: ''
        });
        onClose();
      }, 3500);
    } catch (err: any) {
      const msg = String(err?.message || '');
      setErrors(prev => ({
        ...prev,
        submit:
          msg.includes('Failed to fetch') || msg.includes('abort')
            ? 'Network/CORS blocked or server timed out. Confirm API CORS & keep service warm.'
            : `Submission failed. ${msg}`
      }));
    } finally {
      clearTimeout(timer);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={() => { if (!isSubmitting) handleClose(); }} // block backdrop-close while submitting if you prefer
      role="dialog"
      aria-modal="true"
      aria-labelledby="botx-form-title"
    >
      <div
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-green-400/30 rounded-3xl max-w-lg w-full max-h-[95vh] overflow-y-auto relative animate-scale-in shadow-2xl shadow-green-400/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient background (won't intercept clicks now) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 rounded-3xl"></div>
        <div className="pointer-events-none absolute top-0 left-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>

        {/* Close button (always enabled) */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-all duration-300 z-10 hover:scale-110 hover:rotate-90"
          aria-label="Close"
          type="button"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="p-10 text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-400/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <div className="mb-6">
              <h3 id="botx-form-title" className="text-3xl font-bold text-white mb-3">
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
          </div>
        ) : (
          <div className="p-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Package className="w-8 h-8 text-green-400" />
              </div>
              <h3 id="botx-form-title" className="text-3xl font-bold text-white mb-3">
                Get BotX Demo & Manager
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Connect with your dedicated account manager and get a personalized demo of BotX AI trading solutions.
                Start your journey to automated profits today.
              </p>
              <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-400">
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
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
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
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'err-fullName' : undefined}
                  />
                  {focusedField === 'fullName' && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
                    </div>
                  )}
                </div>
                {errors.fullName && <p id="err-fullName" className="text-rose-400 text-xs mt-2">{errors.fullName}</p>}
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
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                  />
                  {focusedField === 'email' && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                    </div>
                  )}
                </div>
                {errors.email && <p id="err-email" className="text-rose-400 text-xs mt-2">{errors.email}</p>}
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
                    className="flex-shrink-0 bg-gray-800/50 border-2 border-gray-600 hover:border-gray-500 rounded-xl px-3 py-4 text-white focus:border-purple-400 focus:outline-none transition-all duration-300 min-w-[150px]"
                    required
                    aria-invalid={!!errors.countryCode}
                    aria-describedby={errors.countryCode ? 'err-countryCode' : undefined}
                  >
                    <option value="" disabled>Code</option>
                    {countryCodes.map(country => (
                      <option key={country.code} value={country.code}>
                        {country.country} ({country.code})
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
                      placeholder={`Enter phone number (${selectedCodeMeta.minLength}${selectedCodeMeta.minLength !== selectedCodeMeta.maxLength ? `–${selectedCodeMeta.maxLength}` : ''} digits)`}
                      inputMode="numeric"
                      className={`w-full bg-gray-800/50 border-2 rounded-xl px-4 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                        focusedField === 'phone'
                          ? 'border-purple-400 bg-gray-800/80 shadow-lg shadow-purple-400/20'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      required
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                    />
                    {focusedField === 'phone' && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
                {errors.countryCode && <p id="err-countryCode" className="text-rose-400 text-xs mt-2">{errors.countryCode}</p>}
                <p className="text-gray-500 text-xs mt-2">
                  Required digits for {selectedCodeMeta.country}: {selectedCodeMeta.minLength}
                  {selectedCodeMeta.minLength !== selectedCodeMeta.maxLength ? `–${selectedCodeMeta.maxLength}` : ''}.
                </p>
                {errors.phone && <p id="err-phone" className="text-rose-400 text-xs mt-2">{errors.phone}</p>}
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
                  aria-invalid={!!errors.location}
                  aria-describedby={errors.location ? 'err-location' : undefined}
                >
                  <option value="">Select your location</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="Singapore">Singapore</option>
                  <option value="UAE">UAE</option>
                  <option value="India">India</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Oman">Oman</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="South Korea">South Korea</option>
                  <option value="OTHER">Other</option>
                </select>
                {errors.location && <p id="err-location" className="text-rose-400 text-xs mt-2">{errors.location}</p>}
              </div>

              {/* Experience */}
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
                  aria-invalid={!!errors.experience}
                  aria-describedby={errors.experience ? 'err-experience' : undefined}
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Expert</option>
                </select>
                {errors.experience && <p id="err-experience" className="text-rose-400 text-xs mt-2">{errors.experience}</p>}
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
                  aria-invalid={!!errors.productInterest}
                  aria-describedby={errors.productInterest ? 'err-productInterest' : undefined}
                >
                  <option value="">What are you most interested in?</option>
                  <option value="auto-trading">Auto Trading Software</option>
                  <option value="indicators">Custom Indicators</option>
                  <option value="funded-account">Funded Account Tools</option>
                  <option value="copy-trading">Copy Trading</option>
                  <option value="all">All Products</option>
                </select>
                {errors.productInterest && <p id="err-productInterest" className="text-rose-400 text-xs mt-2">{errors.productInterest}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-700 text-black disabled:text-gray-400 px-6 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30 relative overflow-hidden flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                    <span>Processing Your Request...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6" />
                    <span>Get Demo & Manager</span>
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              {/* Global submit error */}
              {errors.submit && (
                <div className="bg-rose-500/10 border border-rose-400/30 rounded-xl p-3">
                  <p className="text-rose-300 text-xs">{errors.submit}</p>
                </div>
              )}

              {/* Terms */}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPopup;
