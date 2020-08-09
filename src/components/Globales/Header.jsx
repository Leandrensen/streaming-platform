import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='home'>
                        <HomeIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Wellcome to the forum
                    </Typography>
                    <Button component={Link} to={'/login'} color='inherit'>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;