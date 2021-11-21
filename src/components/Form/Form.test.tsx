import { render } from '@testing-library/react'

import Form from './Form'

test('render Form', () => {
  const component = render(<Form />)

  const InpuDNI = component.getAllByTestId('dni')
  // console.log(component)
})
