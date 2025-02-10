import { forwardRef, useContext, useRef } from "react";
import { ProjectContext } from "./store/ProjectContextProvider";

const Inputcells = forwardRef(function Inputcells({ text, type }, ref) {
  const cssClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {text}
      </label>
      {type === "text-area" ? (
        <textarea ref={ref} type="text" className={cssClasses} />
      ) : (
        <input ref={ref} type={type} className={cssClasses} />
      )}
    </p>
  );
});

export default function Input() {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const { save, cancel } = useContext(ProjectContext);

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const entereddueDate = dueDate.current.value;

    if (
      enteredTitle === "" ||
      enteredDescription === "" ||
      entereddueDate === ""
    ) {
      alert("Ooops!!... You need to enter a value in it. ");
      return;
    }
    const data = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: entereddueDate,
    };
    save(data);
    trackify.trackEvent("purchase");
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={cancel}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>

      <div>
        <Inputcells type="text" text="Title" ref={title} />
        <Inputcells type="text-area" text="Description" ref={description} />
        <Inputcells type="date" text="Due Date" ref={dueDate} />
      </div>
    </div>
  );
}
