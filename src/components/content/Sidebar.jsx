const Sidebar = () => {
  return (
    <div className="w-60 mt-4 sm:w-48 md:w-52 lg:w-96 lg:flex lg:flex-row lg:h-24 lg:-mb-2">
      <div>
        <img
          className="rounded-sm lg:w-36"
          src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </div>
      <div>
        <h1 className="text-base lg:font-semibold lg:ml-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          quaerat?
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
