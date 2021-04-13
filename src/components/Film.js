const Film = ({name, url}) => {

    return (
        <div class="film">
            <a href={url}>{name}</a>
        </div>
    )

}

export default Film;