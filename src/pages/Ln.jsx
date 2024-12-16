import { Link } from "react-router-dom";

const Ln = () => {
    return (
        <div>
            <h1>Mentions légales</h1>

            <footer>
                <section>
                    <h2>John Doe</h2>
                    <p>40 rue Laure Diebold
                    69009 Lyon, France*
                    10 20 30 40 50
                    john.doe@gmail.com
                    </p>
                </section>
                <section>
                    <h2>Liens utiles</h2>
                    <Link class="nav-link active" to="/">Home</Link>
                    <Link class="nav-link active" to="/services">Services</Link>
                    <Link class="nav-link active" to="/portfolio">Portfolio</Link>
                    <Link class="nav-link active" to="/contact">Contact</Link>
                    <Link class="nav-link active" to="/ln">Mentions légales</Link>
                </section>
                <section>
                    <h2>Mes dernières réalisations</h2>
                    <p>Frech Food
                    Restaurant Akira
                    Espace bien-être
                    SEO
                    Création d'une API
                    Maquette d'un site
                    </p>
                </section>
            </footer>

        </div>
    )
}

export default Ln;