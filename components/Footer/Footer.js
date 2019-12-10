/*eslint-disable*/
import React from "react";
import Link from 'next/link';

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
            <Link>
              <a
                href="./Intro"
                className={classes.block}
                target="_blank"
              >
                Intro
              </a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
             <Link>
              <a
                href="./howto"
                className={classes.block}
                target="_blank"
              >
                How to
              </a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link>
              <a
                href="./about"
                className={classes.block}
                target="_blank"
              >
                About
              </a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>

          &copy; {1900 + new Date().getYear()} , made with {"4Makers "} 
          <Favorite className={classes.icon} /> {" "}
          <a
            href="https://www.creative-tim.com?ref=njsmk-footer"
            className={aClasses}
            target="_blank"
          >
            Creative Tim
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
