import {useState, useEffect, forwardRef} from 'react';

const Typewriter = forwardRef((props: { 
  text: string, 
  delay: number,
  complete: boolean, 
  current: boolean,
  keydown: Function,
  focus?: Function,
  hasFocus?: boolean,
  value?: string,
  hideInput?: boolean,
  isTextArea?: boolean,
  modalRef?: any,
}, ref: any) => {

  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typeComplete, setTypeComplete] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);

  const handleValueUpdate = (e: any) => {
    setValue(ref.current.value);
    
    if (props.modalRef) {
      props.modalRef.scrollTop = props.modalRef.scrollHeight;
    }
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

  return (
    <div onClick={handlePromptClick}>
    <div 
      className={typeComplete ? 'prompt complete' : 'prompt'} 
      dangerouslySetInnerHTML={{
      __html: currentText
      }}>
    </div>
    {typeComplete && (
      <div className={focus ? 'userInput focus' : 'userInput'}>
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