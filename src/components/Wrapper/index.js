import React from "react";

function Wrapper({ children }) {
    return (
        <article className="row">
            {children}
        </article>
    );
}

export default Wrapper;