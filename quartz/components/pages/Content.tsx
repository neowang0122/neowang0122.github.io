import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import fs from 'fs';

const comment = `
  <head>
      <link
          rel="stylesheet"
          href="https://unpkg.com/@waline/client@v2/dist/waline.css"
      />
      <link
          rel="stylesheet"
          href="https://unpkg.com/@waline/client@v2/dist/waline-meta.css"
      />
  </head>
  <body>
      <div id="waline"></div>
      <script type = "module" >
          import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

          init ({
              el: "#waline",
              serverURL: "https://waline-neowang0122-github-io.vercel.app",
              reaction: true, 
              emoji: [
                  'https://unpkg.com/@waline/emojis@1.2.0/bilibili',
              ],
              comment: true, 
              pageview: true, 
          })
      </script>
  </body> 
`; 

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return (
    <div> 
      {/* Support for annotations using hypothes.is */}
      <script src="https://hypothes.is/embed.js" async></script>

      views: <span class="waline-pageview-count" />

      <article class={classString}>{content}</article>

      {/* Support for comments using giscus */}
      {/* <script src="https://giscus.app/client.js"
        data-repo="neowang0122/neowang0122.github.io"
        data-repo-id="R_kgDOLi3ZYQ"
        data-category="giscus"
        data-category-id="DIC_kwDOLi3ZYc4CeGQg"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async>
      </script> */}
      
      <div dangerouslySetInnerHTML={{ __html: comment }} />

    </div>
  )
}

export default (() => Content) satisfies QuartzComponentConstructor
