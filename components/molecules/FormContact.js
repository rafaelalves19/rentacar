import { SendMessage } from "../atoms/Icons";

const FormContact = () => {
  return (
    <form className="my-16 1024:mt-0 w-full">
      <label className="font-semibold text-18">
        Full Name <span className="text-[#E57C23]">*</span>
      </label>
      <input
        type="text"
        placeholder="Rafael Silva"
        className="w-full p-8 my-8"
        required
      />
      <label className="font-semibold text-18">
        Email <span className="text-[#E57C23]">*</span>
      </label>
      <input
        type="email"
        placeholder="example@example.com"
        className="w-full p-8 my-8"
        required
      />
      <label className="font-semibold text-18">
        Tell us about it <span className="text-[#E57C23]">*</span>
      </label>
      <textarea
        placeholder="Write here..."
        className="w-full h-60 p-8 my-8"
        required
      />
      <button className="flex bg-[#E57C23] border-2 border-[#E57C23] w-full text-18 font-bold text-[#F8F1F1] p-8 rounded-md items-center justify-center space-x-4 hover:text-[#E57C23] hover:bg-white transition-all shadow-[#e57e2352] shadow-lg hover:shadow-[#e57e239a]">
        <div className="w-16">
          <SendMessage />
        </div>
        <p>Send Message</p>
      </button>
    </form>
  );
};

export default FormContact;
