function display() {
    const content = document.createElement('div')
    content.id = 'content';

    const name = document.createElement('h1');
    name.innerHTML = 'Epicurean Escape';

    const headline = document.createElement('h4');
    headline.innerHTML = 'Embark on an Epicurean Escape: Indulge in Culinary Bliss at Our Exquisite Restaurant';

    const paragraphOne = document.createElement('p');
    paragraphOne.innerHTML = `Welcome to Epicurean Escape, where gastronomy takes center stage and culinary dreams come true. 
        Nestled in the heart of Mumbai, our restaurant is a haven for food enthusiasts seeking an 
        extraordinary dining experience.`;

    const paragraphTwo = document.createElement('p');
    paragraphTwo.innerHTML = `Prepare to be transported on a journey of flavors, textures, and aromas as our talented chefs craft 
        masterpieces that tantalize the taste buds. From innovative fusion creations to timeless classics 
        prepared with meticulous attention to detail, every dish is a work of art.`;

    const paragraphThree = document.createElement('p');
    paragraphThree.innerHTML = `Step into our elegant and inviting space, where the ambiance exudes warmth and sophistication. 
        The soft lighting, tasteful decor, and comfortable seating set the stage for a memorable evening of 
        indulgence. Whether it's an intimate dinner for two, a gathering with friends, or a celebratory 
        event, Epicurean Escape provides the perfect setting for any occasion.`;

    const paragraphFour = document.createElement('p');
    paragraphFour.innerHTML = `At Epicurean Escape, we source only the finest, freshest ingredients, ensuring that every bite 
        bursts with flavor. Our menu showcases a harmonious blend of global cuisines, combining traditional 
        techniques with modern flair. From succulent seafood to sizzling steaks, vegetarian delights to 
        decadent desserts, our diverse selection caters to every palate and dietary preference.`;

    const paragraphFive = document.createElement('p');
    paragraphFive.innerHTML = `Whether you're a seasoned food aficionado or an adventurous epicurean, Epicurean Escape promises an 
        unforgettable culinary journey. Join us and surrender to the allure of exquisite flavors, 
        impeccable hospitality, and a dining experience that transcends the ordinary.`;

    const booking = document.createElement('h4');
    booking.innerHTML = `Indulge your senses and escape to a world of gastronomic bliss. Book your table at Epicurean 
        Escape today and embark on a culinary adventure like no other.`;

    content.appendChild(name);
    content.appendChild(headline);
    content.appendChild(paragraphOne);
    content.appendChild(paragraphTwo);
    content.appendChild(paragraphThree);
    content.appendChild(paragraphFour);
    content.appendChild(paragraphFive);
    content.appendChild(booking);

    return content;
}

export { display }