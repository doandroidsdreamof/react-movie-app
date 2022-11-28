import * as React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { SocialIcon } from 'react-social-icons'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

function ShareModal(prop) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('320px'))
  const [copy, setCopy] = useState(false)

  const handleClose = () => {
    prop.close()
  }

  const copyToClipBoard = async () => {
    navigator.clipboard.writeText(window.location.href)
    injectStyle()
    toast.dark('Link copied to clipboard.')
  }

  return (
    <>
      <div className=''>
        <Dialog  open={prop.open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
          <div className=" flex flex-row sm:w-96 w-full  mx-auto justify-between  items-center">
            <DialogTitle className='translate-x-2' id="responsive-dialog-title">Share</DialogTitle>
            <CloseIcon className="cursor-pointer ml-auto mr-4 sm:mr-7 sm:translate-x-0" onClick={handleClose} />
          </div>
          <DialogContent className=" sm:w-96 w-full">
            <div className="flex flex-col gap-y-4  w-full ">
              <div className="flex flex-row sm:gap-x-4 gap-x-2 m-auto   w-full justify-between  ">
                <TwitterShareButton url={window.location.href}>
                  <TwitterIcon size={45} round={true} />
                </TwitterShareButton>
                <FacebookShareButton url={window.location.href}>
                  <FacebookIcon size={45} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton url={window.location.href}>
                  <LinkedinIcon size={45} round={true} />
                </LinkedinShareButton>
                <TelegramShareButton url={window.location.href}>
                  <TelegramIcon size={45} round={true} />
                </TelegramShareButton>
              </div>
              <div className="flex flex-row sm:gap-x-4 gap-x-2 m-auto  w-full justify-between">
                <WhatsappShareButton url={window.location.href}>
                  <WhatsappIcon size={45} round={true} />
                </WhatsappShareButton>
                <RedditShareButton url={window.location.href}>
                  <RedditIcon size={45} round={true} />
                </RedditShareButton>
                <PinterestShareButton url={window.location.href}>
                  <PinterestIcon size={45} round={true} />
                </PinterestShareButton>
                <EmailShareButton url={window.location.href}>
                  <EmailIcon size={45} round={true} />
                </EmailShareButton>
              </div>
              <div className="flex flex-row gap-x-4  w-full">
                <input
                  type="text"
                  value={window.location.href}
                  className="input input-bordered mr-auto input-info bg-gray-200 w-full max-w-sm"
                />

                <Button onClick={copyToClipBoard} variant="contained">
                  <ContentCopyIcon />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default ShareModal
