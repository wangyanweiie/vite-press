export function getSideBarGuide() {
    return [
        {
            text:'指南',
            items: [
                // { 
                //     text: 'vitepress', 
                //     link: '/guide/' 
                // },
            ],
        },
    ]
}

export function getSideBarNote() {
    return [
        {
            text:'笔记',
            items: [
                {
                    text:'Element+',
                    link:'/note/01-Element+.md',
                },
                {
                    text:'Uni-app',
                    link:'/note/02-Uni-app.md',
                },
                {
                    text:'VUE',
                    link:'/note/03-VUE.md',
                },
                {
                    text:'JavaScript',
                    link:'/note/04-JavaScript.md',
                },
                {
                    text:'TypeScript',
                    link:'/note/05-TypeScript.md',
                },
                {
                    text:'GIT',
                    link:'/note/06-GIT.md',
                },
                {
                    text:'VSCode',
                    link:'/note/07-VSCode.md',
                },
                {
                    text:'APP 项目打包',
                    link:'/note/08-APP项目打包.md',
                },
                {
                    text:'PC 项目部署',
                    link:'/note/09-PC项目部署.md',
                },
                {
                    text:'Zebra 蓝牙配置',
                    link:'/note/10-Zebra蓝牙配置.md',
                },
                {
                    text:'Verdaccio',
                    link:'/note/11-Verdaccio.md',
                },
            ],
        },
    ]
}

export function getSideBarShare() {
    return [
        {
            text:'分享',
            items: [
                { 
                    text: '事件循环', 
                    link: '/share/事件循环.md' 
                },
                { 
                    text: '文件上传', 
                    link: '/share/文件上传.md' 
                },
                { 
                    text: 'GitLab-CI', 
                    link: '/share/GitLab-CI.md' 
                },
            ],
        },
    ]
}