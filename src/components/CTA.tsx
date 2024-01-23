import {ReactComponent as Logo} from '../assets/img/logo.svg';
import {Shine} from "./Shine";
import webm from '../assets/video/clt.webm';
import mp4 from '../assets/video/clt.mp4';

const CTA = (props: {
  copy: string,
  showInquiry: (value: boolean) => void;
}) => {
  return (
    <div className="cta">
      <div className="copy">
        <a href="/"><Logo /></a>
        <p>{props.copy}</p>
        <div className="btnWrap">
          <Shine puffyness="3">
            <button className="btn" onClick={() => props.showInquiry(true)}>Let's Talk</button>
          </Shine>
        </div>
      </div>
      <video preload='metadata' playsInline autoPlay loop muted id="video">
        <source src={mp4} type="video/mp4"></source>
        <source src={webm} type="video/webm"></source>
      </video>
    </div>
  )
}

export default CTA;