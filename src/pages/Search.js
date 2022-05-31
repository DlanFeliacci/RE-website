import React from 'react'
import { motion } from 'framer-motion'
import SearchCard from '../components/SearchCard'

const Search = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <SearchCard/>
    </motion.div>
  )
}

export default Search