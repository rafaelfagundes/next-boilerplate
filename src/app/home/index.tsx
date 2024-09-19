import Features from "./features";
import GetStarted from "./get-started";
import Hero from "./hero";
import Testimonials from "./testimonials";

function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center justify-center">
        <Hero></Hero>
        <Features></Features>
        <Testimonials></Testimonials>
        <GetStarted></GetStarted>
      </main>
    </div>
  );
}

export default Home;
