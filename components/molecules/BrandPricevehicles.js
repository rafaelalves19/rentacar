import Stars from "../atoms/Stars";

const BrandPricevehicles = ({ brand, price }) => {
  return (
    <div className="flex justify-around">
      <div>
        <h2 className="text-24 font-semibold">{brand}</h2>
        <Stars />
      </div>
      <div className="text-end">
        <p className="text-28 font-semibold">{`$${price}`}</p>
        <p>per day</p>
      </div>
    </div>
  );
};

export default BrandPricevehicles;
