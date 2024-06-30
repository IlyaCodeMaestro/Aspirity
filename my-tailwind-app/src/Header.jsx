import { useState } from "react";
import Modal from "./Modal";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для управления видимостью модального окна

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Изменяем состояние на противоположное при клике на бургер-меню
  };

  return (
    <header
      className="d"
      style={{
        backgroundColor: "#141414", // bg-[#141414]
        color: "white", // text-white
        display: "flex", // flex
        justifyContent: "space-between", // justify-between
        alignItems: "center", // items-center
        paddingBottom: "1rem", // pb-4
        paddingTop: "1rem", // pt-4
        maxWidth: "1500px", // max-w-[1500px]
        width: "100%", // w-[100%]
      }}
    >
      <div className="flex flex-col items-center">
        {/* Логотип */}
        <img src="/Logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="flex items-center">
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "9999px",
            padding: "0.25rem",
            marginRight: "0.75rem",
            border: "2px solid rgba(54, 55, 56, 1)",
          }}
        >
          {/* Иконка профиля */}
          <img
            src="/avatar.png"
            alt="Profile"
            className="h-6 w-6 mx-1 cursor-pointer"
          />
          {/* Иконка селекта */}
          <img
            src="/selelct.png"
            alt="Select"
            className="h-6 w-6 mx-0 cursor-pointer"
          />
        </div>
        {/* Бургер меню */}
        <img
          src="/burger.png"
          alt="Menu"
          className="h-6 w-6 cursor-pointer"
          onClick={toggleModal}
        />
      </div>
      <style jsx>{`
        @media (max-width: 1046px) and (min-width: 880px) {
          .d {
            width: 620px !important;
          }
        }
        @media (max-width: 810px) and (min-width: 764px) {
          .d {
            width: 520px !important;
          }
        }
           @media (max-width: 764px) and (min-width: 350px) {
      .d {
        width: 360px !important;
        height: 88px !important;
      }
         
      `}</style>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </header>
  );
};

export default Header;
