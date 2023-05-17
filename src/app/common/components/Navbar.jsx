import { createStyles,Image, Header, Menu, Group, Center, Burger, Container, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { IconChevronDown } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
 
  header: { backgroundColor:'#FFF3E0', alignContent: 'center' },

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
    fontFamily:'Karla',

    '&:hover': {
     cursor: 'pointer'
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

 function Navbar({ links =[{link: '/about', label: 'About'},{link: '/about', label: 'Contact'},{link: '/about', label: 'Lorem'}]}) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
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
    <Header className={classes.header} height={56} mb={30}
    sx={{
    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    // backdropFilter: "blur( 4)",
    // WebkitBackdropFilter: "blur( 4 )",
    // // borderRadius: 30,
      }}
    >
      <Container size='lg'  >
        <div className={classes.inner}>
          {/* <MantineLogo size={28} inverted /> */}
          <Image src='/images/flow.png' width={130} />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
}
export default Navbar;