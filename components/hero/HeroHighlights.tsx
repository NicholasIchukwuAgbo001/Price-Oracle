export default function HeroHighlights() {
  const highlights = [
    { color: "bg-success", label: "Secure & Private" },
    { color: "bg-primary/80", label: "Blockchain Verified" },
    { color: "bg-warning", label: "AI Powered" },
  ];

  return (
    <div className="mt-12 flex items-center justify-center space-x-8 text-white/60">
      {highlights.map((h, i) => (
        <div key={i} className="flex items-center space-x-2">
          <div className={`w-2 h-2 ${h.color} rounded-full`}></div>
          <span className="text-sm">{h.label}</span>
        </div>
      ))}
    </div>
  );
}
