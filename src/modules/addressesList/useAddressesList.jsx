import { useSelector } from "react-redux";

const useAddressesList = () => {
  const { addresses } = useSelector((state) => state.addressesList);

  return { addresses };
};

export default useAddressesList;
