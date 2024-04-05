const Card = () => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 md:mx-2 lg:grid-cols-3 lg:mx-2 pl-5">

    <div className="card w-80 bg-base-100 shadow-xl mx-3 mt-5 mb-2 text-gray-300 lg:w-72">
      <figure>
        <img
          className="object-cover"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <div className="flex justify-start divide-x divide-gray-400 ml-3 space-x-2">
              <p className="text-xs ">100k views</p>
              <p className="text-xs pl-2">3 hours ago</p>
            </div>
            <h2 className="text-sm font-semibold ml-3">Rayan Redwan</h2>
          </div>
        </div>
        <h2 className="card-title text-base text-gray-100 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          laudantium praesentium, blanditiis autem quidem iusto mollitia tempora
          voluptatem esse iste.
        </h2>
        <div className="card-actions justify-between mt-1">
          <a href="#" className="badge badge-outline">
            Read More..
          </a>
          {/* <svg
            className="w-5 fill-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
          </svg> */}

          <svg
            className="w-5 fill-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Card;
