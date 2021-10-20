import { React, useState, useEffect } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { ThemeProvider } from '@material-ui/core/styles'
import HomePage from './components/pages/HomePage'
import CareerPage from './components/pages/CareerPage'
import JobsPage from './components/pages/JobsPage'
import IndustriesPage from './components/pages/IndustriesPage'
import ServicesPage from './components/pages/ServicePage'
import Discover from './components/pages/Discover'
import Login from './components/Login/Login'
import AddBlogPage from './components/pages/AddBlogPage'
import AddJobsPage from './components/pages/AddJobsPage'
import BlogsPage from './components/pages/BlogsPage'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy'
import ContactUsPage from './components/pages/ContactUsPage'
import theme from './Theme/theme'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import content from './ContentJson/content.json'
import logo from './logo.svg'
import './App.css'
import './fonts/GraphikLight.otf'
import './fonts/GraphikMedium.otf'
import './fonts/GraphikBold.otf'

function App() {
  const [service, setService] = useState('')
  const [isHeader, setIsHeader] = useState(false)
  return (
    <div style={{ fontFamily: 'Light', overflowX: 'hidden', width: 'auto' }}>
      <CookieConsent
        location="bottom"
        buttonText="I Agree"
        cookieName="cogentCookie"
        style={{ background: '#2B373B' }}
        buttonStyle={{
          color: '#4e503b',
          fontSize: '16px',
          borderRadius: '10px',
        }}
        expires={150}
      >
        This website uses cookies to ensure you get the best experience on our
        website.{' '}
      </CookieConsent>
      <Router>
        <ThemeProvider theme={theme}>
          <Route path="/" exact>
            <HomePage logo={logo} />
          </Route>
          <Route path="/career" exact>
            <CareerPage setIsHeader={setIsHeader} isHeader={isHeader} />
          </Route>
          <Route path="/jobs" exact>
            <JobsPage setIsHeader={setIsHeader} isHeader={isHeader} />
          </Route>
          <Route path="/industries/retail" exact>
            <IndustriesPage
              bannerTitle={content.RetailTitle}
              bannerSubText={content.RetailSubTitle}
              retailDataOne={content.RetailDataOne}
              retailDataTwo={content.RetailDataTwo}
              retailDataThree={content.RetailDataThree}
              retailCaptionOne={content.RetailCaptionOne}
              retailCaptionTwo={content.RetailCaptionTwo}
              retailCaptionThree={content.RetailCaptionThree}
              solutions={content.RetailSolutions}
              solutionsSubText={content.RetailSolutionsSubText}
              img={content.RetailImg}
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/industries/ecommerce" exact>
            <IndustriesPage
              bannerTitle={content.EcommerceTitle}
              bannerSubText={content.RetailSubTitle}
              retailDataOne={content.RetailDataOne}
              retailDataTwo={content.RetailDataTwo}
              retailDataThree={content.RetailDataThree}
              retailCaptionOne={content.RetailCaptionOne}
              retailCaptionTwo={content.RetailCaptionTwo}
              retailCaptionThree={content.RetailCaptionThree}
              solutions={content.EcommerceSolutions}
              solutionsSubText={content.EcommerceSolutionsSubText}
              img={content.EcommerceImg}
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/industries/foodTech" exact>
            <IndustriesPage
              bannerTitle={content.FoodTechTitle}
              bannerSubText={content.RetailSubTitle}
              retailDataOne={content.RetailDataOne}
              retailDataTwo={content.RetailDataTwo}
              retailDataThree={content.RetailDataThree}
              retailCaptionOne={content.RetailCaptionOne}
              retailCaptionTwo={content.RetailCaptionTwo}
              retailCaptionThree={content.RetailCaptionThree}
              solutions={content.FoodTechSolutions}
              solutionsSubText={content.FoodTechSolutionsSubText}
              img={content.FoodTechImg}
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/industries/travelTech" exact>
            <IndustriesPage
              bannerTitle={content.TravelTechTitle}
              bannerSubText={content.RetailSubTitle}
              retailDataOne={content.RetailDataOne}
              retailDataTwo={content.RetailDataTwo}
              retailDataThree={content.RetailDataThree}
              retailCaptionOne={content.RetailCaptionOne}
              retailCaptionTwo={content.RetailCaptionTwo}
              retailCaptionThree={content.RetailCaptionThree}
              solutions={content.TravelTechSolutions}
              solutionsSubText={content.TravelTechSolutionsSubText}
              img={content.TravelTechImg}
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/industries/edTech" exact>
            <IndustriesPage
              bannerTitle={content.EdTechTitle}
              bannerSubText={content.RetailSubTitle}
              retailDataOne={content.RetailDataOne}
              retailDataTwo={content.RetailDataTwo}
              retailDataThree={content.RetailDataThree}
              retailCaptionOne={content.RetailCaptionOne}
              retailCaptionTwo={content.RetailCaptionTwo}
              retailCaptionThree={content.RetailCaptionThree}
              solutions={content.EdTechSolutions}
              solutionsSubText={content.EdTechSolutionsSubText}
              img={content.EdTechImg}
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/services/integratedBPO" exact>
            <ServicesPage
              service="IntegratedBpo"
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/services/knowledgeServices" exact>
            <ServicesPage
              service="KnowledgeServices"
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/services/backOfficeManagement" exact>
            <ServicesPage
              service="BackOfficeManagement"
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/services/frontOfficeManagement" exact>
            <ServicesPage
              service="FrontOfficeManagement"
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/services/bureauServices" exact>
            <ServicesPage
              service="BureauServices"
              setIsHeader={setIsHeader}
              isHeader={isHeader}
            />
          </Route>
          <Route path="/discover" exact>
            <Discover setIsHeader={setIsHeader} isHeader={isHeader} />
          </Route>
          <Route path="/login" exact>
            <Login setIsHeader={setIsHeader} isHeader={isHeader} />
          </Route>
          <Route path="/addBlog" exact>
            <AddBlogPage setIsHeader={setIsHeader} isHeader={isHeader} />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage setIsHeader={setIsHeader} isHeader={isHeader} />
          </Route>
          <Route path="/addJobs" exact>
            <AddJobsPage setIsHeader={setIsHeader} isHeader={isHeader} />
          </Route>
          <Route path="/contactUs" exact>
            <ContactUsPage setIsHeader={setIsHeader} isHeader={isHeader} />
          </Route>
          <Route path="/privacyPolicy" exact>
            <PrivacyPolicy />
          </Route>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
