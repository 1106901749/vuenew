<template>
	<div class="login_container">
		<div class="login_box">
			<div class="avatar_box">
				<img src="../assets/logo.png" />
			</div>
			<!-- 表单区域 -->
			<el-form ref="loginFormRef" :rules="fules" :model="loginForm" label-width="0px" class="login_form">
				<!-- 用户名 -->
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" prefix-icon="el-icon-search"></el-input>
				</el-form-item>
				<!-- 密码 -->
				<el-form-item prop="password">
					<el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-search"></el-input>
				</el-form-item>
				<!-- 按钮 -->
				<el-form-item class="btns">
					 <el-button type="primary" @click='login'>登录</el-button>
					  <el-button type="info" @click='ressLoginForm'>重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				loginForm:{
					username:'11',
					password:'11'
				},
				fules:{
					//验证用户名是否合法
					username:[
						{ required: true, message: '请输入登录名', trigger: 'blur' },
					 { min: 1, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
					 ],
					password:[
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ min: 1, max: 15, message: '长度6-15个字符', trigger: 'blur' },
					]
				}
			}
		},
		methods:{
			// 重置功能
			ressLoginForm(){
				console.log(this)
				this.$refs.loginFormRef.resetFields();
			},
			login(){
				this.$refs.loginFormRef.validate((valid)=>{
					console.log(valid);
					let token='12345'
					window.sessionStorage.setItem('token',token)
					this.$router.push("/home")
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.login_container {
		background-color: #2b4b6b;
		height: 100%;
		width: 100%;
	}

	.login_box {
		width: 450px;
		height: 300px;
		background-color: #fff;
		border-radius: 3px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		.avatar_box {
			height: 130px;
			width: 130px;
			border: 1px solid #eee;
			border-radius: 50%;
			padding: 10px;
			// 阴影
			box-shadow: 0 0 10px #ddd;
			position: absolute;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: #fff;
			img {
				height: 100%;
				width: 100%;
				border-radius: 50%;
				background-color: #eee;
			}
		}
	}
	.login_form{
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 0px 20px;
		// 为元素设定的宽度和高度决定了元素的边框盒。
		// 就是说,为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
		// 通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
		box-sizing: border-box;
	}
	.btns{
		display: flex;
		justify-content: flex-end;
	}
</style>
