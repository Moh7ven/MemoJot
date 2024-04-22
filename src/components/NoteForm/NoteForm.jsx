import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useState } from "react";

export function NoteForm({ title, onClickEdit, onClickTrash, onSubmit }) {
  const [formValues, setFormValues] = useState({ title: "", content: "" });

  function updateFormValues(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }


  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickTrash && (
          <TrashFill onClickTrash={onClickTrash} className={s.icon} />
        )}
      </div>
    </>
  );

  const titleInput = (
    <>
      <label className="form-label">Title</label>
      <input
        type="text"
        name="title"
        className="form-control"
        onChange={updateFormValues}
      />
    </>
  );

  const contentInput = (
    <>
      <label className="form-label">Content</label>
      <textarea
        type="text"
        name="content"
        className="form-control"
        row="5"
        onChange={updateFormValues}
      />
    </>
  );

  const submitButton = (
    <div className={s.submit_btn}>
      <ButtonPrimary onClick={() => onSubmit(formValues)}>Submit</ButtonPrimary>
    </div>
  );
  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input}`}>{titleInput}</div>
      <div className={`mb-3`}>{contentInput}</div>
      {onSubmit && submitButton}
    </div>
  );
}
