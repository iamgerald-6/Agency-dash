/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const ToggleButton = ({ setOpen }) => {
  return (
    <div>
      <div
        className="bg-transparent border-none mt-0.5"
        onClick={() => setOpen((prev) => !prev)}

        // Optional: Add a scale animation while the button is tapped
      >
        <svg viewBox="0 0 23 23" width="20px" height="20px">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            // d='M 2 2.5 L 20 2.5'
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            // d='M 2 16.346 L 20 16.346'
            variants={{
              closed: { d: "M 2 16.346 L 13 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </div>
    </div>
  );
};
