<template>
  <div id="log-join">
    <!-- 登录界面 -->
    <div id="login" class="login" v-if="show==='login'">
      <h2>用户登录</h2>
      <form method="post">
        <div class="input-group">
          <label>用户名：</label>
          <input
            type="text"
            v-model="loginDate.name"
            minlength="3"
            maxlength="15"
            required
            title="请输入3~15个字符"
          />
        </div>
        <div class="input-group">
          <label>密码：</label>
          <input
            type="password"
            v-model="loginDate.passWord"
            minlength="6"
            maxlength="20"
            required
            title="请输入6~20个字符"
          />
        </div>
        <input type="submit" value="登录" />
      </form>
      <div class="other-link">
        <a v-on:click="changeShow('getpassword')">忘记密码</a>
        <a v-on:click="changeShow('join')">免费注册</a>
      </div>
    </div>
    <!-- 注册界面 -->
    <div id="join" class="join" v-if="show==='join'">
      <h2>用户注册</h2>
      <form>
        <div class="input-group">
          <label>用户名：</label>
          <input
            type="text"
            v-model="joinDate.name"
            minlength="3"
            maxlength="15"
            required
            title="请输入3~15个字符"
          />
        </div>
        <div class="input-group">
          <label>密码：</label>
          <input
            type="password"
            v-model="joinDate.passWord1"
            minlength="6"
            maxlength="20"
            required
            title="请输入6~20个字符"
          />
        </div>
        <div class="input-group">
          <label>密码确认：</label>
          <input
            type="password"
            v-model="joinDate.passWord2"
            minlength="6"
            maxlength="20"
            required
            title="请输入6~20个字符"
          />
        </div>
        <div class="input-group">
          <label>邮箱：</label>
          <input
            type="email"
            v-model="joinDate.mail"
            required
            pattern="\S+@\S+.\S+"
            title="请输入邮箱xxx@xxx.xx，不允许有空格"
          />
        </div>
        <div class="input-group">
          <label>电话：</label>
          <input type="tel" v-model="joinDate.phone" />
        </div>
        <div class="input-group">
          <label>可邮寄地址：</label>
          <input type="text" v-model="joinDate.address" />
        </div>
        <div class="input-group">
          <label>邮编：</label>
          <input type="number" v-model="joinDate.postcode" />
        </div>
        <div class="input-group">
          <label>工作：</label>
          <input type="text" v-model="joinDate.work" />
        </div>
        <div class="input-group">
          <label>密保问题：</label>
          <input type="text" required v-model="joinDate.question" />
        </div>
        <div class="input-group">
          <label>密保答案：</label>
          <input type="text" required v-model="joinDate.answer" />
        </div>
        <input type="submit" value="注册" v-on:click.stop.prevent="join" />
      </form>
      <div class="other-link">
        <a v-on:click="changeShow('login')">用户登录</a>
        <a v-on:click="changeShow('getpassword')">取回密码</a>
      </div>
    </div>
    <!-- 取回密码界面 -->
    <div id="getpassword" class="getpassword" v-if="show==='getpassword'">
      <h2>取回密码</h2>
      <form>
        <div class="input-group">
          <label>密保问题：</label>
          <input type="text" required v-model="getpassWordDate.question" />
        </div>
        <div class="input-group">
          <label>密保答案：</label>
          <input type="text" required v-model="getpassWordDate.answer" />
        </div>

        <input type="submit" value="提交" />
      </form>
      <div class="other-link">
        <a v-on:click="changeShow('login')">用户登录</a>
        <a v-on:click="changeShow('join')">免费注册</a>
      </div>
    </div>
    <!-- 登录、注册成功 -->
    <div id="success" class="joinSuccess">
      <h2>取回密码</h2>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      successMessage: "",
      show: "login",
      loginDate: { name: "", passWord: "" },
      joinDate: {
        name: "",
        passWord1: "",
        passWord2: "",
        mail: "",
        phone: "",
        address: "",
        postcode: 0,
        work: "",
        question: "",
        answer: ""
      },
      getpassWordDate: {
        question: "",
        answer: ""
      }
    };
  },
  methods: {
    changeShow(show) {
      this.show = show;
    },
    join() {
      if (
        this.joinDate.name.trim().length < 3 ||
        this.joinDate.name.trim().length > 15
      )
        return;
      if (
        this.joinDate.passWord1.trim().length < 6 ||
        this.joinDate.passWord1.trim().length > 20
      )
        return;
      if (this.joinDate.passWord1.trim() !== this.joinDate.passWord2.trim())
        return;
      if (this.joinDate.mail.trim().match(/\S+@\S+.\S+/) == null) return;
      if (this.joinDate.question.trim().length < 1) return;
      if (this.joinDate.answer.trim().length < 1) return;
      axios.post("/api/vueapp/join", this.joinDate).then(
        res => {
          if (res.data.joinType === 0) {
            this.successMessage = res.data.message;
          }
          alert(res.data.message);
        },
        err => {
          console.log(err);//eslint-disable-line
          alert("注册失败，请稍后重试");
        }
      );
    },
    login(){},
    getPassWord(){}
  }
};
</script>
<style scoped>
#log-join {
  text-align: center;
}
.login,
.join,
.getpassword,
.loginSuccess {
  box-sizing: border-box;
  border: 1px solid rgb(69, 143, 0);
  background-color: rgba(118, 228, 123, 0.5);
  border-radius: 1em;
  width: 19em;
  padding: 1em;
  margin: auto;
}
.input-group {
  display: block;
  text-align: left;
  margin: 0.5em 0em;
}
.input-group > label {
  display: inline-block;
  width: 6em;
  text-align: right;
}
.input-group > input {
  display: inline-block;
  width: 12em;
}
[type="submit"] {
  display: block;
  width: 14em;
  margin: auto;
  margin-top: 2em;
}
.other-link {
  display: flex;
  justify-content: space-around;
  margin-top: 1em;
}
.other-link > a {
  cursor: pointer;
  border: 1px solid rgb(1, 107, 10);
  box-sizing: border-box;
  padding: 0.2em;
  border-radius: 0.2em;
}
.other-link > a:hover {
  background-color: rgb(174, 255, 127);
}
input:required {
  outline: 2px solid rgb(0, 80, 185);
  outline-offset: 2px;
}
input:invalid {
  outline: 2px solid red;
  outline-offset: 2px;
}
</style>
