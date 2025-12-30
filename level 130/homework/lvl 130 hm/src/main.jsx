import bannerImg from "../assets/images/banner.png";

const Main = () => {
  return (
    <section className="h-[95vh] pt-[10%] px-[5%] flex items-center justify-center">
      <div className="w-[50%] h-full flex flex-col items-start justify-start">
        <h1 className="font-semibold text-7xl pb-8">
          <span className="font-black">Boost Your</span> Startup Business Faster
        </h1>

        <p className="pb-28">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          qui. Facere eos quae magni, deleniti quas debitis error. Minima nulla
          fugit inventore.
        </p>

        <p className="text-white text-2xl capitalize font-bold linear-bg py-3 px-10 rounded-4xl shadow border-2 border-white cursor-pointer">
          get started
        </p>
      </div>

      <div className="w-[50%] h-full flex flex-col items-center justify-start">
        <img src={bannerImg} className="w-[120%] cursor-pointer" />
      </div>
    </section>
  );
};

export default Main;
