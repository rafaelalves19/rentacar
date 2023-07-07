import Image from "next/image";
import { Quotes } from "../atoms/Icons";

const Review = ({ text, name, local, image }) => {
  return (
    <div className="p-12 rounded-xl px-10 py-16 border-[1px] shadow-xl bg-[#f8f1f1] max-w-[500px] ">
      <h2 className="text-22 font-semibold mb-16">{`"${text}"`}</h2>
      <div className="flex justify-between ">
        <div className="flex gap-8 items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-full h-full"
              alt="person"
            ></Image>
          </div>
          <div>
            <p className="text-22 font-bold mb-4">{name}</p>
            <p className="text-18">{local}</p>
          </div>
        </div>
        <div className="w-36 h-auto text-[#E57C23] hidden 414:block ">
          <Quotes />
        </div>
      </div>
    </div>
  );
};
export default Review;
