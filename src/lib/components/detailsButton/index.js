import React from "react";
import CustomButton from "../button";
import { useNavigate } from "react-router-dom";

const DetailsButton = ({ apiaryId }) => {
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(`/apiaries/details/${apiaryId}`);
  };
  return (
    <CustomButton
      text={"Details"}
      isDisabled={false}
      onClick={navigateToDetails}
    />
  );
};

export default DetailsButton;
