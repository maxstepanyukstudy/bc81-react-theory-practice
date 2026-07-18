// src/components/Alert.tsx

import clsx from "clsx";
import css from "./AlertCssModuleClsx.module.css";

interface AlertCssModuleClsxProps {
  type?: "success" | "error";
}

export default function AlertCssModuleClsx({ type }: AlertCssModuleClsxProps) {
  return (
    <p className={clsx(css.alert, type && css[type])}>
      This is a default alert text
    </p>
  );
}
