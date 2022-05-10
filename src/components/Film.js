import React from "react";

const Film = ({ name, url, children }) => {

    return (
        <>
            <p>{name}</p>
            <p>{children}</p>
            <p>{url}</p>
        </>
    )

}

export default Film;