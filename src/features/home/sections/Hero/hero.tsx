import { Grid } from '@material-ui/core';
import { Box, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Illustration } from './illustration'
import { InfoBanner } from './info-banner';
import React from "react";
// import { BGIllustration1, BGIllustration2, BGIllustration3 } from 'components/backgrounds'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        homePageHeroMain: {
            width: '100%',
            position: 'relative',
        },
        homePageHeroInner: {
            flexGrow: 1,
            background: '#F7F8F9',
            padding: 50,
            [theme.breakpoints.only('xs')]: {
                padding: 5,
            }
        },
        homeBgllustration1: {
            position: 'absolute',
            left: 0,
            top: -128,
            pointerEvents: 'none',
            opacity: 0.7,
            height: '100%',
            [theme.breakpoints.only('xs')]: {
                left: -50,
                top: -90,
                height: 500
            }

        },
        homeBgllustration2: {
            position: 'absolute',
            right: 0,
            top: -128,
            pointerEvents: 'none',
            opacity: 0.5,
            height: '110%',
            [theme.breakpoints.down("sm")]: {
                display: 'none'
            }
        },
        homeBgllustration3: {
            position: 'absolute',
            left: 0,
            pointerEvents: 'none',
            bottom: 0,
            opacity: 0.6,
            [theme.breakpoints.down("sm")]: {
                display: 'none'
            }

        }

    }),
);

interface HomePageHeroSectionProps {
    frontMatter: any
}



export const HomePageHeroSection = ({ frontMatter }: HomePageHeroSectionProps) => {
    const classes = useStyles()

    return (
        <div className={classes.homePageHeroMain}>
            {/* <BGIllustration1 className={classes.homeBgllustration1} /> <BGIllustration2 className={classes.homeBgllustration2} /> <BGIllustration3 className={classes.homeBgllustration3} /> */}
            <Grid container justify="space-around" spacing={3} alignItems="center" className={classes.homePageHeroInner}>
                <Box clone order={{ xs: 2, sm: 1 }}>
                    <Grid item xs={12} sm={6}>
                        <InfoBanner frontMatter={frontMatter} />
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Illustration />
                    </Grid>
                </Box>
            </Grid>
        </div>


    );
}