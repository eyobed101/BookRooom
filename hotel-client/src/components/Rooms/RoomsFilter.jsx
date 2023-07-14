import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { RoomContext } from "../../context";
import Typography from "@mui/material/Typography";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const FilterContainer = styled("section")({
  // Add your Material UI styles here
});

const FilterForm = styled("form")({
  // Add your Material UI styles here
});

const FormGroup = styled("div")({
  // Add your Material UI styles here
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
    <FilterContainer>
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
  );
};

export default RoomsFilter;
