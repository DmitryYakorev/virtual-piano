//console.log(window);
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const pianoKeys_black = document.querySelectorAll('.sharp');
const btn = document.querySelector('.btn-container');
const btns = document.querySelectorAll('.btn');
    console.log(pianoKeys);
  /*  btn.addEventListener('click',(event) => {
   // console.log(event);
       event.target.classList.toggle('btn-active');
    
});*/
btn.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn')) {
      btns.forEach((el) => {
        if(el.classList.contains('btn-active')) {
          el.classList.remove('btn-active');
        }
      });
      event.target.classList.add('btn-active');
    }
  });   
  piano.addEventListener('mousedown',(event) => {Over();}
    /*stopOver();*/
  );
  piano.addEventListener('mouseup', (event) => {stopOver();}
    
    
  );

  function Over() {
    pianoKeys.forEach((el) => {
      el.addEventListener('mouseover', (event) => {startS();} );
      el.addEventListener('mouseout', (event) => {stopS();});

    });
  }; 
  function stopOver() {  
    pianoKeys.forEach((el) => {
      el.removeEventListener('mouseover', (event) =>{startS();});
      el.removeEventListener('mouseout', (event)=>{stopS();});
      console.log('!',el);
    });
  }; 
  function startS() {
    console.log(Event,event);
    if(!(event.target.classList.contains('sharp'))) {
      event.target.classList.add('active');}
      else
      event.target.classList.add('sharp-active');
  
    
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
  } ;
  function stopS() {
    if(event.target.classList.contains('active')) {
        
      event.target.classList.remove('active');
    } ;
    if(event.target.classList.contains('sharp-active')) {
      
      event.target.classList.remove('sharp-active');
    } ;
  }

 /* piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
      //  console.log(pianoKeys,'!',event);
      pianoKeys.forEach((el) => {
        if(el.classList.contains('active')) {
          //console.log(el);
          el.classList.remove('active');
        } 
      });
      if(!(event.target.classList.contains('sharp'))) {
        event.target.classList.add('active');
        
      } 
      
      
    }
  });
  piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('sharp')) {
      
      pianoKeys.forEach((el) => {
        if(el.classList.contains('sharp-active')) {
          console.log(el);
          el.classList.remove('sharp-active');
        } 
      });
      event.target.classList.add('sharp-active');
      
    }
  });*/

piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }   
  });
    window.addEventListener('keydown', (event) => {
     
    if(event.code === 'KeyC') {
     playAudio('assets/audio/c.mp3');
    };
    if(event.code === 'KeyD') {
        playAudio('assets/audio/d.mp3');
       };
       if(event.code === 'KeyE') {
        playAudio('assets/audio/e.mp3');
       };
       if(event.code === 'KeyF') {
        playAudio('assets/audio/f.mp3');
       };
       if(event.code === 'KeyG') {
        playAudio('assets/audio/g.mp3');
       };
       if(event.code === 'KeyA') {
        playAudio('assets/audio/a.mp3');
       };
       if(event.code === 'KeyB') {
        playAudio('assets/audio/b.mp3');
       };
  });
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  };
