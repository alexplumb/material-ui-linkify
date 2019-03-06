import React from 'react';
import MuiLinkify from '../../components/MuiLinkify';

export default () => (
  <MuiLinkify>
    See source code at https://github.com/alexplumb/material-ui-linkify
  </MuiLinkify>
);

/*
import {
  AppBar, Toolbar, Typography, Button, Grid, Card,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Banner, StaticBanner } from '../../index';

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
});

@withStyles(styles)
export default class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.flex}
            >
              Dashboard
            </Typography>

            <Button color="inherit" onClick={this.handleOpenSmall}>
              Static Banner 1
            </Button>

            <Button color="inherit" onClick={this.handleOpenLarge}>
              Static Banner 2
            </Button>
          </Toolbar>
        </AppBar>

        <div className={classes.appBarSpacer} />

        <StaticBanner />

        <Grid container justify="center">
          <Grid item xs={3}>
            <Card>
              <Banner
                icon={<div />}
                iconProps={{
                  className: classes.avatar,
                }}
                label="This is an example of a banner that can be embedded anywhere in your page"
                buttonLabel="Other"
                buttonProps={{
                  variant: 'contained',
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }
}
*/
