HiLight.prototype.seatReturn = function(){

    this.seatExtendButton.style.display = 'none';
    this.nonSeatExtendButton.style.display = 'none';
    this.seatReturnButton.style.display = 'none';
    this.returnButton.style.display = 'inline';
    this.returnCancelButton.style.display = 'inline';
    this.seatExtendImg.style.display = 'none';

    this.initMessageText();
    this.messageText15.style.display = 'block';
};

HiLight.prototype.returnCancel = function(){

    // this.discordText.style.display = 'none';
    this.returnButton.style.display = 'none';
    this.returnCancelButton.style.display = 'none';
    this.seatReturnButton.style.display = 'inline';
    this.seatExtendImg.style.display = 'inline';

    this.initMessageText();
};

HiLight.prototype.returnCheck = function( seatNumber ){

    this.remainTimeTextImg.style.display = 'none';
    this.initImage();
    this.firstReservationButton.style.display = 'inline';
    this.remainTimeText.style.display = 'none';
    this.database.ref(seatNumber).update({state: 1, createdTime : null, name : null, uid : 0});
};