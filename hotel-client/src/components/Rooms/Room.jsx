import React, { memo }  from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
// import defaultImg from '../images/room-1.jpeg';
import Typography from "@mui/material/Typography";

const RoomContainer = styled("article")({
  // Add your Material UI styles here
});

const ImgContainer = styled("div")({
  // Add your Material UI styles here
});

const PriceTop = styled("div")({
  // Add your Material UI styles here
});

const RoomLink = styled(Link)({
  // Add your Material UI styles here
});

const Room = memo(({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <RoomContainer>
      <ImgContainer>
        <img src={`data:image/png;base64,${images[0]}` || defaultImg} alt="single room" />
        <PriceTop>
          <Typography variant="subtitle2">${price}</Typography>
          <Typography variant="body2">per night</Typography>
        </PriceTop>
        <RoomLink to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </RoomLink>
      </ImgContainer>
      <Typography variant="body1" className="room-info">{name}</Typography>
    </RoomContainer>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Room;
