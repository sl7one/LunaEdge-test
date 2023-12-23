import { createPortal } from "react-dom";
import Modal from "./Modal/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";

const portal = document.querySelector("#modal")!;

export default function Portal() {
  const { portalIsVisible = false, setPortalIsVisible } =
    useContext(GlobalContext)!;

  return (
    <>
      {portalIsVisible &&
        createPortal(<Modal setIsVisible={setPortalIsVisible} />, portal)}
    </>
  );
}
