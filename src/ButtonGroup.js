import React from "react";
import { store } from "./store";
import setTechnology from "./actions";

export default function ButtonGroup({ technologies }) {
  return (
    <div>
      {technologies.map((tech, i) => {
        return (
          <button
            data-tech={tech}
            key={`btn-${i}`}
            className="hello-btn"
            onClick={dispatchBtnAction}
          >
            {tech}
          </button>
        );
      })}
    </div>
  );
}

function dispatchBtnAction(e) {
  const tech = e.target.dataset.tech;
  store.dispatch(setTechnology(tech));
}
