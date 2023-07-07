import { Car } from "../atoms/Icons";

const SpecificationsVehicles = ({ text }) => {
  return (
    <div className="flex flex-col items-center my-8 text-18">
      <div className="w-14">
        <Car />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default SpecificationsVehicles;
