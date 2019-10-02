const extendCSS = (el1, el2) =>{
  Array.prototype.slice.call(document.querySelector(el1).attributes).forEach(function(item) {
    el2.setAttribute(item.name, item.value);
  });
}
//main tag builder
const build = (elementType) => tag => {
  const query = document.querySelectorAll(tag);
  query.forEach(ptag => {
    const shadow = ptag.attachShadow({
      mode: 'open'
    });
    const element = document.createElement(elementType);
    element.innerHTML = ptag.innerHTML;
    extendCSS(tag, element);
    element.setAttribute('id', tag);
    shadow.host.parentNode.replaceChild(element, shadow.host);
  });
};
//input tag builder
const inputBuild = (type) => tag => {
  const query = document.querySelectorAll(tag);
  query.forEach(ptag => {
    const shadow = ptag.attachShadow({
      mode: 'open'
    });
    const element = document.createElement('input');
    element.innerHTML = ptag.innerHTML;
    extendCSS(tag, element);
    element.type = type;
    element.setAttribute('id', tag);
    shadow.host.parentNode.replaceChild(element, shadow.host);
  });
};
//tag definers
const h1 = build('h1');
const h2 = build('h2');
const h3 = build('h3');
const h4 = build('h4');
const h5 = build('h5');
const h6 = build('h6');
const p = build('p');
const a = build('a');
const pre = build('pre');
const header = build('header');
const footer = build('footer');
const span = build('span');
const img = build('img');
const audio = build('audio');
const video = build('video');
const i = build('i');
const strong = build('strong');
const b = build('b');
const section = build('section');
const article = build('article');
const button = build('button');
const textarea = build('textarea');
const meter = build('meter');
const div = build('div');
const inputText = inputBuild('text');
const inputColor = inputBuild('color');
const inputSearch = inputBuild('search');
const inputSubmit = inputBuild('submit');
const inputRange = inputBuild('range');
function Ω(selector){
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);
    
    self.load = function(fn){
        selector.onload = fn();
    }
    self.register = (val)=>{
       val(selector);   
    }
    self.css = function(style){
        const el = document.querySelector(selector);
        el.style.cssText = style;
    }
    self.value = () => {
        const el = document.querySelector(selector).value;
        console.log(el);
    }
    self.detectAdBlock = (mode) => {
      var adBlockEnabled = false;
      if(mode==='mild'){
  var testAd = document.createElement('div');
  testAd.innerHTML = '&nbsp;';
  testAd.className = 'adsbox';
  document.body.appendChild(testAd);
  const req = document.createElement('div');
  const okbut = document.createElement('button');
  okbut.innerHTML = 'Okay';
  req.innerHTML = "Hey there, mind blocking our ads? Thats fine, but you're cutting our income."+
  "Could you please disable it? Stop us from getting bankrupt."
  Object.assign(req.style, {
    position: 'fixed',
    bottom: '0%',
    width: '100%',
    height: 'auto',
    'text-align': 'center',
    border: '1px solid black',
})
  window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    adBlockEnabled = true;
    req.appendChild(okbut);
    document.body.appendChild(req);
  }
  okbut.addEventListener('click', ()=>{
    req.remove();
  })
  testAd.remove();
  console.log('AdBlock Enabled? ', adBlockEnabled)
}, 300);
      }
      else if(mode === 'harsh'){
        var testAd = document.createElement('div');
  testAd.innerHTML = '&nbsp;';
  testAd.className = 'adsbox';
  document.body.appendChild(testAd);
  window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    adBlockEnabled = true;
    if(adBlockEnabled){
      document.body.innerHTML = "Please disable your adblocker!";
    }
  }
  
  testAd.remove();
  console.log('AdBlock Enabled? ', adBlockEnabled)
}, 300);
      }
    }
    self.ready = (callback) => { 
    if (selector.readyState!='loading') callback();
    // modern browsers
    else if (selector.addEventListener) selector.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else selector.attachEvent('onreadystatechange', function(){
        if (selector.readyState=='complete') callback();
    });
    }
    return self;
}
