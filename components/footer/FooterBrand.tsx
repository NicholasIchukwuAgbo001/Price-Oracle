import { Shield } from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
        <Shield className="w-6 h-6" />
        <span className="text-lg font-bold">Inflation Advisor</span>
      </div>
      <p className="text-white text-sm">
        Powered by Sui & AI – Secure Strategies for Nigerian Markets
      </p>
      <p className="text-white text-xs mt-2">© 2025</p>
    </div>
  );
}
