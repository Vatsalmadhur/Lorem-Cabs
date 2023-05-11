import { Container } from "@mantine/core";
import React from "react";
import Blob from "./blob";
import Styles from '../../../styles/common/Background.module.scss'
function Background(){
    return(
        <>
    
        <Container size="100%" className={Styles.bgContainer}>
            <Blob/>
        </Container>
            </>
    )
}
export default Background;