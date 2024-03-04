import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex md:flex-row flex-col md:justify-between bg-light-200 text-dark-100 py-4 items-center mt-5">
        <div className="">
          <Link
            to="/"
            className="lg:text-2xl  xl:text-3xl md:text-lg text-xl font-semibold font-family leading-8 text-dark-100"
          >
            DezignSntr
          </Link>
        </div>
        <ul className="flex flex-wrap lg:gap-12 md:gap-3 gap-6  xl:me-10 lg:me-8 md:me-3 justify-center text-base underline underline-offset-4">
          <li className="font-sfMedium">
            <Link>Become a designer</Link>
          </li>
          <li className="font-sfMedium">
            <Link>Sign up as an agency</Link>
          </li>
          <li className="font-sfMedium">
            <Link>Instagram</Link>
          </li>
          <li className="font-sfMedium">
            <Link>linkedin</Link>
          </li>
          <li className="font-sfMedium">
            <Link>Behance</Link>
          </li>
          <li className="font-sfMedium">
            <Link>Dribble</Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
