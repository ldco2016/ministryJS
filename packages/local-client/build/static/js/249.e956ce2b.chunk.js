(this.webpackJsonpministryjs=this.webpackJsonpministryjs||[]).push([[249],{421:function(n,e){!function(n){function e(n,e){return"___"+n.toUpperCase()+e+"___"}Object.defineProperties(n.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(n){if("function"===typeof o&&!o(n))return n;for(var r,s=i.length;-1!==t.code.indexOf(r=e(a,s));)++s;return i[s]=n,r})),t.grammar=n.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=n.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(s){for(var c=0;c<s.length&&!(r>=o.length);c++){var u=s[c];if("string"===typeof u||u.content&&"string"===typeof u.content){var p=o[r],g=t.tokenStack[p],l="string"===typeof u?u:u.content,f=e(a,p),k=l.indexOf(f);if(k>-1){++r;var h=l.substring(0,k),m=new n.Token(a,n.tokenize(g,t.grammar),"language-"+a,g),y=l.substring(k+f.length),d=[];h&&d.push.apply(d,i([h])),d.push(m),y&&d.push.apply(d,i([y])),"string"===typeof u?s.splice.apply(s,[c,1].concat(d)):u.content=d}}else u.content&&i(u.content)}return s}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=249.e956ce2b.chunk.js.map