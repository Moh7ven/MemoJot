import s from "./style.module.css";

export const ButtonPrimary = ({ children, onClick, isDisabled }) => {
  // The ButtonPrimary component
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type="button"
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
};
