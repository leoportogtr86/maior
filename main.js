let bike1 = document.querySelector('#bike1')
let bike2 = document.querySelector('#bike2')
let yeah = document.querySelector('#yeah')
let oops = document.querySelector('#oops')



var sampler = new Tone.Sampler({
	"C3" : "acertou.mp3",
	"C#3" : "errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    bike1.onclick = function () {

        sampler.triggerAttack('C#3')
        bike1.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            bike1.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    bike2.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        bike2.classList.add('animate__flash')

        setTimeout(function () {
            bike2.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'q2.html'
            
        }, 2000)
        
    }
}).toDestination()