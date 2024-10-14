import * as React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FixedModal, ModalProps } from "./FixedModal";

export const ManualModal: React.FC<ModalProps> = ({
  containerClassName,
  contentClassName = "w-max mx-auto",
  viewPortClassName = "bg-white",
  anchorClassName,
  anchorContent,
  children,
  state: [open, setOpen] = React.useState(false),
}) => {
  return (
    <>
      <FixedModal
        containerClassName={`${containerClassName} vertical-scrollbar`}
        state={[open, setOpen]}
        anchorClassName={anchorClassName}
        anchorContent={anchorContent}
      >
        <div className={`grid gap-2 p-2 ${contentClassName}`}>
          <div className="flex justify-end">
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="rounded-full  p-1 hover:text-white hover:bg-pink-700 hover:scale-105 duration-300 bg-pink-800"
            >
              <XMarkIcon height={20} />
            </button>
          </div>

          <div className={`shadow p-4 rounded-md ${viewPortClassName}`}>
            {children}
          </div>
        </div>
      </FixedModal>
    </>
  );
};
