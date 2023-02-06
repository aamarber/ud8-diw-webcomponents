(function(){
    class NavbarComponent extends HTMLElement{
        constructor(){
            super();

            // attaches shadow tree and returns shadow root reference
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
            const shadow = this.attachShadow({ mode: 'open' });

            const styles = this.buildStylesReference();

            shadow.appendChild(styles);

            const navbarElement = this.createNavbar();

            // appending the container to the shadow DOM
            shadow.appendChild(navbarElement);
        }

        buildStylesReference(){
            let bootstrapStyles = document.createElement('link');

            bootstrapStyles.rel = 'stylesheet';
            bootstrapStyles.href = './navbar/navbar.css';

            return bootstrapStyles;
        }

        createNavbar(){
            let navbarContainer = document.createElement('nav');

            navbarContainer.className = 'navbar navbar-expand-sm';

            navbarContainer.innerHTML = `
            <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="./navbar.css">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    ${this.navItems.map(navItem => `<nav-item link='${navItem}' display-text='${navItem}'/>`)}
                </ul>
                </div>
            </div>
            `;

            return navbarContainer;
        }

        get navItems(){
            let items = [];

            [...this.attributes].forEach(attr => {
                if (attr.name.includes('nav-item')) {
                    items.push(attr.value);
                }
            });

            return items;
        }
    }

    // let the browser know about the custom element
    customElements.define('navbar-component', NavbarComponent);
})();