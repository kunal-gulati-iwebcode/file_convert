import * as React from "react";
import { styled } from "styled-components";

import Tool1 from "../images/tool_1.png"
import Tool2 from "../images/tool_2.png"
import Tool3 from "../images/tool_3.png"
import Tool4 from "../images/tool_4.png"
import Tool5 from "../images/tool_5.png"
import Tool6 from "../images/tool_6.png"
import Tool7 from "../images/tool_7.png"
import Tool8 from "../images/tool_8.png"
import Tool9 from "../images/tool_9.png"
import Tool10 from "../images/tool_10.png"
import Tool11 from "../images/tool_11.png"
import Tool12 from "../images/tool_12.png"
import Tool13 from "../images/tool_13.png"
import Tool14 from "../images/tool_14.png"
import Tool15 from "../images/tool_15.png"

const ToolsData = [
	{
		id: 1,
		icon: Tool1,
		heading: "excel to pdf",
	},
	{
		id: 2,
		icon: Tool2,
		heading: "word to PDF",
	},
	{
		id: 3,
		icon: Tool3,
		heading: "PowerPoint to PDF",
	},
	{
		id: 4,
		icon: Tool4,
		heading: "JPG to PDF",
	},
	{
		id: 5,
		icon: Tool5,
		heading: "OpenOffice to PDF",
	},
	{
		id: 6,
		icon: Tool6,
		heading: "word to PDF",
	},
	{
		id: 7,
		icon: Tool7,
		heading: "PowerPoint to PDF",
	},
	{
		id: 8,
		icon: Tool8,
		heading: "word to PDF",
	},
	{
		id: 9,
		icon: Tool9,
		heading: "excel to pdf",
	},
	{
		id: 10,
		icon: Tool10,
		heading: "PowerPoint to PDF",
	},
	{
		id: 11,
		icon: Tool11,
		heading: "JPG to PDF",
	},
	{
		id: 12,
		icon: Tool12,
		heading: "word to PDF",
	},
	{
		id: 13,
		icon: Tool13,
		heading: "word to PDF",
	},
	{
		id: 14,
		icon: Tool14,
		heading: "excel to pdf",
	},
	{
		id: 15,
		icon: Tool15,
		heading: "OpenOffice to PDF",
	},
];

const StyledOurToolSuiteSection = styled.section`
	padding-block: 80px;

	@media (max-width: 320px) {
		padding-block: 30px;
	}

	@media (min-width: 321px) and (max-width: 575px) {
		padding-block: 50px;
	}

	@media (min-width: 576px) {
		padding-block: 50px;
	}

	@media (min-width: 768px) {
		padding-block: 60px;
	}

	@media (min-width: 992px) {
		padding-block: 80px;
	}
`;

const ToolHeading = styled.h4`
	font-size: var(--fs-32);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
	text-align: center;

	@media (max-width: 320px) {
		font-size: var(--fs-24);
	}

	@media (min-width: 321px) and (max-width: 575px) {
		font-size: var(--fs-24);
	}

	@media (min-width: 576px) {
		font-size: 28px;
	}

	@media (min-width: 768px) {
		font-size: var(--fs-32);
	}
`;

const ToolSubHeading = styled.p`
	max-width: 586px;
	font-size: var(--fs-14);
	font-weight: var(--fw-400);
	text-align: center;
	margin-inline: auto;
	margin-bottom: 48px;
`;

const AllTools = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	border: 1px solid #e3e3e3;
	border-radius: 8px;

	@media (max-width: 320px) {
		grid-template-columns: repeat(2, 1fr);
		border: none;
	}

	@media (min-width: 321px) and (max-width: 575px) {
		grid-template-columns: repeat(2, 1fr);
		border: none;
	}

	@media (min-width: 576px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

const ToolMain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-block: 45px;
	border: 1px solid #e3e3e3;

	@media (max-width: 320px) {
		border: none;
		padding-block: 38px;
	}

	@media (min-width: 321px) and (max-width: 575px) {
		border: none;
		padding-block: 38px;
	}

	@media (min-width: 576px) {
		padding-block: 45px;
	}
`;

const ToolImageContainer = styled.div`
	margin-bottom: 20px;
`;

const SubToolHeading = styled.p`
	font-size: var(--fs-16);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
`;


const OurToolSuiteSection = () => {
	return (
        <StyledOurToolSuiteSection>
            <div className="container">
                <ToolHeading>Our Tool Suit</ToolHeading>
                <ToolSubHeading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae, dolorum dicta consequuntur voluptatum labore optio quos molestias at sunt?</ToolSubHeading>
                <div className="tool-container">
                    <AllTools>
                        {
                            ToolsData.map((data) => {
                                return (
                                    <ToolMain key={data.id}>
                                        <ToolImageContainer>
                                            <img src={data.icon} alt="tool icon" />
                                        </ToolImageContainer>
                                        <SubToolHeading>{data.heading}</SubToolHeading>
                                    </ToolMain>
                                );
                            })
                        }
                    </AllTools>
                </div>
            </div>
        </StyledOurToolSuiteSection>
    )
};

export default OurToolSuiteSection;
