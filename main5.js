let carro1 = document.querySelector('#carro1')
let carro2 = document.querySelector('#carro2')
let yeah = document.querySelector('#yeah')
let oops = document.querySelector('#oops')



var sampler = new Tone.Sampler({
	"C3" : "acertou.mp3",
	"C#3" : "errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    carro2.onclick = function () {

        sampler.triggerAttack('C#3')
        carro2.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            carro2.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    carro1.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        carro1.classList.add('animate__flash')

        setTimeout(function () {
            carro1.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'q6.html'
            
        }, 2000)
        
    }
}).toDestination()