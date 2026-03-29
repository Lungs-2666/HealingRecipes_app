    'use client'
    import './recipeList.css';
    
    import { useState } from 'react';
    
    const RecipeList = ( props ) => {
        let { handleSelect, remedies } = props;

        return (
            <form className='recipe_list'>
                <div className='list_scroll'>
                    {remedies.map((item) => {
                        return (
                            <div
                             key={item.id}
                             className='list_item'
                             onClick={() => handleSelect(item.id - 1)}
                            >
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            </form>
        )
    }

    export default RecipeList;
