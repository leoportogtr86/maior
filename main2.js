let bird1 = document.querySelector('#bird1')
let bird2 = document.querySelector('#bird2')
let yeah = document.querySelector('#yeah')
let oops = document.querySelector('#oops')



var sampler = new Tone.Sampler({
	"C3" : "acertou.mp3",
	"C#3" : "errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    bird2.onclick = function () {

        sampler.triggerAttack('C#3')
        bird2.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            bird2.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    bird1.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        bird1.classList.add('animate__flash')

        setTimeout(function () {
            bird1.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'q3.html'
            
        }, 2000)
        
    }
}).toDestination()