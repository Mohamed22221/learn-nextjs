import React from "react";
import Button from "../ui/Button";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import DateIcon from "../icons/DateIcon";
import LocationIcon from "../icons/locationIcon";

const EventItem = (props) => {
  const { title, id, image, date, location } = props;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const handelReadDate = new Date(date).toLocaleDateString("en-US", options);
  const formatedLocation = location.replace(", ", "\n");

  return (
    <li key={id} className="item">
      <img src={"/" + image} alt="" />
      <div className="content">
        <div>
          <h2>{title}</h2>
          <div className="date">
            <DateIcon />
            <time className="date">{handelReadDate}</time>
          </div>
          <div className="address">
            <LocationIcon />
            <address className="address">{formatedLocation}</address>
          </div>
        </div>
        <Button link={`events/${id}`}>
          {" "}
          <span>Explore Event</span>
          <span className="icon">
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
