import React from 'react';
import { SimpleGrid, Heading, Box } from '@chakra-ui/react';
import ItemCard from './ItemCard';

const dummyItems = [
  {
    id: 1,
    title: 'Video 1',
    description: 'Description for Video 1',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Video 2',
    description: 'Description for Video 2',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Video 3',
    description: 'Description for Video 3',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Video 4',
    description: 'Description for Video 4',
    thumbnailUrl: 'https://via.placeholder.com/150',
  },
  // Add more video data as needed
];

const ItemList = () => {
  return (
    <Box height={300} width={500}>
      <Heading as="h2" size="xl" mb={4}>
        Video List
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        
        {dummyItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Box>
    
  );
};

export default ItemList;
