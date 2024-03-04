import { Link } from "react-router-dom";

const Chats = () => {
  const messageImage = "/assets/pngs/need support.png";
  return (
    <>
      <div className="bg-light-200 min-h-[100vh] flex  flex-col mx-5 my-5 rounded-lg">
        <h1 className="my-4 pb-5 mx-8 text-3xl font-sfMedium  border-b">
          Message
        </h1>
        <div className="flex flex-col items-center justify-center mt-4">
          <img
            className="w-[20vw] h-[35vh]"
            src={messageImage}
            alt="message Image"
          />
          <h1 className="mt-5 uppercase text-5xl font-bold font-sfMedium">
            Need Admin Support?
          </h1>
          <p className="mt-3 font-sfRegular text-secondary-100 text-sm">
            Have any problem with purchasing credit or need general support?
          </p>
          <Link to="/chatroom">
            <button className="text-black sm:px-8 px-5 border border-dark-100 rounded-full py-2.5 text-base font-sfRegular hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 mt-10">
              Text support
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Chats;
