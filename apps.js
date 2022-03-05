const Highlight = ({children, type}) => (
  <span className={`relative highlight highlight-${type}`}>
    <span className="relative z-2">{children}</span>
  </span>
);

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f1-l w-80-l fw5 normal intro">
    <div className="mb3 mb4-ns">
      {/* <Highlight type="aqua">Lost in Tokyo</Highlight> is a directory of fun places to see, play in
      and <Highlight type="yellow">explore</Highlight>, in <Highlight type="blue">Tokyo</Highlight>,
      Japan. */}
      Welcome to <Highlight type="aqua">Little Island.</Highlight> A place to free your imagination and let loose. Located <a href="https://littleisland.org/">@Pier55.</a>
    </div>
    <div>
      {/* From <Highlight type="blue">HELLO</Highlight> and{' '}
      <Highlight type="blue">galleries</Highlight>, to{' '}
      <Highlight type="pink">robot restaurants</Highlight> and{' '}
      <Highlight type="pink">kitten cafes</Highlight>, Tokyo is the gift that keeps on giving.{` `}
      <Highlight type="yellow">Dattebayo!</Highlight> */}
      Enjoy a quiet moment nested within the hustle and bustle of New York City. We offer fun, festivities, and food! 
    </div>
    <div class="mt3">
    <a class="f3 link dim br-pill ph3 pv2 mb2 mt1 dib white bg-dark-green pill-hover" href="#main">View the Sights</a>
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

const Info = ({title, description, showInfo}) => (
  <div
    className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-orange overlay"
    style={{transform: showInfo ? 'none' : 'translateY(-100%)'}}
  >
    <div>
      <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title fw6">{title}</h1>
      <p className="lh-title lh-copy-ns mv0 black f5 measure-l fw4">{description}</p>
    </div>
  </div>
);

class Attraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
    this.toggleInfo = this.toggleInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  toggleInfo() {
    this.setState((prevState, props) => ({
      showInfo: !prevState.showInfo
    }));
  }

  closeInfo() {
    this.setState((prevState, props) => ({
      showInfo: false
    }));
  }

  render() {
    return (
      <div
        className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${
          this.props.className
        }`}
        onClick={this.toggleInfo}
        onMouseLeave={this.closeInfo}
      >
        <div className="relative">
          <Info {...this.props} {...this.state} />
          <img src={`../images/${this.props.image}`} className="db" alt={this.props.title}/>
        </div>
      </div>
    );
  }
}

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav />
      <Intro />
    </div>
    <div className="flex flex-wrap container" id="main">
      {attractions.map(attraction => <Attraction {...attraction} />)}
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
