import React from "react";
import styles from "./modalStyle.module.scss";

export interface IModalProp {
  close: (value: boolean) => void;
  component: any;
  title?: string;
}

const ModalWrapper = ({ close, component, title }: IModalProp): JSX.Element => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__box}>
        <span className={styles.modal__close} onClick={() => close(false)}>
          &times;
        </span>
        <div className={styles.modal__content}>{component}</div>
      </div>
    </div>
  );
};
export default ModalWrapper;
