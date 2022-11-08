import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'

const Hamburger = (props) => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {}, [props.menuToggle])

  return (
    <button>
      {props.menuToggle ? (
        <MdClose color={'white'} size={30} />
      ) : (
        <GiHamburgerMenu className="" color={'white'} size={28} />
      )}
    </button>
  )
}
export default Hamburger
