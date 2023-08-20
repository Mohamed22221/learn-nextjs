import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

export default function HomePage() {
  const feturedEvents = getFeaturedEvents()
  return (
    <div>
      <EventList items={feturedEvents}/>
    </div>
  );
}
