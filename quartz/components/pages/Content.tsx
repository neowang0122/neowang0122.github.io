import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import fs from 'fs';

// https://www.dusaiphoto.com/article/31/
const BackToTop = `
  <script>
      // 向上滚动的函数
      $(function () {
          $('#BackTop').click(function () {
              $('html,body').animate({scrollTop: 0}, 500);
          });
          $(window).scroll(function () {
              if ($(this).scrollTop() > 300) {
                  $('#BackTop').fadeIn(300);
              } else {
                  $('#BackTop').stop().fadeOut(300);
              }
          }).scroll();
      });
  </script>

  <style>
      /* 按钮边框的大小、位置、样式 */
      .toTop-arrow {
          width: 3.5rem;
          height: 3.5rem;
          padding: 0;
          margin: 0;
          border: 0;
          border-radius: 33%;
          opacity: 0.7;
          background: black;
          cursor: pointer;
          position: fixed;
          right: 1.5rem;
          bottom: 1.5rem;
          display: none;
      }

      /* 绘制按钮中的向上箭头 */
      .toTop-arrow::before, .toTop-arrow::after {
          width: 31px;
          height: 7px;
          border-radius: 3px;
          background: orange;
          position: absolute;
          content: "";
      }

      .toTop-arrow::before {
          transform: rotate(-45deg) translate(0, -50%);
          left: 0.4rem;
      }

      .toTop-arrow::after {
          transform: rotate(45deg) translate(0, -50%);
          right: 0.4rem;
      }

      /* 取消点击按钮时的聚焦 */
      .toTop-arrow:focus {
          outline: none;
      }
  </style>
`


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
                  'https://unpkg.com/@waline/emojis@1.2.0/alus',
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

      <button type="button" id="BackTop" class="toTop-arrow" style="z-index: 100;"></button>

      views: <span class="waline-pageview-count" />, comments: <span class="waline-comment-count" />

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
      <div dangerouslySetInnerHTML={{ __html: BackToTop }} />

    </div>
  )
}

export default (() => Content) satisfies QuartzComponentConstructor
