import{i as F,r as O}from"./index-BKDa5yQP.js";import{_ as H,o as T,z as s,M as V,q as g,c as y,a as u,F as q,r as R,n as _,s as D,f as k,i as G,k as I,p as i,N as J}from"./index-aVP_SiYV.js";const U={key:0,class:"map-legend"},Y={class:"map-tip"},K={__name:"EchartMap",props:{level:{type:String,default:"shangqiu"},adcode:{type:String,default:""},metrics:{type:Array,default:()=>[]},metric:{type:String,default:"annual_output"},mode:{type:String,default:"metric"},height:{type:String,default:"560px"}},emits:["select"],setup(x,{emit:z}){const a=x,S=z,c=I(null),m=new Set;let n=null,d=null;const r=i(()=>a.mode==="warning"),C=[{key:"severe",label:"严重过剩",color:"#b0837f"},{key:"critical",label:"供应偏紧",color:"#c9a184"},{key:"monitor",label:"价格异动",color:"#cbbb92"},{key:"normal",label:"运行正常",color:"#92a69b"},{key:"unknown",label:"暂无数据",color:"#b6b0a4"}],f=i(()=>a.level==="henan"?"henan":a.level==="city"?`city_${a.adcode}`:"shangqiu"),b=i(()=>{const e={};return a.metrics.forEach(t=>{e[t.name]=t}),e}),h=i(()=>a.level==="henan"?"占全省比重":"占全市比重"),$=i(()=>a.level==="henan"?"点击查看该市特产 →":"点击查看该区县特产 →"),E=i(()=>a.metric==="planting_area"?"种植面积":a.metric==="ratio"?h.value:"年产量");function N(e){const t=b.value[e];if(!t)return`<b>${e}</b><br/><span style="color:#98937f">暂无收录</span>`;const o=(t.products||[]).slice(0,3).map(l=>`<div style="display:flex;justify-content:space-between;gap:14px;font-size:12px;color:#6d6a5f">
           <span>${l.name}</span><span>${Number(l.annual_output).toLocaleString()} 吨</span>
         </div>`).join("");return`
    <div style="min-width:190px">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
        <span style="width:6px;height:6px;border-radius:50%;background:#a9502f"></span>
        <b style="font-size:14px;color:#2a2a24">${t.name}</b>
        <span style="font-size:11px;color:#98937f">${t.adcode}</span>
      </div>
      <div style="font-size:12px;color:#7d7869;margin-bottom:6px">主特产：${t.product||"暂未收录"}</div>
      <div style="font-size:12px;color:#2a2a24">年产量：${Number(t.annual_output).toLocaleString()} 吨</div>
      <div style="font-size:12px;color:#2a2a24">种植面积：${Number(t.planting_area).toLocaleString()} 亩</div>
      <div style="font-size:12px;color:#2a2a24">${h.value}：${Number(t.ratio).toFixed(2)}%</div>
      <div style="font-size:12px;color:#2a2a24">主特产本地占比：${Number(t.local_ratio||0)}%</div>
      ${o?`<div style="border-top:1px dashed #e6ddc8;margin-top:6px;padding-top:6px">${o}</div>`:""}
      <div style="margin-top:6px;font-size:11px;color:#98937f">${$.value}</div>
    </div>`}function B(e){const t=b.value[e];if(!t)return`<b>${e}</b><br/><span style="color:#98937f">暂无预警数据</span>`;const o=t.counts||{},l=t.warning_color||"#98937f";return`
    <div style="min-width:180px">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
        <span style="width:8px;height:8px;border-radius:50%;background:${l}"></span>
        <b style="font-size:14px;color:#2a2a24">${t.name}</b>
      </div>
      <div style="font-size:12px;color:${l};font-weight:600;margin-bottom:4px">
        ${t.warning_label||"暂无数据"}
      </div>
      <div style="font-size:12px;color:#2a2a24">监测产品：${t.product_count??0} 个</div>
      <div style="font-size:12px;color:#6d6a5f">
        过剩 ${o.severe||0} · 偏紧 ${o.critical||0} · 异动 ${o.monitor||0}
      </div>
      <div style="font-size:12px;color:#6d6a5f">
        正常 ${o.normal||0} · 缺数据 ${o.unknown||0}
      </div>
      <div style="margin-top:6px;font-size:11px;color:#98937f">${$.value}</div>
    </div>`}async function w(){const e=f.value;if(m.has(e))return;const t="/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F/",o=a.level==="city"?`${t.replace(/\/$/,"")}/geojson/cities/${a.adcode}.json`:`${t.replace(/\/$/,"")}/geojson/${e}.json`,l=await fetch(o);if(!l.ok)throw new Error(`GeoJSON 加载失败：${o}`);const A=await l.json();O(e,A),m.add(e)}const M=i(()=>a.metrics.map(e=>Number(e[a.metric]||0))),W=i(()=>Math.max(1,...M.value));function L(){return{backgroundColor:"transparent",tooltip:{trigger:"item",backgroundColor:"rgba(255,253,248,0.97)",borderColor:"rgba(169,80,47,0.22)",borderWidth:1,padding:[10,12],extraCssText:"border-radius:12px;box-shadow:0 12px 30px rgba(76,88,60,.14);",formatter:e=>r.value?B(e.name):N(e.name)},...r.value?{}:{visualMap:{type:"continuous",min:0,max:W.value,left:16,bottom:12,itemWidth:12,itemHeight:90,text:["高","低"],textStyle:{color:"#8b867a",fontSize:11},inRange:{color:["#f4efe6","#e7dfd0","#d5c9b4","#b9ae9b","#948b7b"]},formatter:e=>a.metric==="ratio"?`${Number(e).toFixed(0)}%`:`${Math.round(e/1e3)}k`}},series:[{type:"map",map:f.value,roam:!0,scaleLimit:{min:.9,max:4},zoom:a.level==="henan"?1.12:1.18,layoutCenter:["50%","51%"],layoutSize:"92%",selectedMode:"single",label:{show:r.value||a.level!=="henan",color:r.value?"#3f3b34":"#4a473c",fontSize:11,textBorderColor:r.value?"rgba(255,253,248,0.9)":"transparent",textBorderWidth:r.value?2:0},itemStyle:{areaColor:"#efe9dd",borderColor:"rgba(255,253,248,0.95)",borderWidth:1.2,shadowColor:"rgba(76,88,60,0.16)",shadowBlur:10,shadowOffsetY:4},emphasis:r.value?{label:{color:"#2f2c26",fontWeight:600},itemStyle:{borderColor:"#fffdf6",borderWidth:1.8}}:{label:{color:"#fffdf6",fontWeight:600},itemStyle:{areaColor:"#8ea297",borderColor:"#f7efdc",borderWidth:1.6}},select:r.value?{label:{color:"#2f2c26",fontWeight:600}}:{label:{color:"#fffdf6"},itemStyle:{areaColor:"#6f8479"}},data:a.metrics.map(e=>r.value?{name:e.name,value:1,itemStyle:{areaColor:e.warning_color||"#b6b0a4"}}:{name:e.name,value:Number(e[a.metric]||0)})}]}}function p(){n&&m.has(f.value)&&n.setOption(L(),!0)}async function v(){await w(),p()}async function j(){await w(),c.value&&(n=F(c.value,null,{renderer:"canvas"}),n.on("click",e=>{const t=b.value[e.name];t&&S("select",t)}),p(),d=new ResizeObserver(()=>n&&n.resize()),d.observe(c.value))}return T(()=>J(j)),s(()=>a.metric,()=>p()),s(()=>a.mode,()=>p()),s(()=>a.level,()=>v()),s(()=>a.adcode,()=>v()),s(()=>a.metrics,()=>v(),{deep:!0}),V(()=>{d&&d.disconnect(),n&&n.dispose(),n=null}),(e,t)=>(g(),y("div",{class:"map-wrap",style:_({height:x.height})},[u("div",{ref_key:"mapEl",ref:c,class:"map-canvas"},null,512),r.value?(g(),y("div",U,[(g(),y(q,null,R(C,o=>u("span",{key:o.key},[u("i",{style:_({background:o.color})},null,4),D(k(o.label),1)])),64))])):G("",!0),u("div",Y,k(r.value?"着色：预警五色分级":`当前指标：${E.value}`)+" · 数据为示例模拟值 ",1)],4))}},X=H(K,[["__scopeId","data-v-c2bc8bd8"]]);export{X as E};
