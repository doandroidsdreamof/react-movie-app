import React from 'react'
import { Link } from 'react-router-dom'

function RegisterLink() {
    return (
        <p className="border-t pt-6 text-sm">
            Don't have an account?
            <Link to="/register" className="text-sky-500  ml-2">
                Sign up
            </Link>
        </p>
    )
}

export default RegisterLink
