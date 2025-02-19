class AppBar extends HTMLElement {
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
                        <li><a href="listNotes.html">Catatan Kamu</a></li>
                        <li><a href="addNotes.html">Tambah Catatan</a></li>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                </div>
            </header>
        `
    }
}

customElements.define('app-bar', AppBar);