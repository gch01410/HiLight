HiLight.prototype.firstRemainSeatNumber = async function(){

    this.seat1State = (await this.getInfo('seat1/')).val().state;
    this.seat2State = (await this.getInfo('seat2/')).val().state;
    this.seat3State = (await this.getInfo('seat3/')).val().state;
    this.seat4State = (await this.getInfo('seat4/')).val().state;
    this.seat5State = (await this.getInfo('seat5/')).val().state;
    this.seat6State = (await this.getInfo('seat6/')).val().state;
    this.seat7State = (await this.getInfo('seat7/')).val().state;
    this.seat8State = (await this.getInfo('seat8/')).val().state;
    this.seat9State = (await this.getInfo('seat9/')).val().state;
    this.seat10State = (await this.getInfo('seat10/')).val().state;

    this.totalNumber = this.seat1State + this.seat2State + this.seat3State + this.seat4State
        + this.seat5State + this.seat6State + this.seat7State + this.seat8State + this.seat9State + this.seat10State;

    this.remainSeatNumber.innerText = this.totalNumber;
};

HiLight.prototype.calculateSeatNumber = function( name ){

    try{
        const that = this;
        const ref = this.database.ref(name);
        ref.on('value',function (snapshot) {
            let val = snapshot.val();
            if(val === 1){
                that.totalNumber += 1;
            } else if (val === 0) {
                that.totalNumber -= 1;
            }

            that.remainSeatNumber.innerText = that.totalNumber;
        });
    } catch (e) {
        console.log(e.message);
        return e.message;
    }
};