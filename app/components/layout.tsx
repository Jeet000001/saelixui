import Sidebar from "@/Components/sidebar";
// import "../globals.css";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // VS Code–like layout: full-height flex with independent scrolling panes
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar with its own scroll (handled inside the component) */}
      <Sidebar />

      {/* Main content scrolls independently of the sidebar */}
      <main className="flex-1 overflow-y-auto px-5 py-5">{children}</main>
    </div>
  );
}
