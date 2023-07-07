import TitlePages from "../components/atoms/TitlePages";
import Container from "../components/layout/Container";
import VehiclesCard from "../components/molecules/VehiclesCard";
import BookBanner from "../components/molecules/BookBanner";

const Vehicles = ({ fleet }) => {
  return (
    <section className="mt-40">
      <Container>
        <TitlePages title="Vehicles" />
        <div className="grid gap-12 1024:gap-16 grid-cols-2 1024:grid-cols-12 mt-24">
          {fleet.map((car, i) => {
            return <VehiclesCard key={i} car={car} />;
          })}
        </div>
      </Container>
      <BookBanner />
    </section>
  );
};
export default Vehicles;
