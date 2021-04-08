import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const HomeStyles = makeStyles((theme) => ({
    root: {
        height: '92vh',
        width: '100vw',
        fontFamily: 'Comfortaa',
        font: 'Comfortaa',
        overflowY: 'hidden',
        overflowX: 'hidden'
    },
    functions: {
        backgroundColor: '#D9C7F3',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    doctor: {
        marginTop: '3rem',
        width: '70%',
    },
    header: {
        height: '8vh',
        display: 'flex'
    },
    actions: {
        display: 'contents',
        marginTop: '1.5rem',
        marginRight: '1 rem',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        height: theme.spacing(7),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 3),
    },
    login: {
        backgroundColor: '#FFFFF',
    },
    title: {
        fontFamily: 'Comfortaa',
        font: 'Comfortaa',
        marginTop: 'revert'
    },
    subtitle: {
        fontFamily: 'Comfortaa',
        font: 'Comfortaa',
        color: '#6B6B6B'
    },
}));

export default HomeStyles;