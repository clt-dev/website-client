import {useState, useEffect, forwardRef} from 'react';

import
{
  validatePhoneNumberLength,
  AsYouType,
  CountryCode
} from 'libphonenumber-js';

const Typewriter = forwardRef((props: { 
  text: string, 
  delay: number,
  complete: boolean, 
  current: boolean,
  keydown: Function,
  focus?: Function,
  hasFocus?: boolean,
  hasError?: boolean,
  value?: string,
  hideInput?: boolean,
  isTextArea?: boolean,
  isPhone?: boolean,
  modalRef?: any,
}, ref: any) => {

  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typeComplete, setTypeComplete] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onPhoneChange = (value: any) => {
    if (validatePhoneNumberLength(value, 'US' as CountryCode) === 'TOO_LONG') {
      return;
    }

    let number = new AsYouType('US' as CountryCode).input(value);
    if (validatePhoneNumberLength(value, 'US' as CountryCode) === 'TOO_SHORT') {
      number = value;
    }

    setValue(number);
	}

  const handleValueUpdate = (e: any) => {
    if (props.isPhone) {
      return onPhoneChange(ref.current.value);
    }

    setValue(ref.current.value);
  }

  const handlePromptClick = () => {
    if (props.focus) {
      props.focus();
    }
    ref.current?.focus();
  }

  useEffect(() => {
    if (props.complete) return setCurrentText(props.text);
    if (currentIndex < props.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + props.text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, props.delay);
      return () => clearTimeout(timeout);
    }
    if (currentIndex === props.text.length) {
      setTypeComplete(true);
    }
  }, [currentIndex, props.delay, props.text, props.complete]);

  useEffect(() => {
    if (props.complete) {
      setTypeComplete(true);
      setFocus(false);
    }
    if (props.value) {
      setValue(props.value);
    }
    if (props.hasError) {
      setError(true);
      setTimeout(() => setError(false), 200);

    }
  }, [props]);

  useEffect(() => {
    if (props.current) {
      setFocus(true);
      ref.current?.focus();
    }
    if (props.hasFocus) {
      setFocus(props.hasFocus);
    }
  }, [props, ref, typeComplete]);

  const inputStyles = `
    userInput
    ${focus ? 'focus' : ''}
    ${error ? 'error' : ''}
  `;

  return (
    <div onClick={handlePromptClick}>
      <div 
        className={typeComplete ? 'prompt complete' : 'prompt'} 
        dangerouslySetInnerHTML={{
        __html: currentText
        }}>
      </div>
      {typeComplete && (
        <div className={inputStyles}>
          {props.isTextArea && (
            <>
              <textarea ref={ref} value={value} onChange={(e) => handleValueUpdate(e)} onKeyDown={(e) => props.keydown(e)}>
              </textarea>
              {value}
            </>
          )}
          {!props.isTextArea && (
            <>
              <input ref={ref} type="text" value={value} onChange={(e) => handleValueUpdate(e)} onKeyDown={(e) => props.keydown(e)} />
              <span onFocus={ref.current?.focus()}>{value}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
});

export default Typewriter;