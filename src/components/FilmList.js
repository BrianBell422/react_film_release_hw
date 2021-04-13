import Film from './Film';

const FilmList = ({films}) => {
    
    const filmNodes = films.map((film) => {
        return  <li>
                    <Film key={film.id} name={film.name} url={film.url}>{film.text}</Film>
                </li>
    })

    return (
        <>
            <ul>
                {filmNodes}
            </ul>
        </>
    )

}

export default FilmList;