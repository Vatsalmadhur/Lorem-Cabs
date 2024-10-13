import { Container, Text } from '@mantine/core';
import React from 'react';
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
        sx={{
          border: '2px solid red',
          minHeight: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Navbar />
        {/* Here position is relative to allow zIndex to take place */}
        <Container
          size="lg"
          sx={{
            zIndex: '3',
            border: '2px solid red',
            position: 'relative',
          }}
        >
          <Heading Heading="About Us" />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </Text>
        </Container>
      </Container>
    </>
  );
}

export default About;
