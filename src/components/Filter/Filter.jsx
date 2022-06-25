import React from "react";
import { useDispatch } from "react-redux";
import { contactsFilter } from "../../redux/FilterSlice";
import Loader from "../Loader/Loader";
import { useGetContactsQuery } from "../../redux/slice";

import s from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const { data, isFetching } = useGetContactsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const changeFilter = (e) => {
    dispatch(contactsFilter(e.currentTarget.value));
  };

  return (
    <>
      {isFetching && <Loader />}
      {data && data.length !== 0 ? (
        <>
          <label className={s.wrapper}>
            Find contacts by name
            <input
              className={s.input}
              type="text"
              name="filter"
              onChange={changeFilter}
            />
          </label>
        </>
      ) : (
        <p className={s.text}> You have no saved contacts yet. </p>
      )}
    </>
  );
}

export default Filter;
