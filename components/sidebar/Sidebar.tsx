import Link from 'next/link';
import { FaTachometerAlt, FaRobot, FaCog, FaUser } from 'react-icons/fa';

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: <FaTachometerAlt /> },
  { label: 'AI Chatbot', href: '/dashboard/chatbot', icon: <FaRobot /> },
  { label: 'Settings', href: '/dashboard/settings', icon: <FaCog /> },
  { label: 'Profile', href: '/dashboard/profile', icon: <FaUser /> },
];

export default function SidebarPage() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-text-muted text-white border-r border-text-muted/90 p-6 flex flex-col justify-between shadow-lg">

        <div>
          <div className="mb-10">
            <h2 className="pl-4 text-2xl font-bold"> Welcome, User Name</h2>
          </div>

          <nav className="space-y-6">
            {menuItems.map(({ label, href, icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-text-muted hover:text-white transition-all"
              >
                <span className="text-xl">{icon}</span>
                <span className="text-lg font-medium">{label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <button
          className="mt-6 w-full bg-error hover:bg-error text-white font-semibold py-2 px-4 rounded-md transition-colors cursor-pointer"
        >
          Logout
        </button>
      </aside>

    </div>
  );
}
