import DestinationDetail from "@/components/DestinationDetail";
import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

export default function MerakSaktengPage() {
  const destination = destinations.find(d => d.id === "merak-sakteng");
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
