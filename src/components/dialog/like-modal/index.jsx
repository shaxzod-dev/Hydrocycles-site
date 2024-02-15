import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Rating,
} from "@material-tailwind/react";
import { MainContext } from "../../../context/useMainContext";
import LikedItems from "../../liked-items";
import { Icons } from "../../../assets/icons";
function LikeModal({ open, handleOpen }) {
  const { likeItems, cardItems } = useContext(MainContext);
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="h-[600px] overflow-y-auto "
      >
        <DialogHeader className="flex items-center justify-between">
          <p>{likeItems.length ? "Like Modal" : "Like Modal is empty"}</p>
          <button onClick={handleOpen}>
            <Icons.CloseIcon />
          </button>
        </DialogHeader>
        <DialogBody>
          {likeItems.length ? (
            <div className="flex flex-col gap-y-4">
              {likeItems.map((el) => (
                <LikedItems
                  data={el}
                  key={el.id}
                  card={cardItems.some((item) => item.id == el.id)}
                />
              ))}
            </div>
          ) : (
            <h2>Like box is empty</h2>
          )}
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </>
  );
}
export default LikeModal;
