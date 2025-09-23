import Sidebar from "@/components/sidebar/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen text-text-dark min-h-screen relative">
      <Sidebar />

      <div className="p-6 flex-1">
        {children}
      </div>
    </div>
  );
}
