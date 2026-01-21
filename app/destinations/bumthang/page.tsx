import DestinationDetail from "@/components/DestinationDetail";
import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

export default function BumthangPage() {
  const destination = destinations.find(d => d.id === "bumthang");
  if (!destination) notFound();

  return (
    <DestinationDetail
      name={destination.name}
      altitude={destination.altitude}
      image={destination.image}
      fullDescription={destination.fullDescription}
      mustVisit={destination.mustVisit}
    />
  );
}
