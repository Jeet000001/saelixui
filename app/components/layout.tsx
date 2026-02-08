import Sidebar from "@/Components/sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto px-5 py-5 border-gray-200
      dark:bg-[#0B0F19] no-scrollbar">{children}</main>
    </div>
  );
}
