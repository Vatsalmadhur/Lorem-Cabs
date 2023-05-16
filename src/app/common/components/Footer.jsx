import React from 'react';
import propTypes from 'prop-types';
import Styles from '../../../styles/common/footer.module.scss'
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Image,
} from '@mantine/core';
// import { Facebook, WhatsApp } from '@mui/icons-material';


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 20,
    padding:20,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : '#FFD180',
        
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.fn.smallerThan('sm')]: {
      marginTop: 20,
    },
  },

  wrapper: {
    width: 160,
    [theme.fn.smallerThan('sm')]: {
      margin: '10px 0',
      textAlign: 'center',
    },
  },

  link: {
    display: 'flex',
alignItems: 'center',
justifyContent: 'center',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    // border:'2px solid red',
    textAlign:'center',
    fontFamily: `'Karla', sans-serif`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginBottom: theme.spacing.xs,
    },
  },
}));

function Footer({
  data = [
    {
      title: 'About',
      links: [
        { label: 'Features', link: '#' },
        { label: 'Pricing', link: '#' },
        { label: 'Support', link: '#' },
        { label: 'Forums', link: '#' },
      ],
    },
    {
      title: 'Project',
      links: [
        { label: 'Contribute', link: '#' },
        { label: 'Media assets', link: '#' },
        { label: 'Changelog', link: '#' },
        { label: 'Releases', link: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Join Discord', link: '#' },
        { label: 'Follow on Twitter', link: '#' },
        { label: 'Email newsletter', link: '#' },
        { label: 'GitHub discussions', link: '#' },
      ],
    },
  ],
}) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
            <Image src='/images/flow.png' width={100}/>
          <Text size="xs" color="dimmed" className={classes.description}>
            Lets Flow
          </Text>
        </div>
        <div className={classes.groups} >{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 Flow. All rights reserved.
        </Text>
        <Text color="dimmed" size="sm">
          Developed & Maintained by <a href="http://">The Development Studio</a>
        </Text>
      </Container>
    </footer>
  );
}

export default Footer;

Footer.defaultProps = {
  data: [
    {
      title: 'About',
      links: [
        { label: 'Features', link: '#' },
        { label: 'Pricing', link: '#' },
        { label: 'Support', link: '#' },
        { label: 'Forums', link: '#' },
      ],
    },
    {
      title: 'Project',
      links: [
        { label: 'Contribute', link: '#' },
        { label: 'Media assets', link: '#' },
        { label: 'Changelog', link: '#' },
        { label: 'Releases', link: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Join Discord', link: '#' },
        { label: 'Follow on Twitter', link: '#' },
        { label: 'Email newsletter', link: '#' },
        { label: 'GitHub discussions', link: '#' },
      ],
    },
  ],
};
Footer.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      links: propTypes.arrayOf(
        propTypes.shape({ label: propTypes.string, link: propTypes.string })
      ),
    })
  ),
};
