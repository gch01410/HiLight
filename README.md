# 소개
 도서관 좌석관리 Web Application 입니다. 아주대학교 파란학기제 프로젝트로 진행했습니다.<br>
 아주대학교 학생들의 불만이 많은 도서관내 community rounge의 자리를 맡아만 놓고 나타나지 않는 No-Show를 방지하고자 개발되었습니다.<br>
 아두이노와 연동한 좌석 인증절차를 이용하였습니다.<br>
 아주대학교 학생만 가입하고 이용할 수 있게 아주대학교 이메일(xx@ajou.ac.kr)로만 가입이 가능합니다.<br>
 https://hi-light.kr 로 이용 가능합니다. 현재 모바일화면으로만 개발되어 있습니다.<br><br>
 해당 이메일주소 아이디가 없는 사람은 아래정보로 로그인할 수 있습니다.<br>
 아이디 : 1@ajou.ac.kr<br>
 비밀번호 : 111111<br>
 
 개발 : 이도원
 
 # 기능 소개
 현재 잔여좌석을 확인<br>
 <img width="30%" height="30%" src="https://github.com/gch01410/HiLight/blob/master/test/public/images/main.PNG"></img><br>
 
 회원가입은 이메일형식(@ajou.ac.kr)의 ID와 비밀번호(6자리이상)으로 가입<br>
 회원가입에 적은 이메일주소의 메일함에서 회원가입 메일을 확인하면 회원가입 완료<br>
 
 로그인 후 원하는 좌석을 선택하고 아두이노 LED판에 표시되는 4자리 인증번호를 입력하여 좌석등록(현재 6187로 고정)<br>
 
 <span>
 <img width="30%" height="30%" src="https://github.com/gch01410/HiLight/blob/master/test/public/images/seat.PNG" width="70%" height="70%"></img><br>
 <img width="30%" height="30%" src="https://github.com/gch01410/HiLight/blob/master/test/public/images/code.PNG" width="70%" height="70%"></img><br>
 </span>
 
 좌석 대여시간(현재 1분)이 특정 시간(현재 50초)미만으로 되면 좌석연장 가능<br>
 좌석 대여시간이 만료되면 자동으로 좌석반납<br>
 
<img width="30%" height="30%" src="https://github.com/gch01410/HiLight/blob/master/test/public/images/register.PNG" width="70%" height="70%"></img><br>

위쪽 오른쪽에 있는 Talk을 누르면 Hi-Light 플러스 친구로 이동<br>

<img width="30%" height="30%" src="https://github.com/gch01410/HiLight/blob/master/test/public/images/plus.jpg" width="70%" height="70%"></img>
