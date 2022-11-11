import { Box, Checkbox } from '@chakra-ui/react';
import React from 'react'
import { BsChevronRight } from "react-icons/bs";
const SideBar = () => {
  return (
    <div className='sibox'>
      <Box className='cg5'>
      
        <h1 className='cg1'>Categories</h1>
        <hr className='line' />
        <Box className="cgbox"><BsChevronRight className='cg2'/><h2 className='cg2'>Veterinary</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><BsChevronRight className='cg2'/><h2 className='cg2'>Ayush</h2>  </Box>
        <hr className='line' />
        
        <Box className="cgbox"><BsChevronRight className='cg2'/><h2 className='cg2'>Fitness</h2>  </Box>
        <hr className='line' />
        
        <Box className="cgbox"><BsChevronRight className='cg2'/><h2 className='cg2'>Mom & Baby</h2>  </Box>
        <hr className='line' />
        
        <Box className="cgbox"><BsChevronRight className='cg2'/><h2 className='cg2'>Sexual Wellness</h2>  </Box>
        <hr className='line' />
        

        <Box className="cgbox"><BsChevronRight className='cg2'/><h2 className='cg2'>Treatements</h2>  </Box>
        
        
        
        
      </Box>

      <Box className='cg5'>

      <h1 className='cg1'>Filters</h1>
      <hr className='line' />
      <h1 className='cg1'>Brands</h1>

      <input type="text" className='cgin'  placeholder='Search....'/>
      
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Adel Pekana(1,911)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Age Ayurveda(87)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Aimil(154)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Allen(169)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Axiom(144)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Ayursun(153)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Bakson'S(257)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Basic Ayurveda(100)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Bixa Botanical(122)</h2>  </Box>
        <hr className='line' />

      </Box>


<Box className='cg5'>
<hr className='line' />
      <h1 className='cg1'>Manufacturers</h1>

      <input type="text" className='cgin'  placeholder='Search....'/>
      
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>S A Herbal Bioactives LLP(122)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Bio-India Pharma Pvt.Ltd(107)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Kradha Enterprises(100)</h2>  </Box>
        <hr className='line' />




      <h1 className='cg1'>Categories</h1>

      <input type="text" className='cgin'  placeholder='Search....'/>
      
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Ayurvedic(122)</h2>  </Box>
        <hr className='line' />
        <Box className="cgbox"><Checkbox size='md' colorScheme='blue'></Checkbox><h2 className='cg21'>Homeopathy(107)</h2>  </Box>
        <hr className='line' />
        
        </Box>

    </div>
  )
}

export default SideBar
