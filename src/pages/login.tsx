import * as React from "react";
import { styled } from "styled-components";
import AppLayout from "../components/AppLayout";
import AuthHeader from "../sections/AuthHeader";
import EyeIcon from "../images/eye.png"
import GoogleIcon from "../images/google-icon.png"
import { Link } from "gatsby";

const LoginSection = styled.section`
	padding-top: 20px;
	padding-bottom: 60px;
`;

const AuthLoginContainer = styled.div`
	padding-inline: 10px;
`;

const LoginBox = styled.div`
	padding-block: 42px;
	padding-inline: 60px;
	max-width: 529px;
	border-radius: 4px;
	background-color: var(--bg-color-white);
	box-shadow: 0px 0px 4px 0px rgba(24, 59, 86, 0.2);
	margin-inline: auto;
`;


const FormHeading = styled.h2`
	font-size: var(--fs-20);
	font-weight: var(--fw-600);
	color: var(--fc-black-primary);
	margin-bottom: 24px;
`;

const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	margin-bottom: 16px;
	position: relative;

	label {
		font-size: 11px;
		font-weight: var(--fw-400);
		color: var(--fc-black-primary);
		padding-left: 16px;
	}
	input {
		border: none;
		outline: none;
		padding: 8px 36px 8px 8px;
		border-radius: 6px;
		background-color: #f2f2f2;
	}

	.eye-icon {
		position: absolute;
		bottom: 12px;
		right: 10px;
	}
`;

const RememberForPassword = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LoginBtn = styled.button`
	margin-block: 32px;
	color: var(--fc-white);
	background-color: var(--bg-color-blue);
	padding-block: 10px;
	border-radius: 6px;
	width: 100%;
`;

const SocialLoginProviderContainer = styled.div`
	padding-block: 32px;
	border-top: 1px solid #e5e5e5;

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
	}
`;

const ProviderButton = styled.button`
	background-color: var(--fc-black-primary);
	color: var(--fc-white);
	font-size: var(--fs-12);
	font-weight: var(--fw-400);
	width: 100%;
	padding-block: 14px;
	border-radius: 6px;
	display: flex;
	gap: 8px;
	align-items: center;
	justify-content: center;
	margin-bottom: 24px;

	.provider-icon {
		width: 20px;
		height: 20px;
	}

	
`;




const Login = () => {
	return (
		<AppLayout>
			<div className="login-page-container">
				<AuthHeader />

				<LoginSection>
					<div className="container">
						<AuthLoginContainer>
							<LoginBox>
								<FormHeading>
									Nice to see you again
								</FormHeading>
								<form className="login-form">
									<FormItem>
										<label htmlFor="">E-mail</label>
										<input
											type="text"
											placeholder="Email or phone number"
										/>
									</FormItem>
									<FormItem>
										<label htmlFor="">Password</label>
										<input
											type="text"
											placeholder="Enter password"
											className="password"
										/>
										<img
											src={EyeIcon}
											alt=""
											className="eye-icon"
										/>
									</FormItem>
									<RememberForPassword>
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												role="switch"
												id="flexSwitchCheckDefault"
											/>
											<label
												className="form-check-label"
												htmlFor="flexSwitchCheckDefault"
											>
												Remember me
											</label>
										</div>
										<Link to="/">forgot password?</Link>
									</RememberForPassword>
									<LoginBtn>login</LoginBtn>
								</form>

								<SocialLoginProviderContainer>
									<ProviderButton>
										<span>
											<img src={GoogleIcon} alt="google icon" className="provider-icon" />
										</span>
										<span>Or sign in with Google</span>
									</ProviderButton>
                                    <p>Don't have an account?<Link to="/">Sign up now</Link></p>
								</SocialLoginProviderContainer>
							</LoginBox>
						</AuthLoginContainer>
					</div>
				</LoginSection>
			</div>
		</AppLayout>
	);
};

export default Login;
