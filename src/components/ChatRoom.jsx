const ChatRoom = () => {
  const addSvg = "/assets/svgs/add.svg";
  return (
    <>
      <div className="bg-light-200 min-h-[100vh] flex  flex-col mx-5 my-5 rounded-lg">
        <h1 className="my-4 pb-5 mx-8 text-3xl font-sfMedium  border-b">
          Message
        </h1>
        <div className="bg-secondary-400 mx-5 min-h-[83vh] rounded-lg ">
          <div className="flex flex-col justify-center items-center h-[70vh]">
            <h2 className="font-sfRegular text-3xl font-semibold">
              No message yet
            </h2>
          </div>
          <div className="rounded-lg bg-light-200 w-[90vw] h-[9vh] flex mx-5 float-end mt-4 relative">
            <img
              className=" w-[2vw] h-[4vh] absolute top-4 left-3 cursor-pointer "
              src={addSvg}
              alt="add icon"
            />
            <input
              className=" outline-none w-[80vw] h-[9vh]  text-dark-100 ms-12 py-3"
              type="text"
              placeholder="Write message"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
