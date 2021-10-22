import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { routeRequest } from "../../../modules/route";

const DEFAULT_STATUS = "Стандарт";

const useOrderForm = () => {
  const dispatch = useDispatch();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState(DEFAULT_STATUS);

  const handleFromChange = useCallback(
    (event) => setFrom(event.target.value),
    []
  );
  const handleToChange = useCallback((event) => setTo(event.target.value), []);
  const handleStatusChange = useCallback((status) => setStatus(status), []);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(routeRequest({ address1: from, address2: to }));
  };

  return {
    from,
    handleFromChange,
    to,
    handleToChange,
    status,
    handleStatusChange,
    handleSubmit,
  };
};

export default useOrderForm;
