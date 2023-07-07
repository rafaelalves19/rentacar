import Image from "next/image";
import { Quotes } from "../atoms/Icons";
import Container from "../layout/Container";
import Review from "../molecules/Review";
import TextContainer from "../molecules/TextContainer";
import { motion } from "framer-motion";

const Reviews = () => {
  const titleReviews = {
    title: "Reviewed by People",
    subtitle: "Client's Testimonials",
    text: "Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our services and results, and they're eager to share their positive experiences with you.",
  };

  const { title } = titleReviews;
  const { subtitle } = titleReviews;
  const { text } = titleReviews;

  const reviewsList = [
    {
      name: "Maria Joana",
      local: "Lisboa",
      image: "/images/person1.jpeg",
      comment:
        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable",
    },
    {
      name: "Paulo Almeida",
      local: "Porto",
      image: "/images/person2.webp",
      comment:
        "The car was in great condition and made out trip even better. Highly recommend for this car rental website",
    },
  ];
  return (
    <section>
      <Container>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center mb-16"
        >
          <div className="mt-20 text-center flex flex-col items-center max-w-[700px] text-16">
            <TextContainer title={title} subtitle={subtitle} text={text} />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col 991:flex-row gap-8 mt-16"
          >
            {reviewsList.map((review, i) => {
              return (
                <Review
                  key={i}
                  text={review.comment}
                  name={review.name}
                  local={review.local}
                  image={review.image}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
export default Reviews;
