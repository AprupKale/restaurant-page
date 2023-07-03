function display() {
    const content = document.createElement('div')
    content.id = 'content';

    const appetizers = document.createElement('div');
    appetizers.id = 'appetizers';
    const appetizersHeading = document.createElement('h2');
    appetizersHeading.innerHTML = 'Appetizers'
    appetizers.appendChild(appetizersHeading);

    for (let i = 0; i < Appetizers.length; i++) {
        let appetizer = Appetizers[i];

        const name = document.createElement('h4');
        name.textContent = appetizer.name;
        name.id = 'name';
        const description = document.createElement('p');
        description.textContent = appetizer.description;
        description.id = 'description';
        const left = document.createElement('div');
        left.classList = 'left-column';
        left.appendChild(name);
        left.appendChild(description);
        
        const price = document.createElement('h4');
        price.textContent = appetizer.price;
        const right = document.createElement('div');
        right.classList = 'right-column';
        right.appendChild(price);
        
        const dish = document.createElement('div');
        dish.appendChild(left);
        dish.appendChild(right);
        dish.classList = 'dish';

        appetizers.appendChild(dish);
    }

    const mainCourse = document.createElement('div');
    mainCourse.id = 'appetizers';
    const mainCourseHeading = document.createElement('h2');
    mainCourseHeading.innerHTML = 'Main Course'
    mainCourse.appendChild(mainCourseHeading);

    for (let i = 0; i < MainCourse.length; i++) {
        let maincourse = MainCourse[i];

        const name = document.createElement('h4');
        name.textContent = maincourse.name;
        name.id = 'name';
        const description = document.createElement('p');
        description.textContent = maincourse.description;
        description.id = 'description';
        const left = document.createElement('div');
        left.classList = 'left-column';
        left.appendChild(name);
        left.appendChild(description);
        
        const price = document.createElement('h4');
        price.textContent = maincourse.price;
        const right = document.createElement('div');
        right.classList = 'right-column';
        right.appendChild(price);
        
        const dish = document.createElement('div');
        dish.appendChild(left);
        dish.appendChild(right);
        dish.classList = 'dish';

        mainCourse.appendChild(dish);
    }

    const deserts = document.createElement('div');
    deserts.id = 'deserts';
    const desertsHeading = document.createElement('h2');
    desertsHeading.innerHTML = 'Deserts'
    deserts.appendChild(desertsHeading);

    for (let i = 0; i < Deserts.length; i++) {
        let desert = Deserts[i];

        const name = document.createElement('h4');
        name.textContent = desert.name;
        name.id = 'name';
        const description = document.createElement('p');
        description.textContent = desert.description;
        description.id = 'description';
        const left = document.createElement('div');
        left.classList = 'left-column';
        left.appendChild(name);
        left.appendChild(description);
        
        const price = document.createElement('h4');
        price.textContent = desert.price;
        const right = document.createElement('div');
        right.classList = 'right-column';
        right.appendChild(price);
        
        const dish = document.createElement('div');
        dish.appendChild(left);
        dish.appendChild(right);
        dish.classList = 'dish';

        deserts.appendChild(dish);
    }

    content.appendChild(appetizers);
    content.appendChild(mainCourse);
    content.appendChild(deserts);
    return content;
}

function Dish(name, description, price) {
    return { name, description, price };
}

const Appetizers = [
    Dish(`Truffle-infused Mushroom Bruschetta`,
        `Sautéed wild mushrooms with a hint of truffle, served on toasted artisan bread`,
        `1499`),
    Dish(`Lobster Bisque`,
        `Creamy soup enriched with succulent chunks of lobster, finished with a drizzle of herb-infused oil`,
        `1299`),
    Dish(`Smoked Salmon Crostini`,
        `Thinly sliced smoked salmon on toasted baguette, topped with dill cream cheese and capers`,
        `999`)
];

const MainCourse = [
    Dish(`Filet Mignon with Port Wine Reduction`,
        `Tender, grilled filet mignon served with a rich port wine reduction, accompanied by roasted fingerling potatoes and sautéed seasonal vegetables`,
        `1799`),
    Dish(`Pistachio-Crusted Chilean Sea Bass`,
        `Oven-baked Chilean sea bass coated with a crunchy pistachio crust, served with lemon beurre blanc, wild rice pilaf, and grilled asparagus`,
        `1599`),
    Dish(`Wild Mushroom Risotto`,
        `Creamy Arborio rice simmered with a medley of wild mushrooms, Parmesan cheese, and fresh herbs, finished with a drizzle of truffle oil`,
        `1499`),
    Dish(`Moroccan Spiced Lamb Chop`,
        `Grilled lamb chops marinated in aromatic Moroccan spices, served with mint yogurt sauce, couscous, and grilled vegetables`,
        `1999`)
]

const Deserts = [
    Dish(`Decadent Chocolate Soufflé`,
        `A rich and velvety chocolate soufflé served with a scoop of homemade vanilla bean ice cream`,
        `799`),
    Dish(`Lemon Blueberry Tart`,
        `Buttery tart shell filled with tangy lemon custard and topped with fresh blueberries and a dusting of powdered sugar`,
        `499`),
    Dish(`Crème Brûlée Trio`,
        `A trio of classic vanilla bean, chocolate, and lavender-infused crème brûlée, accompanied by almond biscotti`,
        `599`),
]

export { display }