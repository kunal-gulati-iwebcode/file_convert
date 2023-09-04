import * as React from "react";
import { styled } from "styled-components";

import FeatIcon1 from "../images/feat_icon_1.png";
import FeatIcon2 from "../images/feat_icon_2.png";
import FeatIcon3 from "../images/feat_icon_3.png";
import FeatIcon4 from "../images/feat_icon_4.png";
import FeatIcon5 from "../images/feat_icon_5.png";
import FeatIcon6 from "../images/feat_icon_6.png";
import FeedbackImage from "../images/feeback_image.png";

const FeaturesPointsData = [
	{
		id: 1,
		icon: FeatIcon1,
		heading: "Start a free trial",
		detail: "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It's the go-to solution for all of your file conversion needs.",
		alt: "feat-icon-1",
	},
	{
		id: 2,
		icon: FeatIcon2,
		heading: "The Best Free PDF Converter",
		detail: "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It's the go-to solution for all of your file conversion needs.",
		alt: "feat-icon-2",
	},
	{
		id: 3,
		icon: FeatIcon3,
		heading: "Encrypted files",
		detail: "We care about the privacy of your data. 256-bit SSL Encryption of all your files means that your files, documents, and data are secure. We also won't give or share any of your data with other parties.",
		alt: "feat-icon-3",
	},
	{
		id: 4,
		icon: FeatIcon4,
		heading: "Automatic deletion of your files",
		detail: "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It's the go-to solution for all of your file conversion needs.",
		alt: "feat-icon-4",
	},
	{
		id: 5,
		icon: FeatIcon5,
		heading: "Universal conversion",
		detail: "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It's the go-to solution for all of your file conversion needs.",
		alt: "feat-icon-5",
	},
	{
		id: 6,
		icon: FeatIcon6,
		heading: "A suite of file conversion tools",
		detail: "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It's the go-to solution for all of your file conversion needs.",
		alt: "feat-icon-6",
	},
];

const ConvertPointsData = [
	{
		id: 1,
		number: 1,
		detail: "Click the choose file button above or drag and drop a file into the drop zone.",
	},
	{
		id: 2,
		number: 2,
		detail: "Select the document you want to convert.",
	},
	{
		id: 3,
		number: 3,
		detail: "Watch pDF converter do its PDF conversion magic.",
	},
	{
		id: 4,
		number: 4,
		detail: "Download your new file or sign in to share it.",
	},
];



const StyledChooseUsSection = styled.section`
	padding-top: 80px;
	background-color: #f6faff;
	clip-path: ellipse(140% 100% at 50% 100%);

	@media (max-width: 320px) {
		padding-top: 50px;
		clip-path: ellipse(150% 100% at 50% 95%);
	}

	@media (min-width: 321px) and (max-width: 585px) {
		padding-top: 50px;
		clip-path: ellipse(150% 100% at 50% 95%);
	}

	@media (min-width: 586px) {
		padding-top: 60px;
		clip-path: ellipse(150% 100% at 50% 95%);
	}

	@media (min-width: 992px) {
		padding-top: 80px;
		clip-path: ellipse(140% 100% at 50% 100%);
	}
`;

const ChooseSectionHeading = styled.h2`
	text-align: center;
	font-size: var(--fs-32);
	font-weight: var(--fw-600);
	text-transform: capitalize;
	color: var(--fc-black-primary);

	@media (max-width: 320px) {
		font-size: var(--fs-24);
	}

	@media (min-width: 321px) and (max-width: 585px) {
		font-size: var(--fs-24);
	}

	@media (min-width: 586px) {
		font-size: 28px;
	}

	@media (min-width: 992px) {
		font-size: var(--fs-32);
	}
`;  

const ChooseSectionSubHeading = styled.p`
	font-size: var(--fs-14);
	font-weight: var(--fw-400);
	text-align: center;
	color: var(--fc-black-secondary);
    margin-inline: auto;
    max-width: 586px;
`;

const ConvertFeedback = styled.div`
	padding-top: 60px;
	padding-bottom: 80px;

	.convert-left-container {
		padding-right: 100px;
	}

	@media (max-width: 320px) {
		padding-top: 30px;
		padding-bottom: 40px;

		.convert-left-container {
			padding-right: 0;
		}
	}

	@media (min-width: 321px) and (max-width: 585px) {
		padding-top: 30px;
		padding-bottom: 40px;

		.convert-left-container {
			padding-right: 0;
		}
	}

	@media (min-width: 586px) {
		padding-top: 60px;
		padding-bottom: 80px;

		.convert-left-container {
			padding-right: 0;
		}
	}

	@media (min-width: 992px) {
		padding-top: 30px;
		padding-bottom: 40px;

		.convert-left-container {
			padding-right: 100px;
		}
	}
`;

const ConvertAreaHeading = styled.h3`
	font-size: var(--fs-24);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
	margin-bottom: 20px;

	@media (max-width: 320px) {
		font-size: 20px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		font-size: 20px;
	}

	@media (min-width: 586px) {
		font-size: var(--fs-24);
	}
`;


const ConvertAreaSubHeading = styled.p`
	font-size: var(--fs-16);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	margin-bottom: 20px;

	@media (max-width: 320px) {
		font-size: var(--fs-12);
	}

	@media (min-width: 321px) and (max-width: 585px) {
		font-size: var(--fs-12);
	}
	@media (min-width: 586px) {
		font-size: var(--fs-16);
	}
`;

const ConvertPoints = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media (max-width: 320px) {
		gap: 10px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		gap: 10px;
	}
`;

const ConvertPoint = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;

	@media (max-width: 320px) {
		gap: 10px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		gap: 10px;
	}
`;

const NumberPoint = styled.p`
	font-size: var(--fs-18);
	font-weight: var(--fw-400);
	color: var(--fc-white);
	min-width: 34px;
	min-height: 34px;
	background-color: var(--bg-color-blue);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 320px) {
		font-size: 16px;
		min-width: 34px;
		min-height: 34px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		font-size: 16px;
		min-width: 34px;
		min-height: 34px;
	}
`;

const PointDetail = styled.p`
	font-size: var(--fs-16);
	font-weight: var(--fw-400);
	color: var(--fc-black-primary);

	@media (max-width: 320px) {
		font-size: 14px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		font-size: 14px;
	}
`;

const FeaturesArea = styled.div`
	margin-top: 40px;
`;

const FeaturesHeading = styled.h4`
	font-size: var(--fs-24);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
	margin-bottom: 40px;

	@media (max-width: 320px) {
		margin-bottom: 20px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		margin-bottom: 20px;
	}
`;

const Feat = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	padding-block: 32px;
	border-top: 1px solid #dee0e1;
`;

const FeatImageContainer = styled.div`
	align-self: flex-start;
`;

const FeatDetailHeading = styled.h5`
	font-size: var(--fs-20);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
	margin-bottom: 12px;
`;

const FeatdetailPara = styled.p`
	font-size: var(--fs-16);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
`;

const FeedbackContainer = styled.div`
	border: 1px solid #c5cbd2;
	max-width: 383px;

	@media (max-width: 992px) {
		margin-inline: auto;
	}
`;

const FeedImageContainer = styled.div`
	position: relative;
	width: 100%;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.42) 0%,
			rgba(0, 0, 0, 0) 100%
		) !important;
		z-index: 1;
	}

	.feed-image {
		width: 100%;
		height: auto;
	}

	.share {
		position: absolute;
		bottom: 60px;
		left: 20px;
		font-size: var(--fs-16);
		font-weight: var(--fw-400);
		color: var(--fc-white);
	}

	.feedback {
		position: absolute;
		bottom: 20px;
		left: 20px;
		font-size: var(--fs-24);
		font-weight: var(--fw-600);
		color: var(--fc-white);
	}
`;

const FeedbackForm = styled.div`
	padding: 32px;

	& input {
		width: 100%;
		padding: 8px 16px;
		background-color: #e5e5e5;
		outline: none;
		border: none;
		border-radius: 6px;
		margin-bottom: 16px;
	}

	& label {
		font-size: var(--fs-16);
		font-weight: var(--fw-500);
		color: var(--fc-black-primary);
		margin-bottom: 8px;
	}
	& textarea {
		width: 100%;
		padding: 8px 16px;
		background-color: #e5e5e5;
		outline: none;
		border: none;
		border-radius: 6px;
		margin-bottom: 16px;
		resize: none;
	}
	& button {
		width: 100%;
		font-size: var(--fs-14);
		font-weight: var(--fw-400);
		color: #f9fafb;
		background-color: var(--bg-color-blue);
		border-radius: 6px;
		padding-block: 14px;
	}
`;






const ChooseUsSection = () => {
	return (
		<StyledChooseUsSection>
			<div className="container">
				<ChooseSectionHeading>
					why should you choose us
				</ChooseSectionHeading>
				<ChooseSectionSubHeading>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</ChooseSectionSubHeading>

				<ConvertFeedback>
					<div className="row">
						<div className="col-12  col-lg-8 convert-left-container">
							<div className="pdf-convert-area">
								<ConvertAreaHeading>
									How Does Text to PDF Converter Works?
								</ConvertAreaHeading>
								<ConvertAreaSubHeading>
									This online image to text converter offers
									only a few basic steps to download and copy
									text from images. Let's take a look:
								</ConvertAreaSubHeading>
								<ConvertPoints>
									{ConvertPointsData.map((data) => {
										return (
											<ConvertPoint key={data.id}>
												<NumberPoint>
													{data.number}
												</NumberPoint>
												<PointDetail>
													{data.detail}
												</PointDetail>
											</ConvertPoint>
										);
									})}
								</ConvertPoints>
							</div>
							<FeaturesArea>
								<FeaturesHeading>Features</FeaturesHeading>
								<div className="all-features">
									{FeaturesPointsData.map((data) => {
										return (
											<Feat key={data.id}>
												<FeatImageContainer>
													<img
														src={data.icon}
														alt=""
													/>
												</FeatImageContainer>
												<div className="feat-detail">
													<FeatDetailHeading>
														{data.heading}
													</FeatDetailHeading>
													<FeatdetailPara>
														{data.detail}
													</FeatdetailPara>
												</div>
											</Feat>
										);
									})}
								</div>
							</FeaturesArea>
						</div>
						<div className="col-12 col-lg-4">
							<div className="feedback-area">
								<FeedbackContainer>
									<FeedImageContainer>
										<img
											src={FeedbackImage}
											alt="feedback-image"
											className="feed-image"
										/>
										<p className="share">Share Your</p>
										<p className="feedback">Feedback</p>
									</FeedImageContainer>
									<FeedbackForm>
										<form>
											<input
												type="text"
												placeholder="Email"
											/>
											<label htmlFor="feedback-text">
												Your Message Here
											</label>
											<textarea
												name=""
												id="feedback-text"
												cols={30}
												rows={10}
												placeholder="Message"
											></textarea>
											<button>Send</button>
										</form>
									</FeedbackForm>
								</FeedbackContainer>
							</div>
						</div>
					</div>
				</ConvertFeedback>
			</div>
		</StyledChooseUsSection>
	);
};

export default ChooseUsSection;
