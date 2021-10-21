import { useState } from 'react'
import { initialData } from '../initialData'

export default function useOrder() {
  const [orderData, setOrderData] = useState(() => {
    if (localStorage.getItem('usersLocalStorage')) {
      return JSON.parse(localStorage.getItem('usersLocalStorage'))
    } else {
      return initialData
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
    localStorage.setItem('productsLocalStorage', stringifiedValue)
  }
  return { handleAddOrder }
}
