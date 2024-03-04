import Button from "./Button";
import { Link } from "react-router-dom";

const Purchase = () => {
  const purchasePhoto = "/assets/pngs/agency one.png";
  return (
    <>
      <div className="bg-light-200 min-h-[100vh] flex items-center flex-col mx-5 my-5 rounded-lg ">
        <div className="mt-20 text-center">
          <img
            className="w-[23vw] h-[40vh] ms-20 "
            src={purchasePhoto}
            alt=""
          />
          <h1 className="text-6xl mt-3 font-sfBold">Purchase credits</h1>
          <p className="mt-2 text-sm text-secondary-100">
            Add user, brands, companies and purchase credits
          </p>

          <div className="mt-10 flex gap-4 justify-center ">
            <Button>
              <Link to="/list" className="button-white">
                Purchase credit
              </Link>
            </Button>
            <Button>
              <Link to="/list" className="button-black">
                Create list
              </Link>
            </Button>
          </div>
          <div className="mt-10 ms-4">
            <small className="underline underline-offset-4">
              How to purcahse credit
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
