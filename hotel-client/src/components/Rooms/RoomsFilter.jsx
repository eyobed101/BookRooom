import React, { useContext } from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import { RoomContext } from "../../context";
import Typography from "@mui/material/Typography";
import { room1, room2, HeroImage, room4, home3 } from "../../assets/rooms";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

const heroImages = [room1, room2, HeroImage, room4];

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const FilterContainer = styled("section")({
  display:"flex",
  flexDirection:'wrap',
  padding: "5rem",
  marginTop:"5rem",
  marginRight:"5rem", marginLeft:"5rem" , marginBottom:"5rem",
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"rgba(0, 0, 0, .1)",
  borderRadius:"20px",
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.5)'
  // Add your Material UI styles here
});

const FilterForm = styled("form")({
  // Add your Material UI styles here
  width: "60vw",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns : "repeat(auto-fit, minmax(202px, 1fr))",
  gridRowGap: "2rem",
  gridColumnGap: "40px",
});

const FormGroup = styled("div")({
  // Add your Material UI styles here
  textTransform: "capitalize",
});

const Select = styled("select")({
  // Add your Material UI styles here
});

const Input = styled("input")({
  // Add your Material UI styles here
});

const Checkbox = styled("input")({
  // Add your Material UI styles here
});

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  //  get unique types
  let types = getUnique(rooms, "type"); // check the array for types property
  // add all
  types = ["all", ...types];
  // map to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // get people
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  //  controlled inputs
  return (
       
     <Box sx={{width:'100vw', minHeight:"600px",display:"flex", flexDirection:'column',alignItems:"center", justifyContent:"center"}}>
      <img src={home3} alt="rooms" width="100%" height="600px"/>
    
    <FilterContainer className="section">
      <Typography variant="h6" gutterBottom>
        search rooms
      </Typography>
      <FilterForm>
        {/* select type */}
        <FormGroup>
          <label htmlFor="type">room type</label>
          <Select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
          >
            {types}
          </Select>
        </FormGroup>
        {/* end of select type */}

        {/* guests  */}
        <FormGroup>
          <label htmlFor="capacity">guests</label>
          {/* returns a string */}
          <Select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
          >
            {people}
          </Select>
        </FormGroup>
        {/* guests end */}

        {/* room price */}
        <FormGroup>
          <label htmlFor="price">room price ${price}</label>
          <Input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
          />
        </FormGroup>
        {/* end of room price */}

        {/* size */}
        <FormGroup>
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <Input
              type="number"
              name="minSize"
              value={minSize}
              id="size"
              onChange={handleChange}
              className="size-input"
            />
            <Input
              type="number"
              name="maxSize"
              value={maxSize}
              id="size"
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </FormGroup>
        {/* end of size */}

        {/* extras */}
        <FormGroup>
          <div className="single-extra">
            <label htmlFor="breakfast">Breakfast</label>
            <Checkbox
              type="checkbox"
              className="breakfast"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
          </div>
          <div className="single-extra">
            <label htmlFor="pets">Pets</label>
            <Checkbox
              type="checkbox"
              className="pets"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
          </div>
        </FormGroup>
        {/* end of extras */}
      </FilterForm>
    </FilterContainer>
    </Box>   
    
  );
};

export default RoomsFilter;
