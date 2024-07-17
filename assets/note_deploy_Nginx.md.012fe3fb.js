import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.27045dd1.js";const d=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"note/deploy/Nginx.md","filePath":"note/deploy/Nginx.md"}'),p={name:"note/deploy/Nginx.md"},o=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><h2 id="一、简介" tabindex="-1">一、简介 <a class="header-anchor" href="#一、简介" aria-label="Permalink to &quot;一、简介&quot;">​</a></h2><h3 id="_1-概述" tabindex="-1">1. 概述 <a class="header-anchor" href="#_1-概述" aria-label="Permalink to &quot;1. 概述&quot;">​</a></h3><p>Nginx 是一款轻量级的 Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在 BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上 nginx 的并发能力在同类型的网页服务器中表现较好。</p><h3 id="_2-特点" tabindex="-1">2. 特点 <a class="header-anchor" href="#_2-特点" aria-label="Permalink to &quot;2. 特点&quot;">​</a></h3><ul><li>更快：单次请求响应更快，高并发可以更快的处理响应</li><li>高拓展性：设计极具扩展性，由多个不同功能、不同层次、不同类型且耦合度极低的模块组成</li><li>高可靠性：很多高流量网站都在核心服务器上大规模使用 Nginx</li><li>低内存消耗：一般1万个非活跃的 HTTP Keep-Alive 连接在 Nginx 中仅消耗2.5MB内存</li><li>高并发：单机支持10万以上的并发连接</li><li>热部署：master 管理进程与 worker 工作进程的分离设计，使得 Nginx 能够支持热部署</li><li>开源协议：使用 BSD 许可协议，免费使用，且可修改源码</li></ul><h3 id="_3-应用场景" tabindex="-1">3. 应用场景 <a class="header-anchor" href="#_3-应用场景" aria-label="Permalink to &quot;3. 应用场景&quot;">​</a></h3><ul><li><p>HTTP 服务器<br> Nginx 本身也是一个静态资源的服务器，当只有静态资源的时候，就可以使用 Nginx 来做服务器，如果一个网站只是静态页面的话，那么就可以通过这种方式来实现部署。</p></li><li><p>静态资源服务<br> 静态服务器，通常会提供一个上传的功能，其他应用如果需要静态资源就从该静态服务器中获取。</p></li><li><p>反向代理服务<br> 反向代理 (Reverse Proxy) 方式是指以代理服务器来接受 Internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 Internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。</p></li><li><p>负载均衡<br> 负载均衡也是 Nginx 常用的一个功能，负载均衡其意思就是分摊到多个操作单元上进行执行，例如 Web 服务器、FTP 服务器、企业关键应用服务器和其它关键任务服务器等，从而共同完成工作任务。</p></li><li><p>动静分离<br> 动静分离是让动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来，动静资源做好了拆分以后，我们就可以根据静态资源的特点将其做缓存操作，这就是网站静态化处理的核心思路。</p></li></ul><h2 id="二、安装与部署" tabindex="-1">二、安装与部署 <a class="header-anchor" href="#二、安装与部署" aria-label="Permalink to &quot;二、安装与部署&quot;">​</a></h2><h3 id="_1-官网" tabindex="-1">1. <a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">官网</a> <a class="header-anchor" href="#_1-官网" aria-label="Permalink to &quot;1. [官网](https://nginx.org/en/download.html)&quot;">​</a></h3><h3 id="_2-安装" tabindex="-1">2. 安装 <a class="header-anchor" href="#_2-安装" aria-label="Permalink to &quot;2. 安装&quot;">​</a></h3><ul><li>可以选择 Stable version 版本下载到本地，下载完成后直接在本地解压后放入 linux 系统中；</li><li>或者直接在 linux 环境中使用命令下载；</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装依赖包：</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zlib</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zlib-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pcre-devel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">openssl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">openssl-devel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建存放目录 nginx</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到 nginx 目录下</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载 nginx 安装包</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://nginx.org/download/nginx-1.22.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解压安装包</span></span>
<span class="line"><span style="color:#B392F0;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-xvf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx-1.22.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解压完成后，进入 nginx 下的目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/nginx/nginx-1.22.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 执行 make 命令</span></span>
<span class="line"><span style="color:#B392F0;">make</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 执行安装命令</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看是否安装完成（查看是否有 nginx 进程）</span></span>
<span class="line"><span style="color:#B392F0;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 若存在进程则代表安装成功，则可以切换到 /sbin 目录下</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/nginx/sbin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动 nginx 服务</span></span>
<span class="line"><span style="color:#B392F0;">./nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动成功后再次查看 nginx 进程</span></span>
<span class="line"><span style="color:#B392F0;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装依赖包：</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zlib</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zlib-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pcre-devel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">openssl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">openssl-devel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建存放目录 nginx</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;">  </span><span style="color:#032F62;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到 nginx 目录下</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载 nginx 安装包</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://nginx.org/download/nginx-1.22.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解压安装包</span></span>
<span class="line"><span style="color:#6F42C1;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-xvf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx-1.22.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 解压完成后，进入 nginx 下的目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx/nginx-1.22.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 执行 make 命令</span></span>
<span class="line"><span style="color:#6F42C1;">make</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 执行安装命令</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看是否安装完成（查看是否有 nginx 进程）</span></span>
<span class="line"><span style="color:#6F42C1;">ps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 若存在进程则代表安装成功，则可以切换到 /sbin 目录下</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx/sbin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动 nginx 服务</span></span>
<span class="line"><span style="color:#6F42C1;">./nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动成功后再次查看 nginx 进程</span></span>
<span class="line"><span style="color:#6F42C1;">ps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span></code></pre></div><h3 id="_3-部署" tabindex="-1">3. 部署 <a class="header-anchor" href="#_3-部署" aria-label="Permalink to &quot;3. 部署&quot;">​</a></h3><ul><li>配置 nginx.conf 文件；</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 跳转到 conf 文件所在的路径</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/nginx/conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑配置文件</span></span>
<span class="line"><span style="color:#B392F0;">vi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加 server 对象</span></span>
<span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">;  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># IP 地址 / 域名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">192.168</span><span style="color:#9ECBFF;">.3.81</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 打包后的静态文件路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/home/static/yongjing/dist</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 静态资源入口文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">index.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.htm</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">try_files</span><span style="color:#E1E4E8;"> $uri $uri</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/index.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 跳转到 conf 文件所在的路径</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx/conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 编辑配置文件</span></span>
<span class="line"><span style="color:#6F42C1;">vi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加 server 对象</span></span>
<span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 端口号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">;  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># IP 地址 / 域名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">192.168</span><span style="color:#032F62;">.3.81</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 打包后的静态文件路径</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/home/static/yongjing/dist</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 静态资源入口文件</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">  </span><span style="color:#032F62;">index.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.htm</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">try_files</span><span style="color:#24292E;"> $uri $uri</span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/index.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>重启 nginx</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 跳转回上层路径</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看当前 nginx 的进程号</span></span>
<span class="line"><span style="color:#B392F0;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ef</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 终止进程号</span></span>
<span class="line"><span style="color:#79B8FF;">kill</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">进程号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启 nginx</span></span>
<span class="line"><span style="color:#B392F0;">./sbin/nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">conf/nginx.conf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 跳转回上层路径</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看当前 nginx 的进程号</span></span>
<span class="line"><span style="color:#6F42C1;">ps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ef</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 终止进程号</span></span>
<span class="line"><span style="color:#005CC5;">kill</span><span style="color:#24292E;"> </span><span style="color:#032F62;">进程号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启 nginx</span></span>
<span class="line"><span style="color:#6F42C1;">./sbin/nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">conf/nginx.conf</span></span></code></pre></div><h2 id="三、-conf-配置详解" tabindex="-1">三、.conf 配置详解 <a class="header-anchor" href="#三、-conf-配置详解" aria-label="Permalink to &quot;三、.conf 配置详解&quot;">​</a></h2><h3 id="_1-主要配置区域" tabindex="-1">1. 主要配置区域 <a class="header-anchor" href="#_1-主要配置区域" aria-label="Permalink to &quot;1. 主要配置区域&quot;">​</a></h3><ul><li><p>worker_processes<br> Nginx 服务器并发处理服务的关键配置，值越大，可以支持的并发处理数量也就越多，但是会受到硬件、软件等设备的制约。</p></li><li><p>events<br> 主要影响 Nginx 服务器与用户的网络连接，常用设置包括：是否开启对多个 work progress 下的网络连接进行序列化、是否允许同时接收多个网络连接、选取哪种事件驱动模型来处理连接请求、每个 wordprocess 可以同时支持的最大连接数等。</p></li><li><p>http<br> 配置最频繁的部分，代理、缓存、日志等多数功能和第三方模块的配置都在这里。</p></li></ul><h3 id="_2-server-配置" tabindex="-1">2. server 配置 <a class="header-anchor" href="#_2-server-配置" aria-label="Permalink to &quot;2. server 配置&quot;">​</a></h3><ul><li>server<br> 一个虚拟主机，一个http中可以配置多个server，一个server就是一个虚拟主机。</li></ul><blockquote><p>server_name：指定 IP 地址或域名，多个配置之间用空格分开。<br> root：整个 server 虚拟主机内的根目录，所有当前主机中的 web 项目的根目录。<br> index：用户访问 web 网站时的全局首页，入口文件。</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#user  nobody;</span></span>
<span class="line"><span style="color:#B392F0;">worker_processes</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#pid       logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">events</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">worker_connections</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">include</span><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">mime.types</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">default_type</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">application/octet-stream</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">sendfile</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">on</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">keepalive_timeout</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">65</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">       </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">localhost</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#charset koi8-r;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">index.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.htm</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">error_page</span><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/50x.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/50x.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    root           html;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># concurs with nginx&#39;s one</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#    deny  all;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">192.168</span><span style="color:#9ECBFF;">.3.38</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/home/static/yongjing/dist</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">index.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.htm</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">try_files</span><span style="color:#E1E4E8;"> $uri $uri</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/index.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># HTTPS server</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#server {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_session_timeout  5m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    location / {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#        root   html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#user  nobody;</span></span>
<span class="line"><span style="color:#6F42C1;">worker_processes</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#6A737D;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#pid       logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">events</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">worker_connections</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">http</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">include</span><span style="color:#24292E;">       </span><span style="color:#032F62;">mime.types</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">default_type</span><span style="color:#24292E;">  </span><span style="color:#032F62;">application/octet-stream</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sendfile</span><span style="color:#24292E;">        </span><span style="color:#032F62;">on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">keepalive_timeout</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">65</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">       </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;">  </span><span style="color:#032F62;">localhost</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#charset koi8-r;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;">   </span><span style="color:#032F62;">html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">  </span><span style="color:#032F62;">index.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.htm</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">error_page</span><span style="color:#24292E;">   </span><span style="color:#005CC5;">500</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">502</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">503</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">504</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/50x.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/50x.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;">   </span><span style="color:#032F62;">html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    root           html;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># concurs with nginx&#39;s one</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#    deny  all;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">192.168</span><span style="color:#032F62;">.3.38</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/home/static/yongjing/dist</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">  </span><span style="color:#032F62;">index.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.htm</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">try_files</span><span style="color:#24292E;"> $uri $uri</span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/index.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># HTTPS server</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#server {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_session_timeout  5m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    location / {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#        root   html;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,25),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const g=s(p,[["render",c]]);export{d as __pageData,g as default};
