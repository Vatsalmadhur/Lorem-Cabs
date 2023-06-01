import {
  createStyles,
  Image,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem,
  Box
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
// import { IconChevronDown } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: '#FFF3E0',
    alignContent: 'center',
    width: '100vw',
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.black,
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
    fontFamily: 'Karla',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

const links = [
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact' },
  { link: '/about', label: 'Lorem' },
];
function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Link
              to={link.link}
              className={classes.link}
              // onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header className={classes.header} height={56} pb={70} pt={10}>
      <Container size='xl' >
        <div className={classes.inner}>
          <Image src="/images/flow.png" width={130} />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#000"
          />
        </div>
      </Container>
      <Container
        m={0}
        sx={{
          zIndex: '4',
          position: 'absolute',
          backgroundColor: '#FFF3E0',
          textDecoration:'none',
          // backgroundColor:'red',
          width: '100%',
          textAlign: 'center',
          fontSize: '1.5rem',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection :'column',
        }}
        // p={50}
      >
        {opened &&
          links.map((link) => <Box p={10} m={10}  ><Link href={link.link} >{link.label}</Link></Box>)}
      </Container>
    </Header>
  );
}
export default Navbar;
