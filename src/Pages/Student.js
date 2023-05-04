import * as React from 'react';
import Name from '../Name'
import CustomizedTables from '../CustomizedTables';
import Header from '../Header';
import Footer from '../Footer';
import { Box } from '@mui/material';


 function Student(){
     return (
        
       <>
       <Header />
           <Box>
           <Name name="Raghav" />
       </Box>
       <CustomizedTables/>
       <Footer />
          </>
     )
   }

   export default Student