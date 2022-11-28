import "styled-components"
import { defaultTheme } from "../styles/themes/default"

type ThemeType = typeof defaultTheme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module "worker-loader*" {
  class SomeWorker extends Worker {
    constructor()
  }

  export default SomeWorker
}
