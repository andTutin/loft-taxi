import { useSelector } from "react-redux";

const useAddressesList = () => {
  const { addresses } = useSelector((state: any) => state.addressesList);

  return { addresses };
};

export default useAddressesList;
