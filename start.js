const PROXY = require("@swtc/proxy")

PROXY.state.funcConfig() // 默认基金会测试节点
// PROXY.state.funcConfig({server: 'ws://139.198.19.175:5055'}) // 指定基金会测试节点
PROXY.state.funcConfig({ server: "wss://s.jingtum.com:5020" }) // 指定节点
// PROXY.state.funcConfig({ server: "ws://101.200.230.74:5020" }) // 多签节点
PROXY.state.funcConfig({ debug: true }) // 调试
// PROXY.state.funcConfig({ port: 5080 }) // 端口
// 可以通过设置环境变量控制配置 UPSTREAM->server DEBUG->debug PORT->port

PROXY.web.listen(PROXY.state.config.value.port || 5080)
