import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [shippingName, setShippingName] = useState(shippingAddress.shippingName)
  const [address, setAddress] = useState(shippingAddress.address)
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      saveShippingAddress({
        shippingName,
        address,
        phoneNumber,
        city,
        postalCode,
        country,
      })
    )
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Giao hàng</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='shippingName'>
          <Form.Label>Tên ngườI nhận</Form.Label>
          <Form.Control
            type='text'
            placeholder='Tên người nhận'
            value={shippingName}
            required
            onChange={(e) => setShippingName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='address'>
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phoneNumber'>
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type='number'
            max='9999999999'
            placeholder='Số điện thoại'
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>Thành Phố</Form.Label>
          <Form.Control
            type='text'
            placeholder='Tên thành phố'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Mã bưu chính</Form.Label>
          <Form.Control
            type='text'
            placeholder='Mã bưu chính'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Quốc gia</Form.Label>
          <Form.Control
            type='text'
            placeholder='Tên quốc gia'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Tiếp tục
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
