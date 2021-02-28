import 'styled-componets'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      title: string;

      back: string,
      backBox: string,
      background: string;
      backgroundOverlay: string;
      text: string;
    };
  }
}