import React from 'react'
import FormImpl from 'react-bootstrap/esm/Form'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}
Message.defaultProps = {
  variant: 'info',
}

export default Message
