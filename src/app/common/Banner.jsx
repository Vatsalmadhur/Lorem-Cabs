import { Container,Text } from "@mantine/core";
import React from "react";
import Styles from '../../styles/common/Banner.module.scss'
function Banner(props) {
    return(
        <>
        <Container size="xl"  m="xl" className={Styles.bannerBox} >
            <Text className={Styles.bannerText}>{props.text}</Text>
        </Container>
        </>
    )
}
export default Banner;