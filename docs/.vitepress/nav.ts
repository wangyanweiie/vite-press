/**
 ******************** 顶部导航栏 ********************
 */
export function getNavBar() {
    return [
		{
            text: '指南', 
            link: '/guide/' 
        },
		{
			text: '文档', 
            items: [
                { text: '编辑器相关', link: '/note/editor/' },
                { text: '前端框架相关', link: '/note/frame/' },
                { text: '项目部署相关', link: '/note/deploy/' },
                { text: '环境配置相关', link: '/note/config/' },
                { text: '交流分享', link: '/share/' },
            ] 
        },
	]
}