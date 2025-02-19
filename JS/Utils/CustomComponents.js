class AppHeader extends HTMLElement {
    constructor () {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
            <header class="app-header">
                <div class="header-title">
                    <h1>Nottie</h1>
                </div>
                <div class="header-menu">
                    <ul>
                        <li><a href="#">Catatan Kamu</a></li>
                        <li><a href="#">Tambah Catatan</a></li>
                    </ul>
                </div>
            </header>
        `
    }
}

customElements.define('app-header', AppHeader);