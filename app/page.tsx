import ComponentsShowcase from "@/Components/HomePage_Components/ComponentsShowcase"
import HeroSection from "@/Components/HomePage_Components/HeroSection"
import Why_saelix_ui from "@/Components/HomePage_Components/Why_saelix_ui"

const page = () => {
  return (
    <div>
      <HeroSection />
      <ComponentsShowcase />
      <Why_saelix_ui />
    </div>
  )
}

export default page