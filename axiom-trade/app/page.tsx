'use client'

import Image from "next/image";
import TokenTable from '@/components/organisms/TokenTable'
import LoginModal from '@/components/organisms/LoginModal'
import SignUpModal from '@/components/organisms/SignUpModal'
import NavBar from '@/components/organisms/NavBar'
import { useState } from 'react'

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [openFeature, setOpenFeature] = useState<number | null>(null)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index)
  }

  const handleLaunchAxiomClick = () => {
    setIsSignUpModalOpen(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCloseModals = () => {
    setIsLoginModalOpen(false)
    setIsSignUpModalOpen(false)
  }

  const handleSwitchToSignUp = () => {
    setIsLoginModalOpen(false)
    setIsSignUpModalOpen(true)
  }

  const handleSwitchToLogin = () => {
    setIsSignUpModalOpen(false)
    setIsLoginModalOpen(true)
  }

  const faqs = [
    {
      question: "What is Axiom?",
      answer: "Axiom is a trading platform designed to be the only application you need to trade onchain. We offer a suite of integrations that allow you to trade the hottest assets, all in one place."
    },
    {
      question: "How secure is Axiom?",
      answer: "Axiom prioritizes security with non-custodial wallets and MEV-resistant execution."
    },
    {
      question: "Can I buy crypto on Axiom?",
      answer: "Yes, Axiom supports various trading features including buying crypto."
    },
    {
      question: "How does Axiom offer yield?",
      answer: "Axiom provides yield opportunities through various trading and staking features."
    },
    {
      question: "Is Axiom decentralized?",
      answer: "Axiom is designed with decentralized principles in mind."
    }
  ]

  const features = [
    {
      title: "Order Execution Engine",
      subtitle: "Trade with confidence.",
      details: "Our advanced order execution engine ensures fast and reliable trades with minimal slippage.",
      image: "/next.svg"
    },
    {
      title: "Wallet and Twitter Tracker",
      subtitle: "Trade and track all in one place.",
      details: "Monitor your wallet balances and track Twitter trends for informed trading decisions.",
      image: "/globe.svg"
    },
    {
      title: "Hyperliquid Perpetuals",
      subtitle: "Trade leveraged Perps.",
      details: "Access perpetual futures with high leverage for amplified trading opportunities.",
      image: "/window.svg"
    },
    {
      title: "Yield",
      subtitle: "Earn while you sleep.",
      details: "Generate passive income through staking and yield farming strategies.",
      image: "/vercel.svg"
    }
  ]

  return (
    <div className="relative z-10 min-h-screen bg-[#040507] text-white">
      <NavBar onLoginClick={() => setIsLoginModalOpen(true)} onSignUpClick={() => setIsSignUpModalOpen(true)} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center animate-slide-up">
        <Image
          src="/axiom-logo.svg"
          alt="Axiom Logo"
          width={120}
          height={120}
          className="mx-auto mb-16"
          priority
        />
        <h1 className="text-4xl font-bold mb-4">The Gateway to DeFi</h1>
        <p className="text-lg text-gray-400 mb-8">Axiom is the only trading platform you'll ever need.</p>
        <div className="mt-8 text-sm text-gray-500">
          <p>Backed by</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="bg-orange-500 text-white px-2 py-1">Y</span>
            <span className="font-medium">Combinator</span>
          </div>
          <div className="mt-4 bg-[#0a0c10] rounded-lg p-4 max-w-md mx-auto">
            <video
              src="/images/Screen Recording 2025-11-09 153028.mp4"
              autoPlay
              muted
              loop
              className="w-full rounded"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <h2 className="text-4xl font-bold text-center mb-4">Advanced Features to</h2>
        <h2 className="text-4xl font-bold text-center mb-8">Videoline Your Trading.</h2>
        <p className="text-lg text-gray-400 text-center mb-16">
          From wallet tracking to real-time analytics, we've got you covered.
        </p>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 pb-4">
            {features.map((feature, index) => (
              <div key={index} className="min-w-[300px] bg-[#0a0c10] rounded-lg">
                <button
                  onClick={() => toggleFeature(index)}
                  className="w-full text-left p-6 flex flex-col hover:bg-[#1a1d24] transition-colors rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.subtitle}</p>
                  <span className="text-2xl self-end">{openFeature === index ? '−' : '+'}</span>
                </button>
                {openFeature === index && (
                  <div className="px-6 pb-6">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                    <p className="text-gray-400">{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Execution Engine Details */}
        <div className="mt-20">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Land in ≤ 1 Block
            </h3>
            <h4 className="text-xl mb-4">
              Our limit order execution engine is the fastest in the market.
            </h4>
            <p className="text-gray-400">
              With our proprietary order execution engine and colocated nodes, our limit orders land in ≤ 1 block.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Migration Sniper
            </h3>
            <h4 className="text-xl mb-4">
              No MEV Triggers
            </h4>
            <p className="text-gray-400">
              Never get your limit orders triggered by MEV again. Axiom utilizes MEV-resistant execution paths with frontrunning and sandwiching protection, meaning your limit orders are safe with us.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Auto-Strategies
            </h3>
            <p className="text-gray-400">
              Automate your trading with advanced strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Interface */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <TokenTable />
      </section>

      {/* Rewards Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <h2 className="text-4xl font-bold text-center mb-8">Rewards</h2>
        <p className="text-lg text-gray-400 text-center mb-16">Get paid to trade.</p>

        <div className="bg-[rgba(45,40,60,0.5)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Rewards</h3>
              <p className="text-gray-400 mb-4">Earn SOL from trading.</p>
            </div>
            <div className="p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Rewards notification</h3>
              <p className="text-gray-400 mb-4">Progress through the Ranks</p>
              <p className="text-gray-400">Earn higher reward rates.</p>
            </div>
            <div className="p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Rank rewards illustration</h3>
              <p className="text-gray-400 mb-4">Referrals</p>
              <p className="text-gray-400">Earn points and SOL from your friends.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Referral rewards</h3>
              <p className="text-gray-400">Earn points and SOL from your friends.</p>
            </div>
            <div className="p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Axiom Points</h3>
              <p className="text-gray-400">Earn points through trading, referrals, and quests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <h2 className="text-4xl font-bold text-center mb-8">Architecture</h2>

        <div className="grid grid-cols-1 gap-8">
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Integrations</h3>
            <p className="text-gray-400 mb-4">Axiom integrates all the different protocols and applications you use, giving you a seamless trading experience.</p>
            <Image
              src="/images/Screenshot 2025-11-09 152021.png"
              alt="Integrations"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Non-Custodial</h3>
            <p className="text-gray-400 mb-4">The Axiom wallet is fully non-custodial, secured by Turnkey's scalable infrastructure for managing private keys across blockchains. With air-gapped architecture, it ensures robust security, seamless recovery, and protection from vulnerabilities.</p>
            <Image
              src="/images/Screenshot 2025-11-09 152029.png"
              alt="Non-Custodial"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <h2 className="text-4xl font-bold text-left mb-8">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0a0c10] rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-[#1a1d24] transition-colors"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <span className="text-2xl">{openFAQ === index ? '−' : '+'}</span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Background Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <h2 className="text-4xl font-bold text-center mb-8">Background</h2>
        <p className="text-xl text-gray-400 text-center mb-16">Optimize Your Trades with the Right Tools</p>
        <div className="text-center">
          <button onClick={handleLaunchAxiomClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full">
            Launch Axiom
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0c10] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image src="/axiom-logo.svg" alt="Axiom Logo" width={32} height={32} />
              <span className="text-lg font-semibold">AXIOM</span>
            </div>
            <div className="flex gap-8 items-center">
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white">Docs</a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              <span className="text-gray-500">© 2025 Axiom. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseModals}
        onSwitchToSignUp={handleSwitchToSignUp}
      />
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={handleCloseModals}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
}
