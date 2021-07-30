import './Categories.css';

function choiceCategory(props, id) {
    if(id === '1'){props.setCategory('people');}
    else if(id === '2'){props.setCategory('startships');}
    else if(id === '3'){props.setCategory('planets');}
}
export default function Categories() {
    const nameCategory = ['characters', 'starships', 'planets'];
    return (
        <div className="categories-wrapper">
            {
                nameCategory.map((item, i) =>
                    <div className="card" key={i} onClick={choiceCategory(i)}>
                        <h2 className='card__title'>{item}</h2>
                    </div>
                )
            }
        </div>
    )
}
