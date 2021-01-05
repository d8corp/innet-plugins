import innet from 'innet'
import renderElement from 'innet/renderElement'
import getHtml from 'innet/getHtml'

import plugins from '.'

describe('plugins', () => {
  test('simple', () => {
    function toSpan (content, ...args) {
      content.type = 'span'
      innet(content, ...args)
    }
    const element = renderElement((
      <div>
        <plugins div={toSpan}>
          <section />
          <div />
        </plugins>
      </div>
    ), {plugins})
    expect(getHtml(element)).toBe('<div><section></section><span></span></div>')
  })
})
