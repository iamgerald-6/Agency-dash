const History = () => {
  return (
    <>
      <div className="flex flex-col justify-center mt-10 ">
        <div className="text-center">
          <h1 className="text-3xl font-sfRegular font-semibold">
            Purchase history
          </h1>
          <p className="text-sm text-secondary-100">
            Track all your payments and credit purchases.
          </p>
        </div>
      </div>
      <div className="flex bg-light-200  mx-20 my-8 min-h-[70vh] justify-center items-center  rounded-lg">
        <h1 className="text-4xl font-sfMedium ">No Payment Made</h1>
      </div>
    </>
  );
};

export default History;
