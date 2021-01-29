# @innet/plugins
[![NPM](https://img.shields.io/npm/v/@innet/plugins.svg)](https://github.com/d8corp/innet-plugins/blob/master/CHANGELOG.md)
[![downloads](https://img.shields.io/npm/dm/@innet/plugins.svg)](https://www.npmjs.com/package/@innet/plugins)
[![license](https://img.shields.io/npm/l/@innet/plugins)](https://github.com/d8corp/innet-plugins/blob/master/LICENSE)  
This plugin helps to provide other plugins into a peace of application.

### Installation
npm
```bash
npm i @innet/plugins
```
yarn
```bash
yarn add @innet/plugins
```

Or just download a minified js file
[here](https://github.com/d8corp/innet-plugins/blob/main/lib/innet-plugins.min.js)

### Using
```typescript jsx
import innet from 'innet'
import to from '@innet/to'
import plugins from '@innet/plugins'

innet((
  <>
    <plugins div={to('span')}><div /></plugins>
    <plugins div={to('p')}><div /></plugins>
  </>
), undefined, {plugins})
```
You get this
```html
<span></span><p></p>
```
### Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/innet-plugins/issues).  
[![issues](https://img.shields.io/github/issues-raw/d8corp/innet-plugins)](https://github.com/d8corp/innet-plugins/issues)
> ---
[![stars](https://img.shields.io/github/stars/d8corp/innet-plugins?style=social)](https://github.com/d8corp/innet-plugins/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet-plugins?style=social)](https://github.com/d8corp/innet-plugins/watchers)
