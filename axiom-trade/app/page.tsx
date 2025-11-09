import Image from "next/image";
import TokenTable from '@/components/organisms/TokenTable'

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen bg-[#040507] text-white">
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
        <h1 className="text-6xl font-bold mb-4">The Gateway to DeFi</h1>
        <p className="text-xl text-gray-400 mb-8">Axiom is the only trading platform you'll ever need.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full">
          Start Trading
        </button>
        <div className="mt-8 text-sm text-gray-500">
          <p>Backed by</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="bg-orange-500 text-white px-2 py-1">Y</span>
            <span className="font-medium">Combinator</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <h2 className="text-5xl font-bold text-right mb-4">Advanced Features to</h2>
        <h2 className="text-5xl font-bold text-right mb-8">Videoline Your Trading.</h2>
        <p className="text-xl text-gray-400 text-right mb-16">
          From wallet tracking to real-time analytics, we've got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Order Execution Engine</h3>
            <p className="text-gray-400 mb-4">Trade with confidence.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Wallet and Twitter Tracker</h3>
            <p className="text-gray-400 mb-4">Trade and track all in one place.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Hyperliquid Perpetuals</h3>
            <p className="text-gray-400 mb-4">Trade leveraged Perps.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Yield</h3>
            <p className="text-gray-400 mb-4">Earn while you sleep.</p>
          </div>
        </div>

        {/* Order Execution Engine Details */}
        <div className="mt-20">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="inline-block">⚡</span>
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
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="inline-block">🚀</span>
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
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="inline-block">🤖</span>
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
        <h2 className="text-5xl font-bold text-center mb-8">Rewards</h2>
        <p className="text-xl text-gray-400 text-center mb-16">Get paid to trade.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-[#0a0c10] text-center">
            <h3 className="text-xl font-semibold mb-4">Rewards</h3>
            <p className="text-gray-400 mb-4">Earn SOL from trading.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10] text-center">
            <h3 className="text-xl font-semibold mb-4">Rewards notification</h3>
            <p className="text-gray-400 mb-4">Progress through the Ranks</p>
            <p className="text-gray-400">Earn higher reward rates.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10] text-center">
            <h3 className="text-xl font-semibold mb-4">Rank rewards illustration</h3>
            <p className="text-gray-400 mb-4">Referrals</p>
            <p className="text-gray-400">Earn points and SOL from your friends.</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-[#0a0c10] text-center">
            <h3 className="text-xl font-semibold mb-4">Referral rewards</h3>
            <p className="text-gray-400">Earn points and SOL from your friends.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10] text-center">
            <h3 className="text-xl font-semibold mb-4">Axiom Points</h3>
            <p className="text-gray-400">Earn points through trading, referrals, and quests.</p>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <h2 className="text-5xl font-bold text-center mb-8">Architecture</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Integrations</h3>
            <p className="text-gray-400">Axiom integrates all the different protocols and applications you use, giving you a seamless trading experience.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Integration illustration</h3>
            <p className="text-gray-400">Visual representation of integrations.</p>
          </div>
        </div>

        <div className="mt-16">
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Non-Custodial</h3>
            <p className="text-gray-400">The Axiom wallet is fully non-custodial, secured by Turnkey's scalable infrastructure for managing private keys across blockchains. With air-gapped architecture, it ensures robust security, seamless recovery, and protection from vulnerabilities.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <h2 className="text-5xl font-bold text-center mb-8">FAQ</h2>

        <div className="space-y-8">
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">What is Axiom?</h3>
            <p className="text-gray-400">Axiom is a trading platform designed to be the only application you need to trade onchain. We offer a suite of integrations that allow you to trade the hottest assets, all in one place.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">How secure is Axiom?</h3>
            <p className="text-gray-400">Axiom prioritizes security with non-custodial wallets and MEV-resistant execution.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Can I buy crypto on Axiom?</h3>
            <p className="text-gray-400">Yes, Axiom supports various trading features including buying crypto.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">How does Axiom offer yield?</h3>
            <p className="text-gray-400">Axiom provides yield opportunities through various trading and staking features.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#0a0c10]">
            <h3 className="text-xl font-semibold mb-4">Is Axiom decentralized?</h3>
            <p className="text-gray-400">Axiom is designed with decentralized principles in mind.</p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <h2 className="text-5xl font-bold text-center mb-8">Background</h2>
        <p className="text-xl text-gray-400 text-center mb-16">Optimize Your Trades with the Right Tools</p>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full">
            Launch Axiom
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0c10] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image src="/axiom-logo.svg" alt="Axiom Logo" width={32} height={32} />
              <span className="text-lg font-semibold">AXIOM</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white">Docs</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500">
            © 2025 Axiom. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
