import { useState } from 'react'

export default function useOrder() {
  const [orderData, setOrderData] = useState(() => {
    if (localStorage.getItem('usersLocalStorage')) {
      return JSON.parse(localStorage.getItem('usersLocalStorage'))
    } else {
      return ''
    }
  })

  function handleAddOrder({
    firstName,
    name,
    street,
    zipCode,
    city,
    quantity,
    message,
  }) {
    const addOrder = [
      ...orderData,
      {
        firstName: firstName,
        name: name,
        street: street,
        zipCode: zipCode,
        city: city,
        quantity: quantity,
        message: message,
      },
    ]
    setOrderData(addOrder)

    const stringifiedValue = JSON.stringify(addOrder)
    localStorage.setItem('usersLocalStorage', stringifiedValue)
  }
  return { handleAddOrder }
}
