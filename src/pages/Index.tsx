
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Rocket } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for your interest! We'll be in touch soon.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rich-black to-rich-gray text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Limited Time Early Access
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turn Your LinkedIn Page into a Website Instantly
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Transform your professional profile into a stunning, personalized website in seconds. No coding required.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-20">
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-6 h-6 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-32 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 focus:outline-none focus:border-white/20 transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-2 px-6 py-2 bg-white text-rich-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Get Early Access
              </button>
            </div>
          </form>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Priority Access Card */}
          <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
            <div className="absolute -top-4 left-4 px-4 py-1 bg-white/10 rounded-full text-sm font-medium">
              Popular
            </div>
            <h3 className="text-2xl font-display font-semibold mb-2">Priority Access</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-gray-400 ml-2">one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Early access to platform", "Priority support", "Basic customization"].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-white text-rich-black rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get Priority Access
            </button>
          </div>

          {/* Lifetime Access Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
            <h3 className="text-2xl font-display font-semibold mb-2">Lifetime Access</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-gray-400 ml-2">one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Lifetime platform access",
                "Premium support",
                "Advanced customization",
                "Future updates included",
                "Custom domain support"
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-white text-rich-black rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get Lifetime Access
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
