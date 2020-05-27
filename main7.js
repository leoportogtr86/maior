let maca1 = document.querySelector('#maca1')
let maca2 = document.querySelector('#maca2')
let yeah = document.querySelector('#yeah')
let oops = document.querySelector('#oops')



var sampler = new Tone.Sampler({
	"C3" : "acertou.mp3",
	"C#3" : "errou.mp3"

}, function(){
	//sampler will repitch the closest sample
    
    maca1.onclick = function () {

        sampler.triggerAttack('C#3')
        maca1.classList.add('animate__shakeX')
        oops.style.display = 'block'

        setTimeout(function () {
            maca1.classList.remove('animate__shakeX')
            oops.style.display = 'none'

            
        }, 1000)


        
    }

    maca2.onclick = function () {

        sampler.triggerAttack('C3')
        yeah.style.display = 'block'


        maca2.classList.add('animate__flash')

        setTimeout(function () {
            maca2.classList.remove('animate__flash')
            yeah.style.display = 'none'

        }, 1000)

        setTimeout(function () {

            window.location = 'win.html'
            
        }, 2000)
        
    }
}).toDestination()