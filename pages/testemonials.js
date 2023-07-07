import Container from "../components/layout/Container";
import TitlePages from "../components/atoms/TitlePages";
import Reviews from "../components/organisms/Reviews";
import BookBanner from "../components/molecules/BookBanner";

const Testemonials = () => {
  return (
    <section className="mt-40">
      <Container>
        <TitlePages title="Testemonials" />
        <div>
          <Reviews />
        </div>
      </Container>
      <BookBanner />
    </section>
  );
};

export default Testemonials;
