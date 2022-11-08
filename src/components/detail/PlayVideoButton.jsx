import React from 'react'
import { BsPlay } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

const PlayVideoButton = (props) => {
    const [isActive, setIsActive] = useState(true)
    useEffect(() => {}, [props.disabledButton])

    function openVideo() {
        props.handleClick()
        setIsActive(!isActive)
    }

    return (
        <Tooltip title={props.disabledButton !== '' ? '' : 'Video not found'} followCursor>
                <div
                    className="btn border-none  align-middle right-4 rounded-full z-50 justify-center md:bottom-8 bottom-14 absolute  px-2  bg-star-second"
                >
            <button
             disabled={props.disabledButton !== '' ? '' : 'true'}
            >
            {isActive ? (
                        <BsPlay className="text-white z-50" size={30} onClick={openVideo} />
                    ) : (
                        <CgClose className="text-white z-50" size={30} onClick={openVideo} />
                    )}
            </button>
          
                </div>
        </Tooltip>
    )
}

export default PlayVideoButton
