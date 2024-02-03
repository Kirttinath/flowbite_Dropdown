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
  CheckBoxVal: Array<string>;
  FileImage: FileList;
};

export function ProductPage() {
  const [fileList, setFileList] = useState([]);
  const fileOnDrop = (e: any) => {
    e.preventDefault();
    const newfile = e.target.files[0];
    if (newfile) {
      const UpdateList: any = [...fileList, newfile];
      setFileList(UpdateList);
      setValue("FileImage", UpdateList);
      console.log(UpdateList);
    }
  };
  const dropOnfile = (e: any) => {
    e.preventDefault();
    const newfile = e.dataTransfer.files[0];
    if (newfile) {
      const UpdateList: any = [...fileList, newfile];
      setFileList(UpdateList);
      setValue("FileImage", UpdateList);
      console.log(UpdateList);
    }
  };
  const dragFiles = (e: any) => {
    e.preventDefault();
    const newfile = e.dataTransfer.files[0];
    if (newfile) {
      const UpdateList: any = [...fileList, newfile];
      setFileList(UpdateList);
      setValue("FileImage", UpdateList);
      console.log(UpdateList);
    }
  };

  const ValidationSchema: ZodType<Validation> = z.object({
    Product_Name: z.string().min(1, { message: "Product name required" }),
    Brand: z.string().min(1, { message: "Brand name required" }),
    Price: z
      .number({ invalid_type_error: "Price required" })
      .min(100, { message: "Minimum Price is ₹100" }),
    Item_Weight: z
      .number({ invalid_type_error: "Item weight required" })
      .min(5, { message: "Minimum 5kg weight required" }),
    Lenght: z
      .number({ invalid_type_error: "Item length required" })
      .min(30, { message: "Minimum 30cm length required" }),
    Breadth: z
      .number({ invalid_type_error: "Item Breadth required" })
      .min(20, { message: "Minimum 20cm breadth required" }),
    Width: z
      .number({ invalid_type_error: "Item width required" })
      .min(5, { message: "Minimum 5cm width required" }),
    Description: z
      .string()
      .min(15, { message: "Description is required min 15 characters" }),
    CheckBoxVal: z
      .array(z.string(), {
        invalid_type_error: "Please select at least one checkbox.",
      })
      .refine((data) => data.length > 0, {
        message: "Please select at least one checkbox.",
      }),
    FileImage: z
      .custom<FileList>()
      .refine((FileList: any) => FileList.length > 0, {
        message: "Image Required",
      }),
  });

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<Validation>({
    resolver: zodResolver(ValidationSchema),
  });

  const submitData = (data: Validation) => {
    console.log("Submit Data working", data);
  };
  const remove = (index: number) => {
    const updatelist: any = fileList.filter((item, id: number) => {
      return index !== id;
    });
    setFileList(updatelist);
    setValue("FileImage", updatelist);
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
              <Label htmlFor="base" value="Product Name" />
            </div>
            <TextInput
              type="text"
              id="base"
              placeholder="Apple iMac 27”"
              className={style.textInput}
              {...register("Product_Name")}
              helperText={
                <>
                  {errors.Product_Name && (
                    <span className="flex text-red-600">
                      {errors.Product_Name.message}
                    </span>
                  )}
                </>
              }
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
              id="base"
              placeholder="Apple"
              className={style.textInput}
              {...register("Brand")}
              helperText={
                <>
                  {errors.Brand && (
                    <span className="flex text-red-600">
                      {errors.Brand.message}
                    </span>
                  )}
                </>
              }
            />
          </div>
          <div className={style.product}>
            <div>
              <Label value="Price" />
            </div>
            <TextInput
              type="number"
              id="base"
              placeholder="$2999"
              className={style.textInput}
              {...register("Price", { valueAsNumber: true })}
              helperText={
                <>
                  {errors.Price && (
                    <span className="flex text-red-600">
                      {errors.Price.message}
                    </span>
                  )}
                </>
              }
            />
          </div>
        </div>

        <div className={style.item_about}>
          <div className={style.product}>
            <div>
              <Label value="Item Weight(kg)" />
            </div>
            <TextInput
              type="number"
              id="base"
              placeholder="12"
              className={style.textInput}
              {...register("Item_Weight", { valueAsNumber: true })}
              helperText={
                <>
                  {errors.Item_Weight && (
                    <span className="flex text-red-600">
                      {errors.Item_Weight.message}
                    </span>
                  )}
                </>
              }
            />
          </div>
          <div className={style.product}>
            <div>
              <Label value="Length(cm)" />
            </div>
            <TextInput
              type="number"
              id="base"
              placeholder="105"
              className={style.textInput}
              {...register("Lenght", { valueAsNumber: true })}
              helperText={
                <>
                  {errors.Lenght && (
                    <span className="flex text-red-600">
                      {errors.Lenght.message}
                    </span>
                  )}
                </>
              }
            />
          </div>
          <div className={style.product}>
            <div>
              <Label value="Breadth(cm)" />
            </div>
            <TextInput
              type="number"
              id="base"
              placeholder="15"
              className={style.textInput}
              {...register("Breadth", { valueAsNumber: true })}
              helperText={
                <>
                  {errors.Breadth && (
                    <span className="flex text-red-600">
                      {errors.Breadth.message}
                    </span>
                  )}
                </>
              }
            />
          </div>
          <div className={style.product}>
            <div>
              <Label value="Width(cm)" />
            </div>
            <TextInput
              type="number"
              id="base"
              placeholder="23"
              className={style.textInput}
              {...register("Width", { valueAsNumber: true })}
              helperText={
                <>
                  {errors.Width && (
                    <span className="flex text-red-600">
                      {errors.Width.message}
                    </span>
                  )}
                </>
              }
            />
          </div>
        </div>

        <div className={style.description}>
          <Label htmlFor="comment" value="Description" />
          <Textarea
            id="comment"
            rows={6}
            // placeholder="Standard glass,
            // 3.8GHz 8-core 10th-generation Intel Core i7 processor,
            // Turbo Boost up to 5.0GHz,
            // 16GB 2666MHz DDR4 memory,
            // Radeon Pro 5500 XT with 8GB of GDDR6 memory,
            // 256GB SSD storage,
            // Gigabit Ethernet,
            // Magic Mouse 2,
            // Magic Keyboard-Us"
            className={style.textArea}
            {...register("Description")}
            helperText={
              <>
                {errors.Description && (
                  <span className="flex text-red-600">
                    {errors.Description.message}
                  </span>
                )}
              </>
            }
          />
        </div>

        <div className={style.selling_info}>
          <Label value="Selling Type" />
          <div className={style.checkBox} id="checkbox">
            <div className={style.checkButton}>
              <Checkbox
                id="Store"
                className={style.ck_btn}
                {...register("CheckBoxVal")}
              />
              <Label htmlFor="Store">In-store only</Label>
            </div>
            <div className={style.checkButton}>
              <Checkbox
                id="Online"
                className={style.ck_btn}
                {...register("CheckBoxVal")}
              />
              <Label htmlFor="Online">Online selling only</Label>
            </div>
            <div className={style.checkButton}>
              <Checkbox
                id="Both"
                className={style.ck_btn}
                {...register("CheckBoxVal")}
              />
              <Label htmlFor="Both">Both in-store and online</Label>
            </div>
          </div>
          {errors.CheckBoxVal && (
            <span className="flex text-red-600">
              {errors.CheckBoxVal.message}
            </span>
          )}
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
                {...register("FileImage")}
                onChange={fileOnDrop}
              />
            </Label>
          </div>
        </div>
        {errors.FileImage && (
          <span className="flex text-red-600">Image is required !</span>
        )}
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
