 //código de Js do Popup de referencias bibliográficas//
var buttonRef = document.getElementById('botaoReferencia')
var popupRef = document.querySelector('#popupWrapperReferencial')
var popupClose = document.querySelector('#closeRef')

buttonRef.onclick = function () {
popupRef.style.display = 'block'
    };

popupClose.onclick = function() {
popupRef.style.display = 'none'
};

//Js do Zinco//
var btnZ = document.querySelector("#toggle")
var containerZ = document.querySelector("#third")
var referencia = document.querySelector("#botaoReferencia")


btnZ.addEventListener("click", function () {
    if (containerZ.style.display == "block") {
        containerZ.style.display = "none"
    } else {
        containerZ.style.display = "block"
    }

    if (containerZ.style.display == "block") {
        referencia.style.display = "none"
    } else {
        referencia.style.display = "block"
    }

})

// if(containerZ.style.display == "block"){
//     buttonRef.style.display = "block"
// }else{
//     buttonRef.style.display = "none"
// }

var button = document.querySelector('#popupButton')
var popup = document.querySelector('#popupWrapper')


button.onclick = function () {
    popup.style.display = 'block'
};

popup.addEventListener('click', event => {
    var classNameOfClickedElement = event.target.classList[0]
    var classNames = ['popup-close', 'popup-wrapper']
    var shouldClosePopup = classNames.some(className =>
        className === classNameOfClickedElement)

    if (shouldClosePopup) {
        popup.style.display = 'none'
    }

})

//Js da Vitamina C//
var btn = document.querySelector("#trocaC")
var container = document.querySelector("#vitC")

btn.addEventListener("click", function () {
    if (container.style.display == "block") {
        container.style.display = "none"
    } else {
        container.style.display = "block"
    }
})


var buttonC = document.querySelector('#popupButtonC')
var popupC = document.querySelector('#popupWrapperC')
var closePopupC = document.querySelector('#closeC')

buttonC.onclick = function () {
    popupC.style.display = 'block'
};

closePopupC.onclick = function() {
    popupC.style.display = 'none'
}

//Js da Vitamina A//
var btnA = document.querySelector("#trocaA")
var containerA = document.querySelector("#vitA")

btnA.addEventListener("click", function () {
    if (containerA.style.display == "block") {
        containerA.style.display = "none"
    } else {
        containerA.style.display = "block"
    }
})

var buttonA = document.querySelector('#popupButtonA')
var popupA = document.querySelector('#popupWrapperA')
var closePopupA = document.querySelector('#closeA')

buttonA.onclick = function () {
    popupA.style.display = 'block'
};

closePopupA.onclick = function() {
    popupA.style.display = 'none'
}

//Js da Vitamina E//
var btnE = document.querySelector("#trocaE")
var containerE = document.querySelector("#vitE")

btnE.addEventListener("click", function () {
    if (containerE.style.display == "block") {
        containerE.style.display = "none"
    } else {
        containerE.style.display = "block"
    }
})

var buttonE = document.querySelector('#popupButtonE')
var popupE = document.querySelector('#popupWrapperE')
var closePopupE = document.querySelector('#closeE')

buttonE.onclick = function () {
    popupE.style.display = 'block'
};

closePopupE.onclick = function() {
    popupE.style.display = 'none'
}

//Js da Vitamina Cobre//
var btnCobre = document.querySelector("#trocaCobre")
var containerCobre = document.querySelector("#vitCobre")

btnCobre.addEventListener("click", function () {
    if (containerCobre.style.display == "block") {
        containerCobre.style.display = "none"
    } else {
        containerCobre.style.display = "block"
    }
})

var buttonCobre = document.querySelector('#popupButtonCobre')
var popupCobre = document.querySelector('#popupWrapperCobre')
var closePopupCobre = document.querySelector('#closeCobre')

buttonCobre.onclick = function () {
    popupCobre.style.display = 'block'
};
closePopupCobre.onclick = function() {
    popupCobre.style.display = 'none'
}

//Js da Vitamina Slenio//
var btnSelenio = document.querySelector("#trocaSelenio")
var containerSelenio = document.querySelector("#vitSelenio")

btnSelenio.addEventListener("click", function () {
    if (containerSelenio.style.display == "block") {
        containerSelenio.style.display = "none"
    } else {
        containerSelenio.style.display = "block"
    }
})

var buttonSelenio = document.querySelector('#popupButtonSelenio')
var popupSelenio = document.querySelector('#popupWrapperSelenio')
var closePopupSelenio = document.querySelector('#closeSelenio')

buttonSelenio.onclick = function () {
    popupSelenio.style.display = 'block'
};
closePopupSelenio.onclick = function() {
    popupSelenio.style.display = 'none'
}
