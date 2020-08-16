const showHides = document.querySelectorAll('h4')

for (showHide of showHides) {

    let selector = document.querySelector(".topic-content")    

    console.log(showHide.innerHTML)
    
    showHide.addEventListener("click", function() {       
            
            if ( showHide.innerHTML == 'ESCONDER') {

                showHide.innerHTML = 'MOSTRAR';
                selector.style.display = 'none'
                console.log('ESCONDEU')
            } else if ( showHide.innerHTML == 'MOSTRAR') {
                
                showHide.innerHTML = 'ESCONDER';
                selector.style.display = 'block'
                console.log('MOSTROU')
            }
    })
}