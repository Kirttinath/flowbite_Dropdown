"use client";
import { FcInfo } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";
import style from "@/styles/style.module.css";
import {
  Label,
  TextInput,
  Select,
  Textarea,
  Checkbox,
  FileInput,
  Button,
} from "flowbite-react";

export function ProductPage() {
  return (
    <div className={style.modal}>
      <div className={style.modal_header}>
        <div className={style.modal_name}>
          <div className={style.text}>Add Product</div>
        </div>
        <div className={style.close_btn}>
          <IoClose className={style.close} />
        </div>
      </div>
      <div className={style.modal_body}>
        <div className={style.product_info}>
          <div className={style.product}>
            <div>
              <Label value="Product Name" />
            </div>
            <TextInput
              type="text"
              placeholder="Apple iMac 27”"
              className={style.textInput}
            />
          </div>
          <div className={style.select}>
            <div className={style.info}>
              <Label value="Select Language" />
              <FcInfo className={style.info_img} />
            </div>
            <Select id="countries" required className={style.select_opt}>
              <option>Electronics</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
        </div>

        <div className={style.product_value}>
          <div className={style.product}>
            <div>
              <Label value="Brand" />
            </div>
            <TextInput
              type="text"
              placeholder="Apple"
              className={style.textInput}
            />
          </div>
          <div className={style.product}>
            <div>
              <Label value="Price" />
            </div>
            <TextInput
              type="text"
              placeholder="$2999"
              className={style.textInput}
            />
          </div>
        </div>

        <div className={style.item_about}>
          <div className={style.product}>
            <div>
              <Label value="Item Weight(kg)" />
            </div>
            <TextInput
              type="text"
              placeholder="12"
              className={style.textInput}
            />
          </div>
          <div className={style.product}>
            <div>
              <Label value="Length(cm)" />
            </div>
            <TextInput
              type="text"
              placeholder="105"
              className={style.textInput}
            />
          </div>
          <div className={style.product}>
            <div>
              <Label value="Breadth(cm)" />
            </div>
            <TextInput
              type="text"
              placeholder="15"
              className={style.textInput}
            />
          </div>
          <div className={style.product}>
            <div>
              <Label value="Width(cm)" />
            </div>
            <TextInput
              type="text"
              placeholder="23"
              className={style.textInput}
            />
          </div>
        </div>

        <div className={style.description}>
          <Label htmlFor="comment" value="Description" />
          <Textarea
            id="comment"
            placeholder="Standard glass,
            3.8GHz 8-core 10th-generation Intel Core i7 processor,
            Turbo Boost up to 5.0GHz,
            16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory,
            256GB SSD storage,
            Gigabit Ethernet,
            Magic Mouse 2,
            Magic Keyboard-Us"
            className={style.textArea}
          />
        </div>

        <div className={style.selling_info}>
          <Label value="Selling Type" />
          <div className={style.checkBox} id="checkbox">
            <div className={style.checkButton}>
              <Checkbox id="Store" defaultChecked />
              <Label htmlFor="Store">In-store only</Label>
            </div>
            <div className={style.checkButton}>
              <Checkbox id="Online" />
              <Label htmlFor="Online">Online selling only</Label>
            </div>
            <div className={style.checkButton}>
              <Checkbox id="Both" />
              <Label htmlFor="Both">Both in-store and online</Label>
            </div>
          </div>
        </div>

        <div className={style.image_conatiner}>
          <Label className={style.img_prd_name} value="Product Images" />
          <div className={style.product_Images}></div>
        </div>

        <div className={style.dropdown_container}>
          <div className={style.dropdown}>
            <Label htmlFor="dropzone-file" className={style.dropzone}>
              <div className={style.drop_style}>
                <svg
                  className={style.svg}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className={style.desc}>
                  <span className={style.bold}>Click to upload</span> or drag
                  and drop
                </p>
                <p className={style.img_type}>
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <FileInput
                id="dropzone-file"
                accept="image/*"
                className="hidden"
              />
            </Label>
          </div>
        </div>
        <div className={style.submit_btn}>
          <Button className={style.sub_btn} type="submit">
            Update Product
          </Button>
          <Button className={style.del_btn}>
            <RiDeleteBin6Line />
            <span />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
