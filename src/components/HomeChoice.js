import img7 from "../assets/7.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";


const HomeChoice = () => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center w-full sm:flex sm:justify-center gap-10 text-center py-10">

        <div className="relative rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500 group border-2">
          <img className="rounded-md w-80 mx-auto object-cover group-hover:blur-sm" src={img7}  alt="vente" />
          <button className="absolute opacity-0 group-hover:opacity-100 font-bold text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 py-16 px-20 ">Vente</button>
        </div>

        <div className="relative rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500 group border-2">
          <img className="rounded-md w-80 mx-auto object-cover group-hover:blur-sm" src={img10} alt="location" />
          <button className="absolute opacity-0 group-hover:opacity-100 font-bold text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 px-12 py-16">Location</button>
        </div>
      
      </div>
    </>
  );
};

export default HomeChoice;
