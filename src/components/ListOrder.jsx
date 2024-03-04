/* eslint-disable react/prop-types */

const ListOrder = ({ brandObj }) => {
  if (!brandObj) {
    console.error("brand is not branding");
  }
  return (
    <>
      <li className="flex justify-between pb-8 pt-5 mx-16 bg-light-200 border-b">
        <div className="flex items-center gap-5 ">
          <span className="px-2 py-2 bg-secondary-700 rounded-full font-sfMedium">
            {brandObj.initials}
          </span>
          <p className=" font-sfMedium">{brandObj.email}</p>
        </div>
        <span className="text-secondary-100 font-sfRegular">
          {brandObj.credit} credits
        </span>
      </li>
    </>
  );
};

export default ListOrder;
