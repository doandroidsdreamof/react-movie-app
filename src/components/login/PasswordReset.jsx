import React from 'react'
import { Link } from 'react-router-dom'

function PasswordReset() {
    return (
      <Link to="/login" className="">
        <span className="text-sm text-sky-600 translate-y-2  block">Forgot your password?</span>
      </Link>
    )
}

export default PasswordReset
