import { Container, Flex } from "@mantine/core";
import React from "react";
import { Image } from "@mantine/core";
import { Text } from "@mantine/core";
import Styles from '../../../styles/common/card.module.scss'
// import { Container} from '@mantine/core';


function Card(props){
    return(
        <>
        <Container size="md" m="md" sx={{border:'2px solid red'}}>
            <Flex wrap="wrap" justify="space-around" gap={10} direction={props.direction}>
                <Image width="300" height={300} fit="contain" radius="48%"  sx={{border:'2px solid green',mixBlendMode:"darken"}} src={props.source}/>
                <Container size="xs" p="lg" sx={{border:'2px solid green'}}>
                    <Text className={Styles.cardHeader}>
                        {props.Heading}
                    </Text>
                    <Text className={Styles.cardSubHeader}>{props.subHeading}</Text>
                </Container>
            </Flex>
            
        </Container>
        </>
    )
}
export default Card;