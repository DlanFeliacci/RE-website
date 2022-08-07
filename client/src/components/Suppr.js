import {useState} from "react";
import Tempic from "../assets/3.jpg";

const Suppr = () => {
  
  return (
    <div className="relative flex min-h-screen flex-col justify-center">
      <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
        <img
          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
          src={Tempic}
          alt=""
        />

        <div className="p-4">
          <h3 className="text-xl font-medium text-slate-600 pb-2">
             Dzd 1000.000
          </h3>
          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            vente, F4, surface, adresse
          </p>
          <div className="flex justify-end">
            <button className=" mt-2 py-1 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Plus
            </button>
          </div>
          
        </div>
      </div>
    </div>

  );
}
export default Suppr;


{/* <div className="ml-[450px] flex w-[800px] h-[230px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-6">
      <div className="w-lg rounded-lg">
        <a href="#">
            <img className="w-lg h-[229px] rounded-lg" src={Tempic} alt="" />
        </a>
      </div>
      <div className="p-3 w-[450px] max-w-xl">
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Adresse
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
         prix, surface, localisation, type, F4
        </p>
        <a
          href="/"
          className="inline-flex items-center mt-[50px] ml-[350px] py-1 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <p className="w-[40px]">Voir</p>

        </a>
      </div>
    </div> */}


// This is a file were i keep trash and tests