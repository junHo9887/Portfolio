let sc = document.querySelector('.sc'),
    search = document.querySelectorAll('.sc li a'),
    content = document.querySelectorAll('.content'),
    btn = document.querySelectorAll('.btn');
    span = document.querySelector('.span');
    searchbar = document.querySelector('.search_bar')
    sc2 = document.querySelector('#sc');
    home = document.querySelector('#home');
    추천 = document.querySelector('.suggestion');
    allsearch = document.querySelector('.search');

    packg = document.querySelectorAll('.main .inner ul li');
    main_sel = document.querySelectorAll('.main_sel');
    maininner = document.querySelector('.main>.inner');



    /* header 우측부분 돋보기모양 클릭시 이벤트 */ 
sc2.addEventListener('click', function(e){
  e.preventDefault();
  searchbar.style.display = 'block';
});

/* header 우측부분 돋보기모양 클릭시 이벤트이후 x모양 닫기부분 클릭시 이벤트*/ 
    span.addEventListener('click',function(){
      searchbar.style .display = "none";
    });

   
for(let i=0; i<search.length; i++){
  search[i].addEventListener('click',function(e){
    e.preventDefault();
    closeAll();
    this.classList.add('active');
      content[i].classList.add('act');

  });
}
function closeAll(){
  for(let j=0; j<search.length; j++){
    search[j].classList.remove('active');
  }
  for(let j=0; j<content.length; j++){

    content[j].classList.remove('act');
  }
}
 /*페이지 상세검색부분 메뉴바 클릭이벤트  */
    // document.addEventListener('DOMContentLoaded', function () {
    //   // 페이지 로드 후, search[0] 요소를 자동으로 클릭
    //   search[0].click();
    // }); 
    // const target = document.querySelector('.target'); 
    // const links = document.querySelectorAll('.sc li a');

      
// const width = this.getBoundingClientRect().width;
// const height = this.getBoundingClientRect().height;
// // 여기 안됨 ...
// const left = this.getBoundingClientRect().left + window.pageXOffset;
// console.log(left);
// const top = this.getBoundingClientRect().top + window.pageYOffset;
// target.style.width = `${width}px`;
// target.style.height = `${height}px`;
// target.style.left = `${left}px`;
// target.style.top = `${top}px`;

// function resizeFunc(){
//   const active = document.querySelector('.sc li.active');
//   if(active){
//     const left = active.getBoundingClientRect().left + window.pageXOffset;
//     const top = active.getBoundingClientRect().top + window.pageYOffset;
//     target.style.left = `${left}px`;
//     target.style.top = `${top}px`;
//   }
// }
//window.addEventListener('resize', resizeFunc);

/*페이지 상세검색 부분 btn부분 하버&클릭 이벤트*/ 
for(let i=0; i<btn.length; i++){
  btn[i].addEventListener('mouseenter', function(){
      btn[i].style.backgroundColor = "#f4d18d";
  });
  btn[i].addEventListener('mouseleave', function(){
    btn[i].style.backgroundColor = "#F9C153";
  });
  btn[i].addEventListener('mousedown', function(){
    btn[i].style.transform = 'translate(3px,3px)';
    btn[i].style.color = "#fff";
    btn[i].style.boxShadow = 'none';
    btn[i].style.backgroundColor ="#bf9136";
  });
  btn[i].addEventListener('mouseup', function(){
    btn[i].style.transform = 'translate(0)';
    btn[i].style.border="none";
    btn[i].style.boxShadow = '3px 3px gray';
    btn[i].style.color = "#000";
    btn[i].style.backgroundColor ="#f4d18d";
  });
}
// 이해가 많이부족한 코드부분

/*숙소명을 입력해주세요 부분 클릭이벤트*/
let isActt = false;

document.addEventListener('click', function(event) {
  var target = event.target;
if (target.id !== 'home' && isActt) {
  maininner.style.zIndex = '1';
  추천.classList.remove('actt');
 
  isActt = false;
} else if (target.id === 'home') {
  if (!isActt) {
    maininner.style.zIndex = '-1';
  
    추천.classList.add('actt');
    isActt = true;
  } else {
    maininner.style.zIndex = '1';
    추천.classList.remove('actt');
    isActt = false;
  }
}
});


for(let i=0; i<4; i++){
  packg[i].addEventListener('click',function(){
    closeAll1();
    this.classList.add('action');
      main_sel[i].classList.add('action_on');
  });
}
function closeAll1(){
  for(let j=0; j<4; j++){
    packg[j].classList.remove('action');
  }
  for(let j=0; j<4; j++){
    main_sel[j].classList.remove('action_on');
  }
}


for(let i=4; i<8; i++){
  packg[i].addEventListener('click',function(){
    closeAll2();
    this.classList.add('action2');
      main_sel[i].classList.add('action_on2');
  });
}
function closeAll2(){
  for(let j=4; j<8; j++){
    packg[j].classList.remove('action2');
  }
  for(let j=4; j<8; j++){
    main_sel[j].classList.remove('action_on2');
  }

}
// 배열로 가져오고 document.querySelector로 왜또 가져오는건지?

// 렌트카 부분

let swiper1 = ['.mySwiper1','.mySwiper2','.mySwiper3','.mySwiper4'];
let list = document.querySelectorAll('.rent .inner ul li');
console.log(list);

for(let i = 0; i < swiper1.length; i++) {
  list[i].addEventListener('click', function(e) {
    e.preventDefault();
    closeAll4();
    this.classList.add('acc');
    document.querySelector(swiper1[i]).classList.add('acc1');
  });

  function closeAll4() {
    for(let j = 0; j < 4; j++) {
      list[j].classList.remove('acc');
    }
    for(let j = 0; j < 4; j++) {
      document.querySelector(swiper1[j]).classList.remove('acc1');
    }
  }
}
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 추천관광지 부분
let backButton = document.querySelector('.btn2 a:first-child'),
    nextButton = document.querySelector('.btn2 a:last-child'),
    chu = document.querySelectorAll('.suggestion1 .inner .s_item .mc a'),
    s_item = ['.s_item1','.s_item2','.s_item3','.s_item4','.s_item5'];

let currentIdx = 0; // 현재 보여지는 아이템의 인덱스

backButton.addEventListener('click', function(e) {
  e.preventDefault();
  currentIdx = currentIdx - 1;
  if (currentIdx < 0){currentIdx =  chu.length - 1;}
  closeAll5();
  chu[currentIdx].classList.add('chu');
  document.querySelector(s_item[currentIdx]).classList.add('ac');
});

nextButton.addEventListener('click', function(e) {
  e.preventDefault();
  currentIdx = currentIdx + 1;
  if (currentIdx >= chu.length) {currentIdx = 0;}
  closeAll5();
  chu[currentIdx].classList.add('chu');
  document.querySelector(s_item[currentIdx]).classList.add('ac');
});
function closeAll5() {
  for (let j = 0; j < chu.length; j++) {
    chu[j].classList.remove('chu');
    document.querySelector(s_item[j]).classList.remove('ac');
  }
}
// 햄버거 메뉴
let hamx = document.querySelector('#hamx'),
    ham = document.querySelector('.ham'),
    hamburger = document.querySelector('.hamburger'),
    scsc = document.querySelector('.header .inner .search'),
    body = document.querySelector('.header .inner');

    hamburger.addEventListener('click',function(e){
      e.preventDefault();
      ham.style.display = 'block';
      ham.style.right = '-80%'; 
      setTimeout(function() {
        ham.style.transition = '2s';
        ham.style.right = '0';
        scsc.style.zIndex = '-1';
      }, 100);
    });
    hamx.addEventListener('click',function(e){
      e.preventDefault();
      scsc.style.zIndex = '2';
      ham.style.right = '-80%';
      setTimeout(function(){
        ham.style.display = 'none';
    },1800)
    });


// 데스크탑으로 돌아갈 때 ham요소 숨김
    window.addEventListener('resize', function() {
      if (window.innerWidth > 600) {
        ham.style.display = 'none';
      }
    });

    // 추천관광지 아코디언 부분
    let 제목 = document.querySelectorAll('#aco1'),
          aco2 = document.querySelectorAll('#aco2'),
          pp = document.querySelectorAll('#aco1 p');

console.log(pp);

        for(let i=0; i<제목.length; i++) {
          제목[i].addEventListener('click', function(e) {
            e.preventDefault();
            제목[i].classList.toggle('oho');
            let aco2 = this.nextElementSibling; // 해당 제목의 다음 형제 요소를 선택(gpt의도움)
            aco2.classList.toggle('on');
          }
          )};