const textarea = (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const textarea = document.createElement('textarea');
          textarea.innerHTML = ptag.textContent;
          shadow.appendChild(textarea);
      }
const pre = (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const pre = document.createElement('pre');
          pre.innerHTML = ptag.textContent;
          shadow.appendChild(pre);
      }
const a = (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const a = document.createElement('a');
          a.innerHTML = ptag.textContent;
          shadow.appendChild(a);
      }
const p= (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const p = document.createElement('p');
          p.innerHTML = ptag.textContent;
          shadow.appendChild(p);
      }
const button= (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const button = document.createElement('button');
          button.innerHTML = ptag.textContent;
          shadow.appendChild(button);
      }
const code= (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const code = document.createElement('code');
          code.innerHTML = ptag.textContent;
          shadow.appendChild(code);
      }
const inputText = (tag) => {
        const ptag = document.querySelector(tag);
              const shadow = ptag.attachShadow({
                  mode: 'open'
                });
              const input = document.createElement('input');
              input.type='text';
              input.innerHTML = ptag.textContent;
              shadow.appendChild(input);
        }
const h1= (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const h1 = document.createElement('h1');
          h1.innerHTML = ptag.textContent;
          shadow.appendChild(h1);
      }
  const h2= (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const h2 = document.createElement('h2');
          h2.innerHTML = ptag.textContent;
          shadow.appendChild(h2);
      }
  const h3= (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const h3 = document.createElement('h3');
          h3.innerHTML = ptag.textContent;
          shadow.appendChild(h3);
      }
  const h4= (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const h4 = document.createElement('h4');
          h4.innerHTML = ptag.textContent;
          shadow.appendChild(h4);
      }
  const h5= (tag) => {
    const ptag = document.querySelector(tag);
          const shadow = ptag.attachShadow({
              mode: 'open'
            });
          const h5 = document.createElement('h5');
          h5.innerHTML = ptag.textContent;
          shadow.appendChild(h5);
      }

function Ω(selector){
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);
    
    self.load = function(fn){
        window.onload = fn;
        return fn;
    }
    self.register = (val)=>{
       val(selector);   
    }
    self.h1 = ()=>{
        h1(selector);
    }
    self.h5 = ()=>{
        h5(selector);
    }
    self.css = function(style){
        const el = document.querySelector(selector);
        el.style.cssText = style;
    }
    self.value = () => {
        const el = document.querySelector(selector).value;
        console.log(el);
    }
    self.extends = (tag) => {
        
    }
    self.ready = (fn) => {
        if (document.readyState === 'complete') {
            // The page is fully loaded
            eval(fn);
            
            
          }
    }
    return self;
}
