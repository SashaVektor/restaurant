import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'

import './Intro.css';

const Intro = () => {
  const vidRef = useRef();
  const [playing, setPlaying] = useState(false);

  const handleVideo = () => {
    setPlaying(!playing)

    if (playing) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }

  }

  return (
    <div className='app__video'>
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className='app__video-overlay flex__center'>
        <div onClick={handleVideo}
          className='app__video-overlay-cirlce flex__center'>
          {playing ? (
            <BsPauseFill color='#fff' fontSize={30}/>
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30}/>
          )}
        </div>
      </div>
    </div>

  );
}

export default Intro;
