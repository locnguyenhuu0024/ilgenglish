const btnSendContact = document.getElementById('btnSendContact');
const textarea = document.querySelector('textarea');
const inputs = document.querySelectorAll('input');
const notify = document.querySelector('.notify');
const notifyContent = document.getElementById('notifyContent');
const btnCloseNotify = document.getElementById('btnCloseNotify');

const statusNotify = {
    passColor: 'background-color: rgba(72, 219, 104, 1); color: white;',
    passContent: 'Cảm ơn bạn đã liên hệ với trung tâm. Trung tâm sẽ trả lời câu hỏi, thắc mắc của bạn sớm nhất có thể.',
    failColor: 'background-color: rgba(255, 82, 82, 1); color: white;',
    failContent: 'Vui lòng nhập đầy đủ thông tin.',
    failInputColor:  'background-color: rgba(255, 82, 82, .3);',
};

function setTimeOut(element, time){
    setTimeout(() => {
        element
    }, time);
}

function checkNull(){
    let tam = 0;
    inputs.forEach((input) => {
        if(!input.value){
            tam += 1
            setTimeout(() => {
                input.setAttribute('style', statusNotify.failInputColor);
            }, 500);
        }else{
            setTimeout(() => {
                input.setAttribute('style', 'background-color: $white;');
                input.setAttribute('readonly', 'true');
            }, 500);
        }
    });
    
    if(!textarea.value){
        tam += 1
        setTimeout(() => {
            textarea.setAttribute('style', statusNotify.failInputColor);
        }, 500);
    }else{
        setTimeout(() => {
            textarea.setAttribute('style', 'background-color: $white;');
            textarea.setAttribute('readonly', 'true');
        }, 500);
    }

    if(tam != 1) return false;
    return true;
}

btnSendContact.addEventListener('click', () => {
    if(!checkNull()){
        // Chua nhap 1 o bat ky
        setTimeout(() => {
            notify.classList.add('notify-float-show');
            notify.setAttribute('style', statusNotify.failColor);
            notifyContent.innerHTML = statusNotify.failContent;
        }, 600);
    }else{
        // Da nhap
        setTimeout(() => {
            notify.classList.remove('notify-float-hide');
            notify.classList.add('notify-float-show');
            btnSendContact.setAttribute('style', 'visibility: hidden;');
            notify.setAttribute('style', statusNotify.passColor);
            notifyContent.innerHTML = statusNotify.passContent;
        }, 600);
    }

    setTimeout(() => {
        notify.classList.add('notify-float-hide');
        notify.classList.remove('notify-float-show');
    }, 5600);
});

btnCloseNotify.addEventListener('click', (e) => {
    notify.classList.add('notify-float-hide');
    notify.classList.remove('notify-float-show');
});