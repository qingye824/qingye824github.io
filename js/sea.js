// poem
var words=[
    '人生若只如初见',
    '何事秋风悲画扇',
    '当年明月在',
    '曾照彩云归',
    '人生如逆旅',
    '我亦是行人',
    '人生得意须尽欢',
    '莫使金樽空对月',
    '生活如诗',
    '岁月如歌',
    '每个人都有自己的时区',
    '谁也没领先',
    '谁也没落后',
    '南有乔木',
    '不可休思',
    '汉有游女',
    '不可求思',
    '我见青山多妩媚',
    '料青山见我也应如是',
    '山有扶苏',
    '隰有荷化',
    '不见子都',
    '乃见狂且',
    '桃之夭夭',
    '灼灼其华',
    '总有些事情，高于其他',
    '清野同学，到站了',
    '己不由心',
    '身又岂能由己',
    '最是繁丝摇落后',
    '转教人忆春山',
    '湔裙梦断续应难',
    '轻，短，散',
    '醉后不知天在水',
    '满船星梦压星河',
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#00FFFF';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '天光乍泄，落入凡尘烟火';
          textone.style.color = '#00FFFF';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#00FFFF';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#00FFFF';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '风吹过';
        texttwo.innerHTML = '烟火终归尘埃';
        textthree.innerHTML = '浪潮终回人海';
      },112500)


 
