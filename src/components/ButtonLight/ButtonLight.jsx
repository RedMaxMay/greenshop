import React from "react";
import s from "./style.module.css";

export default function ButtonLight({ text }) {
  return <button className={s.button}>{text}</button>;
}
