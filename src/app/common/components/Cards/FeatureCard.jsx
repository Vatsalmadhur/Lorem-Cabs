import React from 'react';
import { Card, Image, Text, Group } from '@mantine/core';
import Styles from "../../../../styles/common/Card/FeatureCard.module.scss"
function FeatureCard(props) {
  return (
    <>
      <Card shadow="sm" m="md" padding="lg" radius="md"  className={Styles.cardBody} sx={{width:"300px",height:"400px"}}>
        <Card.Section >
          <Image
            src={props.source}
            height={160}
          />
        </Card.Section>

        <Group position="apart"  mt="md" mb="xs">
          <Text className={Styles.cardHeader}>{props.heading}</Text>
        </Group>

        <Text className={Styles.cardSubHeader} size="sm" >
          {props.subHeading}
        </Text>
      </Card>
    </>
  );
}
export default FeatureCard;
