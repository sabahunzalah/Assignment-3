//Q1: Solve the below code of expressions using short circuit?
// --------------------------question1------------------------------.
// var a = 5
//  let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || a--) || (false && (++a + 1)) * "end";
            //   ("abc") * (1) || (false) * "end";
            //   NaN ||  (false) * "end";
              // NaN Answer
//  console.log(exp1)


//------------------------------question2-----------------------------

// var a = 5
// let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
//   (10) * (12) && ("falsetest") || 0
//   120 && "falsetest" || 0
//   "falsetest" || 0
// "falsetest"  Answer
// console.log(exp2)

//------------------------------question3-----------------------------

// var a = 5
// let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
          // 3 + 5 * 4 && "6value"  * 3 + "result"
          // 32 && NaN + "result"
          //NaNresult Answer
        //   console.log(exp3)

//------------------------------question4-----------------------------
//  var a = 5
// let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
        //   "hello" * (6 + 1) || ( 5 * "abc") * 1 +"xyz" && 0;
        //   "hello" * 7 || NaN * 1 +"xyz" && 0;
        //   NaN || NaN + "xyz" && 0
        //  " NaNxyz" && 0
        //  0 Answer
        // console.log(exp4)
//------------------------------question5-----------------------------
// var a = 4
// let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
    // true || false * 4 + 2
    // true || false * 6
    // true || 0
    // true Answer
    // console.log(exp5)
//------------------------------question6-----------------------------
  
//  var a = 5
//     let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
    // "6abc" &&  11 || 1 && NaN || 6
    // 11 Answer
    // console.log(exp6)

//------------------------------question7-----------------------------
//  var a = 5 ;
// let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
//"foo5" * 7 || 9 || "result";
// NaN || 9 || "result"
// 9 Answer
// console.log(exp7)
//------------------------------question:8-----------------------------
// let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
   // 1 && 1 || "falsetest" * 4 && 5 || "value";
    // 1 Answer
    // console.log(exp8)
 //------------------------------question:9-----------------------------
//  var a = 5
// let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
// NaN || "6test" && "3result" || null;
// "3result" Answer
// console.log(exp9)

 //------------------------------question :10-----------------------------
//  var a = 5
//  let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
 // 6 && "start" || 1 && "value" || NaN && 6;
 // "start" Answer
//  console.log(exp10)

 //------------------------------question :11-----------------------------
// var a = 5
// let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
//  false + 5 * 4 || NaN &&  0;
// false + 20 || NaN && 0
// 20 Answer
// console.log(exp11)
 //------------------------------question :12-----------------------------

//  let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// "hello" * 3 || 1 * 3 && "result" || 4 + "test"
// NaN || 3 && "result" || "4test"
// "result" Answer
// console.log(exp12)

 //------------------------------question :13-----------------------------
//  var a = 5;
//  let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
 // 5 *  5  + 2 && "falsetest" || NaN && 4
 // 27 && "falsetest" || NaN && 4
 // "falsetest" Answer

// console.log(exp13)

 //------------------------------question :14-----------------------------
//  var a = 5
//  let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
 // "falseabc" * 2 || 5 * "start" + 3 && 4 || "end"
 // NaN || NaN  && 4 || "end"
 // NaN || "end"
 // "end" Answer
//  console.log(exp14)

 //------------------------------question :15-----------------------------
//  var a= 5
//  let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// "0foo" *3 + "result" || "start" + 7* 4;
// NaN + "result" ||"start" + 28
//  "NaNresult" || "start28"
//  "NaNresult" Answer
//  console.log(exp15)
 //------------------------------question :16-----------------------------
//  var a = 5
//  let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
 // NaN  || false || "start" + 4 + 2 * 5 && null;
 //NaN || false || "start14" && null
 // null Answer
//  console.log(exp16)
 //------------------------------question :17-----------------------------
//  var a = 5
//  let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
 // 3 + 2 * "test5" &&  15 || "0value" && 4
 // 3 + NaN &&  15 || "0value" && 4
 // NaN && 15 || "0value" && 4
 // NaN  || "4"
 // " 4 " Answer
//   console.log(exp17)
 //------------------------------question :18-----------------------------
//  var a = 5;
//  let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
 // "start" && NaN || 21 + "result" && 0;
 // "start" && NaN ||  "21result" && 0;
 // 0 Answer
//  console.log(exp18)
 //------------------------------question :19-----------------------------
//  var a = 5;
//  let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
 // (6 && "foo") || (8 * 3) + "test" && 7;
 // "foo" || 24 + "test" && 7;
 // "foo" || "24test" && 7;
 // "foo" Answer
//   console.log(exp19)
  //------------------------------question :20-----------------------------
//   var a = 5;
//   let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
  // "6hello" && (0 + 6) * "result" || "end5" || 0
  // "6hello" && NaN || "end5" || 0
//  "end5" Answer
//   console.log(exp20)
  //------------------------------question:21-----------------------------
//   var a = 5;
//   let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
  // 5 *(1 + 6) && ("testfalse") || 7 * 3 + "value";
  // 35 && "testfalse" || 21 + "value"
  // 35 && "testfalse" ||  "21value"
  // "testfalse"
// console.log(exp21)
  //------------------------------question:22-----------------------------
//   var a = 5 ;
//   let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
  // "foo4" && 7 * "start" || 5 + 6 * 1 && "test"
  // "foo4" && NaN || 11 && "test"
  // NaN ||  11 && "test"
  //"test" Answer
//   console.log(exp22)
  //------------------------------question:23-----------------------------

//   var a = 5 ;
// let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// false || 6 * "end" && "start" || 20 && "result";
// false || NaN && "start" || 20 && "result";
// NaN || 20 && "result";
//  "result" Answer
// console.log(exp23)
  //------------------------------question:24----------------------------- 
//     var a = 5 ;
//   let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
  // 3 + NaN || (0 + 5) * "hello" && "world" + 1 ||2
  // NaN || NaN && "world1" || 2
  //NaN && "world1" || 2
  //NaN  || 2
  //2 Answer
  
//   console.log(exp24)
  //------------------------------question:25----------------------------- 
//     var a = 5 ;
//   let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
  // 7 * 5 && 5 || "start1test" && 0
  // 35 && 5 || "start1test" && 0
  // 5 || "start1test" && 0
  //5 || 0
  //5 Answer
  
//   console.log(exp25)
  //------------------------------question:26----------------------------- 
//     var a = 5 ;
//   let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
  //"hello" && 3 * 2 + 6 || 1* "result" + "end";
  //"hello" && 12 || NaN + "end";
  //"hello" && 12 || NaN;
  // 12 || NaN
  //12 Answer
//   console.log(exp26)
  //------------------------------question:27----------------------------- 
//       var a = 5 ;
//   let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
  //3 * "test" + 3 && "value" || "start5"
  //Nan +3 && "value" || "start5"
  //NaN && "value" || "start5"
  //NaN || "start5"
  // "start5" Answer
//   console.log(exp27)
  //------------------------------question:28----------------------------- 
//     var a = 5 ;
//   let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
  //1 *"hello" || 3 + 5 * "result" || "world";
  //NaN || 3 + NaN || "world";
  //NaN || NaN || "world";
  // "world" Answer
//   console.log(exp28)
  //------------------------------question:29----------------------------- 
//   let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
  // "start" + 2 * 1 && "value" *5 + "result"
  // "start" + 2 && NaN + "result"
  // "start2" && "NaNresult"
  // "NaNresult" Answer
    // console.log(exp29)
  //------------------------------question:30----------------------------- 
//   var a = 5;
//   let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
  //4 * "test" || 5 && "falsevalue" + "end" || 5;
  //NaN || 5 && "falsevalueend" || 5
  //NaN ||  "falsevalueend" || 5
  // "falsevalueend" Answer
//   console.log(exp30)
  //------------------------------question:31-----------------------------
//   var a = 5 
//   let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
  // "3end" || NaN && 7 || "start1"
  // "3end" || NaN || "start1"
  // "3end" Answer
//   console.log(exp31)

  //------------------------------question:32----------------------------- 
//   let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
  // 3 * 1 || NaN + 2 && "falsetest"
  // 3 || NaN && "falsetest"
  //3  || NaN
  //3 Answer
    // console.log(exp32)
  //------------------------------question:33----------------------------- 
  // var a = 5 ;
  // let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
  // 5 && "end5" || "falsetest" * 4  && 5
  // 5 && "end5" || NaN && 5
  // "end5"|| NaN
  // "end5" Answer
  // console.log(exp33)

   //------------------------------question:34----------------------------- 
  //  var a = 5;
  //  let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
   // "hello" + 4 * (5) || 3 && "start1" || "truetest"
   // "hello" + 20 || 3 && "start1" || "truetest"
   // "hello20" || 3 && "start1" || "truetest"
   // "hello20" || "start1" || "truetest"
   // "hello20"  Answer
  //  console.log(exp34)

   //------------------------------question:35----------------------------- 
  //  var a = 5
  // let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
  // "start" && 5 * 4 + 5 && "falseend" || 2;
  // "start" && 25 && "falseend" || 2;
  // "falseend" Answer
  // console.log(exp35)
  //------------------------------question:36----------------------------- 
  // var a = 5;
  //  let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
   // "1value" && 8 || "3result" * 1 && 4;
   // "1value" && 8 || NaN && 4;
   // 8 || NaN:
   // 8 Answer
  //  console.log(exp36)
 //------------------------------question:37----------------------------- 
  //  var a = 5;
  //  let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
   // "hello" && "2test" || 9 && "truevalue" + 1
   // "hello" && "2test" || 9 && "truevalue1"
   // "2test" || "truevalue1"
   // "2test" Answer
  //  console.log(exp37)
  //------------------------------question:38----------------------------- 
  // var  a = 5;
  // let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
  // 5 * ( 5 ) && 6 * "result" || 2 + "end";
  // 5 * ( 5 ) && NaN || "2end";
  //  25  && NaN || "2end";
  //   NaN || "2end";
  // "2end" Answer;
  // console.log(exp38)
  //------------------------------question:39----------------------------- 
  // let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
  // "start" && 1 * 2 || 3 + NaN + 5 && 0;
  // "start" && 2||  NaN  && 0;
  // 2 ||  NaN ;
  // 2 Answer
  // console.log(exp39)
  //------------------------------question:40----------------------------- 
  // var a = 5;
  // let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
  // "test" * 5 || 6 + "result" * 4
  // NaN || 6 + NaN
  // NaN || NaN
  //  NaN Answer
  // console.log(exp40)
  //------------------------------question:41----------------------------- 
  // let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
  //"start" && 5 * "test" + 5 || 4 * 1 && "hello";
  // "start" && NaN || 4 && "hello";
  // NaN || "hello"
  // "hello" Answer
  // console.log(exp41)
   //------------------------------question:42----------------------------- 
  //  var a = 5;
  //  let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
   // NaN || 3 && NaN + 5
   // NaN || 3 && NaN
   // NaN Answer
  //  console.log(exp42)
  //------------------------------question:43----------------------------- 
  // var a = 5;
  // let exp43 =(false && a--) || 4 * (3 + 2) && "start" + 5
  //false || 20 && "start5"
  //false || "start5"
  // "start5" Answer
  // console.log(exp43)
  //------------------------------question:44-----------------------------
  // var a = 5; 
  // let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test"
  // 3 + 2 * 6 && "value1" || 8 + "test"
  //15 && "value1" || "8test"
  // "value1" || "8test"
  // "value1" Answer
  // console.log(exp44)

  //------------------------------question:45-----------------------------
  // var a = 5;
  // let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2 
  //1 + "test" && 5 + 15 || "end2"
  // "1test" && 20 ||"end2"
  // 20 || "end2"
  // 20 Answer
  // console.log(exp45)
  //------------------------------question:46----------------------------- 
  // var a = 5;
  // let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5
  // 14 && "test" || "3hello" && 5
  //"test" || 5
  // "test" Answer
  // console.log(exp46)
  //------------------------------question:47----------------------------- 
  // var a = 5;
  // let exp47 =  0 + "result" && (3 + 1) * 2 || (false + a--) * "end"
  //"0result" && 8 || 5 * "end"
  // "0result" && 8 || NaN
  // 8 || NaN
  // 8 Answer
  // console.log(exp47)
  //------------------------------question:48----------------------------- 
  // var a = 5
  // let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--
  // 1 * "test" && 4 || 3 * "hello" + 5
  // NaN && 4 || NaN
  // NaN || NaN
  // NaN Answer
  // console.log(exp48)
  //------------------------------question:49----------------------------- 
  // var a = 5
  // let exp49  = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end"
  // 6 + "resut" && 4 * 6 || "start2end"
  // "6resut" && 24 || "start2end"
  //  24 || "start2end"
  // 24 Answer
  // console.log(exp49)
  //------------------------------question:50----------------------------- 
  // var a = 5
  // let exp50 = 32 && true - ++a && " " || "true"
  // 32 && true - ++a && " " || "true"
  // 32 && 1 - 6 && " " || "true"
  // 32 && -5 && " " || "true"
  // -5 && " " || "true"
  //" " || "true"
  // " " Answer
  // console.log(exp50)
  //------------------------------question:51----------------------------- 
  // var a = 5;
  //  let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3
   // 7 * 6 || "start" + "6end" * 3
   // 42 ||"start" + NaN
   // 42 ||"startNaN"
   // 42 Answer
  //  console.log(exp51)
  //------------------------------question:52----------------------------- 
  // var a = 5 ;
  // let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result")
  // 6 && 3 * "test" || 4 + "start" * "6result"
  // 6 && NaN || 4 + NaN
  //NaN || NaN
  // NaN Answer
  // console.log(exp52)
  //------------------------------question:53----------------------------- 
  // var a = 5 ;
  // let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end"
  // 3 + "value" * 7 || "start" + "end"
  // 3 + NaN || "startend"
  // NaN || "startend"
  // "startend" Answer
  // console.log(exp53)

  //------------------------------question:54----------------------------- 
  // var a = 5;
  // let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4
  // 7 * "result" || false * "test" + 4
  // NaN || NaN + 4
  // NaN || NaN
  // NaN Answer
  // console.log(exp54)
  //------------------------------question:55----------------------------- 
  // var a = 5 ;
  //  let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value"
   // "start" + 5 * "5test" || 2 * "value"
   // "start" + NaN || NaN
  //  "startNaN" || NaN
  // "startNaN"  Answer
  // console.log(exp55)
  //------------------------------question:56----------------------------- 
  // var a = 5;
  // let exp56 =  4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5
  // 4 * 6 + "test" || 8 * "start" + 5
  // 24 + "test" || NaN + 5
  // " 24test" || NaN
  // "24test"
  // console.log(exp56)
  //------------------------------question:57----------------------------- 
  // var a = 5;
  // let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value"
  //NaN || 6 * "result" || "value"
  //NaN || NaN ||"value"
  //"value"
  // console.log(exp57)
  //------------------------------question:58----------------------------- 
  // var a = 5;
  // let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3
  // "5start" * "result" || 2 + "end" + 3;
  //NaN || "2end3"
  // "2end3" Answer
  // console.log(exp58)
  //------------------------------question:59----------------------------- 
  // var a = 5;
  // let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2
  // 5 * 8 * "test" || false + 2;
  // 40 * "test" || 2
  // NaN || 2
  // 2 Answer
  // console.log(exp59)
  //------------------------------question:60-----------------------------
  // var a = 5;
  // let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end" 
  // "5value" * "test" + 4 || 2 * "end";
  //NaN + 4 || NaN
  //NaN || NaN
  // NaN
  // console.log(exp60)
  //------------------------------question:61----------------------------- 
  // var  a = 5;
  //  let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5
   // 3 + "6result" || 8 * "test" + 5
   // "36result" || NaN
   // "36result"
  //  console.log(exp61)

  //------------------------------question:62----------------------------- 
  // var a = 5;
  //  let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5
   // "start" + "5test" * 3 || false * "end" + 5;
   // "start" + NaN || NaN
   // "startNaN"
  //  console.log(exp62)
  //------------------------------question:63-----------------------------
  // var a = 5;
  //  let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result"
   // 8 * "test" || "value" + 9 * "result"
   //NaN || "value" + NaN
   //NaN || "valueNaN"
   // "valueNaN" Answer
  //  console.log(exp63)
  //------------------------------question:64----------------------------- 
  // var a = 5;
  //  let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result")
   // 5 * "end" + 6 * "test" || "start" + false;
   //NaN || "startfalse"
   // "startfalse" Answer
  //  console.log(exp64)
  //------------------------------question:65----------------------------- 
  // var a = 5;
  // let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
  // "value" + 3 * "5test" || 1 * "end";
  // "value" + NaN || NaN;
  // "valueNaN" || NaN
  // "valueNaN"
  // console.log(exp65)
  //------------------------------question:66----------------------------- 
  // var a = 5;
  // let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
  // "6test" * 2 || 7 * "start" + "result"
  //NaN || NaN + "result"
  //NaN ||  "NaNresult"
  //"NaNresult
  // console.log(exp66)

  //------------------------------question:67----------------------------- 
  // var a = 5;
  //  let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
   // "start" + 8 * "end" || "5test" * 5;
   // "start" + NaN || NaN;
   // "startNaN" || NaN
   // "startNaN"
  //  console.log(exp67)

  //------------------------------question:68----------------------------- 
  // var a = 5;
  // let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3
  // 2 * 6 + "result" || false * 3
  // 12 + "result" || 0
  // "12result" || 0
  // "12result" Answer
  // console.log(exp68)

  //------------------------------question:69----------------------------- 
  // var a = 5 ;
  // let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start"
  // 4 + "4test" * 5 || 2 * "start";
  //4 + NaN || NaN
  // NaN || NaN
  // NaN Answer
  // console.log(exp69)

  //------------------------------question:70----------------------------- 
  // var a = 5;
  // let exp70 = (a-- + 2) * "result" || (false && "end") + 3
  // 7 * "result" || false + 3;
  //NaN || 3
  // 3 Answer
  // console.log(exp70)

  //------------------------------question:71----------------------------- 
  // var a = 5;
  // let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4
  // "test" + 2 * 8 || false + 4;
  // "test" + 16 || 4
  // "test16" || 4
  // "test16" Answer
  // console.log(exp71)

  //------------------------------question:72----------------------------- 
  // var a = 5
  // let exp72 = 3 * (a-- + "value") || (false + 2) * "test"
  // 3 * "5value" || 2 * "test"
  //NaN || NaN
  // NaN Answer
  // console.log(exp72)

  //------------------------------question:73----------------------------- 
  // var a = 5 ;
  // let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start"
  // "5test" * 4 || 1 * "result" + "start"
  // NaN || NaN +"start"
  // NaN + "NaNstart"
  // "NaNstart" Answer
  // console.log(exp73)

  //------------------------------question:74----------------------------- 
  // var a = 5;
  // let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start"
  // 11 * "end" || 8 * "result" + "start";
  // NaN || NaN + "start"
  // NaN ||  "NaNstart"
  // "NaNstart" Answer
  // console.log(exp74)

  //------------------------------question:75----------------------------- 
  // var a = 5;
  // let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result"
  // NaN + "5Start" || 1 * "result"
  // "NaN5start" || NaN
  // "NaN5start" Answer
  // console.log(exp75)













 













