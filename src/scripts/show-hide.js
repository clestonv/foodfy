const showHides = document.querySelectorAll('.btn-show')

for (let i = 0; i < showHides.length; ++i) {

    showHides.item(i).addEventListener("click", function () {

        let selector = document.querySelectorAll(".topic-content")[i]

        console.log(showHides.item(i).innerHTML)
        if (showHides.item(i).innerHTML == 'ESCONDER') {

            showHides.item(i).innerHTML = 'MOSTRAR';
            selector.style.display = 'none'
            console.log('ESCONDEU')
        } else if (showHides.item(i).innerHTML == 'MOSTRAR') {

            showHides.item(i).innerHTML = 'ESCONDER';
            selector.style.display = 'block'
            console.log('MOSTROU')
        }

    })
}
