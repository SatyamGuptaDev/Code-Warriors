import { useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import { AiOutlineRollback } from 'react-icons/ai';
import { BiHomeSmile, BiUser } from 'react-icons/bi';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { FiSettings, FiShoppingCart } from 'react-icons/fi';
import { IoMdHelpCircleOutline } from 'react-icons/io';



 import { FaLaptopCode } from 'react-icons/fa';
// import icon lelated to JS
import { SiJavascript } from 'react-icons/si';


import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="p-3 border-2 border-gray-300 rounded-xl"
        aria-label="toggle sidebar"
        style={{opacity: '1'}}
      >
        <GiHamburgerMenu  />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-50 max-h-full bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs border-r-2 border-zinc-800 bg-zinc-900"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 border-zinc-800">
                <span style={{ color: 'white' }}>Welcome</span>
                <button
                  onClick={toggleSidebar}
                  className="p-3 border-2 border-zinc-800 rounded-xl"
                  aria-label="close sidebar"
                >
                  <AiOutlineRollback />
                </button>
              </div>
              <ul>
                {items.map((item, idx) => {
                  const { title, href, Icon } = item;
                  return (
                    <li key={title}>
                      <Link
                        onClick={toggleSidebar}
                        to={href}
                        className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:bg-zinc-900 border-zinc-800"
                      >
                        <motion.span {...framerText(idx)} style={{ color: 'white' }}>
                          {title}
                        </motion.span>
                        <motion.div {...framerIcon}>
                          <Icon className="text-white text-2xl" />
                        </motion.div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
                {/* add a second section will be at the bottom of side bar and take values from secondsection array */}
              <ul className="absolute bottom-0 w-full">
                {secondSection.map((item, idx) => {
                  const { title, href, Icon } = item;
                  return (
                    <li key={title}>
                      <Link
                        onClick={toggleSidebar}
                        to={href}
                        className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:bg-zinc-900 border-zinc-800"
                      >
                        <motion.span {...framerText(idx)} style={{ color: 'white' }}>
                          {title}
                        </motion.span>
                        <motion.div {...framerIcon}>
                          <Icon className="text-white text-2xl" />
                        </motion.div>
                      </Link>
                    </li>
                  );
                })}
              <li className=" font-sans font-bold text-1xl text-center  p-2 transition-all   border-b-2 hover:bg-zinc-900 border-zinc-800">
                CODE WARRIORS
              </li>
              </ul>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const items = [
   { title: 'Select Language', Icon: FaLaptopCode  , href: '/project' },
  { title: 'Practice JS', Icon: SiJavascript , href: '/project/practicejs' },
  // { title: '', Icon: , href: '/developers' },
  // { title: '', Icon: , href: '#' },
  // { title: '', Icon: , href: '#' },
  // { title: '', Icon: , href: '#' },
];

const secondSection = [
  { title: 'Home', Icon: BiHomeSmile, href: '/' },
  { title: 'About', Icon: BiUser, href: '/about' },
];

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
};

const framerText = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: 1.5,
  },
};
