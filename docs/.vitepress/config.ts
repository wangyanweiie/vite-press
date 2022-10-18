import { getNavBar } from './nav'
import { getSideBarGuide, getSideBarNote, getSideBarShare} from './sidebar'

module.exports = {
    title: 'wyw',
    description: 'Just Do It',
    lang: 'zh-CN',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        // logo
        logo: '/logo.png',
        // 网站标题
        // siteTitle: false,
        // 启动页面丝滑滚动
        smoothScroll: true,
        // 导航栏配置
        nav: getNavBar(),
        // 社交账户链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wangyanweiie/vitePress' },
        ],
        // 左侧边栏配置
        sidebar: {
            '/guide/': getSideBarGuide(),
            '/note/': getSideBarNote(),
            '/share/': getSideBarShare()
        },
        // 右侧边栏标题
        outlineTitle: '目录',
        //上下篇文本提示文字
        docFooter: { 
            prev: '上一篇',
            next: '下一篇'
          },
        // 上次更新时间提示文字
        lastUpdatedText: 'Updated Date',
        // 编辑链接
        editLink: {
            text: 'Edit this page on GitHub',
            pattern: 'https://github.com/wangyanweiie/vitePress'
        },
        // 页面底部
        footer: {
            message: '',
            copyright: 'copyright © wangyanwei'
        },
    }
}