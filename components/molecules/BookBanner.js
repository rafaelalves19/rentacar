import { Phone } from "../atoms/Icons";

const BookBanner = () => {
  return (
    <div className="font-bold flex flex-col items-center justify-center text-center text-32 h-[200px] text-[#F8F1F1] bg-[#025464] w-full my-40 p-8">
      <h2>Book a car by getting in touch with us</h2>
      <div className=" text-[#E57C23] flex items-center justify-center mt-8">
        <div className="w-16 mr-4">
          <Phone />
        </div>
        <p>&#40;123 &#41; - 456 - 789</p>
      </div>
    </div>
  );
};
export default BookBanner;
