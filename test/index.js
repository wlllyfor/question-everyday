const node = {
  tag: 'div',
  children: [
    {
      tag: 'h1',
      children: 'hello'
    }
  ]
}

function render (node, root) {
  const el = document.createElement(node.tag)
  if (typeof node.children === 'string') {
    const text = document.createTextNode(node.children)
    el.appendChild(text)
  }
  if (Array.isArray(node.children)) {
    node.children.forEach(child => render(child, el))
  }
  root.appendChild(el)
}

const app = document.getElementById('app')

render(node, app)