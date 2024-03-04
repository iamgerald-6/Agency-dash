import Button from "./Button";

const WhenListEmpty = () => {
  const alarmPhoto = "/assets/pngs/agency two.png";
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <img className="w-[20vw] h-[35vh]" src={alarmPhoto} alt="alarm image" />
      <h1 className="mt-5 uppercase text-5xl font-bold font-sfMedium">
        Its Quiet in here
      </h1>
      <p className="mt-3 font-sfRegular text-secondary-100 text-sm">
        Enter emails to add brands, companies, Start-ups and purchase credits
        with ease
      </p>
      <div className="mt-8">
        <Button>
          <span className="button-white">Add user/brand</span>
        </Button>
      </div>
    </div>
  );
};

export default WhenListEmpty;
