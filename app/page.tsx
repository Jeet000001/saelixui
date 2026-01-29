import ComponentsShowcase from "@/Components/HomePage_Components/ComponentsShowcase"
import HeroSection from "@/Components/HomePage_Components/HeroSection"
import Start_building_Section from "@/Components/HomePage_Components/Start_building_Section"
import Why_saelix_ui from "@/Components/HomePage_Components/Why_saelix_ui"

const page = () => {
  return (
    <div>
      <HeroSection />
      <ComponentsShowcase />
      <Why_saelix_ui />
      <Start_building_Section />
    </div>
  )
}

export default page