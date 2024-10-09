import { useEffect, useState } from "react";

export const Home = () => {
  const [mau, setMau] = useState(1);
  const [gamau, setGamau] = useState(1);
  const [popUpGif, setPopUpGif] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);
    
        if (count === 0 && popUpGif) {
          window.location.href = '/breakfast';
        }
    
    return () => {
      clearTimeout();
    }
  }, [count]);

  const handleGamau = () => {
    setMau((prevMau) => prevMau + 0.5);
    setGamau((prevGamau) => prevGamau / 1.5);
  };

  const handleNext = () => {
    setPopUpGif(true);
    setCount(5);
  }

  return (
    <>
    <div className="bg-fuchsia-200 overflow-auto w-screen h-screen flex flex-col items-center justify-start lg:justify-center gap-4 p-4">
    <h1 className="text-3xl text-center font-bold mb-10 px-5 text-fuchsia-950">MINGGU INI JALAN YAAA???</h1>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
    <button
      onClick={handleNext}
        style={{ width: 250 * mau + 'px',maxWidth: screen.width-10 , height: 150 * mau + 'px', fontSize: 25 * mau + 'px' }}
        className="bg-fuchsia-800 hover:scale-105 transition-all ease-in-out duration-200 text-white rounded-xl"
      >
        {gamau < 0.1 ? "HARUS MAU!😡😠" : "MAUUU"}
      </button>
      <button
        onClick={handleGamau}
        style={{ width: 250 * gamau + 'px', height: 150 * gamau + 'px', fontSize: 25 * gamau + 'px'  }}
        className={`${gamau < 0.1 && "hidden"} bg-fuchsia-500 hover:scale-105 transition-all ease-in-out duration-200 text-white rounded-xl`}
      >
        GAMAU
      </button>
    </div>
    </div>
    {popUpGif && 
    <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-md bg-black/30">
    <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
      <img src="/gif/happy.gif" alt="" />
      <div className="text-center lg:text-4xl">YEEAAYYY... Let&apos;s goooo... {count}</div>
    </div>
    </div>
    }
    </>
  );
};
