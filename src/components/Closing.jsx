/* eslint-disable react/prop-types */
export const Closing = ({setClose}) => {
  return (
    <div className="absolute z-50 w-screen h-screen flex flex-col justify-center items-center bg-black/20 backdrop-blur-md">
        <button onClick={() => setClose(false)} className="absolute top-5 right-5 px-3 py-2 text-xl text-white bg-red-700 rounded-lg"><i className="fa-solid fa-xmark"></i></button>
        <div className="mt-20 lg:mt-0 flex flex-wrap justify-center items-center gap-10">
            <img className="w-40 lg:w-72" src="gif/go2.gif" alt="" />
            <img className="w-40 lg:w-72" src="gif/go1.gif" alt="" />
            <img className="w-40 lg:w-72" src="gif/go3.gif" alt="" />
        </div> 
        <div className="bg-white rounded-xl px-5 py-3 mx-5 mt-10 text-xl text-center">
        Take a screenshot of the SUMMARY and send it to your lovely boyfriend. See you on weekend 🥰🥰🥰
        </div>
    </div>
  )
}
