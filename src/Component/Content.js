const Content = (props) =>{
    return (
        <div>
            <div className='content'>
                <div className='index'>
                    <h2>{props.data.id}/25</h2>
                </div>
                <div>
                    <div>
                    <h2 className='name'>{props.data.name.first} {props.data.name.last}</h2> 
                    </div>
                    <div>
                    <p><text>From:</text> {props.data.city}, {props.data.country}</p>
                    <p><text>Job Title:</text> {props.data.title}</p>
                    <p><text>Employer:</text> {props.data.employer}</p>
                    <br></br>
                    </div>
                    <div className='movies'>
                        <text>Favorite Movies:</text>
                        <br></br>
                        <div className='list'>
                            <ol>
                            <li>{props.data.favoriteMovies[0]}</li>
                            <li>{props.data.favoriteMovies[1]}</li>
                            <li>{props.data.favoriteMovies[2]}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className='next'>
                <button onClick={ () => props.handlePrevious()} className='button'> {`< Previous`} </button>
                <button onClick={ () => props.handleNext()} className='button'> {`Next >`} </button>
            </div>
        </div>
            
    )
}


export default Content;