import React from "react";
import Styles from'../../styles/common/headings.module.scss'
import { Text } from "@mantine/core";
function Heading(props) {
    return(
        <>
        <Text className={Styles.heading}>{props.Heading}</Text>
        <Text className={Styles.subHeading}>{props.subHeading}</Text>
        </>
    )
}
export default Heading;