import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { languageActions } from "../store/languageSlice";

const LanguageModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { lang } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const audio = new Audio("/Audio/Lang_select.mp3");

  const selectedLang = (itemName) => {
    audio.play();
    dispatch(languageActions.setLang(itemName));
    setTimeout(() => {
      handleClose();
    }, 500);
  };

  const languages = ["English", "Telugu", "Hindi", "Tamil"];

  const optionsStyle = (language) =>
    `p-2 border-2 ${
      lang === language
        ? "bg-white text-black font-semibold"
        : "border-white text-white"
    } hover:border-white transform hover:scale-[103%] m-2.5 rounded-md cursor-pointer transition-all duration-300`;

  return (
    <div>
      {children ? <span onClick={handleOpen}>{children}</span> : ""}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="relative flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] sm:w-[70%] lg:w-[30rem] bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-xl rounded-xl p-4">
          <div className="text-center bg-gradient-to-br from-gray-700 via-gray-800 to-black p-4 rounded-t-lg">
            <span className="text-2xl font-Orbitron text-white font-bold">
              Set Language
            </span>
            <button
              onClick={handleClose}
              className="mb-4 w-8 h-8 bg-white rounded-md absolute top-4 right-4 flex items-center justify-center"
            >
              <IoClose color="black" size={32} />
            </button>
          </div>
          <div className="bg-black text-white text-center max-h-[20rem] w-full overflow-y-auto rounded-b-lg">
            <ul>
              {languages.map((language) => (
                <li
                  key={language}
                  className={optionsStyle(language)}
                  onClick={() => selectedLang(language)}
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LanguageModal;
