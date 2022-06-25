import React from "react";
import { useSelector } from "react-redux";
import { useGetContactsQuery } from "../../redux/slice";
import ContactItem from "../ContactItem/ContactItem";
import Loader from "../Loader/Loader";
import s from "./ContactList.module.css";

function ContactList() {
  const filter = useSelector((state) => state.filter.filter);
  const { data, isFetching } = useGetContactsQuery();

  const visibleContacts = data?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isFetching && <Loader />}

      <ul className={s.list}>
        {visibleContacts?.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
