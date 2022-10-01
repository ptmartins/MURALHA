(function() {

    let DOM = {},

        /**
         * Cache DOM elements
         */
        cacheDOM = () => {
            DOM.menu = document.getElementById('menu');
        },

        /**
         * Render the menu contents
         */
        renderContent = data => {
            let content = document.createElement('DIV');
            
            content.className = 'menu__content';;

            data.forEach(item => {
                let menuItem = document.createElement('DIV'),
                    menuName = document.createElement('DIV'),
                    menuPrice = document.createElement('DIV'),
                    name = document.createElement('H3'),
                    nameEng = document.createElement('H4'),
                    price = document.createElement('SPAN'),
                    unit = document.createElement('SPAN');

                    menuItem.className = 'menu__item';
                    menuName.className = 'item__description';
                    menuPrice.className = 'item__cost';
                    name.className = 'item__name';
                    nameEng.className = 'item__name-eng';
                    price.className = 'item__price';
                    unit.className = 'item__unit';

                    name.textContent = item.name;
                    nameEng.textContent = item.name_gb;
                    price.textContent = item.price;
                    unit.textContent = item.unit;

                    menuName.append(name, nameEng);
                    menuPrice.append(price, unit);

                    menuItem.append(menuName, menuPrice);

                    content.append(menuItem);
            });

            return content;
        },

        /**
         * Render the menu
         */
        renderMenu = data => {
            for(let key in data) {
                let section = document.createElement('SECTION');
                    sectionTitle = document.createElement('H2'),
                    sectionSubTitle = document.createElement('H4'),
                    sectionContent = renderContent(data[key]);

                section.className = 'section section--menu';
                sectionTitle.className = 'menu__title';
                sectionSubTitle.className = 'menu__subtitle';
                sectionContent.className = 'menu__content'

                switch(key) {
                    case 'couvert':
                        sectionTitle.textContent = 'Couvert';
                        sectionSubTitle.textContent = 'Couvert';
                    case 'soups':
                        sectionTitle.textContent = 'Sopas';
                        sectionSubTitle.textContent = 'Soups';
                    case 'appetizers':
                        sectionTitle.textContent = 'Entradas regionais';
                        sectionSubTitle.textContent = 'Regional appetizers';
                    case 'tapas':
                        sectionTitle.textContent = 'Petiscos';
                        sectionSubTitle.textContent = 'Tapas';
                    case 'grill':
                        sectionTitle.textContent = 'Grelhados no carvao';
                        sectionSubTitle.textContent = 'Grill over coals';
                    case 'regionals':
                        sectionTitle.textContent = 'Pratos regionais';
                        sectionSubTitle.textContent = 'Regional dishes';
                    case 'pork':
                        sectionTitle.textContent = 'Carnes de porco preto';
                        sectionSubTitle.textContent = 'Iberian pork meats';
                    case 'meat':
                        sectionTitle.textContent = 'Outras carnes';
                        sectionSubTitle.textContent = 'Meats (other)';
                    case 'fish':
                        sectionTitle.textContent = 'Peixe';
                        sectionSubTitle.textContent = 'Peixe';
                    case 'desserts':
                        sectionTitle.textContent = 'Sobremesas';
                        sectionSubTitle.textContent = 'Desserts';
                }


                section.append(sectionTitle, sectionSubTitle, sectionContent);
                DOM.menu.appendChild(section);
            }
        },

        /**
         * Load data
         */
        loadData = () => {
            fetch('./data.json').then(response => response.json()).then(data => renderMenu(data));
        },

        /**
         * Initialize the app
         */
        init = () => {
            cacheDOM();
            loadData();
        };

    window.addEventListener('DOMContentLoaded', init);

})();