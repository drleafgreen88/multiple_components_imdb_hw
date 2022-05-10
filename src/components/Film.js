import React from "react";

const Film = ({ name, url, children }) => {

    return (
        <>
            <p>{name}</p>
            <p>{children}</p>
            <a href={url} target="_blank">link</a>
        </>
    )

}

export default Film;