import React, { useState } from 'react';
import { Flex } from '@mantine/core';
import { Button } from '@mantine/core';
import Styles from '../../../styles/common/Toggler.module.scss';
function Toggler() {
  // const getbg = ;
  const btns = ['Driver', 'Rider'];
  const [active, setActive] = useState('Driver');
  return (
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
  );
}
export default Toggler;
