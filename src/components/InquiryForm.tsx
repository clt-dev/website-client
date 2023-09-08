import React, {useState} from 'react';
import PhoneNumeberInput from '@bebeau/phone-number-input';

const InquiryForm = (props: {
  show: boolean;
  showInquiry: (value: boolean) => void;
}) => {
  const [inquiry, setInqiry] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const updateField = (value: string, key: string) => {
    let info = {...inquiry};
    info[key as keyof typeof info] = value;

    setInqiry(info);
  }

  return (
    <div className={props.show ? 'modal show' : 'modal'}>
      <button className="close" onClick={() => props.showInquiry(false)}></button>
      <div className="half">
        <div className="image"></div>
        <div className="form">
          <div className="half">
            <div className="field">
              <div className="label">First Name</div>
              <input type="text" placeholder="John" />
            </div>
            <div className="field">
              <div className="label">Last Name</div>
              <input type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="half">
            <div className="field">
              <div className="label">Email</div>
              <input type="text" placeholder="email@address..." />
            </div>
            <div className="field">
              <div className="label">Phone</div>
              <PhoneNumeberInput 
                onInputChange={(value: string) => updateField(value, 'phone')}
                value={inquiry.phone ? inquiry.phone : ''}
                placeholder='Phone Number'
              />
            </div>
          </div>
          <div className="field">
            <div className="label">How can we help?</div>
            <textarea onChange={(e) => updateField(e.target.value, 'message')} placeholder="Tell us about your project..."></textarea>
          </div>
          <div className="field">
            <button className="btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InquiryForm;