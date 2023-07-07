import Image from "next/image";
import Container from "../layout/Container";
import TextContainer from "../molecules/TextContainer";
import Link from "next/link";
import { motion } from "framer-motion";

const Download = () => {
  const titleDownload = {
    title: "Download our app to get most out of it.",
    text: "Whether you're planning a weekend getaway or embarking on a business trip, our app allows you to browse and book a wide selection of rental cars at your fingertips. Enjoy hassle-free reservations, flexible pickup and drop-off locations, and competitive pricing. Download our app now and embark on your next adventure with ease!",
  };

  const { title } = titleDownload;
  const { text } = titleDownload;

  return (
    <section className="relative">
      <Container>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          className="flex flex-col items-center 991:items-start my-56"
        >
          <div className="flex flex-col items-center text-center max-w-[600px] 991:text-left">
            <TextContainer title={title} text={text} />
            <div className="414:flex mt-8">
              <Link href="https://play.google.com/store" target="_blank">
                <Image
                  src="/images/googleplayapp.png"
                  width={0}
                  height={0}
                  alt="Google App"
                  sizes="100vw"
                  className="w-80 h-auto"
                />
              </Link>
              <Link href="https://www.apple.com/pt/app-store/" target="_blank">
                <Image
                  src="/images/appstore.png"
                  width={0}
                  height={0}
                  alt="App Store"
                  sizes="100vw"
                  className="w-[200px] h-auto"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
      <Image
        src="/images/mediaapp.png"
        alt="app"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-auto right-0 bottom-0 hidden 991:block -z-10 "
      />
    </section>
  );
};

export default Download;
