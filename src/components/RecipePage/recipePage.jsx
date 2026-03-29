    'use client'
    
    import styles from "@/components/RecipePage/recipePage.module.css";
    import SearchInp from "../SearchInp/searchInp";
    import RecipeList from "../RecipeList/recipeList";
    import RecipeCard from "../RecipeCard/recipeCard";
    
    import { useState } from "react";
    import { remedies } from "@/data/data";

    const RecipePage = () => {
        const [selectedCard, setSelectedCard] = useState( 0 );
        const [ filteredRems, setFilteredRems ] = useState(remedies);

        function search( searchVal ){
            const filtered = remedies.filter((item => item.title.includes(searchVal)));
            setFilteredRems( filtered );
        }

        return (
            <div className={styles.recipe_page}>
                <SearchInp handleSearch={search}/>

                <div className={styles.main_content}>
                    <RecipeList remedies={filteredRems} handleSelect={setSelectedCard}/>

                    <div className={styles.recipe_card_box}>
                        <RecipeCard {...remedies[selectedCard]} />
                    </div>
                </div>
            </div>
        )
    }

    export default RecipePage;