import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
import Room from "./Room";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  Button,
  useMediaQuery,
  CardContent,
  Box,

} from '@mui/material';
import Grid from '@mui/material/Grid/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton/IconButton';
import Icon from '@mui/material/Icon/Icon';
import { Label } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import useStyles from "../../styles/styles";


// const EmptySearchContainer = styled("div")({
//   // Add your Material UI styles here
//   textAlign: "center",
//   textTransform: "capitalize",
//   margin: "2rem 0",
//   padding: "1rem",
//   letterSpacing:"10px"
// });

// const RoomsListContainer = styled("section")({
//   // Add your Material UI styles here
//   width:"80%"
// });

// const RoomsListCenter = styled("div")({
//   // Add your Material UI styles here
// });

// const useStyles = makeStyles((theme) => ({
//   roomMain: {
    
//     display: 'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     width:'w-screen%'
    
    
  
    
//   },
//   roomsBox: {
//     display: 'flex',
//     flexWrap:'wrap',
//     justifyContent: 'center',
//     alignItems:'center',
//     margin:'auto',
   
//     gap: '1rem',
    
//   },
// }));

const TiltedCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  animation: `3s ease-in-out infinite alternate`,

  // transition: 'transform 0.3s ease',

  '&:hover': {
    // transform: 'rotateX(3deg)', // Adjust the degree as per your preference
    transform:
      '{ 0% { transform: rotateX(-3deg); } 50% { transform: rotateX(3deg); } 100% { transform: rotateX(-3deg); } }', // Adjust the degree as per your preference
    backgroundColor: '#F9F6EE',
    cursor: 'pointer',
  },
}));

const ImageCard = ({ image, description }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  

  return (
    <TiltedCard>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          width: 300,
          height: 350,
          border: '0.5px solid #c7c7c7',
          boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
          borderRadius: '2xl',

          ':hover': { backgroundColor: '#F9F6EE', cursor: 'pointer' },
        }}
      >
        <div style={{ margin: '10px', height: '60vh', borderRadius: 'xl' }}>
          <CardMedia
            sx={{
              width: 'full',
              height: '20vh',
              textAlign: 'center',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
            component="img"
            src={`data:image/png;base64,${image}`}
          />
        </div>
        <CardHeader
          title={description}
          sx={{ fontSize: '20px', padding: '16px', fontWeight: '4px' }}
        />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <CardContent>manage now</CardContent>
          <CardActions>
            <IconButton onClick={() => handleDelete()}>
              <Icon color="error">delete</Icon>
            </IconButton>
            {/* <Button onClick={handleDelete}>Delete</Button> */}
          </CardActions>
        </div>
      </Card>
    </TiltedCard>
  );
};


const RoomsList = ({rooms}) => {
  const classes = useStyles();
  

  return (
    <Box className={classes.heroBox}>
      {rooms.length === 0 ? (
        <Typography variant="h6">
          Unfortunately no rooms matched your search parameters
        </Typography>
      ) : (
        
          <div className={classes.roomsBox}>
            {rooms.map((image, index) => (
              <ImageCard
                key={index}
                image={image.images[0]}
                description={image.name}
              />
            ))}
          </div>
        
      )}
    
    </Box>
  );
  
};



export default RoomsList;
