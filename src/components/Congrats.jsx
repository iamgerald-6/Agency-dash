import { Link } from "react-router-dom";

const Congrats = () => {
  const congratsImage = "/assets/pngs/congrats.png";
  return (
    <>
      <div className="bg-light-200 min-h-[90vh] flex items-center flex-col mx-5 my-5 rounded-lg ">
        <div className="mt-20 text-center">
          <img
            className="w-[23vw] h-[40vh] ms-20 "
            src={congratsImage}
            alt="congrats Image"
          />
          <h1 className="text-6xl mt-3 font-sfBold font-semibold">
            Congratulations
          </h1>
          <p className="mt-2 text-sm text-secondary-100">
            You have successfully purchased X credit for an amount of $X
          </p>
          <div className="mt-10 ">
            <Link
              to="/"
              className="text-black sm:px-12 px-5 border border-dark-100 rounded-full py-2.5 text-base font-sfRegular hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 me-4"
            >
              Purchase credit
            </Link>
            <Link
              to="/history"
              className="text-light-200  sm:px-12 px-5 py-2.5 rounded-full  bg-dark-100 text-base font-sfRegular me-4"
            >
              Download Invoice
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Congrats;
