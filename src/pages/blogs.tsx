import React from "react";
import AppLayout from "../components/AppLayout";
import type { HeadFC } from "gatsby";
import AllBlogHeader from "../components/AllBlogHeader";
import { styled } from "styled-components";
import { Link } from "gatsby";
import LatestBlogImage from "../images/latest_blog_image.png";
import BlogImage1 from "../images/blog_1.png";
import BlogImage2 from "../images/blog_2.png";
import BlogImage3 from "../images/blog_3.png";
import ShortCutImage1 from "../images/shortcut_image_1.png";
import ShortCutImage2 from "../images/shortcut_image_2.png";
import ShortCutImage3 from "../images/shortcut_image_3.png";
import ShortCutImage4 from "../images/shortcut_image_4.png";
import BlogDetailImage from "../images/blog_detail_image.png";
import BlogDetailHero from "../sections/BlogDetailHero";

const BlogData = [
	{
		id: 1,
		img: BlogImage1,
		heading: "Create a budget spreadsheet without MS Excel",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "13 Sept, 2021",
		alt: "random text",
	},
	{
		id: 2,
		img: BlogImage2,
		heading: "Protecting PDF with password using Protect PDF",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "13 Sept, 2021",
		alt: "random text",
	},
	{
		id: 3,
		img: BlogImage3,
		heading: "Create a budget spreadsheet without MS Excel",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "13 Sept, 2021",
		alt: "random text",
	},
	{
		id: 4,
		img: BlogImage1,
		heading: "Create a budget spreadsheet without MS Excel",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "13 Sept, 2021",
		alt: "random text",
	},
	{
		id: 5,
		img: BlogImage2,
		heading: "Protecting PDF with password using Protect PDF",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "13 Sept, 2021",
		alt: "random text",
	},
	{
		id: 6,
		img: BlogImage3,
		heading: "Create a budget spreadsheet without MS Excel",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		date: "13 Sept, 2021",
		alt: "random text",
	},
];

const ShortCutBlogsData = [
	{
		id: 1,
		img: ShortCutImage1,
		heading: "How to convert PDF to Doc file",
		date: "13 Sept, 2021",
		alt: "shortcut image",
	},
	{
		id: 2,
		img: ShortCutImage2,
		heading: "How to convert PDF to Word file",
		date: "13 Sept, 2021",
		alt: "shortcut image",
	},
	{
		id: 3,
		img: ShortCutImage3,
		heading: "How to convert PDF to e-book file",
		date: "13 Sept, 2021",
		alt: "shortcut image",
	},
	{
		id: 4,
		img: ShortCutImage4,
		heading: "How to convert PDF to powerpoint file",
		date: "13 Sept, 2021",
		alt: "shortcut image",
	},
];

const AllBlogPageContainer = styled.div`
	padding-block: 80px;
`;

const AllBlogsSection = styled.section`
	padding-top: 50px;
`;

const LatestBlog = styled.div`
	display: flex;
	gap: 42px;
	border-radius: 8px;
	border: 1px solid #c5cbd2;
	margin-bottom: 16px;
`;

const LatestBlogImageContainer = styled.div`
	min-width: 306px;

	.latest-blog-image {
		width: 100%;
		height: 100%;
	}
`;

const LatestBlogDetail = styled.div`
	display: flex;
	flex-direction: column;
	padding-block: 20px;
	padding-right: 35px;
`;

const LatestBlogHeading = styled.h2`
	font-size: var(--fs-30);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
	margin-bottom: 12px;
`;

const LatestBlogPara = styled.p`
	font-size: var(--fs-18);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	margin-bottom: 16px;
`;

const DateReadMore = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LatestBlogDate = styled.p`
	font-size: 15px;
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	margin: 0;
`;

const ReadMoreButton = styled.button`
	padding: 14px 26px;
	border-radius: 6px;
	background-color: var(--bg-color-blue);

	a {
		color: var(--fc-white);
	}
`;

const BlogContainer = styled.div`
	border-radius: 8px;
	border: 1px solid #c5cbd2;
`;

const BlogImageContainer = styled.div`
	width: 100%;
	height: auto;

	.rest-blog-image {
		width: 100%;
		height: auto;
	}
`;

const RestBlogDetail = styled.div`
	padding: 10px 20px 20px 20px;
`;

const BlogHeading = styled.h3`
	font-size: var(--fs-20);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
`;

const BlogDetail = styled.p`
	font-size: var(--fs-14);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
`;

const BlogDateAndReadMore = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 48px;
`;

const RestBlogDate = styled.p`
	font-size: var(--fs-12);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	margin-bottom: 0;
`;

const BlogsRightHeading = styled.h5`
	font-size: var(--fs-18);
	font-weight: var(--fw-500);
	color: #000000cc;
`;

const BlogShortcutLinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const ShortcutBlogContainer = styled.div`
	display: flex;
	border-radius: 10px;
	border: 1px solid #c5cbd2;

	.shortcut-image-container {
		min-width: 100px;
	}

	.shortcut-image {
		width: 100%;
		height: 100%;
	}
`;

const ShortcutBlogDetailContainer = styled.div`
	width: 100%;
	padding: 15px;
`;

const ShortcutBlogHeading = styled.h5`
	font-size: var(--fs-18);
	font-weight: var(--fw-500);
	margin-bottom: 16px;
`;

const ShortcutDateReadmore = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ShortcutDate = styled.p`
	font-size: var(--fs-12);
	font-weight: var(--fw-400);
	margin: 0;
`;

// Blog Detail page

const BlogDetailPageContainer = styled.div`
	padding-bottom: 60px;
`;

const BlogContent = styled.section`
	padding-block: 96px;
`;

const ToolsAndBlogs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const SuggestionsHeading = styled.h3`
	font-size: var(--fs-32);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
	margin-bottom: 32px;
`;

const SuggestBlogImageContainer = styled.div`
	width: 100%;
	margin-bottom: 20px;

	.suggest-blog-image {
		width: 100%;
		height: auto;
	}
`;

const SuggestBlogHeading = styled.h4`
	font-size: var(--fs-18);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
	margin-bottom: 16px;
`;

const SuggestBlogDetail = styled.p`
	font-size: var(--fs-16);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	margin-bottom: 16px;
`;

const DateCategory = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SuggestBlogDate = styled.p`
	font-size: var(--fs-12);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	margin: 0;
`;

const SuggestBlogCategory = styled.p`
	font-size: var(--fs-12);
	font-weight: var(--fw-400);
	color: var(--fc-black-secondary);
	margin: 0;
`;

const Blogs = () => {
	return (
		<AppLayout>
			<AllBlogPageContainer>
				<AllBlogHeader /> 
				<AllBlogsSection>
					<div className="container">
						<div className="row gy-5">
							<div className="col-12 col-lg-8">
								<div className="blogs-left-container">
									<div className="latest-blog-container">
										<div className="row">
											<div className="col-lg-12">
												<LatestBlog>
													<LatestBlogImageContainer>
														<img
															src={
																LatestBlogImage
															}
															alt="latest blog image"
															className="latest-blog-image"
														/>
													</LatestBlogImageContainer>
													<LatestBlogDetail>
														<LatestBlogHeading>
															Porttitor pharetra,
															consectetur viverra
															est nisl a,
															vulputate id...
														</LatestBlogHeading>
														<LatestBlogPara>
															Dui massa sapien
															ornare leo.
															Sagittis,
															sollicitudin sed
															integer maecenas
															sit. Nibh
															suspendisse lectus
															hendrerit pretium...
														</LatestBlogPara>
														<DateReadMore>
															<LatestBlogDate>
																13 Sept, 2021
															</LatestBlogDate>
															<div className="read-more-button-container">
																<ReadMoreButton>
																	<Link to="/">
																		Read
																		More
																	</Link>
																</ReadMoreButton>
															</div>
														</DateReadMore>
													</LatestBlogDetail>
												</LatestBlog>
											</div>
										</div>
									</div>
									<div className="rest-blogs-container">
										<div className="row gx-3 gy-3">
											{BlogData.map((data) => {
												return (
													<div
														className="col-6"
														key={data.id}
													>
														<BlogContainer>
															<BlogImageContainer>
																<img
																	src={
																		data.img
																	}
																	alt={
																		data.alt
																	}
																	className="rest-blog-image"
																/>
															</BlogImageContainer>
															<RestBlogDetail>
																<BlogHeading>
																	{
																		data.heading
																	}
																</BlogHeading>
																<BlogDetail>
																	{
																		data.detail
																	}
																</BlogDetail>
																<BlogDateAndReadMore>
																	<RestBlogDate>
																		{
																			data.date
																		}
																	</RestBlogDate>
																	<div className="read-more-button-container">
																		<ReadMoreButton>
																			<Link to="/">
																				Read
																				More
																			</Link>
																		</ReadMoreButton>
																	</div>
																</BlogDateAndReadMore>
															</RestBlogDetail>
														</BlogContainer>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="blogs-right-container">
									<BlogsRightHeading>
										Shortcut Links
									</BlogsRightHeading>
									<BlogShortcutLinksContainer>
										{ShortCutBlogsData.map((data) => {
											return (
												<ShortcutBlogContainer
													key={data.id}
												>
													<div className="shortcut-image-container">
														<img
															src={data.img}
															alt={data.alt}
															className="shortcut-image"
														/>
													</div>
													<ShortcutBlogDetailContainer>
														<ShortcutBlogHeading>
															{data.heading}
														</ShortcutBlogHeading>
														<ShortcutDateReadmore>
															<ShortcutDate>
																{data.date}
															</ShortcutDate>
															<Link to="/">
																Read More
															</Link>
														</ShortcutDateReadmore>
													</ShortcutBlogDetailContainer>
												</ShortcutBlogContainer>
											);
										})}
									</BlogShortcutLinksContainer>
								</div>
							</div>
						</div>
					</div>
				</AllBlogsSection>
			</AllBlogPageContainer>

			{/* Blog Detail page */}
			{/* <BlogDetailPageContainer>
				<BlogDetailHero />
				<BlogContent>
					<div className="container">
						<div className="row">
							<div className="col-12 col-lg-8">
								<div className="blog-para">
									<h5>TABLE OF CONTENT</h5>
									<ul>
										<li>
											<a href="/">
												Lorem ipsum dolor sit amet ?
											</a>
										</li>
										<li>
											<a href="/">
												Lorem ipsum dolor sit amet ?
											</a>
										</li>
										<li>
											<a href="/">
												Lorem ipsum dolor sit amet ?
											</a>
										</li>
										<li>
											<a href="/">
												Lorem ipsum dolor sit amet ?
											</a>
										</li>
									</ul>
									<br />
									<p>
										Lorem ipsum dolor sit amet consectetur.
										Porta ac auctor vulputate ut elementum
										quis enim sollicitudin aenean. Mollis
										eget volutpat id donec. Volutpat nibh
										nulla nulla facilisi libero praesent ut
										nisl. Metus nisl amet accumsan proin
										lobortis feugiat amet. Duis maecenas
										hendrerit egestas mattis molestie
										phasellus euismod est vitae. Tincidunt
										sed ac ultricies leo sed massa.Lorem
										ipsum dolor sit amet consectetur.
									</p>
									<br />
									<p>
										Lorem ipsum dolor sit amet consectetur.
										Porta ac auctor vulputate ut elementum
										quis enim sollicitudin aenean. Mollis
										eget volutpat id donec. Volutpat nibh
										nulla nulla facilisi libero praesent ut
										nisl. Metus nisl amet accumsan proin
										lobortis feugiat amet. Duis maecenas
										hendrerit egestas mattis molestie
										phasellus euismod est vitae. Tincidunt
										sed ac ultricies leo sed massa.Lorem
										ipsum dolor sit amet consectetur.
									</p>
									<h3>Lorem Ipsum dolor sit</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur.
										Porta ac auctor vulputate ut elementum
										quis enim sollicitudin aenean. Mollis
										eget volutpat id donec. Volutpat nibh
										nulla nulla facilisi libero praesent ut
										nisl. Metus nisl amet accumsan proin
										lobortis feugiat amet. Duis maecenas
										hendrerit egestas mattis molestie
										phasellus euismod est vitae. Tincidunt
										sed ac ultricies leo sed massa.Lorem
										ipsum dolor sit amet consectetur.
									</p>
									<br />
									<br />
									<h3>Lorem Ipsum dolor sit</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur.
										Porta ac auctor vulputate ut elementum
										quis enim sollicitudin aenean. Mollis
										eget volutpat id donec. Volutpat nibh
										nulla nulla facilisi libero praesent ut
										nisl. Metus nisl amet accumsan proin
										lobortis feugiat amet. Duis maecenas
										hendrerit egestas mattis molestie
										phasellus euismod est vitae. Tincidunt
										sed ac ultricies leo sed massa.Lorem
										ipsum dolor sit amet consectetur.
									</p>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<ToolsAndBlogs>
									<div className="blogs-right-container">
										<BlogsRightHeading>
											Latest Blogs
										</BlogsRightHeading>
										<BlogShortcutLinksContainer>
											{ShortCutBlogsData.map((data) => {
												return (
													<ShortcutBlogContainer
														key={data.id}
													>
														<div className="shortcut-image-container">
															<img
																src={data.img}
																alt={data.alt}
																className="shortcut-image"
															/>
														</div>
														<ShortcutBlogDetailContainer>
															<ShortcutBlogHeading>
																{data.heading}
															</ShortcutBlogHeading>
															<ShortcutDateReadmore>
																<ShortcutDate>
																	{data.date}
																</ShortcutDate>
																<Link to="/">
																	Read More
																</Link>
															</ShortcutDateReadmore>
														</ShortcutBlogDetailContainer>
													</ShortcutBlogContainer>
												);
											})}
										</BlogShortcutLinksContainer>
									</div>
									<div className="blogs-right-container">
										<BlogsRightHeading>
											Tools
										</BlogsRightHeading>
										<BlogShortcutLinksContainer>
											{ShortCutBlogsData.map((data) => {
												return (
													<ShortcutBlogContainer
														key={data.id}
													>
														<div className="shortcut-image-container">
															<img
																src={data.img}
																alt={data.alt}
																className="shortcut-image"
															/>
														</div>
														<ShortcutBlogDetailContainer>
															<ShortcutBlogHeading>
																{data.heading}
															</ShortcutBlogHeading>
															<ShortcutDateReadmore>
																<ShortcutDate>
																	{data.date}
																</ShortcutDate>
																<Link to="/">
																	Read More
																</Link>
															</ShortcutDateReadmore>
														</ShortcutBlogDetailContainer>
													</ShortcutBlogContainer>
												);
											})}
										</BlogShortcutLinksContainer>
									</div>
								</ToolsAndBlogs>
							</div>
						</div>
					</div>
				</BlogContent>
				<section className="suggestions">
					<div className="container">
						<SuggestionsHeading>
							Suggestion For You
						</SuggestionsHeading>
						<div className="row gx-3">
							<div className="col-12 col-md-6 col-lg-4">
								<div className="suggest-blog-container">
									<SuggestBlogImageContainer>
										<img
											src={BlogImage3}
											alt="blog image"
											className="suggest-blog-image"
										/>
									</SuggestBlogImageContainer>
									<SuggestBlogHeading>
										Egestas leo a dolor venenatis vel
										porttitor vitae suspendisse.
									</SuggestBlogHeading>
									<SuggestBlogDetail>
										Egestas leo a dolor venenatis vel
										porttitor vitae suspendisse.
									</SuggestBlogDetail>
									<DateCategory>
										<SuggestBlogDate>
											13 Sept, 2021
										</SuggestBlogDate>
										<SuggestBlogCategory>
											Technology
										</SuggestBlogCategory>
									</DateCategory>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div className="suggest-blog-container">
									<div className="suggest-blog-image-container">
										<img
											src={BlogImage3}
											alt="blog image"
											className="suggest-blog-image"
										/>
									</div>
									<h4 className="suggest-blog-heading">
										Egestas leo a dolor venenatis vel
										porttitor vitae suspendisse.
									</h4>
									<p className="suggest-blog-detail">
										Egestas leo a dolor venenatis vel
										porttitor vitae suspendisse.
									</p>
									<div className="date-category">
										<p className="suggest-blog-date">
											13 Sept, 2021
										</p>
										<p className="suggest-blog-category">
											Technology
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6 col-lg-4">
								<div className="suggest-blog-container">
									<div className="suggest-blog-image-container">
										<img
											src={BlogImage3}
											alt="blog image"
											className="suggest-blog-image"
										/>
									</div>
									<h4 className="suggest-blog-heading">
										Egestas leo a dolor venenatis vel
										porttitor vitae suspendisse.
									</h4>
									<p className="suggest-blog-detail">
										Egestas leo a dolor venenatis vel
										porttitor vitae suspendisse.
									</p>
									<div className="date-category">
										<p className="suggest-blog-date">
											13 Sept, 2021
										</p>
										<p className="suggest-blog-category">
											Technology
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</BlogDetailPageContainer> */}
		</AppLayout>
	);
};

export default Blogs;

export const Head: HeadFC = () => <title>Blogs</title>;
