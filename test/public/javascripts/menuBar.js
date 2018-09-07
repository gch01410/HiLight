HiLight.prototype.menuBar = function () {

    this.menuBarImg.style.display = 'none';
    this.activeTalk.style.display = 'none';
    this.unActiveTalk.style.display = 'none';
    this.menuBarCancelImg.style.display = 'block';
    this.logoutImg.style.display = 'block';
};

HiLight.prototype.menuBarCancel = function () {

    this.menuBarCancelImg.style.display = 'none';
    this.logoutImg.style.display = 'none';
    this.menuBarImg.style.display = 'block';
    this.activeTalk.style.display = 'block';
};

HiLight.prototype.reservationBackToMain = function(){

    this.reservationImg.style.display = 'none';
    this.secondReservationButton.style.display = 'none';
    this.nonResrevationButton.style.display = 'none';
    this.menuBarReservationBackToMain.style.display = 'none';
    this.initImage();
    this.firstReservationButton.style.display = 'inline';
    this.menuBarImg.style.display = 'block';
    this.choiceSeatTextImg.style.display = 'none';
    this.verificationCodeTextImg.style.display = 'none';
};

HiLight.prototype.signInBackToMain = function(){

    this.blankLayer1.style.display = 'none';
    this.nonLoginButton.style.display = 'none';
    this.secondLoginButton.style.display = 'none';
    this.signInEmailInput.style.display = 'none';
    this.signInPasswordInput.style.display = 'none';
    this.signInEmail.style.display = 'none';
    this.signInPassword.style.display = 'none';
    this.menuBarSignInBackToMain.style.display = 'none';
    this.menuBarJoinIn.style.display = 'none';
    this.loginButton.style.display = 'inline';
    this.unActiveTalk.style.display = 'block';
    this.unActiveMenuBarImg.style.display = 'block';
    this.remainSeatTextImg.style.display = 'inline';
    this.signInEmailInput.value = '';
    this.signInPasswordInput.value = '';
    this.initImage();
};

HiLight.prototype.joinInBackToSignIn = function(){

    this.blankLayer2.style.display = 'none';
    this.menuBarBackToSignIn.style.display = 'none';
    this.joinInButton.style.display = 'none';
    this.joinInEmail.style.display = 'none';
    this.joinInPassword.style.display = 'none';
    this.joinInRePassword.style.display = 'none';
    this.joinInEmailInput.value = '';
    this.joinInPasswordInput.value = '';
    this.joinInRePasswordInput.value = '';

    this.initMessageText();
    this.displayEmailSignIn();

};

HiLight.prototype.menuBarTalk = function () {
    window.open('https://pf.kakao.com/_HyyxmC','newWindow');
};