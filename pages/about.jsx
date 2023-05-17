import { Container, Text, Flex } from '@mantine/core';
import React from 'react';
import Blob from '@common/components/blob';
import Heading from '@common/components/Headings';
import Background from '@common/components/Background';
import Navbar from '@common/components/Navbar';

function About() {
  return (
    <>
    <Background />
   
      <Container
        size="100%"
        pl="10%"
        pr="10%"
        sx={{ border: '2px solid red', minHeight:"100vh",position:"absolute",top: 0, left: 0}}
      >
         <Navbar/>
        {/* Here position is relative to allow zIndex to take place  */}
        <Container
          size="lg"
          sx={{ zIndex: '3', border: '2px solid red', position: 'relative' }}
        >
          <Heading Heading="About Us" />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed
            vitae quam corrupti illum sit neque magni omnis consectetur
            consequatur, beatae impedit sapiente commodi, cum ipsum molestiae
            est tenetur possimus accusamus saepe? Quam laboriosam deserunt optio
            dolor et, earum quidem explicabo hic. Culpa officia ducimus nesciunt
            recusandae, corporis et repellat vel voluptate id sapiente non
            dignissimos iste quos. In eum cum at placeat, asperiores alias
            itaque. Dolorem eos eum, dolorum saepe voluptate maxime repellat,
            suscipit accusamus at consectetur doloremque molestiae vero omnis
            asperiores dignissimos sit, dolor aliquid excepturi quaerat atque.
            Incidunt, veniam inventore atque aperiam recusandae possimus natus
            minima eos architecto similique obcaecati! Atque ratione, quasi
            voluptates quae asperiores magni recusandae deleniti dolore corporis
            voluptatum dolor adipisci maxime dolorem laborum commodi inventore
            vel ullam ut nisi quidem? Quam delectus modi ipsa aliquam sint nemo
            odio inventore esse fuga! Cumque culpa, ratione praesentium in a
            excepturi modi explicabo obcaecati quas suscipit nemo velit est
            laboriosam hic nam, maiores ex numquam, doloremque perferendis
            incidunt nisi? Cumque debitis dolore voluptates quod et, quasi
            architecto! Odit neque provident, dolorem, eveniet molestiae
            quisquam optio in nulla ratione libero fugiat iure. Aspernatur
            quisquam cum similique labore impedit natus quo tempore deleniti ad?
            Expedita consectetur corporis iste maxime labore! At rem placeat
            distinctio quis necessitatibus velit repellendus suscipit, adipisci
            tempore libero id ratione quidem eos neque aliquid similique
            doloremque voluptates voluptatum reiciendis architecto beatae. Ab
            iure eveniet exercitationem fuga, aliquam nemo! Modi tenetur
            voluptates ad, ea dolores officia eum! Alias sequi, fugiat
            asperiores architecto natus esse exercitationem eius eaque
            consequatur excepturi! Necessitatibus, quam dicta. Similique
            perferendis{' '}
          </Text>
        </Container>
      </Container>
    </>
  );
}
export default About;
