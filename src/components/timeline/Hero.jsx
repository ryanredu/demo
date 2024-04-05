import Card from "../content/card";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 md:mx-2 lg:grid-cols-3 lg:mx-2 xl:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Hero;
