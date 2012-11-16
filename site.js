
           $().ready(function(){

        $(".P-A").each(function(){
          $(this).click(function(){
            //点一次选中项标红，之前选中的项恢复原来样式，重新给input赋值
              $(this).addClass("AddRed");
              $(this).siblings('p').removeClass("AddRed");
              $(this).siblings('input').val("0");
          });});
        $(".P-B").each(function(){
          $(this).click(function(){
            //点一次选中项标红，之前选中的项恢复原来样式，清空input标签，再重新给input赋值
              $(this).addClass("AddRed");
              $(this).siblings('p').removeClass("AddRed");
              $(this).siblings('input').val("1");
          });});
       $(".P-C").each(function(){
          $(this).click(function(){
            //点一次选中项标红，之前选中的项恢复原来样式，清空input标签，再重新给input赋值
              $(this).addClass("AddRed");
              $(this).siblings('p').removeClass("AddRed");
              $(this).siblings('input').val("2");
          });});
      $(".P-D").each(function(){
          $(this).click(function(){
            //点一次选中项标红，之前选中的项恢复原来样式，清空input标签，再重新给input赋值
              $(this).addClass("AddRed");
              $(this).siblings('p').removeClass("AddRed");
              $(this).siblings('input').val("3");
          });});
      $(".P-E").each(function(){
          $(this).click(function(){
            //点一次选中项标红，之前选中的项恢复原来样式，清空input标签，再重新给input赋值
              $(this).addClass("AddRed");
              $(this).siblings('p').removeClass("AddRed");
              $(this).siblings('input').val("4");
          });});
    $(".P-F").each(function(){
          $(this).click(function(){
            //点一次选中项标红，之前选中的项恢复原来样式，清空input标签，再重新给input赋值
              $(this).addClass("AddRed");
              $(this).siblings('p').removeClass("AddRed");
              $(this).siblings('input').val("5");
          }); });
     //处理多选题
     $(".mul-A").each(function(){
          $(this).click(function(){
             var MulQuestion=new Array();
             var link="";
             if($(this).hasClass("AddRed"))
             {
                $(this).removeClass("AddRed");
             }
             else
              $(this).addClass("AddRed");


            if($(".mul-A").hasClass("AddRed"))
            {
                MulQuestion.push("0");
            }
            if($(".mul-B").hasClass("AddRed"))
            {
                MulQuestion.push("1");
            }
            if($(".mul-C").hasClass("AddRed"))
            {
                MulQuestion.push("2");
            }if($(".mul-D").hasClass("AddRed"))
            {
                MulQuestion.push("3");
            }if($(".mul-E").hasClass("AddRed"))
            {
                MulQuestion.push("4");
            }if($(".mul-F").hasClass("AddRed"))
            {
                MulQuestion.push("5");
            }
           if($(".mul-G").hasClass("AddRed"))
            {
                MulQuestion.push("6");
            }

            for(var i=0;i<=MulQuestion.length;i++)
            {
                if(i==1)
                {
                link+=MulQuestion[0];

                }
                else if(i>1)
                {
                 link+=","+MulQuestion[i-1];
                              }
            }
            // alert(link);
            $(this).siblings('input').val(link);
          });
     })
//多选mul-b
 $(".mul-B").each(function(){
          $(this).click(function(){
             var MulQuestion=new Array();
             var link="";
             if($(this).hasClass("AddRed"))
             {
                $(this).removeClass("AddRed");
             }
             else
              $(this).addClass("AddRed");


            if($(".mul-A").hasClass("AddRed"))
            {
                MulQuestion.push("0");
            }
            if($(".mul-B").hasClass("AddRed"))
            {
                MulQuestion.push("1");
            }
            if($(".mul-C").hasClass("AddRed"))
            {
                MulQuestion.push("2");
            }if($(".mul-D").hasClass("AddRed"))
            {
                MulQuestion.push("3");
            }if($(".mul-E").hasClass("AddRed"))
            {
                MulQuestion.push("4");
            }if($(".mul-F").hasClass("AddRed"))
            {
                MulQuestion.push("5");
            }
           if($(".mul-G").hasClass("AddRed"))
            {
                MulQuestion.push("6");
            }

            for(var i=0;i<=MulQuestion.length;i++)
            {

                if(i==1)
                {
                link+=MulQuestion[0];
                }
                else if(i>1)
                {
                 link+=","+MulQuestion[i-1];
                }
            }
            // alert(link);
            $(this).siblings('input').val(link);
          });
     })
//多选mul-c
 $(".mul-C").each(function(){
          $(this).click(function(){
             var MulQuestion=new Array();
             var link="";
             if($(this).hasClass("AddRed"))
             {
                $(this).removeClass("AddRed");
             }
             else
              $(this).addClass("AddRed");


            if($(".mul-A").hasClass("AddRed"))
            {
                MulQuestion.push("0");
            }
            if($(".mul-B").hasClass("AddRed"))
            {
                MulQuestion.push("1");
            }
            if($(".mul-C").hasClass("AddRed"))
            {
                MulQuestion.push("2");
            }if($(".mul-D").hasClass("AddRed"))
            {
                MulQuestion.push("3");
            }if($(".mul-E").hasClass("AddRed"))
            {
                MulQuestion.push("4");
            }if($(".mul-F").hasClass("AddRed"))
            {
                MulQuestion.push("5");
            }
           if($(".mul-G").hasClass("AddRed"))
            {
                MulQuestion.push("6");
            }

            for(var i=0;i<=MulQuestion.length;i++)
            {

                if(i==1)
                {
                link+=MulQuestion[0];
                }
                else if(i>1)
                {
                 link+=","+MulQuestion[i-1];
                }
            }
            // alert(link);
            $(this).siblings('input').val(link);
          });
     })
//多选mul-D
 $(".mul-D").each(function(){
          $(this).click(function(){
             var MulQuestion=new Array();
             var link="";
             if($(this).hasClass("AddRed"))
             {
                $(this).removeClass("AddRed");
             }
             else
              $(this).addClass("AddRed");


            if($(".mul-A").hasClass("AddRed"))
            {
                MulQuestion.push("0");
            }
            if($(".mul-B").hasClass("AddRed"))
            {
                MulQuestion.push("1");
            }
            if($(".mul-C").hasClass("AddRed"))
            {
                MulQuestion.push("2");
            }if($(".mul-D").hasClass("AddRed"))
            {
                MulQuestion.push("3");
            }if($(".mul-E").hasClass("AddRed"))
            {
                MulQuestion.push("4");
            }if($(".mul-F").hasClass("AddRed"))
            {
                MulQuestion.push("5");
            }
           if($(".mul-G").hasClass("AddRed"))
            {
                MulQuestion.push("6");
            }

            for(var i=0;i<=MulQuestion.length;i++)
            {

                if(i==1)
                {
                link+=MulQuestion[0];
                }
                else if(i>1)
                {
                 link+=","+MulQuestion[i-1];
                }
            }
            // alert(link);
            $(this).siblings('input').val(link);
          });
     })
//多选mul-E
 $(".mul-E").each(function(){
          $(this).click(function(){
             var MulQuestion=new Array();
             var link="";
             if($(this).hasClass("AddRed"))
             {
                $(this).removeClass("AddRed");
             }
             else
              $(this).addClass("AddRed");


            if($(".mul-A").hasClass("AddRed"))
            {
                MulQuestion.push("0");
            }
            if($(".mul-B").hasClass("AddRed"))
            {
                MulQuestion.push("1");
            }
            if($(".mul-C").hasClass("AddRed"))
            {
                MulQuestion.push("2");
            }if($(".mul-D").hasClass("AddRed"))
            {
                MulQuestion.push("3");
            }if($(".mul-E").hasClass("AddRed"))
            {
                MulQuestion.push("4");
            }if($(".mul-F").hasClass("AddRed"))
            {
                MulQuestion.push("5");
            }
           if($(".mul-G").hasClass("AddRed"))
            {
                MulQuestion.push("6");
            }

            for(var i=0;i<=MulQuestion.length;i++)
            {

                if(i==1)
                {
                link+=MulQuestion[0];
                }
                else if(i>1)
                {
                 link+=","+MulQuestion[i-1];
                }
            }
            // alert(link);
            $(this).siblings('input').val(link);
          });
     })
//多选mul-F
 $(".mul-F").each(function(){
          $(this).click(function(){
             var MulQuestion=new Array();
             var link="";
             if($(this).hasClass("AddRed"))
             {
                $(this).removeClass("AddRed");
             }
             else
              $(this).addClass("AddRed");


            if($(".mul-A").hasClass("AddRed"))
            {
                MulQuestion.push("0");
            }
            if($(".mul-B").hasClass("AddRed"))
            {
                MulQuestion.push("1");
            }
            if($(".mul-C").hasClass("AddRed"))
            {
                MulQuestion.push("2");
            }if($(".mul-D").hasClass("AddRed"))
            {
                MulQuestion.push("3");
            }if($(".mul-E").hasClass("AddRed"))
            {
                MulQuestion.push("4");
            }if($(".mul-F").hasClass("AddRed"))
            {
                MulQuestion.push("5");
            }
           if($(".mul-G").hasClass("AddRed"))
            {
                MulQuestion.push("6");
            }

            for(var i=0;i<=MulQuestion.length;i++)
            {

                if(i==1)
                {
                link+=MulQuestion[0];
                }
                else if(i>1)
                {
                 link+=","+MulQuestion[i-1];
                }
            }
            // alert(link);
            $(this).siblings('input').val(link);
          });
     })
//多选mul-G
 $(".mul-G").each(function(){
          $(this).click(function(){
             var MulQuestion=new Array();
             var link="";
             if($(this).hasClass("AddRed"))
             {
                $(this).removeClass("AddRed");
             }
             else
              $(this).addClass("AddRed");


            if($(".mul-A").hasClass("AddRed"))
            {
                MulQuestion.push("0");
            }
            if($(".mul-B").hasClass("AddRed"))
            {
                MulQuestion.push("1");
            }
            if($(".mul-C").hasClass("AddRed"))
            {
                MulQuestion.push("2");
            }if($(".mul-D").hasClass("AddRed"))
            {
                MulQuestion.push("3");
            }if($(".mul-E").hasClass("AddRed"))
            {
                MulQuestion.push("4");
            }if($(".mul-F").hasClass("AddRed"))
            {
                MulQuestion.push("5");
            }
           if($(".mul-G").hasClass("AddRed"))
            {
                MulQuestion.push("6");
            }

            for(var i=0;i<=MulQuestion.length;i++)
            {
                if(i==1)
                {
                link+=MulQuestion[0];
                }
                else if(i>1)
                {
                 link+=","+MulQuestion[i-1];
                }
            }
            // alert(link);
            $(this).siblings('input').val(link);
          });
     })

           });



       function commit(){
         alert("here");
         var a=[];
          $("input").each(function(){


           if($(this).hasClass("i-text distinct")){
              //多选
                 var b=$(this).val();

                 alert(b);
                 if(b1="")
                 {
                 var arr = b.split(',');
                 for(var i in arr)
                 {
                  var a1=parseInt(arr[i]);
                  arr[i]=a1;
                 }
                 alert(arr);
                 a.push(arr);
               }
                else {
                  var b=[];
                  a.push(b);
                }
                 // var b=[];
                 // b.push(1);
                 // a.push(b);
            }
          // else if($(this).hasClass("i-text long-text abc")){
          //   //去除最后一个逗号
          //     a='"'+$(this).val()+'"';
          //     b+=a;
          //     }

            else if($(this).hasClass("i-text long-text")){
                var c =$(this).val();
                a.push(c);

              }
            else if ($(this).hasClass("i-text")){
                 var e = $(this).val();
                  a.push(parseInt(e));

              }
          });

       var data ={
                  time:new Date(),
                  news_id:"50a0bba9b9e37b57f80001a6",
                  symbol:null,
                  answer_pairs:a
       }

        alert(JSON.stringify(a));
        console.submit(JSON.stringify(data),"survery");
     }
