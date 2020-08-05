(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{397:function(t,v,_){"use strict";_.r(v);var e=_(43),d=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方法名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("on")]),t._v(" "),_("td",[t._v("事件回调")]),t._v(" "),_("td",[t._v("(type, callback)1.事件名，2.触发事件时的回调函数；"),_("a",{attrs:{href:"/eleTree/usedocs-event"}},[t._v("查看更多")])])]),t._v(" "),_("tr",[_("td",[t._v("getChecked")]),t._v(" "),_("td",[t._v("获取复选框选中的节点信息")]),t._v(" "),_("td",[t._v("(leafOnly, includeHalfChecked)1.是否只选中叶子节点，默认false，2.是否包括半选节点，默认false")])]),t._v(" "),_("tr",[_("td",[t._v("setChecked")]),t._v(" "),_("td",[t._v("设置复选框选中的节点")]),t._v(" "),_("td",[t._v("(checkArr, isUnCheckAll)1.设置选中项数组，2.是否先清空原有的选中项，默认true")])]),t._v(" "),_("tr",[_("td",[t._v("unChecked")]),t._v(" "),_("td",[t._v("取消复选框选中的节点")]),t._v(" "),_("td",[t._v("(unCheckArr)1.取消选中的节点数组；不传参数则默认清空所有选中项；")])]),t._v(" "),_("tr",[_("td",[t._v("getRadioChecked")]),t._v(" "),_("td",[t._v("获取单选框选中的节点信息")]),t._v(" "),_("td",[t._v("—")])]),t._v(" "),_("tr",[_("td",[t._v("setRadioChecked")]),t._v(" "),_("td",[t._v("设置单选框选中的节点")]),t._v(" "),_("td",[t._v("(checkArr, isUnCheckAll)1.设置选中项数组，2.是否先清空原有的选中项，默认true")])]),t._v(" "),_("tr",[_("td",[t._v("unRadioChecked")]),t._v(" "),_("td",[t._v("取消单选框选中的节点")]),t._v(" "),_("td",[t._v("(unCheckArr)1.取消选中的节点数组；不传参数则默认清空所有选中项")])]),t._v(" "),_("tr",[_("td",[t._v("expandAll")]),t._v(" "),_("td",[t._v("展开所有节点")]),t._v(" "),_("td",[t._v("—")])]),t._v(" "),_("tr",[_("td",[t._v("unExpandAll")]),t._v(" "),_("td",[t._v("合并所有节点")]),t._v(" "),_("td",[t._v("—")])]),t._v(" "),_("tr",[_("td",[t._v("append")]),t._v(" "),_("td",[t._v("添加子节点("),_("span",{staticStyle:{color:"#ff4200"}},[t._v("有两种格式")]),t._v(")")]),t._v(" "),_("td",[t._v("A. (id, array/object)1.查找需要添加的节点id，2.添加的子节点数据数组；id传null或空字符串则会添加到根节点"),_("br"),t._v("B. (array/object)只传一个array/object参数则代表传入的为pid格式的数据，即在节点pid下添加子节点")])]),t._v(" "),_("tr",[_("td",[t._v("updateKeySelf")]),t._v(" "),_("td",[t._v("更新当前节点数据或移动某些节点("),_("span",{staticStyle:{color:"#ff4200"}},[t._v("有两种格式")]),t._v(")")]),t._v(" "),_("td",[t._v("A. (id, object)1.查找需要修改的节点id，2.需要修改的数据"),_("br"),t._v("B. (array/object)只传一个array/object参数则代表传入的为pid格式的数据，即修改id的数据，如果pid改变，则代表移动节点")])]),t._v(" "),_("tr",[_("td",[t._v("remove")]),t._v(" "),_("td",[t._v("删除节点数据")]),t._v(" "),_("td",[t._v("(removeArr)1.需要删除的节点id数组(可以移除多个节点)")])]),t._v(" "),_("tr",[_("td",[t._v("insert")]),t._v(" "),_("td",[t._v("在某个节点前后插入数据")]),t._v(" "),_("td",[t._v("(id, array/object, type)1.查找需要添加的节点id，2.需要添加节点数据数组，3.类型，在当前节点前插入还是节点后插入，可选参数('before','after')，默认节点前")])]),t._v(" "),_("tr",[_("td",[t._v("reload")]),t._v(" "),_("td",[t._v("重新渲染树节点")]),t._v(" "),_("td",[t._v("(options)1.传入object，参数初始参数一致")])]),t._v(" "),_("tr",[_("td",[t._v("search")]),t._v(" "),_("td",[t._v("搜索树节点")]),t._v(" "),_("td",[t._v("(value, callback)1.需要搜索的文本信息，2. 传入的搜索条件，函数返回值为true则显示该节点；"),_("a",{attrs:{href:"/eleTree/demo-search"}},[t._v("查看更多")])])]),t._v(" "),_("tr",[_("td",[t._v("getAllNodeData")]),t._v(" "),_("td",[t._v("获取所有节点数据")]),t._v(" "),_("td",[t._v("('c'/'p') 传入字符串'c'则返回的数据结构为父子结构，传入字符串'p'则返回pid格式的数据，默认为'c'")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);