import React from "react";
import { withRoomConsumer } from "../../context.jsx";
import Loading from "../Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { Box, CssBaseline } from "@mui/material";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return (
      <div style={{flex:"display" ,alignItems:"center", justifyContent:"center" ,backgroundColor:"#fff"}}>
        <CssBaseline />
        <Loading />
      </div>
    );
  }
  return (
    
    <>
      
      <RoomsFilter rooms={rooms} />
     
      <RoomsList rooms={sortedRooms} />
      </>
    
    
  );
}

export default withRoomConsumer(RoomsContainer);
