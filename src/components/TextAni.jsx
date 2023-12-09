import React from 'react';
import TypingAnimator from 'react-typing-animator';
function TextAni() {
    const textArray = ["Your Presence is your best defense", "Your voice against eviction","Your chance to be heard"]
    return (
        <div className='max-w-[800px] mt-[-96px] w-full mx-auto text-center flex justify-center md:pl-4'>
        <TypingAnimator 
        textArray={textArray}
        cursorColor="#5C8374"
        textColor="#5C8374"
        fontSize="30px"
        loop
        typingSpeed={30}
        delaySpeed={2000}
        backspace = {true}
        height="100px"
        Textalign="md:center sm:center center"
    
      />
    </div>
    );
}   

export default TextAni;
