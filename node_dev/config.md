[
    {
      url: '/api/nurses/:id/info',
      title: '获取用户基本信息',
      method: 'GET',
      path: './node_dev/md/info.md'
    },
    {
      url: '/api/nurses/:id/info',
      title: '创建用户basic信息',
      method: 'PATCH',
      path: './node_dev/md/createBasicInfo.md'
    },
    {
      url: '/api/nurses/:id/info',
      title: '创建用户profession信息',
      method: 'PATCH',
      path: './node_dev/md/professionInfo.md'
    },
    {
      url: '/api/nurses/signup/phone-captcha',
      title: '验证码',
      method: 'POST',
      path: './node_dev/md/phone-captcha.md'
    },
    {
      url: '/api/nurses/signup/phone',
      title: '登录',
      method: 'POST',
      path: './node_dev/md/login.md'
    },
    {
      url: '/api/departments',
      title: '获取医院科室',
      method: 'GET',
      path: './node_dev/md/departments.md'
    },
    {
      url: '/api/nurses/signout',
      title: '退出登录',
      method: 'POST',
      path: './node_dev/md/signout.md'
    },
    {
      url: '/api/nurses/followup/pages/templates',
      title: '创建随访模版',
      method: 'POST',
      path: './node_dev/md/createFollowUpTemplatePages'
    },
    {
      url: '/api/nurses/followup/pages',
      title: '发起随访',
      method: 'POST',
      path: './node_dev/md/createFollowUp.md'
    },
    {
      url: 'api/nurses/msg/im/:fromId/to-user/:toId',
      title: '发起随访建立聊天',
      method: 'POST',
      path: './node_dev/md/p2p-chat.md'
    },
    {
      url: '/api/nurses/msg/push/client-infos',
      title: '连接客户端和用户',
      method: 'POST',
      path: './node_dev/md/createDeviceClient.md'
    },
    {
      url: '/api/nurses/:nurseId/colleagues',
      title: '获取所有同事',
      method: 'GET',
      path: './node_dev/md/allColleagues.md'
    },
    {
      url: '/api/nurses/:nurseId/patients',
      title: '获取所有患者',
      method: 'GET',
      path: './node_dev/md/allPatients.md'
    }
]