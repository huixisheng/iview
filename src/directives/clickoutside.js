function documentHandler (el, binding, vnode, event) {
    // @todo event怎么可以在最前面？
    if (el.contains(event.target)) {
        return false;
    }
    if (binding.expression) {
        vnode.context[binding.expression]();
    }
};
export default {
    bind (el, binding, vnode) {
        document.addEventListener('click', documentHandler.bind(null, el, binding, vnode));
    },
    update () {

    },
    unbind (el, binding, vnode) {
        document.removeEventListener('click', documentHandler.bind(null, el, binding, vnode));
    }
};