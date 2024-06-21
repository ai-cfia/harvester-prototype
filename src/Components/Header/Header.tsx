import { useRef } from "react";
import cfia from "../../assets/CFIA_Banner.png";
import "./Header.css";
import { useTranslation } from 'react-i18next';

const environment = {
  version: "0.0.1",
};

function Header() {
  const { t } = useTranslation();
  const header = useRef<HTMLElement | null>(null);

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    // Get the offset position of the navbar
    const sticky = header.current!.offsetTop;
    if (window.scrollY > sticky) {
      header.current!.classList.add("sticky");
    } else {
      header.current!.classList.remove("sticky");
    }
  }
  return (
    <header role={"banner"} ref={header} className="">
      <nav>
        <ul>
          <li>
            <a href="https://inspection.canada.ca/" title={t("headerLinkTitle")}>
              <img
                src={cfia}
                id="header-img"
                alt={t("CFIALogo")}
                aria-label={t("textHeader")}
              />
            </a>
          </li>
          <li id="version">
            {t("headerAlphaVersionText")}{" "}
            {environment.version !== "" ? "v" + environment.version : ""}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
