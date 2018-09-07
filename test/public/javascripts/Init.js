HiLight.prototype.init = function(){

    this.loginButton = document.getElementById('loginButton');
    this.nonLoginButton = document.getElementById('nonLoginButton');
    this.appName = document.getElementById('app-name');
    this.blankLayer1 = document.getElementById('blankLayer1');
    this.blankLayer2 = document.getElementById('blankLayer2');
    this.theNumberOfSeat = document.getElementById('theNumberOfSeat');
    this.reservationImg = document.getElementById('reservation-img');
    this.remainSeatNumber = document.getElementById('remainSeatNumber');
    this.remainTimeText = document.getElementById('remainTimeText');
    this.certificationCodeInput = document.getElementById('certificationCodeInput');
    this.remainSeatTextImg = document.getElementById('remainSeatTextImg');
    this.choiceSeatTextImg = document.getElementById('choiceSeatTextImg');
    this.verificationCodeTextImg = document.getElementById('verificationCodeTextImg');
    this.remainTimeTextImg = document.getElementById('remainTimeTextImg');
    this.firstReservationButton = document.getElementById('firstReservationButton');
    this.nonResrevationButton = document.getElementById('nonReservationButton');
    this.secondReservationButton = document.getElementById('secondReservationButton');
    this.certificationButton = document.getElementById('certificationButton');
    this.nonCertificationButton = document.getElementById('nonCertificationButton');
    this.seatReturnButton = document.getElementById('seatReturnButton');
    this.nonSeatExtendButton = document.getElementById('nonSeatExtendButton');
    this.seatExtendButton = document.getElementById('seatExtendButton');
    this.returnButton = document.getElementById('returnButton');
    this.returnCancelButton = document.getElementById('returnCancelButton');
    this.seatExtendImg = document.getElementById('seatExtendImg');
    this.extendCertificationButton = document.getElementById('extendCertificationButton');
    this.extendCertificationCodeInput = document.getElementById('extendCertificationCodeInput');
    this.menuBarImg = document.getElementById('menuBarImg');
    this.unActiveMenuBarImg = document.getElementById('unActiveMenuBarImg');
    this.menuBarCancelImg = document.getElementById('menuBarCancelImg');
    this.unActiveTalk = document.getElementById('unActiveTalk');
    this.activeTalk = document.getElementById('activeTalk');
    this.logoutImg = document.getElementById('logoutImg');
    this.menuBarReservationBackToMain = document.getElementById('menuBarReservationBackToMain');

    this.signInEmail = document.getElementById('signInEmail');
    this.signInPassword = document.getElementById('signInPassword');
    this.signInEmailInput = document.getElementById('signInEmailInput');
    this.signInPasswordInput = document.getElementById('signInPasswordInput');
    this.secondLoginButton = document.getElementById('secondLoginButton');
    this.menuBarSignInBackToMain = document.getElementById('menuBarSignInBackToMain');
    this.menuBarJoinIn = document.getElementById('menuBarJoinIn');
    this.menuBarBackToSignIn = document.getElementById('menuBarBackToSignIn');

    this.joinInEmail = document.getElementById('joinInEmail');
    this.joinInPassword = document.getElementById('joinInPassword');
    this.joinInRePassword = document.getElementById('joinInRePassword');
    this.joinInEmailInput = document.getElementById('joinInEmailInput');
    this.joinInPasswordInput = document.getElementById('joinInPasswordInput');
    this.joinInRePasswordInput = document.getElementById('joinInRePasswordInput');
    this.joinInButton = document.getElementById('joinInButton');

    this.messageText1 = document.getElementById('messageText1');
    this.messageText2 = document.getElementById('messageText2');
    this.messageText3 = document.getElementById('messageText3');
    this.messageText4 = document.getElementById('messageText4');
    this.messageText5 = document.getElementById('messageText5');
    this.messageText6 = document.getElementById('messageText6');
    this.messageText7 = document.getElementById('messageText7');
    this.messageText8 = document.getElementById('messageText8');
    this.messageText9 = document.getElementById('messageText9');
    this.messageText10 = document.getElementById('messageText10');
    this.messageText11 = document.getElementById('messageText11');
    this.messageText12 = document.getElementById('messageText12');
    this.messageText13 = document.getElementById('messageText13');
    this.messageText14 = document.getElementById('messageText14');
    this.messageText15 = document.getElementById('messageText15');
    this.messageText16 = document.getElementById('messageText16');

    this.seat1Blue = document.getElementById('blueSeat-1');
    this.seat1Red = document.getElementById('redSeat-1');
    this.seat1Click = document.getElementById('clickSeat-1');
    this.seat2Blue = document.getElementById('blueSeat-2');
    this.seat2Red = document.getElementById('redSeat-2');
    this.seat2Click = document.getElementById('clickSeat-2');
    this.seat3Blue = document.getElementById('blueSeat-3');
    this.seat3Red = document.getElementById('redSeat-3');
    this.seat3Click = document.getElementById('clickSeat-3');
    this.seat4Blue = document.getElementById('blueSeat-4');
    this.seat4Red = document.getElementById('redSeat-4');
    this.seat4Click = document.getElementById('clickSeat-4');
    this.seat5Blue = document.getElementById('blueSeat-5');
    this.seat5Red = document.getElementById('redSeat-5');
    this.seat5Click = document.getElementById('clickSeat-5');
    this.seat6Blue = document.getElementById('blueSeat-6');
    this.seat6Red = document.getElementById('redSeat-6');
    this.seat6Click = document.getElementById('clickSeat-6');
    this.seat7Blue = document.getElementById('blueSeat-7');
    this.seat7Red = document.getElementById('redSeat-7');
    this.seat7Click = document.getElementById('clickSeat-7');
    this.seat8Blue = document.getElementById('blueSeat-8');
    this.seat8Red = document.getElementById('redSeat-8');
    this.seat8Click = document.getElementById('clickSeat-8');
    this.seat9Blue = document.getElementById('blueSeat-9');
    this.seat9Red = document.getElementById('redSeat-9');
    this.seat9Click = document.getElementById('clickSeat-9');
    this.seat10Blue = document.getElementById('blueSeat-10');
    this.seat10Red = document.getElementById('redSeat-10');
    this.seat10Click = document.getElementById('clickSeat-10');
};

HiLight.prototype.initEvent = function(){

    const that = this;

    this.loginButton.addEventListener('click', this.displayEmailSignIn.bind(this));
    this.firstReservationButton.addEventListener('click', this.firstReservation.bind(this));
    this.secondReservationButton.addEventListener('click',this.secondReservation.bind(this));
    this.certificationCodeInput.addEventListener('input', this.certificationCodeInputChange.bind(this));
    this.certificationButton.addEventListener('click', function () {that.certification(that.number)});
    this.nonSeatExtendButton.addEventListener('click', this.nonSeatExtend.bind(this));
    this.seatExtendButton.addEventListener('click', this.seatExtend.bind(this));
    this.seatReturnButton.addEventListener('click', this.seatReturn.bind(this));
    this.returnCancelButton.addEventListener('click', this.returnCancel.bind(this));
    this.returnButton.addEventListener('click', function () {that.returnCheck(numberToRef(that.number))});
    this.extendCertificationButton.addEventListener('click', function () {that.extendCertification(that.number)});
    this.extendCertificationCodeInput.addEventListener('input', this.extendCertificationCodeInputChange.bind(this));
    this.menuBarImg.addEventListener('click', this.menuBar.bind(this));
    this.menuBarCancelImg.addEventListener('click', this.menuBarCancel.bind(this));
    this.logoutImg.addEventListener('click', this.logout.bind(this));
    this.menuBarReservationBackToMain.addEventListener('click', this.reservationBackToMain.bind(this));
    this.activeTalk.addEventListener('click', this.menuBarTalk.bind(this));

    this.signInEmailInput.addEventListener('input', this.signInInputChange.bind(this));
    this.signInPasswordInput.addEventListener('input',this.signInInputChange.bind(this));
    this.menuBarSignInBackToMain.addEventListener('click', this.signInBackToMain.bind(this));
    this.secondLoginButton.addEventListener('click', this.emailSignIn.bind(this));
    this.menuBarJoinIn.addEventListener('click', this.displayEmailJoinIn.bind(this));
    this.menuBarBackToSignIn.addEventListener('click', this.joinInBackToSignIn.bind(this));

    this.joinInEmailInput.addEventListener('input', this.joinInInputChange.bind(this));
    this.joinInPasswordInput.addEventListener('input', this.joinInInputChange.bind(this));
    this.joinInRePasswordInput.addEventListener('input', this.joinInInputChange.bind(this));
    this.joinInButton.addEventListener('click', this.createEmailUser.bind(this));

    this.seat1Blue.addEventListener('click', function () {that.seatClick(1, that.seat1Blue, that.seat1Click)});
    this.seat2Blue.addEventListener('click', function () {that.seatClick(2, that.seat2Blue, that.seat2Click)});
    this.seat3Blue.addEventListener('click', function () {that.seatClick(3, that.seat3Blue, that.seat3Click)});
    this.seat4Blue.addEventListener('click', function () {that.seatClick(4, that.seat4Blue, that.seat4Click)});
    this.seat5Blue.addEventListener('click', function () {that.seatClick(5, that.seat5Blue, that.seat5Click)});
    this.seat6Blue.addEventListener('click', function () {that.seatClick(6, that.seat6Blue, that.seat6Click)});
    this.seat7Blue.addEventListener('click', function () {that.seatClick(7, that.seat7Blue, that.seat7Click)});
    this.seat8Blue.addEventListener('click', function () {that.seatClick(8, that.seat8Blue, that.seat8Click)});
    this.seat9Blue.addEventListener('click', function () {that.seatClick(9, that.seat9Blue, that.seat9Click)});
    this.seat10Blue.addEventListener('click', function () {that.seatClick(10, that.seat10Blue, that.seat10Click)});
};

HiLight.prototype.initImage = function(){

    this.appName.style.display = 'block';
    this.theNumberOfSeat.style.display = 'block';
    this.remainSeatNumber.style.display = 'inline';
    this.reservationImg.style.display = 'none';
    this.firstReservationButton.style.display = 'none';
    this.secondReservationButton.style.display = 'none';
    this.returnCancelButton.style.display = 'none';
    this.returnButton.style.display = 'none';
    this.nonSeatExtendButton.style.display = 'none';
    this.seatExtendButton.style.display = 'none';
    this.seatReturnButton.style.display = 'none';
    this.extendCertificationButton.style.display = 'none';
    this.nonCertificationButton.style.display = 'none';
    this.certificationButton.style.display = 'none';
    this.nonResrevationButton.style.display = 'none';
    this.certificationCodeInput.style.display = 'none';
    this.remainTimeText.style.display = 'none';
    this.extendCertificationCodeInput.style.display = 'none';

    this.initTextImg();

    this.initMessageText();

    clearInterval(this.timer);
    this.firstRemainSeatNumber();

    this.remainSeatTextImg.style.display = 'inline';
};

HiLight.prototype.initFirebase = function () {

    this.auth = firebase.auth();
    this.database = firebase.database();
    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

HiLight.prototype.onAuthStateChanged = async function(user){

    if(user){
        let userEmailVerified = user.emailVerified;

        // 가상아이디 3개 (1@ajou.ac.kr, 2@ajou.ac.kr, 3@ajou.ac.kr)
        if ( !userEmailVerified && user.uid !== 'X4r5SLGZmfcWAjju7Atflk6vNH62' && user.uid !== 'ZQdZZmRvRWbCq0kWXzWOLp13aCA3' && user.uid !== 'WZExzCAmQHSVTZAeIfsjPydmU8n2') {
            alert('메일 인증 후 로그인해주세요');
            this.logout();
            return;
        }

        switch ( user.uid ){
            case (await this.getInfo('seat1/')).val().uid:
                this.signInWithTime(1);
                break;

            case (await this.getInfo('seat2/')).val().uid:
                this.signInWithTime(2);
                break;

            case (await this.getInfo('seat3/')).val().uid:
                this.signInWithTime(3);
                break;

            case (await this.getInfo('seat4/')).val().uid:
                this.signInWithTime(4);
                break;

            case (await this.getInfo('seat5/')).val().uid:
                this.signInWithTime(5);
                break;

            case (await this.getInfo('seat6/')).val().uid:
                this.signInWithTime(6);
                break;

            case (await this.getInfo('seat7/')).val().uid:
                this.signInWithTime(7);
                break;

            case (await this.getInfo('seat8/')).val().uid:
                this.signInWithTime(8);
                break;

            case (await this.getInfo('seat9/')).val().uid:
                this.signInWithTime(9);
                break;

            case (await this.getInfo('seat10/')).val().uid:
                this.signInWithTime(10);
                break;

            default :
                this.initImage();
                this.firstReservationButton.style.display = 'inline';
                this.loginButton.style.display = 'none';
                this.menuBarImg.style.display = 'block';
                this.unActiveMenuBarImg.style.display = 'none';
                this.unActiveTalk.style.display = 'none';
                this.activeTalk.style.display = 'block';
        }
    } else {
        this.initImage();
        this.firstReservationButton.style.display = 'none';
        this.loginButton.style.display = 'inline';
        this.unActiveTalk.style.display = 'block';
        this.unActiveMenuBarImg.style.display = 'block';
        this.menuBarImg.style.display = 'none';
        this.logoutImg.style.display = 'none';
        this.menuBarCancelImg.style.display = 'none';
    }
};

function checkSetup() {
    if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options){
        window.alert('You have not configured and imported the Firebase SDK. ');
    }
}

HiLight.prototype.initTextImg = function () {

    this.remainSeatTextImg.style.display = 'none';
    this.remainTimeTextImg.style.display = 'none';
    this.verificationCodeTextImg.style.display = 'none';
    this.choiceSeatTextImg.style.display = 'none';
};

HiLight.prototype.initMessageText = function () {

    this.messageText1.style.display = 'none';
    this.messageText2.style.display = 'none';
    this.messageText3.style.display = 'none';
    this.messageText4.style.display = 'none';
    this.messageText5.style.display = 'none';
    this.messageText6.style.display = 'none';
    this.messageText7.style.display = 'none';
    this.messageText8.style.display = 'none';
    this.messageText9.style.display = 'none';
    this.messageText10.style.display = 'none';
    this.messageText11.style.display = 'none';
    this.messageText12.style.display = 'none';
    this.messageText13.style.display = 'none';
    this.messageText14.style.display = 'none';
    this.messageText15.style.display = 'none';
    this.messageText16.style.display = 'none';

};

HiLight.prototype.signInWithTime = function ( seatNumber ) {

    this.initImage();
    this.firstReservationButton.style.display = 'inline';
    this.loginButton.style.display = 'none';
    this.menuBarImg.style.display = 'block';
    this.unActiveMenuBarImg.style.display = 'none';
    this.unActiveTalk.style.display = 'none';
    this.activeTalk.style.display = 'block';
    this.certificationSuccess();
    this.number = seatNumber;
    this.remainTime(numberToRef(seatNumber));
    this.remainTimeText.style.display = 'inline';
    this.remainSeatTextImg.style.display = 'none';
    this.remainSeatNumber.style.display = 'none';
};