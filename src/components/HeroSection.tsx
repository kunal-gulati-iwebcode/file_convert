import * as React from "react";
import { styled } from "styled-components";
import DragDropImage from "../images/drag_drop_image.png";
import GreenBack from "../images/green_back.png";
import ExcelFront from "../images/excel_green_front.png";
import BlueBack from "../images/blue_back.png";
import WordFront from "../images/word_front.png";
import OrangeBack from "../images/orange_back.png";
import OrangeFront from "../images/orange_front.png";
import RedBack from "../images/red_back.png";
import RedFront from "../images/red_front.png";
import PurpleBack from "../images/purple_back.png";
import PurpleFront from "../images/purple_front.png";
import BirdBlueBack from "../images/bird_blue_back.png";
import BirdBlueFront from "../images/bird_blue_front.png";

import { useDropzone } from "react-dropzone";
import { useCallback, useState, useEffect } from "react";
import { fileExtensionService } from "../constants/constant";
import ConvertApi from "convertapi-js";

const ImageData = [
	{
		id: 1,
		back: GreenBack,
		front: ExcelFront,
	},
	{
		id: 2,
		back: BlueBack,
		front: WordFront,
	},
	{
		id: 3,
		back: OrangeBack,
		front: OrangeFront,
	},
	{
		id: 4,
		back: RedBack,
		front: RedFront,
	},
	{
		id: 5,
		back: PurpleBack,
		front: PurpleFront,
	},
	{
		id: 6,
		back: BirdBlueBack,
		front: BirdBlueFront,
	},
];

const StyledHeroSection = styled.section`
	background-color: #f6faff;
	/* clip-path: ellipse(100% 100% at 50% 2%); */
	/* background-color: var(--bg-color-skyblue); */

	/* @media (max-width: 320px) {
		clip-path: ellipse(100% 115% at 50% -3%);
	}

	@media (min-width: 321px) and (max-width: 585px) {
		clip-path: ellipse(100% 115% at 50% -3%);
	} */
`;

const HeroContainer = styled.div`
	padding-block: 100px;

	@media (max-width: 320px) {
		padding-block: 50px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		padding-block: 50px;
	}
`;

const HeroHeading = styled.h1`
	font-size: var(--fs-48);
	font-weight: var(--fw-400);
	color: var(--fc-black-primary);
	text-align: center;
	margin-bottom: 24px;

	span {
		color: var(--fc-blue);
	}

	@media (max-width: 320px) {
		font-size: var(--fs-24);
		margin-bottom: 16px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		font-size: 30px;
		margin-bottom: 16px;
	}
`;

const HeroSubheading = styled.p`
	max-width: 486px;
	font-size: var(--fs-14);
	font-family: var(--fw-400);
	color: var(--fc-black-secondary);
	text-align: center;
	margin-inline: auto;
	margin-bottom: 48px;

	@media (max-width: 320px) {
		font-size: 12px;
		margin-bottom: 24px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		font-size: 12px;
		margin-bottom: 24px;
	}
`;

const FileDropContainer = styled.div`
	max-width: 954px;
	border-radius: var(--br-24);
	background-color: var(--bg-color-darkblue);
	padding-block: 68px;
	margin-inline: auto;
`;

const DragDropContainer = styled.div`
	border: 1px dashed var(--bc-grey);
	padding-block: 57px;
	max-width: 485px;
	border-radius: var(--br-16);
	margin-inline: auto;
	margin-bottom: 32px;

	p {
		color: #fff;
	}

	@media (max-width: 320px) {
		max-width: 248px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		max-width: 248px;
	}
	@media (min-width: 585px) and (max-width: 768px) {
		max-width: 300px;
	}
`;

const DropImage = styled.div`
	text-align: center;
	margin-bottom: 22px;
`;

const DropHeading = styled.p`
	font-size: var(--fs-12);
	font-weight: var(--fw-400);
	color: var(--fc-white);
	text-align: center;
`;

const FileItems = styled.div`
	display: flex;
	justify-content: center;
	gap: 24px;
	margin-bottom: 18px;

	@media (max-width: 320px) {
		gap: 10px;

		.item-back {
			width: 28px;
			height: 28px;
		}

		.file-image-back {
			width: 100%;
			height: auto;
		}
	}

	@media (min-width: 321px) and (max-width: 585px) {
		gap: 10px;

		.item-back {
			width: 28px;
			height: 28px;
		}

		.file-image-back {
			width: 100%;
			height: auto;
		}
	}
`;

const FileItem = styled.div`
	position: relative;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-8px);
	}
`;

const ItemFront = styled.div`
	position: absolute;
	top: -8px;
	right: -8px;
	z-index: 1;

	@media (max-width: 320px) {
		top: -4px;
		right: -4px;
		width: 28px;
		height: 28px;

		.file-image-front {
			width: 100%;
			height: auto;
		}
	}

	@media (min-width: 321px) and (max-width: 585px) {
		top: -4px;
		right: -4px;
		width: 28px;
		height: 28px;

		.file-image-front {
			width: 100%;
			height: auto;
		}
	}
`;

const Or = styled.p`
	font-size: var(--fs-12);
	font-weight: var(--fw-500);
	color: var(--bc-grey);
	margin-bottom: 24px;
	text-align: center;
`;

const ThirdPartyOptions = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;

	@media (max-width: 320px) {
		gap: 8px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		gap: 8px;
	}
`;

const OptionBtn = styled.button`
	font-size: var(--fs-12);
	font-weight: var(--fw-500);
	color: var(--fc-black-primary);
	padding: 12px;
	background-color: var(--bg-color-white);
	border-radius: 16px;
	display: flex;
	gap: 8px;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-5px);
	}

	@media (max-width: 320px) {
		gap: 4px;
	}

	@media (min-width: 321px) and (max-width: 585px) {
		gap: 4px;
	}
`;

const Hero = () => {
	const [filePath, setFilePath] = useState("");
	const [allServices, setAllServices] = useState([]);
	const [selectService, setSelectService] = useState("");
	const [file, setFile] = useState<File | null>(null);
	const [convertedFileUrl, setConvertedFileUrl] = useState<string | null>("");



	const onDrop = useCallback((acceptedFiles: any) => {

		
		let extensionName;

		if (acceptedFiles.length === 1) {
			setFile((prev) => acceptedFiles[0])
			let fileName = acceptedFiles[0].path;
			let dotIndex = fileName.lastIndexOf(".");
			if (dotIndex > 0) {
				extensionName = fileName.substring(dotIndex + 1);
			}
		}

		setFilePath(extensionName);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	React.useEffect(() => {
		let allServiceConversion: any = null;

		for (let i = 0; i < fileExtensionService.length; i++) {
			if (fileExtensionService[i].name === filePath) {
				allServiceConversion = fileExtensionService[i].allValues;
			}
		}
		setAllServices((prev) => allServiceConversion);
		
	}, [filePath]);


	async function handleConvert() {
		if (!file) {
			return
		}
		let convertApi = ConvertApi.auth("KlyYspWs5vRJiS1k");
		let params = convertApi.createParams();
		params.add("File", file);
		let result = await convertApi.convert(filePath, selectService, params);
		setConvertedFileUrl(result.files[0].Url);
	}

	const handleDownload = () => {
		if (convertedFileUrl) {
			const link = document.createElement("a");
			link.href = convertedFileUrl;
			link.download = "converted.pdf";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	return (
		<StyledHeroSection>
			<div className="container">
				<HeroContainer>
					{convertedFileUrl ? (
						<button onClick={handleDownload} type="button">
							Download
						</button>
					) : null}
					{allServices ? (
						<>
							<StyledHeroSection>
								<div className="container">
									<HeroContainer>
										<div className="convert-choice-form">
											<form>
												<label htmlFor="convert-choice">
													Convert Your File To:
												</label>

												<select
													name="choice"
													id="convert-choice"
													value={selectService}
													onChange={(e) =>
														setSelectService(
															e.target.value
														)
													}
												>
													<option value=""></option>
													{allServices
														? allServices.map?.((service,idx) => {
																	return (
																		<option value={service} key={idx}>
																			{service}
																		</option>
																	);
																}
														    )
														: null}
												</select>
											</form>
											<button
												onClick={handleConvert}
												type="button"
											>
												Upload
											</button>
										</div>
									</HeroContainer>
								</div>
							</StyledHeroSection>
						</>
					) : (
						<>
							<HeroHeading>
								Convert <span>PDF</span> In Seconds
							</HeroHeading>
							<HeroSubheading>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut laboragna aliqua.
							</HeroSubheading>
							<FileDropContainer>
								<DragDropContainer {...getRootProps()}>
									<input {...getInputProps()} />
									{isDragActive ? (
										<>
											<DropImage>
												<img
													src={DragDropImage}
													alt="drag drop logo"
												/>
											</DropImage>
											<DropHeading>
												Drop the files here ...
											</DropHeading>
										</>
									) : (
										<>
											<DropImage>
												<img
													src={DragDropImage}
													alt="drag drop logo"
												/>
											</DropImage>
											<DropHeading>
												Drag and Drop / Paste (Ctrl+V)
											</DropHeading>
										</>
									)}
								</DragDropContainer>

								<FileItems>
									{ImageData.map((data) => {
										return (
											<FileItem key={data.id}>
												<div className="item-back">
													<img
														src={data.back}
														alt="image back"
														className="file-image-back"
													/>
												</div>
												<ItemFront>
													<img
														src={data.front}
														alt="image front"
														className="file-image-front"
													/>
												</ItemFront>
											</FileItem>
										);
									})}
								</FileItems>
								<Or>--OR--</Or>
								<ThirdPartyOptions>
									<div className="option">
										<OptionBtn className="option-btn">
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
												>
													<path
														d="M11.25 17H7C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H11.25V8.5H7C6.02778 8.5 5.20139 8.83971 4.52082 9.51913C3.84027 10.1985 3.5 11.0235 3.5 11.9941C3.5 12.9647 3.84027 13.7917 4.52082 14.475C5.20139 15.1583 6.02778 15.5 7 15.5H11.25V17ZM8.125 12.75V11.25H15.875V12.75H8.125ZM12.75 17V15.5H17C17.9722 15.5 18.7986 15.1603 19.4792 14.4809C20.1597 13.8015 20.5 12.9765 20.5 12.0059C20.5 11.0353 20.1597 10.2083 19.4792 9.525C18.7986 8.84167 17.9722 8.5 17 8.5H12.75V7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H12.75Z"
														fill="#2B2B2B"
													/>
												</svg>
											</span>
											URL
										</OptionBtn>
									</div>
									<div className="option">
										<OptionBtn className="option-btn">
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
												>
													<g clipPath="url(#clip0_104_91)">
														<mask
															id="mask0_104_91"
															// style="mask-type:luminance"
															style={{
																maskType:
																	"luminance",
															}}
															maskUnits="userSpaceOnUse"
															x="0"
															y="0"
															width="24"
															height="24"
														>
															<path
																d="M0 0H24V24H0V0Z"
																fill="white"
															/>
														</mask>
														<g mask="url(#mask0_104_91)">
															<path
																d="M15.15 1.455H8.88C8.75823 1.45755 8.63921 1.49159 8.53452 1.55382C8.42983 1.61604 8.34304 1.70433 8.28262 1.81007C8.22219 1.91581 8.19019 2.0354 8.18973 2.15719C8.18927 2.27898 8.22037 2.39881 8.28 2.505L14.985 14.115H22.89L15.75 1.8C15.69 1.69297 15.603 1.60345 15.4978 1.54031C15.3926 1.47717 15.2727 1.4426 15.15 1.44V1.455ZM7.215 3.555L0.0899965 15.855C0.0281199 15.9622 -0.00445557 16.0837 -0.00445557 16.2075C-0.00445557 16.3313 0.0281199 16.4528 0.0899965 16.56L3.12 22.185C3.24 22.395 3.48 22.545 3.72 22.545H3.735C3.99 22.545 4.23 22.41 4.35 22.2L11.175 10.395L7.2 3.555H7.215ZM23.895 15.855C23.8331 15.7508 23.7453 15.6642 23.6402 15.6038C23.5351 15.5434 23.4162 15.5111 23.295 15.51H9.87L5.82 22.56H20.265C20.52 22.56 20.76 22.41 20.865 22.185L23.91 16.56C23.9719 16.4528 24.0044 16.3313 24.0044 16.2075C24.0044 16.0837 23.9719 15.9622 23.91 15.855H23.895Z"
																fill="#2B2B2B"
															/>
														</g>
													</g>
													<defs>
														<clipPath id="clip0_104_91">
															<rect
																width="24"
																height="24"
																fill="white"
															/>
														</clipPath>
													</defs>
												</svg>
											</span>
											DRIVE
										</OptionBtn>
									</div>
									<div className="option">
										<OptionBtn className="option-btn">
											<span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
												>
													<g clipPath="url(#clip0_104_101)">
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M12.0144 14.6965L6.99 18.8959L4.8 17.4827V19.067L12 23.4L19.2 19.067V17.4827L17.0244 18.8959L12.0144 14.6965ZM24 5.30804L16.9404 0.600037L12 4.81117L19.1184 9.30121L24 5.30804ZM12 13.7907L16.9404 18.0024L24 13.2944L19.1184 9.30121L12 13.7907ZM0 13.2944L7.0596 18.0024L12 13.7907L4.88159 9.30121L0 13.2944ZM12 4.81117L4.88159 9.30121L0 5.30804L7.0596 0.600037L12 4.81117Z"
															fill="#0061FE"
														/>
													</g>
													<defs>
														<clipPath id="clip0_104_101">
															<rect
																width="24"
																height="24"
																fill="white"
															/>
														</clipPath>
													</defs>
												</svg>
											</span>
											DROPBOX
										</OptionBtn>
									</div>
								</ThirdPartyOptions>
							</FileDropContainer>
						</>
					)}
				</HeroContainer>
			</div>
		</StyledHeroSection>
	);
};

export default Hero;
