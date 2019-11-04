const state = {
    userName: "home",
    arryhotel: [ //酒店类型选项
        { value: '一星级',type:1 },
        { value: '二星级',type:2 },
        { value: '三星级',type:3 },
        { value: '四星级',type:4 },
        { value: '五星级',type:5 },
        { value: '快捷酒店',type:11 },
        //{value:'特色民宿'},
    ],
    arryrmb: [ //筛选价格
        { value: '200-以下',type:1 },
        { value: '200-300',type:2},
        { value: '300-500',type:3 },
        { value: '500-700',type:4 },
        { value: '700-900',type:5},
        { value: '900-1100',type:6 },
        { value: '1500-以上',type:7 },
    ],
};
const mutations = {
    
};
const actions = {

};
const getters = {
    startdate(state) {
        console.log(state.startdate + 1111)
    },
};

// 不要忘记把state, mutations等暴露出去。
export default {
    state,
    mutations,
    actions,
    getters
}