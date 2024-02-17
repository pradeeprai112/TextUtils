import React from "react";

export default function Button(props) {
    return(
        <>
        <button
                type="button"
                className="btn btn-primary me-3"
                onClick={props.functionName}
              >
                {props.text}
        </button>
        </>
    );
}