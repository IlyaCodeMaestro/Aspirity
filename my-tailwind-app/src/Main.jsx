import TextField from "@mui/material/TextField";
import ModalWindow from "./ModalWindow";
import { useState } from "react";
const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="flex justify-between gap-4 mb:flex-col ">
      <div
        className="h" // Tailwind для базовых стилей
        style={{
          maxWidth: "820px",
          width: "100%",
          minHeight: "420px",
          height: "100%",
          padding: "30px",
          borderRadius: "12px",
          backgroundColor: "#232324",
        }} // Inline-стили для специфичных размеров
      >
        <div className="flex items-center justify-between flex-wrap ">
          <h2 className="r" style={{ fontSize: "16px", color: "white" }}>
            Персональная информация
          </h2>

          {/* Кнопка "Изменить" */}
          <h3 className="text-[#76787A] mb:text-sm">Изменить</h3>
        </div>
        <div className="flex items-center justify-between gap-4 pt-[32px] mb:flex flex-col">
          <TextField
            required
            id="outlined-required"
            label="Имя"
            defaultValue="Юрий"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                height: "40px",
                borderRadius: "4px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#363738",
                },
                "&:hover fieldset": {
                  borderColor: "#363738",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#363738",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Белый цвет надписи Required
              },
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Фамилия"
            defaultValue="Герыш"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                height: "40px",
                borderRadius: "4px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#363738",
                },
                "&:hover fieldset": {
                  borderColor: "#363738",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#363738",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Белый цвет надписи Required
              },
            }}
          />
        </div>
        <div className="pt-[24px] ">
          <TextField
            required
            id="outlined-required"
            label="Отчество"
            defaultValue="Андреевич"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                height: "45px",
                borderRadius: "4px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#363738",
                },
                "&:hover fieldset": {
                  borderColor: "#363738",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#363738",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Белый цвет надписи Required
              },
            }}
          />{" "}
        </div>
        <div className="flex pt-[24px] gap-4 mb:flex-col">
          <TextField
            required
            id="outlined-required"
            label="Дата рождения"
            defaultValue="06.01.2014"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                height: "45px",
                borderRadius: "4px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#363738",
                },
                "&:hover fieldset": {
                  borderColor: "#363738",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#363738",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Белый цвет надписи Required
              },
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Дата трудоустройства"
            defaultValue="15.05.2020"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                height: "45px",
                borderRadius: "4px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#363738",
                },
                "&:hover fieldset": {
                  borderColor: "#363738",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#363738",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Белый цвет надписи Required
              },
            }}
          />
        </div>
        <div className="flex pt-[24px] gap-4 mb:flex-col">
          <TextField
            required
            id="outlined-required"
            label="Страна"
            defaultValue="Россия"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                height: "45px",
                borderRadius: "4px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#363738",
                },
                "&:hover fieldset": {
                  borderColor: "#363738",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#363738",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Белый цвет надписи Required
              },
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Город"
            defaultValue="Красноярск"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                height: "45px",
                borderRadius: "4px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#363738",
                },
                "&:hover fieldset": {
                  borderColor: "#363738",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#363738",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Белый цвет надписи Required
              },
            }}
          />
        </div>
        <div className="flex pt-[24px] gap-4 mb:flex-col">
          <TextField
            required
            id="outlined-required"
            label="Должность"
            defaultValue="UI/UX designer"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                height: "45px",
                borderRadius: "4px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#363738",
                },
                "&:hover fieldset": {
                  borderColor: "#363738",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#363738",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Белый цвет надписи Required
              },
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Электронная почта"
            defaultValue="test@gmail.com"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff",
                height: "45px",
                borderRadius: "4px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#363738",
                },
                "&:hover fieldset": {
                  borderColor: "#363738",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#363738",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ffffff", // Белый цвет надписи Required
              },
            }}
          />
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 749px) and (min-width: 350px) {
          .h {
            width: 360px !important;
            height: 660px !important;
            padding: 20px 16px !important;
          }
        }
      `}</style>
      <div
        className="second" // Tailwind для базовых стилей
        style={{
          backgroundColor: "#232324",
          borderRadius: "1rem",
          padding: "30px",
          maxWidth: "658px",
          width: "85%",
          minHeight: "484px",
        }} // Inline-стили для специфичных размеров
      >
        <div className="flex items-center justify-between ">
          <h2 className="" style={{ color: "white", fontSize: "18px" }}>
            Загрузка сотрудника
          </h2>

          {/* Кнопка "Изменить" */}
          <h3 className="text-[#D77556] ">100%</h3>
        </div>
        <div className="flex justify-between pt-[40px] mb:flex-col gap-4">
          <div className="flex flex-col  gap-2 ">
            <h2
              style={{
                color: "#76787A",
                fontSize: "16px",
                fontWeight: "400",
                whiteSpace: "nowrap",
              }}
            >
              Название проекта
            </h2>
            <p style={{ color: "white", fontSize: "16px", fontWeight: "400" }}>
              MedPoint 24
            </p>
          </div>
          <div className="flex flex-col pr-20 gap-2 xl:pl-[30px]">
            <h2
              style={{ color: "#76787A", fontSize: "16px", fontWeight: "400" }}
            >
              Тип проекта
            </h2>
            <p style={{ color: "white", fontSize: "16px", fontWeight: "400" }}>
              Коммерческий
            </p>
          </div>
        </div>
        <div className="flex justify-between pr-[70px] items-center mb:flex-col mr-24 ">
          <div className="flex flex-col pt-[40px] gap-2 mb:pt-4">
            <h2
              style={{ color: "#76787A", fontSize: "16px", fontWeight: "400" }}
            >
              Ответственный
            </h2>
            <div className="flex items-center gap-2">
              <img
                src="/women.png"
                alt="Анна"
                className="w-[28px] h-[28px] rounded-full"
              />
              <p
                style={{ color: "white", fontSize: "16px", fontWeight: "400" }}
              >
                Анна Кузнецова
              </p>
            </div>
          </div>
          <div className="flex flex-col pt-[55px] gap-2 xl:pl-[30px] pb-[20px] mb:pt-4">
            <h2
              style={{ color: "#76787A", fontSize: "16px", fontWeight: "400" }}
            >
              Команда
            </h2>
            <div className="relative">
              <img
                src="/avatar-group-list.png"
                alt=""
                className="w-[140px] h-10 xl:w-[120px] mb:w-[180px] "
              />
              <p
                className="absolute top-1 -right-8 text-white font-normal text-base cursor-pointer mb:pt-2"
                onClick={openModal}
              >
                + 2
              </p>
              {modalOpen && <ModalWindow onClose={closeModal} />}
            </div>
          </div>
        </div>

        <div className="pt-[52px] mb:pt-2">
          <h2 className="text-[#76787A] text-base">Сроки работы</h2>
        </div>
        <div className=" pt-[8px] gap-8 flex flex-row relative">
          <p className=" text-[#B0B1B6] text-base">03 марта 2023</p>
          <img
            src="/union.png"
            alt=""
            srcset=""
            className="w-4 h-3  absolute left-28 bottom-1"
          />
          <p className="text-[#B0B1B6] text-base">23 марта 2023</p>
        </div>
        <div className="pt-[40px]">
          <button className=" bg-blue-600 w-[100%] h-10 text-sm text-white font-semibold rounded-md">
            ПОСМОТРЕТЬ ВСЮ ЗАГРУЗКУ
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 764px) and (min-width: 350px) {
          .second {
            width: 360px !important;
            height: 580px !important;
            padding: 30px 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Main;
