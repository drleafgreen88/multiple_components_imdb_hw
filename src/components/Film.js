import React from "react";

const Film = ({ name, url, children }) => {

    return (
        <>
            {/* <p>{name}</p> */}
            <p>{children}</p>
            <li><a href={url} target="_blank">{name}</a></li>
        </>
    )

}

export default Film;