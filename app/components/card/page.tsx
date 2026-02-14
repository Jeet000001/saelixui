import Course_Card from "@/Components/Card/Course_Card";
import Food_Card from "@/Components/Card/Food_Card";
import Product_Card from "@/Components/Card/Product_Card";
import Profile_Card from "@/Components/Card/Profile_Card";
import Travel_Card from "@/Components/Card/Travel_Card";
import ShowComponent from "@/Components/ShowComponent";

const page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Card
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          Displays content in a compact and organized format.
        </p>
      </div>
      <div>
        {/* Profile */}
        <ShowComponent
          ComponentName="01. Profile"
          installation="npx saelix-ui add profile-card"
          ComponentCodeTS={`import Profile_Card from "@/components/ui/Profile-card";

const ProfileCardDemo = () => {
  return (
    <div>
      <Profile_Card
        name="Jeet Paul"
        role=" who focuses on simplicity & usability."
        image="/imageLink"
        followers={312}
        views={48}
        verified={true}
        buttonText="Follow"
      />
    </div>
  );
};

export default ProfileCardDemo;`}
          ComponentCodeJS={`import Profile_Card from "./components/ui/Profile-card";

const ProfileCardDemo = () => {
  return (
    <div>
      <Profile_Card
        name="Jeet Paul"
        role=" who focuses on simplicity & usability."
        image="/imageLink"
        followers={312}
        views={48}
        verified={true}
        buttonText="Follow"
      />
    </div>
  );
};

export default ProfileCardDemo;`}
        >
          <Profile_Card
            name="Jeet Paul"
            role=" who focuses on simplicity & usability."
            image="/myImage.jpeg"
            followers={312}
            views={48}
            verified={true}
            buttonText="Follow"
          />
        </ShowComponent>
        {/* Food */}
        <ShowComponent
          ComponentName="02. Food"
          installation="npx saelix-ui add food-card"
          ComponentCodeTS={`import Food_Card from "@/components/ui/Food-card";

const FoodCardDemo = () => {
  return (
    <div>
      <Food_Card
        title="Chicken Biryani"
        description="Authentic Chicken Biryani packed with rich flavors and royal taste."
        price={299}
        image="/imageLink"
      />
    </div>
  );
};

export default FoodCardDemo;`}
          ComponentCodeJS={`import Food_Card from "./components/ui/Food-card";

const FoodCardDemo = () => {
  return (
    <div>
      <Food_Card
        title="Chicken Biryani"
        description="Authentic Chicken Biryani packed with rich flavors and royal taste."
        price={299}
        image="/imageLink"
      />
    </div>
  );
};

export default FoodCardDemo;`}
        >
          <Food_Card
            title="Chicken Biryani"
            description="Authentic Chicken Biryani packed with rich flavors and royal taste."
            price={299}
            image="/Biryani.webp"
          />
        </ShowComponent>
        {/* Travel */}
        <ShowComponent
          ComponentName="03. Travel"
          installation="npx saelix-ui add travel-card"
          ComponentCodeTS={`import Travel_Card from "@/components/ui/Travel-card";

const TravelCardDemo = () => {
  return (
    <div>
      <Travel_Card
        title="Santorini Sunset Loft"
        description="Experience a cliffside loft with iconic white walls, blue domes, and magical sunset views."
        image="/imageLink"
        price={890}
        rating={4.8}
        tag1="Romantic Stay"
        tag2="2 Night Trip"
      />
    </div>
  );
};

export default TravelCardDemo;
`}
          ComponentCodeJS={`import Travel_Card from "./components/ui/Travel-card";

const TravelCardDemo = () => {
  return (
    <div>
      <Travel_Card
        title="Santorini Sunset Loft"
        description="Experience a cliffside loft with iconic white walls, blue domes, and magical sunset views."
        image="/imageLink"
        price={890}
        rating={4.8}
        tag1="Romantic Stay"
        tag2="2 Night Trip"
      />
    </div>
  );
};

export default TravelCardDemo;
`}
        >
          <Travel_Card
            title="Santorini Sunset Loft"
            description="Experience a cliffside loft with iconic white walls, blue domes, and magical sunset views."
            image="/hotel.jpg"
            price={1000}
            rating={4.8}
            tag1="Romantic Stay"
            tag2="2 Night Trip"
          />
        </ShowComponent>
        {/* Product */}
        <ShowComponent
          ComponentName="04. Product"
          installation="npx saelix-ui add product-card"
          ComponentCodeTS={`import Product_Card from "@/components/ui/Product-card";

const ProductCardDemo = () => {
  return (
    <div>
      <Product_Card
        title="AIR FORCE 1"
        price={3800}
        image="/imageLink"
        brand="Nike"
        rating={4.56}
        reviews={125}
        sizes={[34, 35, 36, 37]}
      />
    </div>
  );
};

export default ProductCardDemo;

`}
          ComponentCodeJS={`import Product_Card from "./components/ui/Product-card";

const ProductCardDemo = () => {
  return (
    <div>
      <Product_Card
        title="AIR FORCE 1"
        price={3800}
        image="/imageLink"
        brand="Nike"
        rating={4.56}
        reviews={125}
        sizes={[34, 35, 36, 37]}
      />
    </div>
  );
};

export default ProductCardDemo;

`}
        >
          <Product_Card
            title="AIR FORCE 1"
            price={200}
            image="/nike.avif"
            brand="Nike"
            rating={4.56}
            reviews={125}
            sizes={[34, 35, 36, 37]}
          />
        </ShowComponent>
        {/* course */}
        <ShowComponent
          ComponentName="05. Course"
          installation="npx saelix-ui add course-card"
          ComponentCodeTS={`import Course_Card from "@/components/ui/Course-card";

const CourseCardDemo = () => {
  return (
    <div>
      <Course_Card
        title="Frontend Development"
        instructor="Jeet Paul"
        description="Learn how to craft beautiful user interfaces and responsive websites using modern frontend technologies."
        image="/imageLink"
        rating={4.1}
        reviews={146}
        price={2999}
      />
    </div>
  );
};

export default CourseCardDemo;
`}
          ComponentCodeJS={`import Course_Card from "./components/ui/Course-card";

const CourseCardDemo = () => {
  return (
    <div>
      <Course_Card
        title="Frontend Development"
        instructor="Jeet Paul"
        description="Learn how to craft beautiful user interfaces and responsive websites using modern frontend technologies."
        image="/imageLink"
        rating={4.1}
        reviews={146}
        price={2999}
      />
    </div>
  );
};

export default CourseCardDemo;
`}
        >
          <Course_Card
            title="Frontend Development"
            instructor="Jeet Paul"
            description="Learn how to craft beautiful user interfaces and responsive websites using modern frontend technologies."
            image="/course.webp"
            rating={4.1}
            reviews={146}
            price={2999}
          />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
