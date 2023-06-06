// Here used material ui icons and google apis

import React, { useState, useMemo } from "react";
import leftArrIcon from "../../assets/images/leftArrIcon.svg";
import heroImg from "../../assets/images/hotel1.jpg";
import hotel2 from "../../assets/images/hotel2.jpg";
import hotel3 from "../../assets/images/hotel3.jpg";
import hotel4 from "../../assets/images/hotel4.jpg";
import hotel5 from "../../assets/images/hotel5.jpg";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BathroomIcon from "@mui/icons-material/Bathroom";
import KeyIcon from "@mui/icons-material/Key";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import TimerIcon from "@mui/icons-material/Timer";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BedIcon from "@mui/icons-material/Bed";
import KingBedIcon from "@mui/icons-material/KingBed";
import DryIcon from "@mui/icons-material/Dry";
import DeskIcon from "@mui/icons-material/Desk";
import IronIcon from "@mui/icons-material/Iron";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import RunCircleIcon from "@mui/icons-material/RunCircle";

// import { Gallery } from "react-grid-gallery";
import "./hotelHero.css";

function HotelHero() {
  const [value, setValue] = useState(0);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.gooleMapApi,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="hotelContainer" id="Properties">
      <div className="navArr">
        <img src={leftArrIcon} alt="left-arrow" />
      </div>

      <div className="imageSection">
        {/* <Gallery images={images} /> */}

        <div className="heroImgSection">
          <div className="heroImg">
            <img src={heroImg} alt="heroImg" />
          </div>
          <div className="restImgs">
            <img src={hotel2} alt="hotel2" />
            <img src={hotel3} alt="hotel3" />
            <img src={hotel4} alt="hotel4" />
            <img src={hotel5} alt="hotel5" />
          </div>
        </div>
      </div>

      <div className="introSection">
        <div className="metaInfo">
          <h2>Hotel JW Marriot, Mumbai, IN</h2>
          <p>5 Star hotel in Kolaba, Mumbai Centeral, 40097</p>
        </div>
        <div className="ratingInfo">
          <div className="ratingType">
            <h4>Excellent</h4>
            <p>1200 reviews</p>
          </div>
          <div className="ratingNum">9.5</div>
        </div>
      </div>

      <div className="amentiesSection" id="Attractions">
        <Paper square>
          <Tabs
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Tab label="Overview" />
            <Tab label="Rooms" />
            <Tab label="Amenties" />
            <Tab label="Policies" />
          </Tabs>

          {value === 0 ? (
            <>
              <h5>Property Overview</h5>
              <div className="tab1Content gMapBlock">
                <div className="featuresBlock">
                  <div className="ovwBlock">
                    <p>
                      <WifiIcon /> Free Wifi
                    </p>
                    <p>
                      <AcUnitIcon /> Air Condiitoner
                    </p>
                    <p>
                      <BathroomIcon /> Private Bathroom
                    </p>
                    <p>
                      <KeyIcon /> Key Card Access
                    </p>
                  </div>

                  <div className="ovwBlock">
                    <p>
                      <LocalParkingIcon /> Free Parking
                    </p>
                    <p>
                      <TimerIcon /> 24hr Desk
                    </p>
                  </div>
                </div>
                <div className="mapBlock">
                  {!isLoaded ? (
                    <h1>Loading...</h1>
                  ) : (
                    <GoogleMap
                      mapContainerClassName="map-container"
                      center={center}
                      zoom={10}
                    >
                      <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
                    </GoogleMap>
                  )}
                </div>
              </div>
            </>
          ) : value === 1 ? (
            <div className="tab1Content">
              <h5>Rooms Overview</h5>
              <p>
                <SingleBedIcon /> Single Bed
              </p>
              <p>
                <BedIcon /> Double Bed
              </p>
              <p>
                <KingBedIcon /> King Bed
              </p>
            </div>
          ) : value === 2 ? (
            <div className="tab1Content">
              <h5>Amenties</h5>
              <p>
                <DryIcon /> Dryer
              </p>
              <p>
                <DeskIcon /> Computer Desk
              </p>
              <p>
                <IronIcon /> Iron
              </p>
            </div>
          ) : value === 3 ? (
            <div className="tab1Content">
              <h5>Policies</h5>
              <p>
                <WatchLaterIcon /> Check-In : 12:00 PM
              </p>
              <p>
                <RunCircleIcon /> Checkout : 11:00 AM
              </p>
            </div>
          ) : (
            ""
          )}
        </Paper>
      </div>
    </div>
  );
}

export default HotelHero;
