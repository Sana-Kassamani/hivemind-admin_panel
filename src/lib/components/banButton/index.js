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

export const UnbanButton = ({ userId, isDisabled }) => {
  const dispatch = useDispatch();

  function unban() {
    const data = {
      userId: userId,
      state: false,
    };
    dispatch(banUser({ data }));
  }
  return (
    <CustomButton text={"Unban"} isDisabled={isDisabled} onClick={unban} />
  );
};
