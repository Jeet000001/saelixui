"use client";

import Card from "./Card";

const Why_saelix_ui = () => {
  return (
    <div>
      <section>
        <h1>Why built with Saelix Ui?</h1>
        <p>A smooth and powefull experience</p>
        <p>for developers and end users</p>
      </section>
      <section className="flex gap-5 px-20">
        <Card
          image="/thunder.png"
          title="Modern & clean design"
          description="Craft visually pleasing interfaces without extra effort. Saelix UI follows modern design principles while staying flexible enough to match your brand’s personality."
        />
        <Card
          image="/thunder.png"
          title="Developer-first customization"
          description="Every component is built to be configurable and extensible. From styles to behavior, Saelix UI gives you full control without fighting the framework."
        />
        <Card
          image="/thunder.png"
          title="Clear and practical documentation"
          description="No guessing, no confusion. Our documentation focuses on real use-cases, simple examples, and best practices so you can build faster with confidence."
        />
        <Card
          image="/.png"
          title="Built with accessibility in mind"
          description="We design components that work for everyone. Keyboard navigation, proper semantics, and accessibility standards are considered from day one."
        />
      </section>
    </div>
  );
};

export default Why_saelix_ui;
