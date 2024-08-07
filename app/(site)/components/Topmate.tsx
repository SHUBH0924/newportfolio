import React from 'react'
import Script from 'next/script'

const Topmate = () => {
  return (
    <Script
        src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
        user-profile="https://topmate.io/embed/profile/shubhjeet_paul?theme=D5534D"
        btn-style='{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}'
        embed-version="v1"
        button-text="Let's Connect 🚀"
        position-right="30px"
        position-bottom="30px"
        custom-padding="0px"
        custom-font-size="16px"
        custom-font-weight="500"
        custom-width="200px"
      />
  )
}

export default Topmate