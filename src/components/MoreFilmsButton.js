const MoreFilmsButton = () => {

    return (
        <button
            type="button" class="more_films_button" onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.imdb.com/calendar/?region=gb';
            }}
        > View more upcoming releases >> </button>
    )
}

export default MoreFilmsButton;