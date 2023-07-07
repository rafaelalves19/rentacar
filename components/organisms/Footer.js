import Container from "../layout/Container";
import InfoContact from "../molecules/InfoContact";
import FooterCompany from "../molecules/FooterCompany";

const Footer = () => {
  return (
    <Container>
      <footer className="text-16 text-center grid grid-cols-2 gap-32 640:grid-cols-12 mb-24 640:gap-16 640:text-left  leading-relaxed ">
        <div className="flex flex-col items-center col-span-2 640:col-span-6 640:items-start 1140:col-span-3">
          <h2 className="mb-8">
            <span className="font-bold text-24">Rent</span> a Car
          </h2>
          <p>
            We offer a big range of vehicles for all your driving needs. We have
            the perfect car for you!
          </p>
          <InfoContact />
        </div>
        <FooterCompany />
        <div className="col-span-2 640:col-span-6 1140:col-span-3">
          <h2 className="uppercase font-bold text-24 mb-8">Working hours</h2>
          <ul className="space-y-6">
            <li>Mon - Frid: 9:00 AM - 9:00PM</li>
            <li>Sat: 9:00 AM - 19:00 PM</li>
            <li>Sun Closed</li>
          </ul>
        </div>
        <div className="col-span-2 640:col-span-6 1140:col-span-3">
          <h2 className="font-bold uppercase text-24 mb-8">Subscription</h2>
          <p>Subscribe your email address for latest news & updates.</p>
          <form className="flex flex-col mt-8">
            <input
              type="email"
              placeholder="exemple@exemple.com"
              className="p-8 bg-slate-200 rounded-md"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="p-8 bg-[#E57C23] mt-4 rounded-md text-[#F8F1F1] uppercase font-bold text-18 border-[#E57C23] border-2  hover:text-[#E57C23] hover:bg-inherit transition-all cursor-pointer"
            />
          </form>
        </div>
      </footer>
    </Container>
  );
};
export default Footer;
