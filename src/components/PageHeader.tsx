import NavUtils from '../utils/NavUtils';

import {ReactComponent as Logo} from '../assets/img/logo.svg';

const PageHeader = (props: {
  showInquiry: (value: boolean) => void;
}) => {
  return (
    <div className="pageHeader">
      <nav>
        <Logo onClick={() => NavUtils.redirectToRoot()}/>
        <button className="btn" onClick={() => props.showInquiry(true)}>Contact</button>
      </nav>
    </div>
  )
}

export default PageHeader;
