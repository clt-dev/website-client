import React, {useState, useEffect, useRef} from 'react';

const services = [
  'Website Design & Development',
  'Software Development',
  'Product Engineering',
  'User-Interface Design',
  'Identity & Branding Design'
]

const Typewriter = (props: { 
  text: string, 
  delay: number,
  value?: string,
  hideInput?: boolean,
  isTextArea?: boolean,
  modalRef?: any,
  complete: boolean, 
  current: boolean,
  callback: (value: string) => void
}) => {
  const keyRef = useRef<boolean>(false);
  const inputRef = useRef<any>(null);
  const valueRef = useRef<string>('');
  const currentRef = useRef<boolean>(false);
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typeComplete, setTypeComplete] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [hide, setHide] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  const enterKeyPress = (e: any) => {
    if (!currentRef.current) return;
    const key = e.key.toLowerCase();
    if (key === 'enter') {
      e.preventDefault();
      props.callback(valueRef.current);
      if (props.hideInput) {
        setHide(true);
      }
    }
  }

  const handleValueUpdate = (e: any) => {
    setValue(e.target.value);
    valueRef.current = e.target.value;
    if (props.modalRef) {
      props.modalRef.scrollTop = props.modalRef.scrollHeight;
    }
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
      valueRef.current = props.value;
    }
  }, [props]);

  useEffect(() => {
    if (props.current) {
      currentRef.current = true;
      setFocus(true);
      inputRef.current?.focus();
    }
  }, [props.current, inputRef.current, currentRef.current, typeComplete]);

  useEffect(() => {
    if (keyRef.current) return;
    keyRef.current = true;
    window.addEventListener('keydown', (e) => enterKeyPress(e));
    return () => {
      window.removeEventListener('keydown', (e) => enterKeyPress(e));
    };
  }, []);

  return (
    <>
    <div 
      className={typeComplete ? 'prompt complete' : 'prompt'} 
      dangerouslySetInnerHTML={{
      __html: currentText
      }}>
    </div>
    {typeComplete && !hide && (
      <div className={focus ? 'userInput focus' : 'userInput'} onClick={() => inputRef.current?.focus()}>
        {props.isTextArea && (
          <>
            <textarea ref={inputRef} onChange={(e) => handleValueUpdate(e)}>
            </textarea>
            {value}
          </>
        )}
        {!props.isTextArea && (
          <>
            <input ref={inputRef} type="text" onChange={(e) => handleValueUpdate(e)} />
            {value}
          </>
        )}
      </div>
    )}
    </>
  );
};

export default Typewriter;