"use client";
import { FcInfo } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";
import Image from "next/image";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";

type Validation = {
  Product_Name: string;
  Brand: string;
  Price: number;
  Item_Weight: number;
  Lenght: number;
  Breadth: number;
  Width: number;
  Description: string;
};

export function ProductPage() {
  const [fileList, setFileList] = useState([]);
  const fileOnDrop = (e: any) => {
    e.preventDefault();
    const newfile = e.target.files[0];
    if (newfile) {
      const UpadateList: any = [...fileList, newfile];
      setFileList(UpadateList);
      console.log(UpadateList);
    }
  };
  const dropOnfile = (e: any) => {
    e.preventDefault();
    const newfile = e.dataTransfer.files[0];
    if (newfile) {
      const UpadateList: any = [...fileList, newfile];
      setFileList(UpadateList);
      console.log(UpadateList);
    }
  };
  const dragFiles = (e: any) => {
    e.preventDefault();
  };

  const ValidationSchema: ZodType<Validation> = z.object({
    Product_Name: z.string().min(1, { message: "Product name required" }),
    Brand: z.string().min(1, "Brand name required"),
    Price: z.number().min(1, "pride is required"),
    Item_Weight: z.number().min(1, "weight is required"),
    Lenght: z.number().min(1, "length is required"),
    Breadth: z.number().min(1, "breadth is required"),
    Width: z.number().min(1, "width is required"),
    Description: z.string().min(10, "description is required min 10 character"),
  });

  const { register, handleSubmit } = useForm<Validation>({
    resolver: zodResolver(ValidationSchema),
  });

  const submitData = (data: Validation) => {
    console.log("Working", data);
  };
  const remove = (index: number) => {
    const upadtelist = fileList.filter((item, id: number) => {
      return index !== id;
    });
    setFileList(upadtelist);
  };

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

      <form className={style.modal_body} onSubmit={handleSubmit(submitData)}>
        <div className={style.product_info}>
          <div className={style.product}>
            <div>
              <Label value="Product Name" />
            </div>
            <TextInput
              type="text"
              placeholder="Apple iMac 27”"
              className={style.textInput}
              {...register("Product_Name")}
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
              {...register("Brand")}
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
              {...register("Price")}
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
              {...register("Item_Weight")}
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
              {...register("Lenght")}
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
              {...register("Breadth")}
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
              {...register("Width")}
            />
          </div>
        </div>

        <div className={style.description}>
          <Label htmlFor="comment" value="Description" />
          <Textarea
            id="comment"
            rows={6}
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
            {...register("Description")}
          />
        </div>

        <div className={style.selling_info}>
          <Label value="Selling Type" />
          <div className={style.checkBox} id="checkbox">
            <div className={style.checkButton}>
              <Checkbox id="Store" defaultChecked className={style.ck_btn} />
              <Label htmlFor="Store">In-store only</Label>
            </div>
            <div className={style.checkButton}>
              <Checkbox id="Online" className={style.ck_btn} />
              <Label htmlFor="Online">Online selling only</Label>
            </div>
            <div className={style.checkButton}>
              <Checkbox id="Both" className={style.ck_btn} />
              <Label htmlFor="Both">Both in-store and online</Label>
            </div>
          </div>
        </div>

        <div className={style.image_conatiner}>
          <Label className={style.img_prd_name} value="Product Images" />
          <div className={style.product_Images}>
            {fileList
              ? fileList.map((item: any, index: number) => {
                  return (
                    <div key={index} className={style.arr_index_img}>
                      <img
                        src={URL.createObjectURL(item)}
                        className={style.index_1_arr}
                        alt="mainimage"
                      />
                      <RiDeleteBin6Line
                        onClick={() => remove(index)}
                        className={style.img_trash}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>

        <div className={style.dropdown_container}>
          <div
            className={style.dropdown}
            onDrop={dropOnfile}
            onDragOver={dragFiles}
          >
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
                onChange={fileOnDrop}
              />
            </Label>
          </div>
        </div>
        <div className={style.submit_btn}>
          <Button className={style.sub_btn} type="submit">
            Update Product
          </Button>
          <Button className={style.del_btn}>
            <RiDeleteBin6Line className={style.del_icon} />
            <span className={style.del_name}>Delete</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
