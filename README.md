<img src="https://raw.githubusercontent.com/d8corp/innet/main/logo.svg" align="left" width="90" height="90" alt="InnetJs logo by Mikhail Lysikov">

# &nbsp; @innet/plugins

&nbsp;

[![NPM](https://img.shields.io/npm/v/@innet/plugins.svg)](https://github.com/d8corp/innet-plugins/blob/master/CHANGELOG.md)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@innet/plugins)](https://bundlephobia.com/result?p=@innet/plugins)
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

Or you can include the scripts into the `head`.
```html
<!-- Dependencies (watchState, innet) -->
<script defer src="https://unpkg.com/watch-state/watch-state.min.js"></script>
<script defer src="https://unpkg.com/innet/innet.min.js"></script>

<!-- Target (innetPlugins) -->
<script defer src="https://unpkg.com/@innet/plugins/innet-plugins.min.js"></script>
```

### Using
Provide the plugin to `innet`
```typescript jsx
import innet from 'innet'
import plugins from '@innet/plugins'
import app from './app'

innet(app, undefined, {plugins})
```

Then you can use `plugins` to include any plugin inside the content.
```typescript jsx
import to from '@innet/to'

export default (
  <>
    <plugins div={to('span')}><div /></plugins>
    <plugins div={to('p')}><div /></plugins>
  </>
)
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
