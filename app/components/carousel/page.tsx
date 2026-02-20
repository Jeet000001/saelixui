import Default_Carousel from "@/Components/Carousel/Default_Carousel";
import Vertical_Carousel from "@/Components/Carousel/Vertical_Carousel";
import ShowComponent from "@/Components/ShowComponent";

const page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Carousel
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          Displays content in a compact and organized format.
        </p>
      </div>
      <div>
        {/* default */}
        <ShowComponent
          ComponentName="01. Default"
          installation="npx saelix-ui add default-carousel"
          ComponentCodeTS={`import Default_Carousel from "@/components/ui/Default-carousel"

const DefaultCarouselDemo = () => {
  return (
    <div>
      <Default_Carousel />
    </div>
  )
}

export default DefaultCarouselDemo`}
          ComponentCodeJS={`import Default_Carousel from "./components/ui/Default-carousel"

const DefaultCarouselDemo = () => {
  return (
    <div>
      <Default_Carousel />
    </div>
  )
}

export default DefaultCarouselDemo`}
        >
          <Default_Carousel />
        </ShowComponent>
        {/* vertical */}
        <ShowComponent
          ComponentName="02. Vertical"
          installation=" npx saelix-ui add vertical-carousel"
          ComponentCodeTS={`import Vertical_Carousel from '@/components/ui/Vertical-carousel'

const verticalCarouselDemo = () => {
  return (
    <div>
      <Vertical_Carousel />
    </div>
  )
}

export default verticalCarouselDemo`}
          ComponentCodeJS={`import Vertical_Carousel from './components/ui/Vertical-carousel'

const verticalCarouselDemo = () => {
  return (
    <div>
      <Vertical_Carousel />
    </div>
  )
}

export default verticalCarouselDemo`}
        >
          <Vertical_Carousel />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
