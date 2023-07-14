import React from "react";
import { styled } from "@mui/material/styles";
import Room from "./Room";
import Typography from "@mui/material/Typography";

const EmptySearchContainer = styled("div")({
  // Add your Material UI styles here
});

const RoomsListContainer = styled("section")({
  // Add your Material UI styles here
});

const RoomsListCenter = styled("div")({
  // Add your Material UI styles here
});

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <EmptySearchContainer>
        <Typography variant="h6">
          Unfortunately no rooms matched your search parameters
        </Typography>
      </EmptySearchContainer>
    );
  }

  return (
    <RoomsListContainer>
      <RoomsListCenter>
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </RoomsListCenter>
    </RoomsListContainer>
  );
};

export default RoomsList;
