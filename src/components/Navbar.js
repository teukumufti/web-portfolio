import React, { useState } from 'react';


export const NavbarComponent = () => {
  
  const handleClickMenu = (id = '') => {
    const element = document.getElementById(id);
    return element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  
  const [ color, setColor ] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 8)
    setColor(true)
    else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  

  return (
    <Navbar className={color ? 'bg-zinc-100 text-slate-50' : 'navbar text-slate-50'}>
      <NavbarBrand href="#">
        {/* <div class="text-4xl font-extrabold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-aqua-100 to-blue-500">
          TM
        </span>
      </div> */}
      </NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNav orientation="start">
          <NavbarItem>
            <NavbarLink onClick={() => handleClickMenu('menu-home')}>Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink onClick={() => handleClickMenu('menu-about')}>About</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink onClick={() => handleClickMenu('menu-service')}>Services</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink onClick={() => handleClickMenu('menu-experience')}>Experience</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink onClick={() => handleClickMenu('menu-contact')}>Contact</NavbarLink>
          </NavbarItem>
        </NavbarNav>
        <NavbarNav orientation="end">
        <div className="flex space-x-2 justify-center">
        <button className="px-2 py-2 mb-3 mt-3 text-xs rounded bg-zinc-100 hover:bg-aqua-100 hover:text-slate-50" type='button'>
          Admin
        </button>
      </div>
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  );
};

/* Navbar logic */

const style = {
  navbar: `fixed px-4 py-2 top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start`,
  brand: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap`,
  toggler: `block float-right text-4xl lg:hidden focus:outline-none`,
  item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-aqua-100`,
  collapse: {
    default: `border-t border-aqua-100 fixed left-0 mt-6 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
  },
  nav: {
    start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
    middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
    end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
  },
};

const Context = React.createContext({});

const Navbar = ({ children, className }) => {
  const [open, setOpen] = React.useState(false);
  const navbarRef = React.useRef(null);

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // close navbar on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!navbarRef.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, navbarRef]);

  return (
    <Context.Provider value={{ open, toggle }}>
      <nav ref={navbarRef} className={`${className} ${style.navbar}`}>
        {children}
      </nav>
    </Context.Provider>
  );
};

const useToggle = () => React.useContext(Context);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarBrand = ({ children, href }) => (
  <a href={href} className={style.brand}>
    <strong>{children}</strong>
  </a>
);

const NavbarToggler = () => {
  const { toggle } = useToggle();
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
};

const NavbarCollapse = ({ children }) => {
  const { open } = useToggle();
  return (
    <div
      style={{ backgroundColor: 'inherit' }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
    >
      {children}
    </div>
  );
};

const NavbarNav = ({ children, orientation }) => (
  <ul className={style.nav[orientation]}>{children}</ul>
);

const NavbarItem = ({ children }) => <li className={style.item}>{children}</li>;

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarLink = ({ children, href, active, activeClass, ...props }) => (
  <a href={href} className={active ? activeClass : ''} {...props}>
    {children}
  </a>
);

export default NavbarComponent;