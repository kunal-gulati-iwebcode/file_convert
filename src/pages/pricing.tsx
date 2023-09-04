import * as React from "react";
import { styled } from "styled-components";
import AppLayout from "../components/AppLayout";
import AuthHeader from "../sections/AuthHeader";
import OurToolSuiteSection from "../components/OurToolSuiteSection";

const PricingPageContainer = styled.div`

`;



const StyledPricingSection = styled.section`
    padding-block: 50px;
`;

const PricingItemContainer = styled.div`
	padding-inline: 100px;

	@media (max-width: 992px) {
		padding-inline: 0;
	}
`;

const AllPricingContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;

	.pricing-item {
		padding-block: 48px;
		padding-inline: 16px;
		border-radius: 4px;
		background: #fff;
		box-shadow: 0px 0px 4px 0px rgba(24, 59, 86, 0.2);
		display: flex;
		flex-direction: column;
		gap: 48px;
		position: relative;
	}

	.price-focus {
		background-color: rgba(0, 97, 254, 0.05);
	}

	.recommended-price::before {
		content: "Recommended";
		width: 100%;
		position: absolute;
		top: -30px;
		left: 0px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		color: var(--fc-white);
		background-color: var(--bg-color-blue);
		text-align: center;
		padding-block: 4px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const PricingHead = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const PricingItemHeading = styled.h4`
	font-size: var(--fs-28);
	font-weight: var(--fw-500);
	margin: 0;
	text-align: center;
`;

const PricingItemSubHeading = styled.p`
	font-size: var(--fs-16);
	font-weight: var(--fw-400);
	text-align: center;
	color: var(--fc-black-secondary);
	margin: 0;
	padding-inline: 16px;
`;

const SubsPrice = styled.h5`
	color: var(--fc-black-primary);
	text-align: center;

	.currency-sign {
		font-size: var(--fs-16);
		font-weight: var(--fw-600);
	}

	.price {
		font-size: var(--fs-40);
		font-weight: var(--fw-600);
	}

	.price-timeline {
		font-size: var(--fs-20);
		font-weight: var(--fw-400);
	}
`;

const PricingButton = styled.button`
	display: inline;
	padding-block: 8px;
	padding-inline: 16px;
	border: 1px solid var(--fc-black-primary);
	border-radius: 8px;
	width: max-content;
	margin-inline: auto;
`;




const Pricing = () => {
	return (
		<AppLayout>
			<div className="pricing-page-container">
				<AuthHeader />

				<StyledPricingSection>
					<div className="container">
						<PricingItemContainer>
							<AllPricingContainer>
								<div className="pricing-item price-focus recommended-price">
									<PricingHead>
										<PricingItemHeading>
											PRO
										</PricingItemHeading>
										<PricingItemSubHeading>
											More power for small teams create
											project plans with confidence
										</PricingItemSubHeading>
									</PricingHead>
									<SubsPrice>
										<span className="currency-sign">$</span>
										<span className="price">20 </span>
										<span className="price-timeline">
											/ month
										</span>
									</SubsPrice>
									<PricingButton>
										Sign Up
									</PricingButton>
								</div>
								<div className="pricing-item">
									<PricingHead>
										<PricingItemHeading>
											Business+
										</PricingItemHeading>
										<PricingItemSubHeading>
											For companies that need to manage
											work happening across multiple
											teams.
										</PricingItemSubHeading>
									</PricingHead>
									<SubsPrice>
										<span className="currency-sign">$</span>
										<span className="price">100 </span>
										<span className="price-timeline">
											/ month
										</span>
									</SubsPrice>
									<PricingButton>
										Sign Up
									</PricingButton>
								</div>
								<div className="pricing-item">
									<PricingHead>
										<PricingItemHeading>
											Enterprise
										</PricingItemHeading>
										<PricingItemSubHeading>
											For enterprise that need additional
											security, control, and support.
										</PricingItemSubHeading>
									</PricingHead>
									<SubsPrice>
										<span className="price">Custom</span>
									</SubsPrice>
									<PricingButton>
										Sign Up
									</PricingButton>
								</div>
							</AllPricingContainer>
						</PricingItemContainer>
					</div>
				</StyledPricingSection>

                <OurToolSuiteSection />
			</div>
		</AppLayout>
	);
};

export default Pricing;
