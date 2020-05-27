let cubo1 = document.querySelector('#cubo1')
let cubo2 = document.querySelector('#cubo2')
let yeah = document.querySelector('#yeah')
let oops = document.querySelector('#oops')



var sampler = new Tone.Sampler({
	"C3" : "acertou.mp3",
	"C#3" : "errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    cubo1.onclick = function () {

        sampler.triggerAttack('C#3')
        cubo1.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            cubo1.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    cubo2.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        cubo2.classList.add('animate__flash')

        setTimeout(function () {
            cubo2.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'q5.html'
            
        }, 2000)
        
    }
}).toDestination()