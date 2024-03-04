import { Link } from "react-router-dom";

const ListHeading = () => {
  return (
    <>
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
    </>
  );
};

export default ListHeading;
