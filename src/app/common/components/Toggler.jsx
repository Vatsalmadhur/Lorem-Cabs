import React, { useState } from 'react';
import { Flex } from '@mantine/core';
import { Button } from '@mantine/core';
import Styles from '../../../styles/common/Toggler.module.scss';
function Toggler({active,setActive}) {
  const btns = ['Driver', 'Rider'];
  return (
    <>
      <Flex justify="center" m="sm" className={Styles.outerBox}>
        <Flex justify="center" p={10} gap={70} className={Styles.innerBox}>
          {btns.map((btn) => (
            <Button
              size="md"
             className={(() => 
                active === btn ? `${Styles.active}` : `${Styles.common}`)()}
              radius="lg"
              onClick={() => setActive(btn)}
            >
              {btn}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* <Flex
        gap={40}
        p={10}
        wrap="wrap"
        align="center"
        justify="center"
        sx={{ border: '2px solid green' }}
        className={(() => 
          active === val ? <FeatureCard/> : `${Styles.common}`)()}
      /> */}
          
        

    </>
  );
}
export default Toggler;
