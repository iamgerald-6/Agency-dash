import { Link } from "react-router-dom";
import SelectedListComponents from "./SelectedListComponents";

const SelectedList = () => {
  const arrowIcon = "/assets/svgs/arrow-2.svg";
  return (
    <>
      <div className="bg-light-200  mx-7 mt-4 py-7 rounded-lg">
        <h1 className="pt-3 px-12 text-2xl font-sfMedium font-semibold">
          Enter amount to purchase
        </h1>
        <div className="mt-4 flex gap-3 px-12">
          <input
            className=" border border-gray-600 w-[31vw] h-[8.5vh] ps-5 rounded-full"
            type="text"
            placeholder="Enter amount in $"
          />
          <img src={arrowIcon} alt="arrow Icon" />
          <input
            className=" border border-gray-600 w-[31vw] h-[8.5vh] ps-5 rounded-full"
            type="text"
            placeholder="Credit to purchase for each"
            disabled
          />
          <Link to="/congrats">
            <button
              className="ms-3  sm:px-16 px-5 border border-dark-100 rounded-full py-3
            text-base font-sfRegular bg-dark-100 text-light-200 transition ease-out duration-500"
            >
              Make payment
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-light-200  mx-5 my-5 min-h-[70vh] rounded-lg">
        <div className="flex justify-between mx-16 py-8">
          <div>
            <h1 className=" font-sfMedium text-2xl font-semibold">Your list</h1>
            <p className="text-sm text-secondary-100">
              Credit purchased will be distributed equally
            </p>
          </div>
          <Link to="/listSelected">
            <button
              className="m:px-5 px-5 border border-dark-100 rounded-lg py-3
            text-base font-sfRegular bg-dark-100 text-light-200 transition ease-out duration-500"
            >
              Add more
            </button>
          </Link>
        </div>
        <SelectedListComponents />
        <div className="flex justify-between mx-16 pb-8 mt-10 text-xl font-sfMedium font-semibold">
          <span>List total: 4 users</span>
          <span>Credit total: 0</span>
        </div>
      </div>
    </>
  );
};

export default SelectedList;
