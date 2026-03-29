    import './recipeCard.css';

    const RecipeCard = ( props ) => {
        const { id, title, desc, recipe, ingr = [] } = props;
        
        return (
            <div className='recipe_card'>
                <div className='card_group_1'>
                    <h4 className='card_title'> {title} </h4>
                    <span className='card_desc'> {desc} </span>
                </div>

                <div className='card_group_2'>
                    <h4>Recipe:</h4>
                    <span className='card_recipe'> {recipe} </span>
                </div>

                <div className='card_group_3'>
                    <h4>Ingridients:</h4>
                    <ul className='card_ingr'>
                        {
                            ingr.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }

    export default RecipeCard;
