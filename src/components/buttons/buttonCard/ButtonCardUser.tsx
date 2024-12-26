import * as Styles from './Styles'

interface Props {
  name: string
}

const ButtonCardUser = ({ name }: Props) => {
  return (
    <Styles.CardUser>
      {/* <Styles.UserIcon src="https://scontent.fumu2-1.fna.fbcdn.net/v/t39.30808-6/467768068_8283206518450898_6615070005369104782_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH7sXJiK96d8-rlpnThMMAprWa7rTc2MvatZrutNzYy9mzT6Nt8wNdcwNimSk1oPz-SsU1HW6OMuutBR0OC4FAY&_nc_ohc=oW-HymclICkQ7kNvgHbtyat&_nc_zt=23&_nc_ht=scontent.fumu2-1.fna&_nc_gid=AU1fk1LNC47C6_sseYZ7Nrv&oh=00_AYDEa3v6KnbBX_EOCWGxS4B2X2NvNkmh3AJQcjxXNABcIg&oe=674F01A8" /> */}
      <Styles.UserText>{name}</Styles.UserText>
    </Styles.CardUser>
  )
}

export default ButtonCardUser
