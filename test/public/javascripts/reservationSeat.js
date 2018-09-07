HiLight.prototype.firstReservation =  function(){

    this.appName.style.display = 'none';
    this.reservationImg.style.display = 'inline';
    this.firstReservationButton.style.display = 'none';
    this.remainSeatNumber.style.display = 'none';
    this.nonResrevationButton.style.display = 'inline';
    this.menuBarImg.style.display = 'none';
    this.menuBarReservationBackToMain.style.display = 'block';

    this.initMessageText();
    this.remainSeatTextImg.style.display = 'none';
    this.choiceSeatTextImg.style.display = 'inline';

    this.showSeat('seat1/state', this.seat1Blue, this.seat1Red, this.seat1Click);
    this.showSeat('seat2/state', this.seat2Blue, this.seat2Red, this.seat2Click);
    this.showSeat('seat3/state', this.seat3Blue, this.seat3Red, this.seat3Click);
    this.showSeat('seat4/state', this.seat4Blue, this.seat4Red, this.seat4Click);
    this.showSeat('seat5/state', this.seat5Blue, this.seat5Red, this.seat5Click);
    this.showSeat('seat6/state', this.seat6Blue, this.seat6Red, this.seat6Click);
    this.showSeat('seat7/state', this.seat7Blue, this.seat7Red, this.seat7Click);
    this.showSeat('seat8/state', this.seat8Blue, this.seat8Red, this.seat8Click);
    this.showSeat('seat9/state', this.seat9Blue, this.seat9Red, this.seat9Click);
    this.showSeat('seat10/state', this.seat10Blue, this.seat10Red, this.seat10Click);
};

HiLight.prototype.secondReservation = function(){

    this.remainSeatNumber.style.display = 'none';
    this.secondReservationButton.style.display = 'none';
    this.nonCertificationButton.style.display = 'inline';
    this.certificationCodeInput.style.display = 'block';
    this.choiceSeatTextImg.style.display = 'none';
    this.verificationCodeTextImg.style.display = 'inline';
};

HiLight.prototype.seatClick = function (seatNumber, seatBlue, seatClick ) {

    this.firstReservation();
    seatBlue.style.display = 'none';
    seatClick.style.display = 'inline';
    this.remainSeatNumber.innerText = seatNumber.toString();
    this.remainSeatNumber.style.display = 'inline';
    this.nonResrevationButton.style.display = 'none';
    this.secondReservationButton.style.display = 'inline';
    this.nonCertificationButton.style.display = 'none';
    this.certificationCodeInput.style.display = 'none';
    this.certificationButton.style.display = 'none';
    this.certificationCodeInput.value = '';
    this.number = seatNumber;
};

HiLight.prototype.showSeat = function( seatNumber, seatBlue, seatRed, seatClick ){ // 공통 가능할수도

    try{
        let ref = this.database.ref(seatNumber);
        ref.on('value',function (snapshot) {
            let val = snapshot.val();
            if(val === 1) {
                seatBlue.style.display = 'inline';
                seatRed.style.display = 'none';
                seatClick.style.display = 'none';
            }
            else {
                seatRed.style.display = 'inline';
                seatBlue.style.display = 'none';
                seatClick.style.display = 'none';
            }
        });
    } catch (e) {
        console.log(e.message);
        return e.message;
    }
};