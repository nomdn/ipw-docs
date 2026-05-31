import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IP查询 Mirror 文档",
  description: "ipw文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'IPv6 工具箱使用文档', link: '/usage-docs' }
    ],

    sidebar: [
      {
        items: [
          { text: 'IPv6 工具箱使用文档', link: '/usage_docs' },
          { text: 'IPv6 用户端', items: [
            { text: '个人宽带如何开启IPv6网络访问', link: '/user/enable_ipv6'},
            { text: '命令行禁用/启用IPv6本地网络', link: '/user/cmd_bash_disable_ipv6'},
            { text: '命令行(curl)获取 IPv4 和 IPv6 地址', link: '/user/cmd_getip'},
            { text: '浏览器访问 IPv6 地址', link: '/user/view_ipv6_adress_url'},
            { text: 'Windows 10/11 设置 IPv4/IPv6 访问优先级', link: '/user/ipv4_ipv6_prefix_precedence'},
            { text: '国内 IPv6 资源导航', link: '/user/ipv6_daohang'},
            { text: '国内纯 IPv6 网站导航', link: '/user/pure_ipv6_website'},
            { text: '全国各省 DNS 服务器列表', link: '/user/dns'},
            { text: 'IPv6 DNS 地址列表', link: '/user/ipv6_dns'},
            { text: '最佳实践', items: [ 
              { text: '阿里云自动化添加安全组', link: '/user/AliyunAuthorizeSecurityGroup'},
              { text: '腾讯云自动化添加安全组', link: '/user/TencentCloudAddSecurityGroup'},
            ]},

          ]
          },
          { text: '云服务器配置 IPv6', items: [
            { text: '网站开启 IPv6 的三种方式', link: '/server/website_enable_ipv6'},
            { text: '腾讯云 cvm 开启 IPv6', link: '/server/tencent_cloud_cvm_ipv6'},
            { text: 'Nginx 开启 IPv6', link: '/server/nginx_ipv6'},
            { text: '如何确认一个网站是否开启 IPv6', link: '/server/ipv6webcheck'},
            { text: '网站增加支持IPv6访问标识', link: '/server/ipv6_sign'},
            { text: '如何为域名添加 IPv6 解析记录', link: '/server/ipv6_domain_record'},
          ]
          },
          { text: 'IPv6 协议规范', items: [
            { text: 'IPv6 RFC8200 解读', link: '/rfc/rfc8200'},
            { text: 'IPv6 地址标识方法', link: '/rfc/ipv6_address_format'},
            { text: 'tcpdump 分析IPv6包', link: '/user/tcpdump_ipv6'},
            { text: 'WireShark 分析IPv6包头', link: '/user/wireshark_ipv6'},
            { text: 'IPv6 Ping 原理', link: '/user/ipv6_ping'}
          ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nomdn/ipw-cn' }
    ]
  }
})
