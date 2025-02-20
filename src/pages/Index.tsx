
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Rocket, Zap, Star, Shield } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via 30% rgb(26, 18, 58) to-rich-black text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white/5 backdrop-blur-lg rounded-full mb-6 border border-white/10">
            <Rocket className="w-4 h-4 mr-2 text-neon-highlight" />
            Limited Time Early Access
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Turn Your LinkedIn Page into a Stunning Website Instantly
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Automatically transform your professional profile into a sleek, personalized website in seconds. 
            Zero coding required.
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
                className="w-full pl-12 pr-32 py-4 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 focus:outline-none focus:border-neon-highlight/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-2 px-6 py-2 bg-gradient-to-r from-deep-purple to-neon-highlight text-white rounded-full font-medium hover:opacity-90 transition-opacity animate-glow"
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
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Basic Access Card */}
          <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 duration-300">
            <div className="absolute -top-4 left-4 px-4 py-1 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium">
              Starter
            </div>
            <h3 className="text-2xl font-display font-semibold mb-2">Basic Access</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-gray-400 ml-2">one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Early platform access",
                "Basic customization",
                "Email support"
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-neon-highlight" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-white/10 backdrop-blur-lg text-white rounded-full font-medium hover:bg-white/20 transition-colors">
              Get Basic Access
            </button>
          </div>

          {/* Pro Access Card */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-deep-purple/20 to-neon-highlight/20 backdrop-blur-lg border border-white/20 hover:border-neon-highlight/50 transition-all hover:-translate-y-1 duration-300">
            <div className="absolute -top-4 left-4 px-4 py-1 bg-gradient-to-r from-deep-purple to-neon-highlight rounded-full text-sm font-medium">
              Popular
            </div>
            <h3 className="text-2xl font-display font-semibold mb-2">Pro Access</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-gray-400 ml-2">one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Priority platform access",
                "Advanced customization",
                "Priority support",
                "Analytics dashboard",
                "Custom domain"
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-neon-highlight" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-gradient-to-r from-deep-purple to-neon-highlight text-white rounded-full font-medium hover:opacity-90 transition-opacity animate-glow">
              Get Pro Access
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 duration-300">
            <div className="absolute -top-4 left-4 px-4 py-1 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium">
              Enterprise
            </div>
            <h3 className="text-2xl font-display font-semibold mb-2">Lifetime Access</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-gray-400 ml-2">one-time</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Lifetime platform access",
                "Full customization suite",
                "24/7 premium support",
                "Advanced analytics",
                "Multiple domains",
                "Team collaboration",
                "API access"
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-neon-highlight" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-white/10 backdrop-blur-lg text-white rounded-full font-medium hover:bg-white/20 transition-colors">
              Get Lifetime Access
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
