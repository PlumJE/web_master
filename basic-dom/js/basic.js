//js.basic.js

<body>
  <h3>DOM</h3>
  <ul>
    <li>사과</li>
    <li>바나나</li>
    <li>복숭아</li>
    <!-- <li>수박</li>upand 추가 -->
  </ul>
  <div id="show">
    <!-- <p>Welcome</p><button>삭제</button>  -->
  </div>
  <script src="js/basic.js">
    //Document Object: 객체(속성, 메소드)
    let ulDom = document.querySelector('ul');
    //ulDom.children)
    console.log(ulDom.children[0].innerHTML);//ulDom.children[0]ulDom의 첫번째 자식요소

    //DOM 객체에는 메소드(객체생성 메소드: createElement())
    let liTag=document.createElement('li'); //<li></li>요소를 생성.createElement요소 생성또는 추가 시 사용
    liTag.innerHTML ='수박'; //<li>수박</li> innerHTML 요소 안
    ulDom.appendChild(liTag); // ulDom요소의 자식요소로liTag 등록. appendChild어디에 붙일지
//or
    // document.querySelector('body').appendChild(liTag);

    //coding...
    let pTag = document.createElement('p');
    pTag.innerHTML = '<b>Welcome</b>';//테그
    document.querySelector('#show').appendChild(pTag);

    let btn = document.createElement('button');
    btn.innerText ='<b>삭제</b>';//<button>삭제</button> 텍스트

    btn.addEventListener('click', (e) =>{
      // console.log(e.target.previousElementSibling);//p테크. 버튼을 기준으로 먼저 나오는 형제
   
  //   console.log(e.target.previousElementSibling.remove());//화면요소 삭제
  // })
  //   console.log('ul>li:nth-of-type(1)').remove();

    document.querySelector('ul').children[0].remove();
 })
    document.querySelector('#show').appendChild(btn);

    // let litag = document.createElement('li');
    // console.log(ulDom.children[0].innerHTML);
    
  </script>
</body>