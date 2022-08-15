/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useDropzone } from "react-dropzone"; //library for drag and drop
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import commune from "../json/districts.json"
import {FaCheckCircle} from 'react-icons/fa'
import {VscError} from 'react-icons/vsc'


const Formulaire = () => {
  const [isSuccess , setIsSuccess] = useState(false) 
  const [isFail , setIsFail] = useState(false) 


  const { register, handleSubmit,  formState: { errors }  } = useForm();
  const onSubmit = (e) => {
    console.log(Object.keys(errors).length)

    dataForm.pictures = files[0].name // à changer..............

    const fd = new FormData();
    for ( let key in dataForm ) {
      if (key === 'pictures') {
        fd.append(key, files[0], dataForm[key])
      } else{
        fd.append(key, dataForm[key])
      }
    }

    for (const pair of fd.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    console.log(e)
    // post request (to server):
    axios.post('http://localhost:5000/biens', fd, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(res => {  
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
      },5000)
    }).catch(err => {
      setIsFail(true)
      setTimeout(() => {
        setIsFail(false)
      },5000)
    })
  };

  const handleChange = (e) => {
    // dynamically update object property, allow user to write on form, have multiple React inputs having a different input properties and using the same onChange handler to update part of the state.
    setDataForm({
      ...dataForm, [e.target.name] : e.target.value
    })
    // console.log(e.target.value)
  }


// get api from algerian communes____________________________________________________
// const [commune, setCommune] = useState(null)
// useEffect(()=>{
//   axios
//   .get('https://github.com/lotfio/algeria-administrative-divisions/blob/58e8e3eb65f99c553fdf4737ba92d0a45221f66b/json/districts.json')
//   .then(response => {
//     console.log(response.data.map((iter) => {
//       return iter.name
//     }))
//     setCommune(response.data)
//   })
//   .catch(error => console.log(error.message))
// }, []);
// __________________________________________________________________________________


  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: '',
    email: '',
    tel: '',
    country: 'Algérie',
    wilaya : '16 - Alger',
    ville: 'Hydra',
    address: '',
    transaction: 'Vente',
    type: 'Appartement', // appartement, villa...
    surface: "",
    chambre: "",
    pictures: "",
    prix: ''
  });

  // Tel format:
  const handleTelInput = e => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setDataForm({
      ...dataForm, [e.target.name] : formattedPhoneNumber
    })
  };
  function formatPhoneNumber(value){
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 10) return phoneNumber;
    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 6)} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
  }
  // ________________________________________________________________________________________
  
  // Prevent Reloading the page when clicking on submit:
  // const handleSubmit = (e) => {
  //   e.preventDefault(); //prevent browser reloading
  //   // setError(null);
  //   console.log(e)
    
  //   // post request:
  //   axios.post('http://localhost:5000/biens', dataForm).then(res => {  
  //     console.log(res)
  //   }).catch(err => console.log(err))
  // }

  
  
// Photo upload drag & drop:___________________________________________________________________________
  // acceptedFiles variable stores all the file details,
  // getRootProps variable defines the area where this drag-and-drop feature will work, and
  // getInputs variable makes the input field droppable.

const thumbsContainer = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginTop: 4,
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'bloc',
  width: '100%',
  height: '100%',
  objectFit: 'contain'
};

  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  //___________________________________________________________________________________________

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div className="md:grid md:grid-cols-2 md:gap-6 place-items-center">
          <div className="xl:w-screen md:w-screen px-5 md:px-20 mt-5 md:mt-0 md:col-span-2">
            <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow rounded-md overflow-hidden">
                <div className="px-4 py-5 bg-indigo-50 space-y-6 sm:p-6">
                  <p className="text-xl text-black font-bold pb-3">Information Personelle</p>
                  <div className="grid grid-cols-6 gap-6">
                    
                    <div className="col-span-5 sm:col-span-2">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Prénom
                      </label>
                      <input
                        {...register("firstName", { required: "champ requis", minLength:{value:3, message:"3 lettres minimum"}})}
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={dataForm.firstName}
                        maxLength={15}
                        autoComplete="given-name"
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(event) => {
                          if (!/^[a-zA-Z ]+$/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                      {errors.firstName && <small style={{color: '#FF6666'}}>{errors.firstName.message}</small>}
                    </div>

                    <div className="col-span-5 sm:col-span-2">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <input
                        // {...register("lastName", { required: "champ requis", minLength:{value:3, message:"3 lettres minimum"}})}
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={dataForm.lastName}
                        maxLength={20}
                        autoComplete="family-name"
                        className=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(event) => {
                          if (!/^[a-zA-Z ]+$/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                      {/* {errors.lastName && <small style={{color: 'red'}}>{errors.lastName.message}</small>} */}
                    </div>

                    <div className="col-span-3 sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={dataForm.email}
                        maxLength={30}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="tel"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Téléphone
                      </label>
                      <input
                      {...register("tel", { required: "champ requis", minLength:{value:9, message:"9 chiffres minimum"}})}
                        type="tel"
                        name="tel"
                        id="tel"
                        value={dataForm.tel}
                        maxLength={10}
                        autoComplete="on"
                        className=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => {handleChange(e); handleTelInput(e);}}
                        // onKeyPress={(event) => {
                        //   if (!/[0-9]/.test(event.key)) {
                        //     event.preventDefault();
                        //   }
                        // }}
                      />
                      {errors.tel && <small style={{color: '#FF6666'}}>{errors.tel.message}</small>}
                    </div>

                    <div className="col-span-2 sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Pays
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={dataForm.country}
                        onChange={handleChange}
                        autoComplete="country"
                        className="mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Algérie</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-2">
                      <label
                        htmlFor="wilaya"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Wilaya
                      </label>
                      <select
                        placeholder="Alger"
                        type="text"
                        name="wilaya"
                        id="wilaya"
                        value={dataForm.wilaya}
                        // autoComplete="address-level2"
                        className="mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleChange}
                      >
                        <option>01 - Adrar</option>
                        <option>02 - Chlef</option>
                        <option>03 - Laghouat</option>
                        <option>04 - Oum El Bouaghi</option>
                        <option>05 - Batna</option>
                        <option>06 - Béjaïa</option>
                        <option>07 - Biskra</option>
                        <option>08 - Béchar</option>
                        <option>09 - Blida</option>
                        <option>10 - Bouira</option>
                        <option>11 - Tamanrasset</option>
                        <option>12 - Tébessa</option>
                        <option>13 - Tlemcen</option>
                        <option>14 - Tiaret</option>
                        <option>15 - Tizi Ouzou</option>
                        <option>16 - Alger</option>
                        <option>17 - Djelfa</option>
                        <option>18 - Jijel</option>
                        <option>19 - Sétif</option>
                        <option>20 - Saïda</option>
                        <option>21 - Skikda</option>
                        <option>22 - Sidi Bel Abbès</option>
                        <option>23 - Anabba</option>
                        <option>24 - Guelma</option>
                        <option>25 - Constantine</option>
                        <option>26 - Médéa</option>
                        <option>27 - Mostaganem</option>
                        <option>28 - Msila</option>
                        <option>29 - Mascara</option>
                        <option>30 - Ouargla</option>
                        <option>31 - Oran</option>
                        <option>32 - El Bayadh</option>
                        <option>33 - Illizi</option>
                        <option>34 - Bordj Bou Arreridj</option>
                        <option>35 - Boumerdès</option>
                        <option>36 - El Tarf</option>
                        <option>37 - Tindouf</option>
                        <option>38 - Tissemsilt</option>
                        <option>39 - El Oued</option>
                        <option>40 - Khenchela</option>
                        <option>41 - Souk Ahras</option>
                        <option>42 - Tipaza</option>
                        <option>43 - Mila</option>
                        <option>44 - Aïn Defla</option>
                        <option>45 - Naâma</option>
                        <option>46 - Aïn Témouchent</option>
                        <option>47 - Ghardaïa</option>
                        <option>48 - Relizane</option>
                        <option>49 - Timimoun</option>
                        <option>50 - Bordj Badji Mokhtar</option>
                        <option>51 - Ouled Djellal</option>
                        <option>52 - Béni Abbès</option>
                        <option>53 - In Salah</option>
                        <option>54 - In Guezzam</option>
                        <option>55 - Touggourt</option>
                        <option>56 - Djanet</option>
                        <option>57 - El M'Ghair</option>
                        <option>58 - El Meniaa</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-2">
                      <label
                        htmlFor="ville"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Ville
                      </label>
                      <select 
                      // {...register("ville", { required: "champ requis", minLength:{value:3, message:"3 lettres minimum"}})}
                        placeholder="Commune"
                        type="text"
                        name="ville"
                        id="ville"
                        value={dataForm.ville}
                        autoComplete="address-level1"
                        className="mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleChange}
                        onKeyPress={(event) => {
                          if (!/^[a-zA-Z ]+$/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}>
                        {commune && commune.map((iter, i) => {
                          // return (<option value={dataForm.ville}>{iter.name}</option>)
                          return (<option key={i}>{iter.name}</option>)
                        })}
                      </select>
                      {/* {errors.ville && <small style={{color: '#FF6666'}}>{errors.ville.message}</small>} */}
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                        <div className="sm:block" aria-hidden="true">
                          <div className="py-5">
                            <div className="border-t border-dashed border-gray-500" />
                          </div>
                        </div>
                        <p className="text-xl text-black font-bold pb-4">Information sur l'immobilier</p> 
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="transaction"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                       Transaction
                      </label>
                      <select
                        id="transaction"
                        name="transaction"
                        autoComplete="transaction"
                        value={dataForm.transaction}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Vente</option>
                        <option>Location</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                       Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={dataForm.type}
                        onChange={handleChange}
                        autoComplete="type-name"
                        className="mt-1 block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Appartement</option>
                        <option>Villa</option>
                      </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="chambre"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Pièces
                      </label>
                      <input
                      {...register("chambre", { required: "champ requis" })}
                        type="number"
                        name="chambre"
                        id="chambre"
                        min={1}
                        max={15}
                        value={dataForm.chambre}
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                      />
                      {errors.chambre && <small style={{color: '#FF6666'}}>{errors.chambre.message}</small>}
                    </div>

                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="surface"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Surface
                      </label>
                      <input
                      {...register("surface", { required: "champ requis", minLength:{value:2, message:"2 chiffres minimum"}})}
                        placeholder="m²"
                        type="surface"
                        name="surface"
                        id="surface"
                        value={dataForm.surface}
                        maxLength={10}
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(e) => !/[0-9.]/.test(e.key) && e.preventDefault()}
                      />
                      {errors.surface && <small style={{color: '#FF6666'}}>{errors.surface.message}</small>}
                    </div>

                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="prix"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Prix
                      </label>
                      <input
                        placeholder="DA"
                        type="text"
                        name="prix"
                        id="prix"
                        value={dataForm.prix}
                        maxLength={20}
                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onKeyPress={(e) => !/[0-9.]/.test(e.key) && e.preventDefault()}
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-1 after:text-red-500">
                        Adresse
                      </label>
                      <input
                      {...register("address", { required: "champ requis", minLength:{value:2, message:"2 lettres minimum"}})}
                        type="text"
                        name="address"
                        value={dataForm.address}
                        maxLength={80}
                        onChange={handleChange}
                        id="address"
                        autoComplete="address"
                        className=" p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.address && <small style={{color: '#FF6666'}}>{errors.address.message}</small>}
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
                        minLength={10}
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
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 hover:border-indigo-500 border-dashed rounded-md cursor-pointer  bg-white" 
                    {...getRootProps()}>
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
                        <div className="flex justify-center text-sm text-gray-600">
                          <p className="pl-1">Glissez des images ici ou &nbsp;</p>
                          <label
                            htmlFor="pictures"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <div className="px-0.5">
                              <span>Parcourir</span>
                            </div>
                            <input
                              id="pictures"
                              name="pictures"
                              type="file"
                              multiple={true}
                              className="sr-only"
                              accept=".png, .jpg, .jpeg"
                              {...getInputProps()}
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, JPEG</p>
                        <aside style={thumbsContainer}>
                            {thumbs}  
                        </aside> 
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
                {isSuccess && <div className="flex justify-center py-2">
                  <div className="flex justify-center w-[40%] h-[80px]  bg-green-100 items-center"><p className="text-green-500 flex"><FaCheckCircle className="mt-1 mr-2"/>Envoyé avec succès.</p></div>
                  </div>}
                {(Boolean(Object.keys(errors).length) || isFail) && <div className="flex justify-center py-2">
                  <div className="flex justify-center w-[40%] h-[80px] bg-rose-100 items-center"><p className="text-red-500 flex"><VscError className="mt-1 mr-2"/>Erreur, veuillez réessayer ultérieurement.</p></div>
                  </div>}

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
