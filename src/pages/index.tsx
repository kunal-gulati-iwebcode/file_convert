import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroSection from "../components/HeroSection";
import ConvertFilesSection from "../components/ConvertFilesSection";
import MiddleSection from "../components/MiddleSection";
import OurToolSuiteSection from "../components/OurToolSuiteSection";
import AppLayout from "../components/AppLayout";

import { Auth0Provider } from "@auth0/auth0-react";

const IndexPage: React.FC<PageProps> = () => {

	if (typeof window !== "undefined")


	return (
		<Auth0Provider
			domain={process.env.AUTH0_DOMAIN}
			clientId={process.env.AUTH0_CLIENTID}
			redirectUri={window.location.origin}
			// redirectUri={window.location.origin}
			// onRedirectCallback={onRedirectCallback}
		>
			<AppLayout>
				<HeroSection />
				<ConvertFilesSection />
				<MiddleSection />
				<OurToolSuiteSection />
			</AppLayout>
		</Auth0Provider>
	);

	return <></>
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;