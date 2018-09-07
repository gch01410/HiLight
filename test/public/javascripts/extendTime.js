HiLight.prototype.nonSeatExtend = function(){

    this.initMessageText();
    this.messageText14.style.display = 'block';
};

HiLight.prototype.seatExtend = function(){

    this.remainSeatNumber.style.display = 'none';
    this.secondReservationButton.style.display = 'none';
    this.nonCertificationButton.style.display = 'inline';
    this.extendCertificationCodeInput.style.display = 'inline';
    this.seatExtendImg.style.display = 'none';
    this.seatReturnButton.style.display = 'none';
    this.remainTimeText.style.display = 'none';

    this.remainTimeTextImg.style.display = 'none';
    this.verificationCodeTextImg.style.display = 'inline';

    this.initMessageText();
};

HiLight.prototype.extendCertification = async function( seatNumber ){

    const num = numberToRef( seatNumber );

    if ( this.extendCertificationCodeInput.value === (await this.getInfo('Certification Code')).val() ) {
        this.certificationSuccess();
        this.database.ref(num).update({createdTime : this.endTime});
        this.endTime += 1000*60;
        this.remainTimeText.style.display = 'inline';
        this.seatExtendButton.style.display = 'none';
        this.nonSeatExtendButton.style.display = 'inline';
    } else {
        this.messageText13.style.display = 'block';
    }
};