import Head from 'next/head';
import Styles from '../src/styles/pages/home.module.scss';
import { Box, Container, Flex } from '@mantine/core';
import { Image } from '@mantine/core';
// import autoImg from '/images/auto.svg'
import { Button } from '@mantine/core';
import { Text } from '@mantine/core';
import Blob from '../src/app/common/components/blob';
import Heading from '../src/app/common/components/Headings';
import Card from '../src/app/common/components/Cards/Card';
import cardData from '../src/app/common/containers/cardData';
import Banner from '../src/app/common/components/Banner';
import Features from '../src/app/common/components/Features';
import Navbar from '../src/app/common/components/Navbar';
import Footer from '@common/components/Footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>Flow cabs</title>
      </Head>
      <Box
      className={Styles.body}
      >
      <Navbar />
      <Container
        size="100%"
        pl="12%"
        pr="12%"
        // sx={{ border: '2px solid red',width: '100vw' }}
      >
        <Flex
          wrap="wrap-reverse"
          // gap={10}
          justify="center"
          align="center"
          sx={{
            // border: '2px solid green',
            width: '100%',
            height: 'auto',
            minHeight: '80vh',
          }}
        >
          <Container
            size="xs"
            mt={50}
            sx={{
              // border: '2px solid blue',
              zIndex: 3,
            }}
          >
            <Flex m={0} justify="space-between">
              <Image src="/images/flow.png"  height={50} width={140} />
              <Button size="xs" m="md" className={Styles.grayBtn}>
                Login
              </Button>
            </Flex>
            <Container m={0} p={0}>
              <Heading
                Heading="Getting late for work?"
                subHeading="Book flow and never miss a chance!"
              />

              <Text
                size="1.1rem"
                mt="lg"
                pr="sm"
                fw={700}
                className={Styles.abtText}
              >
                Flow is dedicated to making transportation more accessible and
                affordable for everyone, starting from rickshaws. With the
                support of 100,000 autos in Pune and Pimpri Chinchwad region,
                Flow is making it easier than ever to get around the city with a
                safe, reliable, and affordable ride.
              </Text>
            </Container>
            <Flex mt={50} justify="space-between">
              <Button variant="outline" className={Styles.outlineBtn}>
                Download app
              </Button>
              <Button sx={{ textAlign: 'center' }} className={Styles.orangeBtn}>
                Sign-up <br /> (as Driver)
              </Button>
            </Flex>
          </Container>
          <Container
            // size="xs"
            sx={
              {
                // border: '2px solid blue',
                zIndex: 3,
              }
            }
          >
            <Image src="/images/auto.svg" sx={{minWidth:'500px',width:'auto'}} height='500px'  />
          </Container>
        </Flex>
        <Blob />
        <Container
          size="xl"
          p="xl"
          //  sx={{ border: '2px solid red' }}
        >
          <Heading  Heading="Lets Flow" subHeading="Ride Sharing Reimagined" />
        </Container>
        <Container size="xl" mb={100}>
          {cardData.map((val) => (
            <Card
              Heading={val.Heading}
              subHeading={val.subHeading}
              source={val.source}
              direction={val.direction}
            />
          ))}
        </Container>
        <Container size="xl" p='xl'>
          <Heading
            Heading="Ready, Set, Flow!"
            subHeading="Make Everyday Count"
          />
        </Container>
        <Features />

        <Container
          // sx={{ border: '2px solid green' }}
          size="xl"
        >
          <Flex justify="space-around" wrap="wrap">
            <Container
              // sx={{ border: '2px solid green' }}
              size="md"
            >
              <Image
                src="/images/flowbooking.webp"
                sx={{ mixBlendMode: 'darken' }}
                height="900px"
                width="400px"
              />
            </Container>
            <Flex
              sx={{
                // border: '2px solid green',
                width: '400px',
              }}
              align="center"
            >
              <Text className={Styles.textOfMobile}>
                Backed by 10000+ auto drivers
              </Text>
            </Flex>
          </Flex>
        </Container>
        <Banner text="We thrive to empower mobility, make cities better, and put people first." />

      </Container>
        <Footer />
      </Box>
    </>
  );
}
