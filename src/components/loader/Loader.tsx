import { isMobile } from 'react-device-detect'
import * as Styles from './Styles'

const Loader = () => {
  return (
    <Styles.Container>
      <Styles.BookWrapper style={isMobile?{transform: 'scale(0.5)'}:{transform: 'scale(0.8)'}}>
        <div className="inner">
          <div className="left" />
          <div className="middle" />
          <div className="right" />
        </div>
        <ul>
          {Array.from({ length: 19 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </Styles.BookWrapper>
    </Styles.Container>
  )
}

export default Loader
