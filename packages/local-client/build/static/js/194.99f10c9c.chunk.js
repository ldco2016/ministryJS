(this.webpackJsonpministryjs=this.webpackJsonpministryjs||[]).push([[194],{366:function(n,a){!function(n){var a=n.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,e){"string"===typeof a&&(a=[a]),a.forEach((function(a){!function(a,e){var t="doc-comment",i=n.languages[a];if(i){var r=i[t];if(!r){var o={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};r=(i=n.languages.insertBefore(a,"comment",o))[t]}if(r instanceof RegExp&&(r=i[t]={pattern:r}),Array.isArray(r))for(var s=0,p=r.length;s<p;s++)r[s]instanceof RegExp&&(r[s]={pattern:r[s]}),e(r[s]);else e(r)}}(a,(function(n){n.inside||(n.inside={}),n.inside.rest=e}))}))}}),a.addSupport(["java","javascript","php"],a)}(Prism)}}]);
//# sourceMappingURL=194.99f10c9c.chunk.js.map