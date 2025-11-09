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
      </section>

      {/* Trading Interface */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <TokenTable />
      </section>
    </div>
  );
}
