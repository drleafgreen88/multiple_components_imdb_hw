import React from "react";
import Film from "./Film";

const FilmList = ({ filmsArray }) => {

    const filmArrayNodes = filmsArray.map(film => {
        return (
            <Film
                key={film.id}
                name={film.name}
                url={film.url}>
            </Film>
        )
    }

    )
    return (
        <>
            <ul>
            {filmArrayNodes}
            </ul>
        </>
    )
}

export default FilmList;