import { team } from "./constants";

const ModalWindow = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Вызываем функцию onClose, которая передана из родительского компонента
  };
  return (
    <div
      className="fixed  z-50 top-1 right-[350px] bg-[#232324] w-full  sm:max-w-[90%] md:max-w-[650px] md:h-[700px] rounded-2xl p-[20px] sm:p-[32px] flex flex-col "
      style={{ minHeight: "300px" }}
      id="window"
    >
      <div className="flex justify-between items-center pb-10 ">
        <div className="text-white ">
          <h1 className="text-4xl">Команда</h1>
        </div>
        <div className="text-white  cursor-pointer" onClick={handleClose}>
          <img src="/cross.png" alt="" srcset="" />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start mb:gap-3 mt-[0px]">
        {team.map((item, index) => {
          return (
            <div key={index} className="flex items-start">
              <img
                src={item.image}
                alt={item.name}
                className="pr-2  rounded-lg"
              />
              <div className="flex flex-col ">
                <h2 className="text-base font-normal  text-white ">
                  {item.name}
                </h2>
                <p className=" text-[#DCDCDC] font-normal text-sm ">
                  {item.job}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        @media (max-width: 764px) and (min-width: 350px) {
          #window {
            width: 360px !important;
            height: 632px !important;
            padding: 16px !important;
            left: 200px;
          }
        }
        @media (max-width: 1009px) and (min-width: 764px) {
          #window {
            width: 360px !important;
            height: 632px !important;
            padding: 16px !important;
            left: 210px;
          }
        }
      `}</style>
    </div>
  );
};

export default ModalWindow;
