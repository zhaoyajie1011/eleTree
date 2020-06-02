
const tree = {
    "code": 0,
    "msg": "",
    "data": [
        {
            "label": "安徽省",
            "id": "001",
            "isOpen": true,
            // "checked": true,
            "children": [
                {
                    "label": "淮北市",
                    "id": "001001"
                },
                {
                    "label": "合肥市",
                    "id": "001003"
                },
                {
                    "label": "马鞍山市",
                    "id": "001002",
                    "disabled": true,
                    // "checked": true,
                    "children": [
                        {
                            "label": "花山区",
                            "id": "001002001",
                            "checked": true,
                            "children": [
                                {
                                    "label": "aaa",
                                    "id": "001002002001"
                                },
                                {
                                    "label": "bbb",
                                    "checked": true,
                                    "id": "001002002002",
                                },
                                {
                                    "label": "ccc",
                                    "id": "001002002003",
                                }
                            ]
                        },
                        {
                            "label": "雨山区",
                            "id": "001002002"
                        },
                        {
                            "label": "和县",
                            "id": "001002003"
                        }
                    ]
                }
            ]
        },
        {
            "label": "河南省",
            "id": "002"
        },
        {
            "label": "江苏省",
            "id": "003",
            "children": [
                {
                    "label": "苏州市",
                    "id": "003001"
                },
                {
                    "label": "南京市",
                    "id": "003002"
                }
            ],
            // "checked": true
        }
    ]
}

const data = {
    "code": 0,
    "msg": "",
    "data": []
}
let index = 0
for(let i=0;i<20;i++){
    index++
    data.data.push({
        "label": "aa"+i,
        "id": index,
        "children": [],
        "checked": true
    })
}
// data.data[0].children.push({
//     "label": "bb"+0,
//     "id": "bb"+0,
//     "children": [],
//     "checked": true
// })
// data.data[1].children.push({
//     "label": "bb"+1,
//     "id": "bb"+1,
//     "children": [],
//     "checked": true
// })
data.data.forEach((v)=>{
    for(let i=0;i<150;i++){
        index++
        v.children.push({
            "label": "bb"+i,
            "id": index,
            "children": [],
            "checked": index > 1000 ? true : false
        })
    }
})
module.exports = {
    'GET /api/tree': tree,
}