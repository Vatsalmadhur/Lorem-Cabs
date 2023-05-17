import React from "react";
import Styles from'../../../styles/common/headings.module.scss'
import { Container, Text } from "@mantine/core";
function Heading(props) {
    return(
        <>
        <Container size="xl" m={0} p={0}>
        <Text className={Styles.heading}>{props.Heading}</Text>
        <Text className={Styles.subHeading}>{props.subHeading}</Text>
        </Container>
        </>
    )
}
export default Heading;