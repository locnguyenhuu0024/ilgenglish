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
};

btnRegister.addEventListener('click', (e) => {
    let tam = 0;
    
    function checkNull(){
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

        setTimeout(() => {
            notify.classList.add('notify-float-hide');
            notify.classList.remove('notify-float-show');
        }, 5600);
    }   
    
    checkNull();
});    

btnCloseNotify.addEventListener('click', (e) => {
    notify.classList.add('notify-float-hide');
    notify.classList.remove('notify-float-show');
});