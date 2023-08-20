import React from "react";
import EventItem from "./EventItem";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className="list">
      {items.map((event) => (
        <EventItem
          
          id={event.id}
          title={event.title}
          image={event.image}
          location={event.location}
          date={event.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
