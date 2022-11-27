import * as React from 'react'
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
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from 'react-share'
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share'

function ShareModal(prop) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClose = () => {
    prop.close()
  }

  return (
    <div  >
      <Dialog open={prop.open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <CloseIcon className="cursor-pointer ml-auto mr-2 mt-1" onClick={handleClose} />
        <DialogTitle id="responsive-dialog-title">Share</DialogTitle>

        <DialogContent className=' w-96'>
        <div className='flex flex-col gap-y-4  w-full'>
          <div className='flex flex-row gap-x-4 m-auto  w-full justify-between  '>
            <TwitterShareButton url={window.location.href}>
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={window.location.href}>
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton url={window.location.href}>
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>
            <TelegramShareButton url={window.location.href}>
              <TelegramIcon size={40} round={true} />
            </TelegramShareButton>
          </div>
          <div className='flex flex-row gap-x-4 m-auto  w-full justify-between'>
            <WhatsappShareButton url={window.location.href}>
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
            <RedditShareButton url={window.location.href}>
              <RedditIcon size={40} round={true} />
            </RedditShareButton>
            <PinterestShareButton url={window.location.href}>
              <PinterestIcon size={40} round={true} />
            </PinterestShareButton>
            <EmailShareButton url={window.location.href}>
              <EmailIcon size={40} round={true} />
            </EmailShareButton>
          </div>
        </div>












          <DialogContentText></DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ShareModal
