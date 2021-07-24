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
    failName: 'Hãy đảm bảo bạn nhập đúng họ tên, và họ tên phải hơn 3 ký tự!',
    failPhone: 'Hãy đảm bảo số điện thoại được nhập đủ 10 - 11 số!',
    failEmail: 'Email sai định dạng, vui lòng nhập lại!'
};

function checkNull(){
    let tam = 0;

    inputRegisters.forEach((inputRegister) => {
        if(!inputRegister.value && inputRegister.hasAttribute('required')){
            tam = tam + 1;
            inputRegister.setAttribute('style', statusNotify.failInputColor);
        }else{
            inputRegister.setAttribute('style', 'background-color: $white;');
            inputRegister.setAttribute('readonly', 'true');
        }

        if(!inputRegister.hasAttribute('required')){
            inputRegister.removeAttribute('readonly');
        }
    });

    if(tam != 0) return false;
    return true;
}  

const inputName = document.getElementById('stuName');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');

function checkName(){
    let modalName = /^[a-zA-Z ]+$/;

    if(inputName.value.length < 3 || !modalName.test(inputName.value)) return false;
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
    const modalEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!modalEmail.test(inputEmail.value)) return false;
    return true;
}

btnRegister.addEventListener('click', (e) => {
    console.log(checkEmail());

    // if(!checkNull()){
    //     setTimeout(() => {
    //         notify.classList.add('notify-float-show');notify.classList.remove('notify-float-hide');
    //         notify.setAttribute('style', statusNotify.failColor);
    //         notifyContent.innerHTML = statusNotify.failContent;
    //     }, 600);
    // }else{
    //     setTimeout(() => {
    //         notify.classList.remove('notify-float-hide');
    //         notify.classList.add('notify-float-show');
    //         btnRegister.setAttribute('style', 'visibility: hidden;');
    //         notify.setAttribute('style', statusNotify.passColor);
    //         notifyContent.innerHTML = statusNotify.passContent;
    //     }, 600);
    // }

    setTimeout(() => {
        notify.classList.add('notify-float-hide');
        notify.classList.remove('notify-float-show');
    }, 4600);
});    

btnCloseNotify.addEventListener('click', (e) => {
    notify.classList.add('notify-float-hide');
    notify.classList.remove('notify-float-show');
});