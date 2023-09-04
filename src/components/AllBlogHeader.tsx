import * as React from "react";
import { styled } from "styled-components";

const StyledAllBlogHeader = styled.section`
    
`

const AllBlogPageHeading = styled.h1`
	color: var(--fc-black-primary);
	font-size: var(--fs-48);
	font-weight: var(--fw-500);
	text-align: center;
    margin-bottom: 16px;
`;

const AllBlogPageSubHeading = styled.p`
	font-size: var(--fs-18);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	text-align: center;
`;

const AllBlogHeader = () => {
	return (
		<StyledAllBlogHeader>
			<AllBlogPageHeading>Blogs</AllBlogPageHeading>
			<AllBlogPageSubHeading className="blog-subheading">
				Ut condimentum volutpat, eget mauris senectus.
			</AllBlogPageSubHeading>
		</StyledAllBlogHeader>
	);
};

export default AllBlogHeader;
