import * as React from "react";
import { styled } from "styled-components";
import ConvertImage from "../images/how_to_convert_section.png"
import Step1 from "../images/convert_step_1.png"
import Step2 from "../images/convert_step_2.png"
import Step3 from "../images/convert_step_3.png"
import Step4 from "../images/convert_step_4.png"

const StepsData = [
	{
		id: 1,
		image: Step1,
		detail: "Click the choose file button above or drag and drop a file into the drop zone.",
		alt: "step 1",
	},
	{
		id: 2,
		image: Step2,
		detail: "Select the document you want to convert.",
		alt: "step 2",
	},
	{
		id: 3,
		image: Step3,
		detail: "Watch pDF converter do its PDF conversion magic.",
		alt: "step 3",
	},
	{
		id: 4,
		image: Step4,
		detail: "Download your new file or sign in to share it.",
		alt: "step 4",
	},
];

const StyledConvertFileSection = styled.section`
	padding-block: 80px;

	@media (max-width: 320px) {
		padding-block: 50px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		padding-block: 50px;
	}
`;

const HowToConvertImageContainer = styled.div`
	max-width: 391px;
	width: 100%;
	height: auto;
	margin-inline: auto;

	.convert-image {
		width: 100%;
		height: auto;
	}

`;

const ConvertSectionHeading = styled.h2`
	font-size: var(--fs-32);
	font-weight: var(--fw-600);
	color: var(--fc-black-primary);
	margin-bottom: 30px;

	@media (max-width: 320px) {
		font-size: var(--fs-24);
	}
`;

const AllSteps = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Step = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const StepPara = styled.p`
	font-size: var(--fs-16);
	font-weight: var(--fw-400);
	color: var(--fc-black-primary);
	margin-bottom: 0;
`;



const ConvertFilesSection = () => {
	return (
		<StyledConvertFileSection className="convert-section">
			<div className="container">
				<div className="row gy-5 gx-5">
					<div className="col-12 col-md-6">
						<HowToConvertImageContainer>
							<img
								src={ConvertImage}
								alt="convert section image"
								className="convert-image"
							/>
						</HowToConvertImageContainer>
					</div>
					<div className="col-12 col-md-6">
						<ConvertSectionHeading>
							How to Convert Files to and from PDF Free
						</ConvertSectionHeading>
						<div className="convert-steps-container">
							<AllSteps>
								{
									StepsData.map((data) => {
										return (
											<Step key={data.id}>
												<div className="step-image">
													<img
														src={data.image}
														alt={data.alt}
													/>
												</div>
												<StepPara>{data.detail}</StepPara>
											</Step>
										);
									})
								}
							</AllSteps>
						</div>
					</div>
				</div>
			</div>
		</StyledConvertFileSection>
	);
};

export default ConvertFilesSection;
