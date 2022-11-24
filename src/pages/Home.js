import React from "react";
import About from "./About";

function Home() {
    return (
    <div>

     <div className="bg-[url('./assets/images/code.jpg')] bg-cover h-screen">
        {/* title */}
        <div className="text-slate-50 text-start pl-52 pt-96">
            <h5 className="text-3xl tracking-widest">TEUKU</h5>
            <h5 className="text-8xl tracking-widest">MUFTI</h5>
            <span className="text-3xl tracking-widest">Fullstack Developer</span>
        </div>

        {/* icons social media */}
        <div className="flex pl-52 pt-96">
        {/* instagram */}
        <a href={'https://www.instagram.com/teukumfti/'} target='blank'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z" fill="white"/>
            </svg>
        </a>
        {/* twitter */}
        <a href={'https://twitter.com/tmmufti9770'} target='blank'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-1">
            <path d="M22 2.6096C21.191 3.05059 20.3219 3.34856 19.4082 3.48324C20.3509 2.78933 21.0562 1.69719 21.3925 0.410618C20.5068 1.05779 19.5374 1.51332 18.5265 1.75742C17.8467 0.864557 16.9462 0.272751 15.965 0.0738863C14.9837 -0.124978 13.9766 0.080224 13.0999 0.657635C12.2231 1.23505 11.5259 2.15236 11.1164 3.26716C10.7069 4.38195 10.6081 5.63186 10.8353 6.82283C9.04057 6.71198 7.28485 6.13817 5.68208 5.13862C4.07931 4.13907 2.66531 2.73613 1.53184 1.02085C1.14428 1.84324 0.921431 2.79672 0.921431 3.81219C0.920998 4.72634 1.104 5.62649 1.45421 6.43277C1.80442 7.23906 2.311 7.92654 2.92901 8.43423C2.21228 8.40617 1.51137 8.16795 0.884612 7.73937V7.81088C0.88454 9.09302 1.24508 10.3357 1.90505 11.3281C2.56502 12.3204 3.48377 13.0014 4.50542 13.2553C3.84054 13.4767 3.14346 13.5093 2.46684 13.3507C2.75508 14.4539 3.31656 15.4186 4.07267 16.1097C4.82878 16.8009 5.74166 17.1839 6.68352 17.2051C5.08466 18.7491 3.11008 19.5866 1.07742 19.5829C0.71736 19.583 0.357601 19.5571 0 19.5054C2.06326 21.1373 4.46505 22.0034 6.918 22C15.2215 22 19.7609 13.5402 19.7609 6.20306C19.7609 5.96469 19.756 5.72393 19.7473 5.48556C20.6303 4.7001 21.3924 3.72744 21.9981 2.61318L22 2.6096Z" fill="white"/>
            </svg>
        </a>
        {/* Whatsapp */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-1">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0406 13.1835C15.7661 13.0469 14.4204 12.3888 14.1699 12.2971C13.9193 12.2064 13.737 12.1614 13.5537 12.4346C13.3713 12.7059 12.8472 13.3201 12.6878 13.5016C12.5276 13.684 12.3682 13.706 12.0947 13.5703C11.8211 13.4328 10.9387 13.1459 9.8933 12.2183C9.07999 11.4959 8.5301 10.604 8.37076 10.3309C8.21141 10.0586 8.35326 9.91102 8.4905 9.77535C8.61392 9.65344 8.76406 9.45727 8.9013 9.29869C9.03854 9.13919 9.08367 9.02552 9.17486 8.84311C9.26697 8.66161 9.22091 8.50302 9.15183 8.36644C9.08367 8.22986 8.53655 6.88878 8.30812 6.34336C8.08614 5.81261 7.86048 5.88503 7.69284 5.87586C7.53258 5.86853 7.3502 5.86669 7.16783 5.86669C6.98546 5.86669 6.68887 5.93453 6.43833 6.20769C6.18688 6.47994 5.48041 7.13903 5.48041 8.48011C5.48041 9.82027 6.46044 11.1155 6.59768 11.2979C6.73492 11.4794 8.52734 14.2313 11.2731 15.411C11.927 15.6915 12.4364 15.8593 12.8334 15.9839C13.4892 16.192 14.086 16.1627 14.5576 16.0921C15.0827 16.0142 16.1769 15.433 16.4053 14.7968C16.6328 14.1607 16.6328 13.6153 16.5647 13.5016C16.4965 13.3879 16.3141 13.3201 16.0397 13.1835H16.0406ZM11.0465 19.9696H11.0428C9.41197 19.9699 7.81108 19.5336 6.40794 18.7064L6.07635 18.5103L2.62968 19.4104L3.54983 16.0664L3.33338 15.7236C2.42164 14.2792 1.93914 12.6076 1.94163 10.9019C1.94347 5.90611 6.02753 1.84162 11.0502 1.84162C13.4818 1.84162 15.7679 2.78578 17.4867 4.49811C18.3344 5.33831 19.0063 6.33746 19.4636 7.43776C19.9208 8.53807 20.1542 9.71768 20.1504 10.9084C20.1486 15.9042 16.0645 19.9696 11.0465 19.9696ZM18.7946 3.19737C17.7797 2.18071 16.5722 1.37461 15.2421 0.82577C13.9119 0.276929 12.4855 -0.00373655 11.0456 3.75627e-05C5.00882 3.75627e-05 0.09395 4.89045 0.0921078 10.901C0.0893105 12.8139 0.593519 14.6936 1.55386 16.3506L0 22L5.80648 20.4838C7.41272 21.3548 9.21271 21.8111 11.0419 21.8112H11.0465C17.0832 21.8112 21.9981 16.9208 21.9999 10.9093C22.0044 9.47677 21.7234 8.05762 21.1732 6.73389C20.623 5.41016 19.8146 4.20815 18.7946 3.19737Z" fill="white"/>
            </svg>
        {/* Linkedin */}
        <a href={'https://www.linkedin.com/in/teukumufti/'} target='blank'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-1">
            <path d="M4.99417 22V7.15664H0.278238V22H4.99417ZM2.63682 5.12881C4.28134 5.12881 5.30499 3.98901 5.30499 2.56465C5.27435 1.10816 4.28141 0 2.66802 0C1.05489 0 0 1.10818 0 2.56465C0 3.98908 1.02339 5.12881 2.60603 5.12881H2.63667H2.63682ZM7.60443 22H12.3204V13.7107C12.3204 13.2671 12.351 12.8239 12.4755 12.5068C12.8165 11.6205 13.5924 10.7024 14.8952 10.7024C16.6017 10.7024 17.2844 12.0636 17.2844 14.059V21.9999H22V13.4888C22 8.92955 19.6734 6.80816 16.5706 6.80816C14.0266 6.80816 12.9095 8.29584 12.289 9.30909H12.3205V7.15633H7.60453C7.66642 8.54915 7.60453 21.9997 7.60453 21.9997L7.60443 22Z" fill="white"/>
            </svg>
        </a>
        </div>
     </div>
    
    <div className="mt-48">
        <About/>
    </div>

    </div>
    
    )
}

export default Home;