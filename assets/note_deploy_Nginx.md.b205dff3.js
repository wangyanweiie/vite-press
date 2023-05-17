import{_ as s,c as n,o as a,a as l}from"./app.9ece8269.js";const h=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u7B80\u4ECB","slug":"\u4E00\u3001\u7B80\u4ECB","link":"#\u4E00\u3001\u7B80\u4ECB","children":[{"level":3,"title":"1. \u6982\u8FF0","slug":"_1-\u6982\u8FF0","link":"#_1-\u6982\u8FF0","children":[]},{"level":3,"title":"2. \u7279\u70B9","slug":"_2-\u7279\u70B9","link":"#_2-\u7279\u70B9","children":[]},{"level":3,"title":"3. \u5E94\u7528\u573A\u666F","slug":"_3-\u5E94\u7528\u573A\u666F","link":"#_3-\u5E94\u7528\u573A\u666F","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u5B89\u88C5\u4E0E\u90E8\u7F72","slug":"\u4E8C\u3001\u5B89\u88C5\u4E0E\u90E8\u7F72","link":"#\u4E8C\u3001\u5B89\u88C5\u4E0E\u90E8\u7F72","children":[{"level":3,"title":"1. \u5B98\u7F51","slug":"_1-\u5B98\u7F51","link":"#_1-\u5B98\u7F51","children":[]},{"level":3,"title":"2. \u5B89\u88C5","slug":"_2-\u5B89\u88C5","link":"#_2-\u5B89\u88C5","children":[]},{"level":3,"title":"3. \u90E8\u7F72","slug":"_3-\u90E8\u7F72","link":"#_3-\u90E8\u7F72","children":[]}]},{"level":2,"title":"\u4E09\u3001.conf \u914D\u7F6E\u8BE6\u89E3","slug":"\u4E09\u3001-conf-\u914D\u7F6E\u8BE6\u89E3","link":"#\u4E09\u3001-conf-\u914D\u7F6E\u8BE6\u89E3","children":[{"level":3,"title":"1. \u4E3B\u8981\u914D\u7F6E\u533A\u57DF","slug":"_1-\u4E3B\u8981\u914D\u7F6E\u533A\u57DF","link":"#_1-\u4E3B\u8981\u914D\u7F6E\u533A\u57DF","children":[]},{"level":3,"title":"2. server \u914D\u7F6E","slug":"_2-server-\u914D\u7F6E","link":"#_2-server-\u914D\u7F6E","children":[]}]}],"relativePath":"note/deploy/Nginx.md"}'),p={name:"note/deploy/Nginx.md"},e=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u7B80\u4ECB" tabindex="-1">\u4E00\u3001\u7B80\u4ECB <a class="header-anchor" href="#\u4E00\u3001\u7B80\u4ECB" aria-hidden="true">#</a></h2><h3 id="_1-\u6982\u8FF0" tabindex="-1">1. \u6982\u8FF0 <a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a></h3><p>Nginx \u662F\u4E00\u6B3E\u8F7B\u91CF\u7EA7\u7684 Web \u670D\u52A1\u5668/\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u53CA\u7535\u5B50\u90AE\u4EF6\uFF08IMAP/POP3\uFF09\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5728 BSD-like \u534F\u8BAE\u4E0B\u53D1\u884C\u3002\u5176\u7279\u70B9\u662F\u5360\u6709\u5185\u5B58\u5C11\uFF0C\u5E76\u53D1\u80FD\u529B\u5F3A\uFF0C\u4E8B\u5B9E\u4E0A nginx \u7684\u5E76\u53D1\u80FD\u529B\u5728\u540C\u7C7B\u578B\u7684\u7F51\u9875\u670D\u52A1\u5668\u4E2D\u8868\u73B0\u8F83\u597D\u3002</p><h3 id="_2-\u7279\u70B9" tabindex="-1">2. \u7279\u70B9 <a class="header-anchor" href="#_2-\u7279\u70B9" aria-hidden="true">#</a></h3><ul><li>\u66F4\u5FEB\uFF1A\u5355\u6B21\u8BF7\u6C42\u54CD\u5E94\u66F4\u5FEB\uFF0C\u9AD8\u5E76\u53D1\u53EF\u4EE5\u66F4\u5FEB\u7684\u5904\u7406\u54CD\u5E94</li><li>\u9AD8\u62D3\u5C55\u6027\uFF1A\u8BBE\u8BA1\u6781\u5177\u6269\u5C55\u6027\uFF0C\u7531\u591A\u4E2A\u4E0D\u540C\u529F\u80FD\u3001\u4E0D\u540C\u5C42\u6B21\u3001\u4E0D\u540C\u7C7B\u578B\u4E14\u8026\u5408\u5EA6\u6781\u4F4E\u7684\u6A21\u5757\u7EC4\u6210</li><li>\u9AD8\u53EF\u9760\u6027\uFF1A\u5F88\u591A\u9AD8\u6D41\u91CF\u7F51\u7AD9\u90FD\u5728\u6838\u5FC3\u670D\u52A1\u5668\u4E0A\u5927\u89C4\u6A21\u4F7F\u7528 Nginx</li><li>\u4F4E\u5185\u5B58\u6D88\u8017\uFF1A\u4E00\u822C1\u4E07\u4E2A\u975E\u6D3B\u8DC3\u7684 HTTP Keep-Alive \u8FDE\u63A5\u5728 Nginx \u4E2D\u4EC5\u6D88\u80172.5MB\u5185\u5B58</li><li>\u9AD8\u5E76\u53D1\uFF1A\u5355\u673A\u652F\u630110\u4E07\u4EE5\u4E0A\u7684\u5E76\u53D1\u8FDE\u63A5</li><li>\u70ED\u90E8\u7F72\uFF1Amaster \u7BA1\u7406\u8FDB\u7A0B\u4E0E worker \u5DE5\u4F5C\u8FDB\u7A0B\u7684\u5206\u79BB\u8BBE\u8BA1\uFF0C\u4F7F\u5F97 Nginx \u80FD\u591F\u652F\u6301\u70ED\u90E8\u7F72</li><li>\u5F00\u6E90\u534F\u8BAE\uFF1A\u4F7F\u7528 BSD \u8BB8\u53EF\u534F\u8BAE\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u4E14\u53EF\u4FEE\u6539\u6E90\u7801</li></ul><h3 id="_3-\u5E94\u7528\u573A\u666F" tabindex="-1">3. \u5E94\u7528\u573A\u666F <a class="header-anchor" href="#_3-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h3><ul><li><p>HTTP \u670D\u52A1\u5668<br> Nginx \u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\u7684\u670D\u52A1\u5668\uFF0C\u5F53\u53EA\u6709\u9759\u6001\u8D44\u6E90\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 Nginx \u6765\u505A\u670D\u52A1\u5668\uFF0C\u5982\u679C\u4E00\u4E2A\u7F51\u7AD9\u53EA\u662F\u9759\u6001\u9875\u9762\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0\u90E8\u7F72\u3002</p></li><li><p>\u9759\u6001\u8D44\u6E90\u670D\u52A1<br> \u9759\u6001\u670D\u52A1\u5668\uFF0C\u901A\u5E38\u4F1A\u63D0\u4F9B\u4E00\u4E2A\u4E0A\u4F20\u7684\u529F\u80FD\uFF0C\u5176\u4ED6\u5E94\u7528\u5982\u679C\u9700\u8981\u9759\u6001\u8D44\u6E90\u5C31\u4ECE\u8BE5\u9759\u6001\u670D\u52A1\u5668\u4E2D\u83B7\u53D6\u3002</p></li><li><p>\u53CD\u5411\u4EE3\u7406\u670D\u52A1<br> \u53CD\u5411\u4EE3\u7406 (Reverse Proxy) \u65B9\u5F0F\u662F\u6307\u4EE5\u4EE3\u7406\u670D\u52A1\u5668\u6765\u63A5\u53D7 Internet \u4E0A\u7684\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u7136\u540E\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5185\u90E8\u7F51\u7EDC\u4E0A\u7684\u670D\u52A1\u5668\uFF0C\u5E76\u5C06\u4ECE\u670D\u52A1\u5668\u4E0A\u5F97\u5230\u7684\u7ED3\u679C\u8FD4\u56DE\u7ED9 Internet \u4E0A\u8BF7\u6C42\u8FDE\u63A5\u7684\u5BA2\u6237\u7AEF\uFF0C\u6B64\u65F6\u4EE3\u7406\u670D\u52A1\u5668\u5BF9\u5916\u5C31\u8868\u73B0\u4E3A\u4E00\u4E2A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u3002</p></li><li><p>\u8D1F\u8F7D\u5747\u8861<br> \u8D1F\u8F7D\u5747\u8861\u4E5F\u662F Nginx \u5E38\u7528\u7684\u4E00\u4E2A\u529F\u80FD\uFF0C\u8D1F\u8F7D\u5747\u8861\u5176\u610F\u601D\u5C31\u662F\u5206\u644A\u5230\u591A\u4E2A\u64CD\u4F5C\u5355\u5143\u4E0A\u8FDB\u884C\u6267\u884C\uFF0C\u4F8B\u5982 Web \u670D\u52A1\u5668\u3001FTP \u670D\u52A1\u5668\u3001\u4F01\u4E1A\u5173\u952E\u5E94\u7528\u670D\u52A1\u5668\u548C\u5176\u5B83\u5173\u952E\u4EFB\u52A1\u670D\u52A1\u5668\u7B49\uFF0C\u4ECE\u800C\u5171\u540C\u5B8C\u6210\u5DE5\u4F5C\u4EFB\u52A1\u3002</p></li><li><p>\u52A8\u9759\u5206\u79BB<br> \u52A8\u9759\u5206\u79BB\u662F\u8BA9\u52A8\u6001\u7F51\u7AD9\u91CC\u7684\u52A8\u6001\u7F51\u9875\u6839\u636E\u4E00\u5B9A\u89C4\u5219\u628A\u4E0D\u53D8\u7684\u8D44\u6E90\u548C\u7ECF\u5E38\u53D8\u7684\u8D44\u6E90\u533A\u5206\u5F00\u6765\uFF0C\u52A8\u9759\u8D44\u6E90\u505A\u597D\u4E86\u62C6\u5206\u4EE5\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6839\u636E\u9759\u6001\u8D44\u6E90\u7684\u7279\u70B9\u5C06\u5176\u505A\u7F13\u5B58\u64CD\u4F5C\uFF0C\u8FD9\u5C31\u662F\u7F51\u7AD9\u9759\u6001\u5316\u5904\u7406\u7684\u6838\u5FC3\u601D\u8DEF\u3002</p></li></ul><h2 id="\u4E8C\u3001\u5B89\u88C5\u4E0E\u90E8\u7F72" tabindex="-1">\u4E8C\u3001\u5B89\u88C5\u4E0E\u90E8\u7F72 <a class="header-anchor" href="#\u4E8C\u3001\u5B89\u88C5\u4E0E\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="_1-\u5B98\u7F51" tabindex="-1">1. <a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">\u5B98\u7F51</a> <a class="header-anchor" href="#_1-\u5B98\u7F51" aria-hidden="true">#</a></h3><h3 id="_2-\u5B89\u88C5" tabindex="-1">2. \u5B89\u88C5 <a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a></h3><ul><li>\u53EF\u4EE5\u9009\u62E9 Stable version \u7248\u672C\u4E0B\u8F7D\u5230\u672C\u5730\uFF0C\u4E0B\u8F7D\u5B8C\u6210\u540E\u76F4\u63A5\u5728\u672C\u5730\u89E3\u538B\u540E\u653E\u5165 linux \u7CFB\u7EDF\u4E2D\uFF1B</li><li>\u6216\u8005\u76F4\u63A5\u5728 linux \u73AF\u5883\u4E2D\u4F7F\u7528\u547D\u4EE4\u4E0B\u8F7D\uFF1B</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u5B89\u88C5\u4F9D\u8D56\u5305\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5207\u6362\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /usr/local</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u5B58\u653E\u76EE\u5F55 nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir  nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5207\u6362\u5230 nginx \u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4E0B\u8F7D nginx \u5B89\u88C5\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">wget http://nginx.org/download/nginx-1.22.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u89E3\u538B\u5B89\u88C5\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -xvf nginx-1.22.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u89E3\u538B\u5B8C\u6210\u540E\uFF0C\u8FDB\u5165 nginx \u4E0B\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /usr/local/nginx/nginx-1.22.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6267\u884C make \u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">make</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6267\u884C\u5B89\u88C5\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">make install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u662F\u5426\u5B89\u88C5\u5B8C\u6210\uFF08\u67E5\u770B\u662F\u5426\u6709 nginx \u8FDB\u7A0B\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u82E5\u5B58\u5728\u8FDB\u7A0B\u5219\u4EE3\u8868\u5B89\u88C5\u6210\u529F\uFF0C\u5219\u53EF\u4EE5\u5207\u6362\u5230 /sbin \u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /usr/local/nginx/sbin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u542F\u52A8 nginx \u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">./nginx -c  /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u542F\u52A8\u6210\u529F\u540E\u518D\u6B21\u67E5\u770B nginx \u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep nginx</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-\u90E8\u7F72" tabindex="-1">3. \u90E8\u7F72 <a class="header-anchor" href="#_3-\u90E8\u7F72" aria-hidden="true">#</a></h3><ul><li>\u914D\u7F6E nginx.conf \u6587\u4EF6\uFF1B</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u8DF3\u8F6C\u5230 conf \u6587\u4EF6\u6240\u5728\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /usr/local/nginx/conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u7F16\u8F91\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">vi nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6DFB\u52A0 server \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 5000</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># IP \u5730\u5740 / \u57DF\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name 192.168.3.81</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># \u6253\u5305\u540E\u7684\u9759\u6001\u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">        root  /home/static/yongjing/dist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># \u9759\u6001\u8D44\u6E90\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">        index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u91CD\u542F nginx</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u8DF3\u8F6C\u56DE\u4E0A\u5C42\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /usr/local/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u5F53\u524D nginx \u7684\u8FDB\u7A0B\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u7EC8\u6B62\u8FDB\u7A0B\u53F7</span></span>
<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> \u8FDB\u7A0B\u53F7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u542F nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">./sbin/nginx -c conf/nginx.conf</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E09\u3001-conf-\u914D\u7F6E\u8BE6\u89E3" tabindex="-1">\u4E09\u3001.conf \u914D\u7F6E\u8BE6\u89E3 <a class="header-anchor" href="#\u4E09\u3001-conf-\u914D\u7F6E\u8BE6\u89E3" aria-hidden="true">#</a></h2><h3 id="_1-\u4E3B\u8981\u914D\u7F6E\u533A\u57DF" tabindex="-1">1. \u4E3B\u8981\u914D\u7F6E\u533A\u57DF <a class="header-anchor" href="#_1-\u4E3B\u8981\u914D\u7F6E\u533A\u57DF" aria-hidden="true">#</a></h3><ul><li><p>worker_processes<br> Nginx \u670D\u52A1\u5668\u5E76\u53D1\u5904\u7406\u670D\u52A1\u7684\u5173\u952E\u914D\u7F6E\uFF0C\u503C\u8D8A\u5927\uFF0C\u53EF\u4EE5\u652F\u6301\u7684\u5E76\u53D1\u5904\u7406\u6570\u91CF\u4E5F\u5C31\u8D8A\u591A\uFF0C\u4F46\u662F\u4F1A\u53D7\u5230\u786C\u4EF6\u3001\u8F6F\u4EF6\u7B49\u8BBE\u5907\u7684\u5236\u7EA6\u3002</p></li><li><p>events<br> \u4E3B\u8981\u5F71\u54CD Nginx \u670D\u52A1\u5668\u4E0E\u7528\u6237\u7684\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u5E38\u7528\u8BBE\u7F6E\u5305\u62EC\uFF1A\u662F\u5426\u5F00\u542F\u5BF9\u591A\u4E2A work progress \u4E0B\u7684\u7F51\u7EDC\u8FDE\u63A5\u8FDB\u884C\u5E8F\u5217\u5316\u3001\u662F\u5426\u5141\u8BB8\u540C\u65F6\u63A5\u6536\u591A\u4E2A\u7F51\u7EDC\u8FDE\u63A5\u3001\u9009\u53D6\u54EA\u79CD\u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\u6765\u5904\u7406\u8FDE\u63A5\u8BF7\u6C42\u3001\u6BCF\u4E2A wordprocess \u53EF\u4EE5\u540C\u65F6\u652F\u6301\u7684\u6700\u5927\u8FDE\u63A5\u6570\u7B49\u3002</p></li><li><p>http<br> \u914D\u7F6E\u6700\u9891\u7E41\u7684\u90E8\u5206\uFF0C\u4EE3\u7406\u3001\u7F13\u5B58\u3001\u65E5\u5FD7\u7B49\u591A\u6570\u529F\u80FD\u548C\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u914D\u7F6E\u90FD\u5728\u8FD9\u91CC\u3002</p></li></ul><h3 id="_2-server-\u914D\u7F6E" tabindex="-1">2. server \u914D\u7F6E <a class="header-anchor" href="#_2-server-\u914D\u7F6E" aria-hidden="true">#</a></h3><ul><li>server<br> \u4E00\u4E2A\u865A\u62DF\u4E3B\u673A\uFF0C\u4E00\u4E2Ahttp\u4E2D\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2Aserver\uFF0C\u4E00\u4E2Aserver\u5C31\u662F\u4E00\u4E2A\u865A\u62DF\u4E3B\u673A\u3002</li></ul><blockquote><p>server_name\uFF1A\u6307\u5B9A IP \u5730\u5740\u6216\u57DF\u540D\uFF0C\u591A\u4E2A\u914D\u7F6E\u4E4B\u95F4\u7528\u7A7A\u683C\u5206\u5F00\u3002<br> root\uFF1A\u6574\u4E2A server \u865A\u62DF\u4E3B\u673A\u5185\u7684\u6839\u76EE\u5F55\uFF0C\u6240\u6709\u5F53\u524D\u4E3B\u673A\u4E2D\u7684 web \u9879\u76EE\u7684\u6839\u76EE\u5F55\u3002<br> index\uFF1A\u7528\u6237\u8BBF\u95EE web \u7F51\u7AD9\u65F6\u7684\u5168\u5C40\u9996\u9875\uFF0C\u5165\u53E3\u6587\u4EF6\u3002</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">#user  nobody;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#pid       logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">events </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#charset koi8-r;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        error_page   500 502 503 504  /50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location = /50x.html </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    root           html;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># concurs with nginx&#39;s one</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    deny  all;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 5000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name 192.168.3.38 </span></span>
<span class="line"><span style="color:#A6ACCD;">        location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            root  /home/static/yongjing/dist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            try_files </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri/ /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># HTTPS server</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#server {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_session_timeout  5m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    location / {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#        root   html;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,25),o=[e];function c(r,t,i,y,D,F){return a(),n("div",null,o)}const A=s(p,[["render",c]]);export{h as __pageData,A as default};
