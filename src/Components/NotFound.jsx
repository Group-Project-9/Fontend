import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full flex items-center justify-center">
      {/* container */}
      <div className="flex flex-col w-full justify-center items-center py-10 ">
        <h1 className="text-5xl md:text-7xl xl:text-9xl text-inherit mb-10">
          Oops!
        </h1>
        <h2 className="text-2xl md:text-4xl xl:text-6xl text-inherit mb-10">
          404 - Page NOT FOUND
        </h2>
        <p className="text-xl md:text-3xl xl:text-4xl text-inherit text-center mb-5 px-20">
          The Page you are looking for might have been removed
        </p>
        <p className="text-xl md:text-3xl xl:text-4xl text-inherit text-center mb-5 px-20">
          had its name changed or is temporarily unavailable
        </p>

        <div>
          <Link to="/">
            <button
              type="submit"
              className="text-white my-5 p-3 text-center rounded-md bg-red-500 hover:bg-red-700 transition-all duration-300"
            >
              GO TO HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
