export default function Navbar () {
    return (
        <header>
        <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand">My First React App</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
        </header>
    )
}