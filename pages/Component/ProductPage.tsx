"use client";
type Props = {};
import style from "@/styles/style.module.css";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";
export default function ProductPage({}: Props) {
  return (
    <div className={style.main}>
      <div className={style.modal}>
        <div className={style.modal_header}>
          <div className={style.closebtn}>
            <h1 className={style.heading}>Add Product</h1>
          </div>
          <div className={style.close}>
            <div className={style.cross}>
              <HiX className={style.vector} />
            </div>
          </div>
        </div>
        <div className={style.modal_body}>
          <div className={style.row1}>
            <div className={style.input_field}>
              <Label
                className={style.prd_name}
                htmlFor="product"
                value="Product Name"
              />
              <TextInput className={style.input_txt} id="base" type="text" />
            </div>
            <div className={style.select}>
              <Label
                className={style.select_name}
                htmlFor="product"
                value="Select Language"
              />
              <div className={style.select_txt}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
