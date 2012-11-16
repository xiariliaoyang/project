/**
 * @name edoc
 * @version  v1.0
 * @create_date  2012 8
 * @author Winda Tang
 *  注释↓
 */
var page_demo = 0;
var currentul = 'keynote';


var console = new Object();
var ARGUMENT_SEPARATOR = ":EDOC:"
console.send = function (command_word, args) {
    var iframe = document.createElement("iframe");
    var command_arr = ["command", command_word].concat(args);
    iframe.setAttribute("src", command_arr.join(ARGUMENT_SEPARATOR));
    document.body.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}
console.log = function (msg) {
    console.send("log", [msg]);
}
console.submit = function (data, special_type) {
  console.send("submit_data", [data,"survey"]);
};
function detect(id, li){

    for(var i=0;i<10;i++){
        if(page_controller[i].key == id && page_controller[i].li == li){
            return  page_demo = i;
        }
    }

}

function detect_ul(page){
    return currentul = page_controller[page].key;
}


function page_change_hook(index) {
    console.send("update_page_index", [index, 10]);
}

var EDoc = (function (){
    function show_page(index) {
        if(index == 5){
           document.getElementById('win1').style.cssText=' opacity:1; display:block';
           document.getElementById('win2').style.cssText='visibility:hidden; opacity:0; display:none';
           document.getElementById('win3').style.cssText='visibility:hidden; opacity:0; display:none';
        }else if(index == 8){
           document.getElementById('win2').style.cssText=' opacity:1; display:block';
           document.getElementById('win1').style.cssText='visibility:hidden; opacity:0; display:none';
           document.getElementById('win3').style.cssText='visibility:hidden; opacity:0; display:none';
        }else if(index == 9){
           document.getElementById('win3').style.cssText=' opacity:1; display:block';
           document.getElementById('win1').style.cssText='visibility:hidden; opacity:0; display:none';
           document.getElementById('win2').style.cssText='visibility:hidden; opacity:0; display:none';
        }else{
            document.getElementById('win1').style.cssText='visibility:hidden; opacity:0; display:none';
            document.getElementById('win2').style.cssText='visibility:hidden; opacity:0; display:none';
            document.getElementById('win3').style.cssText='visibility:hidden; opacity:0; display:none';

        }
        keynote.showUl(currentul,page_controller[index].key,page_controller[index].li);
        detect_ul(index);
        page_demo = index;
        page_change_hook(index);
    }

    function get_comment() {
        var meta_info = meta_info_list[page_demo];
        var comment = meta_info.comment;
        if(!comment)
            return "";
        else
            return comment;
    }

    function get_reference() {
        var meta_info = meta_info_list[page_demo];
        var reference = meta_info.reference;
        if(!reference)
            return "";
        else
            return reference;
    }

    function get_meta_info_on_current_page() {

      return JSON.stringify(meta_info_list[page_demo]);
    }

    //Add by Ben.GU 20121113
    function get_meta_info_on_whole(){
      return JSON.stringify(["survey",false,true]);
    }



    // End Add


    function get_meta_info_on_all_pages() {
        // var meta_info_list = [{"comment":"很久很久以前，","reference":{"文献的例子，一个pdf文档":"ref/shage.pdf","另一个文献":"ref/sssss.pdf"},"thumbnail":"thumbnails/0.png"},{"comment":"有一个程序员。","thumbnail":"thumbnails/1.png"},{"comment":"他遇到了一个很大很大的bug，","reference":"","thumbnail":"thumbnails/2.png"},{"comment":"很让他头痛。","reference":null,"thumbnail":"thumbnails/3.png"},{"comment":"他去找log信息，","reference":null,"thumbnail":"thumbnails/4.png"},{"comment":"log信息被淹没在无数文本当中。","reference":null,"thumbnail":"thumbnails/5.png"},{"comment":"他单步跟踪，","reference":"没有","thumbnail":"thumbnails/6.png"},{"comment":"一跟踪这个bug就消失了，","reference":null,"thumbnail":"thumbnails/7.png"},{"comment":"bug只在release模式下产生。","reference":null,"thumbnail":"thumbnails/8.png"},{"comment":"他查找第三方库的文档，","reference":null,"thumbnail":"thumbnails/9.png"}];

        // for(var i = 0; i < 10; i++) {
        //     var meta_info_node = param.li[i].querySelector(".meta-info");
        //     if(!meta_info_node)
        //         meta_info_list.push("");
        //     else {
        //         meta_info_string = meta_info_node.innerText;
        //         try {
        //             meta_info_list.push(JSON.parse(meta_info_string));
        //         } catch (e) {
        //             meta_info_list.push("");
        //         }
        //     }
        // }

        return JSON.stringify(meta_info_list);
    }

    // function get_comment(){
    //     if (typeof(comment) == 'undefined' ){ comment = ''};
    //     return comment;
    // },
    // function get_reference(){
    //     if (typeof(reference) == 'undefined' ){ reference = ''};
    //     return reference;
    // },
    //index:0,
    //sum:10,
    // function main() {
    //     show_page(0);
    //     page_change_hook(0);
    // }
    return {
        //main: main,
        get_comment: get_comment,
        get_reference: get_reference,
        get_meta_info_on_current_page: get_meta_info_on_current_page,
        get_meta_info_on_all_pages: get_meta_info_on_all_pages,
        get_meta_info_on_whole: get_meta_info_on_whole,
        show_page: show_page
    }
})();
