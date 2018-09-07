HiLight.prototype.remainTime = async function( seatNumber ){

    let createdAt = (await this.getInfo(seatNumber)).val().createdTime;
    // this.endTime = Number(createdAt) + 1000*60*60;
    this.endTime = Number(createdAt) + 1000*60;
    const that = this;

    function showTime() {
        let now = new Date();
        let distance = that.endTime - Number(now);
        if (distance < 0){
            that.returnCheck(seatNumber);
            return ;
        }
        let hours = parseInt(distance / 1000 / 60 / 60);
        let minutes = parseInt(distance / 1000 / 60);
        let seconds = parseInt(distance / 1000 % 60);

        if ((minutes*60 + seconds) <= 50){
            this.nonSeatExtendButton.style.display = 'none';
            this.seatExtendButton.style.display = 'inline';
        } else {
            this.nonSeatExtendButton.style.display = 'inline';
            this.seatExtendButton.style.display = 'none';
        }
        if ( hours >= 1 )
            minutes -= 60;
        if ( minutes < 10 )
            minutes = '0' + minutes;
        if ( seconds < 10 )
            seconds = '0' + seconds;

        if( hours >= 1 )
            this.remainTimeText.innerText = hours + ':' + minutes + ':' + seconds;
        else
            this.remainTimeText.innerText = minutes + ':' + seconds;
    }

    this.timer = setInterval(showTime,100);
};