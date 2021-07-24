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
    failInputColor:  'background-color: rgba(255, 82, 82, .3);',
    failName: 'Hãy đảm bảo bạn nhập đúng họ tên, và cả họ tên phải hơn 4 ký tự!',
    failPhone: 'Hãy đảm bảo số điện thoại được nhập đủ 10 - 11 số!',
    failEmail: 'Email sai định dạng, vui lòng nhập lại!'
};  

const inputName = document.getElementById('stuName');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');

function checkName(){
    let modalName = /^[a-zA-Z ]+$/;
    if(inputName.value.length < 4 || !modalName.test(inputName.value)) return false;
    return true;
}

function checkPhone(){
    const modalPhone = /^[0-9]+$/;

    if(modalPhone.test(inputPhone.value))
        if(inputPhone.value.length >= 10 && inputPhone.value.length <= 11)
            return true;
        return false;
}
 
function checkEmail(){
    const modalEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;

    if(!modalEmail.test(inputEmail.value)) return false;
    return true;
}

function setReadOnly(){
    inputName.setAttribute('readonly', 'true');
    inputPhone.setAttribute('readonly', 'true');
    inputEmail.setAttribute('readonly', 'true');
}

function sendFailNotify(content){
    setTimeout(() => {
        notify.classList.add('notify-float-show');
        notify.classList.remove('notify-float-hide');
        notify.setAttribute('style', statusNotify.failColor);
        notifyContent.innerHTML = content;
    }, 600);

    closeNotify();
}

function sendSuccessNotify(){
    setTimeout(() => {
        notify.classList.remove('notify-float-hide');
        notify.classList.add('notify-float-show');
        btnRegister.setAttribute('style', 'visibility: hidden;');
        notify.setAttribute('style', statusNotify.passColor);
        notifyContent.innerHTML = statusNotify.passContent;
    }, 600);

    closeNotify()
}

function setColor(input){
    input.setAttribute('style', statusNotify.failInputColor);
}

function closeNotify(){
    setTimeout(() => {
        notify.classList.add('notify-float-hide');
        notify.classList.remove('notify-float-show');
    }, 3600);
}

function checkNull(){
    let tam = 0;

    inputRegisters.forEach((inputRegister) => {
        if(!inputRegister.value && inputRegister.hasAttribute('required')){
            tam = tam + 1;
            inputRegister.setAttribute('style', statusNotify.failInputColor);
        }else{
            inputRegister.setAttribute('style', 'background-color: $white;');
        }
    });

    if(tam != 0) return false;
    return true;
}

btnRegister.addEventListener('click', async (e) => {
    if(!checkNull()){
        sendFailNotify(statusNotify.failContent);
    }else{
        if(checkName() === false){
            sendFailNotify(statusNotify.failName);
            if(checkPhone() === false){
                setColor(inputPhone);
            }
            if(checkEmail() === false){
                setColor(inputEmail);
            }
        }else{
            if(checkPhone() === false){
                sendFailNotify(statusNotify.failPhone);
                setColor(inputPhone);
                if(!checkEmail()){
                    setColor(inputEmail);
                }
            }else{
                if(!checkEmail()){
                    sendFailNotify(statusNotify.failEmail);
                    setColor(inputEmail);
                }else{
                    setReadOnly();
                    sendSuccessNotify();
                }
            }
        }
    }
});