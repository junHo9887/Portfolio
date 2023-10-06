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

    // 서브페이지 버튼 클릭이벤트
    logbtn.addEventListener('mousedown',function(){
      logbtn.style.transform = 'translate(4px,4px)';
      logbtn.style.transition = '0.1s';
      logbtn.style.boxShadow = 'none';
      logbtn.style.backgroundColor = '#df9400';
      logbtn.style.color = '#000';
    });
    logbtn.addEventListener('mouseup', function(){
      logbtn.style.transform = 'translate(0)';
      logbtn.style.transition = '0.1s';
      logbtn.style.boxShadow = '4px 4px 5px #116aac';
      logbtn.style.backgroundColor = '#F9C153';
      logbtn.style.color = '#fff';
    });

// 로그인(서브페이지) 클릭이벤트
