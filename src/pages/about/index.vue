<template>
  <div
    class="py-10 text-sm leading-6 space-y-10 text-gray-600 text-center bg-no-repeat bg-cover"
  >
    <div class="space-y-4">
      <img
        class="border-4 border-primary rounded-full object-top mx-auto w-32 h-32 object-cover overflow-hidden"
        :src="avatar"
        alt=""
      />
      <h3 class="text-2xl font-bold text-black">孔庆志</h3>
      <p>生命不息，进步不止！</p>
      <ul class="md:space-x-8 space-x-2 flex flex-wrap justify-center">
        <li class="bg-[#00000010] mt-2 rounded-full px-6 py-0.5">00 后</li>
        <li class="bg-[#00000010] mt-2 rounded-full px-6 py-0.5">前端</li>
        <li class="bg-[#00000010] mt-2 rounded-full px-6 py-0.5">摄影</li>
        <li class="bg-[#00000010] mt-2 rounded-full px-6 py-0.5">做饭</li>
        <li class="bg-[#00000010] mt-2 rounded-full px-6 py-0.5">书法</li>
      </ul>
    </div>

    <div class="space-y-4">
      <h3 class="text-2xl font-bold text-black">技能点</h3>
      <div class="mx-auto space-y-2 2xl:px-96 xl:px-72 lg:px-40 text-left">
        <p>
          · 熟练掌握HTML5、CSS3，擅长响应式页面布局，熟练使用 Sass预编译器。
        </p>
        <p>
          ·
          熟悉JavaScript、ES6高级语法、Promise、闭包及原生的DOM和BOM操作，熟练使用
          jQuery库。
        </p>
        <p>
          · 熟练使用Element-Plus、Ant-Design、Bootstrap、Layui 等前端UI框架。
        </p>
        <p>
          · 熟悉Vue.js，熟练使用
          Vite、Vuex、Vue-cli、Vue-Router等，具备组件化思维。
        </p>
        <p>
          · 熟悉微信小程序开发，熟练使用 vant-weapp、first-ui
          库，可独立完成小程序项目。
        </p>
        <p>
          · 熟悉Ajax 原生网络请求和 Axios.js 技术，熟悉 CORS、JSONP、Proxy
          等跨域技术。
        </p>
        <p>· 熟悉Node.js后端语言，熟练使用Egg.js框架进行后端开发。</p>
        <p>
          ·
          熟悉TypeScript语言，熟悉元组、枚举、接口、泛型、类型断言、类、面向对象编程等。
        </p>
        <p>· 熟练使用npm包管理工具、webpack打包工具、git代码仓库管理工具。</p>
        <p>· 熟悉MySQL数据库，能够实现对数据的基本管理。</p>
        <p>· 了解网络通信协议、状态码、三次握手等基本网络知识。</p>
      </div>
    </div>

    <div class="space-y-4">
      <h3 class="text-2xl font-bold text-black">开发</h3>
      <ul class="md:space-x-8 space-x-2 flex flex-wrap justify-center">
        <li class="bg-[#00000010] mt-2 rounded-full px-6 py-0.5">Web 网站</li>
        <li class="bg-[#00000010] mt-2 rounded-full px-6 py-0.5">微信小程序</li>
        <li class="bg-[#00000010] mt-2 rounded-full px-6 py-0.5">App</li>
        <li class="bg-[#00000010] mt-2 rounded-full px-6 py-0.5">浏览器扩展</li>
      </ul>
    </div>

    <div class="space-y-4">
      <h3 class="text-2xl font-bold text-black">所获荣誉</h3>
      <div class="mx-auto 2xl:px-96 xl:px-72 lg:px-40 text-left">
        <p>
          · 2022 年
          以第一作者的身份在核心期刊发表论文《人脸识别预警消毒机器人的设计及应用》
        </p>
        <p>· 2022 年 获得第一届“徕卡杯”贵州省金相技能大赛三等奖</p>
        <p>· 2022 年 获得“互联网+”大赛银奖</p>
        <p>· 2022 年 获得校级一等奖学金</p>
        <p>· 2022 年 获得校级三好学生</p>
        <p>· 2021 年 确立大学生创新创业竞赛省级项目</p>
        <p>· 2021 年 获得校级三等奖学金</p>
        <p>· 2021 年 获得校级三好学生</p>
        <p>
          · 2020 年 获得第十一届“蓝桥杯”全国大学生软件信息专业人才大赛省级三等奖
        </p>
        <p>· 2020 年 获得校级优秀共青团干部</p>
        <p>· 2019 年 获得校级优秀共青团员</p>
      </div>
    </div>
    <div class="space-y-4">
      <h3 class="text-2xl font-bold text-black">关于我</h3>
      <p class="mx-auto 2xl:px-96 xl:px-72 lg:px-40 text-left">
        本人乐观开朗，适应能力强。有良好的设计和编码品味，并且热爱写代码。具备良好的沟通能力和高度的团队合
        作意识，能快速融入团队。学习能力好，喜欢钻研，有着强烈的责任心，能保持不断进取的精神，有高度的执行力。
      </p>
    </div>

    <div class="space-y-4">
      <h3 class="text-2xl font-bold text-black">联系我</h3>
      <ul
        class="mx-auto 2xl:px-96 xl:px-72 flex-wrap lg:px-40 sm:grid grid-cols-2"
      >
        <li>Tel: 15653754746</li>
        <li>WeChat: 15653754746</li>
        <li>QQ: 1428390162</li>
        <li>Email: kongqingzhi31@163.com</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar from '@/assets/about/avatar.jpg';
defineOptions({ name: 'AboutPage' });
</script>
