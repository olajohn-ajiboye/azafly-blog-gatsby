import { motion } from 'framer-motion';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Box, Card, CardContent, CardHeader, Avatar } from '@material-ui/core';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            order: 1,
            display: 'flex',
            width: '85%',
            flexDirection: 'column',
            justifyContent: 'center',
            [theme.breakpoints.only('md')]: {
                marginLeft: '3vw',
                width: '100%'
            },
            [theme.breakpoints.down('sm')]: {
                padding: '10px 30px 10px 20px',
                marginLeft: '2vw',
                width: '100%'
            }
        },

        card: {
            border: 'none',
            boxShadow: 'none',
            width: '100%',
            marginTop: 20,
            marginBottom: 20,
            '&:hover': {
                '& $circle': {
                    color: 'white',
                    background: '#0D324D'
                },
                '& $hr': {
                    width: '200px',
                    borderBottom: '4px solid #0D324D',
                    opacity: '100%'
                },

                '& $heading': {
                    fontWeight: 600
                }
            }
        },

        title: {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '17%',
            textAlign: 'left',
            verticalAlign: 'top',
            textTransform: 'uppercase',
            color: '#4990A4',
            marginBottom: 10,
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                marginTop: 20
            }
        },
        content: {
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '33px',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#4990A4',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center !important',
                margin: 'auto',
                width: '100%',
                fontSize: '14px'
                // justifyContent: 'center !important'
            }
        },
        titleText: {
            fontWeight: 700,
            fontSize: '42px',
            lineHeight: '51px',
            letterSpacing: '-3%',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#0D324D',
            marginBottom: '40px',
            [theme.breakpoints.only('xs')]: {
                textAlign: 'center',
                fontSize: '28px',
                lineHeight: '34px',
                marginBottom: '20px !important'
            }
        },
        heading: {
            fontWeight: 400,
            fontSize: '26px',
            lineHeight: '32px',
            letterSpacing: '-3%',
            textAlign: 'left',
            verticalAlign: 'top',
            color: '#0D324D',

            [theme.breakpoints.only('xs')]: {
                textAlign: 'center !important',
                fontSize: '20px'
            }
        },

        circle: {
            background: 'transparent',
            border: '1px solid #0D324D',
            color: '#0D324D'
        },

        hr: {
            width: '100%',
            height: '25px',
            borderBottom: '1px solid #0D324D',
            transition: 'width 0.5s ease',
            marginBottom: 10,
            justifyContent: 'center !important',
            opacity: '40%',
            position: 'relative',

            [theme.breakpoints.only('xs')]: {
                width: '126px',
                margin: 'auto',
                justifyContent: 'center !important',
                padding: 10
            }
        }
    })
);

export const ServiceInfoBanner = () => {
    const classes = useStyles();

    const data = [
        { title: 'Lowest Fee', content: 'Our fee is the lowest in the market compare to any other', hoverWidth: '167px' },
        { title: ' Fast Transactions', content: 'The sky was cloudless and of a deep dark blue spectacle before.', hoverWidth: '267px' },
        { title: 'Safe & Secure', content: 'The sky was cloudless and of a deep dark blue spectacle before.', hoverWidth: '367px' }
    ];

    return (
        <motion.div>
            <Box className={classes.container}>
                <Typography className={classes.title}>Why choose us</Typography>
                <Typography className={classes.titleText}>Some of our advantages</Typography>
                {data.map((item, index) => {
                    return (
                        <Grid key={index} container spacing={2}>
                            <Card className={classes.card}>
                                <CardHeader
                                    action={
                                        <Avatar className={classes.circle}>
                                            <KeyboardArrowRightIcon />
                                        </Avatar>
                                    }
                                    title={<Typography className={classes.heading}>{item.title}</Typography>}
                                />
                                <CardContent>
                                    <Box clone order={{ xs: 2, sm: 2 }}>
                                        <Grid item xs={12}>
                                            <Typography variant='subtitle1' component='p' className={classes.content}>
                                                {item.content}
                                            </Typography>
                                        </Grid>
                                    </Box>

                                    <Grid item xs={12} sm={11} justifyContent='center'>
                                        <Box clone order={{ xs: 3, sm: 3 }}>
                                            <Box className={classes.hr} />
                                        </Box>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Box>
        </motion.div>
    );
};