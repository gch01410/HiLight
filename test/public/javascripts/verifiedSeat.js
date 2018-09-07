HiLight.prototype.certificationSuccess = function(){

    this.menuBarReservationBackToMain.style.display = 'none';
    this.menuBarImg.style.display = 'block';
    this.certificationCodeInput.value = '';
    this.extendCertificationCodeInput.value ='';
    this.reservationImg.style.display = 'none';
    this.firstReservationButton.style.display = 'none';
    this.appName.style.display = 'block';
    this.certificationCodeInput.style.display = 'none';
    this.certificationButton.style.display = 'none';
    this.extendCertificationButton.style.display = 'none';
    this.extendCertificationCodeInput.style.display = 'none';
    this.seatReturnButton.style.display = 'inline';
    this.nonSeatExtendButton.style.display = 'inline';
    this.remainTimeText.style.display = 'inline';
    this.seatExtendImg.style.display = 'inline';

    this.verificationCodeTextImg.style.display = 'none';
    this.remainTimeTextImg.style.display = 'inline';

    this.initMessageText();
};

HiLight.prototype.certification = async function( seatNumber ){

    const num = numberToRef(seatNumber);

    if ( this.certificationCodeInput.value === (await this.getInfo('Certification Code')).val() ) { // 인증코드 일치
        if( (await this.getInfo(num)).val().state === 1 ) {
            this.database.ref(num).update({
                state: 0,
                createdTime: new Date().getTime(),
                name: this.auth.currentUser.displayName,
                uid: this.auth.currentUser.uid
            });
            this.certificationSuccess();
            this.remainTime(num);
        } else {
            this.reservationBackToMain();
            this.messageText16.style.display = 'block';
        }
    } else {
        this.messageText13.style.display = 'block';
    }
};

HiLight.prototype.certificationCodeInputChange = function(){

    if( !this.certificationCodeInput.value ){
        this.nonCertificationButton.style.display = 'inline';
        this.certificationButton.style.display = 'none';
    } else {
        this.nonCertificationButton.style.display = 'none';
        this.certificationButton.style.display = 'inline';
        this.initMessageText();
    }
};

HiLight.prototype.extendCertificationCodeInputChange = function(){

    if ( !this.extendCertificationCodeInput.value ) {
        this.nonCertificationButton.style.display = 'inline';
        this.extendCertificationButton.style.display = 'none';
    } else {
        this.nonCertificationButton.style.display = 'none';
        this.extendCertificationButton.style.display = 'inline';
        this.initMessageText();
    }
};