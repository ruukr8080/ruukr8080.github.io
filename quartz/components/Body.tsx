// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { RootNavBar } from "." // RootNavBar  커스텀


const Body: QuartzComponent = ({ children, ...rest }: QuartzComponentProps) => {
  return (
    <>
      <RootNavBar {...rest} />
      <div id="quartz-body">{children}</div>
    </>
  )
}

Body.afterDOMLoaded = clipboardScript
Body.css = clipboardStyle + `
  body {
    padding-top: 50px; /* RootNavBar 높이에 맞게 조절 */
  }
  #quartz-body {
    margin-top: 50px; /* RootNavBar 높이만큼 여백 추가 */
  }
`

export default (() => Body) satisfies QuartzComponentConstructor