"use client";
import style from "@/styles/style.module.css";
import { HiX } from "react-icons/hi";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { Select, Textarea, FileInput } from "flowbite-react";

type Props = {};
const FormPage = (props: Props) => {
  return (
    <div className={style.page}>
      <div className={style.firstContainer}>
        <div className={style.leftBox}>
          <div className={style.text}>Add Product</div>
        </div>
        <div className={style.rightBox}>
          <HiX className={style.button} />
        </div>
      </div>
      <div className={style.body}>
        <div className={style.secondContainer}>
          <div className={style.Product}>
            <div>
              <Label value="Product Name" />
            </div>
            <TextInput
              type="text"
              placeholder="Apple iMac 27”"
              className={style.textInput}
            />
          </div>
          <div className={style.Select}>
            <div>
              <Label value="Select Language" />
            </div>
            <Select id="countries" required className={style.SelectDiv}>
              <option>Electronics</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
        </div>

        <div className={style.thirdContainer}>
          <div className={style.Product}>
            <div>
              <Label value="Brand" />
            </div>
            <TextInput
              type="text"
              placeholder="Apple"
              className={style.textInput}
            />
          </div>
          <div className={style.Product}>
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

        <div className={style.fourthContainer}>
          <div className={style.Product}>
            <div>
              <Label value="Item Weight(kg)" />
            </div>
            <TextInput
              type="text"
              placeholder="12"
              className={style.textInput}
            />
          </div>
          <div className={style.Product}>
            <div>
              <Label value="Length(cm)" />
            </div>
            <TextInput
              type="text"
              placeholder="105"
              className={style.textInput}
            />
          </div>
          <div className={style.Product}>
            <div>
              <Label value="Breadth(cm)" />
            </div>
            <TextInput
              type="text"
              placeholder="15"
              className={style.textInput}
            />
          </div>
          <div className={style.Product}>
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

        <div className={style.fifthContainer}>
          <Label htmlFor="comment" value="Description" />
          <Textarea id="comment" className={style.textArea} />
        </div>

        <div className={style.sixthContainer}>
          <Label value="Selling Type" />
          <div className={style.checkBox} id="checkbox">
            <div className={style.checkBtn}>
              <Checkbox id="Store" defaultChecked />
              <Label htmlFor="Store">In-store only</Label>
            </div>
            <div className={style.checkBtn}>
              <Checkbox id="Online" />
              <Label htmlFor="Online">Online selling only</Label>
            </div>
            <div className={style.checkBtn}>
              <Checkbox id="Both" />
              <Label htmlFor="Both">Both in-store and online</Label>
            </div>
          </div>
        </div>

        <div className={style.seventhContainer}>
          <Label value="Product Images" />
          <div className={style.productImages}></div>
        </div>

        <div className={style.eigthContainer}>
          <div className="flex w-full items-center justify-center">
            <Label
              htmlFor="dropzone-file"
              className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
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
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <FileInput
                accept="image/*"
                id="dropzone-file"
                className="hidden"
              />
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormPage;
