import Footer from "@/Components/Footer";
import NavigationBar from "@/Components/NavigationBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <NavigationBar /> 
      {children}
      <Footer />
    </>
  );
}
