import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Text } from '@chakra-ui/react';


const Card = (props) => {


  return (
    <>
               <HStack wrap={"wrap"} justifyContent={"space-evenly"}>

        {props.Data.map((e,index)=>(
            <Box
            height={200}
            width={300}
            >
          <SingleCard
          key = {index}
          image={e.link}
          CardTitle={e.title}
          btnHref={`/details/${e._id}`}
          Button="View Preview"
        />
       
       </Box>

        ))}  
        
        </HStack>

    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardTitle,
  btnHref,
}) => {
  return (
    <>
       <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="300px"
      height="380px"
      mb={4}
      
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.3s',
      }}
    ><Link to={btnHref}>
      <Box
        width="100%"
        height="40%"
        
      >
        <img
          src={image}
          alt={""}
          style={{  width: '100%', height: '100%' }}
        />
      </Box>
      <Box p={4}>
        <Text fontWeight="bold">
          {CardTitle}
        </Text>

      </Box>
      </Link>
    </Box>
  
    </>
  );
};
