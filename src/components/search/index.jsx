import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

const Search = () => {
  const [active, setActive] = useState("марку");
  return (
    <section>
      <div className="container">
        <div className="flex items-center gap-7">
          <button
            onClick={() => setActive("номер")}
            className="py-2 px-6  rounded-md text-xl"
          >
            Поиск по номеру
          </button>
          <button
            onClick={() => setActive("маркy")}
            className="py-2 px-6 bg-title-gray rounded-md text-xl"
          >
            Поиск по марке
          </button>
          <button
            onClick={() => setActive("товар")}
            className="py-2 px-6  rounded-md text-xl"
          >
            Поиск по названию товара
          </button>
        </div>
        <form className="flex  mt-6 mb-20 w-full bg-title-gray items-center">
          <Input
            variant="Outlined"
            label={`Введите ${active}`}
            placeholder={`Введите ${active}`}
            className="rounded-e-none "
          />
          <Button variant="filled" className="bg-primary-color rounded-[3px]">
            ИСКАТЬ
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Search;
