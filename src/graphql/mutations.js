/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processBooking = /* GraphQL */ `
  mutation ProcessBooking($input: CreateBookingInput!) {
    processBooking(input: $input) {
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
export const createFlight = /* GraphQL */ `
  mutation CreateFlight(
    $input: CreateFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    createFlight(input: $input, condition: $condition) {
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
  }
`;
export const updateFlight = /* GraphQL */ `
  mutation UpdateFlight(
    $input: UpdateFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    updateFlight(input: $input, condition: $condition) {
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
  }
`;
export const deleteFlight = /* GraphQL */ `
  mutation DeleteFlight(
    $input: DeleteFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    deleteFlight(input: $input, condition: $condition) {
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
  }
`;
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
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
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
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
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
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
