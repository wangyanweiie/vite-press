export function getNavBar() {
    return [
		{
            text: '指南', 
            link: '/guide/' 
        },
		{
			text: '文档', 
            items: [
                { text: '笔记', link: '/note/' },
                { text: '分享', link: '/share/' },
            ] 
        },
	]
}