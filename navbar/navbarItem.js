(function(){
    class NavBarItem extends HTMLElement{
        constructor(){
            super();

            // attaches shadow tree and returns shadow root reference
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
            const shadow = this.attachShadow({ mode: 'open' });

            const bootstrapStyles = this.buildBootstrapStylesReference();

            const styles = this.buildStylesReference();

            const navbarItem = this.buildNavBarItem();

            shadow.appendChild(bootstrapStyles);
            shadow.appendChild(styles);
            shadow.appendChild(navbarItem);
        }

        buildBootstrapStylesReference(){
            let bootstrapStyles = document.createElement('link');

            bootstrapStyles.rel = 'stylesheet';
            bootstrapStyles.href = './node_modules/bootstrap/dist/css/bootstrap.min.css';

            return bootstrapStyles;
        }

        buildStylesReference(){
            let bootstrapStyles = document.createElement('link');

            bootstrapStyles.rel = 'stylesheet';
            bootstrapStyles.href = './navbar/navbaritem.css';

            return bootstrapStyles;
        }

        buildNavBarItem(){
            let navbarListItem = document.createElement('li');

            navbarListItem.className = 'nav-item';

            navbarListItem.innerHTML = `
            <a class="nav-link" href=${this.link}>${this.link}</a>
            `;

            return navbarListItem;
        }

        get link(){
            return this.attributes.getNamedItem('link')?.value;
        }
    }

    // let the browser know about the custom element
    customElements.define('nav-item', NavBarItem);
})();