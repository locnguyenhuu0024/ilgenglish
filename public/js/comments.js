const btnSendComment = document.getElementById('btnsendcomment');
const logsCmt = $('.review__comments');
const inpCmtName = $('#input-name');
const inpCmt = $('#input-comment');

btnSendComment.addEventListener('click', () => {
    if(inpCmt.val() && inpCmtName.val()){
        logsCmt.append(
            `<div class="review__comment">
                <h4>${inpCmtName.val()}</h4>
                <p>${inpCmt.val()}</p>
            </div>`
        );
        inpCmt.val('');
    }
});