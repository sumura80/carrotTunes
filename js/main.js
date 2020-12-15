// Slide Menu
function openSlideMenu(){
 document.getElementById('side-menu').style.width= '250px';
 document.getElementById('main').style.marginLeft= '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width= '0px';
  document.getElementById('main').style.marginLeft= '0px';
}


// スクロールアニメーション
$(document).ready(function(){
  let scrollLink = $('.scroll');
  //スムーズスクロール
  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
      },1200 )
  })
})


//スクロール To Top
$(document).ready(function(){
  $( window ).scroll(
    function(){
      // 最上部から現在位置までの距離を取得して、変数[now]に格納
var now = $( window ).scrollTop() ;

// 最下部から現在位置までの距離を計算して、変数[under]に格納
var under = $( 'body' ).height() - ( now + $(window).height() ) ;

// 最上部から現在位置までの距離(now)が1500以上かつ

if( now > 800 )
{
	// [#page-top]をゆっくりフェードインする
	$( '#page-top' ).fadeIn( 'slow' ) ;
}

// 1500px以下だったら
else
{
	// [#page-top]をゆっくりフェードアウトする
	$( '#page-top' ).fadeOut( 'slow' ) ;
}
    }
  ) ;
})

$(document).ready(function(){
  $('#move-page-top').on('click',function(){
    $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
  });
})