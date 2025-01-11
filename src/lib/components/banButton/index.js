import React from "react";
import CustomButton from "../button";
import { useDispatch } from "react-redux";
import { banUser } from "../../redux/slices/users/thunks/switchBan";

export const BanButton = ({ userId, isDisabled }) => {
  const dispatch = useDispatch();

  function ban() {
    const data = {
      userId: userId,
      state: true,
    };
    dispatch(banUser({ data }));
  }
  return <CustomButton text={"Ban"} isDisabled={isDisabled} onClick={ban} />;
};
