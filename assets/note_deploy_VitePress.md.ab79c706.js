import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.27045dd1.js";const p="/vitePress/assets/vitepress-catalogue.14396f1c.png",o="/vitePress/assets/docs-catalogue.d96fb787.png",e="/vitePress/assets/ssh-clone.72fa0848.png",t="/vitePress/assets/ssh-key.eb60013e.png",c="/vitePress/assets/github-ssh-key.d8bafe1d.png",r="/vitePress/assets/github-ssh-key-success.b3b4afb5.png",E="/vitePress/assets/deploy.a3db76c4.png",i="/vitePress/assets/gh-pages.94d1df75.png",y="/vitePress/assets/github-pages.14d06b9c.png",A=JSON.parse('{"title":"VitePress","description":"","frontmatter":{},"headers":[],"relativePath":"note/deploy/VitePress.md","filePath":"note/deploy/VitePress.md"}'),d={name:"note/deploy/VitePress.md"},F=l(`<h1 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;VitePress&quot;">​</a></h1><h2 id="一、简介" tabindex="-1">一、简介 <a class="header-anchor" href="#一、简介" aria-label="Permalink to &quot;一、简介&quot;">​</a></h2><h3 id="_1-什么是-vitepress" tabindex="-1">1. 什么是 VitePress <a class="header-anchor" href="#_1-什么是-vitepress" aria-label="Permalink to &quot;1. 什么是 VitePress&quot;">​</a></h3><p>由 Vite、Vue 驱动的静态网站生成器，简单、强大、高性能，满足您一直想要的现代 SSG 框架。</p><p><em><code>注：</code>VitePress 是 VuePress 小兄弟。</em></p><h3 id="_2-优点" tabindex="-1">2. 优点 <a class="header-anchor" href="#_2-优点" aria-label="Permalink to &quot;2. 优点&quot;">​</a></h3><ul><li>开发服务器启动更快</li><li>热更新更快</li><li>构建更快(内部使用 Rollup)</li></ul><h3 id="_3-官网" tabindex="-1">3. 官网 <a class="header-anchor" href="#_3-官网" aria-label="Permalink to &quot;3. 官网&quot;">​</a></h3><ul><li><a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">官方文档-英文</a></li><li><a href="https://process1024.github.io/vitepress/" target="_blank" rel="noreferrer">官方文档-中文</a></li><li><a href="https://vitejs.cn/vitepress" target="_blank" rel="noreferrer">中文网</a></li></ul><h2 id="二、准备环境" tabindex="-1">二、准备环境 <a class="header-anchor" href="#二、准备环境" aria-label="Permalink to &quot;二、准备环境&quot;">​</a></h2><p><code>pnpm</code> / <code>npm</code> / <code>yarn</code></p><h2 id="三、安装与运行" tabindex="-1">三、安装与运行 <a class="header-anchor" href="#三、安装与运行" aria-label="Permalink to &quot;三、安装与运行&quot;">​</a></h2><p><a href="https://vitejs.cn/vitepress/guide/getting-started.html" target="_blank" rel="noreferrer">官方流程</a></p><h3 id="_1-ssh" tabindex="-1">1. SSH <a class="header-anchor" href="#_1-ssh" aria-label="Permalink to &quot;1. SSH&quot;">​</a></h3><ul><li>创建并进入一个目录</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># vitepress-starter 为目录名</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress-starter</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress-starter</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># vitepress-starter 为目录名</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress-starter</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress-starter</span></span></code></pre></div><ul><li>初始化</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 我选用的是 pnpm，此处选择 npm/yarn 也都可以，关于三者的区别可自行了解</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 我选用的是 pnpm，此处选择 npm/yarn 也都可以，关于三者的区别可自行了解</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><ul><li>本地安装 vitepress</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span></span></code></pre></div><ul><li>创建第一篇文档</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 文档路径：docs/index.md </span></span>
<span class="line"><span style="color:#6A737D;"># 文档内容：Hello VitePress</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;# Hello VitePress&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs/index.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 文档路径：docs/index.md </span></span>
<span class="line"><span style="color:#6A737D;"># 文档内容：Hello VitePress</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;# Hello VitePress&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/index.md</span></span></code></pre></div><ul><li>在自动生成的 <code>package.json</code> 文件中添加一些 <code>script</code></li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:serve&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress dev docs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress build docs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:serve&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>在本地服务器上启动文档站点</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 运行之后打开 Local：http://localhost:5173/vitePress 可以看到最初始的文档站点页面</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 运行之后打开 Local：http://localhost:5173/vitePress 可以看到最初始的文档站点页面</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span></span></code></pre></div><h3 id="_2-丰富项目目录" tabindex="-1">2. 丰富项目目录 <a class="header-anchor" href="#_2-丰富项目目录" aria-label="Permalink to &quot;2. 丰富项目目录&quot;">​</a></h3><ul><li>vitepress 目录</li></ul><p><img src="`+p+'" alt="catalogue"></p><p><em><code>注：</code>默认生成的目录结构中不包含 <code>gitignore</code> <code>deploy.sh</code> <code>README.md</code>，需要自行配置。<code>deploy.sh</code> 在项目需要部署才时会用到。</em></p><ul><li>docs 目录</li></ul><p><img src="'+o+`" alt="catalogue"></p><p><em><code>注：</code>docs 目录下所有的目录结构都需要手动创建，<code>.vitepress</code> 文件夹是必需的，以及文件夹下的 <code>config.ts</code> 文件是该项目配置的入口文件，也是必需的。其余所有文件夹都可根据个人喜好进行命名创建并使用。</em></p><ul><li>docs 目录解析</li></ul><blockquote><p>.vuepress/config.ts：配置文件的入口文件（必需）<br> .vuepress/dist：项目打包生成的文件夹<br> public：存放静态资源文件夹（用于存放Logo等资源）<br> guide：存放项目指南介绍的文件夹<br> note：存放笔记文档的文件夹<br> share：存放同事分享的文件夹</p></blockquote><h3 id="_3-丰富配置文件" tabindex="-1">3. 丰富配置文件 <a class="header-anchor" href="#_3-丰富配置文件" aria-label="Permalink to &quot;3. 丰富配置文件&quot;">​</a></h3><ul><li>config.ts</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 引入导航栏与侧边栏配置 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getNavBar } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./nav&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">    getSideBarGuide,</span></span>
<span class="line"><span style="color:#E1E4E8;">    getSideBarNoteEditor,</span></span>
<span class="line"><span style="color:#E1E4E8;">    getSideBarNoteFrame,</span></span>
<span class="line"><span style="color:#E1E4E8;">    getSideBarNoteDeploy,</span></span>
<span class="line"><span style="color:#E1E4E8;">    getSideBarNoteConfig,</span></span>
<span class="line"><span style="color:#E1E4E8;">    getSideBarShare,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./sidebar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 配置信息 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;Lemon&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    description: </span><span style="color:#9ECBFF;">&#39;Just Do It&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    lang: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    head: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">, { rel: </span><span style="color:#9ECBFF;">&#39;icon&#39;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&#39;/favicon.png&#39;</span><span style="color:#E1E4E8;"> }]</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// github pages 配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#9ECBFF;">&#39;/vitePress/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 主题配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 网站 logo</span></span>
<span class="line"><span style="color:#E1E4E8;">        logo: </span><span style="color:#9ECBFF;">&#39;/logo.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 网站标题</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// siteTitle: false,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 启动页面丝滑滚动</span></span>
<span class="line"><span style="color:#E1E4E8;">        smoothScroll: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 社交账户链接</span></span>
<span class="line"><span style="color:#E1E4E8;">        socialLinks: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { icon: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/wangyanweiie/vitePress&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 导航栏配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        nav: </span><span style="color:#B392F0;">getNavBar</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 左侧边栏配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        sidebar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;/guide/&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">getSideBarGuide</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;/note/editor/&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">getSideBarNoteEditor</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;/note/frame/&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">getSideBarNoteFrame</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;/note/deploy/&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">getSideBarNoteDeploy</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;/note/config/&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">getSideBarNoteConfig</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;/share/&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">getSideBarShare</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 右侧边栏标题</span></span>
<span class="line"><span style="color:#E1E4E8;">        outlineTitle: </span><span style="color:#9ECBFF;">&#39;目录&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//上下篇文本提示文字</span></span>
<span class="line"><span style="color:#E1E4E8;">        docFooter: { </span></span>
<span class="line"><span style="color:#E1E4E8;">            prev: </span><span style="color:#9ECBFF;">&#39;上一篇&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            next: </span><span style="color:#9ECBFF;">&#39;下一篇&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 上次更新时间提示文字</span></span>
<span class="line"><span style="color:#E1E4E8;">        lastUpdatedText: </span><span style="color:#9ECBFF;">&#39;Updated Date&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 编辑链接</span></span>
<span class="line"><span style="color:#E1E4E8;">        editLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;Edit this page on GitHub&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            pattern: </span><span style="color:#9ECBFF;">&#39;https://github.com/wangyanweiie/vitePress&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 页面底部</span></span>
<span class="line"><span style="color:#E1E4E8;">        footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            message: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            copyright: </span><span style="color:#9ECBFF;">&#39;Copyright © 2022 wangyanwei&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 引入导航栏与侧边栏配置 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getNavBar } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./nav&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span></span>
<span class="line"><span style="color:#24292E;">    getSideBarGuide,</span></span>
<span class="line"><span style="color:#24292E;">    getSideBarNoteEditor,</span></span>
<span class="line"><span style="color:#24292E;">    getSideBarNoteFrame,</span></span>
<span class="line"><span style="color:#24292E;">    getSideBarNoteDeploy,</span></span>
<span class="line"><span style="color:#24292E;">    getSideBarNoteConfig,</span></span>
<span class="line"><span style="color:#24292E;">    getSideBarShare,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./sidebar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 配置信息 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;Lemon&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    description: </span><span style="color:#032F62;">&#39;Just Do It&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    head: [</span></span>
<span class="line"><span style="color:#24292E;">        [</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">, { rel: </span><span style="color:#032F62;">&#39;icon&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;/favicon.png&#39;</span><span style="color:#24292E;"> }]</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// github pages 配置</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#032F62;">&#39;/vitePress/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 主题配置</span></span>
<span class="line"><span style="color:#24292E;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 网站 logo</span></span>
<span class="line"><span style="color:#24292E;">        logo: </span><span style="color:#032F62;">&#39;/logo.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 网站标题</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// siteTitle: false,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 启动页面丝滑滚动</span></span>
<span class="line"><span style="color:#24292E;">        smoothScroll: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 社交账户链接</span></span>
<span class="line"><span style="color:#24292E;">        socialLinks: [</span></span>
<span class="line"><span style="color:#24292E;">            { icon: </span><span style="color:#032F62;">&#39;github&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/wangyanweiie/vitePress&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 导航栏配置</span></span>
<span class="line"><span style="color:#24292E;">        nav: </span><span style="color:#6F42C1;">getNavBar</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 左侧边栏配置</span></span>
<span class="line"><span style="color:#24292E;">        sidebar: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;/guide/&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">getSideBarGuide</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;/note/editor/&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">getSideBarNoteEditor</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;/note/frame/&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">getSideBarNoteFrame</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;/note/deploy/&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">getSideBarNoteDeploy</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;/note/config/&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">getSideBarNoteConfig</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;/share/&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">getSideBarShare</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 右侧边栏标题</span></span>
<span class="line"><span style="color:#24292E;">        outlineTitle: </span><span style="color:#032F62;">&#39;目录&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//上下篇文本提示文字</span></span>
<span class="line"><span style="color:#24292E;">        docFooter: { </span></span>
<span class="line"><span style="color:#24292E;">            prev: </span><span style="color:#032F62;">&#39;上一篇&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            next: </span><span style="color:#032F62;">&#39;下一篇&#39;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 上次更新时间提示文字</span></span>
<span class="line"><span style="color:#24292E;">        lastUpdatedText: </span><span style="color:#032F62;">&#39;Updated Date&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 编辑链接</span></span>
<span class="line"><span style="color:#24292E;">        editLink: {</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;Edit this page on GitHub&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            pattern: </span><span style="color:#032F62;">&#39;https://github.com/wangyanweiie/vitePress&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 页面底部</span></span>
<span class="line"><span style="color:#24292E;">        footer: {</span></span>
<span class="line"><span style="color:#24292E;">            message: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            copyright: </span><span style="color:#032F62;">&#39;Copyright © 2022 wangyanwei&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>nav.ts（导航栏配置）</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 顶部导航栏 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> * 都是默认指向文件夹下的 index.md 文件</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getNavBar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;指南&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">            link: </span><span style="color:#9ECBFF;">&#39;/guide/&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;文档&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;编辑器/IDE&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/note/editor/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;前端技术栈&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/note/frame/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;项目部署&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/note/deploy/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;环境配置&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/note/config/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;交流分享&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/share/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ] </span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 顶部导航栏 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> * 都是默认指向文件夹下的 index.md 文件</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getNavBar</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;指南&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">            link: </span><span style="color:#032F62;">&#39;/guide/&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;文档&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;编辑器/IDE&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/note/editor/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;前端技术栈&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/note/frame/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;项目部署&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/note/deploy/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;环境配置&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/note/config/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;交流分享&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/share/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ] </span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>sidebar.ts（侧边栏配置）</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 指南 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getSideBarGuide</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text:</span><span style="color:#9ECBFF;">&#39;指南&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 笔记 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 编辑器相关笔记</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getSideBarNoteEditor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text:</span><span style="color:#9ECBFF;">&#39;编辑器/IDE&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;VSCode&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/editor/VSCode.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 前端技术栈相关笔记</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getSideBarNoteFrame</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text:</span><span style="color:#9ECBFF;">&#39;前端技术栈&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;Element+&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/frame/Element.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;Uni-app&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/frame/Uni-app.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;VUE&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/frame/VUE.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;JavaScript&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/frame/JavaScript.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;TypeScript&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/frame/TypeScript.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;GIT&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/frame/GIT.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 项目部署相关笔记</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getSideBarNoteDeploy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text:</span><span style="color:#9ECBFF;">&#39;项目部署&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;APP项目打包&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/deploy/APP打包.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;PC项目部署&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/deploy/PC项目部署.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;Verdaccio&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/deploy/Verdaccio.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;VitePress&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/deploy/VitePress.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 环境配置相关笔记</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getSideBarNoteConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text:</span><span style="color:#9ECBFF;">&#39;环境配置&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text:</span><span style="color:#9ECBFF;">&#39;Zebra蓝牙配置&#39;</span><span style="color:#E1E4E8;">, link:</span><span style="color:#9ECBFF;">&#39;/note/config/Zebra蓝牙配置.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 交流分享 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getSideBarShare</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text:</span><span style="color:#9ECBFF;">&#39;交流分享&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;事件循环&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/share/事件循环.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;文件上传&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/share/文件上传.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;GitLab-CI&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/share/GitLab-CI.md&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 指南 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getSideBarGuide</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            text:</span><span style="color:#032F62;">&#39;指南&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 笔记 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6A737D;">// 编辑器相关笔记</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getSideBarNoteEditor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            text:</span><span style="color:#032F62;">&#39;编辑器/IDE&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;VSCode&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/editor/VSCode.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 前端技术栈相关笔记</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getSideBarNoteFrame</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            text:</span><span style="color:#032F62;">&#39;前端技术栈&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;Element+&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/frame/Element.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;Uni-app&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/frame/Uni-app.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;VUE&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/frame/VUE.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;JavaScript&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/frame/JavaScript.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;TypeScript&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/frame/TypeScript.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;GIT&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/frame/GIT.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 项目部署相关笔记</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getSideBarNoteDeploy</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            text:</span><span style="color:#032F62;">&#39;项目部署&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;APP项目打包&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/deploy/APP打包.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;PC项目部署&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/deploy/PC项目部署.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;Verdaccio&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/deploy/Verdaccio.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;VitePress&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/deploy/VitePress.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 环境配置相关笔记</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getSideBarNoteConfig</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            text:</span><span style="color:#032F62;">&#39;环境配置&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">                { text:</span><span style="color:#032F62;">&#39;Zebra蓝牙配置&#39;</span><span style="color:#24292E;">, link:</span><span style="color:#032F62;">&#39;/note/config/Zebra蓝牙配置.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> ******************** 交流分享 ********************</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getSideBarShare</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            text:</span><span style="color:#032F62;">&#39;交流分享&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;事件循环&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/share/事件循环.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;文件上传&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/share/文件上传.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;GitLab-CI&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/share/GitLab-CI.md&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="四、部署-github-pages" tabindex="-1">四、部署 GitHub-Pages <a class="header-anchor" href="#四、部署-github-pages" aria-label="Permalink to &quot;四、部署 GitHub-Pages&quot;">​</a></h2><p><a href="https://vitejs.cn/vitepress/guide/deploy.html" target="_blank" rel="noreferrer">官方配置流程</a></p><h3 id="_1-项目中的配置" tabindex="-1">1. 项目中的配置 <a class="header-anchor" href="#_1-项目中的配置" aria-label="Permalink to &quot;1. 项目中的配置&quot;">​</a></h3><ul><li>拷贝远程仓库的通过 SSH 进行 clone 的地址</li></ul><p><img src="`+e+`" alt="ssh-clone"></p><ul><li>在项目根目录（vitepress）下创建 deploy.sh 文件</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成静态文件</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化 暂存 提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-A</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt; </span></span>
<span class="line"><span style="color:#6A737D;"># 此处即发布到我的 github 远程仓库 vitePress/gh-pages 分支上</span></span>
<span class="line"><span style="color:#6A737D;"># 注意：通过 shell 上传时需要先申请一个 ssh-key 配置到 github上，否则无法 Push 到 github。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git remote add origin git@github.com:wangyanweiie/vitePress.git</span></span>
<span class="line"><span style="color:#6A737D;"># git branch -m main</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com:wangyanweiie/vitePress.git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#005CC5;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成静态文件</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化 暂存 提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-A</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt; </span></span>
<span class="line"><span style="color:#6A737D;"># 此处即发布到我的 github 远程仓库 vitePress/gh-pages 分支上</span></span>
<span class="line"><span style="color:#6A737D;"># 注意：通过 shell 上传时需要先申请一个 ssh-key 配置到 github上，否则无法 Push 到 github。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># git remote add origin git@github.com:wangyanweiie/vitePress.git</span></span>
<span class="line"><span style="color:#6A737D;"># git branch -m main</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:wangyanweiie/vitePress.git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span></code></pre></div><ul><li>在目录 docs/.vitepress/config.ts 中添加配置</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 配置正确的 base：默认为 &#39;/&#39; ，配置成需要部署 github-pages 远程仓库的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#9ECBFF;">&#39;/vitePress/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 配置正确的 base：默认为 &#39;/&#39; ，配置成需要部署 github-pages 远程仓库的名称</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#032F62;">&#39;/vitePress/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_2-生成-ssh-key" tabindex="-1">2. 生成 SSH-Key <a class="header-anchor" href="#_2-生成-ssh-key" aria-label="Permalink to &quot;2. 生成 SSH-Key&quot;">​</a></h3><ul><li>打开 Git-Bash</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 检查本地主机是否已经存在 SSH Key</span></span>
<span class="line"><span style="color:#6A737D;"># 查看是否存在 id_rsa 和 id_rsa.pub 文件，如果存在，说明已经存在 SSH Key</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~./ssh</span></span>
<span class="line"><span style="color:#B392F0;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果不存在ssh key，使用如下命令生成，执行后一直回车即可</span></span>
<span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rsa</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;740484522@qq.com&quot;</span></span>
<span class="line"><span style="color:#B392F0;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看 ssh key，复制输出结果到 github 上添加 SSH Key</span></span>
<span class="line"><span style="color:#B392F0;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">id_rsa.pub</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 验证是否设置成功，设置成功后，即可不需要账号密码 Clone 和 Push 代码</span></span>
<span class="line"><span style="color:#B392F0;">ssh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-T</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 检查本地主机是否已经存在 SSH Key</span></span>
<span class="line"><span style="color:#6A737D;"># 查看是否存在 id_rsa 和 id_rsa.pub 文件，如果存在，说明已经存在 SSH Key</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~./ssh</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果不存在ssh key，使用如下命令生成，执行后一直回车即可</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rsa</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;740484522@qq.com&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看 ssh key，复制输出结果到 github 上添加 SSH Key</span></span>
<span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">id_rsa.pub</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 验证是否设置成功，设置成功后，即可不需要账号密码 Clone 和 Push 代码</span></span>
<span class="line"><span style="color:#6F42C1;">ssh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-T</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com</span></span></code></pre></div><ul><li>执行结果</li></ul><p><img src="`+t+'" alt="ssh-key"></p><h3 id="_3-配置-github" tabindex="-1">3. 配置 GitHub <a class="header-anchor" href="#_3-配置-github" aria-label="Permalink to &quot;3. 配置 GitHub&quot;">​</a></h3><ul><li>粘贴生成的 SSH Key 到 github 配置</li></ul><p><img src="'+c+'" alt="github-ssh-key"></p><p><img src="'+r+'" alt="github-ssh-key-success"></p><h3 id="_4-执行-deploy-sh" tabindex="-1">4. 执行 deploy.sh <a class="header-anchor" href="#_4-执行-deploy-sh" aria-label="Permalink to &quot;4. 执行 deploy.sh&quot;">​</a></h3><ul><li>打开 Git-Bash</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ssh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ssh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy.sh</span></span></code></pre></div><ul><li>执行结果</li></ul><p><img src="'+E+'" alt="deploy"></p><p><img src="'+i+'" alt="gh-pages"></p><p><img src="'+y+'" alt="github-pages"></p><h3 id="_5-站点地址" tabindex="-1">5. <a href="https://wangyanweiie.github.io/vitePress" target="_blank" rel="noreferrer">站点地址</a> <a class="header-anchor" href="#_5-站点地址" aria-label="Permalink to &quot;5. [站点地址](https://wangyanweiie.github.io/vitePress)&quot;">​</a></h3><h2 id="五、参考文章" tabindex="-1">五、参考文章 <a class="header-anchor" href="#五、参考文章" aria-label="Permalink to &quot;五、参考文章&quot;">​</a></h2><blockquote><p><a href="https://vitejs.cn/vitepress/" target="_blank" rel="noreferrer">https://vitejs.cn/vitepress/</a><br><a href="https://process1024.github.io/vitepress/" target="_blank" rel="noreferrer">https://process1024.github.io/vitepress/</a><br><a href="https://juejin.cn/post/6936843142293356558" target="_blank" rel="noreferrer">https://juejin.cn/post/6936843142293356558</a><br><a href="https://blog.csdn.net/weixin_42310154/article/details/118340458" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_42310154/article/details/118340458</a></p></blockquote>',70),h=[F];function g(u,C,m,b,B,v){return n(),a("div",null,h)}const k=s(d,[["render",g]]);export{A as __pageData,k as default};
