import React, { useEffect, useRef, useState } from "react";

export default function QuoteForm() {
  const [inputList, setInputList] = useState<any>([{ experience: "" }]);
  const handleInputChange = (e: any, index: number) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleRemoveClick = (i: number) => {
    const list = [...inputList];
    list.splice(i, 1);
    setInputList(list);
  };
  const handleAddClick = () => {
    setInputList([...inputList, { experience: "" }]);
  };
  const changeTextarea = () => {
    if (multiLineTextarea.current) {
      multiLineTextarea.current.style.height = "auto";
      multiLineTextarea.current.style.height =
        multiLineTextarea.current.scrollHeight + "px";
    }
  };
  let multiLineTextarea = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    console.log(multiLineTextarea);
    if (multiLineTextarea.current) {
      multiLineTextarea.current.style.height = "auto";
      multiLineTextarea.current.style.height =
        multiLineTextarea.current.scrollHeight + "px";
    }
  });
  return (
    <div className="w-full max-w-xl">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Phone"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Note
          </label>
          <textarea
            onChange={changeTextarea}
            ref={multiLineTextarea}
            className="w-full shadow appearance-none rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name=""
            id=""
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Experience
          </label>
          {inputList.map((x: any, i: number) => {
            return (
              <div className="box" key={i}>
                <input
                  name="experience"
                  placeholder="Experience"
                  value={x.experience}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <button
                      className="mr10"
                      onChange={(e) => e.preventDefault}
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button onClick={handleAddClick}>Add</button>
                  )}
                </div>
              </div>
            );
          })}
          <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
        </div>
      </form>
    </div>
  );
}
