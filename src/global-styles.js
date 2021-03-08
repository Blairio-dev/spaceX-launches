import { Global, css } from "@emotion/react";
import BrandonGrotesque_Black_TTF from "./assets/font/BrandonGrotesque-Black.ttf";
import BrandonGrotesque_Black_WOFF from "./assets/font/BrandonGrotesque-Black.woff2";
import BrandonGrotesque_Black_WOFF2 from "./assets/font/BrandonGrotesque-Black.woff";
import BrandonGrotesque_Bold_TTF from "./assets/font/BrandonGrotesque-Bold.ttf";
import BrandonGrotesque_Bold_WOFF from "./assets/font/BrandonGrotesque-Bold.woff2";
import BrandonGrotesque_Bold_WOFF2 from "./assets/font/BrandonGrotesque-Bold.woff";
import BrandonGrotesque_Medium_TTF from "./assets/font/BrandonGrotesque-Medium.ttf";
import BrandonGrotesque_Medium_WOFF from "./assets/font/BrandonGrotesque-Medium.woff2";
import BrandonGrotesque_Medium_WOFF2 from "./assets/font/BrandonGrotesque-Medium.woff";
import BrandonGrotesque_Regular_TTF from "./assets/font/BrandonGrotesque-Regular.ttf";
import BrandonGrotesque_Regular_WOFF from "./assets/font/BrandonGrotesque-Regular.woff2";
import BrandonGrotesque_Regular_WOFF2 from "./assets/font/BrandonGrotesque-Regular.woff";
import BrandonGrotesque_RegularItalic_TTF from "./assets/font/BrandonGrotesque-RegularItalic.ttf";
import BrandonGrotesque_RegularItalic_WOFF from "./assets/font/BrandonGrotesque-RegularItalic.woff2";
import BrandonGrotesque_RegularItalic_WOFF2 from "./assets/font/BrandonGrotesque-RegularItalic.woff";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          background: white;
          margin: 0;
        }

        @font-face {
          font-family: "Brandon Grotesque Black";
          src: url(${BrandonGrotesque_Black_TTF}) format("truetype"),
            url(${BrandonGrotesque_Black_WOFF}) format("woff"),
            url(${BrandonGrotesque_Black_WOFF2}) format("woff2");
        }
        @font-face {
          font-family: "Brandon Grotesque Bold";
          src: url(${BrandonGrotesque_Bold_TTF}) format("truetype"),
            url(${BrandonGrotesque_Bold_WOFF}) format("woff"),
            url(${BrandonGrotesque_Bold_WOFF2}) format("woff2");
        }
        @font-face {
          font-family: "Brandon Grotesque Medium";
          src: url(${BrandonGrotesque_Medium_TTF}) format("truetype"),
            url(${BrandonGrotesque_Medium_WOFF}) format("woff"),
            url(${BrandonGrotesque_Medium_WOFF2}) format("woff2");
        }
        @font-face {
          font-family: "Brandon Grotesque Regular";
          src: url(${BrandonGrotesque_Regular_TTF}) format("truetype"),
            url(${BrandonGrotesque_Regular_WOFF}) format("woff"),
            url(${BrandonGrotesque_Regular_WOFF2}) format("woff2");
        }
        @font-face {
          font-family: "Brandon Grotesque Regular Italic";
          src: url(${BrandonGrotesque_RegularItalic_TTF}) format("truetype"),
            url(${BrandonGrotesque_RegularItalic_WOFF}) format("woff"),
            url(${BrandonGrotesque_RegularItalic_WOFF2}) format("woff2");
        }
      `}
    />
  );
};

export default GlobalStyles;
