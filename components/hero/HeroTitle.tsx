export default function HeroTitle() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Chat with Your{" "}
        <span className="bg-gradient-to-r from-primary/80 to-warning bg-clip-text text-transparent">
          Inflation Shield
        </span>
      </h1>
      <p className="text-xl md:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
        Get real-time price predictions and resilient strategies. Securely
        share insights on Sui blockchain.
      </p>
    </>
  );
}
