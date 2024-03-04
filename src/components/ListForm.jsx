/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
// import List from "./List";
import ListOrder from "./ListOrder";
import WhenListEmpty from "./WhenListEmpty";
import ListHeading from "./ListHeading";

const ListForm = ({ brands, onHandleList }) => {
  const [email, setEmail] = useState("");
  // console.log("brand is working", brands);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();

    const words = email.split("@")[0].split(/[.-_]/);
    const initials = words
      .map((word) => (word ? word.charAt(0).toUpperCase() : ""))
      .join("");
    // const addSvg = "/assets/svgs/add.svg";

    const newBrand = {
      id,
      initials,
      email,
      credit: 0,
      date: Date.now(),
    };
    console.log(newBrand);
    onHandleList(newBrand);
    setEmail("");
  };

  return (
    <>
      <div>
        <div className="bg-light-200  mx-5 my-5  pb-10   rounded-lg">
          <h1 className="pt-10 px-12 text-2xl font-sfMedium font-semibold">
            Brands, users
          </h1>
          <form className="mt-4 flex px-12" onSubmit={handleSubmit}>
            <input
              className=" border border-gray-600 w-[75vw] py-2.5 ps-5 rounded-full"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }}
            />

            <div className="mt-2.5 ms-3">
              <Button>
                <span className="button-black ">Add user/brand</span>
              </Button>
            </div>
          </form>

          {brands.length === 0 && <WhenListEmpty />}
        </div>

        {brands.length > 0 && (
          <ul>
            <div className="bg-light-200 mx-5 rounded-lg py-5">
              <ListHeading />
              {brands.map((brand) => (
                <ListOrder brandObj={brand} key={brand.id} />
              ))}
            </div>
          </ul>
        )}
      </div>
    </>
  );
};

export default ListForm;
