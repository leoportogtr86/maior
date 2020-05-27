let mario1 = document.querySelector('#mario1')
let mario2 = document.querySelector('#mario2')
let yeah = document.querySelector('#yeah')
let oops = document.querySelector('#oops')



var sampler = new Tone.Sampler({
	"C3" : "acertou.mp3",
	"C#3" : "errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    mario1.onclick = function () {

        sampler.triggerAttack('C#3')
        mario1.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            mario1.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    mario2.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        mario2.classList.add('animate__flash')

        setTimeout(function () {
            mario2.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'q7.html'
            
        }, 2000)
        
    }
}).toDestination()