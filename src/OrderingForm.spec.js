import { render, screen } from '@testing-library/react'
import { findRenderedComponentWithType } from 'react-dom/test-utils'
import OrderingForm from './OrderingForm'

describe('Header', () => {
  it('renders Headine', () => {
    render(<OrderingForm />)

    const healineEl = screen.getByText('Rette mich, wer kann!')
    expect(healineEl).toBeInTheDocument()
  })

  it('has all input fields', () => {
    render(<OrderingForm />)

    const name = screen.getByLabelText('Nachname:')
    expect(name).toBeInTheDocument()

    const forname = screen.getByLabelText('Vorname:')
    expect(forname).toBeInTheDocument()

    const street = screen.getByLabelText('Straße:')
    expect(street).toBeInTheDocument()

    const zip = screen.getByLabelText('Postleitzahl:')
    expect(zip).toBeInTheDocument()

    const city = screen.getByLabelText('Stadt:')
    expect(city).toBeInTheDocument()

    const eMail = screen.getByLabelText('eMail:')
    expect(eMail).toBeInTheDocument()

    const mount = screen.getByLabelText('Anzahl:')
    expect(mount).toBeInTheDocument()

    const message = screen.getByLabelText('Nachricht:')
    expect(message).toBeInTheDocument()
  })
})
