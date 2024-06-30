import TextField from "@mui/material/TextField";
const Modal = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Вызываем функцию onClose, которая передана из родительского компонента
  };
  return (
    <div
      className="modal" // Tailwind для базовых стилей
      style={{
        position: 'fixed',
        backgroundColor: '#232324',
        zIndex: 50,
        top: '2.75rem',
        right: '350px',
        borderRadius: '1rem',
        padding: '32px',
        maxWidth: "824px",
        width: "100%",
        minHeight: "516px",
        height: "80%",
      }} // Inline-стили для специфичных размеров
    >
      <div className="flex items-center justify-between flex-nowrap">
        <h2 style={{ fontSize: "18px", color: "white" }}>
          Персональная информация
        </h2>

        {/* Кнопка "Изменить" */}
        <div className="text-white  cursor-pointer" onClick={handleClose}>
          <img src="/cross.png" alt="№" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 pt-[32px] mb:flex-col pb-4">
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
      <div className="pt-[24px] mb:pt-[0px]">
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
      <div className="flex pt-[24px] gap-4 mb:flex-col mt-[-5px]">
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
      <div className="flex pt-[24px] gap-4 mb:flex-col mt-[-10px]">
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
      <div className="flex pt-[24px] gap-4 mb:flex-col mt-[-10px]">
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

      <div className="pt-[40px] mb:mt-[-20px]">
        <button className=" bg-blue-600 w-[100%] h-10 text-sm text-white font-semibold rounded-md">
          СОХРАНИТЬ
        </button>
      </div>
      <style jsx>{`
        @media (max-width: 764px) and (min-width: 350px) {
          .modal {
            width: 360px !important;
            height: 632px !important;
            padding: 16px !important;
            Left:210px
          }
        }
          @media (max-width: 1280px) and (min-width: 1052px) {
          .modal {
            width: 824px !important;
            height: 516px !important;
            Left:100px
          }
        }
           @media (max-width: 1051px) and (min-width: 764px) {
          .modal {
            width: 360px !important;
            height: 632px !important;
            padding: 16px !important;
            Left:210px
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
