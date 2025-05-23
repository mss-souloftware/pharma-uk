import { motion } from "framer-motion";

const Dropdown = ({
  isDropdownOpen,
  setDropdownOpen,
  dropdownTitle,
  links,
  cardStyles,
  position,
}) => {
  return (
    <div className={`dropdown ${isDropdownOpen ? "open" : ""} relative`}>
      <button onClick={setDropdownOpen} className="text-white relative group">
        {dropdownTitle}
        <span className="absolute left-0 mt-[1px] block w-0 h-0.5   bg-[#1AB8A3] transition-all duration-300 group-hover:w-full"></span>
      </button>

      {isDropdownOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`${cardStyles} ${position} shadow-lg rounded-md`}
        >
          <ul>
            {links.map((link, index) => (
              <li key={index} className="p-3 w-40 ">
                <a
                  href={link.href}
                  className="text-white hover:text-gray-300 group relative"
                >
                  {link.label}
                  <span className="absolute left-0 mt-[1px]  block  w-0 h-[1px] bg-[#1AB8A3] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
