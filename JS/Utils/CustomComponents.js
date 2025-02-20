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

class AppFooter extends HTMLElement {
    constructor () {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="app-footer">
                <p>Copyright &copy; 2025 Nottie</p>
            </footer>
            `;
    }
}

class AddForm extends HTMLElement {
    constructor () {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="add-notes-container">
                <h1>Tambah Catatan</h1>
                <form action="" id="add-notes-form">
                    <div class="title-notes">
                        <label for="title">Judul Catatan</label>
                        <input type="text" name="title" id="title" placeholder="example (max 30 char)">
                    </div>
                    <div class="content-notes">
                        <label for="content">Isi catatan</label>
                        <textarea name="content" id="content" placeholder="example... (max 1120 char)"></textarea>
                    </div>
                    <div class="button-notes">
                        <button type="submit">Tambah</button>
                        <button type="reset">Batal</button>
                    </div>
                </form>
            </div>
        `;
    }
}

customElements.define('app-bar', AppBar);
customElements.define('app-footer', AppFooter);
customElements.define('add-form', AddForm);