import * as React from "react";
import { styled } from "styled-components";
import ChooseUsSection from "./ChooseUsSection";
import FaqSection from "./FaqSection";
import LatestBlogSection from "./LatestBlogSection";


const StyledMiddleSection = styled.div`
    /* padding-top: 80px; */
`;


const MiddleSection = () => {
	return (
        <StyledMiddleSection>
            <ChooseUsSection />
            <FaqSection />
            <LatestBlogSection />
        </StyledMiddleSection>
    );
};

export default MiddleSection;
