import Link from "next/link";

const FleetTable = ({ fleet }) => {
  const { brand, model, year, doors, ac, transmission, fuel, price } = fleet;
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[250px]">
        <h2 className="text-center text-18 mt-8 p-4 bg-[#025464] text-[#f8f1f1]">
          <span className="font-bold text-28 ">${price}</span> / rent per day
        </h2>

        <table className="w-full text-center">
          <tbody>
            <tr>
              <td>Brand</td>
              <td>{brand}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{model}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{year}</td>
            </tr>
            <tr>
              <td>Doors</td>
              <td>{doors}</td>
            </tr>
            <tr>
              <td>AC</td>
              <td>{ac}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>{transmission}</td>
            </tr>
            <tr>
              <td>Fuel</td>
              <td>{fuel}</td>
            </tr>
          </tbody>
        </table>
        <Link href="/#booking">
          <button className="w-full p-8 text-[#F8F1F1] font-semibold text-20 uppercase mt-4  bg-[#025464] rounded-md border-2 border-[#025464] hover:text-[#025464] hover:bg-[#F8F1F1] transition-all shadow-[#02546452] shadow-lg hover:shadow-[#0254649a]">
            Reserve now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FleetTable;
