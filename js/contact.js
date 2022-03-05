const Highlight = ({children, type}) => (
  <span className={`relative highlight highlight-${type}`}>
    <span className="relative z-2">{children}</span>
  </span>
);

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f1-l w-80-l fw5 normal intro">
    <h1> Contact Us </h1>
    <div className="mb3 mb4-ns">
    Pier55 in Hudson River Park @ West 13th Street, New York NY 10014
    </div>
    <div>
    General Contact: <a href="mailto:info@littleisland.com">info@littleisland.com</a>
    <br></br>
    Press Contact: <a href="mailto:press@littleisland.com">press@littleisland.com</a>
    </div>
  </div>
);

const Footer = () => (
  <footer>
    <p> This is not an official website for Little Island.</p>
    <hr></hr>
    <p>Created by Christian Paneda (Info by Little Island) - SI 691 </p>
  </footer>
)

const NavItem = ({className, href, logo, children}) => (
  <li className={`mh2-ns f6 f3-l tc ${className}`}>
    <a className="dark-green no-underline" href={href}>
      {logo ? <img src="../images/logo.svg" className="db center logo logo-spacing" alt={children}/> : children}
    </a>
  </li>
);

const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map(item => <NavItem {...item}/>)}  
    </ul>
  </nav>
);



const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav />
      <Intro />
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
