import { Link } from "react-router-dom";
import { navigationItems } from "../../routes/const";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div class="header">
        {/* // fix this shit */}
        <div class="logo">LOGO</div>
        <div class="menu-toggle">
          <input type="checkbox" class="nav__checkbox" id="nav-toggle" />
          <label for="nav-toggle" class="nav__button">
            <span class="nav__icon">&nbsp;</span>
          </label>
          <div class="navigation">
            <div class="large_menu">
              <a class="github" href="https://github.com/SpaceMushroom">
                <div class="github_box">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 4.49338C12.95 4.49338 4 13.4434 4 24.4934C4 33.3434 9.725 40.8184 17.675 43.4684C18.675 43.6434 19.05 43.0434 19.05 42.5184C19.05 42.0434 19.025 40.4684 19.025 38.7934C14 39.7184 12.7 37.5684 12.3 36.4434C12.075 35.8684 11.1 34.0934 10.25 33.6184C9.55 33.2434 8.55 32.3184 10.225 32.2934C11.8 32.2684 12.925 33.7434 13.3 34.3434C15.1 37.3684 17.975 36.5184 19.125 35.9934C19.3 34.6934 19.825 33.8184 20.4 33.3184C15.95 32.8184 11.3 31.0934 11.3 23.4434C11.3 21.2684 12.075 19.4684 13.35 18.0684C13.15 17.5684 12.45 15.5184 13.55 12.7684C13.55 12.7684 15.225 12.2434 19.05 14.8184C20.65 14.3684 22.35 14.1434 24.05 14.1434C25.75 14.1434 27.45 14.3684 29.05 14.8184C32.875 12.2184 34.55 12.7684 34.55 12.7684C35.65 15.5184 34.95 17.5684 34.75 18.0684C36.025 19.4684 36.8 21.2434 36.8 23.4434C36.8 31.1184 32.125 32.8184 27.675 33.3184C28.4 33.9434 29.025 35.1434 29.025 37.0184C29.025 39.6934 29 41.8434 29 42.5184C29 43.0434 29.375 43.6684 30.375 43.4684C34.3454 42.128 37.7954 39.5763 40.2396 36.1724C42.6838 32.7685 43.9989 28.6839 44 24.4934C44 13.4434 35.05 4.49338 24 4.49338Z"
                      fill="#adadad"
                    ></path>
                  </svg>
                  <p>Github</p>
                </div>
              </a>
              <a
                class="linkedin"
                href="https://www.linkedin.com/in/ignas-grinius-3165a4127/"
              >
                <div class="linkedin_box">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42 8.64706V39.3529C42 40.055 41.7211 40.7283 41.2247 41.2247C40.7283 41.7211 40.055 42 39.3529 42H8.64706C7.94502 42 7.27173 41.7211 6.77531 41.2247C6.27889 40.7283 6 40.055 6 39.3529V8.64706C6 7.94502 6.27889 7.27173 6.77531 6.77531C7.27173 6.27889 7.94502 6 8.64706 6H39.3529C40.055 6 40.7283 6.27889 41.2247 6.77531C41.7211 7.27173 42 7.94502 42 8.64706V8.64706ZM16.5882 19.7647H11.2941V36.7059H16.5882V19.7647ZM17.0647 13.9412C17.0675 13.5407 16.9914 13.1436 16.8407 12.7726C16.69 12.4016 16.4677 12.0638 16.1866 11.7787C15.9054 11.4936 15.5707 11.2666 15.2018 11.1108C14.8329 10.955 14.4369 10.8734 14.0365 10.8706H13.9412C13.1268 10.8706 12.3458 11.1941 11.7699 11.7699C11.1941 12.3458 10.8706 13.1268 10.8706 13.9412C10.8706 14.7555 11.1941 15.5366 11.7699 16.1124C12.3458 16.6883 13.1268 17.0118 13.9412 17.0118V17.0118C14.3417 17.0216 14.7402 16.9525 15.1139 16.8083C15.4877 16.664 15.8293 16.4476 16.1194 16.1713C16.4095 15.895 16.6423 15.5642 16.8045 15.1979C16.9667 14.8316 17.0551 14.437 17.0647 14.0365V13.9412ZM36.7059 26.4141C36.7059 21.3212 33.4659 19.3412 30.2471 19.3412C29.1932 19.2884 28.1438 19.5129 27.2037 19.9922C26.2637 20.4715 25.4657 21.189 24.8894 22.0729H24.7412V19.7647H19.7647V36.7059H25.0588V27.6953C24.9823 26.7725 25.273 25.8567 25.8677 25.1469C26.4625 24.4372 27.3133 23.9908 28.2353 23.9047H28.4365C30.12 23.9047 31.3694 24.9635 31.3694 27.6318V36.7059H36.6635L36.7059 26.4141Z"
                      fill="#66add3"
                    ></path>
                  </svg>
                  <p>LinkedIn</p>
                </div>
              </a>
            </div>
            <div class="small_menu">
              <ul>
                <li class="menu-one">
                  <a aria-current="page" class="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li class="menu-two">
                  <a class="nav-link" href="/projects">
                    Projects
                  </a>
                </li>
                <li class="menu-three">
                  <a class="nav-link" href="/contacts">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <header>
        <div>LOGO</div>
        <nav>
          {navigationItems.map((item) => (
            <Link to={item.route} key={item.route}>
              {item.title}
            </Link>
          ))}
        </nav>
      </header> */}
    </>
  );
};

export default Header;
