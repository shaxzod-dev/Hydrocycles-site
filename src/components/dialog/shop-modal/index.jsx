import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Icons } from "../../../assets/icons";
import { MainContext } from "../../../context/useMainContext";
import AddedProducts from "../../added-products";
function ShopModal({ open, handleOpen }) {
  const { cardItems } = useContext(MainContext);

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="relative overflow-hidden w-full"
      >
        <DialogHeader className="flex items-center justify-between">
          <h2>Shop Box</h2>
          <button onClick={handleOpen}>
            <Icons.CloseIcon />
          </button>
        </DialogHeader>
        <DialogBody className="h-[500px] overflow-y-auto pb-32 bg-title-gray flex flex-col gap-4">
          {cardItems.length
            ? cardItems.map((el) => {
                return <AddedProducts key={el.id} data={el} />;
              })
            : "There is nothing in the Shop Box"}
        </DialogBody>
        {cardItems.length && (
          <DialogFooter className="absolute bottom-0 right-0 left-0 bg-title-gray p-5 flex items-end justify-between">
            <div className="gap-y-2">
              <h3 className="text-sm text-title-color font-normal leading-[26px] ">
                Итого:
                <span className="text-xl font-bold leading-[30px] text-title-color"></span>
              </h3>
              <Button
                variant="filled"
                className="w-[220px] rounded-none py-2 bg-primary-color text-xs font-medium leading-[26px] text-white"
              >
                Оформить заказ
              </Button>
            </div>
            <Button
              variant="filled"
              onClick={handleOpen}
              className="w-[220px] cursor-pointer rounded-none py-2  border-[1px] border-primary-color bg-white text-xs font-medium leading-[26px] text-title-color"
            >
              Продолжить покупки
            </Button>
          </DialogFooter>
        )}
      </Dialog>
    </>
  );
}
export default ShopModal;
