(function(){"use strict";var t={5068:function(t,n,e){var o=e(9242),l=e(3396),a=e.p+"img/couple.b1e908eb.png";const i={class:"testApp"},u=(0,l._)("img",{src:a,style:{width:"220px"}},null,-1),r=(0,l._)("h1",null,"👬썸녀 테스트💗",-1),s=(0,l._)("p",null,'"이 여자가 나의 연인이 될 수 있는 썸녀일까?"',-1),p=(0,l._)("hr",{style:{"margin-left":"50px","margin-right":"50px","margin-bottom":"20px"}},null,-1);function c(t,n,e,o,a,c){const d=(0,l.up)("MainCompoent"),g=(0,l.up)("TestComponent"),b=(0,l.up)("ResultComponent");return(0,l.wg)(),(0,l.iD)("div",i,[u,r,s,p,0==a.page?((0,l.wg)(),(0,l.j4)(d,{key:0,page:a.page,onChangePage:n[0]||(n[0]=t=>a.page=1)},null,8,["page"])):(0,l.kq)("",!0),1==a.page?((0,l.wg)(),(0,l.j4)(g,{key:1,page:a.page,questionList:a.questionList,onChangePage:n[1]||(n[1]=t=>a.page=2),onQuestionAdd:c.questionAdd},null,8,["page","questionList","onQuestionAdd"])):(0,l.kq)("",!0),2==a.page?((0,l.wg)(),(0,l.j4)(b,{key:2,page:a.page,total:a.total,onChangePage:n[2]||(n[2]=t=>{a.page=0,a.question=[],a.total=0})},null,8,["page","total"])):(0,l.kq)("",!0)])}e(7658);const d=(0,l._)("br",null,null,-1),g=(0,l._)("input",{type:"text",id:"text",value:"https://colabear92.github.io/somegirl",style:{display:"none"}},null,-1),b=(0,l._)("br",null,null,-1),k=(0,l._)("a",{style:{"text-decoration":"none",color:"black"},href:"https://colabear92.github.io/"},[(0,l._)("button",{class:"main-button"},"다른 테스트도 하고싶다면?")],-1);function m(t,n,e,o,a,i){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("button",{onClick:n[0]||(n[0]=n=>t.$emit("changePage",1)),class:"main-button"},"테스트 시작하기"),d,(0,l._)("button",{class:"kakao-share",onClick:n[1]||(n[1]=(...t)=>i.kakaoShare&&i.kakaoShare(...t))},"카카오공유"),(0,l.Uk)("  "),g,(0,l._)("button",{class:"main-button",onClick:n[2]||(n[2]=(...t)=>i.urlCopy&&i.urlCopy(...t))},"🔗링크 복사"),b,k])}var h={name:"MainComponent",props:{page:Number},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93332,installTalk:!0})},urlCopy(){var t=document.getElementById("text");t.style.display="block",t.select(),document.execCommand("copy"),t.style.display="none",alert("url이 복사 되었습니다.")}}},f=e(89);const y=(0,f.Z)(h,[["render",m]]);var q=y,_=e(7139);const v={key:0},w={key:0},C={style:{"font-size":"120%"}},x=(0,l._)("br",null,null,-1),P=(0,l._)("br",null,null,-1);function D(t,n,e,o,a,i){return(0,l.wg)(),(0,l.iD)("div",null,[a.questionPage<16?((0,l.wg)(),(0,l.iD)("div",v,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.questionList,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e},[a.questionPage===e.id+1?((0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("h2",null,(0,_.zw)(a.questionPage)+"/15",1),(0,l._)("strong",C,(0,_.zw)(e.q),1),x,P,(0,l._)("div",{class:"qbox",onClick:n[0]||(n[0]=n=>{t.$emit("questionAdd",1),i.nextQuestion()})},(0,_.zw)(e.a),1),(0,l._)("div",{class:"qbox",onClick:n[1]||(n[1]=n=>{t.$emit("questionAdd",0),i.nextQuestion()})},(0,_.zw)(e.b),1)])):(0,l.kq)("",!0)])))),128))])):(0,l.kq)("",!0),16==a.questionPage?((0,l.wg)(),(0,l.iD)("button",{key:1,class:"main-button",onClick:n[2]||(n[2]=n=>t.$emit("changePage",2))},"테스트 결과 보러가기")):(0,l.kq)("",!0)])}var O={name:"TestComponent",props:{page:Number,question:Array,questionList:Object},data(){return{questionPage:1}},methods:{nextQuestion(){this.questionPage<16&&(this.questionPage+=1)}}};const j=(0,f.Z)(O,[["render",D]]);var A=j;const S={key:0},T=(0,l._)("h3",null,"[연인이상💏]",-1),L=(0,l._)("p",null,'"사귀고있는 사람도 이정도는 아닐껄요?"',-1),z=(0,l._)("p",null,"이미 당신만 사귀고 있는걸 부정하고 있는걸 수 도 있어요. 진취적으로 사귀자고 말해보거나 고백을 이끌어 보세요 알고리즘은 이미 95%이상 연인으로 보고 있습니다. 이 말을 하고 있는 저 조차 현기증이 나네요 ",-1),Q=[T,L,z],$={key:1},I=(0,l._)("h3",null,"[시간문제💑]",-1),K=(0,l._)("p",null,'"얼마 지나지 않아 사귀지 않을까요?"',-1),M=(0,l._)("p",null,"본인들만 부정하고 주변에선 이미 사귀는 사이라고 생각하고 있을거에요 알고리즘도 곧 사귈거 같다고 얘기하는데... 좀더 강수를 둬보는건 어떠세요? 아니면 남자답게 고백준비를 해봅시다. ",-1),N=[I,K,M],Z={key:2},E=(0,l._)("h3",null,"[당신 하기에 달린듯🤟]",-1),R=(0,l._)("p",null,'"관심있다면 좀더 먼저다가가 보는건 어떨까요?"',-1),B=(0,l._)("p",null,'상대방이 다가오기만을 기다리고 있다면 당신은... "하남자" 그러지말고 "상남자"처럼 그 사람을 쟁취해 봅시다. ',-1),U=[E,R,B],F={key:3},H=(0,l._)("h3",null,"[😂조금은 가능성이 있을지도..?]",-1),Y=(0,l._)("p",null,'"그냥 친절한 사람일 수 도 있어요"',-1),G=(0,l._)("p",null,"그 사람이 착한 사람이면 당신말고 다른 사람에게도 이럴 수 있어요 아니면 여러명이랑 이러고 있을 수도 있답니다. 여자들이란... 남자보다 무서운 분들이라 당신을 후순위로 두고 있을 수 도 있답니다. ",-1),J=[H,Y,G],V={key:4},W=(0,l._)("h3",null,"[혼자만 썸녀로 착각하는듯🙄]",-1),X=(0,l._)("p",null,'"이 테스트는 굳이 왜하셨어요..?"',-1),tt=(0,l._)("p",null,"안타깝지만 알고리즘 계산결과 썸녀일 확률이 매우 낮습니다. 어쩌면 내가 누군가를 좋아 한다는 사실이... 그 사람에게는 상처일 수 도 있어요 ",-1),nt=[W,X,tt],et=(0,l._)("br",null,null,-1),ot=(0,l._)("hr",{style:{"margin-left":"50px","margin-right":"50px"}},null,-1),lt=(0,l._)("br",null,null,-1),at=(0,l._)("strong",null,'"썸남,썸녀 테스트(심화)편도 기대해 주세요"',-1),it=(0,l._)("p",null,'"다른 사람에게도 추천해 주고 싶다면?"',-1),ut=(0,l._)("input",{type:"text",id:"text",value:"https://colabear92.github.io/somegirl",style:{display:"none"}},null,-1),rt=(0,l._)("br",null,null,-1),st=(0,l._)("a",{style:{"text-decoration":"none",color:"black"},href:"https://colabear92.github.io/"},[(0,l._)("button",{class:"main-button"},"다른 테스트도 하고싶다면?")],-1);function pt(t,n,e,o,a,i){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",null,[14==e.total||15==e.total?((0,l.wg)(),(0,l.iD)("div",S,Q)):(0,l.kq)("",!0),e.total>=11&&e.total<=13?((0,l.wg)(),(0,l.iD)("div",$,N)):(0,l.kq)("",!0),e.total>=8&&e.total<=10?((0,l.wg)(),(0,l.iD)("div",Z,U)):(0,l.kq)("",!0),e.total>=5&&e.total<=7?((0,l.wg)(),(0,l.iD)("div",F,J)):(0,l.kq)("",!0),e.total<5?((0,l.wg)(),(0,l.iD)("div",V,nt)):(0,l.kq)("",!0)]),et,(0,l._)("button",{class:"main-button",onClick:n[0]||(n[0]=n=>t.$emit("changePage",0))},"테스트 다시 하기"),ot,lt,at,it,(0,l._)("button",{class:"kakao-share",onClick:n[1]||(n[1]=(...t)=>i.kakaoShare&&i.kakaoShare(...t))},"카카오 공유"),(0,l.Uk)("  "),ut,(0,l._)("button",{class:"main-button",onClick:n[2]||(n[2]=(...t)=>i.urlCopy&&i.urlCopy(...t))},"🔗링크 복사"),rt,st])}var ct={data(){return{testurl:"dd"}},name:"ResultComponent",props:{page:Number,total:Number},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93332,installTalk:!0})},urlCopy(){var t=document.getElementById("text");t.style.display="block",t.select(),document.execCommand("copy"),t.style.display="none",alert("url이 복사 되었습니다.")}}};const dt=(0,f.Z)(ct,[["render",pt]]);var gt=dt,bt=[{a:"약속을 잡으면 거절하지 않는다.",b:"그날 항상 무슨 일이 있다고 한다.",q:"약속은 잘 잡으시나요?",id:0},{a:"먼저 연락 하는 경우가 있다.",b:"대부분 내가 먼저 연락한다.",q:"연락은 보통 누가먼저 하나요?",id:1},{a:"항상 나에게 웃어주고 리액션이 크다.",b:"그냥 무덤덤한 사람이라고 느껴진다.",q:"대화할때 그녀의 리액션은?",id:2},{a:"함께 걸을 때 붙어서 걷는 느낌이 든다.",b:"거리를 두고 걷는다.",q:"같이 길을 걸으면 거리는 어떤가요? ",id:3},{a:"내가 했던 말을 잘 기억한다.",b:"기억력이 그다지 좋아보이지 않는다.",q:"그녀는 내 이야기를 잘 기억하나요?",id:4},{a:"장난으로나마 스킨십을 해보았다.",b:"딱히 스킨십이랄 것도 없었다.",q:"그녀와 스킨십을 해보셨어요?",id:5},{a:"나에게 왜 연애 안하냐고 물어본적이 있다.",b:"서로 연애 얘기를 하지 않는다.",q:"연애 이야기를 해보셨어요?",id:6},{a:"내 연락에 답장이 대부분 빠른 편이다.",b:"연락해도 다음날에도 잘 오지 않는다.",q:"연락에 답장하는 속도는 어떤가요?",id:7},{a:"지금 내가 전화하면 바로 받을 것이다.",b:"갑자기 전화하기 조금 무섭다.",q:"만약 지금 그녀에게 전화를 건다면?",id:8},{a:"본인의 일상을 먼저 종종 이야기한다.",b:"내가 먼저 질문하지 않으면 하지 않는다.",q:"그녀는 본인의 일상 이야기를 하나요?",id:9},{a:"나중에 같이하기로 약속한게 있다.",b:"딱히 같이 하기로한게 없다.",q:"나중에 같이하기로 한게 있나요?",id:10},{a:"단 둘이 영화관에 간적이 있다.",b:"단둘은 아니거나 간적이 없다.",q:"영화관은 같이 가보셨어요?",id:11},{a:"노력하지 않아도 딱히 대화가 끊기지 않는다.",b:"내가 애써야만 대화가 이어진다.",q:"대화하는게 편안한가요?",id:12},{a:"나의 일과나 일상에 대해 질문을 가끔 받는다.",b:"나에게 그다지 궁금한게 없는거 같다.",q:"질문은 자주 받아요?",id:13},{a:"나에게 먼저 약속을 제안한적이 있다.",b:"보통 내가 먼저 약속을 잡았다.",q:"그녀가 약속을 제안한 적이 있나요?",id:14}],kt={name:"App",components:{MainCompoent:q,TestComponent:A,ResultComponent:gt},data(){return{page:0,question:[],questionList:bt,total:0}},methods:{questionAdd(t){this.question.push(t),this.total+=t}}};const mt=(0,f.Z)(kt,[["render",c]]);var ht=mt;const ft="209c456b2f3b684bc24777dea9e2b7ee";window.Kakao.init(ft),(0,o.ri)(ht).mount("#app")}},n={};function e(o){var l=n[o];if(void 0!==l)return l.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,l,a){if(!o){var i=1/0;for(p=0;p<t.length;p++){o=t[p][0],l=t[p][1],a=t[p][2];for(var u=!0,r=0;r<o.length;r++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[r])}))?o.splice(r--,1):(u=!1,a<i&&(i=a));if(u){t.splice(p--,1);var s=l();void 0!==s&&(n=s)}}return n}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[o,l,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/somegirl/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var l,a,i=o[0],u=o[1],r=o[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(l in u)e.o(u,l)&&(e.m[l]=u[l]);if(r)var p=r(e)}for(n&&n(o);s<i.length;s++)a=i[s],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(p)},o=self["webpackChunkbasic"]=self["webpackChunkbasic"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(5068)}));o=e.O(o)})();
//# sourceMappingURL=app.367566d5.js.map