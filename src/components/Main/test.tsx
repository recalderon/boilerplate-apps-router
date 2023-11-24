import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('renderiza o heading', () => {
    // Renderiza o componente
    const {container} = render(<Main />)
    // Busca o elemento e verifica se ele existe
    expect(screen.getByRole('heading', { name: /react avançado/i })).toBeInTheDocument()
    // Gerar snapshot, garante a estrutura do componente
    expect(container.firstChild).toMatchSnapshot()
  })
})
