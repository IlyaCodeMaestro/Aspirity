import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
const Hero = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="py-4">
      {/* Верхняя часть с иконкой и ссылкой */}
      <div className="flex items-center pb-8 pl-4">
        <img
          src="/select-left.png"
          alt="Icon"
          className="w-6 h-6 cursor-pointer pr-1"
        />
        <a
          href="#"
          className="text-[#76787A]  font-semibold text-sm whitespace-nowrap"
        >
          ВЕРНУТЬСЯ К СОТРУДНИКАМ
        </a>
      </div>

      {/* Блок с информацией */}
      <div
        className="x"
        style={{
          backgroundColor: "rgba(35, 35, 36, 1)",
          minHeight: "384px",
          maxWidth: "1494px",
          borderRadius: "15px",
          color: "white",
          padding: "16px",
        }}
      >
        <div className="flex items-start mb:flex-col">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-40 h-40 mr-10 pt-4 pl-6 mb:ml-[80px]"
          />
          <div className="mb:pl-20 mt-[-50px]  ">
            <h2
              id="text"
              className="text-5xl  font-bold pt-14 lt:text-2xl flex whitespace-nowrap mb:text-2xl"
            >
              Иванов
            </h2>
            <h3 className="text-5xl font-bold lt:text-2xl flex whitespace-nowrap mb:text-2xl">
              Иван Иванович
            </h3>
            <p
              className="text-md pt-10 mb:mx-8 mt-[-10px] "
              style={{ color: "#C4C5C6" }}
            >
              UI/UX designer
            </p>
            <p
              className="text-md pt-4 mb:text-base "
              style={{ color: "#C4C5C6" }}
            >
              Россия, Красноярск 14:03
            </p>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 1050px) and (min-width: 879px) {
            .x {
              width: 620px !important;
            }
          }
          @media (max-width: 878px) and (min-width: 800px) {
            .x {
              width: 550px !important;
            }
          }
          @media (max-width: 799px) and (min-width: 765px) {
            .x {
              width: 520px !important;
            }
          }
          @media (max-width: 764px) and (min-width: 350px) {
            .x {
              width: 360px !important;
              height: 452px !important;
            }
          }
          @media (max-width: 764px) and (min-width: 350px) {
            #text {
              padding-left: 50px;
            }
          }
        `}</style>
        {/* Кнопки */}
        <div className=" pt-[100px] pl-4  mb:py-[60px] mb:pt-8 ">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "blue",
              },
            }}
            sx={{
              ".MuiTabs-flexContainer": {
                gap: "1rem",
              },
              "& .MuiTab-root": {
                color: "white",
                textTransform: "none",
                fontSize: "0.875rem",
                "@media (min-width: 380px) and (max-width: 762px)": {
                  fontSize: "0.7rem", // размер шрифта для mb брейкпоинта
                },
                "@media (min-width: 763px)": {
                  fontSize: "1rem", // размер шрифта для экранов шире mb
                },
              },
              "& .Mui-selected": {
                color: "white",
                fontWeight: "bold",
              },
            }}
          >
            <Tab label="ОСНОВНАЯ ИНФОРМАЦИЯ" />
            <Tab label="ОТПУСК" />
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Hero;
