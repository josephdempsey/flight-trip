/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking($customer: String) {
    onCreateBooking(customer: $customer) {
      id
      status
      outboundFlight {
        id
        departureDate
        departureAirportCode
        departureAirportName
        departureCity
        departureLocale
        arrivalDate
        arrivalAirportCode
        arrivalAirportName
        arrivalCity
        arrivalLocale
        ticketPrice
        ticketCurrency
        flightNumber
        seatAllocation
        seatCapacity
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      paymentToken
      checkedIn
      customer
      createdAt
      bookingReference
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking($customer: String) {
    onUpdateBooking(customer: $customer) {
      id
      status
      outboundFlight {
        id
        departureDate
        departureAirportCode
        departureAirportName
        departureCity
        departureLocale
        arrivalDate
        arrivalAirportCode
        arrivalAirportName
        arrivalCity
        arrivalLocale
        ticketPrice
        ticketCurrency
        flightNumber
        seatAllocation
        seatCapacity
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      paymentToken
      checkedIn
      customer
      createdAt
      bookingReference
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking($customer: String) {
    onDeleteBooking(customer: $customer) {
      id
      status
      outboundFlight {
        id
        departureDate
        departureAirportCode
        departureAirportName
        departureCity
        departureLocale
        arrivalDate
        arrivalAirportCode
        arrivalAirportName
        arrivalCity
        arrivalLocale
        ticketPrice
        ticketCurrency
        flightNumber
        seatAllocation
        seatCapacity
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      paymentToken
      checkedIn
      customer
      createdAt
      bookingReference
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
