const SelectedListComponents = () => {
  const tickIcon = "/assets/svgs/tick-circle.svg";
  return (
    <>
      <div className="flex justify-between mx-16 pb-8 pt-5 border-b">
        <div className="flex items-center  ">
          <img className="w-[5vw] h-[5vh]" src={tickIcon} alt="tick icon" />
          <p className=" font-sfMedium">Jameswort@gmail.com</p>
        </div>
        <span className="text-secondary-100 font-sfRegular"> 0 credits</span>
      </div>
    </>
  );
};

export default SelectedListComponents;
