import Mock from 'mockjs';

const activity = Mock.mock(
    '/api/activity', 'get', (req, res) => {
        return {
            code: 200,
            data: [{
                id: 1,
                title: '首次合作商家活动',
                text1: '首次合作商家首次充值对应订单按照9折结算；',
                text2: '【例如】如充值10000元，订单单价60元/单，结算按照54元/单收取。此结算优惠在10000元额度内有效；'
            }, {
                id: 2,
                title: '老客户介绍商家合作感恩',
                text1: '介绍商家合作老客户，享受接下来3次充值9.5折；',
                text2: '【例如】如充值100000元，订单单价为54元/单，结算按照51.3元/单。此结算优惠在100000元额度内有效；'
            }],
            message: '查询成功'
        }
    })

const sevenStar = Mock.mock(
    '/api/sevenStar', 'get', (req, res) => {
        return {
            code: 200,
            data: {

            },
            message: '查询成功'
        }
    })

const special = Mock.mock(
    '/api/special', 'get', (req, res) => {
        return {
            code: 200,
            data: {

            },
            message: '查询成功'
        }
    })

const admission = Mock.mock(
    '/api/admission', 'get', (req, res) => {
        return {
            code: 200,
            data: {
                id: 1,
                title: '网点（师傅）入驻条件：',
                text1: '遵守并执行核心要求：“为卖家赚好评！”',
                text2: '九州联保平台上所有人的一切工作，行动都以此开展，遵守并执行。',
                text3: '需认同：检验和改善一切制度、流程、方法、激励等方法都以此为依据！'
            },
            message: '查询成功'
        }
    })

const information = Mock.mock(
    '/api/information', 'get', (req, res) => {
        return {
            code: 200,
            data: {

            },
            message: '查询成功'
        }
    })

const redLines = Mock.mock(
    '/api/redLines', 'get', (req, res) => {
        return {
            code: 200,
            data: [{
                id: 1,
                title: '管理红线，触犯重罚或解除合作',
                text1: '1、“诋毁服务品牌”；2、“诱导用户退换货”； 3、“与用户争吵、肢体冲突”；',
                text2: '4、“滋扰、威胁用户”；5、“违反安装/维修条例，造成重大隐患”；6、“虚假、伪造安装/维修单”；',
                text3: '7、“上门服务中违反法律”；8、“造成甲方重大名誉损失、赔偿等损害甲方利益的行为”'
            },
            {
                id: 2,
                title: '师傅被降低服务分或被处罚的项目',
                text1: '1、“乙方接单未在20分钟内联系好用户”；2、“未经用户同意改约或延迟上门”；',
                text2: '3、“多次改期或未按约定时间上门的”；4、“未按照产品安装/维修要求操作”；',
                text3: '5、“错漏申请配件造成投诉的”6、“未按要求返件的”；7、“拒/退/毁单的”'
            }],
            message: '查询成功'
        }
    })

const wechat = Mock.mock(
    '/api/wechat', 'get', (req, res) => {
        return {
            code: 200,
            data: {

            },
            message: '查询成功'
        }
    })

const share = Mock.mock(
    '/api/share', 'get', (req, res) => {
        return {
            code: 200,
            data: {

            },
            message: '查询成功'
        }
    })
    
const resources = Mock.mock(
    '/api/resources', 'get', (req, res) => {
        return {
            code: 200,
            data: {

            },
            message: '查询成功'
        }
    })

const express = Mock.mock(
    '/api/express', 'get', (req, res) => {
        return {
            code: 200,
            data: {

            },
            message: '查询成功'
        }
    })

const introduce = Mock.mock(
    '/api/introduce', 'get', (req, res) => {
        return {
            code: 200,
            data: {
                id: 1,
                title: '关于九州联保',
                text1: '广东顺德九州联合报修服务有限公司(简称九州联保)是互联网平台科技公司，以承接企业安装、维修工单为主营业务，服务能力遍及全国。”',
                text2: '目前主营品类：厨电、净水、家居、五金、卫浴、空调，重点服务100多家品牌企业。公司与苏宁云商集团、天猫、京东等平台公司长期保持优秀合作关系'
            },
            message: '查询成功'
        }
    })

const joinIn = Mock.mock(
    '/api/joinIn', 'get', (req, res) => {
        return {
            code: 200,
            data: [{
                id: 1,
                occupation: '销售精英',
                category: '',
                place: '',
                number: '',
                time: ''
            }, {
                id: 2,
                occupation: '客服',
                category: '',
                place: '',
                number: '',
                time: ''
            }, {
                id: 3,
                occupation: '主管',
                category: '',
                place: '',
                number: '',
                time: ''
            }],
            message: '查询成功'
        }
    })

const contact = Mock.mock(
    '/api/contact', 'get', (req, res) => {
        return {
            code: 200,
            data: {
                id: 1,
                phone: '0757-29292111'
            },
            message: '查询成功'
        }
    })

export default { activity, sevenStar, special, admission, information, redLines, wechat, share, resources, express, introduce, joinIn, contact }