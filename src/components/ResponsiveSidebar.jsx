// import {AiOutlineMore, AiOutlineClose} from 'react-icons/ai'
// import { HiBars3BottomLeft } from "react-icons/hi2";
// import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { ToggleButton } from './ToggleButton.jsx';

export const ResponsiveSidebar = () => {
  const ItemVariants = {
    closed: {
      y: 0,
      opacity: 2,
      transition: {
        duration: 1,
      },
    },
    open: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <>
      <motion.div
        className="lg:hidden relative"
        initial={{
          y: -1000,

          transition: {
            staggeredChildren: 0.1,
            delay: 0.1,
            type: "spring",
            stiffness: 200,
            damping: 25,
          },
        }}
        animate={{
          y: 0,
          transition: {
            staggeredChildren: 0.05,
            staggeredDirection: -1,
            delay: 0.1,
            type: "spring",
            stiffness: 200,
            damping: 25,
          },
        }}
      >
        <motion.div className=" absolute top-0    max-h-[calc(100vh-9vh)] pb-9 border-t-[1px] bg-light-200 left-0  w-[100%] z-30 overflow-auto">
          <motion.ul className="px-10 py-6">
            <motion.li className=" font-sfMedium" variants={ItemVariants}>
              <Link to="/explore">Create Content</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link to="/">Resources</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link> Events</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link>My Design</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link to="/chat">Account</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link to="/wallet">Price</Link>
              <motion.ul>
                <div className=" border-s-[1px]">
                  <li className="ms-6 mt-2 flex-col flex font-sfMedium hoverNav2 ">
                    <Link className="hoverNav">Free Tier</Link>
                    <small className="text-xs text-secondary-100 hoverNav">
                      Basic features with limited access to premium content
                    </small>
                  </li>
                  <li className="flex flex-col ms-6 mt-2 font-sfMedium hoverNav2 ">
                    <Link>Pro Tier</Link>
                    <small className="text-xs text-secondary-100">
                      Full access to premium features with 500 credits per year
                    </small>
                  </li>
                </div>
              </motion.ul>
            </motion.li>
            <li className="mt-4 font-sfMedium">0 Credit</li>
          </motion.ul>
          <div className="mx-10 border-t-[1px] ">
            <button className="mt-2 font-sfMedium hoverNav2 ">
              <Link>Log in</Link>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

{
  /* <div className='lg:hidden relative'>
            
        <div onClick={SideNav} className=''>
        {isOpen ? (
            <AiOutlineClose
              size={30}
              onClick={closeSidebar}
              className='cursor-pointer text-secondary-100 absolute top-3 right-3'
            />
          ) : (
            <AiOutlineMore size={35} className='text-secondary-100' />
          )} */
}
{
  /* <HiOutlineXMark /> */
}

{
  /* <div className="w-[100%] h-[200vh] bg-[rgba(0,0,0,0.4)] fixed flex  items-center justify-center"> */
}

// const variants={
//   open:{
//     y:-1000,opacity:0,
//     opacity:1,
//      transition:{
//             staggeredChildren:0.1,
//             delay:0.4,
//             type:'spring',
//             stiffness:100,
//             damping:30

//            }
//   },
//   closed:{

//      y:0, opacity:1,
//      transition:{
//             staggeredChildren:0.05,
//             staggeredDirection:-1,
//             delay:0.4,
//             type:'spring',
//             stiffness:100,
//             damping:30

//            }

//   }
// }

//     const ItemVariants= {
//       closed:{
//           y:0,
//           opacity:1
//       },
//       open:{
//         y:50,
//         opacity:0
//       }

//       }
