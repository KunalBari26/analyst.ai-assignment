import { init, h } from 'snabbdom';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { vnode } from 'snabbdom/vnode';

const patch = init([classModule, propsModule, eventListenersModule]);

let state = { count: 0 };


function template() {
  return h('div', [
    h('h1', state.count),
    h('button', { on: { click: handleClick } }, 'Add')
  ]);
}

function updateState(newState) {
  state = { ...state, ...newState };
  render();
}

function handleClick() {
  updateState({ count: state.count + 1 });
}

function mount() {
  console.log('Component mounted');
}

function render() {
  const newVnode = template();
  patch(oldVnode, newVnode);
  oldVnode = newVnode;
}

let oldVnode = null;
mount();
render();

module.exports= { template, updateState };
