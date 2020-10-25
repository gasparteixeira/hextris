import React, { Component } from 'react';

import './assets/css/style.css';
import btnHelp from './assets/images/btn_help.svg';
import btnPause from './assets/images/btn_pause.svg';
import btnRestart from './assets/images/btn_restart.svg';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <canvas id='canvas'></canvas>
        <div id='overlay' className='faded overlay'></div>
        <div id='startBtn'></div>
        <div id='helpScreen' className='unselectable'>
          <div id='inst_main_body'></div>
        </div>
        <img
          id='openSideBar'
          className='helpText'
          src={btnHelp}
          alt='openSideBar'
        />
        <div className='faded overlay'></div>
        <img id='pauseBtn' src={btnPause} alt='pauseBtn' />
        <img id='restartBtn' src={btnRestart} alt='restartBtn' />
        <div id='HIGHSCORE'>HIGH SCORE</div>

        <div id='highScoreInGameText'>
          <div id='highScoreInGameTextHeader'>HIGH SCORE</div>
          <div id='currentHighScore'>10292</div>
        </div>

        <div id='gameoverscreen'>
          <div id='container'>
            <div id='gameOverBox' className='GOTitle'>
              GAME OVER
            </div>
            <div id='cScore'>1843</div>
            <div id='highScoresTitle' className='GOTitle'>
              HIGH SCORES
            </div>
            <div className='score'>
              <span className='scoreNum'>1.</span>{' '}
              <div id='1place' style={{ display: 'inline' }}>
                0
              </div>
            </div>
            <div className='score'>
              <span className='scoreNum'>2.</span>{' '}
              <div id='2place' style={{ display: 'inline' }}>
                0
              </div>
            </div>
            <div className='score'>
              <span className='scoreNum'>3.</span>{' '}
              <div id='3place' style={{ display: 'inline' }}>
                0
              </div>
            </div>
          </div>
          <div id='bottomContainer'>
            <img id='restart' src={btnRestart} height='57px' alt='restart' />
            <div id='buttonCont'></div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
