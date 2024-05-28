import s from "./style.module.css";

export function FieldError({ msg }) {
  // The FieldError component
  return <span className={s.container}>{msg}</span>;
}
