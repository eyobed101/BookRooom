import React from "react";
import { Grid, Typography, Button, Box, Slide } from "@mui/material";
// import myteam from "../assets/hero.png";
import Carousel from 'react-material-ui-carousel'

import useStyles from "../styles/styles";
import { room1, room2, HeroImage, room4 } from "../assets/rooms";

const heroImages = [room1, room2, HeroImage, room4];

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
          Discover, Book, Stay: Your Ethiopian Adventure.
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
          Discover the beauty of Ethiopia and book your dream accommodations
          with ease on Bergo. Our user-friendly platform offers a wide
          range of options, from luxurious hotels to cozy guesthouses, all 
          tailored to meet your preferences and budget.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            Book Now
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <Carousel>
            {heroImages.map((image, index) => (
              <img key={index} src={image} alt="home" className={classes.largeImage} />
            ))}
          </Carousel>
          {/* <img src={room1} alt="My Team" className={classes.largeImage} /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
