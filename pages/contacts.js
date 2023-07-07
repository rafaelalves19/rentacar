import { Pin } from "../components/atoms/Icons";
import TitlePages from "../components/atoms/TitlePages";
import Container from "../components/layout/Container";
import InfoContact from "../components/molecules/InfoContact";
import TextContainer from "../components/molecules/TextContainer";
import Location from "../components/atoms/Location";
import FormContact from "../components/molecules/FormContact";
import BookBanner from "../components/molecules/BookBanner";
import { motion } from "framer-motion";

const Contact = () => {
  const titleContact = {
    title: "Need additional information?",
    text: "We'd love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out. Our dedicated team is here to assist you and ensure that your experience with us is exceptional.",
  };

  const { title } = titleContact;
  const { text } = titleContact;

  return (
    <motion.section
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      className="mt-40"
    >
      <Container>
        <TitlePages title="Contact" />
        <div className="text-center flex flex-col items-center justify-center text-16 1024:flex-row 1024:text-left 1024:items-start mt-16 gap-8">
          <div className="max-w-[500px]">
            <TextContainer title={title} text={text} />
            <div className="my-8 flex flex-col items-center 1024:items-start">
              <InfoContact />
              <Location />
            </div>
          </div>
          <FormContact />
        </div>
      </Container>
      <BookBanner />
    </motion.section>
  );
};

export default Contact;
