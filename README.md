<!--
*** Thanks for checking out the react-redux-demo. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username (that is "windsuzu"), repo_name (that is "react-redux-demo"), project_title, project_description
-->

<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![PR Welcome][pr-welcome-shield]](#contributing) -->
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![Author][author-shield]][author-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://windsuzu.github.io/react-redux-demo">
    <img src="public/logo.jpg" alt="" height="120">
  </a>

  <h3 align="center">React Redux Demo</h3>

  <p align="center">
    A simple example of using redux in react, which contains <b>reactjs/toolkit</b> and <b>react-redux</b>.
    <br />
    <a href="https://windsuzu.github.io/react-redux-demo">View Demo</a>
    ·
    <a href="https://github.com/windsuzu/react-redux-demo/issues">Report Bug</a>
    ·
    <a href="https://github.com/windsuzu/react-redux-demo/issues">Request Feature</a>
  </p>
</p>


<details>
<summary>Table of Contents</summary>

* [About](#about)
* [Examples](#examples)
* [Preview](#preview)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

</details>

---

<!-- ABOUT THE PROJECT -->
## About

<table>
<tr>
<td>

這個專案為 redux 的應用展示，使用兩個第三方元件: `@reactjs/toolkit` 以及 `react-redux` 來開發 redux 的主要功能。 專案中分別利用 redux 實作了同步 (synchronous) 與非同步 (asynchronous) 的實際狀況。

* 同步狀況
  * 例如: `本地的狀態改變`、`不需要網路操作 (request/response)`
  * 需要元件: 
    * `createSlice, configureStore` from `@reactjs/toolkit`
    * `Provider, useSelector, useDispatch` from `react-redux`
* 非同步狀況
  * 例如: `需要網路操作`、`載入資料庫物件 (fetch)`、`上傳物件到資料庫 (send request)`

**Built With**

* HTML5, CSS3, Javascript ES6
* React.js + Redux
* @redux.js/toolkit
* react-redux

**[DEMO]** : https://windsuzu.github.io/react-redux-demo

</td>
</tr>
</table>

---

## Examples

## Preview

<!-- <p align="center">
  <img src="images/web/1.png" width=68%>
  <img src="images/phone/1.png" width=22%>
</p>
<p align="center">
  <img src="images/web/2.png" width=68%>
  <img src="images/phone/2.png" width=22%>
</p> -->

## License

Distributed under the MIT License. See [LICENSE](https://github.com/windsuzu/react-redux-demo/blob/main/LICENSE) for more information.

## Contact

Reach out to the maintainer at one of the following places:

* [GitHub discussions](https://github.com/windsuzu/react-redux-demo/discussions)
* The email which is located [in GitHub profile](https://github.com/windsuzu)

## Acknowledgements

* [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)

[contributors-shield]: https://img.shields.io/github/contributors/windsuzu/react-redux-demo.svg?style=for-the-badge
[contributors-url]: https://github.com/windsuzu/react-redux-demo/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/windsuzu/react-redux-demo.svg?style=for-the-badge
[issues-url]: https://github.com/windsuzu/react-redux-demo/issues
[license-shield]: https://img.shields.io/github/license/windsuzu/react-redux-demo.svg?style=for-the-badge&label=license
[license-url]: https://github.com/windsuzu/react-redux-demo/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/windsuzu
[pr-welcome-shield]: https://shields.io/badge/PRs-Welcome-ff69b4?style=for-the-badge
[author-shield]: https://shields.io/badge/Made_with_%E2%9D%A4_by-windsuzu-F4A92F?style=for-the-badge
[author-url]: https://github.com/windsuzu
