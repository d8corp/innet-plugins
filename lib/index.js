'use strict';

var innet = require('innet');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function plugins(target, parent, plugins, plugin) {
    var props = target.props;
    props.__proto__ = plugins;
    innet__default['default'](target.children, parent, props, plugin);
}

module.exports = plugins;
