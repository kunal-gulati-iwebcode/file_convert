import * as React from "react";
import { styled } from "styled-components";

const AccordionData = [
	{
		id: 1,
		heading: "Where can I watch?",
		detail: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
	},
	{
		id: 2,
		heading: "Tempus magna risus interdum ultricies sed urna?",
		detail: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
	},
	{
		id: 3,
		heading: "Augue in nibh urna volutpat mattis?",
		detail: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
	},
	{
		id: 4,
		heading: "Eu egestas sed sed posuere ultrices ?",
		detail: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
	},
	{
		id: 5,
		heading: " Elementum facilisi aliquam, nisi, orci vulputate?",
		detail: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
	},
	{
		id: 6,
		heading: "Nibh at odio dolor etiam neque in vel id orci?",
		detail: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
	},
	{
		id: 7,
		heading: "Non dolor at velit lorem erat maecenas?",
		detail: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
	},
];



const StyledFaqSection = styled.section`
	background-color: #f6faff;
`;



const FaqSection = () => {
	return (
		<StyledFaqSection>
			<div className="container">
				<div className="faq-container">
					<div className="faq-heading-container">
						<h3 className="faq-heading">FAQ</h3>
					</div>
					<div className="faq-accordion-container">
						<div className="accordion" id="accordionExample">
                            {
                                AccordionData.map((data, index) => {
                                    return (
										<div className="accordion-item" key={index}>
											<h2 className="accordion-header">
												<button
													className="accordion-button acc-heading collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target={`#collapse${data.id}`}
													aria-expanded="false"
													aria-controls={`collapse${data.id}`}
												>
													{data.heading}
												</button>
											</h2>
											<div
												id={`collapse${data.id}`}
												className="accordion-collapse collapse"
												data-bs-parent="#accordionExample"
											>
												<div className="accordion-body acc-para">{data.detail}
												</div>
											</div>
										</div>
									);
                                })
                            }
						</div>
					</div>
				</div>
			</div>
		</StyledFaqSection>
	);
};

export default FaqSection;
