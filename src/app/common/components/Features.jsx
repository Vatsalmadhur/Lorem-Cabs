import { Container, Flex } from "@mantine/core";
import React from "react";
import Toggler from "./Toggler";
import FeatureCard from "./Cards/FeatureCard";
// import featureCardData from '../containers/featureCardData'
import { driverData,riderData } from "../containers/featureCardData";
import { useState } from "react";
function Features(){

    const [active, setActive] = useState('Driver');

    return(
        <>
        <Container size="xl"   sx={{ border: '2px solid green' }}>
        <Flex direction="column"   sx={{ border: '2px solid green' }}>
            <Toggler active={active} setActive={setActive}/>
            <Flex wrap="wrap" justify="center">
            {(active === 'Driver' ? driverData:riderData).map((val) => (
            <FeatureCard
              source={val.source}
              heading={val.heading}
              subHeading={val.subHeading}
            />
          ))}
          </Flex>
        </Flex></Container>
        
        </>

    )
}
export default Features;