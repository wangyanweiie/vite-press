/**
 ******************** 指南 ********************
 */
export function getSideBarGuide() {
    return [
        {
            text:'指南',
            collapsible: true,
            items: [
                // { text: 'vitepress', link: '/guide/' },
            ],
        },
    ]
}

/**
 ******************** 笔记 ********************
 */
// 编辑器相关笔记
export function getSideBarNoteEditor() {
    return [
        {
            text:'编辑器/IDE',
            collapsible: true,
            items: [
                { text:'VSCode', link:'/note/editor/VSCode.md' },
            ],
        },
    ]
}

// 前端技术栈相关笔记
export function getSideBarNoteFrame() {
    return [
        {
            text:'前端技术栈',
            collapsible: true,
            items: [
                { text:'Element+', link:'/note/frame/Element.md' },
                { text:'Uni-app', link:'/note/frame/Uni-app.md' },
                { text:'VUE', link:'/note/frame/VUE.md' },
                { text:'JavaScript', link:'/note/frame/JavaScript.md' },
                { text:'TypeScript', link:'/note/frame/TypeScript.md' },
                { text:'GIT', link:'/note/frame/GIT.md' },
                { text:'VitePress', link:'/note/deploy/VitePress.md' },
                { text:'Verdaccio', link:'/note/deploy/Verdaccio.md' },
            ],
        },
    ]
}

// 项目部署相关笔记
export function getSideBarNoteDeploy() {
    return [
        {
            text:'项目部署',
            collapsible: true,
            items: [
                { text:'APP打包', link:'/note/deploy/APP打包.md' },
                { text:'PC项目部署', link:'/note/deploy/PC项目部署.md' },
            ],
        },
    ]
}

// 环境配置相关笔记
export function getSideBarNoteConfig() {
    return [
        {
            text:'环境配置',
            collapsible: true,
            items: [
                { text:'Zebra蓝牙配置', link:'/note/config/Zebra蓝牙配置.md' },
            ],
        },
    ]
}

/**
 ******************** 交流分享 ********************
 */
export function getSideBarShare() {
    return [
        {
            text:'交流分享',
            collapsible: true,
            items: [
                { text: '事件循环', link: '/share/事件循环.md' },
                { text: '文件上传', link: '/share/文件上传.md' },
                { text: 'GitLab-CI', link: '/share/GitLab-CI.md' },
            ],
        },
    ]
}