// import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
// import Best from "./components/best/Best"
// import Footer from "../components/footer/Footer";
import Rent from "../components/rent/Rent";
import Buy from "../components/buy/Buy";
import { motion } from 'framer-motion'

const Home = () => {
    console.log("first")
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      {/* <Navbar /> */}
      <Hero />
      {/* <Best /> */}
      <Buy />
      <Rent />
    </motion.div>
  );
};

export default Home;
