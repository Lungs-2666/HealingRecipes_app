    'use client'
    
    import styles from "@/components/RecipePage/recipePage.module.css";
    import SearchInp from "../SearchInp/searchInp";
    import RecipeList from "../RecipeList/recipeList";
    import RecipeCard from "../RecipeCard/recipeCard";
    
    import { useState } from "react";
    import { remedies } from "@/data/data";

    const RecipePage = () => {
        const [selectedCard, setSelectedCard] = useState( 0 );

        return (
            <div className={styles.recipe_page}>
                <SearchInp />

                <div className={styles.main_content}>
                    <RecipeList handleSelect={setSelectedCard}/>

                    <div className={styles.recipe_card_box}>
                        <RecipeCard {...remedies[selectedCard]} />
                    </div>
                </div>
            </div>
        )
    }

    export default RecipePage;