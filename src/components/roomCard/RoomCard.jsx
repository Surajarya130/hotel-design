import React from "react";
import rooms from "../../assets/datas/data";
import Button from "react-bootstrap/Button";

import "./roomCardStyle.css";

function RoomCard() {
  return (
    <div className="roomSection" id="Popular">
      <h3>Rooms</h3>
      <div className="roomsContainer">
        {rooms.map((room, index) => (
          <div className="roomBlock" key={index}>
            <img src={room.img} alt="room1" />
            <div className="roomSmInfo">
              <h5>{room.name}</h5>
              <p>
                {room.areaIcon} : {room.area}
              </p>
              <p>
                {room.peopleIcon} : {room.people}
              </p>
              <p>
                {room.bedIcon} : {room.bedSetting}
              </p>
              <span>Nonrefundable, Breakfast Incl.</span>
              <Button className="bookBtn" variant="primary" size="lg">
                Book now for {room.price}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomCard;
