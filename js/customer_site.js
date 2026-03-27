const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://telegra.ph/APIs-08-12',
        name: '七七资源',
    }
    wolong：{  // <--- 这是你新添加的代码
        api: 'https://wolongzyw.com/api.php/provide/vod/',
        name: '卧龙资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
