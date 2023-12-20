// Animation container
let mmAnimation = bodymovin.loadAnimation({
    container: document.getElementById('tanim'),
    render: 'CANVAS',
    loop: true,
    autoplay: false,
    path: 'assets/animation/mm_animation.json'
});

// Animation segments
let frameSegments =  [[0,199], [199,300]];

// Buttons and info divs
const mmButtons = document.querySelectorAll('.mm-all-btn');
const mmInfo = document.querySelectorAll('.mm-all-info');

// Loop through buttons
mmAnimation.addEventListener("DOMLoaded", () => {
    
    mmButtons.forEach(button => {
        button.addEventListener('click', event => {
            
            // get id of button
            let mmButtonPressed = event.currentTarget.id;
            // Loop through buttons and info boxes
            mmInfo.forEach(infobox => {
                
                if (infobox.classList.contains('mm-visibility')){
                    infobox.classList.remove('mm-visibility')
                } 
            })
        
            if (mmButtonPressed === 'mm-first-btn'){
                mmAnimation.playSegments(frameSegments[0], true);
                
                document.getElementById('mm-first-info').classList.toggle('mm-visibility');
                
            } else if (mmButtonPressed === 'mm-second-btn'){
                mmAnimation.playSegments(frameSegments[1], true);
                
                document.getElementById('mm-second-info').classList.toggle('mm-visibility');
    
            } 
            
          });
        });
});