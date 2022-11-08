import React from 'react'
import { Link } from 'react-router-dom'

function PasswordReset() {
    return (
        <Link to="/login" className="p-2 -mr-2">
            <span className="text-sm text-sky-500">Forgot your password ?</span>
        </Link>
    )
}

export default PasswordReset
