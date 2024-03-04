import { Link } from "react-router-dom";
import ListOrder from "./ListOrder";

const List2 = () => {
  return (
    <>
      <div className="bg-light-200  mx-5 mt-4 py-7 rounded-lg">
        <h1 className="pt-3 px-12 text-2xl font-sfMedium font-semibold">
          Brands, users
        </h1>
        <div className="mt-4 flex px-12">
          <div>
            <input
              className=" border border-gray-600 w-[75vw] h-[8.5vh] ps-5 rounded-full"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <Link to="/list2">
            <button
              className="ms-3  sm:px-8 px-5 border border-dark-100 rounded-full py-3
            text-base font-sfRegular bg-dark-100 text-light-200 transition ease-out duration-500"
            >
              Add user/brand
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-light-200  mx-5 my-5 min-h-[100vh] rounded-lg">
        <div className="flex justify-between mx-16 py-8">
          <div>
            <h1 className=" font-sfMedium text-2xl font-semibold">My list</h1>
            <p className="text-sm text-secondary-100">
              manage list and purchase credit
            </p>
          </div>
          <Link to="/listSelected">
            <button
              className="m:px-8 px-5 border border-dark-100 rounded-lg py-3
            text-base font-sfRegular bg-dark-100 text-light-200 transition ease-out duration-500"
            >
              Purchase credit
            </button>
          </Link>
        </div>
        <ListOrder />
        <ListOrder />
        <ListOrder />
        <ListOrder />
        <ListOrder />
      </div>
    </>
  );
};

export default List2;
