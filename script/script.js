window.onload = function(){
    $(document).ready(function(){
      
        //hidden
        $("#backButton").hide()
        $("#booksInfo").hide()

        $(window).scroll(function(){
            //fixed header
            if($(this).scrollTop() >= 630){
                $("header").css({
                    "position": "fixed",
                    "width":"100%",
                    "background-color": "white",
                    "z-index": "9999",
                })
            }
            else{
                $("header").css({
                    "position": "static"
                })
            }

            //backButton_show
            if($(this).scrollTop() >= 100)
                $("#backButton").show("slow")
            else
                $("#backButton").hide("slow")
        })

        //gift_click
        $(".gift").click(function(){
            $("html, body").animate({
                scrollTop:1660
            },1500)
        })
        
        //backButton_click
        $("#backButton").click(function(){
            $("html, body").animate({
                scrollTop: 0
            },1500)
        })

        //mainPage_click
        $("#mainPage").click(function() {
            location.reload()
        })

        //contact_click
        $("#contact").click(function() {
            $("html, body").animate({
              scrollTop: $(document).height() - $(window).height()
            }, 1500);
          })
          
        /*bookMem_click*/
        //lấy các thẻ trong bookInfo
        let focusImage = document.getElementById("focusImg")
        let bookTitle = document.querySelector(".bookTitle")
        let bookGenre = document.querySelector(".bookGenre")
        let bookAuthor = document.querySelector(".bookAuthor")
        let bookPrice = document.querySelector(".bookPrice")
        let books = document.querySelectorAll(".book_mem")
        for (let book of books) {
            book.onclick = function() {
                //thay đổi hình ảnh trong section bookInfo
                let img = this.querySelector("img")
                focusImage.src = img.src

                //đổi tên sách
                let title = this.querySelector(".book_title li:first-child")
                bookTitle.textContent = title.textContent

                //lấy thể loại
                let genre = this.querySelector(".book_title li:nth-child(2)")
                bookGenre.textContent = genre.textContent 

                //lấy tên tác giả
                let author = this.querySelector(".book_title li:nth-child(3)")
                bookAuthor.textContent = author.textContent

                //lấy giá sách
                let price = this.querySelector(".book_title li:last-child")
                bookPrice.textContent = price.textContent
      

                //CSS cho booksInfo
                $("#booksInfo").css({
                    "position": "fixed",
                    "justify-content": "center",
                    "align-items": "center",
                    "top": "50%",
                    "left": "50%",
                    "transform": "translate(-50%,-50%)",
                    "background-color": "#d0ebf0",
                    "z-index": "9999",
                })

                //CSS cho focusImg
                $("#focusImg").css({
                    "width": "15rem",
                    "height": "35rem",
                })

                // Giảm độ mờ cho các phần khác
                $("#bestSeller,#newBooks,#saleBooks,.slider,#outtro,footer").css({
                    "opacity": "0.5"
                })

                // Hiển thị booksInfo
                $("#booksInfo").show(300)
            }
        }
      
        //cancelButton_click
        $("#cancel").click(function(){
            $("#booksInfo").hide()
            $("#bestSeller,#newBooks,#saleBooks,.slider,#outtro,footer").css({
                "opacity":"1"
            })
        })

        //btnBuy_click
        $(".btnBuy").click(function(){
          alert('Mua thành công!')
        })

        //btnAdd_click
        $(".btnAdd").click(function(){
          alert('Đã thêm vào giỏ hàng!')
        })

        //hiển thị tiểu thuyết khi click trên subbcontent
        $('#novels').click(function(){
          //duyệt lần lượt các book_mem
          $(".book_mem").each(function() {
              // Kiểm tra nội dung của thẻ li thứ hai trong book_title
              let genre = $(this).find(".book_title li:nth-child(2)").text()

              if (genre !== "Tiểu thuyết") {
                  $(this).hide()
              } else {
                  $(this).show()// Hiện các thẻ là tiểu thuyết
              }
          });
        });

        //kinh dị
        $("#devils").click(function(){
          //duyệt lần lượt các book_mem
          $(".book_mem").each(function() {
              let genre = $(this).find(".book_title li:nth-child(2)").text()
              
              if (genre !== "Kinh dị"){
                  $(this).hide()
              } else {
                  $(this).show()
              }
          });
        });

        //truyện tranh
        $("#comics").click(function() {
          //duyệt lần lượt các book_mem
          $('.book_mem').each(function() {
              let genre = $(this).find(".book_title li:nth-child(2)").text()
              
              if (genre !== "Truyện tranh") {
                  $(this).hide()
              } else {
                  $(this).show()
              }
          });
        });

        //tâm lí
        $("#psychology").click(function() {
          //duyệt lần lượt các book_mem
          $(".book_mem").each(function() {
              let genre = $(this).find(".book_title li:nth-child(2)").text()
              
              if (genre !== "Tâm lí") {
                  $(this).hide()
              } else {
                  $(this).show()
              }
          });
        });

        //kinh tế
        $("#economy").click(function() {
          //duyệt lần lượt các book_mem
          $(".book_mem").each(function() {
              let genre = $(this).find(".book_title li:nth-child(2)").text()
              
              if (genre !== "Kinh tế") {
                  $(this).hide()
              } else {
                  $(this).show()
              }
          });
        });

        //tất cả sách
        $("#allBook").click(function() {
          location.reload()
        })
        

        //book's animate
    let book = document.getElementsByClassName("book_mem")
    for(let b of book)
        b.classList.add("wow")

    let oddBook = document.querySelectorAll(".book_mem:nth-child(odd)")
    for(let b of oddBook)
        b.classList.add("animate__flipInX")

    let evenBook = document.querySelectorAll(".book_mem:nth-child(even)")
    for(let b of evenBook)
        b.classList.add("animate__flipInX")



    /*init wowjs*/
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

    })
}

let slider = document.querySelector('.slider .img_slider');
let items = document.querySelectorAll('.slider .img_slider .items');
let next = document.getElementById('next');
let prev = document.getElementById('pre');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// responsive mobile mini toogle 
$(document).ready(function(){
    $('#icon_toggle').click(function(){
        $('#menu').slideToggle();
    });
})


