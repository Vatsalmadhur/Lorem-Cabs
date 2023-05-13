import Head from 'next/head';
import Styles from '../src/styles/pages/home.module.scss';
import { Container, Flex} from '@mantine/core';
import { Image } from '@mantine/core';
// import autoImg from '/images/auto.svg'
import { Button } from '@mantine/core';
import { Text } from '@mantine/core';
import Blob from '../src/app/common/components/blob';
import Heading from '../src/app/common/components/Headings';
import Card from '../src/app/common/components/Cards/Card';
import cardData from '../src/app/common/containers/cardData'
import Toggler from '../src/app/common/components/Toggler';
import FeatureCard from '@common/components/Cards/FeatureCard';
import featureCardData from '../src/app/common/containers/featureCardData';
import Banner from '../src/app/common/components/Banner';
import Features from '../src/app/common/components/Features';
import Navbar from '../src/app/common/components/Navbar';
import { useState } from 'react';
// import Footer from '@common/components/Footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>Flow cabs</title>
      </Head>

      {/* <Navbar/> */}

      <Container
        size="100%"
        pl="10%"
        pr="10%"
        className={Styles.body}
        sx={{ border: '2px solid red' }}
      >
        <Flex
          wrap="wrap-reverse"
          // gap={10}
          justify="center"
          sx={{
            border: '2px solid green',
            width: '100%',
            height: 'auto',
            minHeight: '100vh',
          }}
        >
          <Container
            size="xs"
            mt={50}
            sx={{ border: '2px solid blue', zIndex: 3 }}
          >
            <Flex ml={20} justify="space-between">
              <Image src="/images/flow.png" p="xs" height={50} width={140} />
              <Button size="xs" m="md" className={Styles.grayBtn}>
                Login
              </Button>
            </Flex>
            <Container>
              {/* <Text className={Styles.heading}>Getting late for work?</Text>
              <Text  ml={5} fw={600} className={Styles.subHeading}>
                Book flow and never miss a chance!
              </Text> */}
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
            <Flex mt={100} justify="space-between">
              <Button variant="outline" className={Styles.outlineBtn}>
                Download app
              </Button>
              <Button sx={{ textAlign: 'center' }} className={Styles.orangeBtn}>
                Sign-up <br /> (as Driver)
              </Button>
            </Flex>
          </Container>
          <Container size="xs" sx={{ border: '2px solid blue' }}>
            <Image src="/images/auto.svg" fit="contain" />
          </Container>
        </Flex>
        <Blob />
        <Container size="xl" sx={{ border: '2px solid red' }}>
          {/* <Text className={Styles.heading}>Lets Flow</Text>
        <Text className={Styles.subHeading}>Ride Sharing Reimagined</Text> */}
          <Heading Heading="Lets Flow" subHeading="Ride Sharing Reimagined" />
        </Container>
        <Container size="xl">
          {cardData.map((val)=>(
            <Card
            Heading={val.Heading}
            subHeading={val.subHeading}
            source={val.source}
            direction={val.direction}/>
          ))}
          {/* <Card
            Heading="Easy to use"
            subHeading="Flow is designed with the user in mind, offering an effortless and seamless experience from start to finish"
            source="/images/snap.svg"
          />
          <Card
            Heading="Beat the surge"
            subHeading="Say goodbye to peak hour price hikes, enjoy stable fares with no surge pricing."
            source="/images/autoOrange.svg"
            direction="row-reverse"
          />
          <Card
            Heading="Ride now"
            subHeading="Whether you're running errands, commuting to work, or traveling to your friend's place, Flow connects you with reliable drivers in minutes"
            source="/images/girlWithMobile.svg"
          /> */}
        </Container>
        <Container size="lg">
          <Heading
            Heading="Ready, Set, Flow!"
            subHeading="Make Everyday Count"
          />
        </Container>

        {/* <Toggler /> */}
        {/* <Flex
          gap={40}
          p={10}
          wrap="wrap"
          align="center"
          justify="center"
          sx={{ border: '2px solid green' }}
        >

          
          {featureCardData.map((val) => (
            <FeatureCard
              source={val.source}
              heading={val.heading}
              subHeading={val.subHeading}
            />
          ))}

        </Flex> */}
        <Features/>

        <Container sx={{ border: '2px solid green' }} size="lg">
          <Flex justify="space-around" wrap="wrap">
            <Container sx={{ border: '2px solid green' }} size="md">
              <Image
                src="/images/flowbooking.webp"
                sx={{ mixBlendMode: 'darken' }}
                height="900px"
                width="400px"
              />
            </Container>
            <Flex
              sx={{ border: '2px solid green', width: '400px' }}
              align="center"
            >
              <Text className={Styles.textOfMobile}>
                Backed by 10000+ auto drivers
              </Text>
            </Flex>
          </Flex>
        </Container>
        <Banner text="We thrive to empower mobility, make cities better, and put people first." />

        {/* <Footer/> */}
      </Container>
    </>
  );
}
