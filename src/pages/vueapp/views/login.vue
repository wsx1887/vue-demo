<template>
  <div id="log-join">
    <div id="login" class="login" v-if="show==='login'">
      <h2>用户登录</h2>
      <form method="post">
        <div class="input-group">
          <label>用户名：</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>密码：</label>
          <input type="password" />
        </div>
        <input type="submit" value="登录" />
      </form>
      <div class="other-link">
        <a>忘记密码</a>
        <a>免费注册</a>
      </div>
    </div>
    <div id="join" class="join" v-if="show==='join'">
      <h2>用户注册</h2>
      <form>
        <div class="input-group">
          <label>用户名：</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>密码：</label>
          <input type="password" />
        </div>
        <div class="input-group">
          <label>密码确认：</label>
          <input type="password" />
        </div>
        <div class="input-group">
          <label>邮箱：</label>
          <input type="email" />
        </div>
        <div class="input-group">
          <label>电话：</label>
          <input type="tel" />
        </div>
        <div class="input-group">
          <label>可邮寄地址：</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>邮编：</label>
          <input type="number" />
        </div>
        <div class="input-group">
          <label>工作：</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>密保问题：</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>密保答案：</label>
          <input type="text" />
        </div>

        <input type="submit" value="注册" />
      </form>
      <div class="other-link">
        <a>用户登录</a>
        <a>取回密码</a>
      </div>
    </div>
    <div id="getpassword" class="getpassword" v-if="show==='getpassword'">
      <h2>取回密码</h2>
      <form>
        <div class="input-group">
          <label>密保问题：</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>密保答案：</label>
          <input type="text" />
        </div>

        <input type="submit" value="提交" />
      </form>
      <div class="other-link">
        <a>忘记密码</a>
        <a>免费注册</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: "login"
    };
  }
};
</script>
<style scoped>
#log-join {
  text-align: center;
}
.login,
.join,
.getpassword {
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
.other-link{
    display: flex;
    justify-content: space-around;
    margin-top: 1em;
}
</style>
