import { styled } from "styled-components";
import React, { ReactNode } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";



interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
  return (
		<>
			<Navbar />
      <main>
        {children}
      </main>
			<Footer />
		</>
  );
}

export default AppLayout