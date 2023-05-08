import Head from 'next/head';
import Styles from '../src/styles/pages/home.module.scss'
import { Container, Flex } from '@mantine/core';
import { Image } from '@mantine/core';
import {autoImg,logo} from '../public/images/image'
import { Button } from '@mantine/core';
import { Text } from '@mantine/core';
import Blob from '../src/app/common/blob';
export default function Home() {
  return (
    <>
      <Head>
        <title>Flow cabs</title>
      </Head>

      <Container size="100%" pl="10%" pr="10%" className={Styles.body} sx={{ border: '2px solid red' }}>
        <Flex wrap="wrap-reverse" gap={40} sx={{ border: '2px solid green' }}>
          <Container size="xs"  mt={50} sx={{ border: '2px solid blue',zIndex:3 }}>
            <Flex ml={20}  justify="space-between" >
              <Image src={logo} height={50} width={100} />
              <Button size="xs" className={Styles.grayBtn}>Login</Button>
            </Flex>
            <Container>
              <Text size="2.5rem" className={Styles.heading}>Getting late for work?</Text>
              <Text size="0.9rem" ml={5} fw={600} className={Styles.subHeading}>
                Book flow and never miss a chance!
              </Text>
              <Text size="1.1rem" mt="lg" pr="sm" fw={700} className={Styles.abtText}>
                Flow is dedicated to making transportation more accessible and
                affordable for everyone, starting from rickshaws. With the
                support of 100,000 autos in Pune and Pimpri Chinchwad region,
                Flow is making it easier than ever to get around the city with a
                safe, reliable, and affordable ride.
              </Text>
            </Container>
            <Flex  mt={100} justify="space-between">
              <Button variant='outline' className={Styles.outlineBtn}>Download app</Button>
              <Button sx={{textAlign:'center'}} className={Styles.orangeBtn}>Sign-up <br /> (as Driver)</Button>
            </Flex>
          </Container>
          <Container sx={{ border: '2px solid blue' }}>
            <Image
              src={autoImg}
              height={500}
              width={500}
            />
          </Container>
        </Flex>
        <Blob/>
      </Container>
    </>
  );
}
