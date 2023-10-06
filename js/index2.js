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
    logbtn =  document.querySelector('.btn_log button');

    /* header 우측부분 돋보기모양 클릭시 이벤트 */ 
sc2.addEventListener('click', function(e){
  e.preventDefault();
  searchbar.style.display = 'block';
});

/* header 우측부분 돋보기모양 클릭시 이벤트이후 x모양 닫기부분 클릭시 이벤트*/ 
    span.addEventListener('click',function(){
      searchbar.style .display = "none";
    });

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
      }, 100);
    });
    hamx.addEventListener('click',function(e){
      e.preventDefault();
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

// 로그인(서브페이지) 클릭이벤트
let hgbtn = document.querySelector('.hg_btn'),
hgbtn1 = document.querySelector('.hg_btn1'),
hgbtn2 = document.querySelector('.hg_btn2')



hgbtn.addEventListener('mousedown',function(){
  hgbtn.style.transform = 'translate(4px,4px)';
  hgbtn.style.transition = '0.1s';
  hgbtn.style.boxShadow = 'none';
  hgbtn.style.backgroundColor = '#df9400';
  hgbtn.style.color = '#000';
});
hgbtn.addEventListener('mouseup', function(){
  hgbtn.style.transform = 'translate(0)';
  hgbtn.style.transition = '0.1s';
  hgbtn.style.backgroundColor = '#F9C153';
  hgbtn.style.color = '#fff';
});
hgbtn1.addEventListener('mousedown',function(){
  hgbtn1.style.transform = 'translate(4px,4px)';
  hgbtn1.style.transition = '0.1s';
  hgbtn1.style.boxShadow = 'none';
  hgbtn1.style.color = '#000';
});
hgbtn1.addEventListener('mouseup', function(){
  hgbtn1.style.transform = 'translate(0)';
  hgbtn1.style.transition = '0.1s';
  hgbtn1.style.backgroundColor = '#F9C153';
  hgbtn1.style.color = '#fff';
});hgbtn2.addEventListener('mousedown',function(){
  hgbtn2.style.transform = 'translate(4px,4px)';
  hgbtn2.style.transition = '0.1s';
  hgbtn2.style.boxShadow = 'none';
  hgbtn2.style.backgroundColor = '#055988';
  hgbtn2.style.color = '#000';
});
hgbtn2.addEventListener('mouseup', function(){
  hgbtn2.style.transform = 'translate(0)';
  hgbtn2.style.transition = '0.1s';
  hgbtn2.style.backgroundColor = '';
  hgbtn2.style.color = '#fff';
});