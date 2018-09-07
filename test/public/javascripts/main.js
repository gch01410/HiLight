function HiLight() {

    checkSetup();

    this.init();
    this.initEvent();
    this.initFirebase();

    this.totalNumber = 0;
    this.timer = 0;
    this.number = 0;

    this.calculateSeatNumber('seat1/state');
    this.calculateSeatNumber('seat2/state');
    this.calculateSeatNumber('seat3/state');
    this.calculateSeatNumber('seat4/state');
    this.calculateSeatNumber('seat5/state');
    this.calculateSeatNumber('seat6/state');
    this.calculateSeatNumber('seat7/state');
    this.calculateSeatNumber('seat8/state');
    this.calculateSeatNumber('seat9/state');
    this.calculateSeatNumber('seat10/state');
}

window.onload = function () {

    window.hilight = new HiLight();
};