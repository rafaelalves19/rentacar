import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import "../styles/globals.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const fleet = [
    {
      price: "45",
      brand: "Audi",
      model: "A1 S-Line",
      year: "2012",
      doors: "2/3",
      ac: "yes",
      transmission: "manual",
      fuel: "gasoline",
      image: "/images/cars/audia1.png",
    },
    {
      price: "37",
      brand: "VW",
      model: "Golf 6",
      year: "2008",
      doors: "4/5",
      ac: "yes",
      transmission: "manual",
      fuel: "diesel",
      image: "/images/cars/vwgolf.png",
    },
    {
      price: "30",
      brand: "Toyota",
      model: "Camry",
      year: "2006",
      doors: "4/5",
      ac: "yes",
      transmission: "automatic",
      fuel: "hybrid",
      image: "/images/cars/toyotacamry.png",
    },
    {
      price: "35",
      brand: "BMW",
      model: "320 ModernLine",
      year: "2012",
      doors: "4/5",
      ac: "yes",
      transmission: "Manual",
      fuel: "Diesel",
      image: "/images/cars/bmw320.png",
    },
    {
      price: "50",
      brand: "Mercedes",
      model: "Benz GLK",
      year: "2006",
      doors: "4/5",
      ac: "yes",
      transmission: "Manual",
      fuel: "Diesel",
      image: "/images/cars/benz.png",
    },
    {
      price: "25",
      brand: "VW",
      model: "Passat CC",
      year: "2008",
      doors: "4/5",
      ac: "yes",
      transmission: "Automatic",
      fuel: "Gasoline",
      image: "/images/cars/vwpassat.png",
    },
  ];

  const router = useRouter();

  //console.log(router);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <div className="flex flex-col items-center m-auto w-full">
        <Header />
        <AnimatePresence initial={true} mode="wait">
          <motion.main
            key={router.pathname}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full overflow-x-hidden"
          >
            <Component fleet={fleet} {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
