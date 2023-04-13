import React from "react";
import s from "./style.module.css";


export default function CategoryItemSkeleton() {
  return (
    <div className={s.category}>
      <div className={s.img_wrap}>
        <div className={s.skeleton_image}></div>
      </div>
      <div className={s.title}>
        <div className={s.skeleton_title}></div>
      </div>
    </div>
  );
}
