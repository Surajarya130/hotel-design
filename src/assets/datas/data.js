// Used seperate data, here in future we can do api calling and export data as per requirement. This keep code clean and scalable

import Crop54Icon from "@mui/icons-material/Crop54";
import PeopleIcon from "@mui/icons-material/People";
import BedIcon from "@mui/icons-material/Bed";
import dblComfyBed from "../images/dblBedTwo.jpg";
import singleBed from "../images/singleBed.jpg";
import doubleTwo from "../images/dblBed1.jpg";
import doubleBig from "../images/fancyBed.jpg";

let rooms = [
  {
    name: "Double Standard Room",
    people: 2,
    area: "16sqm",
    bedSetting: "1 Queen Bed 2 Sep Beds",
    price: 180,
    areaIcon: <Crop54Icon />,
    peopleIcon: <PeopleIcon />,
    bedIcon: <BedIcon />,
    img: dblComfyBed,
  },
  {
    name: "Comfort Single Room",
    people: 2,
    area: "21sqm",
    bedSetting: "1 Queen Bed 2 Sep Beds",
    price: 220,
    areaIcon: <Crop54Icon />,
    peopleIcon: <PeopleIcon />,
    bedIcon: <BedIcon />,
    img: singleBed,
  },
  {
    name: "Double Comfy Room",
    people: 2,
    area: "24sqm",
    bedSetting: "1 Queen Bed 2 Sep Beds",
    price: 240,
    areaIcon: <Crop54Icon />,
    peopleIcon: <PeopleIcon />,
    bedIcon: <BedIcon />,
    img: doubleTwo,
  },
  {
    name: "Double big Room",
    people: 2,
    area: "29sqm",
    bedSetting: "1 Queen Bed 2 Sep Beds",
    price: 280,
    areaIcon: <Crop54Icon />,
    peopleIcon: <PeopleIcon />,
    bedIcon: <BedIcon />,
    img: doubleBig,
  },
];

export default rooms;
