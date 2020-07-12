// Данная библиотека разрабатывается Отделом ОКЭ ЕДЦ Московского метрополитена
var saveArr = [{'save':1}];
var filtersArr = [];
var interimArr = [];

//window.onload = function(){}
    // показать элемент
    async  function showEl$(a,speed,timeOuts) { if(!speed){speed='3s'}  function sayHi() { a.style.transition=speed;  a.style.opacity = 1; a.style.visibility = 'visible'; } await setTimeout(sayHi,timeOuts);}
    // скрыть элемент
    async  function hideEl$(a,speed,timeOuts) {if(!speed){speed='3s'}  function sayHi() { a.style.transition=speed;  a.style.opacity = 0; a.style.visibility = 'hidden';} await setTimeout(sayHi, timeOuts);  }

  export let id$ = function (id){ return document.getElementById(id); }// поиск по id (принимает id)
  let vId$ = function (id){ return document.getElementById(id).value; }// вывод значения по id (принимает id)
  let class$ = function (classEl){classEl=`.${classEl}`; return document.querySelectorAll(classEl); }// поиск по классу (принимает class)
  let $ = function (element){ return document.querySelectorAll(element); }//$() поиск элемента # . tag  обработка при помощи forEach
  let selId$ =function (id){ var sel = id$(id).options.selectedIndex; return id$(id).options[sel].value; /*.options[sel].text;*/}
  let hiId$ = function (element){ id$(element).style.visibility = 'hidden'; }//hiId$() скрыть элемент с указанным id
  let viId$ = function (element){ id$(element).style.visibility = 'visible'; }//viId$() показать элемент с указанным id
  let hiIdA$ = function (element,timeOuts){ hideEl$(id$(element),timeOuts); }//hiId$() скрыть элемент с указанным id с анимацией
  let viIdA$ = function (element,speed,timeOuts){ console.log(element,speed,timeOuts); showEl$(id$(element),speed,timeOuts); }//viId$() показать элемент с указанным id с анимацией
  let hiC$ = function (classEl){ let c= class$(classEl); c.forEach(( item, index) => {c[index].style.visibility = 'hidden'; c[index].style.opacity = 0;});}//hiC$() скрыть элемент с указанным классомc.style.visibility = 'hidden';
  let viC$ = function (classEl){ let c= class$(classEl); c.forEach(( item, index) => {showEl$(c[index]); });}//viC$() показать элемент с указанным классом
  let hiCAnimate$ = function (element,speed,timeOuts){ let c= class$(classEl); c.forEach(( item, index) => {hideEl$(c[index],speed,timeOuts);});}//hiC$() скрыть элемент с указанным классомc.style.visibility = 'hidden';
  let viCAnimate$ = function (element,speed,timeOuts){ let c= class$(classEl); c.forEach(( item, index) => {showEl$(c[index]),speed,timeOuts;});}//viC$() показать элемент с указанным классом
  export  let clickId$= function (id,func){event.preventDefault();  id$(id).addEventListener('click', func); }//привязать EventListener по id
  export  let clickC$= function (classEl,func){let c= class$(classEl); c.forEach(( item, index) => {c[index].addEventListener('click', func);  }); }//привязать EventListener по классу
  
  let linkSelectId$=function (id1,id2,func){};//привязать EventListener к связанным спискам
  let changeId$= function (id,func){  id$(id).addEventListener('change', func); }//привязать привязывает действие которое вернёт значение нажатого элемента
  //let oninputC$= function (classEl,classChildEl){ let c= class$(classEl); c.forEach(( item, index) => {c[index].addEventListener('oninput', func); });  }//привязать EventListener по классу
  
// проставить option в datalist  (принимает: id datalist, массив, id input)
    let getOption$=function (idChildEl,elArray,elId){
        let getfiltresAr =function () {
          let vals=this.value;
          let l='';
          if(elArray.length>1){
          var opt=filterArr1$(vals,elArray);}else{ var opt=elArray;}
            opt = opt[0];
          // var opt1=filterArr0$(elId, filtresAr);
            filtresAr[elId]=opt[0];
            if(elId=='line'){
              filtresAr[elId]=opt[1];
           // console.log(elId,opt[1]);
            id$('station_id').value='';
            filtresAr['station_id']='';
            }
            // if(elId=='line1'){ 
            //   console.log(typeof(elId.value) );
            //   filtresAr[elId]=opt[0];
            //   console.log(opt[0]);
              
            //   let opt1=filterArr00$(opt[0],wins['station_id']);
            //   getOption$('station_v',opt1,'station_id');
            //   console.log(opt1);
            //   if(opt1.length==1){
            //     console.log(opt1);
            //     id$('station_id').value=opt1[0][1];//opt1[1];
            //   }
            // }else{filtresAr[elId]=opt[0];}
            if(elId=='station_id'){
            let ln =  opt[1].split(' ');
              l=ln.length-1;
            if(l>0){l=ln.length-1;}else{l=1;}
            ln=ln[l];
             // console.log(ln);
              let opt1=filterArr0$(ln,wins['line']);
              //getOption$('line_v',opt1,'line');
              if(opt1.length==1){
              //  console.log(opt1);
                id$('line').value=opt1[0][1];
                filtresAr['line']=opt1[0][1];
                filtresAr['station_id']=opt[0];//opt1[1];

              }
            }
           // console.log(filtresAr);
          }
        changeId$(elId,getfiltresAr);
        let opts='';
        elArray.forEach((item, i) => {
          opts+=`<option id='${idChildEl}_${item[0]}'value="${item[1]}"></option>`;
        }); 
              id$(idChildEl).innerHTML=opts; 
  };

//поиск по второму столбцу массива (строгий)
  let filterArr1$ = function (value,arr1){
          const regexp = new RegExp('^'+value+'$','i');
          var arr=[];
          arr =arr1.filter((Config)=>regexp.test(Config[1]));
          return arr;
        }

//поиск по первому столбцу массива (строгий)
      let filterArr0$ = function (value,arr1){
              const regexp = new RegExp('^'+value+'$','i');
              var arr=[];
              arr =arr1.filter((Config)=>regexp.test(Config[0]));
              return arr;
            } 

//поиск по певому столбцу массива (конец строки)      
    let filterArr00$ = function (value,arr1){
      const regexp = new RegExp(value+'$','i');
      var arr=[];
      arr =arr1.filter((Config)=>regexp.test(Config[0]));
      return arr;
    }     

 //поиск по столбцу id массива (строгий)       
  let filterArrById$ = function (id,arr1){
    // console.log(id,arr1);
    
    const regexp = new RegExp('^'+id+'$','i');
    var arr=[];
    arr =arr1.filter((Config)=>regexp.test(Config.id));
  //  console.log(arr1);
    return arr;
  }      

    let getLinkOption$=function (idChildEl,elArray){
  //   console.log(idChildEl,elArray);
      let opts='';
      elArray.forEach((item, i) => {
        opts+=`<option id='${idChildEl}_${item[0]}'value="${item[1]}"></option>`;
      }); 
      id$(idChildEl).innerHTML=opts; };

  
        //  let getValue = function (){
        //     var elem = this.id;
        //   var opt=document.querySelector("#"+idChildEl+" option[value='"+elem.value+"']");
        //     if (opt){
        //       return opt.dataset.value;
        //     }else{
        //       console.log("ошибка: getValue");
        //      }
        //   }

///глобальные переменные
  let winInfo=[];
  let filtersInfo=[];
          //console.log(selId$('branch'));

          ///id$('graph').style.visibility = 'hidden';
        //    let optionAPI = {menu:1,option_name:option_name,option_value:option_value,date_start:date_start,date_end:date_end,sid:sid};
        //try{  let json = await res.json();  id$('sub').addEventListener('submit', graph);



//API получение (принимает массив с параметрами запроса)
    async  function ftcAPI(optionAPI) { 
        let res= await fetch('c/JSAPI.php', { method:'POST',  body:JSON.stringify(optionAPI)});
        try{ let json = await res.json(); 
            json =JSON.stringify(json)
         // console.log(json);
            return json;}
        catch(e){
          let a ='Ошибка соединения';
          infoWin(a);
          //  console.log('Ошибка:',1);
        }
    }

//API редактирование  (принимает массив с параметрами запроса)
  async  function ftcEAPI(optionAPI) { //console.log(optionAPI);
  
    //console.log(typeof optionAPI);//Object.assign({}, optionAPI)
    
      let res= await fetch('c/JSEditAPI.php', { method:'POST',  body:JSON.stringify(optionAPI)});
    //  console.log(res);
      try{ 
          let json = await res.json(); 
          json =JSON.stringify(json)
         // console.log(json);
          return json;}
       catch(e){
         let a ='Ошибка соединения';
         infoWin(a);
         // console.log('Ошибка:',1);
       }
    }

//всплывающее онформационное окно статус запроса  (принимает строку с описанием ошибки)
    async  function infoWin(a)
    {
      let newId =Math.floor(Math.random() * (1 - 100 + 1)) + 1;
      newId='winId'+newId;
    let newDiv= document.createElement('div');
              newDiv.classList.add('winInfo');
              newDiv.id = newId;
              newDiv.style.position='fixed';
              newDiv.style.top='230px';
              newDiv.style.left='45%';
              newDiv.style.width='300px';
              newDiv.style.height='50px';
              newDiv.style.background='#ebebeb';
              newDiv.style.borderRadius='25px';
              newDiv.style.transition='3s';
              newDiv.style.opacity=1;//0.0;
              newDiv.style.textAlign='center';
              newDiv.style.paddingTop='33px';
              newDiv.style.color='#CC3333';

              document.body.append(newDiv);
              v ='<span style=\'opacity:1; font-size:17pt; color:#383838; \'>'+a+'</span>';
                let iWindow = id$(newId);
                iWindow.innerHTML=v;
                let op=0;
                function sayHi1() {
                  iWindow.style.opacity = 1;
                }
                function sayHi() {
                  iWindow.style.opacity = 0;
                }
                function sayHi3() {
                  iWindow.remove();
                }
                await setTimeout(sayHi1, 10);
                await setTimeout(sayHi, 2000);
                await setTimeout(sayHi3, 7000);
    }
  // infoWin3(); 

//всплывающее информационное окно статус запроса ("Текст",'left','bottom','100','100',7000);
      async  function infoWin3(text,x='left',y='bottom',xvalue='10',yvalue='10')
      { //a='Идёт тестирование'
        let newId =Math.floor(Math.random() * (1 - 100 + 1)) + 1;
        newId='winId'+newId;
      let newDiv= document.createElement('div');
                newDiv.classList.add('winInfo');
                newDiv.id = newId;
                newDiv.style.position='fixed';
                newDiv.style[y]=yvalue+'px';
                newDiv.style[x]=xvalue+'px';
                newDiv.style.width='250px';
                newDiv.style.height='50px';
                newDiv.style.background='white';
                newDiv.style.borderRadius='5px';
                newDiv.style.boxShadow = "2px 2px 5px grey";
                newDiv.style.transition='3s';
                newDiv.style.opacity=0.0;
                newDiv.style.textAlign='center';
                newDiv.style.paddingTop='3px';
                newDiv.style.color='black';
                document.body.append(newDiv);
                v ='<p style=\'opacity:1; font-size:12pt; color:#383838;\'>'+text+'</p>';
                  let iWindow = id$(newId);
                  iWindow.innerHTML=v;
                  let op=0;
                  function sayHi1() {
                    iWindow.style.opacity = 1;
                  }
                  function sayHi() {
                    iWindow.style.opacity = 0;
                  }
                  function sayHi3() {
                    iWindow.remove();
                  }
                  await setTimeout(sayHi1, 10);
                  await setTimeout(sayHi, 10);
                  await setTimeout(sayHi3, 7000);
      }

// преобразовать массив в GET параметры URL
      let arrayToURL$= function (obj) {
        let str='';
      /// for (var key in obj) {
        obj.forEach((item, i) => {
          if (str != "") {
            str += "&";
        }
            str += item[0]+ "=" + item[1];
          }); 
      return str;

      }

// текущее время
      let  timeNow$ = function () {
        let dates=new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Moscow',  });//.split('-').reverse().join('/');
        dates=dates.slice(11, 16);
        return dates;}

// текущеая дата
      let dateNow$ = function () {
        let dates=new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Moscow',  });//.split('-').reverse().join('/');
        dates=dates.slice(0, 10);
      return dates;}
//изменение формата даты c - на .
let dateForRead$=function(date) {
  date=date.split('-').reverse().join('.');
 // console.log(date);
  return date; 
}

//изменение формата даты c . на -
let dateForWrite$=function(date) {
  date=date.split('.').reverse().join('-');
  return date;
}