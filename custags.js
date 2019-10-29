const extendCSS = (el1, el2) => {
  Array.prototype.slice.call(document.querySelector(el1).attributes).forEach(function(item) {
    el2.setAttribute(item.name, item.value);
  });
}
/*main tag builder*/
const build = (elementType) => tag => {
  const query = document.querySelectorAll(tag);
  query.forEach(ptag => {
    const shadow = ptag.attachShadow({
      mode: 'open'
    });
    const element = document.createElement(elementType);
    element.innerHTML = ptag.innerHTML;
    extendCSS(tag, element);
    let preid = tag.getAttribute('id')
    element.setAttribute('id', preid+' '+tag);
    shadow.host.parentNode.replaceChild(element, shadow.host);
  });
};
/*input tag builder*/
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
    let preid = tag.getAttribute('id')
    element.setAttribute('id', preid+' '+tag);
    shadow.host.parentNode.replaceChild(element, shadow.host);
  });
};
/*tag definers*/
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
const abbr = build('abbr');
const address = build('address');
const bdi = build('bdi');
const bdo = build('bdo');
const blockquote = build('blockquote');
const cite = build('cite');
const code = build('code');
const del = build('del');
const dfn = build('dfn');
const em = build('em');
const ins = build('ins');
const kbd = build('kbd');
const mark = build('mark');
const progress = build('progress');
const q = build('q');
const rp = build('rp');
const rt = build('rt');
const ruby = build('ruby');
const s = build('s');
const samp = build('samp');
const small = build('small');
const sub = build('sub');
const sup = build('sup');
const template = build('template');
const time = build('time');
const u = build('u');
const variable = build('var');
const wbr = build('wbr');
const div = build('div');
const form = build('form');
const select = build('select');
const optgroup = build('optgroup');
const option = build('option');
const label = build('label');
const fieldset = build('fieldset');
const legend = build('legend');
const datalist = build('datalist');
const output = build('output');
const iframe = build('iframe');
const map = build('map');
const area = build('area');
const canvas = build('canvas');
const figcaption = build('figcaption');
const figure = build('figure');
const picture = build('picture');
const svg = build('svg');
const source = build('source');
const track = build('track');
const nav = build('nav');
const ul = build('ul');
const ol = build('ol');
const li = build('li');
const dl = build('dl');
const dt = build('dt');
const dd = build('dd');
const table = build('table');
const caption = build('caption');
const th = build('th');
const tr = build('tr');
const td = build('td');
const thead = build('thead');
const tbody = build('tbody');
const tfoot = build('tfoot');
const col = build('col');
const colgroup = build('colgroup');
const main = build('main');
const aside = build('aside');
const details = build('details');
const dialog = build('dialog');
const summary = build('summary');
const data = build('data');
const embed = build('embed');
const object = build('object');
const param = build('param');
const inputText = inputBuild('text');
const inputColor = inputBuild('color');
const inputSearch = inputBuild('search');
const inputSubmit = inputBuild('submit');
const inputRange = inputBuild('range');
const inputButton = inputBuild('button');
const inputCheckbox = inputBuild('checkbox');
const inputDate = inputBuild('date');
const inputDatetTimeLocal = inputBuild('datetime-local');
const inputEmail = inputBuild('email');
const inputFile = inputBuild('file');
const inputHidden = inputBuild('hidden');
const inputImage = inputBuild('image');
const inputMonth = inputBuild('month');
const inputNumber = inputBuild('number');
const inputRadio = inputBuild('radio');
const inputReset = inputBuild('reset');
const inputTel = inputBuild('tel');
const inputTime = inputBuild('time');
const inputURL = inputBuild('url');
const inputWeek = inputBuild('week');
const Custags = (selector) => {
   const self = {};
   self.selector = selector;
   self.element = document.querySelector(self.selector);
   self.eventHandler = {
    events: [],
    bindEvent: function(event, callback, targetElement) {
    this.unbindEvent(event, targetElement);
    targetElement.addEventListener(event, callback, false);
    this.events.push({
    type: event,
    event: callback,
    target: targetElement
    });
    return self;
    },
    findEvent: function(event) {
    return this.events.filter(function(evt) {
    return (evt.type === event);
    }, event)[0];
    },
    unbindEvent: function(event, targetElement) {
    var foundEvent = this.findEvent(event);
    if (foundEvent !== undefined) {
    targetElement.removeEventListener(event, foundEvent.event, false);
    }
    this.events = this.events.filter(function(evt) {
    return (evt.type !== event);
    }, event);
    return self;
    }
   }
self.on = (event, callback)=> {
   var evt = self.eventHandler.bindEvent(event, callback, self.element);
   return self;
 }
 self.off = (event)=> {
   var evt = self.eventHandler.unbindEvent(event, self.element);
   return self;
 }
 self.val = self.value = (newVal)=> {
   return (newVal !== undefined ? self.element.value = newVal : self.element.value);
   return self;
 }
 self.append = (html)=> {
   self.element.innerHTML = self.element.innerHTML + html;
   return self;
 }
 self.css = (name, value)=> {
   document.querySelectorAll(selector).forEach((el)=>{
     el.style[name] = value;
   });
 }
 self.prepend = (html)=> {
   self.element.innerHTML = html + self.element.innerHTML;
   return self;
 }
 self.html = (html)=> {
   if(html === undefined){
   return (self.element).innerHTML;
    }
    (self.element).innerHTML = html;
    return self;
  }
  self.register = (type) => {
    type(selector);
  }
 self.text = (text)=> {
   if (text === undefined) {
     return self.element.innerText;
   }
   self.element.innerText = text;
   return self;
  }
  self.ready = (callback) => {
    if ((selector).readyState != 'loading')
      callback();
    // modern browsers
    else if ((selector).addEventListener)
      (selector).addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else
      (selector).attachEvent('onreadystatechange', function () {
        if ((selector).readyState == 'complete')
          callback();
      });
      return self;
  }
  self.load = (callback) => {
    selector.onload = callback();
    return self;
  }
return self;
};
((Ω)=>{
  Ω.version = "1.11";
   Ω.detectAdBlock = (mode, text) => {
      var adBlockEnabled = false;
      if (mode === 'mild') {
        var testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        document.body.appendChild(testAd);
        const req = document.createElement('div');
        const okbut = document.createElement('button');
        okbut.innerHTML = 'Okay';
        req.innerHTML = text;
        Object.assign(req.style, {
          position: 'fixed',
          bottom: '0%',
          width: '100%',
          height: 'auto',
          'text-align': 'center',
          border: '1px solid black',
        });
        window.setTimeout(function () {
          if (testAd.offsetHeight === 0) {
            adBlockEnabled = true;
            req.appendChild(okbut);
            document.body.appendChild(req);
          }
          okbut.addEventListener('click', () => {
            req.remove();
          });
          testAd.remove();
          console.log('AdBlock Enabled? ', adBlockEnabled);
        }, 300);
      }
      else if (mode === 'harsh') {
        var testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        document.body.appendChild(testAd);
        window.setTimeout(function () {
          if (testAd.offsetHeight === 0) {
            adBlockEnabled = true;
            if (adBlockEnabled) {
              document.body.innerHTML = text;
            }
          }
          testAd.remove();
          console.log('AdBlock Enabled? ', adBlockEnabled);
        }, 300);
      }
    }
    Ω.getJSON = function(url, fn){
      var request = new XMLHttpRequest();
    request.open('GET', url, true);
    
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        fn(data);
      } else {
        console.log(this.status);
    
      }
    };
    
    request.onerror = function() {
      throw'An Unknown Error';
    };
    
    request.send();
    }
    Ω.zax = function(params){
      var request = new XMLHttpRequest();
    request.open(params.type, params.url, true);
    
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        params.success(this.response);
      }
    };
    
    request.onerror = function() {
      params.error();
    };
    
    request.send();
    }
    Ω.getXML = function(url, fn){
      var request = new XMLHttpRequest();
    request.open('GET', url, true);
    
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var parser = new DOMParser();
        var data = parser.parseFromString(this.response, 'text/xml');
        fn(data);
      } else {
       console.log(this.status);
    
      }
    };
    
    request.onerror = function() {
      throw'An Unknown Error';
    };
    
    request.send();
    }
})(Custags);
window.omega = Custags;
window.Ω === undefined && (window.Ω = Custags);

