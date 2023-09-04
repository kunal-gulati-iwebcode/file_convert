import * as React from "react";
import { styled } from "styled-components";
import ElipticalArrow from "../images/eliptical_arrow.png";

const StyledAuthHeader = styled.div`
	padding-top: 80px;
	padding-bottom: 70px;
`;

const AuthHeading = styled.h1`
	font-size: var(--fs-40);
	font-weight: var(--fw-500);
	max-width: 646px;
	text-align: center;
	margin-inline: auto;
	margin-bottom: 48px;
	color: var(--fc-black-primary);

	span {
		color: var(--fc-blue);
	}

	@media (max-width: 576px) {
		font-size: var(--fs-30);
	}
`;

const AuthNav = styled.div`
	display: flex;
	justify-content: center;

	@media (max-width: 576px) {
		display: block;
		padding-left: 10px;
	}
`;

const AuthButtonsContainer = styled.div`
	display: inline-block;
	position: relative;
`;

const AuthNavButtons = styled.p`
	background-color: var(--bg-color-white);
	padding: 8px;
	border-radius: 27px;
	display: flex;
	gap: 8px;
	align-items: center;
	box-shadow: 0px 10px 15px 0px rgba(24, 59, 86, 0.2);

	.auth-button {
		padding-block: 4px;
		padding-inline: 16px;
		border-radius: 16px;
		color: var(--fc-black-primary);
		margin-bottom: 0;
		font-size: var(--fs-16);
		font-weight: var(--fw-600);
	}

	.auth-button.active {
		background-color: var(--bg-color-blue);
		color: var(--fc-white);
	}
`;

const ElipticalArrowImageContainer = styled.div`
	position: absolute;
	bottom: -15px;
	right: -55px;
	width: 60px;

	.eliptical-arrow {
		width: 100%;
		height: auto;
	}

	@media (max-width: 576px) {
		bottom: 0px;
	}
`;

const PercentageDrop = styled.p`
	position: absolute;
	top: 50%;
	right: -160px;
	transform: translateY(-50%);
	color: #7732bb;
	font-size: var(--fs-12);
	font-weight: var(--fw-600);
	margin-bottom: 0;

	@media (max-width: 576px) {
		right: -110px;
	}
`;

const AuthHeader = () => {
	return (
		<StyledAuthHeader>
			<AuthHeading>
				We offer great <span>price</span> plan for the application
			</AuthHeading>
			<AuthNav>
				<AuthButtonsContainer>
					<AuthNavButtons>
						<p className="auth-button active">Sign Up</p>
						<p className="auth-button">Login</p>
					</AuthNavButtons>
					<ElipticalArrowImageContainer>
						<img
							src={ElipticalArrow}
							alt="eliptical arrow"
							className="eliptical-arrow"
						/>
					</ElipticalArrowImageContainer>
					<PercentageDrop>SAVE UP TO 30%</PercentageDrop>
				</AuthButtonsContainer>
			</AuthNav>
		</StyledAuthHeader>
	);
};

export default AuthHeader;
