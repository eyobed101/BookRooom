import React from "react";
import RoomsContainer from "../components/Rooms/RoomsContainer";
import { RoomProvider } from "../context";
import { CssBaseline } from "@mui/material";

const Rooms = () => {
  return (
    <div style={{display:"flex" ,flexDirection:'column',alignItems:"center", justifyContent:"center" , marginTop:"60px", width:"100%"}}>
      <CssBaseline />
    <RoomProvider>
      <RoomsContainer />
    </RoomProvider>
    </div>
  );
};

export default Rooms;
