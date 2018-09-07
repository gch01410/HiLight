HiLight.prototype.displayEmailSignIn = function () {

    this.loginButton.style.display = 'none';
    this.appName.style.display = 'none';
    this.blankLayer1.style.display = 'block';
    this.remainSeatNumber.style.display = 'none';
    this.remainSeatTextImg.style.display = 'none';
    this.nonLoginButton.style.display = 'inline';

    this.signInEmail.style.display = 'block';
    this.signInPassword.style.display = 'block';
    this.signInEmailInput.style.display = 'inline';
    this.signInPasswordInput.style.display = 'inline';

    this.unActiveMenuBarImg.style.display = 'none';
    this.unActiveTalk.style.display = 'none';
    this.menuBarSignInBackToMain.style.display = 'block';
    this.menuBarJoinIn.style.display = 'block';

    this.theNumberOfSeat.style.display = 'none';

    this.initMessageText();
};

HiLight.prototype.displayEmailJoinIn = function(){
    this.menuBarJoinIn.style.display = 'none';
    this.blankLayer1.style.display = 'none';
    this.blankLayer2.style.display = 'block';
    this.signInEmail.style.display = 'none';
    this.signInPassword.style.display = 'none';
    this.nonLoginButton.style.display = 'none';
    this.secondLoginButton.style.display = 'none';
    this.menuBarSignInBackToMain.style.display = 'none';
    this.menuBarBackToSignIn.style.display = 'block';

    this.joinInEmail.style.display = 'block';
    this.joinInPassword.style.display = 'block';
    this.joinInRePassword.style.display = 'block';
    this.joinInEmailInput.style.display = 'inline';
    this.joinInPasswordInput.style.display = 'inline';
    this.joinInRePasswordInput.style.display = 'inline';
    this.joinInButton.style.display = 'inline';

    this.signInEmailInput.value = '';
    this.signInPasswordInput.value = '';

    this.initMessageText();
};

HiLight.prototype.signInInputChange = function(){

    if ( this.signInEmailInput.value && this.signInPasswordInput.value ){
        this.nonLoginButton.style.display = 'none';
        this.secondLoginButton.style.display = 'inline';
        this.initMessageText();
    } else {
        this.nonLoginButton.style.display = 'inline';
        this.secondLoginButton.style.display = 'none';
    }
};

HiLight.prototype.joinInInputChange = function(){

    this.initMessageText();
};

HiLight.prototype.joinSuccess = function(){

    this.remainSeatTextImg.style.display = 'inline';
    this.joinInButton.style.display = 'none';
    this.joinInEmail.style.display = 'none';
    this.joinInPassword.style.display = 'none';
    this.joinInRePassword.style.display = 'none';
    this.menuBarBackToSignIn.style.display = 'none';

    this.messageText1.style.display = 'block';
};

HiLight.prototype.createEmailUser = function () {

    let email = this.joinInEmailInput.value.trim(),
        password = this.joinInPasswordInput.value.trim(),
        rePassword = this.joinInRePasswordInput.value.trim();

    const that = this;

    if ( this.validateJoinForm(email, password, rePassword) ) {

        let cbCreateUserWithEmail = function (user) {
            console.log('이메일 가입 성공 : ', JSON.stringify(user));

            that.auth.useDeviceLanguage(); // 이메일 기기언어로 세팅
            user.sendEmailVerification().then(function () {
                console.log('인증메일 발송 성공');
                that.joinSuccess();
                that.blankLayer2.style.display = 'none';
                that.messageText1.style.display = 'block';
            }).catch(function (error) {
                console.error('인증메일 발송 에러', error);
                that.messageText2.style.display = 'block';
            });
        };


        let cbAfterPersistence = function () {
            return that.auth.createUserWithEmailAndPassword(email, password)
                .then(cbCreateUserWithEmail.bind(this))
                .catch(function (error) {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            that.messageText3.style.display = 'block';
                            break;
                        case 'auth/invalid-email':
                            that.messageText9.style.display = 'block';
                            break;
                        case 'auth/operation-not-allowed':
                            that.messageText5.style.display = 'block';
                            break;
                        case 'auth/weak-password':
                            that.messageText6.style.display = 'block';
                            break;
                    }
                });
        };

        this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(cbAfterPersistence.bind(this)).catch(function(error) {
                console.error('인증 상태 설정 중 에러 발생' , error);
        });


    }
};

function emailCheck (mail) {

    return mail.split('@')[1] === 'ajou.ac.kr';
}

HiLight.prototype.validateJoinForm = function (email, password, rePassword) {

    if ( !emailCheck(email) ) {
        this.messageText7.style.display = 'block';
        return false;
    }

    if ( password !== rePassword ) {
        this.messageText8.style.display = 'block';
        return false;
    }

    return true;
};

HiLight.prototype.emailSignIn = function () {

    let email = this.signInEmailInput.value.trim(),
        password = this.signInPasswordInput.value.trim();

    const that = this;

    if ( emailCheck(email) && password.length ) {
        let cbSignInEmail = function () {
            return that.auth.signInWithEmailAndPassword(email, password).then(function () {
                that.blankLayer1.style.display = 'none';
                that.secondLoginButton.style.display = 'none';
                that.signInEmail.style.display = 'none';
                that.signInPassword.style.display = 'none';
                that.signInEmailInput.value = '';
                that.signInPasswordInput.value = '';
                that.menuBarSignInBackToMain.style.display = 'none';
                that.menuBarJoinIn.style.display = 'none';
            })
                .catch(function (error) {
                    console.error('이메일 로그인 과정 에러', error);
                    switch (error.code) {
                        case 'auth/invalid-email':
                            that.messageText9.style.display = 'block';
                            break;
                        case 'auth/user-disabled':
                            that.messageText10.style.display = 'block';
                            break;
                        case 'auth/user-not-found':
                            that.messageText11.style.display = 'block';
                            break;
                        case 'auth/wrong-password':
                            that.messageText12.style.display = 'block';
                            break;
                    }
                });
        };
        this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(cbSignInEmail.bind(this));
    } else {
        that.messageText9.style.display = 'block';
    }
};

HiLight.prototype.logout = function () {

    this.auth.signOut();
    this.initImage();
};