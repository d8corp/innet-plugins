import innet from 'innet'

export default function plugins (target, parent, plugins, plugin) {
  const {props} = target
  props.__proto__ = plugins
  innet(target.children, parent, props, plugin)
}
