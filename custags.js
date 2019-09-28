class button extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const button = document.createElement('button');
        button.style.cssText = 'display:block';
        button.textContent = super.textContent;
        shadow.appendChild(button);
    }
}
class inputText extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const input = document.createElement('input');
        input.type = 'text';
        input.style.cssText = 'display:block';
        button.textContent = super.textContent;
        shadow.appendChild(input);
    }
}
class inputCheckbox extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.textContent = super.textContent;
        shadow.appendChild(input);
    }
}
class inputColor extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const input = document.createElement('input');
        input.type = 'color';
        input.textContent = super.textContent;
        shadow.appendChild(input);
    }
}
class inputEmail extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const input = document.createElement('input');
        input.type = 'email';
        input.textContent = super.textContent;
        shadow.appendChild(input);
    }
}
class div extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const div = document.createElement('div');
        div.textContent = super.textContent;
        shadow.appendChild(div);
    }
}
class textarea extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const textarea = document.createElement('textarea');
        textarea.textContent = super.textContent;
        shadow.appendChild(textarea);
    }
}
class h1 extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const h1 = document.createElement('h1');
        h1.textContent = super.textContent;
        shadow.appendChild(h1);
    }
}
class code extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const div = document.createElement('div');
        div.style.cssText = "display:inline-block; background-color: #c2c2c2; max-width:100%;";
        
        const p = document.createElement('p');
        p.style.cssText = "font-family : 'Monospace', monospace; max-width:100%;";
        p.textContent = super.textContent;
        div.appendChild(p);
        shadow.appendChild(div);
    }
}
class p extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const p = document.createElement('p');
        p.textContent = super.textContent;
        shadow.appendChild(p);
    }
}
const cusTags = new Object();
cusTags.register = function(elName, type){
customElements.define(elName, type);
}
cusTags.css = function(elName, css){
    var el = document.querySelector(elName);
    el.style.cssText = css;
}
