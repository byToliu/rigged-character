let body = document.querySelector('body');
let characterContainer = document.querySelector('main');

function rayX() {




    if (!body.hasAttribute('transparent')) {
        body.setAttribute('transparent', 'true');
    } else {
        body.removeAttribute('transparent');
    }

}

function sanfona(obj) {
    let sanfona = obj.parentNode;
    let header = sanfona.querySelector('.sanfona__header');
    let content = sanfona.querySelector('.sanfona__content');

    content.classList.toggle('hide-none');



}


// function boneControl(obj) {

//     let parent = obj.parentNode;
//     let degs = parent.querySelector('.degs');
//     let range = obj.value;
//     let id = obj.id;
//     let bone = document.querySelector('.'+ id);

//     bone.style.transform = "rotate(" + range + "deg)";
//     degs.textContent = range + "deg"

// }


let bones = document.querySelectorAll('b');


bones.forEach(element => {



    element.onmousemove = () => {

        element.onclick = () => {

            let boneClass = event.target.className;
            let boneClassName = boneClass.split(' ', 1);
            let side = event.target.id;



            let controllers = document.querySelectorAll('.bone-controller');
            let sanfonas = document.querySelectorAll('.sanfona');
            let sideTitles = document.querySelectorAll('h4');
            let handExpContainer = document.querySelectorAll('.hand-expressions');
            let handTitle = document.querySelectorAll('.hand-title');
            let handFlip = document.querySelectorAll('.hand__invert');
            let br = document.querySelectorAll('br');

            for (let i = 0; i < br.length; i++) {
                br[i].style.display = "none";
            }

            for (let i = 0; i < sideTitles.length; i++) {
                if (sideTitles[i].getAttribute('side') !== side) {
                    sideTitles[i].style.display = "none";
                } else {
                    sideTitles[i].style.display = "block";
                }
            }

           


            if(boneClassName == "char__hand-R" || boneClassName == "char__hand-L"){
                for (let i = 0; i < handExpContainer.length; i++) {
                    if (handExpContainer[i].getAttribute('side') !== side) {
                        handExpContainer[i].style.display = "none";
                    } else {
                        handExpContainer[i].style.display = "flex";
                    }
    
                }

                for (let i = 0; i < handTitle.length; i++) {
                    if (handTitle[i].getAttribute('side') !== side) {
                        handTitle[i].style.display = "none";
                    } else {
                        handTitle[i].style.display = "block";
                    }
                }
    
                for (let i = 0; i < handFlip.length; i++) {
                    if (handFlip[i].getAttribute('side') !== side) {
                        handFlip[i].style.display = "none";
                    } else {
                        handFlip[i].style.display = "block";
                    }
                }


            }else{
                for (let i = 0; i < handExpContainer.length; i++) {
                
                        handExpContainer[i].style.display = "none";
                        handFlip[i].style.display = "none";
                        handTitle[i].style.display = "none";
                }
            }

                
                for (let i = 0; i < sanfonas.length; i++) {
                    sanfonas[i].classList.remove('sanfona--selected');
                }

                for (let i = 0; i < controllers.length; i++) {

                    let sliderBone = controllers[i].querySelector('input');



                    if (sliderBone.id == boneClassName) {

                        controllers[i].parentNode.parentNode.classList.add('sanfona--selected');
                        controllers[i].parentNode.classList.remove('hide-none');

                        for (let i = 0; i < sanfonas.length; i++) {
                            if (!sanfonas[i].classList.contains('sanfona--selected')) {
                                sanfonas[i].style.display = "none";
                            } else {
                                sanfonas[i].style.display = "block";
                            }
                        }

                        let sliderSide = controllers[i].previousElementSibling;

                        console.log(controllers[i].parentNode);



                        controllers[i].style.display = "flex";
                        // controllers[i].parentNode.parentNode.style.display = "block";

                    } else {
                        controllers[i].style.display = "none";
                        // controllers[i].parentNode.parentNode.style.display = "none";
                    }

                }



                for (let i = 0; i < bones.length; i++) {
                    bones[i].classList.remove('bone-focus');
                }

                event.target.classList.add('bone-focus');
            }

        }

        characterContainer.onmousedown = () => {
            let controllers = document.querySelectorAll('.bone-controller');
            let sanfonas = document.querySelectorAll('.sanfona');
            let sideTitles = document.querySelectorAll('h4');
            let br = document.querySelectorAll('br');
            let handExpContainer = document.querySelectorAll('.hand-expressions');
            let handTitle = document.querySelectorAll('.hand-title');
            let handFlip = document.querySelectorAll('.hand__invert');


            for (let i = 0; i < bones.length; i++) {
                bones[i].classList.remove('bone-focus');

            }

            if (event.target.localName !== 'b') {
                for (let i = 0; i < sanfonas.length; i++) {
                    sanfonas[i].removeAttribute('style');
                }

                for (let i = 0; i < controllers.length; i++) {
                    controllers[i].removeAttribute('style');
                }

                for (let i = 0; i < sideTitles.length; i++) {
                    sideTitles[i].removeAttribute('style');
                }

                for (let i = 0; i < handExpContainer.length; i++) {
                    handExpContainer[i].removeAttribute('style');
                    handTitle[i].removeAttribute('style');
                    handFlip[i].removeAttribute('style');
                }



                for (let i = 0; i < br.length; i++) {
                    br[i].removeAttribute('style');
                }
            }


        }
    });


let inputBone = document.querySelectorAll('input');

inputBone.forEach(element => {

    element.onmousemove = () => {

        let parent = element.parentNode;
        let degs = parent.querySelector('.degs');
        let range = element.value;
        let id = element.id;
        let bone = document.querySelector('.' + id);

        bone.style.transform = "rotate(" + range + "deg)";
        degs.textContent = range + "deg"
    }

    element.ontouchmove = () => {

        let parent = element.parentNode;
        let degs = parent.querySelector('.degs');
        let range = element.value;
        let id = element.id;
        let bone = document.querySelector('.' + id);

        bone.style.transform = "rotate(" + range + "deg)";
        degs.textContent = range + "deg"
    }

    element.onchange = () => {

        let parent = element.parentNode;
        let degs = parent.querySelector('.degs');
        let range = element.value;
        let id = element.id;
        let bone = document.querySelector('.' + id);

        bone.style.transform = "rotate(" + range + "deg)";
        degs.textContent = range + "deg"
    }
});


function poseSelect(btn) {
    
    let btnContainer = btn.parentNode;
    let items = btnContainer.querySelectorAll('button');

    let face = document.querySelector('.char__head');
    let handL = document.querySelector('.char__hand-L');
    let handR = document.querySelector('.char__hand-R');

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('btn--selected');
    }

    btn.classList.add('btn--selected');


    if (btnContainer.classList.contains('face-expressions')) {
        face.setAttribute('facepose', btn.id);
    }

    if (btnContainer.classList.contains('hand-expressions')) {
        if (btnContainer.getAttribute('side') === 'R') {
            handR.setAttribute('handpose', btn.id);
        }
        if (btnContainer.getAttribute('side') === 'L') {
            handL.setAttribute('handpose', btn.id);
        }
    }
}