import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
      <PropagateLoader />
    </div>
  );
};

export default Loader;
