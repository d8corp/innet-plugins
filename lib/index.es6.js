import innet from 'innet';

function plugins(target, parent, plugins, plugin) {
    const { props } = target;
    props.__proto__ = plugins;
    innet(target.children, parent, props, plugin);
}

export default plugins;
