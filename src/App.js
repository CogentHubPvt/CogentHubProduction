import { React, useState, useEffect } from 'react'
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
import theme from './Theme/theme'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import content from './ContentJson/content.json'
import logo from './logo.svg'

function App() {
  const [service, setService] = useState('')
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Route path="/" exact>
            <HomePage logo={logo} />
          </Route>
          <Route path="/career" exact>
            <CareerPage />
          </Route>
          <Route path="/jobs" exact>
            <JobsPage />
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
            />
          </Route>
          <Route path="/services/integratedBPO" exact>
            <ServicesPage service="IntegratedBpo" />
          </Route>
          <Route path="/services/knowledgeServices" exact>
            <ServicesPage service="KnowledgeServices" />
          </Route>
          <Route path="/services/backOfficeManagement" exact>
            <ServicesPage service="BackOfficeManagement" />
          </Route>
          <Route path="/services/frontOfficeManagement" exact>
            <ServicesPage service="FrontOfficeManagement" />
          </Route>
          <Route path="/services/bureauServices" exact>
            <ServicesPage service="BureauServices" />
          </Route>
          <Route path="/discover" exact>
            <Discover />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/addBlog" exact>
            <AddBlogPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/addJobs" exact>
            <AddJobsPage />
          </Route>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
