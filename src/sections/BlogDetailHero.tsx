import * as React from "react";
import { styled } from "styled-components";
import BlogDetailImage from "../images/blog_detail_image.png";


const BlogDetailHeroSection = styled.section`
	padding-block: 80px;
	background-color: #f6faff;
`;

const BlogDetailLink = styled.p`
	font-size: var(--fs-18);
	font-weight: var(--fw-500);
	color: var(--fc-black-secondary);
`;

const HeroMiddle = styled.div`
	padding-block: 30px;
`;

const BlogDetailHeading = styled.h1`
	font-size: var(--fs-48);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
`;

const BlogDetailImageContainer = styled.div`
	width: 100%;
	height: auto;

	.blog-detail-image {
		width: 100%;
		height: auto;
	}
`;

const AuthorDate = styled.p`
	display: flex;
	align-items: center;
	gap: 16px;
	font-size: var(--fs-18);
	font-weight: var(--fw-500);
	color: var(--fc-black-secondary);
`;



const BlogDetailHero = () => {
	return (
		<BlogDetailHeroSection>
			<div className="container">
				<BlogDetailLink>Blog/Article</BlogDetailLink>
				<HeroMiddle>
					<div className="row gx-4 align-items-center">
						<div className="col-12 col-lg-6">
							<BlogDetailHeading>
								Porttitor pharetra, viverra est nisl a,
								vulputate id...
							</BlogDetailHeading>
						</div>
						<div className="col-12 col-lg-6">
							<BlogDetailImageContainer>
								<img
									src={BlogDetailImage}
									alt="blog detail image"
									className="blog-detail-image"
								/>
							</BlogDetailImageContainer>
						</div>
					</div>
				</HeroMiddle>
				<AuthorDate>
					<span className="author">Admin</span>
					<span className="date">August 15, 2023</span>
				</AuthorDate>
			</div>
		</BlogDetailHeroSection>
	);
};

export default BlogDetailHero;
