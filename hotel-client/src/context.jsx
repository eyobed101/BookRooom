import React, { useState, useEffect } from "react";
import axios from "axios";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8800/api/hotels")
      .then((response) => {
        let rooms = formatData(response.data);
        let featuredRooms = rooms.filter((room) => room.featured === true);
        let maxPrice = Math.max(...rooms.map((item) => item.price));
        let maxSize = Math.max(...rooms.map((item) => item.size));

        setRooms(rooms);
        setFeaturedRooms(featuredRooms);
        setSortedRooms(rooms);
        setLoading(false);
        setPrice(maxPrice);
        setMaxPrice(maxPrice);
        setMaxSize(maxSize);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatData = (datas) => {
    let tempItems = datas.map((item) => {
      let id = item._id;
      let images = item.images.map((image) => image);
      let room = { ...item, images, id };
      console.log(room);
      return room;
    });
    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case "type":
        setType(value);
        break;
      case "capacity":
        setCapacity(parseInt(value));
        break;
      case "price":
        setPrice(parseInt(value));
        break;
      case "minSize":
        setMinSize(parseInt(value));
        break;
      case "maxSize":
        setMaxSize(parseInt(value));
        break;
      case "breakfast":
        setBreakfast(value);
        break;
      case "pets":
        setPets(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    filterRooms();
  }, [type, capacity, price, minSize, maxSize, breakfast, pets]);

  const filterRooms = () => {
    let tempRooms = [...rooms];
    let tempCapacity = parseInt(capacity);
    let tempPrice = parseInt(price);

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (tempCapacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= tempCapacity);
    }

    tempRooms = tempRooms.filter((room) => room.price <= tempPrice);

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    setSortedRooms(tempRooms);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        getRoom,
        handleChange,
      }}
      
    >
      
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
