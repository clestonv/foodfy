const showHides = document.querySelectorAll('h4')

for (showHide of showHides) {

    let selector = document.querySelector(".topic-content")

    showHide.addEventListener("click", function() {

        console.log(showHide.innerHTML)
        
        if (showHide.innerHTML = "MOSTRAR") {
            alert('Cliquei em mostrar');
        } else if (showHide.innerHTML = "ESCONDER") {
            alert('Cliquei em esconder');
        }
    })
}