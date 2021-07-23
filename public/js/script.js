
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

const box = document.querySelectorAll('.box');
const modal = document.querySelector('.modal');
const btnOffModal = document.querySelector('.btnClose')

const courseBox = document.querySelectorAll(".course__box");
const btnShowCourseBox = document.querySelectorAll(".course__contents--btn");
const city = document.getElementById("calendars__city");

async function getProvince(url){
    const listProvince = await fetch(url);
    return listProvince.json();
}

getProvince('https://vapi.vnappmob.com/api/province').then(
    data => data.results.map(val => {
        let province = `<option id=${val.province_id} value="${val.province_name}">${val.province_name}</option>`;
        $(city).append(province)
    })
);

btnHamburger.addEventListener('click', function(){
    //console.log('open cc');
    if(header.classList.contains('open')){ //close toggle
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }else{ //open toggle
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});

box.forEach((element) => {
    element.addEventListener('click', function(ex){
        let eImg = ex.path[0].children[0].src.split("/");
        let linkImg = eImg[3] + "/" + eImg[4] + "/" + eImg[5];
        let eTitle = ex.path[0].children[1].children[0].innerText;
        let eText = ex.path[0].children[1].children[1].innerText;

        if (modal.classList.contains('has-fade-modal')){
            modal.classList.add('fade-in');
            modal.classList.remove('fade-out');
            body.classList.add('no-scroll');
            $(".modal__title").html(eTitle);
            $(".modal__image").attr("src",linkImg); 
            $(".modal__text").html(eText);
        }
        //console.log(modal.children[1].children);
        btnOffModal.addEventListener('click', () => {
            if (modal.classList.contains('has-fade-modal')){
                modal.classList.add('fade-out');
                modal.classList.remove('fade-in');
                body.classList.remove('no-scroll');
                $(".modal__title").html("");
                $(".modal__image").attr("src",""); 
                $(".modal__text").html("");
            }
        });

    });
})

courseBox.forEach((eleBox) => {
    const eleContent = eleBox.children[2];
    eleBox.addEventListener('mouseenter', (e) => {
        if(eleContent.classList.contains("hover-out-toleft")){
            eleContent.classList.remove("hover-out-toleft");
            eleContent.classList.add("hover-in-toright");

            eleContent.addEventListener('mouseenter', e => {
                eleContent.classList.add("hover-in-toright");
            });
        }else{
            eleContent.classList.add("hover-in-toright");

            eleContent.addEventListener('mouseenter', e => {
                eleContent.classList.add("hover-in-toright");
            });
        }
        
    });

    eleBox.addEventListener('mouseout', (e) => {
        
        if(eleContent.classList.contains("hover-in-toright")){
            eleContent.classList.remove("hover-in-toright");   
            eleContent.classList.add("hover-out-toleft");
        }else{
            eleContent.classList.add("hover-out-toleft");
        }
        
    });
});

// Float chat button & chat-logs
const btnShow = document.getElementById('btnshow');
const chatbox = document.querySelector('.float-chat__box');
const btnSend = document.getElementById('btnsend');
const chatlog = document.querySelector('.float-chat__logs');

btnShow.addEventListener('click', (e) => {
    if(chatbox.classList.contains('floatshow')){
        chatbox.classList.add('floathide');
        chatbox.classList.remove('floatshow');
    }else{
        chatbox.classList.add('floatshow');
        chatbox.classList.remove('floathide');
    }
});

let input = $('#input-text');

btnSend.addEventListener('click', () => {
    if(input.val()){
        $('.float-chat__logs').append(
            `<div class="self flex"><p>${input.val()}</p></div>`
        );
        chatlog.scrollTop = chatlog.scrollHeight - chatlog.clientHeight;

        input.val('');
    }
});

//
// Register
const btnRegister = document.getElementById('btnRegister');
const btnCloseNotify = document.getElementById('btnCloseNotify');
const notify = document.querySelector('.notify');
const notifyContent = document.getElementById('notifyContent');
const inputRegisters = document.querySelectorAll('input');
const statusNotify = {
    passColor: 'background-color: rgba(72, 219, 104, 1); color: white;',
    passContent: 'Bạn đã đăng ký thành công. Trung tâm sẽ liên hệ với bạn sớm nhất để hoàn thành hồ sơ nhận lớp.',
    failColor: 'background-color: rgba(255, 82, 82, 1); color: white;',
    failContent: 'Vui lòng nhập đầy đủ thông tin.', 
};
btnRegister.addEventListener('click', (e) => {
    let tam = 0;
    function checkNull(){
        inputRegisters.forEach((inputRegister) => {
            if(!inputRegister.value && inputRegister.hasAttribute('required')){
                tam = tam + 1;
                inputRegister.setAttribute('style', statusNotify.failColor);
            }else{
                inputRegister.setAttribute('style', 'background-color: $white;');
                inputRegister.setAttribute('readonly', 'true');
            }

            if(!inputRegister.hasAttribute('required')){
                inputRegister.removeAttribute('readonly');
            }
        });
        if(tam == 0){
            setTimeout(() => {
                notify.classList.remove('notify-float-hide');
                notify.classList.add('notify-float-show');
                btnRegister.setAttribute('style', 'visibility: hidden;');
                notify.setAttribute('style', statusNotify.passColor);
                notifyContent.innerHTML = statusNotify.passContent;
            }, 1000);
        }else{
            setTimeout(() => {
                notify.classList.add('notify-float-show');
                notify.setAttribute('style', statusNotify.failColor);
                notifyContent.innerHTML = statusNotify.failContent;
            }, 1000);
        }
    }   
    
    checkNull();
});    
btnCloseNotify.addEventListener('click', (e) => {
    notify.classList.add('notify-float-hide');
    notify.classList.remove('notify-float-show');
});