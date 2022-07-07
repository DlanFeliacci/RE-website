import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { motion } from "framer-motion";

// Adresse, Chambres, Vente/Achat, Pictures, Type du bien
// (villa,appartement), Prix, description, tel, email

const Formulaire = () => {
  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: '',
    email: '',
    tel: '',
    wilaya : '',
    ville: '',
    adresse: '',
    transaction: '',
    type: '', // appartement, villa...
    surface: "",
    chambre: "",
    pictures: "",
    prix: ''
  });

  // Prevent Reloading the page when clicking on submit.
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent browser reloading
    console.log(e)
  }

  const handleChange = (e) => {
    setDataForm({
      ...dataForm, [e.target.name] : e.target.value
    })
    console.log('value is : ', e.target.value)
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
       {file.path} - {file.size} bytes
    </li>
 ));

  // Photo upload drag & drop
  //__________________________________________________________________

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div className="md:grid md:grid-cols-2 md:gap-6 place-items-center">
          <div className="xl:w-screen md:w-screen px-5 md:px-20 mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="shadow rounded-md overflow-hidden">
                <div className="px-4 py-5 bg-indigo-50 space-y-6 sm:p-6">
                  <p className="text-xl text-gray-500 font-bold pb-3">Information Personelle</p>
                  <div className="grid grid-cols-6 gap-6">
                    
                    <div className="col-span-5 sm:col-span-2">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={dataForm.firstName}
                        autoComplete="given-name"
                        className=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-5 sm:col-span-2">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={dataForm.lastName}
                        autoComplete="family-name"
                        className=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-3 sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={dataForm.email}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="tel"
                        className="block text-sm font-medium text-gray-700">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        value={dataForm.tel}
                        autoComplete="on"
                        className=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700">
                        Pays
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Algérie</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-2">
                      <label
                        htmlFor="wilaya"
                        className="block text-sm font-medium text-gray-700">
                        Wilaya
                      </label>
                      <input
                        placeholder="Alger"
                        type="text"
                        name="wilaya"
                        id="wilaya"
                        value={dataForm.wilaya}
                        // autoComplete="address-level2"
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(event) => {
                          if (!/^[a-zA-Z ]+$/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-2">
                      <label
                        htmlFor="ville"
                        className="block text-sm font-medium text-gray-700">
                        Ville
                      </label>
                      <input
                        placeholder="Kouba"
                        type="text"
                        name="ville"
                        id="ville"
                        value={dataForm.ville}
                        autoComplete="address-level1"
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(event) => {
                          if (!/^[a-zA-Z ]+$/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                        <div className="sm:block" aria-hidden="true">
                          <div className="py-5">
                            <div className="border-t border-dashed border-gray-500" />
                          </div>
                        </div>
                        <p className="text-xl text-gray-500 font-bold pb-4">Information sur l'immobilier</p> 
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700">
                       Transaction
                      </label>
                      <select
                        id="transaction"
                        name="transaction"
                        autoComplete="transaction"
                        className="mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Vente</option>
                        <option>Location</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700">
                       Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        autoComplete="type-name"
                        className="mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Appartement</option>
                        <option>Villa</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="chambre"
                        className="block text-sm font-medium text-gray-700">
                        chambres
                      </label>
                      <input
                        type="number"
                        name="chambre"
                        id="chambre"
                        min={1}
                        max={15}
                        value={dataForm.chambre}
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        // onKeyPress={(e) => !/[0-9.]/.test(e.key) && e.preventDefault()}
                      />
                    </div>

                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="surface"
                        className="block text-sm font-medium text-gray-700">
                        Surface
                      </label>
                      <input
                        placeholder="m²"
                        type="surface"
                        name="surface"
                        id="surface"
                        value={dataForm.surface}
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(e) => !/[0-9.]/.test(e.key) && e.preventDefault()}
                      />
                    </div>

                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="prix"
                        className="block text-sm font-medium text-gray-700">
                        Prix
                      </label>
                      <input
                        placeholder="DA"
                        type="text"
                        name="prix"
                        id="prix"
                        value={dataForm.prix}
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(e) => !/[0-9.]/.test(e.key) && e.preventDefault()}
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700">
                        Adresse
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        className=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        value={dataForm.description}
                        rows={3}
                        className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Bonjour, je met en vente..."
                        defaultValue={""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* upload photos */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photos
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-indigo-100 " {...getRootProps()}>
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <p className="pl-1">Glissez des images ici ou &nbsp;</p>
                          <aside>
                            <ul>{files}</ul>
                          </aside> 
                          <label
                            htmlFor="file-upload"
                            // {...getRootProps()}
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <button className="p-0.5">
                              <span>Télecharger</span>
                            </button>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              multiple='true'
                              className="sr-only"
                              accept=".png, .jpg, .jpeg"
                              {...getInputProps()}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, JPEG</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ________________________________ */}

                <div className="px-4 py-3 bg-white text-right sm:px-6">
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#2C3E50] hover:bg-[#365a7e] transition ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Publier l'annonce
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="false">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </motion.div>
  );
};

export default Formulaire;
