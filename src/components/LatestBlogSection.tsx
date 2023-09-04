import * as React from "react";
import { styled } from "styled-components";
import Blog1 from "../images/blog_1.png"
import Blog2 from "../images/blog_2.png"
import Blog3 from "../images/blog_3.png"


const BlogData = [
	{
		id: 1,
		img: Blog1,
		heading: "How to Convert PDF to Word with our Platform.",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "13 Sept, 2021",
	},
	{
		id: 2,
		img: Blog2,
		heading: "Create a budget spreadsheet without MS Excel",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "13 Sept, 2021",
	},
	{
		id: 3,
		img: Blog3,
		heading: "Protecting PDF with password using Protect PDF",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "13 Sept, 2021",
	},
];



const StyledLatestBlogSection = styled.section`
	padding-block: 80px;
	background-color: #f6faff;
	clip-path: ellipse(100% 100% at 50% 2%);

	@media (max-width: 320px) {
		padding-block: 40px;
		clip-path: ellipse(100% 100% at 50% 12%);
	}

	@media (min-width: 321px) and (max-width: 585px) {
		padding-block: 40px;
		clip-path: ellipse(100% 100% at 50% 12%);
	}

	@media (min-width: 586px) and (max-width: 786px) {
		clip-path: ellipse(100% 100% at 50% 9%);
	}
`;

const LatestBlogHeading = styled.h3`
	font-size: var(--fs-32);
	font-weight: var(--fw-600);
	color: var(--fc-black-primary);
	text-align: center;

	@media (max-width: 320px) {
		font-size: 24px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		font-size: 24px;
	}
`;


const LatestBlogSubHeading = styled.p`
	font-size: var(--fs-14);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	text-align: center;
	margin-inline: auto;
	max-width: 586px;
`;


const BlogContainer = styled.div`
	border-radius: 8px;
	border: 1px solid #c5cbd2;
	background: #fff;
	height: 100%;

	.blog-image-container {
		width: 100%;
	}

	.blog-image {
		width: 100%;
		height: auto;
	}
`;

const BlogDetailContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const BlogHeading = styled.h5`
	font-size: var(--fs-20);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
	margin-bottom: 20px;
`;

const BlogDetail = styled.p`
	font-size: var(--fs-14);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	margin-bottom: 40px;
`;

const DateMoreContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const BlogDate = styled.p`
	font-size: var(--fs-12);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	margin-bottom: 0;
`;

const BlogReadMoreButton = styled.button`
	font-size: var(--fs-14);
	font-weight: var(--fw-500);
	color: var(--fc-white);
	background-color: var(--bg-color-blue);
	padding: 14px 26px;
	border-radius: 6px;
`;



const LatestBlogSection = () => {
  return (
		<StyledLatestBlogSection>
			<div className="container">
				<LatestBlogHeading>Our Latest Blogs</LatestBlogHeading>
				<LatestBlogSubHeading>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</LatestBlogSubHeading>

				<div className="main-page-blogs">
					<div className="row">
                        {
                            BlogData.map((data) => {
                                return (
									<div className="col-12 col-md-6 col-lg-4 gy-4" key={data.id}>
										<BlogContainer>
											<div className="blog-image-container">
												<img
													src={data.img}
													alt="blog1"
													className="blog-image"
												/>
											</div>
											<BlogDetailContainer>
												<BlogHeading>{data.heading}</BlogHeading>
												<BlogDetail>{data.detail}</BlogDetail>
												<DateMoreContainer>
													<BlogDate>{data.date}</BlogDate>
													<BlogReadMoreButton>Read More</BlogReadMoreButton>
												</DateMoreContainer>
											</BlogDetailContainer>
										</BlogContainer>
									</div>
								);
                            })
                        }
					</div>
				</div>
			</div>
		</StyledLatestBlogSection>
  );
}

export default LatestBlogSection