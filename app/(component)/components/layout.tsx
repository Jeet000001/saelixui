import Sidebar from "@/Components/componentPage_Components/sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-y-scroll">
      {/* Sidebar */}
      <aside className="fixed w-64 shrink-0 border-r border-gray-200 dark:border-neutral-800">
        <div className="h-full overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-scroll p-6">
        {children}
      </main>
    </div>
  );
}
