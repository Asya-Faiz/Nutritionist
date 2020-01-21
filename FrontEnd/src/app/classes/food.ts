export class Food {
    fdcId: number
    description: String
    dataType: String
    publicationDate: String
    ingredients: String
    brandOwner: String
    scientificName: String
    brandedFoodCategory: String
    foodNutrients: Array<Nutrients>
}

export class Nutrients {
    id: number
    name: String
    unitName: String
    amount: String
    description: String
}